import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverConfigurableComponent } from './popover-configurable.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [
    CommonModule,
    NgxPopperjsModule
  ],
  declarations: [PopoverConfigurableComponent],
  exports: [PopoverConfigurableComponent],
  bootstrap: [PopoverConfigurableComponent],
})
export class PopoverConfigurableModule { }
