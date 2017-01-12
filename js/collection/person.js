"use strict";

App.PersonsCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('PersonsCollection'),
    model: App.PersonModel
});