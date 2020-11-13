import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SdsDialogService, SideNavigationModel } from '@gsa-sam/components';
import { SideToolbarDialogComponent } from '../side-toolbar-dialog/side-toolbar-dialog.component';
import { SelectionPanelConfig, FilterPanelConfig } from './model/side-toolbar.model';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent {
  
  @Input() selectionPanelConfig: SelectionPanelConfig;
  @Input() filterPanelConfig: FilterPanelConfig;

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
    const dialog = this.sdsDialogService.open(SideToolbarDialogComponent,
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

      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.selectedFilters.emit(result);
        }
      });
  }

}
