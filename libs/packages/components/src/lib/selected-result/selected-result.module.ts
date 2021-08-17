import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSSelectedResultComponent } from './selected-result.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, IconModule],
  declarations: [SDSSelectedResultComponent],
  exports: [SDSSelectedResultComponent],
})
export class SdsSelectedResultsModule {}
