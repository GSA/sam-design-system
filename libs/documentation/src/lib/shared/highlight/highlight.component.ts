import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'docs-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <pre class="highlight"><code ></code></pre> `,
})
export class HighlightComponent {
  @Input() sourceCode: string;

  constructor() {}
}
