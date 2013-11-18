var Imap = require('imap');
var _ = require('underscore');
var Emitter = require('emitter-component');

/**
 * Expose `AccountSync`.
 */

module.exports = AccountSync;

/**
 * Mixin emitter.
 */

Emitter(AccountSync.prototype);

/**
 * Initialize an `AccountSync` object.
 */

function AccountSync (account) {
  if (!(this instanceof AccountSync)) return new AccountSync(account);
  this.connect(account.imap);
}

/**
 * Connect to the server IMAP.
 */

AccountSync.prototype.connect = function (settings) {
  var self = this;
  this.imap = new Imap(settings);
  this.imap.on('error', function (err) {
    return self.error(err);
  });
  this.imap.once('end', function () {
    return self.end();
  });
  this.imap.once('ready', function () {
    return self.ready();
  });
  this.imap.connect();
};

/**
 * Ready handler.
 */

AccountSync.prototype.ready = function () {
  var self = this;
  this.imap.getBoxes(function (err, boxes) {
    var folders = extractFolders(boxes);
    self.emit('folders', self, folders);
  });
};

/**
 * Error handler.
 */

AccountSync.prototype.error = function (err) {
  this.emit('error', this, err);
};

/**
 * End handler.
 */

AccountSync.prototype.end = function () {
  this.emit('end', this);
};


/**
 * Extract folder objects.
 */
function extractFolders (boxes, path, folders) {
  path = path || '';
  folders = folders || [];
  _.each(_.keys(boxes), function (key) {
    var box = boxes[key];
    if (box.children) {
      extractFolders(box.children, key+box.delimiter, folders);
    }
    else {
      folders.push({
        name : key,
        path : path + key,
        attributes : box.attribs
      });
    }
  });
  return folders;
}
