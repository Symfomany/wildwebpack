![enter image description here](https://cloudinary-a.akamaihd.net/bountysource/image/gravatar/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/8e13067d3e8d41672ae8fbd5637d836a)

![enter image description here](http://egorsmirnov.me/images/posts/js.png)

![enter image description here](http://www.blogdev.fr/images/logo/sass.png)
Wild Webpack Project
=======================

Stack
-----

- Node with NPM (scripts)
- Multiple Environments (Dev , Prod...)
- Webpack
- Webpack Server + Webpack Merger + HMR
- ESLINT (console + webpack + babel-eslint) follow StyleGuide
- AirBnB StyleGuide
- ES6 / Babel (Module Loading)
- SASS or CSS


Recommandations
------------

Work in /src directory (css, img, fonts) and that's all!


Permission Issues
------------
Fixing npm permissions

1. Find the path to npm's directory:
```
 npm config get prefix
```

2. Change the owner of npm's directories to the name of the current user
```
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```



Requirements
------------

Install a few dependencies globally::

  $ npm install -g babel
  $ npm install -g webpack
  $ npm install -g webpack-dev-server
  $ npm install -g eslint
  $ npm install -g imagemin

Maybe, you shoud update/upgrade your Node.JS

```
npm install -g n
n latest
npm install npm@latest -g
```

Development
-----------

Create a JS bundle with Webpack::

  $ npm run build

Start the Webpack development server on 'localhost:3000'::

  $ npm run start


Linting::
------------------
  $ npm run lint



Utils
------------------
How to kill on port
```
  fuser -n tcp -k 3000
```


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

