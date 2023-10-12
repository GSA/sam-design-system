import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-checkbox',
  templateUrl: './checkbox.html',
})
export class FormlyFieldCheckboxComponent extends FieldType implements AfterViewInit {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  defaultOptions = {
    props: {
      indeterminate: true,
      hideLabel: true,
    },
  };

  ngAfterViewInit() {
    const passedIn = this.props.template;
    setTimeout(() => {
      this.displayedTemplate = passedIn ? passedIn : this.defaultTemplate;
    });
  }
}
