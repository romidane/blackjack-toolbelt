import exec from '../util/exec';
import logger from '../util/logger';
import {
  MOCHA_BIN,
  TEST_GLOB,
  BLACKJACK_HOME,
  WORKING_DIR,
  KARMA_CONF,
  KARMA_BIN
} from '../constants';

const ENV_VARS = `BLACKJACK_HOME=${BLACKJACK_HOME} WORKING_DIR=${WORKING_DIR}`

export function call(options) {
  const runner = options.runner || 'mocha';

  switch(runner){

    case 'mocha':
      exec(`${MOCHA_BIN} "${TEST_GLOB}" --require ${BLACKJACK_HOME}/src/vendor-integration/mocha/environment.js --harmony --es_staging`);
    break;

    case 'karma':
      exec(`${ENV_VARS} ${KARMA_BIN} start ${KARMA_CONF}`);
    break;

    default:
      logger.warn(`Test runner '${runner}' unsupported!`);
    break;

  }
}
