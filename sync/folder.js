var _ = require('underscore');
var Emitter = require('emitter-component');

/**
 * Expose `FolderSync`.
 */

module.exports = FolderSync;

/**
 * Mixin emitter.
 */

Emitter(FolderSync.prototype);

/**
 * Initialize an `FolderSync` object.
 */

function FolderSync (imap, name, path) {
  if (!(this instanceof FolderSync)) return new FolderSync(imap, name, path);
  
}


