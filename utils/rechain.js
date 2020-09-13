const simpleGit = require('simple-git')
const naturalSort = require('javascript-natural-sort')
naturalSort.insensitive = true
;(async () => {
  const git = simpleGit()
  await git.init()
  const branchRes = await git.branch('-l')
  const branches = Object.keys(branchRes.branches)
    .filter((k) => k.startsWith('checkpoint-'))
    .sort(naturalSort)
  branches.push('master')
  console.log(`Rechaining branches: ${branches.join(' ')}`)

  for (let i = 1; i < branches.length; i++) {
    const fromBranch = branches[i - 1]
    const toBranch = branches[i]
    console.log(`Checking out ${toBranch}`)
    await git.checkout(toBranch)
    const memo = `Merging ${fromBranch} -> ${toBranch}`
    console.log(memo)
    await git.mergeFromTo(fromBranch, toBranch, {
      '--no-commit': true,
      '--no-ff': true,
    })
    console.log(`Committing "${memo}" to ${toBranch}`)
    await git.commit(memo)
  }
  const branchNames = `origin ${branches.join(' ')}`
  console.log('Pushing branches ${branchNames}')
  await git.push(branchNames)

  const finalBranch = branches[branches.length - 2]
  console.log(`Checking out ${finalBranch}`)
  await git.checkout(finalBranch)
})()
