import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-caption',
  templateUrl: './video-player-caption.component.html',
})
export class VideoPlayerCaptionComponent {
  videoPlayerConfiguration = {
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    width: '100%',
    height: 'auto',
    caption: 'assets/video/gsa-sample.vtt',
  };
}
