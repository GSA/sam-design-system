import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <docs-api-component [pkg]="package" [component]="component"></docs-api-component>
  `
})
export class DocumentationAPIPage {
  component: string;
  package: string;

  constructor(route: ActivatedRoute) {
    this.package = route.snapshot.parent.data.package || '';
    this.component = route.snapshot.parent.data.component || '';
  }
}
