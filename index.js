/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-quick-forms',
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
  }
};
