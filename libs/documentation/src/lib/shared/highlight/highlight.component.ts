import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'docs-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <pre class="highlight"><code [highlight]="sourceCode"></code></pre>
  `,
})
export class HighlightComponent {
  @Input() sourceCode: string;

  constructor() {}
}
