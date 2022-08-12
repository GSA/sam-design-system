import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, StackedIconModule } from '@gsa-sam/ngx-uswds-icons';
import { IconsStackingComponent } from './icons-stacking.component';
import {
  NgxBootstrapIconsModule,
  squareFill,
  handThumbsDown,
  circleFill,
  cone,
  diamond,
  diamondFill,
} from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackedIconModule,
    NgxBootstrapIconsModule.pick({ squareFill, handThumbsDown, circleFill, cone, diamond, diamondFill }),
  ],
  declarations: [IconsStackingComponent],
  exports: [IconsStackingComponent],
  bootstrap: [IconsStackingComponent],
})
export class IconsStackingModule {}
