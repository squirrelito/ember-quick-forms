module.exports = {
  description: '',
  normalizeEntityName: function () {},
  afterInstall: function () {
    return this.addBowerPackagesToProject([
      {'name':'ember', 'target': '2.x'},
      {'name':'jquery', 'target': '2.x'},
      {'name':'bootstrap', 'target': '3.x'}
    ]);
  }
};
