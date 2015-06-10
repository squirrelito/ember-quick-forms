import Ember from 'ember';

var formComponent = null;
export default Ember.Component.extend({
    tagName: 'div',
    wrapper: 'vertical',
    for: null,
    model: null,
    init: function () {
        formComponent = this;
        var wrapper = this.get('wrapper');
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-form tagName=""}}{{yield}}{{/quick-forms/' + wrapper + '/qf-form}}'));
        this._super.apply(this, arguments);
    },
    submit: function (e) {
        e.preventDefault();
        if (formComponent.get('for')) {
            if (Ember.isNone(formComponent.get('model.validate'))) {
                formComponent.sendAction('action', formComponent.get('for'));
            } else {
                var promise = formComponent.get('model').validate();
                promise.then(function() {
                    if (formComponent.get('model.isValid')) {
                        formComponent.sendAction('action', formComponent.get('for'));
                    }
                }, function() {
                    console.log('errors');
                });
            }
        }
    }
});