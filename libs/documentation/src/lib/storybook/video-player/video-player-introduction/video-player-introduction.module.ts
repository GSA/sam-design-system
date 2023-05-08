import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerIntroductionComponent } from './video-player-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoPlayerIntroductionComponent],
  exports: [VideoPlayerIntroductionComponent],
  bootstrap: [VideoPlayerIntroductionComponent],
})
export class VideoPlayerIntroductionModule {}
