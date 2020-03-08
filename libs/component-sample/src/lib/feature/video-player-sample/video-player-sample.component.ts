import { Component, OnInit } from '@angular/core';
import { VideoPlayerSampleData } from './service/video-player-sample-data';
import { VPInterface } from '../../../../../packages/components/src/lib/video-player/video-player';

@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent implements OnInit {

  public data = VideoPlayerSampleData;

  // public model = new VPInterface();
  // sourceWebm: string;
  // sourceMp4: string;
  // height: string;
  // width: string;
	// caption: string;
  // poster: string;
	// controls: string;
  // id: string;
	// seekInterval = 20;
	// debug = true;
  // preload: string;

  constructor() {

   }

  ngOnInit() {
    // this.sourceMp4 = "https://www.fbi.gov/video-repository/ic3-psa-kirsten-vangsness.mp4";
    // this.height = "360";
    // this.width = "550";
    // this.id = "sampleVid1";
    // this.caption = '';
    // this.poster = "http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg";
    // this.preload = "none";
  }
}
