import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SdsTableComponent],
  exports: [SdsTableComponent]
})
export class SamMaterialExtensionsModule {}
