import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopupComponent } from './popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [SdsPopupComponent],
  declarations: [SdsPopupComponent]
})
export class SdsPopupModule { }
