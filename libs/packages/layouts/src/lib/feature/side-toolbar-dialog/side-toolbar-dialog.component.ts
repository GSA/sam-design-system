import { Component, Inject, OnInit } from '@angular/core';
import { SdsDialogRef, SDS_DIALOG_DATA, SideNavigationModel } from '@gsa-sam/components';
import { FilterPanelConfig, SelectionPanelConfig } from '../side-toolbar/model/side-toolbar.model';

interface DialogData {
  selectionPanelConfig: SelectionPanelConfig,
  filterPanelConfig: FilterPanelConfig,
};

@Component({
  selector: 'sds-side-toolbar-dialog',
  templateUrl: './side-toolbar-dialog.component.html',
  styleUrls: ['./side-toolbar-dialog.component.scss']
})
export class SideToolbarDialogComponent implements OnInit {

  selectionPanelConfig: SelectionPanelConfig;
  filterPanelConfig: FilterPanelConfig;

  filtersExpanded = true;
  panelExpanded = true;

  selectedFilters = {};

  constructor(
    public dialogRef: SdsDialogRef<SideToolbarDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.selectionPanelConfig = this.data.selectionPanelConfig;
    this.filterPanelConfig = this.data.filterPanelConfig;
  }

  onFilterChange($event) {
    this.selectedFilters = $event;
  }

  onApplyFilter() {
    this.dialogRef.close(this.selectedFilters);
  }

  onCancelClicked() {
    this.dialogRef.close();
  }

}
