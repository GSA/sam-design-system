import {
  Component,
  Input,
  TemplateRef,
  OnInit,
  AfterContentInit,
  ViewChild,
  Directive,
  ContentChild,
  QueryList,
  ContentChildren
} from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'sds-accordion-item',
  template: `
    <mat-expansion-panel [(expanded)]="expanded">
      <mat-expansion-panel-header>
        <mat-panel-title>
          <ng-content select="[sds-accordion-title]"></ng-content>
        </mat-panel-title>
        <span class="sds-expansion-indicator" [ngClass]="{'sds-expansion-indicator--expanded' : expanded}"></span>
      </mat-expansion-panel-header>
      <ng-content select="[sds-accordion-content]"></ng-content>
    </mat-expansion-panel>
  `,
  styleUrls: ['./accordion-item.component.scss']
})
export class SdsAccordionItemComponent {
  @Input() id!: string;
  expanded = true;
}



@Component({
  selector: 'sds-accordion-next',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class SdsAccordionComponent implements AfterContentInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  //@ContentChild(SdsAccordionItemDirective) accordionItem!: SdsAccordionItemDirective;
  @ContentChildren(SdsAccordionItemComponent, {descendants: true}) accordionItems!: QueryList<SdsAccordionItemComponent>;

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


  ngAfterContentInit() {
    console.log(this.accordionItems);
  }

  // toggleRowExpansion(row: any) {
  //   this.expandedRow = this.expandedRow === row ? null : row;
  // }
}
