const extract = require('extract-comments');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const ts = require("typescript");
var data = {};



const readdir_promise = promisify(fs.readdir);
const stat_promise = promisify(fs.stat);

function readFilesAsync(dir) {
  return readdir_promise(dir, { encoding: 'utf8' })
    .then( (filenames) => {
      const files = getFiles(dir, filenames);

      return Promise.all(files);
    })
    .catch(err => console.error(err));
}

function getFiles(dir, filenames) {
  return filenames.map(filename => {
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const filepath = path.resolve(dir, filename);
    //const content = require(filepath);
    const content = fs.readFileSync(filepath, 'utf8')

    return stat({ name, ext, filepath, content });
  });
}

function stat({ name, ext, filepath, content }) {
  return stat_promise(filepath)
    .then(stat => {
      const isFile = stat.isFile();

      if (isFile) return { name, ext, filepath, stat, content };
    })
    .catch(err => console.error(err));
}
function transpile(source){
    let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

console.log(JSON.stringify(result));
}


readFilesAsync(path.resolve('./example/pages'))
  .then(files => {
    transpile(files[1].content)
    console.log(extract(files[0].content))
  })
  .catch(err => console.log(err));