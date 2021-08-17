import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsDateModule } from '@gsa-sam/components';
import { DatePipeBasicComponent } from './date-pipe-basic.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';


@NgModule({
  imports: [CommonModule, SdsDateModule, IconModule],
  declarations: [DatePipeBasicComponent],
  exports: [DatePipeBasicComponent],
  bootstrap: [DatePipeBasicComponent]
})
export class DatePipeBasicModule {}
