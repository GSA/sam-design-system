import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormlySampleModule } from './feature/formly-sample/formly.module';
import { FormlyInputComponent } from './feature/formly-sample/formly-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FilterWrapperComponent } from './feature/filter-wrapper/filter-wrapper.component';
import { FilterWrapperSampleModule } from './feature/filter-wrapper/filter-wrapper.module';
import { FormlyFormsComponent } from './feature/formly-forms/formly-forms.component';
import { FormlyFormsModule } from './feature/formly-forms/formly-forms.module';
import { FormlyConditionalComponent } from './feature/formly-conditional/formly-conditional.component';
import { FilterAlignSampleModule } from './feature/filter-align/filter-align.module';
import { FilterAlignComponent } from './feature/filter-align/filter-align.component';

export const ROUTES: Routes = [
  { path: 'formlyInput', component: FormlyInputComponent },
  { path: 'formlyFilters', component: FilterWrapperComponent },
  { path: 'formlyForms', component: FormlyFormsComponent },
  { path: 'formlyConditional', component: FormlyConditionalComponent },
  { path: 'FilterAlign', component: FilterAlignComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild(ROUTES),
    FormlySampleModule,
    FormlyFormsModule,
    FilterWrapperSampleModule,
    FilterAlignSampleModule
  ],
  exports: [RouterModule],
  declarations: [FormlyConditionalComponent]
})
export class SamFormlySampleModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
}