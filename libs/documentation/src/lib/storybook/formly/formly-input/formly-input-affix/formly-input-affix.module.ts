import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputAffixComponent } from './formly-input-affix.component';
import { arrowRepeat, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(),
 NgxBootstrapIconsModule.pick({
      arrowRepeat
    }),
],
  declarations: [FormlyInputAffixComponent],
  exports: [FormlyInputAffixComponent],
  bootstrap: [FormlyInputAffixComponent],
})
export class FormlyInputAffixModule {}
