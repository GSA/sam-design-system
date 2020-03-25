import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GLOBAL_STRINGS }  from 'accessible-html5-video-player/js/strings.js';
import { InitPxVideo }   from 'accessible-html5-video-player/js/px-video.js';
import { VPInterface } from './video-player';

interface InitPxVideoConfig {
  "videoId": string,
  "captionsOnDefault": boolean,
  "seekInterval": number,
  "videoTitle": string,
  "debug": boolean
}

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {
  @Input() VPConfiguration: VPInterface;
  private config: InitPxVideoConfig;

  ngAfterViewInit() {
    this.config = {
      videoId: this.VPConfiguration.id,
      captionsOnDefault: true,
      seekInterval: this.VPConfiguration.seekInterval,
      videoTitle: 'Video Player',
      debug: this.VPConfiguration.debug
    }

    new InitPxVideo(this.config);
  }

  constructor() {
}

}
