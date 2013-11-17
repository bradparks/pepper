/**
 * A fix for client-side components to work via require.
 */

global.document = window.document;

/**
 * Allow html files to be required.
 */

var fs = require('fs');
global.require.extensions['.html'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};