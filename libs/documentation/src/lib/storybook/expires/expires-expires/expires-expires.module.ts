import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsExpiresModule } from '@gsa-sam/components';
import { ExpiresExpiresComponent } from './expires-expires.component';

@NgModule({
  imports: [CommonModule, SdsExpiresModule],
  exports: [ExpiresExpiresComponent],
  declarations: [ExpiresExpiresComponent],
  bootstrap: [ExpiresExpiresComponent],
})
export class ExpiresExpiresModule {}
