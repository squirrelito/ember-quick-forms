import Ember from 'ember';
import QuickFormsField from './qf-field';

export default QuickFormsField.extend({
    handleOnChange: function() {
        var self = this;
        this.get('form').$('#' + this.get('controlID')).click(function(){
            Ember.run.next(function() {
                self.triggerShowError();
            });
        });
    },
    handleOnKey: function() {
        return;
    },
    setUpView: function(wrapper) {
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-checkbox tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-checkbox}}'));
    }
});