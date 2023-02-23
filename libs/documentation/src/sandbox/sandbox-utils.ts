
declare var require;

export interface CodePreviewTabData{
  tab: string;
  template: string;
  language: string;
  copy: boolean;
}

export function generateConfig(filePath: string, moduleName: string, selector: string, additionalFiles?: Array<CodePreviewTabData>) {
  const splitPath = filePath.split('/');
  const fileName = splitPath[splitPath.length - 1];

  const tsFileName = `${fileName}.component.ts`;
  const templateFileName = `${fileName}.component.html`;
  const moduleFileName = `${fileName}.module.ts`;

  const component = require(`!!raw-loader!libs/documentation/src/lib/${filePath}/${fileName}.component.ts`);
  const template = require(`!!raw-loader!libs/documentation/src/lib/${filePath}/${fileName}.component.html`);
  const module = require(`!!raw-loader!libs/documentation/src/lib/${filePath}/${fileName}.module.ts`);

  let preview = [
    {
      tab: tsFileName,
      template: component,
      language: 'ts',
      copy: true
    },
    {
      tab: templateFileName,
      template: template,
      language: 'html',
      copy: true
    },
    {
      tab: moduleFileName,
      template: module,
      language: 'ts',
      copy: true
    },
  ];
  if(additionalFiles){
    additionalFiles.forEach(extraFile => preview.push(extraFile));
  }

  return preview;
}

/**
 *
 * @param relativePath - Path relative to 'libs/documentation/src/lib'. This string should include the file name.
 * @param language - language of the file.
 * @param copy - Whether to provide button to allow users to easily copy this file. False does not prevent copying, just leaves off the button.
 * @returns
 */
export function createCodePreviewTabData(relativePath: string, language: 'ts'|'html' , copy: boolean): CodePreviewTabData{
  const splitPath = relativePath.split('/');
  const folderPath = splitPath.slice(0,splitPath.length - 1).join('/');
  const fileName = splitPath[splitPath.length - 1];
  const fileNameWithoutExtension = fileName.split('.').splice(0,fileName.split('.').length - 1).join('.');

  let fileData;

  // File data MUST be loaded this way. If the string inside require() does not end with non-interpreted characters this section will error.
  switch(language){
    case 'ts':
      fileData = require(`!!raw-loader!libs/documentation/src/lib/${folderPath}/${fileNameWithoutExtension}.ts`);
      break;
    case 'html':
      fileData = require(`!!raw-loader!libs/documentation/src/lib/${folderPath}/${fileNameWithoutExtension}.html`);
      break;
  }

  return {
    tab: fileName,
    template: fileData,
    language: language,
    copy
  };
}

export function generateStackblitzLink(componentName: string, demoName: string) {
  return `./assets/stackblitzes/${componentName}/${componentName}-${demoName}/stackblitz.html`;
}
