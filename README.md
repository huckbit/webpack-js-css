# Webpack ES6 and Sass compiler
Use this config as a starter point to compile Javascript ES6 and Sass using webpack

# SASS Compiler
Webpack compile sass in a separate css file and use `Autoprefixer`

### First steps
Dependencies installation:
```shell
npm install
```

### sass partial file
Use full path to include a partial
```$sass
@import "./foundation/_variables.scss";
```

### Build and watch the project
To start watching and compile the app run:

```shell
npm run webpack
```

### Configuration file
Modify the webpack configuration file `webpack.config.js` to change or add more options. [Official doc](https://webpack.js.org/concepts/)


#### Mode production/development
Bye default webpack is set to `development` change inside `webpack.config.js` the property mode from `development` to `production` this will also [minify the output](https://webpack.js.org/guides/tree-shaking/#minify-the-output) by default.

### link the app
link the the app inside the project:

```html
<script src="dist/app.bundle.js"></script>
```
Use the minified version using mode -> production

### link css 
```html
<link rel="stylesheet" href="dist/css/main.css">
```

### NOTE: change mode to production before for production

###### Last update 24th of May 2019
