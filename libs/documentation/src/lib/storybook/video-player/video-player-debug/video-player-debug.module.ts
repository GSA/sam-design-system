import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerDebugComponent } from './video-player-debug.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerDebugComponent],
  exports: [VideoPlayerDebugComponent],
  bootstrap: [VideoPlayerDebugComponent],
})
export class VideoPlayerDebugModule {}
