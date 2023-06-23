import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerPosterComponent } from './video-player-poster.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerPosterComponent],
  exports: [VideoPlayerPosterComponent],
  bootstrap: [VideoPlayerPosterComponent],
})
export class VideoPlayerPosterModule {}
