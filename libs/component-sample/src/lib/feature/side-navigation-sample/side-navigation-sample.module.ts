import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';
import { FooterSampleComponent } from '../footer-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/footer/footer.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideNavigationSampleComponent } from './side-navigation-sample.component';

@NgModule({
  imports: [SdsSideNavigationModule, SdsAccordionModule, CommonModule, FormsModule,
    SdsToolbarModule, SdsPageModule, SdsFooterModule],
  exports: [SideNavigationSampleComponent],
  declarations: [SideNavigationSampleComponent],
  providers: []
})
export class SideNavigationSampleModule { }
