import {
  Component,
  Input,
  OnInit,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild,
  TemplateRef,
  Directive
} from '@angular/core';
import { MatCellDef, MatHeaderCellDef, MatColumnDef } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface SdsRowConfig {
  displayedColumns?: string[];
}

export interface SdsHeaderRowConfig extends SdsRowConfig {
  sticky?: boolean;
}


@Component({
  selector: 'sds-row',
  template: `
    <ng-content></ng-content>
  `
})
export class SdsTableRowComponent {
  @Input() displayedColumns: Array<string>;
}

@Component({
  selector: 'sds-header-row',
  template: `
    <ng-content></ng-content>
  `
})
export class SdsTableHeaderRowComponent {
  @Input() displayedColumns: Array<string>;
  @Input() sticky: boolean;
}

@Directive({selector: 'sds-table-headercell'})
export class SdsTableHeaderCellDirective {}

@Directive({selector: 'sds-table-cell'})
export class SdsTableCellDirective {}

@Component({
  selector: 'sds-table-column',
  template: `
    <ng-template #columnHeaderCell let-element="element">
      <ng-container *ngTemplateOutlet="headerCellTemplate; context: {element : element}"></ng-container>
    </ng-template>

    <ng-template #columnCell let-element="element">
      <ng-container *ngTemplateOutlet="cellTemplate; context: {element : element}"></ng-container>
    </ng-template>
  `
})
export class SdsTableColumnDefComponent implements AfterContentInit {

  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;
  @ViewChild('columnCell') columnCell: TemplateRef<any>;

  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;
  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;

  @Input() sdsColumnName;

  ngAfterContentInit() {}
}


@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit {

  dataSource: MatTableDataSource<any>;

  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;
  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Data for table
   */
  @Input() data;

  rowConfig = {} as SdsRowConfig;
  headerRowConfig = {} as SdsHeaderRowConfig;

  constructor() {}

  ngOnInit() {
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterContentInit() {
    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;
    this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;
    this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
