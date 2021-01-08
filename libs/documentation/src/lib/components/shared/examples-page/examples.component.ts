import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentationDemoList } from '../demo-list';

@Component({
  template: `
    <documentation-widget-demo
      *ngFor="let demo of demos"
      [id]="demo.id"
      [demoTitle]="demo.title"
      [code]="demo.code"
      [markup]="demo.markup"
      [path]="demo.path"
      [readme]="demo.readme"
      [component]="component"
      [files]="demo.files"
      [showCode]="demo.showCode"
    >
      <ng-template [ngComponentOutlet]="demo.type"></ng-template>
    </documentation-widget-demo>
  `,
})
export class DocumentationExamplesPage {
  component: string;
  demos = [];

  constructor(route: ActivatedRoute, demoList: DocumentationDemoList) {
    const componentName = (this.component =
      route.parent.parent.snapshot.url[1].path);
    if (componentName) {
      const demos = demoList.getDemos(componentName);
      if (demos) {
        this.demos = Object.keys(demos).map((id) => {
          return { id, ...demos[id] };
        });
      }
    }
  }
}
