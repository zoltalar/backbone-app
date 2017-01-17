"use stict";

App.PersonEditView = Backbone.View.extend({

    events: {
        'click #button-person-edit': 'edit'
    },

    template: _.template($('#template-person-edit').html()),

    initialize: function() {
        this.model.bind('invalid', App.Helpers.errors, App.Helpers);
    },

    render: function() {
        var template = this.template({ person: this.model.toJSON() });
        this.$el.html(template);
        return this;
    },

    edit: function(event) {
        event.stopPropagation();
        event.preventDefault();

        var firstName = this.$el.find('#input-first-name').val();
        var lastName = this.$el.find('#input-last-name').val();
        var age = this.$el.find('#input-age').val();
        var occupation = this.$el.find('#input-occupation').val();

        this.model.set('firstName', firstName);
        this.model.set('lastName', lastName);
        this.model.set('age', age);
        this.model.set('occupation', occupation);

        if (this.model.isValid()) {
            this.model.save();
            Backbone.history.navigate('person/index', { trigger: true });
        }
    }
});