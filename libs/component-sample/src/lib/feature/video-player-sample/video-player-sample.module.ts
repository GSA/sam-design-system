import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerSampleComponent } from './video-player-sample.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  declarations: [VideoPlayerSampleComponent],
  imports: [
    CommonModule,
    SdsVideoPlayerModule
  ],
  exports: [VideoPlayerSampleComponent]
})
export class VideoPlayerSampleModule { }
