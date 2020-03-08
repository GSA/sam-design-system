import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent implements OnInit {
  sourceWebm: string;
  sourceMp4: string;
  height= 345;
  width: string;
	caption: string;
  poster: string;
	controls: string;
  id: string;
	seekInterval = 20;
	debug = true;
  preload: string;

  constructor() {

   }

  ngOnInit() {
    this.sourceMp4 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
    this.width = "550";
    this.id = "sampleVid1";
    this.caption = '';
    this.poster = "http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg";
    this.preload = "none";
  }
}
