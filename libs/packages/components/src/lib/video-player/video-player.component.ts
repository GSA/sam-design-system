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
  @Input() VPConfigration: VPInterface;

videoSourceWebmEl: string;
videoSourceMp4El: string;
videoPosterEl: string;
videoWidthEl: string;
videoHeightEl: string;
videoPlayerId: string;
videoCaptionEl: string;
videoSeekInterval: number;
videoDebug: boolean;
videoPreloadEl: string;

  ngOnInit(){
      this.videoSourceWebmEl = this.VPConfigration[0].sourceWebm;
      this.videoSourceMp4El = this.VPConfigration[0].sourceMp4;
      this.videoPosterEl = this.VPConfigration[0].poster;
      this.videoWidthEl = this.VPConfigration[0].width;
      this.videoHeightEl = this.VPConfigration[0].height;
      this.videoCaptionEl = this.VPConfigration[0].caption;
      this.videoPlayerId = this.VPConfigration[0].id;
      this.videoSeekInterval =  this.VPConfigration[0].seekInterval;
      this.videoDebug = this.VPConfigration[0].debug;
      this.videoPreloadEl = this.VPConfigration[0].preload;
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
