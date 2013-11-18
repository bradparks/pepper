var domify = require('domify');
var query = require('query');
var bind = require('bind-component');
var _ = require('underscore');

var FolderListView = require('../folder-list');
var FolderView = require('../folder');
var ConversationListView = require('../conversation-list');

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
  this.sync.on('folders', this.onFolders);
  this.folders = new FolderListView(this.sync);
  this.conversations = new ConversationListView();
}

/**
 * Render the `Account`.
 */

Account.prototype.render = function () {
  this.el = domify(template);
  document.body.appendChild(this.el);
};

/**
 * Handler for when folders are loaded.
 */

Account.prototype.onFolders = function (sync, folders) {
  var self = this;
  this.defaultFolders = {};
  _.each(folders, function (folder) {
    var el = query('.'+folder.name);
    if (el) {
      self.defaultFolders[folder.name] = new FolderView(folder, sync, el);
      console.log(self, self.prototype, self.onFolderSelected);
      //self.defaultFolders[folder.name].on('selected folder', self.onFolderSelected);
    }
  });
  //self.defaultFolders.inbox.select();
};

/**
 * Handler for when folders get selected;
 */

Account.prototype.onFolderSelected = function (view, sync) {
  //this.conversations.setFolder(sync);
};
