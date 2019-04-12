const exec = require('sync-exec');

exports.shell = function shell(cmd, ignore) {
    let result;
    try {
        result = exec(cmd);
    }  catch (e) {
        throw new Error(`invalid arguments '${cmd}'`);
    }
    if (!result.stderr) {
      !ignore && console.log(result.stdout);
      console.log(`# ${cmd}`);
    } else {
      if (!ignore) {
        console.error(`${result.stderr} '${cmd}'`);
        throw new Error(`${result.stderr} '${cmd}'`);
      }
    }
    return result.stdout;
}
