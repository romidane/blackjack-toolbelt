import filesystem from 'fs';

export default {

  run(path, contents) {
    filesystem.writeFileSync(path, contents);
  }

}
