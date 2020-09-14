# TOC

- [10 - Boilerplate and Mobile Device Testing](#10---boilerplate-and-mobile-device-testing)
- [20 - Firebase Initialization and Deployment](#20---firebase-initialization-and-deployment)
- [30 - Your First Pull Request](#30---your-first-pull-request)
- [40 - Making a Game](#40---making-a-game)
- [50 - Interactivity: Your First Click Handler](#50---interactivity-your-first-click-handler)
- [60 - Add gunshot sound](#60---add-gunshot-sound)
- [70 - Something's Wrong... More mobile device testing](#70---somethings-wrong-more-mobile-device-testing)
- [80 - Counting Bullets](#80---counting-bullets)
- [90 - Encapsulation](#90---encapsulation)
- [100 - Empty Click Sound](#100---empty-click-sound)

---

# 10 - Boilerplate and Mobile Device Testing

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
- Do some mobile device testing
  - `ngrok http 3000`
  - Desktop SSL Victory! `https://<something>.ngrok.io`
  - Mobile Device Victory! `https://<something>.ngrok.io`
- Push your `my-checkpoint-10` branch to your github fork
  - `git push`

## Review

Congratulations, you have forked a github project, run a modern responsive Progressive Web Application, and performed mobile device testing. Go eat a Jolly Rancher, you've earned it. If you're a [BitBlt Patreon supporter](https://www.patreon.com/bltbit) at any level, DM me your physical address on Patreon and and I will mail you one Jolly Rancher in the flavor of your choice of whatever I have, including rare ones. I know you might think green apple is the best flavor. But if you choose grape your cherry, I will know how serious you are about learning to program.

---

# 20 - Firebase Initialization and Deployment

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

# 30 - Your First Pull Request

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

# 40 - Making a Game

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
- Set up an `ngrok` shortcut to make it easy. We're going ot be doing a lot of mobile device testing.
  - If you want to pay for ngrok, you can choose your own subdomain. I don't think you need it. Just copy the URL into your shared phone notes.
- Why is mobile device testing so important, so early? Check it out, there's already a problem.
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

# 50 - Interactivity: Your First Click Handler

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
- Mobile device testing
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

# 60 - Add gunshot sound

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

# 70 - Something's Wrong... More mobile device testing

http://github.com/bltbit/showdown/tree/checkpoint-70

> Just when I thought I was out, they pull me back in.  
> _~Michael Corleone_

## Objectives

- Make the gunshot sound more responsive on mobile devices

## Create your branch

```
git checkout -b my-checkpoint-70 my-checkpoint-60
```

## Steps

- `npm run ngrok`
- Tap mobile device screen to hear gunshot
- Notice that there is a slight (usually 300ms) delay between the tap and the sound. We can do better!
- This is a somewhat infamous problem
- Move to `onTouchStart`

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-70`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

You just learned the difference between `onClick` and `onTouchStart`. While `onClick` might be fine for a lot of purposes, only `onTouchStart` can give the instant feedback we need in a game.

---

# 80 - Counting Bullets

http://github.com/bltbit/showdown/tree/checkpoint-80

> Many of the things you can count, don't count.  
> _~Albert Einstein_

## Objectives

- Don't allow unlimited bullets
- Learn about React hooks
- Learn about `useState`
- Learn about `useCallback`
- Learn about constants

## Create your branch

```
git checkout -b my-checkpoint-80 my-checkpoint-70
```

## Steps

- Add a `useState` and `useCallback` to manage bullet count; do not let the sound play if the revolver cylinder is empty.

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-80`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

Nice, this is starting to feel more like a revolver. It has 6 shots and then it's empty.

---

# 90 - Encapsulation

http://github.com/bltbit/showdown/tree/checkpoint-90

> If you can get today’s work done today, but you do it in such a way that you can’t possibly get tomorrow’s work done tomorrow, then you lose.  
> _~Martin Fowler_

## Objectives

- Use custom React hooks to acheive refactoring and encapsulation

## Create your branch

```
git checkout -b my-checkpoint-90 my-checkpoint-80
```

## Steps

- This is already starting to smell bad. I have revolver-specific variables and sounds in my code.
- Extract the revolver logic to a `useRevolver` hook
- Move the `useRevolver` hook to a separate file
- Consolidate revolver-related assets
- Learn about base64 URL data strings
  - Try base64 encoding the gunshot
  - `npm install image-data-uri`
  - Make experimental script (see below)
  - Try plugging in the base64 data for Howler instead of a URL or path
  - It works! Nice. Now convert it to a data file so that big blob is not sitting in our code
- Move the `Bang.mp3` asset into our revolver container
- Move our b64 conversion script into the container and modify to create the `data.ts` for us.
- Build the production copy of the PWA and see if you can spot which "chunk" is holding the mp3.
  - `find build | xargs grep OZ1ovCW0duU2ovDtWCVcJ`
  - In my case, it's in `main.046722c0.chunk.js` (8.55kb)

## Experimental script

```
const imageDataURI = require('image-data-uri')

imageDataURI
.encodeFromFile('./public/assets/sounds/Bang.mp3')

// RETURNS image data URI :: 'data:image/png;base64,PNGDATAURI/'
.then((res) => console.log(res))
```

Output:

```
data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tEZN8P8gEcRmMPQbgQwKiIACIBAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
```

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-90`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

You're on fire! You did your first refactoring. Skillful refactoring is the hallmark of a good programmer. You learned how to encapsulate both code and assets in a way that they can be included in your application while still remaining self-contained. Refactoring is tough to get right, so it's important to start with working code and change it in very small steps while verifying at each step that nothing was lost.

---

# 100 - Empty Click Sound

http://github.com/bltbit/showdown/tree/checkpoint-100

> An empty gun can tell a man a lot of things.  
> _~Paladin; Have Gun - Will Travel_

## Objectives

- Create an empty click sound
- Create an audio sprite
- Create Typescript typings
- Create utility scripts to generate audio sprites and base64 data encodings
- Create subpakcages by using nested `package.json` to help automate scripting tasks
- Patch misbehaving `npm` packages

## Tools

- audiosprite
- patch-package
- image-data-uri

## Create your branch

```
git checkout -b my-checkpoint-100 my-checkpoint-90
```

## Steps

- Find an empty clicking sound on Freesound. I used this one. https://freesound.org/s/154934/
- Massage it in Audacity
- Use the `Export > Multiple` from Audacity to export multiple `WAV` files
- Introducing audio sprites
  - What is an audio sprite?
  - We will use `audiosprite` to create a Howler-compatible audio sprite
- Automate all your asset generation
  - `cd pwa/guns/revolver`
  - `npm init` inside the `revolver/` folder
    - accept all defaults
  - `npm i -D audiosprite image-data-uri`
  - build a script to map the `build/audio.json` `src` paths to base64 URLs
  - `ac3` is not recognized by `mime-types`
    - Introducing `patch-package`
    - `npm i -g patch-package`
    - patch `mime-db`
  - Create utility to generate Typescript mappings for the sprite names
  - finalize `package.json` scripts
- Swap out current Howler config for `./build/audio.json`
  - Problem: typescript error!
    - Can hadle with `//@@ts-ignore`, but we're learning!
  - Modify `@types/howler`
    - Howler is used by the `pwa/package.json`, we must modify at that level
    - `cd ../..`
    - `patch-package @types/howler`
- Add logic for empty click

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-100`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

This was a monster of a lesson. It's a good thing we refactored so we had a nice nest to build in, right! Nothing can stop you now. You know how to write utility scripts, and not even rogue `npm` packages will keep you from succeeding.

You successfully created audio sprites and embedded them in your code, thus maintaining encapsulation principles. This isn't strictly necessary, but it's good to know how to do this because sometimes it really does make things a lot cleaner and separates concerns. It's amazing how doing the `Bang` sound was somewhat straightforward; but as soon as you want to repeat the effort, you realize it won't scale. Sometimes the 2nd or 3rd effort leads to refactoring and automation that seems overly complex is actually an investment in your future.

**[Bonus]** You patched two packages, and because you already know how to fork, clone, and create pull requests, you could even send a PR back to those package authors if you wanted to be a super good citizen. In fact, the first person to do this will receive an `iddqd` level [BitBlt Patreon](https://www.patreon.com/bltbit) status for 1 year.

---

# 110 - Adding Realism (trigger throttle)

http://github.com/bltbit/showdown/tree/checkpoint-110

> The only limitation is that which one sets up in one's own mind.  
> _~Napoleon Hill_

## Objectives

- Learn the difference between what needs to be in React state and what doesn't
- Learn how to throttle user input
- Learn about `useRef`
- Learn about `setTimeout`

## Create your branch

```
git checkout -b my-checkpoint-110 my-checkpoint-100
```

## Steps

- Load your app on a mobile device
- Drum your fingers across the screen quickly and notice how fast it shoots.
- Nobody shoots that fast, revolvers don't move that fast
- How fast _can_ someone shoot?
  - https://www.youtube.com/watch?v=WzHG-ibZaKM&ab_channel=JerryMiculek-ProShooter
  - Maybe 100ms throttle?
- Implement throttle pattern using `useRef` and `setTimeout`
  - `useState` is not a good choice because:
    - It causes unnecessary re-renders
    - Double taps can sneak in before state updates
- Retest on mobile device. Touches are blocked while the gun is busy

## Commit, Push, and Compare

- Commit your work to `my-checkpoint-110`
- Push to your fork
- Compare using a mock pull request
- Are there any unintended differences? Fix them now.
- Questions or problems? [Report an issue](https://github.com/bltbit/showdown/issues) to the Showdown repository.

## Review

If you thought this step was easy, you might be in slim company. The real subtlty to this checkpoint is understanding why `useRef` works for the `gunBusy` flag rather than having to use `useState`, and why in fact `useState` is not a good choice. Many hours are spent debugging React state, so it's critical to spend some time understanding why it works, when it works, and what other alternatives are available.

---

# XX - Template

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
