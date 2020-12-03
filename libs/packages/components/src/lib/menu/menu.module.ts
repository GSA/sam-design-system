import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SdsMenuComponent } from './menu.component';
import { SdsMenuItemComponent } from './menu-item.component';
import { SdsMenuTriggerForDirective } from './menu-trigger.directive';
import { SdsMenuHeaderComponent } from './menu-header.component';
import { SdsIconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, OverlayModule, SdsIconModule],
  exports: [
    SdsMenuComponent,
    SdsMenuItemComponent,
    SdsMenuTriggerForDirective,
    SdsMenuHeaderComponent
  ],
  declarations: [
    SdsMenuComponent,
    SdsMenuItemComponent,
    SdsMenuTriggerForDirective,
    SdsMenuHeaderComponent
  ],
  providers: []
})
export class SdsMenuModule {}
