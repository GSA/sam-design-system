import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SdsCollapseModule } from "@gsa-sam/components";
import { NgxBootstrapIconsModule, arrowDownCircleFill, arrowUpCircleFill } from 'ngx-bootstrap-icons';
import { SdsFeedbackComponent } from "./sds-feedback.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsCollapseModule,
    IconModule,
    NgxBootstrapIconsModule.pick({arrowDownCircleFill, arrowUpCircleFill})
  ],
  declarations: [
    SdsFeedbackComponent
  ],
  exports: [
    SdsFeedbackComponent,
  ]
})
export class SdsFeedbackModule {}
