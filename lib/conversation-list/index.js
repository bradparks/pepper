var domify = require('domify');
var template = require('./index.html');

/**
 * Expose `ConversationList`.
 */

module.exports = ConversationList;

/**
 * Initialize a new `ConversationList`.
 */

function ConversationList() {
  if (!(this instanceof ConversationList)) return new ConversationList();
  this.el = domify(template);
  document.body.appendChild(this.el);
}

