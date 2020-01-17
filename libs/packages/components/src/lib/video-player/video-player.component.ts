import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  videoSource1: string;
  VvtFileURL: string;

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


  constructor() {
  }

  ngAfterViewInit() {
    (window as any).InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: this.videoSeekInterval,
      videoTitle: 'clips of stand-up comedy',
      debug: this.videoDebug
    });
  }

  ngOnInit() {
    // this.VvtFileURL = '../../../../../../apps/sam-design-system-site/src/assets/src/captionsVideo.vtt';
    this.VvtFileURL = '';
  }

  // Initialize
}
