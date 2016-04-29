import caseChanger from 'change-case';
import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    const klass = caseChanger.pascalCase(name);

    return `import React from 'react';
import ReactDOM from 'react-dom';
import ${klass} from './components/${klass}';

ReactDOM.render(<${klass} />, window.container);
`;
  },

  run(directoryPath, name) {
    const template = this.buildTemplate(name)
    const path = `${directoryPath}/src/preview.js`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
