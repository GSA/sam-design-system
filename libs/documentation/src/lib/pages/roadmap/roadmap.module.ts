import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  imports: [FontAwesomeModule, CommonModule],
  exports: [RoadmapComponent],
  declarations: [RoadmapComponent],
  providers: [],
})
export class RoadmapModule {}
