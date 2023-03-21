import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsConfigurableComponent } from './toasts-configurable.component';
import { SdsToastModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsToastModule],
  declarations: [ToastsConfigurableComponent],
  exports: [ToastsConfigurableComponent],
  bootstrap: [ToastsConfigurableComponent],
})
export class ToastsConfigurableModule {}
