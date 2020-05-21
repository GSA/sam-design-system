import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultsLayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [ResultsLayoutComponent],
  declarations: [ResultsLayoutComponent],
  providers: []
})
export class ResultsLayoutModule {}
