import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-cross-origin',
  templateUrl: './video-player-cross-origin.component.html',
})
export class VideoPlayerCrossOriginComponent {
  videoPlayerConfiguration = {
    sourceWebm: '',
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    width: '100%',
    height: 'auto',
    poster: 'https://github.com/GSA/sam-static-content/raw/master/assets/images/gsa-sample.jpg',
  };
}
