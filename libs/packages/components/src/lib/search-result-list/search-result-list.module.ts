import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule, FormsModule, FontAwesomeModule
  ],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule {
  constructor() {
    library.add(fas, sds);
  }
 }
