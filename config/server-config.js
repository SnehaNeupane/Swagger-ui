'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');

module.exports = {
  port: 8000,
  injectChanges: false,
  open: false,
  files: ['./public/**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules',
  },
  server: { baseDir: './public' },
  middleware: [
    log({ format: '%date %status %method %url' }),
    fallback({
      index: '/index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'], // systemjs workaround
      verbose: true,
    }),
  ],
};
