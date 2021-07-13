import { NgModule } from '@angular/core';
import { HeaderBasic } from './header-basic.component';
import { SdsHeaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { request, messages, workspace, logOut } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsHeaderModule, NgxBootstrapIconsModule.pick({request, messages, workspace, logOut})],
  declarations: [HeaderBasic],
  exports: [HeaderBasic],
  bootstrap: [HeaderBasic]
})
export class HeaderBasicModule {}
