import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

import { SdsSearchModule, SdsDialogModule } from '@gsa-sam/components';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { SubheaderSearchSubPagesComponent } from './subheader-search-sub-pages.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { NgxBootstrapIconsModule, chevronLeft } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';



@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    IconModule,
    SdsButtonGroupModule,
    FormsModule,
    NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  declarations: [SubheaderSearchSubPagesComponent],
  exports: [SubheaderSearchSubPagesComponent],
  bootstrap: [SubheaderSearchSubPagesComponent]
})
export class SubheaderSearchSubPagesModule {}
