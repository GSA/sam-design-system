import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSampleComponent } from './autocomplete-sample.component';
import { SdsAutocompleteModule } from '@gsa-sam/components';
@NgModule({
  declarations: [AutocompleteSampleComponent],
  imports: [
    CommonModule, SdsAutocompleteModule
  ], exports: [AutocompleteSampleComponent]
})
export class AutocompleteSampleModule { }
