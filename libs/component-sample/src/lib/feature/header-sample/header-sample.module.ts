import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSampleComponent } from './header-sample.component';

@NgModule({
  declarations: [HeaderSampleComponent],
  imports: [
    CommonModule
  ], exports: [HeaderSampleComponent]
})
export class HeaderSampleModule { }
