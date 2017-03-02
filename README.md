
![enter image description here](https://camo.githubusercontent.com/f1d103872f836f33dbff7a74ed819004f792a4ad/687474703a2f2f7765627061636b2e6769746875622e696f2f6173736574732f6c6f676f2e706e67)

Wild Webpack
=======================

Stack
-----

- NPM
- ESLINT (console + webpack + babel-eslint)
- Webpack
- Webpack Server + Webpack Merger
- AirBnB StyleGuide
- ES6 / Babel (Module Loading)
- SASS
- CSS




Requirements
------------

Install a few dependencies globally::

  $ npm install -g babel
  $ npm install -g webpack
  $ npm install -g webpack-dev-server
  $ npm install -g eslint


Development
-----------

Create a JS bundle with Webpack::

  $ npm run build

Start the Webpack development server on 'localhost:3000'::

  $ npm run start


Linting::

  $ npm run lint


HTML Webpack Plugin
-------------------

Installation::

  $ npm install html-webpack-plugin --save-dev

webpack.config.js::

  var HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    ...
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Website Starter',
        template: 'src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ],
  }


ES6 Imports
------------

Default import::

  import localName from 'src/my_lib';

Namespace import: imports the module as an object (with one property per named export)::

  import * as my_lib from 'src/my_lib';

Named imports::

  import { name1, name2 } from 'src/my_lib';

Renaming named imports::

  // Renaming: import `name1` as `localName1`
  import { name1 as localName1, name2 } from 'src/my_lib';
Empty import: only loads the module, doesn’t import anything. The first such import in a program executes the body of the module.
  import 'src/my_lib';

Source: http://exploringjs.com/es6/ch_modules.html

Imports for broken modules::

  require('script!objectpath/lib/ObjectPath');

Source: https://webpack.github.io/docs/shimming-modules.html


SASS Loader
-----------

Installation::

  $ npm install sass-loader --save-dev

Webpack Configuration (webpack.config.js)::

  module.exports = {
    ...
    module: {
      loaders: [
        ...
        { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
      ]
    },
    devtool: 'source-map'
  }

Javascript::

  import Styles from './styles.scss';

SASS (styles.scss)::

  body {
      padding-top: 80px;
  }



ESLint
------

Installation::

  $ npm install eslint -g

Sublime Text 3 Installation:

https://github.com/roadhump/SublimeLinter-eslint

Sources
-------

- Webpack: https://github.com/faassen/bundle_example
- Webpack and Babel6: https://github.com/rauschma/webpack-babel-demo

