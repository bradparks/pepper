
/**
 * A fix for client-side components to work via require.
 */

global.document = window.document;

/**
 * General modules.
 */

var domready = require('domready');

/**
 * Pepper modules.
 */

var views = require('./views');

/**
 * Get the app started.
 */

domready(function () {
  var folderList = new views.FolderList();
  var conversationList = new views.ConversationList();
  var emailList = new views.EmailList();

  // compose window demo
  // window.open('file:///Users/reinpk/dev/pepper/index.html','1384672437784','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
});