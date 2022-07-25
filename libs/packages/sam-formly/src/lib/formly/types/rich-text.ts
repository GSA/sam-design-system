import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsRichTextComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-rich-text-editor',
  template: ` <sds-rich-text [formControl]="formControl"> </sds-rich-text> `,
})
export class FormlyFieldRichTextEditorComponent extends AbstractSdsFormly {
  @ViewChild(SdsRichTextComponent, { static: true })
  public template: SdsRichTextComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}
