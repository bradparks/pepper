var Imap = require('imap');
var conf = require('../conf');

/**
 * Expose `AccountSync`.
 */

module.exports = AccountSync;

/**
 * Initialize an `AccountSync` object.
 */

function AccountSync (account) {
  if (!(this instanceof AccountSync)) return new AccountSync();
  this.connect(account.imap);
}

/**
 * Connect to the server IMAP.
 */

AccountSync.prototype.connect = function (settings) {
  this.imap = new Imap(settings);
  this.imap.on('error', this.error);
  this.imap.once('end', this.end);
  this.imap.once('ready', this.ready);
  this.imap.connect();
};

/**
 * Ready handler.
 */

AccountSync.prototype.ready = function () {
  // TODO create sub-syncs
  this.imap.getBoxes(function (err, boxes) {
    console.log(boxes);
  });
};

/**
 * Error handler.
 */

AccountSync.prototype.error = function (err) {
  console.log('IMAP error.');
};

/**
 * End handler.
 */

AccountSync.prototype.end = function () {
  console.log('IMAP connection ended.');
};

/*
imap.openBox('INBOX', true, function(err, box) {
  if (err) throw err;
  var f = imap.seq.fetch('1:3', {
    bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
    struct: true
  });
  f.on('message', function(msg, seqno) {
    console.log('Message #%d', seqno);
    var prefix = '(#' + seqno + ') ';
    msg.on('body', function(stream, info) {
      var buffer = '';
      stream.on('data', function(chunk) {
        buffer += chunk.toString('utf8');
      });
      stream.once('end', function() {
        console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
      });
    });
    msg.once('attributes', function(attrs) {
      console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
    });
    msg.once('end', function() {
      console.log(prefix + 'Finished');
    });
  });
  f.once('error', function(err) {
    console.log('Fetch error: ' + err);
  });
  f.once('end', function() {
    console.log('Done fetching all messages!');
    imap.end();
  });
});*/

