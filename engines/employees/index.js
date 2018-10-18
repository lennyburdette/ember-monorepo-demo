/* eslint-env node */
'use strict';

// eslint-disable-next-line
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'employees',

  lazyLoading: true
});
