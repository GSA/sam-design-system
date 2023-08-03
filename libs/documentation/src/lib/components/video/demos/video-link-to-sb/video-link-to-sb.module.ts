import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoLinkToSbComponent } from './video-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoLinkToSbComponent],
  exports: [VideoLinkToSbComponent],
  bootstrap: [VideoLinkToSbComponent],
})
export class VideoLinkToSbModule {}
