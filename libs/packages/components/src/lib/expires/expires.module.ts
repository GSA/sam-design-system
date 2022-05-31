import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsExpiresDirective } from './expires.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SdsExpiresDirective],
  exports: [SdsExpiresDirective],
})
export class SdsExpiresModule {}
