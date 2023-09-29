import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-checkbox',
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckboxComponent extends FieldType<FieldTypeConfig> implements AfterViewInit {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true,
    },
  };

  ngAfterViewInit() {
    const passedIn = this.to.template;
    setTimeout(() => {
      this.displayedTemplate = passedIn ? passedIn : this.defaultTemplate;
    });
  }
}
