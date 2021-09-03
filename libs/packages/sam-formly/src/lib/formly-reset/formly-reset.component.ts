import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-reset',
  templateUrl: './formly-reset.component.html',
  styleUrls: ['./formly-reset.component.scss']
})
export class SdsFormlyResetComponent {

  /**
   * Formly form options
   */
  @Input() options: FormlyFormOptions;

  @Input() defaultModel: any;

  /**
   * Pass in classes for reset button -- default .usa-button .usa-button--unstyled
   */
  @Input() classes: string[] = ['usa-button', 'usa-button--unstyled'];

  @Output() resetClicked = new EventEmitter();

  resetAll() {

    if (this.defaultModel) {
      this.options.resetModel(this.defaultModel);
    } else {
      this.options.resetModel();
    }
    this.resetClicked.emit();
  }

}
