/* eslint-env node */
'use strict';

module.exports = function(app) {
  const globSync   = require('glob').sync;
  const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  mocks.forEach(route => route(app));
  proxies.forEach(route => route(app));
};
