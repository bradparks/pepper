var domify = require('domify');
var template = require('./index.html');

/**
 * Expose `Folder`.
 */

module.exports = Folder;

/**
 * Initialize a new `Folder`.
 */

function Folder(options, sync, el) {
  this.options = options || {};
  this.el = el || domify(template);
  this.reactive = reactive(this.el, this.options, this);
}

/**
 * Reactive binding for folder count.
 */

Folder.prototype.count = function () {
  console.log('called');
  return Math.round(10 * Math.random()); // TODO
};

/**
 * Reactive binding for whether folder count should be shown.
 */

Folder.prototype.hasCount = function () {
  return true;
};

