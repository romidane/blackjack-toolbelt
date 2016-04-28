import commander from 'commander';
import info from '../package.json';
import logger from './util/logger';

export function run() {
  commander.version(info.version);

  function executeCommand(options) {
    const name = options._name;
    const command = require(`./commands/${name}`);

    logger.info(`Running '${name}' command...\n`);

    command.call(options);
  }

  commander.command('bundle').
    description('Creates a production bundle of CSS/JS.').
    action(executeCommand);

  commander.command('init <name>').
    description('Create a new component project from called [name].').
    action((name, options) => {
      options.name = name;
      executeCommand(options);
    });

  commander.command('lint').
    description('Lint all in test and lib dirs.').
    action(executeCommand);

  commander.command('preview').
    description('Preview the built component locally using a development server.').
    action(executeCommand);

  commander.command('test').
    option('-r, --runner [type]', 'Which test runner you wish to run the tests with [mocha|karma].').
    description('Run JS tests in your test directory.').
    action(executeCommand);

  commander.parse(process.argv);
}
