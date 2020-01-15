import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import apiDocs from 'libs/documentation/src/documentation';

interface apiDesc {
  sourceCode: string;
  fileURI: string;
}

function baseName(path)
{
  const pathArr = path.split(/[\\/]/);
  pathArr.pop()
  return pathArr.join("/");
}

export function getSource(component) {
  const api:apiDesc = {
    sourceCode: "",
    fileURI: ""
  };
  Object.values(apiDocs.components)
    .filter(entity => entity.name.toUpperCase().startsWith(`SDS${component}COMPONENT`))
    .forEach(entity => {
      api.sourceCode = entity.templateData;
      api.fileURI = baseName(entity.file) + "/" + entity.templateUrl[0].replace('\.\/','');
    });
  return api;
}

@Component({
  template: `
    <p class="margin-bottom-0"><span class="text-italic font-sans-3xs">Source: </span><code class="text-indigo bg-white margin-0" [innerHTML]="api.fileURI"></code></p>
    <ngx-prism
      [language] = "language"
      [code] = "sourceCode"
    ></ngx-prism>
  `
})
export class DocumentationTemplatePage {
  component: string;
  api: apiDesc;

  sourceCode: string;
  language = 'html';

  constructor(route: ActivatedRoute) {
    const componentName = (this.component =
      route.parent.parent.snapshot.url[1].path);
    if (componentName) {
     this.component = componentName;
     this.api = getSource(componentName.toUpperCase());
     this.sourceCode = (this.api as any).sourceCode;
    }
  }
}
