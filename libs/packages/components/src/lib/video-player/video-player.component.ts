import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {

  InitPxVideo: Object;
  videoSource1: string

  @Input('videoSource') videoSource: string;
  @Input('videoHeight') videoHeight: string;
  @Input('videoWidth') videoWidth: string;
  @Input('myvid') myvid: string;
  @Input('videoCaption') videoCaption: string;
  @Input('videoPoster') videoPoster: string;

  constructor(private window: Window) {

   }



   ngAfterViewInit() {

   }

  ngOnInit() {

  }





// Initialize

}
