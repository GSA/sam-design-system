import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'sds-button-group-option',
  styleUrls: ['./button-group.component.scss'],
  template: `
    <ng-template #buttonGroupTemplate>
      <ng-content #content></ng-content>
    </ng-template>
  `,
})
export class SdsButtonGroupOptionComponent {
  @ViewChild('buttonGroupTemplate') buttonGroupTemplate: TemplateRef<any>;
  @Input() value: any;
  @Input() checked: boolean;
  @Input('aria-label') ariaLabel: any;
  @Input() disabled: boolean;
}

@Component({
  selector: 'sds-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  host: {
    class: 'sds-button-group--segmented',
    '[class.sds-button-group--modular]': 'modularDashboard',
  },
})
export class SdsButtonGroupComponent implements OnInit {
  ngOnInit(): void {
    if (this.modularDashboard) {
      this.mode = 'radio';
    }
  }
  @ContentChildren(SdsButtonGroupOptionComponent) buttonOptions!: QueryList<SdsButtonGroupOptionComponent>;
  classesToApply: Object = {};

  /**
   * 'checkbox' || 'radio'
   */
  @Input()
  mode: 'checkbox' | 'radio' = 'radio';

  @Input()
  modularDashboard: boolean = false;

  @Output()
  change = new EventEmitter<MatButtonToggleChange>();
}
