import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { CustomTemplateComponent } from "./custom-template.component";

@NgModule({
  imports: [
    CommonModule,
    SdsFormlyModule,
    FormlyModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CustomTemplateComponent,
  ],
  exports: [
    CustomTemplateComponent
  ],
  bootstrap: [
    CustomTemplateComponent
  ]
})
export class CustomTemplateModule {}