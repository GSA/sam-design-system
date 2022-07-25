import { Directive, TemplateRef } from '@angular/core';

/**
 * Accordion Item content that will be rendered lazily
 * after the accordion item is opened for the first time.
 */
@Directive({
  selector: 'ng-template[sdsAccordionItemContent]',
})
export class SdsAccordionItemContentDirective {
  constructor(public _template: TemplateRef<any>) {}
}
