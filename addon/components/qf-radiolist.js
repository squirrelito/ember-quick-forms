import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
    contents: null,
    didInsertElement: function() {
        this._super.apply(this, arguments);
        this.get('form').$('.' + this.get('controlID') + '[value=' + this.get('value') + ']').attr('checked', 'checked');
    },
    handleOnChange: function() {
        var self = this;
        this.get('form').$('.' + this.get('controlID')).change(function(){
            self.set('value', this.value);
            self.set('form.model.' + self.get('field'), this.value);
            Ember.run.next(function() {
                self.triggerShowError();
            });
        });
    },
    handleOnKey: function() {
        var self = this;
        this.get('form').$('.' + this.get('controlID')).blur(function(){
            Ember.run.next(function() {
                self.triggerShowError();
            });
        });
    },
    setUpView: function(wrapper) {
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-radiolist tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-radiolist}}'));
    }
});