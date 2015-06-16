import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
    contents: null,
    didInsertElement: function() {
        this._super.apply(this, arguments);
        var self = this;
        this.get('form').$('.' + this.get('controlID')).change(function() {
            var arrayChecked = [];
            self.get('form').$('.' + self.get('controlID')).each(function (index, el) {
                if (el.checked) {
                    arrayChecked[arrayChecked.length] = self.get('contents.' + index + '.id');
                }
            });
            Ember.set(self, 'value', arrayChecked);
        });
    },
    handleOnChange: function() {
        var self = this;
        this.get('form').$('.' + this.get('controlID')).blur(function(){
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
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-checklist tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-checklist}}'));
    }
});