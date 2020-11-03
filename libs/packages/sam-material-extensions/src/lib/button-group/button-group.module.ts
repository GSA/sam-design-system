import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {SdsButtonGroupComponent, SdsButtonGroupOptionComponent} from './button-group.component';

@NgModule({
  declarations: [
    SdsButtonGroupComponent,
    SdsButtonGroupOptionComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    SdsButtonGroupComponent,
    SdsButtonGroupOptionComponent
  ],
})
export class SdsButtonGroupModule { }
