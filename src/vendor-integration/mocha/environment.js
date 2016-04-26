const paths = require('app-module-path');
const constants = require('constants');

const BLACKJACK_HOME = constants.BLACKJACK_HOME;
const WORKING_DIR = constants.WORKING_DIR;

require("babel-register")({
  sourceMaps: 'inline',
  presets: [
    'es2015',
    'react',
    'stage-0'
  ]
});

module.exports = {

  setup(){
    paths.addPath(`${BLACKJACK_HOME}/node_modules`);
    paths.addPath(`${WORKING_DIR}/node_modules`);
    paths.addPath(`${WORKING_DIR}/src`);
  }

}
