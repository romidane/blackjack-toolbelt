import exec from './child_process';
import consts  from './constants';

export default function(config) {
  if (config.lint) {
    exec(`${consts.ESLINT_BIN} -c ${consts.ESLINT_CONF} lib src test`);
  }

}