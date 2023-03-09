import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsDynamicGenerationComponent } from './tabs-dynamic-generation.component';
import { SdsTabsModule } from '@gsa-sam/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SdsTabsModule, ReactiveFormsModule, FormsModule],
  declarations: [TabsDynamicGenerationComponent],
  exports: [TabsDynamicGenerationComponent],
  bootstrap: [TabsDynamicGenerationComponent],
})
export class TabsDynamicGenerationModule {}
