import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'sds-button-group-option',
  styleUrls: ['./button-group.component.scss'],
  template: `
    <ng-template #buttonGroupTemplate>
      <ng-content #content></ng-content>
    </ng-template>
  `
})
export class SdsButtonGroupOptionComponent {
  @ViewChild('buttonGroupTemplate') buttonGroupTemplate: TemplateRef<any>;
  @Input() value: any;
  @Input() checked: boolean;
  @Input('aria-label') ariaLabel: any;
}

@Component({
  selector: 'sds-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  host: { class: 'sds-button-group--segmented' }
})
export class SdsButtonGroupComponent {
  @ContentChildren(SdsButtonGroupOptionComponent) buttonOptions!: QueryList<
    SdsButtonGroupOptionComponent
  >;
  classesToApply: Object = {};

  /**
   * 'checkbox' || 'radio'
   */
  @Input() mode: string = 'radio';
  @Output() change: EventEmitter<MatButtonToggleChange> = new EventEmitter();
}
