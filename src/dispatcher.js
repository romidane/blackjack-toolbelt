import exec from './child_process';
import consts from './bjconstants';

export default function (config) {
  if (config.lint) {
    exec(`${consts.ESLINT_BIN} -c ${consts.ESLINT_CONF} lib src test`);
  }
  if (config.preview) {
    require('./server/dev');
  }
  // if (config.test) {
  //   exec(`export NODE_PATH=${consts.BLACKJACK_HOME}/src && ${consts.KARMA_BIN} start ${consts.KARMA_CONF}`);
  // }
  if (config.test) {
    exec(`${consts.MOCHA_BIN} "${consts.TEST_DIR}" --require ${consts.BLACKJACK_HOME}/src/testing/require.js`);
  }
  if (config.preview) {
    exec(`${consts.DEV_SERVER_BIN}`);
  }
}
