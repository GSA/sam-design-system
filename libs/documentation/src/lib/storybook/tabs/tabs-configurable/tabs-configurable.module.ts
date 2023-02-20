import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTabsModule } from "@gsa-sam/components";
import { TabsConfigurableComponent } from './tabs-configurable.component';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [TabsConfigurableComponent],
  exports: [TabsConfigurableComponent],
  bootstrap: [TabsConfigurableComponent],
})
export class TabsConfigurableModule { }
