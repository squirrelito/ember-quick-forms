import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.Object.extend(EmberValidations.Mixin, {
    validations: {
        firstName: {
            presence: true,
            length: { minimum: 5 }
        },
        lastName: {
            presence: true,
            length: { minimum: 5 }
        },
        age: {
            numericality: true
        }
    }
});