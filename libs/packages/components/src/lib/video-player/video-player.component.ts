import { Component,ViewChild, Input,ElementRef, AfterViewInit, ViewEncapsulation, Renderer2, OnChanges, AfterContentInit } from '@angular/core';
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
export class SdsVideoPlayerComponent implements AfterContentInit, AfterViewInit, OnChanges {
  @Input() VPConfiguration: VPInterface;
  @ViewChild('video') video: ElementRef;
  private config: InitPxVideoConfig;

  @Input() crossorigin = "";

  loadVideoSource = false;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {}

  ngAfterViewInit() {
    if (this.crossorigin) {
      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');
      id.setAttribute('crossorigin', this.crossorigin);
    }
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

  ngAfterContentInit() {
    if (this.VPConfiguration.preload === 'none') {
      this._loadVideoSourceOnDemand();
    } else {
      this.loadVideoSource = true;
    }
  }

  ngOnChanges(changes) {
    if (changes && changes.crossorigin) {
      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');
      if (id) {
        id.setAttribute('crossorigin', this.crossorigin);
      }
    }
  }

  /**
   * IE and Edge ignore preload attribute and load video data eagerly. In order to
   * workaround those such browsers, we add video source only after user clicks
   * on play or rewind button of the video.
   */
  private _loadVideoSourceOnDemand() {
    const playButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector('.px-video-play');
    const rewindButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector('.px-video-rewind');

    if (!playButton || !rewindButton) {
      // Edge case - if the button to toggle video source does not exist in dom, then add in the
      // video source and let the browser decide when to fetch video data
      this.loadVideoSource = true;
    } else {
      playButton.onclick = () => this.loadVideoSource = true;
      rewindButton.onclick = () => this.loadVideoSource = true;
    }
  }

}
