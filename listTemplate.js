const fs = require('fs');

const listTemplate = (pageObjectNames) => {
  const listData = `
    ${pageObjectNames
      .map(
        (name) => `import { UserDefined${name}Object } from './pages/${name}';`
      )
      .join("\n")}
// [ListOfImports END] 

export interface ListOfUserDefinedPageObjects {
    // [ListOfUserDefinedPageObjects START]
      ${pageObjectNames
        .map((name) => ` ${name}?: UserDefined${name}Object;`)
        .join("\n\t\t\t")}
    // [ListOfUserDefinedPageObjects END]
}
    `;

    fs.writeFileSync(`./types/list.of.pages.d.ts`,listData);
};


module.exports = listTemplate;