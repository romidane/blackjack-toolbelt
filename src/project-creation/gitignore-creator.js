import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate() {
    return `node_modules
`;
  },

  run(directoryPath) {
    const template = this.buildTemplate();
    const path = `${directoryPath}/.gitignore`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

};
