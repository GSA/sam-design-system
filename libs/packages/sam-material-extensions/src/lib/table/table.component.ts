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

  ngAfterContentInit() {
    console.log(this.cellTemplate);

  }
}


@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SdsTableComponent implements OnInit, AfterContentInit {

  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;
  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;


  /**
   * Data for table
   */
  @Input() data;

  rowConfig = {} as SdsRowConfig;
  headerRowConfig = {} as SdsHeaderRowConfig;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.sdsColumnItems);
    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;
    this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;
    this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;
  }

}
