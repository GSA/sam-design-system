import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerSampleComponent } from './datepicker.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@sam-design-system/sam-material-extensions';
@NgModule({
  declarations: [DatepickerSampleComponent],
  imports: [
    CommonModule, SdsAutocompleteModule, FormsModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule
  ], exports: [DatepickerSampleComponent]
})
export class DatepickerSampleModule { }
