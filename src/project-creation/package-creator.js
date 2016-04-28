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
    "babel-core": "^6.7.4",
    "babel-loader": "^6.2.4",
    "babel-polyfill": "^6.7.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-stage-0": "^6.5.0",
    "babel-register": "^6.7.2",
    "css-loader": "^0.23.1",
    "node-sass": "^3.6.0",
    "react": "^0.14.8",
    "react-dom": "^15.0.1",
    "sass-loader": "^3.2.0",
    "sky-toolkit": "github:sky-uk/toolkit",
    "sky-blackjack-tools": "github:sky-uk/blackjack-tools",
    "style-loader": "^0.13.1"
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
