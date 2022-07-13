import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';


@Component({
  selector: 'formly-wrapper-panel',
  template: `
      <div class="margin-left-4">
          <ng-container #fieldComponent></ng-container>
      </div> 
    `,
})
export class PanelWrapperComponent extends FieldWrapper {
}
