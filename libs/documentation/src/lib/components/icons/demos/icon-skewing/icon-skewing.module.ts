import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconSkewingComponent } from './icon-skewing.component';



@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconSkewingComponent],
  exports: [IconSkewingComponent],
  bootstrap: [IconSkewingComponent]
})
export class IconSkewingModule {}
