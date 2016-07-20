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

### 1. Modify ApiBluePrint files.

#### Modify Products API

1. Navigate to the folder /api and open products.apib in the editor.
2. Modify this file to add feature as bool.
3. Add feature: true to the products with ids 1, 4 and 7.
4. Save the file.
5. Restart the mock-server service.
6. Verify the response making a call to /api/v1/products

#### Modify Cart API

1. Navigate to the folder /api and open cart.apib in the editor.
2. Modify this file to add feature as bool.
3. Add feature: true to the products with ids 2 and 5.
4. Save the file.
5. Restart the mock-server service.
6. Verify the response making a call to /api/v1/cart
 
### 2. Add feature path.

1. Navigate to the folder /src and open routes.js in the editor.
2. Modify this file to add the path /feature.
3. Save the file.

### 3. Add feature menu.

1. Navigate to the folder /src/components and open header.js in the editor.
2. Modify this file to add Link component to /feature.
3. Save the file.

### 4. Add feature-product styles.

1. Navigate to the folder /src/components and open header.js in the editor.
2. Modify this file nesting the class feature-product to mid-pop adding the following styles:
  1. Position absolute.
  2. Top -4px.
  3. Right -4px.

### 5. Add feature image to Product component.

1. Navigate to the folder /src/components and open ProductItem.js in the editor.
2. Modify this file adding the PropType for feature props.
3. Create a const called PrintFeatureItem to be equal to:
  1. Add an span tag with ClassName feature-product.
  2. Into span tag add the image tag with src images/feature_product.png.
4. Print PrintFeatureItem below the div with className mid-pop
Tip: Feature image tag needs to be show only if props.feature is true. 

### 6. Add validation for pathname /feature and add them to Content component.

1. Navigate to the folder /src/components and open MainStore.js in the editor.
2. Add validation for the path /feature into the const MainPageContent.
3. Add the props filter that needs to be equal to the current pathname to Content component.
Tip: Do not forget that if the current pathname is /feature filter need to be equal to Feature before assign this props.