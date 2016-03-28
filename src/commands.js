import commands from 'commander';
import dispatch from 'dispatcher';

export function get() {
  commands
    .version('0.0.1')
    .option('preview', 'Preview the built component locally.')
    .option('init', 'Create a new component.')
    .option('lint', 'Lint all in test and lib dirs.')
    .option('test', 'Run JS tests in your test directory.')
    .option('mocha', 'Run JS mocha in your test directory.')
    .option('bundle', 'Creates a production bundle of CSS/JS.')
    .parse(process.argv);

  return commands;
}
