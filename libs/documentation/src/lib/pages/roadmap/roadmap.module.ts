import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from 'ngx-uswds-icons';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  imports: [IconModule, CommonModule],
  exports: [RoadmapComponent],
  declarations: [RoadmapComponent],
  providers: [],
})
export class RoadmapModule {}
