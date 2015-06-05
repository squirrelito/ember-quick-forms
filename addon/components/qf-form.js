import Ember from 'ember';
import layout from '../templates/components/qf-form';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'form',
  for: null,
  classNameBindings: ['inline:form-inline:', 'horizontal:form-horizontal:'],
  inline: false,
  horizontal: false,
  init: function() {
    this._super();
  },
  willInsertElement: function() {
    this._super();
  },
  submit: function(e) {
    e.preventDefault();
    if (this.get('for')) {
      this.sendAction('action', this.get('for'));
    }
  }
});