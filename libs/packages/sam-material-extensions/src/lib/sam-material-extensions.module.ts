import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from './table/table.module';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule
  ],
  declarations: [],
  exports: [SdsTableModule]
})
export class SamMaterialExtensionsModule {}
