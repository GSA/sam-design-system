import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerDescriptionComponent } from './video-player-description.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerDescriptionComponent],
  bootstrap: [VideoPlayerDescriptionComponent],
  exports: [VideoPlayerDescriptionComponent],
})
export class VideoPlayerDescriptionModule {}
