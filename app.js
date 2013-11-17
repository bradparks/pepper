
/**
 * General modules.
 */

var domready = require('domready');

/**
 * Pepper modules.
 */

var FolderList = require('folder-list');
var ConversationList = require('conversation-list');
var EmailList = require('email-list');

/**
 * Get the app started.
 */

domready(function () {
  var folderList = new FolderList();
  var conversationList = new ConversationList();
  var emailList = new EmailList();
});