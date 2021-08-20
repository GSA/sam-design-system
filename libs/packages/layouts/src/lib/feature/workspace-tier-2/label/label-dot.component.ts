import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-workspace-tier2-label-dot',
  template: `
    <span
      class="radius-pill margin-right-05 text-middle"
      [style]="base"
      [style.background-color]="colors[color] ? colors[color].background : null"
      [style.border]="colors[color] ? '1px solid' + colors[color].border : null"
    >
    </span>
  `,
})
export class SdsWorkspaceTier2LabelDotComponent {
  @Input() color: string;

  base = 'padding: 1px 4px; font-size: 5px;';

  colors = {
    red: { background: '#e59393', border: '#d43535' },
    'light-blue': { background: '#9bdaf1', border: '#5c96ec' },
    yellow: { background: '#fad980', border: '#e4b60d' },
    'dark-gray': { background: '#5b616b', border: '#383838' },
    gray: { background: '#e4e2e0', border: '#9e9e9e' },
    green: { background: '#4aa564', border: '#3f820c' },
  };
}
