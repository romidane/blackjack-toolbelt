import caseChanger from 'change-case';
import logger from '../util/logger';
import { WORKING_DIR } from '../constants';

import DirectoryCreator from '../project-creation/directory-creator';
import ComponentCreator from '../project-creation/component-creator';
import StylesCreator from '../project-creation/styles-creator';
import TestCreator from '../project-creation/test-creator';
import PreviewCreator from '../project-creation/preview-creator';
import GitignoreCreator from '../project-creation/gitignore-creator';
import PackageCreator from '../project-creation/package-creator';
import ReadmeCreator from '../project-creation/readme-creator';

export function call(options) {
  const name = caseChanger.paramCase(options.name);
  const workingDir = `${WORKING_DIR}/${name}`;

  DirectoryCreator.run(workingDir);       // name/
  ComponentCreator.run(workingDir, name); // name/src/components/name.js
  StylesCreator.run(workingDir, name);    // name/styles/_name.scss
  TestCreator.run(workingDir, name);      // name/tests/components/name.test.js
  PreviewCreator.run(workingDir, name);   // name/src/preview.js
  GitignoreCreator.run(workingDir, name); // name/.gitignore
  PackageCreator.run(workingDir, name);   // name/package.json
  ReadmeCreator.run(workingDir, name);    // name/README.md

  logger.info('\nProject setup 👊');
}
