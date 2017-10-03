/*! announce 0.0.1 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Announce = factory();
  }
}(this, function(require, exports, module) {

'use strict';

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
            'class': 'announce ' + 'announce-theme-' + globalSettings.theme + ' announce-' + globalSettings.position
        }));
    };

    this.post = function (settings_message) {
        var settings = $.extend({}, defaults, settings_message);

        $(function () {
            var dismiss = $('<a/>', {
                'class': 'announce-dismissible',
                html: '&times'
            });

            var announcement = $('<li/>', {
                'class': 'announce-' + settings.type,
                text: settings.message
            });

            if (settings.dismiss) {
                announcement.append(dismiss);

                dismiss.click(function () {
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
return Announce;

}));
