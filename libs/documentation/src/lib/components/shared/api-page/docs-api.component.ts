import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <docs-api-component  [type]="item.type" [wrappers]="item.wrappers" [pkg]="item.pkg" [component]="item.component" *ngFor="let item of items"></docs-api-component>
  `
})
export class DocumentationAPIPage {
  items: any = [];

  constructor(route: ActivatedRoute) {
    this.items = route.snapshot.parent.data.items || '';
  }
}
