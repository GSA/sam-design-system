import { NgModule } from '@angular/core';

import { SdsSearchComponent } from './search.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, A11yModule],
  exports: [SdsSearchComponent],
  declarations: [SdsSearchComponent],
  providers: []
})
export class SdsSearchModule {}
