import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-workspace-tier2-item-label',
  template: `
    <span
      class="text-semibold margin-right-2px"
      [class.padding-x-05]="size === 'small'"
      [class.padding-x-1]="size !== 'small'"
      [class.padding-y-05]="size !== 'small'"
      [style]="color ? colors[color] : 'border: 1px solid #969696'"
      [style.fontSize]="size === 'small' ? '0.75rem' : '0.87rem'"
    >
      <ng-content></ng-content>
    </span>
  `,
})
export class SdsWorkspaceTier2LabelComponent {
  @Input() color: string;
  @Input() size: string;

  purple = 'background-color: #fbdcff; color: #53068c;';
  gray = 'background-color: #f9f9f7; color: #454540;';

  colors = {
    purple:
      'background-color: #fbdcff; color: #53068c; border: 1px solid #a776cc',
    gray:
      'background-color: #f9f9f7; color: #454540; border: 1px solid #cac9c0',
  };
}
