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
      console.log(this.VPConfigration);

      this.videoSourceWebmEl = this.VPConfigration.sourceWebm;
      this.videoSourceMp4El = this.VPConfigration.sourceMp4;
      this.videoPosterEl = this.VPConfigration.poster;
      this.videoWidthEl = this.VPConfigration.width;
      this.videoHeightEl = this.VPConfigration.height;
      this.videoCaptionEl = this.VPConfigration.caption;
      this.videoPlayerId = this.VPConfigration.id;
      this.videoSeekInterval =  this.VPConfigration.seekInterval;
      this.videoDebug = this.VPConfigration.debug;
      this.videoPreloadEl = this.VPConfigration.preload;
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
