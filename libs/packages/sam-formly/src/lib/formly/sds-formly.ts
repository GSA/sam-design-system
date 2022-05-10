import { ChangeDetectorRef, Directive, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Directive()
export abstract class AbstractSdsFormly extends FieldType implements OnInit {
  public cdr: ChangeDetectorRef;
  public template: any;

  public ngOnInit() {
    this.setProperties(this.template, (<any>this).field.templateOptions);
  }

  public setProperties(component: any, configuration: any) {
    Object.keys(configuration).map(function (key) {
      component[key] = configuration[key];
    });

    if ((<any>this).template.control) {
      (<any>this).template.control = (<any>this).formControl;
    }
  }
}
