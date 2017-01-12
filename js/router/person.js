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

        var Wojtek = new App.PersonModel();
        Wojtek.setId(1);
        Wojtek.setFirstName('Wojciech');
        Wojtek.setLastName('Pirog');
        Wojtek.setAge(36);
        Wojtek.setOccupation('Web Developer');

        var Marcin = new App.PersonModel();
        Marcin.setId(2);
        Marcin.setFirstName('Marcin');
        Marcin.setLastName('Pirog');
        Marcin.setAge(33);
        Marcin.setOccupation('Police Officer');

        this.collection.add([Wojtek, Marcin]);

        this.index();
        Backbone.history.start();
    },

    index: function() {
        var view = new App.PersonIndexView({ collection: this.collection });
        this.$content.html(view.render().el);
    },

    add: function() {
        var view = new App.PersonAddView({ model: new App.PersonModel() });
        this.$content.html(view.render().el);
    }

})