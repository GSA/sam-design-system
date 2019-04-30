import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSampleComponent } from './header-sample.component';
import { SdsHeaderModule } from '../../../../../packages/components/src/lib/header/header.module';
@NgModule({
  declarations: [HeaderSampleComponent],
  imports: [
    CommonModule, SdsHeaderModule
  ], exports: [HeaderSampleComponent]
})
export class HeaderSampleModule { }
