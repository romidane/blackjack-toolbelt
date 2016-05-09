import { exec } from 'child_process';
import logger from './logger';

export default function (command) {
  exec(`${command} --color`, (error, stdout, stderr) => {
    logger.info(`${stdout}`);

    if (stderr) {
      logger.info(`${stderr}`);
    }

    if (error !== null) {
      logger.error(`exec error: ${error}`);
    }
  });
}
