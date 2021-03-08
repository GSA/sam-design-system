import { NgModule } from '@angular/core';

import { SdsSearchComponent } from './search.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsIconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, A11yModule, FormsModule, SdsIconModule],
  exports: [SdsSearchComponent],
  declarations: [SdsSearchComponent],
  providers: [],
})
export class SdsSearchModule {}
