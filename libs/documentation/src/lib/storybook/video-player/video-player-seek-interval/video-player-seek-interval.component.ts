import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-seek-interval',
  templateUrl: './video-player-seek-interval.component.html',
})
export class VideoPlayerSeekIntervalComponent {
  videoPlayerConfiguration = {
    sourceWebm: '',
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    width: '100%',
    height: 'auto',
    seekInterval: 20,
    poster: 'https://github.com/GSA/sam-static-content/raw/master/assets/images/gsa-sample.jpg',
  };
}
