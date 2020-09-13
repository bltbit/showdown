# [Checkpoint 10 - Boilerplate and Physical Device Testing](#checkpoint-10)

http://github.com/bltbit/showdown/tree/checkpoint-10

> Never stop forking around.

## Objectives:

- Set up your BFD
- Run a modern web app
- Test your app locally and on mobile devices early and often
- Fork a github repo
- Clone a remote repo
- Use a command line interface
- Create a local git branch and pus it to your fork

## Tools introduced:

- git
- VSCode
- github account
- nvm
- command line interface (terminal)

## Steps:

- Try creating your own Ionic project
  - Open your command line interface (terminal)
  - `nvm use 12.14.1`
  - `npm i -g ionic`
  - `ionic start myshowdown`
  - `cd myshowdown`
  - `npm run start`
  - Desktop Victory! http://localhost:3000
- Remove Ionic test program
  - `cd ..`
  - `rm -rf myshowdown`
- Run course version instead
  - Fork http://github.com/bltbit/showdown
  - `git clone git@github.com/<yourusername>/showdown.git`
  - `git checkout checkpoint-10`
  - `git checkout -b my-checkpoint-10`
  - `nvm use`
  - `npm i`
  - `npm run start`
  - Desktop Victory! http://localhost:3000
- Do some physical device testing
  - `ngrok http 3000`
  - Desktop SSL Victory! `https://<something>.ngrok.io`
  - Mobile Device Victory! `https://<something>.ngrok.io`
- Push your `myshowdown` branch to your github fork
  - `git push`

Congratulations, you have forked a github project, run a modern responsive Progressive Web Application, and performed physical device testing. Go eat a Jolly Rancher, you've earned it. If you're a [BitBlt Patreon supporter](https://www.patreon.com/bltbit) at any level, DM me your physical address on Patreon and and I will mail you one Jolly Rancher in the flavor of your choice of whatever I have, including rare ones. I know you might think green apple is the best flavor. But if you choose grape your cherry, I will know how serious you are about learning to program.

---

# [Checkpoint 20 - Firebase Initialization and Deployment](#checkpoint-20)

http://github.com/bltbit/showdown/tree/checkpoint-20

> Deploy early, deploy often.

## Objectives:

- Create a Firebase project
- Deploy to Firebase

## Tools introduced:

- Firebase account
- Firebase Tools CLI

## Steps:

- `git checkout my-checkpoint-10`
- `git checkout -b my-checkpoint-20`
- Move app into `pwa` subfolder
- Create Firebase project
- Initialize Firebase
- Deploy to Firebase
- Deployment Victory! `https://<projectname>.firebase.io`
- Commit your changes using VSCode
- Push your changes using VSCode
- Compare your branch to the official `checkpoint-20` branch. See any differences? Correct them.

---

# Checkpoint 30 - Your First Pull Request

## Tools introduced:

- VSCode
- git
- github account
- Firebase account

http://github.com/bltbit/showdown/tree/checkpoint-30

- Fork http://github.com/bltbit/showdown
-

# Checkpoint 20 - Add course files

http://github.com/bltbit/showdown/tree/checkpoint-20`

- How this course is structured - philosophy of small iterations
- Introduce utility scripts to maintain rebase chain
- Introduce node command line
- Introduce VSCode and essential plugins
- Introduce `prettier` and `prettier-plugin-organize-imports`
- Introduce `nvm` and node versioning
- Introduce `package.json` scripts
- Introduce the BFD
