import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsDialogService, SdsDialogModule } from '@gsa-sam/components';
import { SideToolbarComponent } from './side-toolbar.component';

@NgModule({
  declarations: [SideToolbarComponent],
  imports: [
    CommonModule, 
    SdsDialogModule,
  ], exports: [SideToolbarComponent],
  providers: [
    SdsDialogService,
  ]
})
export class SideToolbarModule { }
