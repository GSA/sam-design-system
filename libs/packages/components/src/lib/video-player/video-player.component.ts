import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoSourceWebmEl: string;
  @Input() videoSourceMp4El: string;
  @Input() videoHeightEl: string;
  @Input() videoWidthEl: string;
  @Input() videoPlayerId: string;
  @Input() videoCaptionEl: string;
  @Input() videoPosterEl: string;
  @Input() videoSeekInterval: number;
  @Input() videoDebug: boolean;
  @Input() videoPreloadEl: string;

  constructor() { }

  ngOnInit() {
  }

}
