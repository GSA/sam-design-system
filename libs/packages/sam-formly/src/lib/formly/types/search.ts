import {  Component,
    ChangeDetectionStrategy,
    ViewChild,
    ChangeDetectorRef } from '@angular/core';
  import { AbstractSdsFormly } from '../sds-formly';
  import { SdsSearchComponent } from '@gsa-sam/components'
  
  @Component({
    selector: 'sds-formly-field-search',
    template: `
    <sds-search [formControl]="formControl"></sds-search>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class FormlyFieldSearchComponent extends AbstractSdsFormly {
  
   @ViewChild(SdsSearchComponent) public template: SdsSearchComponent;
  
    constructor (_cdr: ChangeDetectorRef) {
      super(); /* istanbul ignore next */
      this.cdr = _cdr;
    }
   }
  