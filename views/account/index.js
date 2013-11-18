var domify = require('domify');
var _ = require('underscore');
var FolderList = require('../folder-list');
var template = require('./index.html');

/**
 * Expose `Account`.
 */

module.exports = Account;

/**
 * Initialize a new `Account`.
 */

function Account(sync) {
  if (!(this instanceof Account)) return new Account(sync);
  this.render();
  this.sync = sync;
  this.folders = new FolderList(this.sync);
}

/**
 * Render the `Account`.
 */

Account.prototype.render = function () {
  this.el = domify(template);
  reactive(this.el, {}, this);
  document.body.appendChild(this.el);
};

/**
 * Icon url.
 */

Account.prototype.iconUrl = function () {
  return 'images/gmail.png';
};
