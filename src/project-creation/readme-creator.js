import caseChanger from 'change-case';
import logger from '../util/logger';
import FileCreator from './file-creator';

export default {

  buildTemplate(name){
    const title = caseChanger.titleCase(name);

    return `# Blackjack Component - ${title}

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)


## Introduction

A readme for your component would go here.


## Installation

You can install this component using:

\`\`\`
npm install blackjack-component-${name} --save
\`\`\`


## Usage

Usage instructions would go here, such as info on what props to pass in etc.


## Authors

* [?](mailto:?)
`;
  },

  run(directoryPath, name) {
    const template = this.buildTemplate(name)
    const path = `${directoryPath}/readme.md`;

    FileCreator.run(path, template);

    logger.success(`+ ${path}`);
  }

}
