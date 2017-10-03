function Announce(settings_global) {
    var defaults = {
        position: 'bottom-right',
        theme: 'default',
        type: 'notice',
        timeout: false,
        timeoutDelay: 5000,
        dismiss: false
    };

    var globalSettings = $.extend({}, defaults, settings_global);

    this.init = function () {
        $('body').append($('<ul/>', {
            id: 'announce',
            class: 'announce ' + 'announce-theme-' + globalSettings.theme + ' announce-' + globalSettings.position
        }));
    };

    this.post = function (settings_message) {
        var settings = $.extend({}, defaults, settings_message);

        $(function () {
            var dismiss = $('<a/>', {
                class: 'announce-dismissible',
                html: '&times'
            });

            var announcement = $('<li/>', {
                class: 'announce-' + settings.type,
                text: settings.message
            });

            if (settings.dismiss) {
                announcement.append(dismiss);

                dismiss.click(function() {
                    announcement.remove();
                });
            }

            if (settings.timeout) {
                setTimeout(function () {
                    announcement.remove();
                }, settings.timeoutDelay);
            }

            $('#announce').append(announcement);
        });
    };

    $(this.init);
}
