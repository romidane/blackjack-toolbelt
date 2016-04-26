import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    return `node_modules
`;
  },

  run(directoryPath, name) {
    const template = this.buildTemplate(name)
    const path = `${directoryPath}/.gitignore`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
