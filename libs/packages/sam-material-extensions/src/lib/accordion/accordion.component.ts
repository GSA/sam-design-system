import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  Directive,
  QueryList,
  ContentChildren,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { MatAccordion } from '@angular/material/expansion';

@Directive({ selector: 'sds-accordion-title' })
export class SdsAccordionTitleDirective {}

@Directive({ selector: 'sds-accordion-content' })
export class SdsAccordionContentDirective {}

@Component({
  selector: 'sds-accordion-item',
  template: `
    <ng-template #itemTitleTemplate>
      <ng-content #title select="sds-accordion-title"></ng-content>
    </ng-template>
    <ng-template #itemContentTemplate>
      <ng-content #content select="sds-accordion-content"></ng-content>
    </ng-template>
  `
})
export class SdsAccordionItemComponent {
  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;
  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;

  @Input() expanded = false;

  @Input() disabled = false;

  /** Toggles the expanded state of the expansion panel. */
  toggle(): void {
    this.expanded = !this.expanded;
  }

  /** Sets the expanded state of the expansion panel to false. */
  close(): void {
    this.expanded = false;
  }

  /** Sets the expanded state of the expansion panel to true. */
  open(): void {
    this.expanded = true;
  }

  /** Toggles the disabled state of the expansion panel. */
  toggleDisabled(): void {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.expanded = false;
    }
  }
}

@Component({
  selector: 'sds-accordion-next',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsAccordionComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<
    SdsAccordionItemComponent
  >;

  @Input() multi = false;

  @Output() multiChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() displayMode = 'flat';

  /** Opens all accordion items. */
  openAll(): void {
    this.accordion.openAll();
  }

  /** Closes all accordion items. */
  closeAll(): void {
    this.accordion.closeAll();
  }

  /** Toggles the multi state of the accordion. */
  toggleMulti(): void {
    this.multi = !this.multi;
    this.accordion.closeAll();
    this.multiChange.emit(this.multi);
  }
}
