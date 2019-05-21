import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { RouterModule } from '@angular/router';
import { SdsAccordionModule } from '../accordion/accordion.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SdsAccordionModule
  ],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule { }
