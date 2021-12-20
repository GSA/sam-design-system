import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsSideToolbarComponent } from './side-toolbar.component';
import { SdsDialogModule } from '../dialog/dialog.module';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [SdsSideToolbarComponent],
  imports: [
    CommonModule, 
    SdsDialogModule,
    IconModule,
  ], exports: [SdsSideToolbarComponent],
})
export class SdsSideToolbarModule { }
