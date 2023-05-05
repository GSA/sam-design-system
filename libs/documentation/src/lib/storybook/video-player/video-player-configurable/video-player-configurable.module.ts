import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerConfigurableComponent } from './video-player-configurable.component';
import { SdsVideoPlayerModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsVideoPlayerModule],
  declarations: [VideoPlayerConfigurableComponent],
  exports: [VideoPlayerConfigurableComponent],
  bootstrap: [VideoPlayerConfigurableComponent],
})
export class VideoPlayerConfigurableModule {}
