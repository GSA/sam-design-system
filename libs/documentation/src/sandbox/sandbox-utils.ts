// import { ANGULAR_CODESANDBOX } from './angular-dependencies';

declare var require;

export function generateConfig(
  filePath: string,
  moduleName: string,
  selector: string
) {
  const splitPath = filePath.split('/');
  const fileName = splitPath[splitPath.length - 1];

  const buttonGroupPath =
    'packages/sam-material-extensions/src/lib/button-group';

  const tsFileName = `${fileName}.component.ts`;
  // const templateFileName = `${fileName}.component.html`;
  // const moduleFileName = `${fileName}.module.ts`;

  // const component = require(`!!raw-loader!libs/${buttonGroupPath}/${tsFileName}`);
  // const template = require(`!!raw-loader!src/app/${filePath}/${templateFileName}`);
  // const module = require(`!!raw-loader!src/app/${filePath}/${moduleFileName}`);

  // const files = {};
  // files[tsFileName] = component.default,
  // files[templateFileName] = template.default;
  // files[moduleFileName] = module.default;

  // const sandboxConfig = {
  //   files,
  //   moduleName,
  //   selector
  // };

  const preview = [
    {
      // tab: tsFileName,
      // template: component.default,
      // language: 'ts',
      // copy: true,
      //   codesandbox: ANGULAR_CODESANDBOX(sandboxConfig.files, sandboxConfig.moduleName, sandboxConfig.selector),
    },
    // {
    //     tab: templateFileName,
    //     template: template.default,
    //     language: "html",
    //     copy: true,
    //     codesandbox: ANGULAR_CODESANDBOX(sandboxConfig.files, sandboxConfig.moduleName, sandboxConfig.selector),
    // },
    // {
    //   tab: moduleFileName,
    //   template: module.default,
    //   language: "ts",
    //   copy: true,
    //   codesandbox: ANGULAR_CODESANDBOX(sandboxConfig.files, sandboxConfig.moduleName, sandboxConfig.selector),
    // },
  ];

  return preview;
}
