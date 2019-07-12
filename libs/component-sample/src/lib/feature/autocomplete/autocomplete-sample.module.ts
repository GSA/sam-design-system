import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSampleComponent } from './autocomplete-sample.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AutocompleteSampleComponent],
  imports: [
    CommonModule, SdsAutocompleteModule, FormsModule
  ], exports: [AutocompleteSampleComponent]
})
export class AutocompleteSampleModule { }
