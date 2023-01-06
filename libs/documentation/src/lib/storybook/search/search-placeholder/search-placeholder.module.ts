import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsSearchModule } from '@gsa-sam/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPlaceholderComponent } from './search-placeholder.component';

@NgModule({
  imports: [CommonModule, SdsSearchModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchPlaceholderComponent],
  exports: [SearchPlaceholderComponent],
  bootstrap: [SearchPlaceholderComponent],
})
export class SearchPlaceholderModule {}
