import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { AutocompleteCheckbox } from './autocomplete-checkbox.component';
import { NgxBootstrapIconsModule, square } from 'ngx-bootstrap-icons';
import { add, IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [AutocompleteCheckbox],
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ square, add }),
  ],
  exports: [AutocompleteCheckbox],
  bootstrap: [AutocompleteCheckbox],
})
export class AutocompleteCheckboxModule {}
