import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsAutomaticActivationComponent } from './tabs-automatic-activation.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [TabsAutomaticActivationComponent],
  exports: [TabsAutomaticActivationComponent],
  bootstrap: [TabsAutomaticActivationComponent],
})
export class TabsAutomaticActivationModule { }
