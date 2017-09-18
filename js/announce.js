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
        theme: 'default'
    };

    var settings = $.extend({}, defaults, settings_global);

    this.init = function () {
        $('body').append($('<ul/>', {
            id: 'announce',
            'class': 'announce ' + 'announce-theme-' + settings.theme + ' ' + settings.position
        }));
    };

    this.post = function (settings_message) {
        var defaults = {
            type: 'notice',
            timeout: 5000
        };

        var settings = $.extend({}, defaults, settings_message);

        $(function () {
            var announcement = $('<li/>', {
                'class': 'announce-' + settings.type,
                text: settings.message
            });

            $('#announce').append(announcement);

            setTimeout(function () {
                announcement.remove();
            }, settings.timeout);
        });
    };

    $(this.init);
}
return Announce;

}));
