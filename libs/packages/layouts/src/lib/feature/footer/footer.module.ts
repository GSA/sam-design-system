import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsFooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsCollapseModule } from '@gsa-sam/components';
import { SdsDirectivesModule } from '@gsa-sam/components';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SdsCollapseModule, FontAwesomeModule, SdsDirectivesModule, SdsAccordionModule
  ],
  declarations: [SdsFooterComponent],
  exports: [SdsFooterComponent]
})
export class SdsFooterModule { }
