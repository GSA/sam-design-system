import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconModule, uswdsAttachMoney, uswdsIdentification } from '@gsa-sam/ngx-uswds-icons';
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { RadioHorizontalComponent } from "./radio-horizontal.component";
import { award } from 'ngx-bootstrap-icons'


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(), IconModule, NgxBootstrapIconsModule.pick({uswdsAttachMoney, uswdsIdentification, award})],
  declarations: [RadioHorizontalComponent],
  exports: [RadioHorizontalComponent],
  bootstrap: [RadioHorizontalComponent]
})
export class RadioHorizontalModule {}
