import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalLayoutComponent } from './horizontal-layout.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HorizontalLayoutComponent],
  imports: [CommonModule, SdsFiltersModule, FormlyModule.forRoot(), ReactiveFormsModule, FormsModule],
})
export class HorizontalLayoutModule {}
