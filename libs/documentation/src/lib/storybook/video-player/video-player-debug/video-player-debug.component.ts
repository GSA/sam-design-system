import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-debug',
  templateUrl: './video-player-debug.component.html',
})
export class VideoPlayerDebugComponent {
  videoPlayerConfiguration = {
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    debug: true,
    width: '100%',
    height: 'auto',
  };
}
