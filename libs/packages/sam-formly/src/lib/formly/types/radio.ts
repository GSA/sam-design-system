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
  getClassName(index) {
    let cls = '';
    if (index === 0) {
      cls = 'margin-top-0';
    }
    return `${this.props.optionsClass} ${cls}`;
  }
  ngAfterViewInit() {
    const passedIn = this.props.template;
    setTimeout(() => {
      this.displayedTemplate = passedIn ? passedIn : this.defaultTemplate;
    });
  }
}
