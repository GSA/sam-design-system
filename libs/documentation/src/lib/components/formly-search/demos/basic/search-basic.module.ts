
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { SearchBasic } from './search-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [SearchBasic],
  exports: [SearchBasic],
  bootstrap: [SearchBasic]
})
export class SearchBasicModule {}
