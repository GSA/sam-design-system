import {
  Component,
  Input,
  TemplateRef,
  OnInit,
  ViewChild
} from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'sds-accordion-next',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class SdsAccordionComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  // @ViewChild(MatSort) sort: MatSort;

  // /**
  //  * Data for table
  //  */
  // @Input() data;

  // /**
  //  * columns to display in header
  //  * {@link SdsTableColumnSettings}
  //  */
  // @Input() columns: SdsTableColumnSettings[];

  // /**
  //  * template outlet for expandable detail
  //  * all properties for the selected row will be available for use in the template after set using let-{new property name}
  //  */
  // @Input() detailRow?: TemplateRef<any>;

  // /**
  //  * table settings
  //  * {@link SdsTableSettings}
  // */
  // @Input() settings?: SdsTableSettings;

  // /**
  //  * table MatTableDataSource data source based on Input data
  //  */
  // dataSource: MatTableDataSource<any>;

  // /**
  //  * currently expanded row
  //  */
  // expandedRow: any | null = null;

  // /**
  //  * column ids displayed
  //  */
  // columnIds: string[] = [];

  // constructor() {}

  // ngOnInit() {
  //   // convert data to MatTableDataSource
  //   this.dataSource = new MatTableDataSource(this.data);

  //   // enable sort if set in settings
  //   if (this.settings && this.settings.sort) {
  //     this.dataSource.sort = this.sort;
  //   } else {
  //     this.sort.disabled = true;
  //   }

  //   // get column primary keys
  //   this.columns.forEach(col => {
  //     this.columnIds.push(col.primaryKey);
  //   });

  //   // add column if expandable
  //   if (this.detailRow) {
  //     this.columnIds.push('sdsExpandableRow');
  //   }
  // }

  // toggleRowExpansion(row: any) {
  //   this.expandedRow = this.expandedRow === row ? null : row;
  // }
}
