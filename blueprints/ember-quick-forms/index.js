module.exports = {
  description: '',
  normalizeEntityName: function () {},
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
  },
  afterInstall: function () {
    this.addBowerPackageToProject('ember', '2.x');
    this.addBowerPackageToProject('jquery', '2.x');
    this.addBowerPackageToProject('bootstrap', '3.x');
    return true;
  }
};
