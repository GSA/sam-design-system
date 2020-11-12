import { Component, Inject, OnInit } from '@angular/core';
import { SdsDialogRef, SDS_DIALOG_DATA, SideNavigationModel } from '@gsa-sam/components';

interface DialogData {
  selectionPanelConfig: SideNavigationModel,
  filterPanelConfig: any,
};

@Component({
  selector: 'sds-side-toolbar-dialog',
  templateUrl: './side-toolbar-dialog.component.html',
  styleUrls: ['./side-toolbar-dialog.component.scss']
})
export class SideToolbarDialogComponent implements OnInit {

  selectionPanelConfig: SideNavigationModel;
  filterPanelConfig: any;

  filtersExpanded = true;
  panelExpanded = true;

  constructor(
    public dialogRef: SdsDialogRef<SideToolbarDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.selectionPanelConfig = this.data.selectionPanelConfig;
    this.filterPanelConfig = this.data.filterPanelConfig;
  }

  onFilterChange($event) {

  }

  onApplyFilter() {

  }

  onCancelClicked() {
    this.dialogRef.close();
  }

}
