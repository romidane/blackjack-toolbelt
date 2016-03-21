import { dirname } from 'path';

const blackjackDir = dirname(__dirname);
const nodeModulesDir = `${blackjackDir}/node_modules`;

export default {
  'BLACKJACK_HOME': blackjackDir,
  'ESLINT_BIN': `${nodeModulesDir}/eslint/bin/eslint.js`,
  'ESLINT_CONF': `${blackjackDir}/.eslintrc.json`
};
