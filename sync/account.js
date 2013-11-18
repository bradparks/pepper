var Imap = require('imap');
var _ = require('underscore');
var Emitter = require('emitter-component');

var FolderSync = require('./folder');

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
    folders = _.map(folders, function (folder) {
      var name = folder.name;
      var path = folder.path + folder.name;
      folder.sync = new FolderSync(self.imap, name, path+name);
      return folder;
    });
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
  _.each(_.keys(boxes), function (name) {
    var box = boxes[name];
    if (box.children) {
      extractFolders(box.children, name+box.delimiter, folders);
    }
    else {
      folders.push({
        name : name.toLowerCase(),
        path : path + name,
        attributes : box.attribs
      });
    }
  });
  return folders;
}
