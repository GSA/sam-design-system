import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: `sds-dynamic-tabs-demo`,
  templateUrl: './dynamic-tabs.component.html',
})
export class DynamicTabsComponet {
  additionalTabs: { header: string | TemplateRef<any>; content: string | TemplateRef<any> }[] = [];

  tabFormGroup = new FormGroup({
    tabHeader: new FormControl(''),
    tabContent: new FormControl(''),
  });

  createTab() {
    const tabHeader = this.tabFormGroup.get('tabHeader').value;
    const tabContent = this.tabFormGroup.get('tabContent').value;
    if (tabHeader && tabHeader.length && tabContent && tabContent.length) {
      this.additionalTabs.push({
        header: tabHeader,
        content: tabContent,
      });
    }

    this.tabFormGroup.reset();
  }

  removeLastCreatedTab() {
    if (this.additionalTabs.length) {
      this.additionalTabs.pop();
    }
  }
}
