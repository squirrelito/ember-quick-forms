import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    hasLabel: true,
    hasErrorHint: true,
    label: null,
    field: null,
    errorOnChange: false,
    errorOnKey: false,
    showError: false,
    errorMessage: null,
    value: null,
    contents: null,
    init: function () {
        this.set('form', this.get('parentView.parentView'));
        var wrapper = this.get('form.wrapper');
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-field tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-field}}'));

        this._super.apply(this, arguments);

        this.set('controlID', 'control_' + this.elementId);
        Ember.bind(this, 'value', 'form.model.' + this.get('field'));

        this.get('form').addObserver('showAllErrors', (function(_this) {
            return function() {
                if (_this.get('form.showAllErrors')) {
                    _this.triggerShowError();
                } else if (_this.get('showError')) {
                    _this.triggerShowError();
                }
            }
        })(this));
    },
    didInsertElement: function() {
        var self = this;
        if (this.get('errorOnChange')) {
            this.get('form').$('#' + this.get('controlID')).change(function(){
                self.triggerShowError();
            });
        }
        if (this.get('errorOnKey')) {
            this.get('form').$('#' + this.get('controlID')).keyup(function(){
                self.triggerShowError();
            });
        }
    },
    triggerShowError: function() {
        var errors = this.get('form.model.errors.' + this.get('field'));
        if (errors && errors.get('firstObject')) {
            this.set('showError', true);
            this.set('errorMessage', errors.get('firstObject'));
        } else {
            this.set('showError', false);
            this.set('errorMessage', null);
        }
    }
});