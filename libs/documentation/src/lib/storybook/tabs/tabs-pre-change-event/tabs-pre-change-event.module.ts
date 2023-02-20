import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPreChangeEventComponent } from './tabs-pre-change-event.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [TabsPreChangeEventComponent],
  exports: [TabsPreChangeEventComponent],
  bootstrap: [TabsPreChangeEventComponent],
})
export class TabsPreChangeEventModule { }
