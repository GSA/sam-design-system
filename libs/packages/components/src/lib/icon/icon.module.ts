import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { SdsIconComponent } from '../icon/icon.component';


@NgModule({
  declarations: [SdsIconComponent],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule
  ],
  exports: [SdsIconComponent]
})
export class SdsIconModule { }
