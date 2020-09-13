const path = require('path')
const gh = require('gh-got')
const readmeFilename = require('readme-filename')
const replace = require('replace-in-file')
const mm = require('micromatch')
const showdowns = require('../showdowns.json')

function getRepo(baton) {
  const pkg = require(path.resolve(baton.dir, 'package.json'))
  const repo = pkg.repository && (pkg.repository.url || pkg.repository)

  if (!repo) {
    throw new Error(
      `${path.join(baton.dir, 'package.json')}: repository is not set.`
    )
  }
  baton.repo = repo.replace(/https?:\/\/[^\/]+\//, '').replace('.git', '')
  return baton
}

function fetch(baton) {
  const searchParams = {
    ['per_page']: baton.limit,
  }

  return gh(`repos/${baton.repo}/contributors`, { searchParams }).then(
    (res) => {
      baton.contributors = res.body
      return baton
    }
  )
}

function filter(baton) {
  if (!baton.exclude) return baton

  const isExcluded = mm.matcher(baton.exclude)
  baton.contributors = baton.contributors.filter(
    (contrib) => !isExcluded(contrib.login)
  )
  return baton
}

function html(baton) {
  baton.html = baton.filter(baton.contributors).reduce((html, contributor) => {
    /* eslint-disable */
    const line = `
      <a href="${baton.linkTo(contributor)}">
        <img src="${baton.avatarUrl(contributor)}" title="${baton.imageTitle(
      contributor
    )}" width="${baton.size}" height="${baton.size}">
      </a>`
    /* eslint-enable */
    html += line.replace(/\n/gm, '').replace(/\s{2,}/g, '') + '\n'
    return html
  }, '')
  return baton
}

function update(baton) {
  return readmeFilename(baton.dir).then(
    (filename) =>
      new Promise((resolve, reject) => {
        replace(
          {
            files: path.resolve(baton.dir, filename),
            // eslint-disable-next-line
            from: new RegExp(
              `\\[\\/\\/\\]: ${baton.prefix}-faces(?:(?:\\n.*)+\\[\\/\\/\\]: ${baton.prefix}-faces)?`
            ),
            to: `[//]: ${baton.prefix}-faces\n${baton.html}\n[//]: ${baton.prefix}-faces`,
          },
          (err) => {
            /* istanbul ignore if  */
            if (err) return reject(err)
            baton.filename = filename
            resolve(baton)
          }
        )
      })
  )
}

function end(prop) {
  return (baton) => baton[prop]
}

function core(dir, opts) {
  opts = {
    dir: '.',
    limit: 1000,
    size: 40,
    prefix: 'contributor',
    linkTo: (contributor) => contributor.html_url,
    avatarUrl: (contributor) => contributor.avatar_url,
    imageTitle: (contributor) => contributor.login,
    filter: (contributors) => contributors,
    ...opts,
  }
  return Promise.resolve(opts).then(getRepo).then(fetch).then(filter)
}

/* ────────────────────────────────────────────────────────────────────────── */

function contributors(dir, opts) {
  return core(dir, opts).then(end('contributors'))
}

contributors.html = function (dir, opts) {
  return core(dir, opts).then(html).then(end('html'))
}

contributors.update = function (dir, opts) {
  return core(dir, opts).then(html).then(update).then(end('filename'))
}

const findShowdown = (c) => {
  const { login } = c
  return showdowns.find((s) => s.githubUsername === login)
}
const linkTo = (c) => findShowdown(c).url
const imageTitle = (c) => `${findShowdown(c).title || 'Untitled'} by ${c.login}`
const avatarUrl = (c) => findShowdown(c).logoUrl || c.avatar_url

;(async () => {
  await contributors.update('.', { size: 30 })
  await contributors.update('.', {
    size: 40,
    prefix: 'alumni',
    linkTo,
    avatarUrl,
    imageTitle,
    filter: (contributors) =>
      contributors.filter((c) => {
        const u = findShowdown(c)
        return u && u.isLive && !u.patreonUsername
      }),
  })

  await contributors.update('.', {
    size: 80,
    prefix: 'featured-alumni',
    linkTo,
    avatarUrl,
    imageTitle,
    filter: (contributors) =>
      contributors.filter((c) => {
        const u = findShowdown(c)
        return u && u.isLive && !!u.patreonUsername
      }),
  })

  await contributors.update('.', {
    size: 40,
    prefix: 'wip',
    linkTo,
    avatarUrl,
    imageTitle,
    filter: (contributors) =>
      contributors.filter((c) => {
        const u = findShowdown(c)
        return !u || !u.isLive
      }),
  })
})()
