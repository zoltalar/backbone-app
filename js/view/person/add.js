"use stict";

App.PersonAddView = Backbone.View.extend({

    events: {
        'click #button-person-add': 'add'
    },

    template: _.template($('#template-person-add').html()),

    initialize: function() {
        this.model.bind('invalid', App.Helpers.errors, App.Helpers);
    },

    render: function() {
        var template = this.template({ person: this.model.toJSON() });
        this.$el.html(template);
        return this;
    },

    add: function(event) {
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
            this.collection.add(this.model);
            this.model.save();
            Backbone.history.navigate('person/index', { trigger: true });
        }
    }
});