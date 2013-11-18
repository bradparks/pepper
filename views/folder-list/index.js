var domify = require('domify');
var _ = require('underscore');
var Folder = require('../folder');
var template = require('./index.html');

/**
 * Expose `FolderList`.
 */

module.exports = FolderList;

/**
 * Initialize a new `FolderList`.
 */

function FolderList(sync) {
  if (!(this instanceof FolderList)) return new FolderList(sync);
  sync.on('folders', this.render);
}

/**
 * Render the folder list.
 */

FolderList.prototype.render = function (sync, folders) {
  // TODO
};

