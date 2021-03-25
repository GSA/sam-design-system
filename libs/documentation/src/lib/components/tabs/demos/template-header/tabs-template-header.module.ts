import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsIconModule, SdsTabsModule } from "@gsa-sam/components";
import { NgxBootstrapIconsModule, fileExcel, table, tablet } from 'ngx-bootstrap-icons';
import { TabsTemplateHeaderComponent } from "./tabs-template-header.component";

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({fileExcel, table, tablet})
  ],
  declarations: [
    TabsTemplateHeaderComponent
  ],
  exports: [
    TabsTemplateHeaderComponent
  ],
  bootstrap: [
    TabsTemplateHeaderComponent
  ]
})
export class TabsTemplateHeaderModule {}