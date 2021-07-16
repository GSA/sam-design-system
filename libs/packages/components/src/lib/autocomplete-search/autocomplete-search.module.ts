import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSAutocompleteSearchComponent } from './autocomplete-search.component';
import { SDSClickOutsideModule } from '../click-outside/click-outside.module';
import { SdsTabOutsideModule } from '../tab-outside/taboutside.module';
import { NgxBootstrapIconsModule, x, caretDownFill, caretUpFill } from 'ngx-bootstrap-icons';
import { IconModule } from 'ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SDSClickOutsideModule,
    SdsTabOutsideModule,
    IconModule,
    NgxBootstrapIconsModule.pick({x, caretDownFill, caretUpFill})
  ],
  declarations: [SDSAutocompleteSearchComponent],
  exports: [SDSAutocompleteSearchComponent],
})
export class SdsAutocompleteSearchModule {}
