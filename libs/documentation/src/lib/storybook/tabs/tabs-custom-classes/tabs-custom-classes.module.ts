import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsCustomClassesComponent } from './tabs-custom-classes.component';
import { SdsTabsModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [TabsCustomClassesComponent],
  exports: [TabsCustomClassesComponent],
  bootstrap: [TabsCustomClassesComponent],
})
export class TabsCustomClassesModule { }
