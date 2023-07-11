import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgxPopperjsTriggers } from 'ngx-popperjs';
import { getPosition } from '../services/utils';

@Component({
  selector: 'sds-formly-field-radio',
  templateUrl: './radio.html',
})
export class FormlyFieldRadioComponent extends FieldType implements AfterViewInit {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  hover = NgxPopperjsTriggers.click;
  getPosition = getPosition;

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
