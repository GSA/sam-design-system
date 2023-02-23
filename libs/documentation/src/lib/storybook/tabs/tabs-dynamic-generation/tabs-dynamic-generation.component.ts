import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sds-tabs-dynamic-generation',
  templateUrl: './tabs-dynamic-generation.component.html',
  styleUrls: ['./tabs-dynamic-generation.component.scss'],
})
export class TabsDynamicGenerationComponent {
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
