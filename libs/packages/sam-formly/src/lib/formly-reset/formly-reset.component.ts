import { Component, Input } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'; import { fas } from '@fortawesome/free-solid-svg-icons'; import { sds } from '@gsa-sam/sam-styles/src/icons/';

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

  constructor(library: FaIconLibrary) { library.addIconPacks(fas, sds); }
  resetAll() {

    if (this.defaultModel) {
      this.options.resetModel(this.defaultModel);
    } else {
      this.options.resetModel();
    }
  }

}
