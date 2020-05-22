import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteMinCharacter} from './autocomplete-mincharacter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteMinCharacter],
  exports: [FormlyAutocompleteMinCharacter],
  bootstrap: [FormlyAutocompleteMinCharacter]
})
export class FormlyAutocompleteMinCharacterModule {}
