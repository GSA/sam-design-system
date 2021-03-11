import { Component,ViewChild, Input,ElementRef, AfterViewInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';
import * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';
import { VPInterface } from './video-player';

interface InitPxVideoConfig {
  "videoId": string,
  "captionsOnDefault": boolean,
  "seekInterval": number,
  "videoTitle": string,
  "debug": boolean
}

declare const GLOBAL_STRINGS: any;

declare class InitPxVideo {
  constructor(config: InitPxVideoConfig);
}

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {
  @Input() VPConfiguration: VPInterface;
  @ViewChild('video') video: ElementRef;
  private config: InitPxVideoConfig;

  @Input() crossorigin = "";

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.config = {
      videoId: this.VPConfiguration.id,
      captionsOnDefault: false,
      seekInterval: this.VPConfiguration.seekInterval,
      videoTitle: 'Video Player',
      debug: this.VPConfiguration.debug
    }

    new InitPxVideo(this.config);
    this.video.nativeElement.setAttribute("style", "width:"+this.VPConfiguration.width+";");

    const progressElement: HTMLProgressElement= this.elementRef.nativeElement.querySelector('progress');

    this.renderer2.setAttribute(progressElement, 'aria-label', this.VPConfiguration.description + ' progress bar');
  }

}
