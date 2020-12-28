import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SdsCollapseModule } from "@gsa-sam/components";
import { SdsFeedbackComponent } from "./sds-feedback.component";


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SdsCollapseModule, 
  ],
  declarations: [
    SdsFeedbackComponent
  ],
  exports: [
    SdsFeedbackComponent,
  ]
})
export class SdsFeedbackModule {}
