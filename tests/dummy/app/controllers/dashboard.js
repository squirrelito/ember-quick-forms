import Ember from 'ember';
import Model from '../models/dashboard';

export default Ember.Controller.extend({
    model: null,
    init: function() {
        this._super.apply(this, arguments);

        var model = Model.create({
            container: this.get('container'),
            firstName: 'asd',
            age: 2,
            profile: false
        });
        this.set('model', model);
        console.info(Ember.isNone(this.get('model.validate')));
    },
    actions: {
        aaaa: function (a,b,c) {
            console.info('asd',a,b,c);
        }
    }
});