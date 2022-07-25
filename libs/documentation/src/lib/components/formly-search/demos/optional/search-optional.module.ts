import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { SearchOptional } from './search-optional.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [SearchOptional],
  exports: [SearchOptional],
  bootstrap: [SearchOptional],
})
export class SearchOptionalModule {}
