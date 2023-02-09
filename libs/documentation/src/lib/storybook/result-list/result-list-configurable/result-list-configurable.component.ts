import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sds-result-list-configurable',
  templateUrl: './result-list-configurable.component.html',
})
export class ResultListConfigurableComponent {
  @Input('configuration')
  configuration: any;

  @Input('divider')
  divider: boolean;

  @Input('isDefaultModel')
  isDefaultModel: boolean;

  constructor() {}
}
