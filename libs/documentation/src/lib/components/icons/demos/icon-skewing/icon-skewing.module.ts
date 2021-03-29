import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconSkewingComponent } from './icon-skewing.component';
import { NgxBootstrapIconsModule, square } from 'ngx-bootstrap-icons';



@NgModule({
  imports: [CommonModule, SdsIconModule, NgxBootstrapIconsModule.pick({square})],
  declarations: [IconSkewingComponent],
  exports: [IconSkewingComponent],
  bootstrap: [IconSkewingComponent]
})
export class IconSkewingModule {}
