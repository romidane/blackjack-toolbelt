import caseChanger from 'change-case';
import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    const title = caseChanger.titleCase(name);

    return `# ${title} Blackjack Component

A readme for your component would go here.
`;
  },

  run(directoryPath, name) {
    const template = this.buildTemplate(name)
    const path = `${directoryPath}/readme.md`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
