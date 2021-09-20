import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsSearchComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-field-search',
  template: `
  <div class="grid-row">
    <sds-search
      [formControl]="formControl"
      (submit)="to.submitHandler && to.submitHandler($event)"
    ></sds-search>
    <span *ngIf="to.tooltipText" class="sds-stack padding-top-105 margin-left-1"
        [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle"
        [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0"
        aria-label="info tooltip">
        <usa-icon [size]="'lg'" [icon]="'info-circle-fill'"></usa-icon>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSearchComponent extends AbstractSdsFormly {
  @ViewChild(SdsSearchComponent, { static: true }) public template: SdsSearchComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}
