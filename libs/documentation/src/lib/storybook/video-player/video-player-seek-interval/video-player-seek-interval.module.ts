import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerSeekIntervalComponent } from './video-player-seek-interval.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerSeekIntervalComponent],
  exports: [VideoPlayerSeekIntervalComponent],
  bootstrap: [VideoPlayerSeekIntervalComponent],
})
export class VideoPlayerSeekIntervalModule {}
