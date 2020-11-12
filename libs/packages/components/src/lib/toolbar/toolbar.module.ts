import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsToolbarComponent } from './toolbar.component';
import { SdsToolbarHeaderComponent } from './toolbar-header.component';
import { SdsToolbarExpandDirective } from './toolbar-expand.directive';
import { SdsDialogModule } from '../dialog/dialog.module';

@NgModule({
  imports: [CommonModule, SdsDialogModule,],
  exports: [SdsToolbarComponent, SdsToolbarExpandDirective],
  declarations: [
    SdsToolbarComponent,
    SdsToolbarHeaderComponent,
    SdsToolbarExpandDirective
  ],
  providers: []
})
export class SdsToolbarModule {}
