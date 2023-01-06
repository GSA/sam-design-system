import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSizeComponent } from './search-size.component';
import { SdsSearchModule } from '@gsa-sam/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SdsSearchModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchSizeComponent],
  exports: [SearchSizeComponent],
  bootstrap: [SearchSizeComponent],
})
export class SearchSizeModule {}
