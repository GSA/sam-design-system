import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {SdsIconModule } from '@gsa-sam/components';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  imports: [SdsIconModule, CommonModule],
  exports: [RoadmapComponent],
  declarations: [RoadmapComponent],
  providers: [],
})
export class RoadmapModule {}
