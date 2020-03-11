import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from '../video-player/js/px-video';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  public data = VideoPlayerSampleData[0];

  this.videoSourceWebmEl = this.VPConfigration.sourceWebm;
      this.videoSourceMp4El = this.VPConfigration.sourceMp4;
      this.videoPosterEl = this.VPConfigration.poster;
      this.videoWidthEl = this.VPConfigration.width;
      this.videoHeightEl = this.VPConfigration.height;
      this.videoCaptionEl = this.VPConfigration.caption;
      this.videoPlayerId = this.VPConfigration.id;
      this.videoSeekInterval =  this.VPConfigration.seekInterval;
      videoDebugEl:boolean;
      videoPreloadEl: string;

  ngOnInit(){
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
