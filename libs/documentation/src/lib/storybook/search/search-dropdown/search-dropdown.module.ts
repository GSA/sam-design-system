import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsSearchModule } from '@gsa-sam/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDropdownComponent } from './search-dropdown.component';

@NgModule({
  imports: [CommonModule, SdsSearchModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchDropdownComponent],
  exports: [SearchDropdownComponent],
  bootstrap: [SearchDropdownComponent],
})
export class SearchDropdownModule {}
