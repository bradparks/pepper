
/**
 * Third party modules.
 */

var domready = require('domready');
global.reactive = window.reactive;

/**
 * Pepper modules.
 */

var conf = require('./conf');
var views = require('./views');

/**
 * Boot up the app.
 */

domready(function () {
  var sync = new Sync(conf);
  var account = new views.Account(sync);

  //var conversationList = new views.ConversationList();
  //var emailList = new views.EmailList();

  // compose window demo
  // window.open('file:///Users/reinpk/dev/pepper/index.html','1384672437784','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
});