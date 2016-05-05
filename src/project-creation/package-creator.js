import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    return `{
  "name": "blackjack-component-${name}",
  "version": "0.0.1",
  "description": "A blackjack component.",
  "scripts": {
    "test": "blackjack test",
    "preview": "blackjack preview"
  },
  "author": "Sky UK",
  "license": "BSD-3-Clause",
  "dependencies": {
    "react": "^0.14.8",
    "sky-toolkit": "github:sky-uk/toolkit",
    "sky-blackjack-tools": "github:sky-uk/blackjack-tools"
  },
  "blackjack": {
    "preview": "src/preview.js"
  }
}
`;
  },

  run(directoryPath, name) {
    const template = this.buildTemplate(name)
    const path = `${directoryPath}/package.json`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
