import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverDirective } from './popover.directive';


@NgModule({
  declarations: [SdsPopoverDirective],
  imports: [
    CommonModule
  ],
  exports: [SdsPopoverDirective]
})
export class SdsPopoverModule {

 }
