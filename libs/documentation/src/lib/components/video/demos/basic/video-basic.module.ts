import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBasic } from './video-basic.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  declarations: [VideoBasic],
  imports: [CommonModule, SdsVideoPlayerModule],
  exports: [VideoBasic],
  bootstrap: [VideoBasic],
})
export class VideoBasicModule {}
