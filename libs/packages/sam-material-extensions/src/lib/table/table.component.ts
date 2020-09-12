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
import { CdkColumnDef } from '@angular/cdk/table';


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

@Directive({
  selector: '[sdsHeaderCellDef]',
  providers: [{provide: MatHeaderCellDef, useExisting: SdsHeaderCellDef}]
})
export class SdsHeaderCellDef extends MatHeaderCellDef {}

@Directive({
  selector: '[sdsCellDef]',
  providers: [{provide: MatCellDef, useExisting: SdsCellDef}]
})
export class SdsCellDef extends MatCellDef {}

@Directive({
  selector: '[sdsColumnDef]',
  inputs: ['sticky'],
  providers: [
    {provide: MatColumnDef, useExisting: SdsColumnDef},
    {provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: SdsColumnDef}
  ],
})
export class SdsColumnDef extends MatColumnDef {
  /** Unique name for this column. */
  @Input('sdsColumnDef')
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = name;
    this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
  }

  _name: string;

}
@Component({
  selector: 'sds-table-columns',
  template: `
    <ng-content></ng-content>
  `
})
export class SdsTableColumnsComponent {}

@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SdsTableComponent implements OnInit, AfterContentInit {

  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;
  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ContentChildren(SdsTableColumnComponent) sdsColumnItems!: QueryList<SdsTableColumnComponent>;


  /**
   * Data for table
   */
  @Input() data;

  rowConfig = {} as SdsRowConfig;
  headerRowConfig = {} as SdsHeaderRowConfig;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;
    this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;
    this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;
  }

}
