'use strict';

const { Webpack } = require('@embroider/webpack');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    "ember-cli-babel": {
      enableTypeScriptTransform: true
    }
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {

  });
};
