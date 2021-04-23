import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation,
  Renderer2,
  OnChanges,
  AfterContentInit,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  Inject,
} from '@angular/core';
import { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';
import * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';
import { VPInterface } from './video-player';
import { DOCUMENT } from '@angular/common';

interface InitPxVideoConfig {
  videoId: string;
  captionsOnDefault: boolean;
  seekInterval: number;
  videoTitle: string;
  debug: boolean;
}

declare const GLOBAL_STRINGS: any;

declare class InitPxVideo {
  constructor(config: InitPxVideoConfig);
}

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SdsVideoPlayerComponent
  implements AfterViewInit, OnChanges, OnInit, OnDestroy {
  @Input() VPConfiguration: VPInterface;
  @ViewChild('video') video: ElementRef;
  private config: InitPxVideoConfig;
  @Input() crossorigin = '';

  loadVideoSource = false;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnDestroy() {
    let element = this.document.getElementById('px-video-aria-announce');
    this.renderer2.removeChild(this.elementRef, element);
  }
  ngOnInit() {
    if (this.VPConfiguration.preload != 'none') {
      this.loadVideoSource = true;
    }
  }

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
      debug: this.VPConfiguration.debug,
    };

    const video = new InitPxVideo(this.config);
    this.video.nativeElement.setAttribute(
      'style',
      'width:' + this.VPConfiguration.width + ';'
    );

    const progressElement: HTMLProgressElement = this.elementRef.nativeElement.querySelector(
      'progress'
    );

    this.renderer2.setAttribute(
      progressElement,
      'aria-label',
      this.VPConfiguration.description + ' progress bar'
    );

    if (this.VPConfiguration.preload === 'none') {
      this._loadVideoSourceOnDemand();
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
   * on play or restart button of the video.
   */
  private _loadVideoSourceOnDemand() {
    const playButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(
      '.px-video-play'
    );
    const restartButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(
      '.px-video-restart'
    );
    const video: HTMLVideoElement = this.elementRef.nativeElement.querySelector(
      '#videoPlayer'
    );

    const loadVideo = ($event) => {
      if (this.loadVideoSource) {
        return;
      }

      this.loadVideoSource = true;

      // Due to event handler timing issues in safari, the browser does not load the source
      // when play and source are set at the same time. So we first set the source, wait for
      // an event loop, pause, then play the video to trigger source loading
      setTimeout(() => {
        video.pause();
        video.play();
      });
    };

    if (!playButton || !restartButton) {
      // Edge case - if the button to toggle video source does not exist in dom, then add in the
      // video source and let the browser decide when to fetch video data
      this.loadVideoSource = true;
    } else {
      playButton.onclick = loadVideo;
      restartButton.onclick = loadVideo;
    }
  }
}
