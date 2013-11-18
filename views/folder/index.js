var domify = require('domify');
var template = require('./index.html');

/**
 * Expose `Folder`.
 */

module.exports = Folder;

/**
 * Initialize a new `Folder`.
 */

function Folder(options, sync) {
  this.options = options || {};
  this.el = domify(template);
  this.reactive = reactive(this.el, this.options, this);
}

