const BLACKJACK_DIR = require('path').dirname(__dirname);
const WORKING_DIR = process.cwd();

let MODULES_DIR = `${BLACKJACK_DIR}/node_modules`;

const STANDALONE_INSTALL = process.env.npm_package_dependencies_blackjack_toolbelt === undefined;

// This is a work around to stop NPM trying to be clever.
// If we don't implement this fix, NPM will resolve node_modules
// incorrectly for nested package installs. This means that we
// have to sniff whether the package is installed on it's own
// via NPM, or as part of a bundle in another project. Once we
// know this, we can ensure we point to the correct modules dir
// (as NPM now flattens the node_modules directory structure).

if (!STANDALONE_INSTALL){
  MODULES_DIR = `${BLACKJACK_DIR}/..`;
}

module.exports = {
  WORKING_DIR,
  BLACKJACK_HOME: BLACKJACK_DIR,
  ESLINT_BIN: `${MODULES_DIR}/eslint/bin/eslint.js`,
  ESLINT_CONF: `${BLACKJACK_DIR}/.eslintrc.json`,
  COMPONENT_CONF: `${WORKING_DIR}/package.json`,
  KARMA_BIN: `${MODULES_DIR}/karma/bin/karma`,
  KARMA_CONF: `${BLACKJACK_DIR}/src/vendor-integration/karma/config.js`,
  MOCHA_BIN: `${MODULES_DIR}/mocha/bin/mocha`,
  TEST_GLOB: `${WORKING_DIR}/test/**/*.js`
};
