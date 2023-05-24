import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule, SdsReadonlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperReadOnlyContainerComponent } from './formly-wrapper-read-only-container.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, SdsReadonlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperReadOnlyContainerComponent],
  exports: [FormlyWrapperReadOnlyContainerComponent],
  bootstrap: [FormlyWrapperReadOnlyContainerComponent],
})
export class FormlyWrapperReadOnlyContainerModule {}
