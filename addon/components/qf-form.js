import Ember from 'ember';

var qfFormsAssoc = qfFormsAssoc || {};
export default Ember.Component.extend({
  tagName: 'form',
  attributeBindings: ['novalidate'],
  novalidate: '',
  wrapper: 'vertical',
  for: null,
  validate: true,
  model: null,
  showAllErrors: false,
  init: function () {
    var wrapper = this.get('wrapper');
    this.set('classNames', ['form-' + wrapper]);
    this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-form}}{{yield}}{{/quick-forms/' + wrapper + '/qf-form}}'));
    this._super.apply(this, arguments);

    qfFormsAssoc[this.elementId] = this;
    this.set('model.formName', this.elementId);
    this.set('model.runValidation', this.runBackendValidation);
  },
  runBackendValidation: function () {
    qfFormsAssoc[this.get('formName')].set('showAllErrors', true);
  },
  submit: function (e) {
    e.preventDefault();
    this.set('showAllErrors', false);
    if (this.get('for')) {
      if (!this.get('validate') || Ember.isNone(this.get('model.validate'))) {
        this.set('validate', true);
        this.sendAction('action', this.get('for'), this.get('model'));
      } else {
        var promise = this.get('model').validate();
        promise.then((function (_this) {
          return function () {
            if (_this.get('model.isValid')) {
              _this.sendAction('action', _this.get('for'), _this.get('model'));
            } else {
              _this.set('showAllErrors', true);
            }
          };
        })(this), (function (_this) {
          return function () {
            _this.set('showAllErrors', true);
          };
        })(this));
      }
    }
  }
});
