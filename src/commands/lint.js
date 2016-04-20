import exec from '../util/exec';
import { ESLINT_BIN, ESLINT_CONF } from '../constants';

 export function call(){
  exec(`${ESLINT_BIN} -c ${ESLINT_CONF} lib src test`);
};
