import { ChangeDetectorRef, DoCheck, Directive } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Directive()
export abstract class AbstractSdsFormly extends FieldType implements DoCheck {

  public cdr: ChangeDetectorRef;
  public template: any;

  public ngDoCheck () {
    this.setProperties(
      this.template,
      (<any>this).field.templateOptions
    );
  }

  public setProperties (component: any, configuration: any) {
    Object.keys(configuration).forEach(
      key => {
        component[key] = configuration[key];
      }
    );
    if ((<any>this).template.control) {
      (<any>this).template.control = (<any>this).formControl;
    }
    this.cdr.detectChanges();
  }
}
