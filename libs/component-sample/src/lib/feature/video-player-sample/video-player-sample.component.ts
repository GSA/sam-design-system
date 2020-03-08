import { Component, OnInit } from '@angular/core';
import { VideoPlayerSampleData } from './service/video-player-sample-data';
import { VPInterface } from '../../../../../packages/components/src/lib/video-player/video-player';

@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent implements OnInit {

  public data = VideoPlayerSampleData;
  constructor() {

   }

  ngOnInit() {
  }
}
