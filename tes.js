var fs = require("fs");

async function readFiles(path) {
  var sourceFiles = await fs.readdirSync(path);

  sourceFiles.forEach(async (currentFile) => {
    await fs.lstat(`${path}/${currentFile}`, (_, stats) => {
      if (stats.isFile()) {
        console.log(`<file href="${path}/${currentFile}"/>`);
      } else {
        readFiles(`${path}/${currentFile}`);
      }
    });
  });
}

readFiles("./");
