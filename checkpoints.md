# [Checkpoint 10 - Boilerplate and Physical Device Testing](#checkpoint-10)

http://github.com/bltbit/showdown/tree/checkpoint-10

> Never stop forking around.

## Objectives:

- Set up your [BFD](bfd.md)
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
  - `git checkout -b my-checkpoint-10 checkpoint-10`
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

- `git checkout -b my-checkpoint-20 my-checkpoint-10`
- Move app into `pwa` subfolder
  - Duplicate `package.json` and `.gitignore`
    - Add `.firebase` to `.gitignore`
  - Move `public`, `src`, `*.json`
  - Remove `rebase` script from `pwa/package.json`
  - `cd pwa`
  - `npm i`
  - `cd ..`
  - Remove all `dependencies` from `package.json`
  - `npm i -D typescript`
  - Remove all scripts except `rebase` from `package.json`
- Create Firebase project https://console.firebase.google.com/
  - Create Firestore database (`test mode`)
- Install firebase tools
  - `npm i -g firebase-tools`
- Initialize Firebase
  - `firebase init`
    - Choose `Firestore`, `Functions`, `Hosting`, `Storage`, `Emulators`
    - Choose `Use an existing project` and choose your project
    - Accept default file locations
    - Choose `Typescript` for language
    - `Y` for `TSLint`
    - `Y` for `Install dependencies`
    - `pwa/build` for the `public directory`
    - `Y` for `Configure as a single-page app`
    - `N` for overwriting `pwa/build/index.html`
    - Accept default `storage.rules` path
    - Enable `Functions`, `Firestore`, and `Hosting` emulators
    - Accept all following defaults
    - `Y` to download emulators
- Templatize Firebase config
  - Copy `.firebaserc` to `.firebaserc.example`
  - Add `.firebaserc` to `.gitignore`
- Add Node v8 to `functions`
  - `cd functions`
  - `echo 8.15.0 > .nvmrc`
  - `nvm use`
  - `npm i`
  - `cd ..`
  - `nvm use`
- Deploy to Firebase
  - `cd pwa`
  - `npm run build`
  - `cd ..`
  - `firebase deploy --only hosting`
- Deployment Victory! `https://<project-id>.web.app/home`
- Commit your changes using VSCode
- Push your changes using VSCode
- Compare your branch to the official `checkpoint-20` branch. See any differences? Correct them.

---

# Checkpoint 30 - Your First Pull Request

http://github.com/bltbit/showdown/tree/checkpoint-30

> Only those who have learned the power of sincere and selfless contribution experience life's deepest joy: true fulfillment.

## Objectives:

- Promote your web app URL in **BitBlt's Showdown List**

## Tools introduced:

- Github pull request feature

## Steps:

- `git checkout -b my-checkpoint-30 checkpoint-30`
- Add your github username and Firebase URL to the bottom of `showdowns.json`
  - Since your project is not live yet, set `isLive` to `false`
  - Set `githubUsername` to your gthub username
  - Set a `logoUrl`. `<yourFirebaseUrl>/assets/icon/favicon.png` is a good option. If you omit this, we will use your github avatar.
  - Set a `title` to whatever you named your game. I named mine `Showdown`.
  - **[Optional]** Set `patreonUsername` if you are a [BitBlt Patron](https://www.patreon.com/bltbit). Your game will get additional promotion in this repo and on BitBlt channels after you set `isLive` to `true`.
- Commit and push your changes
- Go to your github repo URL and you will see a `Create Pull Request` button. Press it.
  - For the base branch, choose `master`

How awesome are you!! You just legitimately made a contribution to an open source project. Put that on your resume. Seriously, you just forked a repo, made a change, and sent a pull request. That's a huge flex!

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
