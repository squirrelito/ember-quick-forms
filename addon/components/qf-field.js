import Ember from 'ember';
import layout from '../templates/components/qf-field';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  label: null
});