import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { AdvancedSearch } from './advanced-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [AdvancedSearch],
  exports: [AdvancedSearch],
  bootstrap: [AdvancedSearch],
})
export class AdvancedSearchModule {}
