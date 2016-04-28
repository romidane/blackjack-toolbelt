const BLACKJACK_HOME = process.env.BLACKJACK_HOME;
const WORKING_DIR = process.env.WORKING_DIR;
const paths = require('app-module-path');

require("babel-register")({
  sourceMaps: 'inline',
  presets: [
    'es2015',
    'react',
    'stage-0'
  ]
});

module.exports = function(){
  paths.addPath(`${BLACKJACK_HOME}/node_modules`);
  paths.addPath(`${WORKING_DIR}/node_modules`);
  paths.addPath(`${WORKING_DIR}/src`);
  paths.addPath(`${WORKING_DIR}/test`);
}()
