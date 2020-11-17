# Typescript, React, Electron Prod-Ready Boilerplate

Using [webpack](https://github.com/webpack/webpack) to provide hassle-free live reloading and [electron-builder](https://github.com/electron-userland/electron-builder) for the build and publish process.

### Usage

The main and renderer process are separated and need to be launched separately.

Use `yarn` to install all dependencies in both the `main` and `renderer` folders.

**Run the React project from the renderer directory:**

```js
cd renderer
yarn // Install deps
yarn start // Start dev server
```

**Run the Electron app from the main directory:**

```js
cd main
yarn // Install deps
yarn start // Starts webpack on development mode
```

## Ready for development and production

The boilerplate gives you everything you need to immediately start development and publishing your apps without being bloated. It only gives you what you need.

Using webpack and [babel](https://babeljs.io/) for compiling and live reloading the electron app, and a pre-made HashRouter that works in both development and production right away.

#### Need to build right away?

After modifying the `electron-builder.yml` config file, you can immediately run:

```js
yarn build-electron // Builds the electron app without releasing
// OR
yarn release // Builds and published the app
```

It will build both the `main` and `renderer` files and moves over `main`'s `electron.js` file for electron-builder to do it's job.
