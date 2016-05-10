const BLACKJACK_DIR = require('path').dirname(__dirname);
const MODULES_DIR = `${BLACKJACK_DIR}/node_modules`;
const WORKING_DIR = process.cwd();

module.exports = {
  WORKING_DIR,
  BLACKJACK_HOME: BLACKJACK_DIR,
  ESLINT_BIN: `${MODULES_DIR}/eslint/bin/eslint.js`,
  ESLINT_CONF: `${BLACKJACK_DIR}/.eslintrc.json`,
  COMPONENT_CONF: `${WORKING_DIR}/package.json`,
  KARMA_BIN: `${MODULES_DIR}/karma/bin/karma`,
  KARMA_CONF: `${BLACKJACK_DIR}/src/vendor-integration/karma/config.js`,
  MOCHA_BIN: `${MODULES_DIR}/mocha/bin/mocha`,
  TEST_GLOB: `${WORKING_DIR}/test/**/*.js`,
  PREVIEW_SERVER_PORT: process.env.PORT || 9876
};
