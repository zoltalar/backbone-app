"use strict";

App.PersonModel = Backbone.Model.extend({

    // Set model defaults
    defaults: {
        'id': 0,
        'firstName': '',
        'lastName': '',
        'age': 0,
        'occupation': ''
    },

    validate: function(attributes) {
        var errors = {};

        if ( ! attributes.firstName) {
            errors.firstName = 'Please enter your first name';
        }
        if ( ! attributes.lastName) {
            errors.lastName = 'Please enter your last name';
        }
        if ( ! attributes.age) {
            errors.age = 'Please enter your age';
        }
        if ( ! attributes.occupation) {
            errors.occupation = 'Please enter your occupation';
        }

        if ( !_.isEmpty(errors)) {
            return errors;
        }
    },

    getId: function() {
        return this.get('id');
    },

    setId: function(id) {
        this.set('id', id);
    },

    getFirstName: function() {
        return this.get('firstName');
    },

    setFirstName: function(firstName) {
        this.set('firstName', firstName);
    },

    getLastName: function() {
        return this.get('lastName');
    },

    setLastName: function(lastName) {
        this.set('lastName', lastName);
    },

    getAge: function() {
        return this.get('age');
    },

    setAge: function(age) {
        this.set('age', age);
    },

    getOccupation: function() {
        return this.get('occupation');
    },

    setOccupation: function(occupation) {
        this.set('occupation', occupation);
    }
});