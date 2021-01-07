import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SdsCollapseModule, SdsIconModule } from "@gsa-sam/components";
import { SdsFeedbackComponent } from "./sds-feedback.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsCollapseModule, 
    SdsIconModule,
  ],
  declarations: [
    SdsFeedbackComponent
  ],
  exports: [
    SdsFeedbackComponent,
  ]
})
export class SdsFeedbackModule {}
