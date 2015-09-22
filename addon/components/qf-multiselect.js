import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
  prompt: 'Please select',
  contents: null,
  didInsertElement: function () {
    this._super.apply(this, arguments);
    var self = this;
    self.get('form').$('#' + self.get('controlID')).blur(function () {
      var value = [];
      self.get('form').$('#' + self.get('controlID') + ' :selected').each((ind, el) => {
        value[value.length] = self.get('form').$(el).val();
      });
      Ember.set(self, 'value', value);
      Ember.run.next(function () {
        self.triggerShowError();
      });
    });
  },
  handleOnChange: function () {
    var self = this;
    this.get('form').$('#' + this.get('controlID')).change(function () {
      Ember.run.next(function () {
        self.triggerShowError();
      });
    });
  },
  handleOnKey: function () {
    return false;
  },
  setUpView: function (wrapper) {
    this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-multiselect field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-multiselect}}'));
  }
});
