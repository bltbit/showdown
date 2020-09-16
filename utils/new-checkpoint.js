const simpleGit = require('simple-git')
const naturalSort = require('javascript-natural-sort')
const fs = require('fs')
const path = require('path')
naturalSort.insensitive = true
;(async () => {
  const git = simpleGit()
  await git.init()
  const branchRes = await git.branch('-l')
  const branches = Object.keys(branchRes.branches)
    .filter((k) => k.startsWith('checkpoint-'))
    .sort(naturalSort)
    .reverse()
  const latestCheckpoint = branches[0].match(/\d+/)[0] * 1
  const nextCheckpoint = latestCheckpoint + 10
  await git.checkoutBranch(
    `checkpoint-${nextCheckpoint}`,
    `checkpoint-${latestCheckpoint}`
  )
  const s = fs
    .readFileSync(path.resolve(__dirname, '../docs/c/_cp.md'))
    .toString()
    .replace(/XX/g, nextCheckpoint)
    .replace(/YY/g, latestCheckpoint)
  fs.writeFileSync(
    path.resolve(__dirname, `../docs/c/cp${nextCheckpoint}.md`),
    s
  )
})()
