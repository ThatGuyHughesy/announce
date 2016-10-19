/*! announce 0.1.0 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Announce = factory();
  }
}(this, function(require, exports, module) {

"use strict";
return Announce;

}));
