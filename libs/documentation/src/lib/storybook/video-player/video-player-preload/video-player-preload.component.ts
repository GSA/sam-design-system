import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-preload',
  templateUrl: './video-player-preload.component.html',
})
export class VideoPlayerPreloadComponent {
  videoPlayerConfiguration = {
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    width: '100%',
    height: 'auto',
    preload: 'none',
  };
}
