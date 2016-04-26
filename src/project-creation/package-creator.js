import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    return `{
  "name": "blackjack-${name}",
  "version": "0.0.1",
  "description": "A blackjack component.",
  "scripts": {
    "test": "blackjack test"
  },
  "author": "Sky UK",
  "license": "\tBSD-3-Clause",
  "dependencies": {
    "babel-loader": "^6.2.4",
    "react": "^0.14.8",
    "sky-toolkit": "github:sky-uk/toolkit"
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
