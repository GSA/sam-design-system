import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from './js/px-video';

export interface VPInterface{
  videoHeightEl: string;
  videoSeekInterval: number;
  videoDebug: boolean;
}


@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  @Input() videoSourceWebmEl: string;
  @Input() videoSourceMp4El: string;
  @Input() videoHeightEl: VPInterface;
  @Input() videoWidthEl: string;
  @Input() videoPlayerId: string;
  @Input() videoCaptionEl: string;
  @Input() videoPosterEl: string;
  @Input() videoSeekInterval: VPInterface;
  @Input() videoDebug: VPInterface;
  @Input() videoPreloadEl: string;


  ngOnInit(){}

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
