import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerPreloadComponent } from './video-player-preload.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerPreloadComponent],
  exports: [VideoPlayerPreloadComponent],
  bootstrap: [VideoPlayerPreloadComponent],
})
export class VideoPlayerPreloadModule {}
