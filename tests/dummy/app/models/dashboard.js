import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.Object.extend(EmberValidations, {
    validations: {
        firstName: {
            presence: true,
            length: { minimum: 5 }
        },
        lastName: {
            presence: true,
            length: { minimum: 5 }
        },
        over18: {
            presence: true,
            acceptance: { message: 'you must accept', accept: true }
        },
        relationship: {
            presence: true,
            inclusion: { in: ['1','2','3'], allowBlank: false, message: 'must be one of Single, Engaged or Divorced' }
        },
        relationship2: {
            presence: true,
            inclusion: { in: ['1','2','3'], allowBlank: true, message: 'must be one of Single, Engaged or Divorced' }
        },
        relationship3: {
            presence: true
        },
        relationship4: {
            presence: true
        },
        age: {
            numericality: true
        }
    }
});
