module.exports = {
  description: '',
  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
  },
  afterInstall: function () {
    return this.addBowerPackageToProject('ember', '2.x');
    return this.addBowerPackageToProject('bootstrap', '3.x');
  }
};
