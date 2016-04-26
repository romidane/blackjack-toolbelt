import caseChanger from 'change-case';
import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    return `.${name} {}
`;
  },

  run(directoryPath, name) {
    const directory = `${directoryPath}/styles`;
    const underscoreName = caseChanger.snakeCase(name);
    const template = this.buildTemplate(name)
    const path = `${directory}/${underscoreName}.js`;

    DirectoryCreator.run(directory)
    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
