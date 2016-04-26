import caseChanger from 'change-case';
import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    const klass = caseChanger.pascalCase(name);

    return `import React from 'react';

class ${klass} extends React.Component {

  render(){
    return 'Hello world!';
  }

}

export default ${klass};
`;
  },

  run(directoryPath, name) {
    const directory = `${directoryPath}/src/components`;
    const underscoreName = caseChanger.snakeCase(name);
    const template = this.buildTemplate(name)
    const path = `${directory}/${underscoreName}.js`;

    DirectoryCreator.run(directory)
    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
