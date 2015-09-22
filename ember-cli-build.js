var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Any other options
  });

  /*
   This build file specifies the options for the dummy test app of this
   addon, located in `/tests/dummy`
   This build file does *not* influence how the addon or the app using it
   behave. You most likely want to be modifying `./index.js` or app's build file
   */

  app.import('bower_components/ember/ember-template-compiler.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

  return app.toTree();
};
