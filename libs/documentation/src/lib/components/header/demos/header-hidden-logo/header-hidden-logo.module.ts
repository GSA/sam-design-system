import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsHeaderModule} from '@gsa-sam/layouts';
import { HeaderHiddenLogoComponent } from './header-hidden-logo.component';

@NgModule({
  imports: [CommonModule, SdsHeaderModule],
  declarations: [HeaderHiddenLogoComponent],
  exports: [HeaderHiddenLogoComponent],
  entryComponents: [ HeaderHiddenLogoComponent ],
})
export class HeaderHiddenLogoModule {}