import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { IconModule, alertError } from 'ngx-uswds-icons';
import { NgxBootstrapIconsModule, search, arrowLeftCircleFill, infoCircle, circle } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, FormsModule, IconModule,
    NgxBootstrapIconsModule.pick({search, arrowLeftCircleFill, infoCircle, alertError, circle})],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule {}
