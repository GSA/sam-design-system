import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsExpiresModule } from '@gsa-sam/components';

import { ExpiresConfigurable } from './expires-configurable.component';

@NgModule({
  imports: [CommonModule, SdsExpiresModule],
  exports: [ExpiresConfigurable],
  declarations: [ExpiresConfigurable],
  bootstrap: [ExpiresConfigurable],
})
export class ExpiresConfigurableModule {}
