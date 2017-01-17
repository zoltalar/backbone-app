"use strict";

App.PersonModel = Backbone.Model.extend({

    // Set model defaults
    defaults: {
        'id': _.random(1, 1000000),
        'firstName': '',
        'lastName': '',
        'age': 0,
        'occupation': ''
    },

    validate: function(attributes) {
        var errors = {};

        if ( ! attributes.firstName || s.isBlank(attributes.firstName)) {
            errors.firstName = 'Please enter your first name.';
        }
        if ( ! attributes.lastName || s.isBlank(attributes.lastName)) {
            errors.lastName = 'Please enter your last name.';
        }
        if ( ! attributes.age || s.isBlank(attributes.age)) {
            errors.age = 'Please enter your age.';
        }
        if ( ! attributes.occupation || s.isBlank(attributes.occupation)) {
            errors.occupation = 'Please enter your occupation.';
        }

        if ( !_.isEmpty(errors)) {
            return errors;
        }
    }
});