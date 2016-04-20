var dirname = require('path').dirname;
var blackjackDir = dirname(__dirname);
var nodeModulesDir = blackjackDir + '/node_modules';
var workingDir = process.cwd();

module.exports = {
  BLACKJACK_HOME: blackjackDir,
  WORKING_DIR: workingDir,
  DEV_SERVER_BIN: blackjackDir + '/bin/server',
  ESLINT_BIN: nodeModulesDir + '/eslint/bin/eslint.js',
  ESLINT_CONF: blackjackDir + '/.eslintrc.json',
  COMPONENT_CONF: workingDir + '/package.json',
  KARMA_BIN: nodeModulesDir + '/karma/bin/karma',
  MOCHA_BIN: nodeModulesDir + '/mocha/bin/mocha',
  TEST_DIR: workingDir + '/tests/**/*.js',
  KARMA_CONF: blackjackDir + '/src/testing/karma.conf.js',
  WEBPACK_BIN: nodeModulesDir + '/webpack/bin/webpack.js',
  WEBPACK_CONF: blackjackDir + '/src/webpack/dev.config.js',
};
