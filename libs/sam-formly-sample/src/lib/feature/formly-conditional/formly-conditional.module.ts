import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyConditionalComponent } from './formly-conditional.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@sam-design-system/sam-formly';

@NgModule({
  declarations: [FormlyConditionalComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    ReactiveFormsModule,
    FormlyModule.forRoot()
  ]
})
export class FormlyConditionalModule { }
