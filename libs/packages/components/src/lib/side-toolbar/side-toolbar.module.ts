import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsSideToolbarComponent } from './side-toolbar.component';
import { SdsDialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [SdsSideToolbarComponent],
  imports: [
    CommonModule, 
    SdsDialogModule,
  ], exports: [SdsSideToolbarComponent],
})
export class SdsSideToolbarModule { }
