import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-uswds-icons';
import { IconSkewingComponent } from './icon-skewing.component';
import { NgxBootstrapIconsModule, square } from 'ngx-bootstrap-icons';



@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({square})],
  declarations: [IconSkewingComponent],
  exports: [IconSkewingComponent],
  bootstrap: [IconSkewingComponent]
})
export class IconSkewingModule {}
