import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOptional } from './search-optional.component';
import { SdsSearchModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchOptional],
  imports: [CommonModule, SdsSearchModule, FormsModule],
  exports: [SearchOptional],
  bootstrap: [SearchOptional],
})
export class SearchOptionalModule {}
