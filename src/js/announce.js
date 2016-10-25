function Announce(settings_global) {
    var globalDefaults = {
        position: 'bottom-right',
        theme: 'default',
        timeout: false,
        timeoutDelay: 5000
    };

    var settings = $.extend({}, globalDefaults, settings_global);

    this.init = function () {
        $('body').append($('<ul/>', {
            id: 'announce',
            class: 'announce ' + 'announce-theme-' + settings.theme + ' ' + settings.position
        }));
    };

    this.post = function (settings_message) {
        var postDefaults = {
            type: 'notice'
        };

        var settings = $.extend(globalDefaults, postDefaults, settings_message);

        $(function () {
            var announcement = $('<li/>', {
                class: 'announce-' + settings.type,
                text: settings.message
            });

            $('#announce').append(announcement);

            if (settings.timeout) {
                setTimeout(function () {
                    announcement.remove();
                }, settings.timeoutDelay);
            }
        });
    };

    $(this.init);
}
