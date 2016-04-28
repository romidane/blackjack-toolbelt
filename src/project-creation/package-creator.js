import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    return `{
  "name": "blackjack-${name}",
  "version": "0.0.1",
  "description": "A blackjack component.",
  "scripts": {
    "test": "blackjack test",
    "preview": "blackjack preview"
  },
  "author": "Sky UK",
  "license": "BSD-3-Clause",
  "dependencies": {
    "babel-loader": "^6.2.4",
    "react": "^0.14.8",
    "react-dom": "^15.0.1",
    "sky-toolkit": "github:sky-uk/toolkit"
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
