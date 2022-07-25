import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-radio',
  templateUrl: './radio.html',
})
export class FormlyFieldRadioComponent extends FieldType
  implements AfterViewInit {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
  ngAfterViewInit() {
    const passedIn = this.to.template;
    setTimeout(() => {
      this.displayedTemplate = passedIn ? passedIn : this.defaultTemplate;
    });
  }
}
