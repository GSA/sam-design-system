import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsFooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SdsDirectivesModule } from '../external-link/external-link.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SdsDirectivesModule, FontAwesomeModule
  ],
  declarations: [SdsFooterComponent],
  exports: [SdsFooterComponent]
})
export class SdsFooterModule { }
