import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeLinkToSbComponent } from './date-pipe-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DatePipeLinkToSbComponent],
  exports: [DatePipeLinkToSbComponent],
  bootstrap: [DatePipeLinkToSbComponent],
})
export class DatePipeLinkToSbModule {}
