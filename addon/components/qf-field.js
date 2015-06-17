import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    type: 'text',
    hasLabel: true,
    hasErrorHint: true,
    label: null,
    field: null,
    errorOnChange: true,
    errorOnKey: true,
    showError: false,
    errorMessage: null,
    value: null,
    init: function () {
        if (this.get('parentView.parentView')) {
            this.set('form', this.get('parentView.parentView'));
        } else {
            this.set('form', this.get('parentView'));
        }

        this.setUpView(this.get('form.wrapper'));

        this._super.apply(this, arguments);

        this.set('controlID', 'control_' + this.elementId);
        this.bindValue();

        this.get('form').addObserver('showAllErrors', (function(_this) {
            return function() {
                if (_this.get('form.showAllErrors')) {
                    _this.triggerShowError();
                } else if (_this.get('showError')) {
                    _this.triggerShowError();
                }
            };
        })(this));
    },
    didInsertElement: function() {
        if (this.get('errorOnChange')) {
            this.handleOnChange();
        }
        if (this.get('errorOnKey')) {
            this.handleOnKey();
        }
    },
    bindValue: function() {
        Ember.bind(this, 'value', 'form.model.' + this.get('field'));
    },
    handleOnChange: function() {
        var self = this;
        this.get('form').$('#' + this.get('controlID')).change(function(){
            Ember.run.next(function() {
                self.triggerShowError();
            });
        });
    },
    handleOnKey: function() {
        var self = this;
        this.get('form').$('#' + this.get('controlID')).keyup(function(){
            Ember.run.next(function() {
                self.triggerShowError();
            });
        });
    },
    setUpView: function(wrapper) {
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-field tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-field}}'));
    },
    triggerShowError: function() {
        var errors = this.get('form.model.errors.' + this.get('field'));
        if (errors && errors.length > 0) {
            this.set('showError', true);
            this.set('errorMessage', errors.get('firstObject'));
        } else {
            this.set('showError', false);
            this.set('errorMessage', null);
        }
    }
});