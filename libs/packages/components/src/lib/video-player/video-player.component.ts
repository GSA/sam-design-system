import { Component, OnInit, Input, AfterViewInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { InitPxVideo } from '../../../../../../apps/sam-design-system-site/src/assets/js/px-video';
import { GLOBAL_STRINGS } from '../../../../../../apps/sam-design-system-site/src/assets/js/strings';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html'
  // styleUrls: ['css/px-video.css']
})
export class SdsVideoPlayerComponent implements OnInit, AfterViewInit {
  videoSource1: string;
  VvtFileURL: string;
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
 this.GLOBAL_STRINGS = {
      PLAY: "Play",
      PAUSE: "Pause",
      TOGGLE_FULL_SCREEN: "Toggle full screen",
      MUTE: "Mute",
      RESTART: "Restart",
      CAPTIONS: "Closed captions",
      REWIND: "Rewind",
      FORWARD: "Forward"
    };
    InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: this.videoSeekInterval,
      videoTitle: 'clips of stand-up comedy',
      debug: true
    });

  //  (window as any).InitPxVideo({
  //     videoId: this.videoPlayerId,
  //     captionsOnDefault: true,
  //     seekInterval: this.videoSeekInterval,
  //     videoTitle: 'clips of stand-up comedy',
  //     debug: this.videoDebug
  //   });

    //  (document as any).InitPxVideo({
    //   videoId: this.videoPlayerId,
    //   captionsOnDefault: true,
    //   seekInterval: this.videoSeekInterval,
    //   videoTitle: 'clips of stand-up comedy',
    //   debug: this.videoDebug
    // });
  }

  constructor() {

}
  ngOnInit() {

  }
}
