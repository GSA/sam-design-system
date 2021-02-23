import { NgModule } from '@angular/core';
import { SdsSlideOutModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SlideOutBasicComponent } from './slide-out-basic.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsSlideOutModule,
    FormsModule,
  ],
  declarations: [SlideOutBasicComponent],
  exports: [SlideOutBasicComponent],
  bootstrap: [SlideOutBasicComponent]
})
export class SlideOutBasicModule {}
