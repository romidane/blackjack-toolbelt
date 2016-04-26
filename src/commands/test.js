import exec from '../util/exec';
import {
  MOCHA_BIN,
  TEST_GLOB,
  BLACKJACK_HOME,
  KARMA_CONF,
  KARMA_BIN
} from '../constants';

// MOCHA ISSUES
//
// * Get working with including JSX components.
// * Ensure the user doesn't need to install babel deps.

export function call(options) {
  const runner = options.runner || 'mocha';

  switch(runner){

    case 'mocha':
      exec(`${MOCHA_BIN} "${TEST_GLOB}" --require ${BLACKJACK_HOME}/src/vendor-integration/mocha/environment.js --harmony --es_staging`);
    break;

    case 'karma':
      // TODO
      exec(`${KARMA_BIN} start ${KARMA_CONF}`);
    break;

    default:
      console.warn('Test runner unsupported!');
    break;

  }
}
