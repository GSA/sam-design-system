import { Component, Input } from '@angular/core';

@Component({
	standalone: false,
  selector: 'sds-video-player-configurable',
  templateUrl: './video-player-configurable.component.html',
})
export class VideoPlayerConfigurableComponent {
  @Input('videoData')
  videoData: object;

  @Input('crossorigin')
  crossorigin: string;
}
