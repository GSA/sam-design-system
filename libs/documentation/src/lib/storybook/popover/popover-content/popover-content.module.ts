import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverContentComponent } from './popover-content.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [
    CommonModule,
    NgxPopperjsModule
  ],
  declarations: [PopoverContentComponent],
  exports: [PopoverContentComponent],
  bootstrap: [PopoverContentComponent],
})
export class PopoverContentModule { }
