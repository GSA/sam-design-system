import { Component } from '@angular/core';
import { VideoPlayerSampleData } from './video-player-sample-data';

@Component({
  templateUrl: './video-basic.component.html',
  styleUrls: ['./video-basic.component.scss'],
  selector: `sds-video-basic-demo`,
})

export class VideoBasic {
  public data = VideoPlayerSampleData;
}
