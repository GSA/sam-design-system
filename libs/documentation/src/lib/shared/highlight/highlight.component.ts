import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'docs-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngx-prism
      [language] = "language"
      [code] = "sourceCode"
    ></ngx-prism>
  `
})
export class HighlightComponent {

  @Input() sourceCode: string;
  @Input() language = "javascript";

  constructor() { }

}
