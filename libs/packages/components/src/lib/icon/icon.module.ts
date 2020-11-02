import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';
import { SdsIconComponent } from '../icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SdsIconComponent],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FontAwesomeModule
  ],
  exports: [SdsIconComponent]
})
export class SdsIconModule { }
