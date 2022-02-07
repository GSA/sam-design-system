import { NgModule } from "@angular/core";
import { SdsExpiresModule } from "@gsa-sam/components"
import { ExpiresBasicComponent } from "./expires-basic.component";

@NgModule({
  imports: [
    SdsExpiresModule
  ],
  declarations: [
    ExpiresBasicComponent
  ],
  exports: [
    ExpiresBasicComponent
  ]
})
export class ExpiresBasicModule {}
