import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSSelectedResultComponent } from './selected-result.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
  declarations: [SDSSelectedResultComponent],
  exports: [SDSSelectedResultComponent]
})
export class SdsSelectedResultsModule {}
