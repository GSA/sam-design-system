import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsToolbarComponent } from './toolbar.component';
import { SdsToolbarHeaderComponent } from './toolbar-header.component';
import { SdsToolbarExpandDirective } from './toolbar-expand.directive';

@NgModule({
  imports: [CommonModule,FontAwesomeModule],
  exports: [SdsToolbarComponent, SdsToolbarExpandDirective],
  declarations: [
    SdsToolbarComponent,
    SdsToolbarHeaderComponent,
    SdsToolbarExpandDirective
  ],
  providers: []
})
export class SdsToolbarModule {}
