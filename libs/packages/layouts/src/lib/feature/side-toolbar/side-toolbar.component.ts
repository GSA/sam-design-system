import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SdsDialogService, SideNavigationModel } from '@gsa-sam/components';
import { SideToolbarDialogComponent } from '../side-toolbar-dialog/side-toolbar-dialog.component';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent {

  @Input() selectionPanelConfig: SideNavigationModel;
  @Input() filterPanelConfig: { form: any, fields: any, filterModel: any, options: any };

  @Output() selectedFilters = new EventEmitter();

  filtersExpanded = false;
  panelExpanded = false;

  constructor(
    private sdsDialogService: SdsDialogService,
  ) { }

  onFilterChange($event) {
    this.selectedFilters.emit($event);
  }

  onPanelSelection($event) {

  }

  onPanelHeaderClicked() {
    this.panelExpanded = !this.panelExpanded;
  }
  
  onOpenToolbarModalClicked() {
    this.sdsDialogService.open(SideToolbarDialogComponent,
      {
        data: {
          selectionPanelConfig: this.selectionPanelConfig,
          filterPanelConfig: this.filterPanelConfig
        },
        width: '100vw',
        height:  '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        hasBackdrop: false,
      });
  }

}
