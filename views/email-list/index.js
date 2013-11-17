var domify = require('domify');
var template = require('./index.html');

/**
 * Expose `EmailList`.
 */

module.exports = EmailList;

/**
 * Initialize a new `EmailList`.
 */

function EmailList() {
  if (!(this instanceof EmailList)) return new EmailList();
  this.el = domify(template);
  document.body.appendChild(this.el);
}

