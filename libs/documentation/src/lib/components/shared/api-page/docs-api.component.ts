import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <docs-api-component
      [pkg]="item.pkg"
      [type]="item.type"
      [name]="item.name"
      [formType]="item.formType"
      [wrappers]="item.wrappers"
      *ngFor="let item of items"
    ></docs-api-component>
  `,
})
export class DocumentationAPIPage {
  items: any = [];

  constructor(route: ActivatedRoute) {
    this.items = route.snapshot.parent.data.items || '';
  }
}
