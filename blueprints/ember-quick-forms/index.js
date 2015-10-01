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
    return this.addBowerPackagesToProject([
      {'name':'ember', 'target': '2.x'},
      {'name':'jquery', 'target': '2.x'},
      {'name':'bootstrap', 'target': '3.x'}
    ]);
  }
};
