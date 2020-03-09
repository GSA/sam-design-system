import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerSampleComponent } from './video-player-sample/video-player-sample.component';
import { SdsVideoPlyerModule } from '@gsa-sam/components';

@NgModule({
  declarations: [VideoPlayerSampleComponent],
  imports: [
    CommonModule, SdsVideoPlyerModule
  ],
  exports: [VideoPlayerSampleComponent]
})
export class VideoPlayerSampleModule { }
