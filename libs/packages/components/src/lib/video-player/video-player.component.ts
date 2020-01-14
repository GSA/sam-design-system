import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  videoSource1: string;

  @Input('videoSource') videoSource: string;
  @Input('videoHeight') videoHeight: string;
  @Input('videoWidth') videoWidth: string;
  @Input('videoPlayerId') videoPlayerId: string;
  @Input('videoCaption') videoCaption: string;
  @Input('videoPoster') videoPoster: string;

  constructor() {
  }

  ngAfterViewInit() {
    (window as any).InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: 20,
      videoTitle: 'clips of stand-up comedy',
      debug: true
    });
  }

  ngOnInit() {}

  // Initialize
}
