import { Component, Input } from '@angular/core';
import { NavigationLink, SelectionPanelModel } from '@gsa-sam/components';

@Component({
  selector: 'sds-selection-panel-configurable',
  templateUrl: './selection-panel-configurable.component.html',
})
export class SelectionPanelConfigurableComponent {
  _config: SelectionPanelModel = {navigationLinks: []};

  @Input()
  set config(options: Array<NavigationLink>){
    this._config = {navigationLinks: options}
  }

  constructor() {}
}
