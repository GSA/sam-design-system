import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import apis from 'libs/documentation/src/lib/apidoc';

interface apiDesc {
  sourceCode: string;
  fileURI: string;
}

function baseName(path) {
  const pathArr = path.split(/[\\/]/);
  pathArr.pop();
  return pathArr.join('/');
}

export function getSource(pkg, type, name) {
  const api: apiDesc = {
    sourceCode: '',
    fileURI: '',
  };

  Object.values(apis[pkg][type])
    .filter((entity): entity is any => <any>entity)
    .filter((entity): entity is any => entity.name.startsWith(`${name}`))
    .forEach((entity) => {
      api.sourceCode = entity.templateData || entity.template;
      if (entity.templateUrl && entity.templateUrl.length) {
        api.fileURI =
          baseName(entity.file) + '/' + entity.templateUrl[0].replace('./', '');
      } else if (entity.file) {
        api.fileURI = entity.file;
      }
    });
  return api;
}

@Component({
  template: `
    <ng-container *ngFor="let item of items">
      <ng-container *ngIf="item.sourceCode">
        <p class="margin-bottom-0">
          <span class="text-italic font-sans-3xs">Source: </span>
          <code
            *ngIf="item.fileURI"
            class="text-indigo bg-white margin-0"
            [innerHTML]="item.fileURI"
          ></code>
          <code *ngIf="!item.fileURI" class="text-indigo bg-white margin-0"
            >Inline</code
          >
        </p>
        <pre class="highlight"><code [highlight]="item.sourceCode"></code></pre>
      </ng-container>
    </ng-container>
  `,
})
export class DocumentationTemplatePage {
  items: any = [];

  constructor(route: ActivatedRoute) {
    this.items = route.snapshot.parent.data.items || [];
    this.items.forEach((item) => {
      if (item.name) {
        item.sourceCode = getSource(item.pkg, item.type, item.name)
          .sourceCode as any;
        item.fileURI = getSource(item.pkg, item.type, item.name).fileURI;
      }
    });
  }
}
