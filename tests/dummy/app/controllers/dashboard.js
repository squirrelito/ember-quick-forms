import Ember from 'ember';
import Model from '../models/dashboard';

export default Ember.Controller.extend({
  model: null,
  relationships: null,
  init: function () {
    this._super.apply(this, arguments);

    this.set('relationships', Ember.A([{id: '1', label: 'Single', checked: true}, {
      id: '2',
      label: 'Engaged',
      checked: false
    }, {id: '3', label: 'Divorced', checked: false}]));
    var model = Model.create({
      container: this.get('container'),
      firstName: 'asd',
      over18: true,
      age: 2,
      relationship: Ember.A(['1', '2']),
      relationship2: '1',
      relationship3: null,
      relationship4: Ember.A(['1', '2'])
    });
    this.set('model', model);
  },
  actions: {
    testAction: function (forAttribute, model) {
      alert('Successful save');
    }
  }
});
