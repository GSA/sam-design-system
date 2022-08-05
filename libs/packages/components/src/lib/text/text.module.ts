import { NgModule } from '@angular/core';

import { SdsTextComponent } from './text.component';
import { SdsTextChildComponent } from './child.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, A11yModule, FormsModule],
  exports: [SdsTextComponent, SdsTextChildComponent],
  declarations: [SdsTextComponent, SdsTextChildComponent],
  providers: [],
})
export class SdsTextModule {}
