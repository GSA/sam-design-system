import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPageComponent } from './basic-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { PortalModule } from '@angular/cdk/portal';

import {
  SdsLandingButtonGroupModule,
  SdsLandingListModule,
  SdsLandingCardModule,
  SdsLandingPageModule
} from '@gsa-sam/layouts';

@NgModule({
  declarations: [BasicPageComponent],
  imports: [
    CommonModule,
    SdsLandingButtonGroupModule,
    SdsLandingListModule,
    SdsLandingCardModule,
    SdsLandingPageModule,
    FormlyModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    SdsAccordionModule,
    PortalModule
  ],
})
export class BasicPageModule {}
