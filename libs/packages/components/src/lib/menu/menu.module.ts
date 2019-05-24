import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SdsMenuComponent } from './menu.component';
import { SdsMenuItemComponent } from './menu-item.component';
import { SdsMenuTriggerForDirective } from './menu-trigger.directive';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [SdsMenuComponent, SdsMenuItemComponent, SdsMenuTriggerForDirective],
  declarations: [
    SdsMenuComponent,
    SdsMenuItemComponent,
    SdsMenuTriggerForDirective
  ],
  providers: []
})
export class SdsMenuModule {}
