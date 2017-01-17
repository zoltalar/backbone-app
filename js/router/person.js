"use strict";

var App = {};

App.PersonRouter = Backbone.Router.extend({

    routes: {
        'person/index': 'index',
        'person/add': 'add',
        'person/edit/:id': 'edit',
        'person/delete/:id': 'delete'
    },

    $content: $('#content'),

    initialize: function() {
        this.collection = new App.PersonsCollection();
        this.collection.fetch({ ajaxSync: false });
        this.index();
        Backbone.history.start();
    },

    index: function() {
        var view = new App.PersonIndexView({ collection: this.collection });
        this.$content.html(view.render().el);
    },

    add: function() {
        var view = new App.PersonAddView({
            collection: this.collection,
            model: new App.PersonModel()
        });
        this.$content.html(view.render().el);
    },

    edit: function(id) {
        var view = new App.PersonEditView({ model: this.collection.get(id) });
        this.$content.html(view.render().el);
    },

    delete: function(id) {
        var person = this.collection.get(id);
        person.destroy();
        Backbone.history.navigate('person/index', { trigger: true });
    }

})