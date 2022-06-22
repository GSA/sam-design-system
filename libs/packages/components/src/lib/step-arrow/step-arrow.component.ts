import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-step-arrow',
  templateUrl: './step-arrow.component.html',
  styleUrls: ['./step-arrow.component.scss'],
})
export class SdsStepArrowComponent {
  @Input() status: string = 'inactive';
  @Input() number: any;
}
