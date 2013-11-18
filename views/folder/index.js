var domify = require('domify');
var events = require('event-component');
var bind = require('bind-component');
var Emitter = require('emitter-component');

var template = require('./index.html');

/**
 * Expose `Folder`.
 */

module.exports = Folder;

/**
 * Mixin emitter.
 */

Emitter(Folder.prototype);

/**
 * Initialize a new `Folder`.
 */

function Folder(options, sync, el) {
  this.options = options || {};
  this.el = el || domify(template);
  this.reactive = reactive(this.el, this.options, this);
  bind(this, this.select);
  events.bind(this.el, 'click', this.select);
}

/**
 * Reactive binding for folder count.
 */

Folder.prototype.count = function () {
  return Math.round(10 * Math.random()); // TODO
};

/**
 * Select this folder to show in the conversations view.
 */

Folder.prototype.select = function () {
  this.options.selected = true;
  this.emit('selected folder', this, this.options.sync);
};

