"use strict";

App.Helpers = {

    errors: function(person, errors) {
        $('.alert').html(_.values(errors).join('<br>')).removeClass('hidden');

        _.each(_.keys(errors), function(key) {
            var input = '#input-' + s.slugify(s.humanize(key));
            $(input).parent().addClass('has-error');
        });
    }

}