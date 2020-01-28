import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsCollapseComponent } from './collapse.component';
import { CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [SdsCollapseComponent, CollapseDirective],
  imports: [
    CommonModule
  ],
  exports: [SdsCollapseComponent, CollapseDirective]
})
export class SdsCollapseModule { }
