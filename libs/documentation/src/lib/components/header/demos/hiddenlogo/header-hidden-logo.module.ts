import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsHeaderModule} from '@gsa-sam/layouts';
import { HeaderHiddenLogoComponent } from './header-hidden-logo.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { request, messages, workspace, logOut } from 'ngx-uswds-icons'

@NgModule({
  imports: [CommonModule, SdsHeaderModule, NgxBootstrapIconsModule.pick({request, messages, workspace, logOut})],
  declarations: [HeaderHiddenLogoComponent],
  exports: [HeaderHiddenLogoComponent],
  bootstrap: [ HeaderHiddenLogoComponent ],
})
export class HeaderHiddenLogoModule {}
