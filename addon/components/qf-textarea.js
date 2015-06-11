import Ember from 'ember';
import QuickFormsField from './qf-field'

export default QuickFormsField.extend({
    setUpView: function(wrapper) {
        this.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-textarea tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-textarea}}'));
    }
});