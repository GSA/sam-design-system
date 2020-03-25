import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from './js/px-video';
import { VPInterface } from './video-player';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {
  @Input() VPConfiguration: VPInterface;

  ngAfterViewInit() {
    InitPxVideo({
      videoId: this.VPConfiguration.id,
      captionsOnDefault: true,
      seekInterval: this.VPConfiguration.seekInterval,
      videoTitle: 'Video Player',
      debug: this.VPConfiguration.debug
    });
  }

  constructor() {
}

}
