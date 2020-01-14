import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: "gsa-sam-video-player-sample",
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})
export class VideoPlayerSampleComponent implements OnInit, AfterViewInit {
  source: string;
  height: string;
  width: string;
	caption: string;
  poster: string;
	controls: string;
  id: string;
	fallback: string;
	seekInterval: number;
	debug: boolean;
  preload: string;
  title: string;

  constructor() {

   }

  ngOnInit() {
    this.source = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4";
    this.height = "360";
    this.width = "640";
    this.id = "sampleVid1";
    this.caption ="";
    this.poster = "";
    this.seekInterval = 30;
    this.debug = true;
    this.title = 'clips of stand-up Video';
  }

  ngAfterViewInit() {

  }

}
