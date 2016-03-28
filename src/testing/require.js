var consts = require('bjconstants');

require("babel-register")({
  presets: ['es2015', 'stage-0'],
  sourceMaps: 'inline'
});

var paths = require('app-module-path');
paths.addPath(consts.BLACKJACK_HOME + '/node_modules');
paths.addPath(consts.WORKING_DIR + '/node_modules');
paths.addPath(consts.WORKING_DIR + '/src');