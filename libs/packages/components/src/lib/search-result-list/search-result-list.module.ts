import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { SdsIconModule } from '../icon/icon.module';
import { alertError } from '../icon/custom-icons';
import { NgxBootstrapIconsModule, search, arrowLeftCircleFill, infoCircle, circle } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, FormsModule, SdsIconModule, 
    NgxBootstrapIconsModule.pick({search, arrowLeftCircleFill, infoCircle, alertError, circle})],
  declarations: [SdsSearchResultListComponent],
  exports: [SdsSearchResultListComponent]
})
export class SdsSearchResultListModule {}
