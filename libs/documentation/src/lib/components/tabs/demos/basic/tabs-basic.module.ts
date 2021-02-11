import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsTabsModule } from "@gsa-sam/components";
import { TabsBasicComponent } from "./tabs-basic.component";

@NgModule({
  imports: [
    CommonModule,
    SdsTabsModule
  ],
  declarations: [
    TabsBasicComponent
  ],
  exports: [
    TabsBasicComponent
  ],
  bootstrap: [
    TabsBasicComponent
  ]
})
export class TabsBasicModule {}
