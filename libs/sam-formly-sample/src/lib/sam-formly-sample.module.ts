import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FormlySampleModule } from './feature/formly-sample/formly.module';
import { FormlyInputComponent } from './feature/formly-sample/formly-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

export const ROUTES: Routes = [
 
  //{ path: 'footer', component: FooterSampleComponent },

  { path: 'formlyInput', component: FormlyInputComponent },
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
  ],
  exports: [RouterModule]
})
export class SamFormlySampleModule {
  constructor() {
    library.add(fas, sds);
  }
}
