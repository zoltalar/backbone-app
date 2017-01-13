"use strict";

App.PersonsCollection = Backbone.Collection.extend({
    localStorage: new Store('PersonsCollection'),
    model: App.PersonModel
});