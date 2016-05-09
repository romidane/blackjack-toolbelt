import mkdir from 'mkdirp';
import logger from '../util/logger';

export default {

  run(directoryPath) {
    if (mkdir.sync(directoryPath)) {
      logger.success(`+ ${directoryPath}`);
    } else {
      logger.error(`! ${directoryPath} already exists.`);
    }
  }

};
