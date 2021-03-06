import caseChanger from 'change-case';
import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name) {
    const klass = caseChanger.pascalCase(name);

    return `import ${klass} from '../../src/components/${name}';

describe('${klass}', () => {
  it('should render', () => {
    // Implement your tests here...
  });
});
`;
  },

  run(directoryPath, name) {
    const directory = `${directoryPath}/test/components`;
    const template = this.buildTemplate(name);
    const path = `${directory}/${name}.test.js`;

    DirectoryCreator.run(directory);
    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

};
