"use strict";

App.PersonIndexView = Backbone.View.extend({

    template: _.template($('#template-person-index').html()),

    render: function() {
        var template = this.template({ persons: this.collection.toJSON() });
        this.$el.html(template);
        return this;
    }

});