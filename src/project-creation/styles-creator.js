import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name) {
    return `.${name} { color: green; }
`;
  },

  run(directoryPath, name) {
    const directory = `${directoryPath}/styles/components`;
    const template = this.buildTemplate(name);
    const path = `${directory}/${name}.scss`;

    DirectoryCreator.run(directory);
    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

};
