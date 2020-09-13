# TOC

- [10 - Boilerplate and Physical Device Testing](#checkpoint-10)
- [20 - Firebase Initialization and Deployment](#checkpoint-20)
- [30 - Your First Pull Request](#checkpoint-30)
- [40 - Making a Game](#checkpoint-40)

---

# [10 - Boilerplate and Physical Device Testing](#checkpoint-10)

http://github.com/bltbit/showdown/tree/checkpoint-10

> Never stop forking around.

## Objectives

- Set up your [BFD](bfd.md)
- Run a modern web app
- Test your app locally and on mobile devices early and often
- Fork a github repo
- Clone a remote repo
- Use a command line interface
- Create a local git branch and pus it to your fork

## Tools

- git
- VSCode
- github account
- nvm
- command line interface (terminal)

## Steps

- How this course is structured - philosophy of small iterations
- Introduce the BFD
- Introduce VSCode and essential plugins
- Introduce node command line
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
- Introduce `package.json`
- Introduce utility scripts to maintain merge chain
- Introduce `prettier` and `prettier-plugin-organize-imports`
- Do some physical device testing
  - `ngrok http 3000`
  - Desktop SSL Victory! `https://<something>.ngrok.io`
  - Mobile Device Victory! `https://<something>.ngrok.io`
- Push your `my-checkpoint-10` branch to your github fork
  - `git push`

## Review

Congratulations, you have forked a github project, run a modern responsive Progressive Web Application, and performed physical device testing. Go eat a Jolly Rancher, you've earned it. If you're a [BitBlt Patreon supporter](https://www.patreon.com/bltbit) at any level, DM me your physical address on Patreon and and I will mail you one Jolly Rancher in the flavor of your choice of whatever I have, including rare ones. I know you might think green apple is the best flavor. But if you choose grape your cherry, I will know how serious you are about learning to program.

---

# [20 - Firebase Initialization and Deployment](#checkpoint-20)

http://github.com/bltbit/showdown/tree/checkpoint-20

> Deploy early, deploy often.

## Objectives

- Create a Firebase project
- Deploy to Firebase

##Tools and Concepts

- Firebase account
- Firebase Tools CLI

## Steps

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
- Introduce `nvm` and node versioning
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
- Compare your branch to the official `checkpoint-20` branch. See any unintended differences? Correct them.

---

# [30 - Your First Pull Request](#checkpoint-30)

http://github.com/bltbit/showdown/tree/checkpoint-30

> Only those who have learned the power of sincere and selfless contribution experience life's deepest joy: true fulfillment.

## Objectives

- Promote your web app URL in **BitBlt's Showdown List**

## Tools

- Github pull request feature

## Steps

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

## Review

How awesome are you!! You just legitimately made a contribution to an open source project. Put that on your resume. Seriously, you just forked a repo, made a change, and sent a pull request. That's a huge flex!

---

# [40 - Making a Game](#checkpoint-40)

> It's not the notes you play, it's the notes you don't play.
> _~Miles Davis_

## Objectives

- Establish a blank canvas
- Prevent device-specific quirks up front

## Tools

- Emotion
- CSS

## Create your branch

```
git checkout -b my-checkpoint-40 my-checkpoint-30
```

## Steps

- Why a game? Because it is fun and uses EVERYTHING!
- What are we making? A quickdraw game
  - Target practice
  - Networked
  - App store
- We'll take this from a mobile Progressive Web App all the way to the Apple and Google app stores (optional)
- You'll learn a ton of relevant techniques, gain skills, and experience at the same time. You'll ship something, and that's impressive.
- `cd pwa`
- Set up an `ngrok` shortcut to make it easy. We're going ot be doing a lot of physical device testing.
  - If you want to pay for ngrok, you can choose your own subdomain. I don't think you need it. Just copy the URL into your shared phone notes.
- Why is physical device testing so important, so early? Check it out, there's already a problem.
  - On Mobile Safari (iOS), there is a behavior called `overscroll` where the view bounces a bit when you swipe. That might be okay for a web page, but we don't want our app or mobile game to feel that way.
  - Disable overscroll
- Create a blank canvas

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-40`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

Starting with a solid foundation is important because it saves time later and reduces frustrating debugging of issues that went unnoticed for too long.

---

# [50 - Interactivity: Your First Click Handler](#checkpoint-50)

http://github.com/bltbit/showdown/tree/checkpoint-50

> Touch has a memory.
> _~John Keats_

## Objectives

- View the Chrome debugger
- Observe events and console log them
- Understand mobile device debugging
- Understand React `onClick` events

## Tools

- Chrome debugger
- Safari debugger
- React

## Create your branch

```
git checkout -b my-checkpoint-50 my-checkpoint-40
```

## Steps

- Add a click handler
- Understand event callbacks
- Open the Chrome debugger
  - Observe the console logging area
- Physical device testing
  - Here's how to do it on iOS https://appletoolbox.com/use-web-inspector-debug-mobile-safari/
  - You may need to figure out what it is for your phone and devbox

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-50`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

Now you know a critical tool for programming web and hybrid mobile apps - the JavaScript console!

---

# [60 - Add gunshot sound](#checkpoint-50)

http://github.com/bltbit/showdown/tree/checkpoint-60

> Suddenly, a shot rang out! A door slammed. The maid screamed.
> _~Charles M. Schultz_

## Objectives

- Sound a gunshot when the user taps the screen

## Tools

- Freesound
- Audacity
- Howler

## Create your branch

```
git checkout -b my-checkpoint-60 my-checkpoint-50
```

## Steps

- Search for a cool gunshot sound on Freesound. I picked https://freesound.org/people/schots/sounds/382735/
- Create `assets` folder to store original sounds
- Make an `attribution.md` file to store attributions
- Create Audacity project
- Import gunshot sound
- Trim/edit sound as needed
- Export to `pubic/assets/sounds/Bang.mp3`
- `npm install howler @types/howler`
- Introduce DefinitelyTyped https://github.com/DefinitelyTyped/DefinitelyTyped
- Update click handler to play howler sound

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-60`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

Wow! You just learned how to edit sounds like a pro, which basically means you can create your own sounds now. You also learned how to play sounds in response to user actions. You learned where to find free sounds. It's been a pretty good day.

## Bonus Mission

Do you own a gun or several? Go squeeze off a few rounds this weekend and record it. Record other gun sounds too, like various clicks and reloading. Then, upload it to Freesounds and add a section to our `readme.md` under a heading of "Origianl Student Sounds". Send a pull request! If you do this and it's a clean recording, I'll give you 1 year of `idkfa` on [BitBlt Patron](https://www.patreon.com/bltbit).

---
# [XX - Template](#checkpoint-XX)

http://github.com/bltbit/showdown/tree/checkpoint-XX

> Quote

## Objectives

-

## Tools

-

## Create your branch

```
git checkout -b my-checkpoint-XX my-checkpoint-YY
```

## Steps

-

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-XX`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

---
