import {
  Directive,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { CdkAccordion } from '@angular/cdk/accordion';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { HOME, END } from '@angular/cdk/keycodes';
import {
  SDS_ACCORDION,
  SdsAccordionBase,
  SdsAccordionDisplayMode,
} from './accordion-base';
import { SdsAccordionItemHeaderComponent } from './accordion-item-header.component';

@Directive({
  selector: 'sds-accordion',
  exportAs: 'sdsAccordion',
  inputs: ['multi'],
  providers: [
    {
      provide: SDS_ACCORDION,
      useExisting: SdsAccordionDirective,
    },
  ],
  host: {
    class: 'sds-accordion',
    '[class.sds-accordion--basic]': 'displayMode === "basic"',
  },
})
export class SdsAccordionDirective extends CdkAccordion
  implements SdsAccordionBase, AfterContentInit {
  private _keyManager: FocusKeyManager<SdsAccordionItemHeaderComponent>;

  @ContentChildren(SdsAccordionItemHeaderComponent, { descendants: true })
  _headers: QueryList<SdsAccordionItemHeaderComponent>;

  @Input() displayMode: SdsAccordionDisplayMode = 'default';

  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager(this._headers).withWrap();
  }

  /** Handles keyboard events coming in from the item headers. */
  _handleHeaderKeydown(event: KeyboardEvent) {
    const { keyCode } = event;
    if (keyCode === HOME) {
      this._keyManager.setFirstItemActive();
      event.preventDefault();
    } else if (keyCode === END) {
      this._keyManager.setLastItemActive();
      event.preventDefault();
    } else {
      this._keyManager.onKeydown(event);
    }
  }

  _handleHeaderFocus(header: SdsAccordionItemHeaderComponent) {
    this._keyManager.updateActiveItem(header);
  }
}
