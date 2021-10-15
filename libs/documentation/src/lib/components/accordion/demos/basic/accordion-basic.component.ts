import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UsaAccordionComponent, UsaAccordionItem } from '@gsa-sam/ngx-uswds';

@Component({
  templateUrl: 'accordion-basic.component.html',
  selector: `sds-accordion-basic-demo`
})
export class AccordionBasic {

  @ViewChild(UsaAccordionComponent) sdsAccordionDemo: UsaAccordionComponent;
  @ViewChildren(UsaAccordionItem) usaAccordionItems: QueryList<UsaAccordionItem>;

  singleSelect = true;

  toggle(accordionItem: UsaAccordionItem): void {
    this.sdsAccordionDemo.toggle(this.usaAccordionItems.first.id);
  }

  close(): void {
    this.sdsAccordionDemo.collapse(this.usaAccordionItems.first.id);
  }

  open(): void {
    this.sdsAccordionDemo.expand(this.usaAccordionItems.first.id);
  }

  toggleDisabled(): void {
    this.usaAccordionItems.get(2).disabled = !this.usaAccordionItems.get(2).disabled;
  }

  openAll(): void {
    this.sdsAccordionDemo.expandAll();
  }

  closeAll(): void {
    this.sdsAccordionDemo.collapseAll();
  }

  toggleMulti(): void {
    this.singleSelect = !this.singleSelect;
  }

}
