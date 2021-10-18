import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPageComponent } from './basic-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { PortalModule } from '@angular/cdk/portal';

import {
  SdsLandingButtonGroupModule,
  SdsLandingListModule,
  SdsLandingCardModule,
  SdsLandingPageModule
} from '@gsa-sam/layouts';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

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
    PortalModule,
    UsaAccordionModule,
  ],
})
export class BasicPageModule {}
