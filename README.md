# Webpack ES6 and Sass compiler
Use this config as a starter point to compile Javascript ES6 and Sass using webpack. Webpack compile sass in a separate css file with `Autoprefixer` and `source map`.

### Build and watch the project
To start watching and compile the app run:

```shell
npm run webpack
```

### Configuration file
Modify the webpack configuration file `webpack.config.js` to change or add more functionality. [Official doc](https://webpack.js.org/concepts/)

## Change mode to production to minify the code
#### Mode production/development
By default, webpack is set to `development` change inside `webpack.config.js` the property mode from `development` to `production` this will also minify all the javascript and css files.

### link app and vendor files
link the app inside the project:

```html
<script src="dist/app.js"></script>
<script src="dist/vendor.js"></script>
```


### link css file
```$html
<link rel="stylesheet" href="dist/css/main.css">
```


If the file name it's the same for both, javascript and css files (for example `main.js` and `main.css`) use:
```$javascript
entry: {
  main: ["./main.js","./sass/main.scss"],  
}
```

###### Last update 4th of June 2019
