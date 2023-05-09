import { Component } from '@angular/core';

@Component({
  selector: 'sds-video-player-description',
  templateUrl: './video-player-description.component.html',
})
export class VideoPlayerDescriptionComponent {
  videoPlayerConfiguration = {
    sourceWebm: '',
    sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    id: 'sampleId1',
    description: 'GSA example video',
    width: '100%',
    height: 'auto',
  };
}
