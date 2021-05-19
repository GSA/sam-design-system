import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { RadioAdvancedComponent } from "./radio-advanced.component";


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [RadioAdvancedComponent],
  exports: [RadioAdvancedComponent],
  bootstrap: [RadioAdvancedComponent]
})
export class RadioAdvancedModule {}
