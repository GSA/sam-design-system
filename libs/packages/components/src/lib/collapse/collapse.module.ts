import { NgModule } from "@angular/core";
import { SdsCollapseComponent } from './collapse.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SdsCollapseComponent],
  imports: [CommonModule, FormsModule],
  exports: [SdsCollapseComponent]
})

export class SdsCollapseModule {}
