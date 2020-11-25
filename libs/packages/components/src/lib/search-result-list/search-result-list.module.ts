import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { SdsIconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, FormsModule, SdsIconModule],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule {}
