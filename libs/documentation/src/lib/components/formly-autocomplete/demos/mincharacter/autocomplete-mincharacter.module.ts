import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteMinCharacter} from './autocomplete-mincharacter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
  ],
  declarations: [FormlyAutocompleteMinCharacter],
  exports: [FormlyAutocompleteMinCharacter],
  bootstrap: [FormlyAutocompleteMinCharacter]
})
export class FormlyAutocompleteMinCharacterModule {}
