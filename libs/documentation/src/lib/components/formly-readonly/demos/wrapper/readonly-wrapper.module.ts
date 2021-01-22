import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsReadonlyModule } from "@gsa-sam/sam-formly";
import { ReadonlyWrapperComponent } from "./readonly-wrapper.component";

@NgModule({
  imports: [
    CommonModule,
    SdsReadonlyModule,
  ],
  declarations: [
    ReadonlyWrapperComponent
  ],
  exports: [
    ReadonlyWrapperComponent
  ],
  bootstrap: [
    ReadonlyWrapperComponent
  ]
})
export class ReadonlyWrapperModule {}