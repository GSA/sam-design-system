import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule { }
