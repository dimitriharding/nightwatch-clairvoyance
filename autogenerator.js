const fs = require('fs');
const template = require('./template');
const listTemplate = require('./listTemplate');
const path = require('path');
const { promisify } = require('util');

const readdir_promise = promisify(fs.readdir);
const stat_promise = promisify(fs.stat);

function readFilesAsync(dir) {
  return readdir_promise(dir, { encoding: 'utf8' })
    .then((filenames) => {
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

/**
 * 
 * @param {string} data 
 */
function getCommentAndCommandName(data) {
  const regexCommentAndCode = RegExp(/(?<comment>\/\*\*(.|\n)+?\*\/)(?<code>(\n).*)/, 'g');
  let match;
  let matches = [];
  while(match = regexCommentAndCode.exec(data)){
    if(match.groups.code.includes('{')) matches.push(match.groups);
  }
  return matches;
}


function getElements(path) {
   const module = require(path);
   const elements = module.elements ? Object.keys(module.elements).map(eleName => `"@${eleName}"`) : [];
   return elements;
}

readFilesAsync(path.resolve('./example/pages'))
  .then(files => {
    // @ts-ignore
    const pageObjectData = files.map(file => {
        return {
          name: file.name,
          selectors: getElements(file.filepath),
          commandsAndComments: getCommentAndCommandName(file.content),
          filePath: file.filepath
        }
    });
    
    pageObjectData.forEach(pageObject => {
      fs.writeFileSync(`./types/pages/${pageObject.name}.d.ts`,template(pageObject));
    });
    listTemplate(pageObjectData.map(page => page.name))
  })
  .catch(err => console.log(err));