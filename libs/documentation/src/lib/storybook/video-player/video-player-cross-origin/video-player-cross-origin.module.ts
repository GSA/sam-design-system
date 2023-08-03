import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerCrossOriginComponent } from './video-player-cross-origin.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerCrossOriginComponent],
  exports: [VideoPlayerCrossOriginComponent],
  bootstrap: [VideoPlayerCrossOriginComponent],
})
export class VideoPlayerCrossOriginModule {}
