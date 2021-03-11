import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsFormlyResetComponent } from './formly-reset.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [SdsFormlyResetComponent, SdsIconModule],
  imports: [CommonModule],
  exports: [SdsFormlyResetComponent],
})
export class SdsFormlyResetModule {}
