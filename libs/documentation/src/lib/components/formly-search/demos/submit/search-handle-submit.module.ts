
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { SearchHandleSubmit } from './search-handle-submit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [SearchHandleSubmit],
  exports: [SearchHandleSubmit],
  bootstrap: [SearchHandleSubmit]
})
export class SearchHandleSubmitModule {}
