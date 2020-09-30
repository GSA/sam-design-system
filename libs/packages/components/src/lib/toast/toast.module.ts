import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  providers: []
})
export class SdsToastModule {}
