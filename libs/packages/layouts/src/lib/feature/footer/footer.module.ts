import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SdsCollapseModule } from '@gsa-sam/components';
import { SdsDirectivesModule } from '@gsa-sam/components';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    SdsCollapseModule, 
    SdsDirectivesModule, 
    SdsAccordionModule
  ],
  declarations: [SdsFooterComponent],
  exports: [SdsFooterComponent]
})
export class SdsFooterModule { }
