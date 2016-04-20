import commander from 'commander';
import info from '../package.json';

export function run(){

  commander.version(info.version);

  function executeCommand(options){
    const name = options._name;
    const command = require(`./commands/${name}`);

    console.log(`Running '${name}' command...\n`);

    command.call(options);
  };

  commander.command('bundle').description('Creates a production bundle of CSS/JS.').action(executeCommand);
  commander.command('init').description('Create a new component.').action(executeCommand);
  commander.command('lint').description('Lint all in test and lib dirs.').action(executeCommand);
  commander.command('mocha').description('Run JS mocha in your test directory.').action(executeCommand);
  commander.command('preview').description('Preview the built component locally.').action(executeCommand);
  commander.command('test').description('Run JS tests in your test directory.').action(executeCommand);

  commander.parse(process.argv)

}
