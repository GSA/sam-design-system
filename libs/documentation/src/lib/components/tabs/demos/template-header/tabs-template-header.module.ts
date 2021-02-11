import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsTabsModule } from "@gsa-sam/components";
import { TabsTemplateHeaderComponent } from "./tabs-template-header.component";

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule,
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