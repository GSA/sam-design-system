import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerCaptionComponent } from './video-player-caption.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerCaptionComponent],
  exports: [VideoPlayerCaptionComponent],
  bootstrap: [VideoPlayerCaptionComponent],
})
export class VideoPlayerCaptionModule {}
