import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerSampleComponent } from './video-player-sample.component';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { VideoPlayerModule } from '../../../../../packages/components/src/lib/video-player/video-player.module';


@NgModule({
  declarations: [VideoPlayerSampleComponent],
  imports: [
    CommonModule,
    VideoPlayerModule
  ],
  exports: [VideoPlayerSampleComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VideoPlayerSampleModule { }
