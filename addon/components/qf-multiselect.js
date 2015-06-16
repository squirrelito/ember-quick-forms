import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
    prompt: 'Please select',
    contents: null,
    didInsertElement: function() {
        this._super.apply(this, arguments);
        var self = this;
        self.get('form').$('#' + self.get('controlID')).change(function() {
            Ember.run.next(function() {
                self.get('value').forEach(function(item, index){
                    Ember.set(self, 'value.' + index, item.id);
                });
                if (!self.get('value.length')) {
                    Ember.set(self, 'value', null);
                }
            });
        });
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
        return false;
    },
    setUpView: function(wrapper) {
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-multiselect tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-multiselect}}'));
    }
});