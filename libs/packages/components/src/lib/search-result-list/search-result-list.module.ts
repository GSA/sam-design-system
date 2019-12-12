import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, FormsModule, FontAwesomeModule
  ],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule {
 
 }
