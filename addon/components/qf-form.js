import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    wrapper: 'vertical',
    for: null,
    validate: true,
    model: null,
    showAllErrors: false,
    init: function () {
        var wrapper = this.get('wrapper');
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-form tagName=""}}{{yield}}{{/quick-forms/' + wrapper + '/qf-form}}'));
        this._super.apply(this, arguments);

        this.set('model.backendValidationErrors', false);
        this.get('model').addObserver('backendValidationErrors', (function(_this) {
            return function() {
                if (_this.get('model.backendValidationErrors')) {
                    _this.set('showAllErrors', false);
                    _this.set('showAllErrors', true);
                }
            };
        })(this));
    },
    submit: function (e) {
        e.preventDefault();
        this.set('showAllErrors', false);
        if (this.get('for')) {
            if (!this.get('validate') || Ember.isNone(this.get('model.validate'))) {
                this.set('validate', true);
                this.set('model.backendValidationErrors', false);
                this.sendAction('action', this.get('for'), this.get('model'));
            } else {
                this.set('model.backendValidationErrors', false);
                var promise = this.get('model').validate();
                promise.then((function(_this) {
                    return function() {
                        if (_this.get('model.isValid')) {
                            _this.sendAction('action', _this.get('for'), _this.get('model'));
                        } else {
                            _this.set('showAllErrors', true);
                        }
                    };
                })(this), (function(_this) {
                    return function() {
                        _this.set('showAllErrors', true);
                        console.log('Form objected detected errors!');
                    };
                })(this));
            }
        }
    }
});