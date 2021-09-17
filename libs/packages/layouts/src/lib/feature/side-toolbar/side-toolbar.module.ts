import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsDialogService, SdsDialogModule } from '@gsa-sam/components';
import { SideToolbarComponent } from './side-toolbar.component';
import { chevronLeft, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [SideToolbarComponent],
  imports: [
    CommonModule,
    SdsDialogModule,
    IconModule,
    NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  exports: [SideToolbarComponent],
  providers: [
    SdsDialogService,
  ]
})
export class SideToolbarModule { }
