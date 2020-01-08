import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsVideoPlayerComponent } from './video-player.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SdsVideoPlayerComponent],
  exports: [SdsVideoPlayerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VideoPlayerModule { }
