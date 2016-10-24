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
            'class': 'announce ' + settings.theme + ' ' + settings.position
        }));
        $(document).trigger('init');
    };

    this.post = function (settings_message) {
        var defaults = {
            type: 'notice'
        };

        var settings = $.extend({}, defaults, settings_message);

        $(document).on('init', function () {
            $('#announce').append($('<li/>', {
                'class': settings.type,
                text: settings.message
            }));
        });
    };

    $(this.init);
}
return Announce;

}));
