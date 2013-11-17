var domify = require('domify');
var template = require('./index.html');

/**
 * Expose `FolderList`.
 */

module.exports = FolderList;

/**
 * Initialize a new `FolderList`.
 */

function FolderList() {
  if (!(this instanceof FolderList)) return new FolderList();
  this.el = domify(template);
  document.body.appendChild(this.el);
}

