import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityResultComponent } from './entity-result.component';

@NgModule({
  declarations: [EntityResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EntityResultComponent]
})
export class EntityResultModule { }
