import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';
@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ResultComponent]
})
export class ResultModule { }
