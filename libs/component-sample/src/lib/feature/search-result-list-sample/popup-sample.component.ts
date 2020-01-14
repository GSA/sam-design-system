import { Component} from '@angular/core';

@Component({
    selector:'sds-popup-sample',
    template:`
    <div class="sds-popup">
    <fa-icon [fixedWidth]="true" [icon]="['sds', 'information-circle']" size="2x"></fa-icon>
    <div class="sds-popup__content">
      <div class="display-flex flex-column flex-align-end margin-right-05">
        <div>
          <fa-icon [fixedWidth]="true" [icon]="['sds', 'information-circle']" size="2x" class="popup__inner-icon"></fa-icon>
        </div>
      </div>
      <ul>
        <li>Showing a newer version of this entity</li>
        <li>Fields with dotted lines indicate updated data</li>
      </ul>
    </div>
  </div>`,
})

export class SdsPopupSampleComponent {
    constructor(){}

}