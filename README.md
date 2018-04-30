# Welcome to the Simpplr JS Refactor Exercise!

The point of this exercise is for us to see how keen your bug spotting eye is; how familiar you are with Javascript's various gotchas and how you work with other people's code (particularly when it's a mess)!

We are aware of many issues in this codebase, you won't be able to fix them all in 2 hours; we're looking to see where you spend your time and what you think the most important problems are. Issues can be legitimate bugs; flimsy code that could easily break; using bad practices and otherwise badly factored code.

## What is this application?

This is a simple todo list application that saves to `sessionStorage`. When an item is completed, it moves below the list of incomplete items. The user should be able to add new todos and see how many todos are complete. And that's about all there is to it!

## Before you begin

Firstly, **create a branch for your work** - you will be submitting via a Pull Request so it's important you work in a separate branch. It doesn't matter what you call it.

This repository fork has been created specifically for you - no other candidates will ever be able to see your work.

The rules for this exercise are as follows:

1. Only work inside the `src/` directory - ignore all files outside of this
2. Ignore the CSS & markup - we only want you to refactor the Javascript code
3. Don't completely rewrite the code - just refactor what's already there
4. Don't add any additional 3rd party libraries
5. You may use ES2016 / Babel
6. Try to make small commits (i.e. for each change) so we can see how you work more easily
7. Don't spend more than 2 hours on this exercise

## Running the application

After you've cloned your branch locally, you need to run it. This is easily done with either NPM or Yarn. Run the following commands in the repository directory. You will need to have either NPM or Yarn installed globally.

### NPM

```
npm install
npm start
```

### Yarn

```
yarn
yarn start
```

## Submitting your work

When you're ready to submit you should create a Pull Request in BitBucket to merge your branch into `master`. Once you've made the Pull Request, go through the diff and add inline comments to explain your changes: we want to know why you made each change.

Once that's done, send a link to the pull request to [jobs.uk@simpplr.com](mailto:jobs.uk@simpplr.com) and also include an answer to the following question:

> ***If you could rewrite this project from scratch, what would you do differently?***
