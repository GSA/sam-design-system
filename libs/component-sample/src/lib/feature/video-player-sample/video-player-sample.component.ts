import { Component } from '@angular/core';
import { VideoPlayerSampleData } from './video-player-sample-data';

@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent {
  public data = VideoPlayerSampleData;
}
