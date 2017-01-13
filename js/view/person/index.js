"use strict";

App.PersonIndexView = Backbone.View.extend({

    events: {
        'click [data-button="person-delete"]': 'confirmDelete'
    },

    template: _.template($('#template-person-index').html()),

    render: function() {
        var template = this.template({ persons: this.collection.toJSON() });
        this.$el.html(template);
        return this;
    },

    confirmDelete: function() {
        return confirm('Are you sure you want to delete this person?');
    }

});