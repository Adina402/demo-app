<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```sh
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Running the app locally

To start the app locally:

- Install dependencies - 'npm install'
- Start the app using the `start` script from `package.json` - 'npm run start'
- Navigate to http://localhost:8000/ in your browser.
- To run tests with code coverage, use the test script: npm run test

## Storybook

This project includes a small Storybook, with a Story for every component used. Check it out running the 'storybook' script and navigate to http://localhost:8080/ in your browser

## User registration and Local Storage

This app uses localStorage to store users since there is no database. To add a user, you need to register first. Once registered, your user details will be save in localStorage for use within the app.

## Hosted App

The app is also hosted here: https://adina402.github.io/demo-app/

Thank you :)

