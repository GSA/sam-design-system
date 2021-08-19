import { NgModule } from '@angular/core';
import { BasicCardComponent } from './basic-card.component';
import { SdsLandingCardModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingCardModule],
  declarations: [BasicCardComponent],
  exports: [BasicCardComponent],
  bootstrap: [BasicCardComponent],
})
export class BasicCardModule {}
