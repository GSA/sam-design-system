import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { ReadonlyFormlyTypeComponent } from "./readonly-formly-type.component";

@NgModule({
  imports: [
    CommonModule,
    SdsFormlyModule,
    FormlyModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ReadonlyFormlyTypeComponent,
  ],
  exports: [
    ReadonlyFormlyTypeComponent
  ],
  bootstrap: [
    ReadonlyFormlyTypeComponent
  ]
})
export class ReadonlyFormlyTypeModule{}