import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';
import { SdsIconComponent } from '../icon/icon.component';


@NgModule({
  declarations: [SdsIconComponent],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    
  ],
  exports: [SdsIconComponent]
})
export class SdsIconModule { }
