import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import apiDocs from 'libs/documentation/src/documentation';

export function getApis(component) {
  const components = [];
  Object.values(apiDocs.components)
    .filter(entity => entity.name.toUpperCase().startsWith(`SDS${component}COMPONENT`))
    .forEach(entity => {
      components.push(entity.name);
    });
  return { components };
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <docs-api-component *ngFor="let component of components" [component]="component"></docs-api-component>
  `
})
export class DocumentationAPIPage {
  components: string[];

  constructor(route: ActivatedRoute) {
    const component = route.parent.parent.snapshot.url[1].path;
    const apis = getApis(component.toUpperCase());
    this.components = apis.components.sort();
  }
}
