import caseChanger from 'change-case';
import logger from '../util/logger';
import DirectoryCreator from './directory-creator';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    const klass = caseChanger.pascalCase(name);
    const stylesheet = caseChanger.snakeCase(name);

    return `import React from 'react';

require('../../styles/components/${stylesheet}.scss');

class ${klass} extends React.Component {

  render(){
    return (
      <div className="${name}">Hello world!</div>
    );
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
