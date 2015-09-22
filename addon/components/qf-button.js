import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  validate: true,
  label: null,
  name: null,
  init: function () {
    if (this.get('parentView.parentView')) {
      this.set('form', this.get('parentView.parentView'));
    } else {
      this.set('form', this.get('parentView'));
    }

    this.setUpView();

    this._super.apply(this, arguments);
  },
  click: function (e) {
    this.set('form.for', this.name);
    this.set('form.validate', this.validate);
    this.get('form').submit(e);
  },
  setUpView: function () {
    this.set('layout', Ember.Handlebars.compile('{{#quick-forms/qf-button field=this}}{{yield}}{{/quick-forms/qf-button}}'));
  }
});
