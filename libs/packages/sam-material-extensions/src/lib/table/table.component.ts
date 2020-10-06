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
  Directive,
  SimpleChanges,
  OnChanges,
  ChangeDetectorRef
} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { BehaviorSubject, Observable } from 'rxjs';


export interface SdsRowConfig {
  displayedColumns?: string[];
  expandOnClick?: boolean;
}

export interface SdsHeaderRowConfig extends SdsRowConfig {
  sticky?: boolean;
}

export interface SdsFooterRowConfig extends SdsRowConfig {
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
  @Input() expandOnClick = false;
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

@Component({
  selector: 'sds-footer-row',
  template: `
    <ng-content></ng-content>
  `
})
export class SdsTableFooterRowComponent {
  @Input() displayedColumns: Array<string>;
  @Input() sticky: boolean;
}

@Directive({selector: 'sds-table-headercell'})
export class SdsTableHeaderCellDirective {}

@Directive({selector: 'sds-table-cell'})
export class SdsTableCellDirective {}

@Directive({selector: 'sds-table-footercell'})
export class SdsTableFooterCellDirective {}

@Component({
  selector: 'sds-table-column',
  template: `
    <ng-template #columnHeaderCell let-element="element">
      <ng-container *ngTemplateOutlet="headerCellTemplate; context: {element : element}"></ng-container>
    </ng-template>

    <ng-template #columnCell let-element="element">
      <ng-container *ngTemplateOutlet="cellTemplate; context: {element : element}"></ng-container>
    </ng-template>

    <ng-template #columnFooterCell let-element="element">
      <ng-container *ngTemplateOutlet="footerCellTemplate; context: {element : element}"></ng-container>
    </ng-template>
  `
})
export class SdsTableColumnDefComponent implements AfterContentInit {

  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;
  @ViewChild('columnCell') columnCell: TemplateRef<any>;
  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;

  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;
  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;
  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;

  @Input() sdsColumnName;

  @Input() sticky = false;

  @Input() stickyEnd = false;

  @Input() sdsExpandedTemplate = false;

  ngAfterContentInit() {}
}


@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {

  /**
   * Data for table
   */
  @Input() data;

  /**
   * Borderless table
   */
  @Input()
  set borderless(borderless: boolean) {
    this._borderless = coerceBooleanProperty(borderless);
  }
  get borderless() {
    return this._borderless;
  }
  private _borderless = false;


  /**
   * Sorting table
   */

  @Input() sort = 'false';

  /**
   * Sorting function override
   */

  @Input() sortFn: any;


  /**
   * Pagination table
   */
  @Input()
  set pagination(pagination: boolean) {
    this._pagination = coerceBooleanProperty(pagination);
  }
  get pagination() {
    return this._pagination;
  }
  private _pagination = false;


  /**
   * Expansion table
   */
  @Input()
  set expansion(expansion: boolean) {
    this._expansion = coerceBooleanProperty(expansion);
  }
  get expansion() {
    return this._expansion;
  }
  private _expansion = false;

  dataSource: MatTableDataSource<any>;
  expandedElement: any;

  @ViewChild(MatTable) table: MatTable<any>;
  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;
  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;
  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  rowConfig = {} as SdsRowConfig;
  headerRowConfig = {} as SdsHeaderRowConfig;
  footerRowConfig = {} as SdsFooterRowConfig;
  pageEvent: PageEvent;

  /* sds pagination */
  top = { id: 'top' };
  bottom = { id: 'bottom' };
  page: any;
  public pageChange = new BehaviorSubject<object>(this.page);
  showPagination = false;
  totalItems: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      this.dataSource = new MatTableDataSource(changes.data.currentValue);
      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {
        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;
        this.dataSource.sort = this.matSort;
      }
      if(this.pagination) {
        this.dataSource.paginator = this.matPaginator;
        this.updateSdsPagination();
      }
    }
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterContentInit() {

    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;
    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;

    if(this.sdsTableHeaderRowComponent) {
      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;
      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;
    }

    if(this.sdsTableFooterRowComponent) {
      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;
      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;
    }

    if(this.expansion) {
      const expandedIndicator = "expandedIndicator";
      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){
        this.rowConfig.displayedColumns.push('expandedIndicator');
      }
    }
  }

  ngAfterViewInit() {
    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {
      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;
      this.dataSource.sort = this.matSort;
    }
    if(this.pagination) {
      this.dataSource.paginator = this.matPaginator;
      this.dataSource.paginator.initialized.subscribe(
        value => {
          setTimeout(() => {
            this.page = {
              pageNumber: this.dataSource.paginator.pageIndex + 1,
              pageSize: this.dataSource.paginator.pageSize,
              totalPages: this.dataSource.paginator.getNumberOfPages()
            }
            this.totalItems = this.dataSource.data.length;
            this.showPagination = true;
            this.changeDetectorRef.detectChanges();
          });
        }
      );

      this.pageChange.subscribe(
        value => {
          this.updateSdsPagination();
        }
      );
      this.changeDetectorRef.detectChanges();
    }

  }

  typeOf(value) {
    return typeof value;
  }

  isArray(obj : any ) {
    return Array.isArray(obj)
  }

  updateSdsPagination() {
    if(this.page) {
      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;
      this.dataSource.paginator._changePageSize(this.page.pageSize);
      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);
      this.totalItems = this.dataSource.data.length;
      this.changeDetectorRef.detectChanges();
    }
  }

  defaultSort(data, sortHeaderId) {
    if (typeof data[sortHeaderId] === 'string') {
      return data[sortHeaderId].toLocaleLowerCase();
    }

    return data[sortHeaderId];
  };

}
