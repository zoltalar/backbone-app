"use stict";

App.PersonAddView = Backbone.View.extend({

    template: _.template($('#template-person-add').html()),

    render: function() {
        var template = this.template({ person: this.model.toJSON() });
        this.$el.html(template);
        return this;
    }

});