import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from '../video-player/js/px-video';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  videoSource1: string;
  VvtFileURL: string;
  videoHeightEl: string;
  videoWidthEl: string;
  videoPosterEl: string;
  videoPreloadEl: string;
  videoSourceMp4El: string;
  videoSourceWebmEl: string;
  imageSrcEl: string;
  videoIdEl: string;
  GLOBAL_STRINGS: any;


  @Input('videoSourceWebm') videoSourceWebm: string;
  @Input('videoSourceMp4') videoSourceMp4: string;
  @Input('videoHeight') videoHeight: string;
  @Input('videoWidth') videoWidth: string;
  @Input('videoPlayerId') videoPlayerId: string;
  @Input('videoCaption') videoCaption: string;
  @Input('videoPoster') videoPoster: string;
  @Input('videoSeekInterval') videoSeekInterval: number;
  @Input('videoDebug') videoDebug: boolean;
  @Input('videoPreload') videoPreload: string;
  @Input('imageSrc') imageSrc: string;




  ngAfterViewInit() {

    InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: this.videoSeekInterval,
      videoTitle: 'clips of stand-up comedy',
      debug: true
    });
  }

  constructor() {

}
  ngOnInit() {
    this.videoWidthEl = this.videoWidth;
    this.videoHeightEl = this.videoHeight;
    this.videoIdEl = this.videoPlayerId;
    this.videoPosterEl = this.videoPoster;
    this.videoPreloadEl = this.videoPreload;
    this.videoSourceMp4El = this.videoSourceMp4;
    this.videoSourceWebmEl = this.videoSourceWebm;
    this.imageSrcEl = this.imageSrc;
  }
}
