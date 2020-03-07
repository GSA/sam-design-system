import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsVideoPlayerModule } from '@gsa-sam/components'
import { VideoPlayerSampleComponent } from './video-player-sample.component';

@NgModule({
  declarations: [VideoPlayerSampleComponent],
  imports: [
    CommonModule, SdsVideoPlayerModule
  ],
  exports: [VideoPlayerSampleComponent]
})
export class VideoPlayerSampleModule { }
