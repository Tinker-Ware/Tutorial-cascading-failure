# Tinkerware Provision Webpage

[![Build Status](https://travis-ci.org/Tinker-Ware/Tutorial-cascading-failure.svg?branch=master)](https://travis-ci.org/Tinker-Ware/Tutorial-cascading-failure)
[![Coverage Status](https://coveralls.io/repos/github/Tinker-Ware/Tutorial-cascading-failure/badge.svg?branch=master)](https://coveralls.io/github/Tinker-Ware/Tutorial-cascading-failure?branch=master)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

##Clone submodules

The `--recursive` flag should do all the work if you used it while cloning this
repo. If not, try this:

`git submodule update --init --recursive`

That will clone all the necessary submodules.

If things don't go the way you were expecting, check if you've done this
already:

`git submodule update --recursive`

That will update the submodules to make sure you're using the most recent HEAD

##Initial Machine Setup
 1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
 2. **Install [Git](https://git-scm.com/downloads)**. 
 3. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome. (Optional, but helpful. The latter offers time-travel debugging.)
 4. run `npm install` to install all the dependences.

##Usage

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works! 
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### I'm getting an error when running npm install: Failed to locate "CL.exe"
On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

##Author Information

This Tutorial is provided by the [Tinkerware](http://tinkerware.io) project
under a **The MIT** Licence.

Feel free to open a Pull Request if you see anything that you think could be improved.