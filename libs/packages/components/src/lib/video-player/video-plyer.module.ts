import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsVideoPlyerComponent } from './video-plyer.component';

@NgModule({
  declarations: [SdsVideoPlyerComponent],
  imports: [
    CommonModule
  ],
  exports: [SdsVideoPlyerComponent]
})
export class SdsVideoPlyerModule { }
