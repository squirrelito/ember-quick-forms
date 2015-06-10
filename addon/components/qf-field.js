import Ember from 'ember';

var fieldComponent;
export default Ember.Component.extend({
    tagName: '',
    label: 'asasdasd',
    field: null,
    init: function () {
        fieldComponent = this;
        fieldComponent.set('form', fieldComponent.get('parentView.parentView'));
        var wrapper = fieldComponent.get('form.wrapper');
        fieldComponent.set('layout', Ember.Handlebars.compile('{{#quick-forms/' + wrapper + '/qf-field tagName="" field=this}}{{yield}}{{/quick-forms/' + wrapper + '/qf-field}}'));

        fieldComponent._super.apply(fieldComponent, arguments);

        fieldComponent.set('controlID', 'control_' + fieldComponent.elementId);
        fieldComponent.set('value', fieldComponent.get('form.model.' + fieldComponent.get('field')));
        fieldComponent.get('form.model').addObserver(fieldComponent.get('field'), function() {
            fieldComponent.set('value', fieldComponent.get('form.model.' + fieldComponent.get('field')));
        });
    }
});