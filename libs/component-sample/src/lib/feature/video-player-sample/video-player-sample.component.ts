import { Component, OnInit } from '@angular/core';
import { VideoPlayerSampleData } from './video-player-sample-data';

@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent implements OnInit {
  public data = VideoPlayerSampleData[0];
  constructor() {

   }

  ngOnInit() {
  }
}
