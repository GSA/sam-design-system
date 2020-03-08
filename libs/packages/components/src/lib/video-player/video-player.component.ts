import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from './js/px-video';
import { VPInterface } from './video-player';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {


  @Input() videoSourceWebmEl: string;
  @Input() videoSourceMp4El: string;
  @Input() videoHeightEl: {type : number};
  @Input() videoWidthEl: string;
  @Input() videoPlayerId: string;
  @Input() videoCaptionEl: string;
  @Input() videoPosterEl: string;
  @Input() videoSeekInterval: {type: number};
  @Input() videoDebug: {type: boolean};
  @Input() videoPreloadEl: {type: string};


  ngOnInit(){
    // console.log(typeof this.videoSeekInterval);
    // console.log(typeof this.videoDebug);
    console.log(typeof this.videoHeightEl);
  }

  ngAfterViewInit() {
    InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: this.videoSeekInterval,
      videoTitle: 'Video Player',
      debug: this.videoDebug
    });

  }

  constructor() {
}
}
