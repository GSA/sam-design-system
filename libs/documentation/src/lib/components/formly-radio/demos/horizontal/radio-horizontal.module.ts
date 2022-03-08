import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { RadioHorizontalComponent } from "./radio-horizontal.component";


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(),],
  declarations: [RadioHorizontalComponent],
  exports: [RadioHorizontalComponent],
  bootstrap: [RadioHorizontalComponent]
})
export class RadioHorizontalModule {}
