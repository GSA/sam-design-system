import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-caption',
  templateUrl: './video-player-caption.component.html',
})
export class VideoPlayerCaptionComponent {
  videoPlayerConfiguration = {
    sourceWebm: '',
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    width: '100%',
    height: 'auto',
    caption: 'assets/video/gsa-sample.vtt',
    poster: 'https://github.com/GSA/sam-static-content/raw/master/assets/images/gsa-sample.jpg',
  };
}
