import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBasic } from './search-basic.component';
import { SdsSearchModule } from '@gsa-sam/components';

@NgModule({
  declarations: [SearchBasic],
  imports: [
    CommonModule,
    SdsSearchModule
  ],
  exports: [SearchBasic],
  bootstrap: [SearchBasic]
})
export class SearchBasicModule {}
