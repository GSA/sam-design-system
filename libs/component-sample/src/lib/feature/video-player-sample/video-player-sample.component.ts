import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-video-player-sample',
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})
export class VideoPlayerSampleComponent implements OnInit {
  source: string;
  constructor() { }

  ngOnInit() {
    this.source = "http://www.html5videoplayer.net/videos/toystory.mp4";
  }

}
