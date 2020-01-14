import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerSampleComponent } from './video-player-sample.component';
import { VideoPlayerModule } from '../../../../../packages/components/src/lib/video-player/video-player.module';


@NgModule({
  declarations: [VideoPlayerSampleComponent],
  imports: [
    CommonModule,
    VideoPlayerModule
  ],
  exports: [VideoPlayerSampleComponent]
})
export class VideoPlayerSampleModule { }
