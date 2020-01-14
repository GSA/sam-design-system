import { NgModule } from '@angular/core';
import { PopupSampleComponent } from './popup-sample.component';
import { SdsPopupModule } from '@sam-design-system/layouts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [SdsPopupModule, FontAwesomeModule],
  exports: [PopupSampleComponent],
  declarations: [PopupSampleComponent],
  providers: []
})
export class PopupSampleModule {}