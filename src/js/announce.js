function Announce(settings_global) {
    var defaults = {
        position: 'bottom-right',
        theme: 'default'
    };

    var settings = $.extend({}, defaults, settings_global);

    this.init = function() {
        $('body').append($('<ul/>', {
            id: 'announce',
            class: 'announce ' + settings.theme + ' ' + settings.position
        }));
        $(document).trigger('init');
    }

    this.post = function(settings_message) {
        var defaults = {
            type: 'notice'
        };

        var settings = $.extend({}, defaults, settings_message);

        $(document).on('init', function() {
            $('#announce').append($('<li/>', {
                class: settings.type,
                text: settings.message
            }));
        });
    }

    $(this.init);
}
