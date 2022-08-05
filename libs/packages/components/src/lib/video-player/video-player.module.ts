import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsVideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [SdsVideoPlayerComponent],
  exports: [SdsVideoPlayerComponent],
  imports: [CommonModule],
  providers: [],
})
export class SdsVideoPlayerModule {}
