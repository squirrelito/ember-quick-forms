import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
  prompt: 'Please select',
  contents: null,
  handleOnChange: function () {
    var self = this;
    this.get('form').$('#' + this.get('controlID')).blur(function () {
      Ember.run.next(function () {
        self.triggerShowError();
      });
    });
  },
  handleOnKey: function () {
    return false;
  },
  setUpView: function (wrapper) {
    this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-select field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-select}}'));
  }
});
