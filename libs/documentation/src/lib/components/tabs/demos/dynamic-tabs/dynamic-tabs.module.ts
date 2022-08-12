import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsTabsModule } from '@gsa-sam/components';
import { DynamicTabsComponet } from './dynamic-tabs.component';

@NgModule({
  imports: [CommonModule, SdsTabsModule, ReactiveFormsModule, FormsModule],
  declarations: [DynamicTabsComponet],
  exports: [DynamicTabsComponet],
  bootstrap: [DynamicTabsComponet],
})
export class DynamicTabsModule {}
