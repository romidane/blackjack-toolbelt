import { exec } from 'child_process';

export default function(command) {
  exec(command + ' --colors', (error, stdout, stderr) => {
    console.log(`${stdout}`);
    if(stderr) {
      console.log(`${stderr}`);
    }
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
}