## Folder structure

```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── docs                      # Documentation
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Redux actions. List of distinct actions that can occur in the app.
│   ├── api                   # Apiblueprint files. Necessary files to mock service api calls. 
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # Top-level React components that interact with Redux
│   ├── middleware            # Sagas actions. List of distinct async actions that can occur in the app.
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
│   ├── utils                 # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```

## Get Started

We need to implement a new feature, the singer Katy Perry will promote some of our products. The Product Owner ask us to implement this new feature, he said that "Clients needs to identify which products are promoted by Katy Perry".

So, time to rocks.

## Instructions

We need to implement the following ranked User Stories.

1. As a Client I need to see which products were featured by Katy Perry.
2. As a Katy Perry I need to feature some product.
3. As a Client I need to have a top menu to access all feature products.

### Modify ApiBluePrint files

1. Navigate to the folder /api and open this file then modify products.apib to add feature as bool.
2. 