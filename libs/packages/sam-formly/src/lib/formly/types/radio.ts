import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-radio',
  templateUrl: './radio.html',
})
export class FormlyFieldRadioComponent extends FieldType<FieldTypeConfig> implements AfterViewInit {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  defaultOptions = {
    props: {
      options: [],
    },
  };
  ngAfterViewInit() {
    const passedIn = this.props.template;
    setTimeout(() => {
      this.displayedTemplate = passedIn ? passedIn : this.defaultTemplate;
    });
  }
}
