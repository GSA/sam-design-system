import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class SdsVideoPlayerComponent implements OnInit {

  InitPxVideo: Object;


  @Input('videoSource') videoSource: string;
  @Input('videoHeight') videoHeight: string;
  @Input('videoWidth') videoWidth: string;
  @Input('myvid') myvid: string;
  @Input('videoCaption') videoCaption: string;
  @Input('videoPoster') videoPoster: string;

  constructor() {

   }

  ngOnInit() {
    this.InitPxVideo = new Object();
    this.InitPxVideo = {
      "videoId": "myvid",
      "captionsOnDefault": true,
      "seekInterval": 20,
      "videoTitle": "clips of stand-up comedy",
      "debug": true
    }
    console.log(this.InitPxVideo);
  }





// Initialize

}
