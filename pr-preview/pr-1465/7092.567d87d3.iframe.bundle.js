(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[7092],{"./libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/packages/sam-material-extensions/src/lib/button-group/button-group.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"mat-button-toggle-group {\n  overflow: visible;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: none;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item {\n  background-color: transparent;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item ::ng-deep .mat-button-toggle-button {\n  background-color: transparent;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item ::ng-deep .mat-button-toggle-button .mat-button-toggle-label-content {\n  line-height: inherit;\n  padding: 0;\n  background-color: transparent;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item ::ng-deep .mat-button-toggle-button .mat-button-toggle-label-content .usa-button {\n  margin-left: -2px;\n  margin-right: -1px;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item ::ng-deep .mat-button-toggle-button .mat-button-toggle-label-content .usa-button.usa-button--outline {\n  background-color: transparent;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item ::ng-deep:focus {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0.25rem;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item:first-child .usa-button {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item:last-child .usa-button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item:only-child .usa-button {\n  border-radius: 0.25rem;\n}\nmat-button-toggle-group mat-button-toggle.sds-button-group__item:not(:first-child):not(:last-child) .usa-button {\n  border-radius: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/packages/sam-material-extensions/src/lib/table/table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/packages/sam-material-extensions/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{nz:()=>SdsButtonGroupComponent,uj:()=>SdsButtonGroupModule,Gr:()=>SdsButtonGroupOptionComponent,RA:()=>SdsTableModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),expansion=__webpack_require__("./node_modules/@angular/material/fesm2022/expansion.mjs");var accordion_componentngResource=__webpack_require__("./libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.scss?ngResource"),accordion_componentngResource_default=__webpack_require__.n(accordion_componentngResource);let SdsAccordionTitleDirective=class SdsAccordionTitleDirective{};SdsAccordionTitleDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"sds-accordion-title"})],SdsAccordionTitleDirective);let SdsAccordionContentDirective=class SdsAccordionContentDirective{};SdsAccordionContentDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"sds-accordion-content"})],SdsAccordionContentDirective);let SdsAccordionItemComponent=class SdsAccordionItemComponent{constructor(){this.expanded=!1,this.disabled=!1}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}toggleDisabled(){this.disabled=!this.disabled,this.disabled&&(this.expanded=!1)}static#_=this.propDecorators={itemTitleTemplate:[{type:core.ViewChild,args:["itemTitleTemplate"]}],itemContentTemplate:[{type:core.ViewChild,args:["itemContentTemplate"]}],expanded:[{type:core.Input}],disabled:[{type:core.Input}]}};SdsAccordionItemComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-accordion-item",template:'\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select="sds-accordion-title"></ng-content>\n    </ng-template>\n    <ng-template #itemContentTemplate>\n      <ng-content #content select="sds-accordion-content"></ng-content>\n    </ng-template>\n  '})],SdsAccordionItemComponent);let SdsAccordionComponent=class SdsAccordionComponent{constructor(){this.multi=!1,this.multiChange=new core.EventEmitter,this.displayMode="flat",console.warn("This is a deprectaed version of accordion component, and will be removed in future versions. \n    Please switch to using usa-accordion from @gsa-sam/ngx-uswds (https://github.com/GSA/ngx-uswds)")}openAll(){this.accordion.openAll()}closeAll(){this.accordion.closeAll()}toggleMulti(){this.multi=!this.multi,this.accordion.closeAll(),this.multiChange.emit(this.multi)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={accordion:[{type:core.ViewChild,args:[expansion.BS]}],accordionItems:[{type:core.ContentChildren,args:[SdsAccordionItemComponent]}],multi:[{type:core.Input}],multiChange:[{type:core.Output}],displayMode:[{type:core.Input}],collapsedHeight:[{type:core.Input}],expandedHeight:[{type:core.Input}]}};SdsAccordionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-accordion-next",template:'<mat-accordion [displayMode]="displayMode" [multi]="multi">\n  <ng-container *ngFor="let accordionItem of accordionItems">\n    <mat-expansion-panel [(expanded)]="accordionItem.expanded" [disabled]="accordionItem.disabled">\n      <mat-expansion-panel-header [collapsedHeight]="collapsedHeight" [expandedHeight]="expandedHeight">\n        <mat-panel-title>\n          <span\n            class="sds-expansion-indicator"\n            [ngClass]="{ \'sds-expansion-indicator--expanded\': accordionItem.expanded }"\n          ></span>\n          <ng-container *ngTemplateOutlet="accordionItem.itemTitleTemplate"></ng-container>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <span [ngClass]="{ \'display-none\': !accordionItem.expanded }">\n        <ng-container *ngTemplateOutlet="accordionItem.itemContentTemplate"></ng-container>\n      </span>\n    </mat-expansion-panel>\n  </ng-container>\n</mat-accordion>\n',styles:[accordion_componentngResource_default()]})],SdsAccordionComponent);var gsa_sam_ngx_uswds_icons=__webpack_require__("./node_modules/@gsa-sam/ngx-uswds-icons/fesm2022/gsa-sam-ngx-uswds-icons.mjs");let SdsAccordionModule=class SdsAccordionModule{};SdsAccordionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[SdsAccordionComponent,SdsAccordionItemComponent,SdsAccordionTitleDirective,SdsAccordionContentDirective],imports:[common.CommonModule,expansion.MY,gsa_sam_ngx_uswds_icons.opy],exports:[SdsAccordionComponent,SdsAccordionItemComponent,SdsAccordionTitleDirective,SdsAccordionContentDirective],providers:[{provide:expansion.$T,useValue:{collapsedHeight:"45px",expandedHeight:"45px",hideToggle:!0}}]})],SdsAccordionModule);var table_componentngResource=__webpack_require__("./libs/packages/sam-material-extensions/src/lib/table/table.component.scss?ngResource"),table_componentngResource_default=__webpack_require__.n(table_componentngResource),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs"),sort=__webpack_require__("./node_modules/@angular/material/fesm2022/sort.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),paginator=__webpack_require__("./node_modules/@angular/material/fesm2022/paginator.mjs");let SdsTableRowComponent=class SdsTableRowComponent{constructor(){this.expandOnClick=!1,this.highlightOnHover=!1}static#_=this.propDecorators={displayedColumns:[{type:core.Input}],expandOnClick:[{type:core.Input}],highlightOnHover:[{type:core.Input}],rowClickNavigate:[{type:core.Input}]}};SdsTableRowComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-row",template:" <ng-content></ng-content> "})],SdsTableRowComponent);let SdsTableHeaderRowComponent=class SdsTableHeaderRowComponent{static#_=this.propDecorators={displayedColumns:[{type:core.Input}],sticky:[{type:core.Input}]}};SdsTableHeaderRowComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-header-row",template:" <ng-content></ng-content> "})],SdsTableHeaderRowComponent);let SdsTableFooterRowComponent=class SdsTableFooterRowComponent{static#_=this.propDecorators={displayedColumns:[{type:core.Input}],sticky:[{type:core.Input}]}};SdsTableFooterRowComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-footer-row",template:" <ng-content></ng-content> "})],SdsTableFooterRowComponent);let SdsTableHeaderCellDirective=class SdsTableHeaderCellDirective{};SdsTableHeaderCellDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"sds-table-headercell"})],SdsTableHeaderCellDirective);let SdsTableCellDirective=class SdsTableCellDirective{};SdsTableCellDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"sds-table-cell"})],SdsTableCellDirective);let SdsTableFooterCellDirective=class SdsTableFooterCellDirective{};SdsTableFooterCellDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"sds-table-footercell"})],SdsTableFooterCellDirective);let SdsTableColumnDefComponent=class SdsTableColumnDefComponent{constructor(){this.sticky=!1,this.stickyEnd=!1,this.sdsExpandedTemplate=!1}ngAfterContentInit(){}static#_=this.propDecorators={columnHeaderCell:[{type:core.ViewChild,args:["columnHeaderCell",{static:!0}]}],columnCell:[{type:core.ViewChild,args:["columnCell",{static:!0}]}],columnFooterCell:[{type:core.ViewChild,args:["columnFooterCell",{static:!0}]}],headerCellTemplate:[{type:core.ContentChild,args:["sdsHeaderCell",{read:core.TemplateRef}]}],cellTemplate:[{type:core.ContentChild,args:["sdsCell",{read:core.TemplateRef}]}],footerCellTemplate:[{type:core.ContentChild,args:["sdsFooterCell",{read:core.TemplateRef}]}],sdsColumnName:[{type:core.Input}],sticky:[{type:core.Input}],stickyEnd:[{type:core.Input}],sdsExpandedTemplate:[{type:core.Input}]}};SdsTableColumnDefComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-table-column",template:'\n    <ng-template #columnHeaderCell let-element="element">\n      <ng-container *ngTemplateOutlet="headerCellTemplate; context: { element: element }"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element="element">\n      <ng-container *ngTemplateOutlet="cellTemplate; context: { element: element }"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element="element">\n      <ng-container *ngTemplateOutlet="footerCellTemplate; context: { element: element }"></ng-container>\n    </ng-template>\n  '})],SdsTableColumnDefComponent);let SdsTableComponent=class SdsTableComponent{set borderless(borderless){this._borderless=borderless}get borderless(){return this._borderless}set pagination(pagination){this._pagination=pagination}get pagination(){return this._pagination}set expansion(expansion){this._expansion=expansion}get expansion(){return this._expansion}constructor(changeDetectorRef){this.changeDetectorRef=changeDetectorRef,this._borderless=!1,this.sort="false",this._pagination=!1,this._expansion=!1,this.expansionClicked=new core.EventEmitter,this.rowClicked=new core.EventEmitter,this.rowConfig={},this.headerRowConfig={},this.footerRowConfig={},this.top={id:"top"},this.bottom={id:"bottom"},this.page={},this.pageChange=new BehaviorSubject.t(this.page),this.showPagination=!1}ngOnChanges(changes){changes.data?.currentValue&&(this.dataSource=new table.I6(changes.data.currentValue),("true"===this.sort||""===this.sort||this.isArray(this.sort))&&(this.dataSource.sortingDataAccessor=this.sortFn?this.sortFn:this.defaultSort,this.dataSource.sort=this.matSort),this.pagination&&(this.dataSource.paginator=this.matPaginator,this.updateSdsPagination()))}ngOnInit(){this.dataSource=new table.I6(this.data),this.tableName&&(this.top={id:this.tableName+"Top"},this.bottom={id:this.tableName+"Bottom"})}ngAfterContentInit(){if(this.rowConfig.displayedColumns=this.sdsTableRowComponent.displayedColumns,this.rowConfig.expandOnClick=this.sdsTableRowComponent.expandOnClick,this.rowConfig.highlightOnHover=this.sdsTableRowComponent.highlightOnHover,this.rowConfig.rowClickNavigate=this.sdsTableRowComponent.rowClickNavigate,this.sdsTableHeaderRowComponent&&(this.headerRowConfig.displayedColumns=this.sdsTableHeaderRowComponent.displayedColumns,this.headerRowConfig.sticky=this.sdsTableHeaderRowComponent.sticky),this.sdsTableFooterRowComponent&&(this.footerRowConfig.displayedColumns=this.sdsTableFooterRowComponent.displayedColumns,this.footerRowConfig.sticky=this.sdsTableFooterRowComponent.sticky),this.expansion){const expandedIndicator="expandedIndicator";this.rowConfig.displayedColumns&&!this.rowConfig.displayedColumns.includes(expandedIndicator)&&this.rowConfig.displayedColumns.unshift("expandedIndicator")}}ngAfterViewInit(){("true"===this.sort||""===this.sort||this.isArray(this.sort))&&(this.dataSource.sortingDataAccessor=this.sortFn?this.sortFn:this.defaultSort,this.dataSource.sort=this.matSort),this.pagination&&(this.dataSource.paginator=this.matPaginator,this.dataSource.paginator.initialized.subscribe((value=>{setTimeout((()=>{this.page={pageNumber:this.dataSource.paginator.pageIndex+1,pageSize:this.dataSource.paginator.pageSize,totalPages:this.dataSource.paginator.getNumberOfPages()},this.totalItems=this.dataSource.data.length,this.showPagination=!0,this.changeDetectorRef.detectChanges()}))})),this.pageChange.subscribe((value=>{this.updateSdsPagination()})),this.changeDetectorRef.detectChanges())}typeOf(value){return typeof value}isArray(obj){return Array.isArray(obj)}updateSdsPagination(){this.page&&this.dataSource?.paginator&&(this.dataSource.paginator.pageIndex=this.page.pageNumber-1,this.dataSource.paginator._changePageSize(this.page.pageSize),this.page.totalPages=Math.ceil(this.dataSource.data.length/this.page.pageSize),this.totalItems=this.dataSource.data.length,this.changeDetectorRef.detectChanges())}defaultSort(data,sortHeaderId){return"string"==typeof data[sortHeaderId]?data[sortHeaderId].toLocaleLowerCase():data[sortHeaderId]}onExpansionClicked(element){!this.rowConfig.expandOnClick&&(this.expandedElement=this.expandedElement===element?null:element),this.expansionClicked.emit(this.expandedElement)}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={data:[{type:core.Input}],borderless:[{type:core.Input}],sort:[{type:core.Input}],sortFn:[{type:core.Input}],tableName:[{type:core.Input}],pagination:[{type:core.Input}],expansion:[{type:core.Input}],expansionClicked:[{type:core.Output}],rowClicked:[{type:core.Output}],table:[{type:core.ViewChild,args:[table.Zl]}],sdsTableRowComponent:[{type:core.ContentChild,args:[SdsTableRowComponent]}],sdsTableHeaderRowComponent:[{type:core.ContentChild,args:[SdsTableHeaderRowComponent]}],sdsTableFooterRowComponent:[{type:core.ContentChild,args:[SdsTableFooterRowComponent]}],sdsColumnItems:[{type:core.ContentChildren,args:[SdsTableColumnDefComponent,{descendants:!0}]}],matSort:[{type:core.ViewChild,args:[sort.B4]}],matPaginator:[{type:core.ViewChild,args:[paginator.iy]}]}};SdsTableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-table",template:'<div class="margin-y-05" *ngIf="pagination && showPagination">\n  <sds-pagination\n    [displayMode]="\'results\'"\n    [paginationConfiguration]="top"\n    [(page)]="page"\n    [totalItems]="totalItems"\n  ></sds-pagination>\n</div>\n\n<div class="sds-table__container" [ngClass]="{ \'sds-table__container--borderless\': borderless }">\n  <table\n    mat-table\n    [dataSource]="dataSource"\n    class="sds-table width-full mat-elevation-z8"\n    matSort\n    multiTemplateDataRows\n    [ngClass]="{ \'sds-table--expansion\': expansion }"\n  >\n    <ng-container *ngFor="let sdsColumnItem of sdsColumnItems">\n      <ng-container\n        *ngIf="!sdsColumnItem.sdsExpandedTemplate"\n        matColumnDef="{{ sdsColumnItem.sdsColumnName }}"\n        [sticky]="sdsColumnItem.sticky"\n        [stickyEnd]="sdsColumnItem.stickyEnd"\n      >\n        <ng-container\n          *ngIf="\n            sort === \'true\' ||\n              sort === \'\' ||\n              (typeOf(sort) === \'object\' && isArray(sort) && sort.includes(sdsColumnItem.sdsColumnName));\n            else basicColumn\n          "\n        >\n          <th mat-header-cell *matHeaderCellDef scope="col" mat-sort-header>\n            <ng-container *ngTemplateOutlet="sdsColumnItem.columnHeaderCell"></ng-container>\n          </th>\n        </ng-container>\n        <ng-template #basicColumn>\n          <ng-container>\n            <th mat-header-cell *matHeaderCellDef scope="col">\n              <ng-container *ngTemplateOutlet="sdsColumnItem.columnHeaderCell"></ng-container>\n            </th>\n          </ng-container>\n        </ng-template>\n        <td mat-cell *matCellDef="let element">\n          <ng-container *ngTemplateOutlet="sdsColumnItem.columnCell; context: { element: element }"></ng-container>\n        </td>\n        <ng-container *ngIf="sdsColumnItem.footerCellTemplate">\n          <th mat-footer-cell *matFooterCellDef scope="col">\n            <ng-container *ngTemplateOutlet="sdsColumnItem.columnFooterCell"></ng-container>\n          </th>\n        </ng-container>\n        <ng-container *ngIf="!sdsColumnItem.footerCellTemplate">\n          <td mat-footer-cell *matFooterCellDef scope="col"></td>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    \x3c!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns --\x3e\n    <ng-container *ngIf="expansion">\n      <ng-container *ngFor="let sdsColumnItem of sdsColumnItems">\n        <ng-container *ngIf="sdsColumnItem.sdsExpandedTemplate" matColumnDef="{{ sdsColumnItem.sdsColumnName }}">\n          <td\n            mat-cell\n            *matCellDef="let element"\n            [attr.colspan]="rowConfig.displayedColumns.length"\n            class="sds-table__cell--detail"\n          >\n            <div\n              class="sds-table__cell__expanded-wrapper"\n              [@detailExpand]="element == expandedElement ? \'expanded\' : \'collapsed\'"\n            >\n              <ng-container *ngTemplateOutlet="sdsColumnItem.columnCell; context: { element: element }"></ng-container>\n            </div>\n          </td>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf="expansion" matColumnDef="expandedIndicator">\n      <th mat-header-cell *matHeaderCellDef class="maxw-3 padding-top-2 padding-right-0 padding-left-1"></th>\n      <td\n        mat-cell\n        *matCellDef="let element"\n        class="cursor-pointer maxw-3 padding-top-2 padding-right-0 padding-left-1"\n        (click)="onExpansionClicked(element)"\n      >\n        <usa-icon *ngIf="element == expandedElement" [icon]="\'dash\'" size="lg"></usa-icon>\n        <usa-icon *ngIf="element != expandedElement" [icon]="\'uswds-add\'" size="lg"></usa-icon>\n      </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container *ngIf="headerRowConfig && headerRowConfig.displayedColumns">\n      <tr mat-header-row *matHeaderRowDef="headerRowConfig.displayedColumns; sticky: headerRowConfig.sticky"></tr>\n    </ng-container>\n\n    <tr\n      mat-row\n      *matRowDef="let row; columns: rowConfig.displayedColumns; let i = dataIndex"\n      class="sds-table__row {{ row[\'classesToApply\'] }}"\n      [ngClass]="{ \'cursor-pointer\': rowConfig.expandOnClick, \'sds-table__row--expanded\': expandedElement == row }"\n      (click)="\n        rowConfig.expandOnClick ? (expandedElement = expandedElement === row ? null : row) : false; rowClicked.emit(i)\n      "\n      sdsTableRowNavigation\n      [highlightOnHover]="rowConfig.highlightOnHover"\n    ></tr>\n\n    <ng-container *ngIf="expansion">\n      <tr mat-row *matRowDef="let row; columns: [\'expandedDetail\']" class="sds-table__row--detail"></tr>\n    </ng-container>\n\n    <ng-container *ngIf="footerRowConfig && footerRowConfig.displayedColumns">\n      <tr mat-footer-row *matFooterRowDef="footerRowConfig.displayedColumns; sticky: footerRowConfig.sticky"></tr>\n    </ng-container>\n  </table>\n\n  <div [hidden]="true">\n    <ng-container *ngIf="pagination">\n      <mat-paginator [pageSizeOptions]="[25, 50, 100]" showFirstLastButtons (page)="pageEvent = $event"></mat-paginator>\n    </ng-container>\n  </div>\n</div>\n\n<div *ngIf="pagination && showPagination">\n  <sds-pagination\n    [paginationConfiguration]="bottom"\n    [(page)]="page"\n    (pageChange)="pageChange.next($event)"\n    (initialized)="pageChange.next($event)"\n  ></sds-pagination>\n</div>\n',animations:[(0,animations.hZ)("detailExpand",[(0,animations.wk)("collapsed",(0,animations.iF)({height:"0px",minHeight:"0"})),(0,animations.wk)("expanded",(0,animations.iF)({height:"*"})),(0,animations.kY)("expanded <=> collapsed",(0,animations.i0)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])],styles:[table_componentngResource_default()]})],SdsTableComponent);var router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let TableRowNavigationDirective=class TableRowNavigationDirective{constructor(el,renderer,router){this.el=el,this.renderer=renderer,this.router=router,this.hoverClass="sds-table__row--hovered",this.highlightOnHover=!1}onMouseEnter(){this.highlightOnHover&&this.addHoverClass()}onMouseLeave(){this.highlightOnHover&&this.removeHoverClass()}addHoverClass(){this.renderer.addClass(this.el.nativeElement,this.hoverClass)}removeHoverClass(){this.renderer.removeClass(this.el.nativeElement,this.hoverClass)}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2},{type:router.Ix}];static#_2=this.propDecorators={highlightOnHover:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter"]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]}};TableRowNavigationDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"tr[mat-row][sdsTableRowNavigation]"})],TableRowNavigationDirective);var src=__webpack_require__("./libs/packages/components/src/index.ts"),ngx_bootstrap_icons=__webpack_require__("./node_modules/ngx-bootstrap-icons/fesm2020/ngx-bootstrap-icons.mjs");let SdsTableModule=class SdsTableModule{};SdsTableModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[SdsTableComponent,SdsTableRowComponent,SdsTableHeaderRowComponent,SdsTableFooterRowComponent,SdsTableColumnDefComponent,SdsTableCellDirective,SdsTableHeaderCellDirective,SdsTableFooterCellDirective,TableRowNavigationDirective],imports:[router.iI,common.CommonModule,sort.NQ,table.tP,paginator.Ou,src.x6,gsa_sam_ngx_uswds_icons.opy,ngx_bootstrap_icons.YWJ.pick({chevronUp:ngx_bootstrap_icons.rHI,chevronDown:ngx_bootstrap_icons.uaq})],exports:[SdsTableComponent,SdsTableRowComponent,SdsTableHeaderRowComponent,SdsTableFooterRowComponent,SdsTableColumnDefComponent,SdsTableCellDirective,SdsTableHeaderCellDirective,SdsTableFooterCellDirective,TableRowNavigationDirective]})],SdsTableModule);var button_toggle=__webpack_require__("./node_modules/@angular/material/fesm2022/button-toggle.mjs"),button_group_componentngResource=__webpack_require__("./libs/packages/sam-material-extensions/src/lib/button-group/button-group.component.scss?ngResource"),button_group_componentngResource_default=__webpack_require__.n(button_group_componentngResource);let SdsButtonGroupOptionComponent=class SdsButtonGroupOptionComponent{static#_=this.propDecorators={buttonGroupTemplate:[{type:core.ViewChild,args:["buttonGroupTemplate"]}],value:[{type:core.Input}],checked:[{type:core.Input}],ariaLabel:[{type:core.Input,args:["aria-label"]}]}};SdsButtonGroupOptionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-button-group-option",template:"\n    <ng-template #buttonGroupTemplate>\n      <ng-content #content></ng-content>\n    </ng-template>\n  ",styles:[button_group_componentngResource_default()]})],SdsButtonGroupOptionComponent);let SdsButtonGroupComponent=class SdsButtonGroupComponent{constructor(){this.classesToApply={},this.mode="radio",this.change=new core.EventEmitter}static#_=this.propDecorators={buttonOptions:[{type:core.ContentChildren,args:[SdsButtonGroupOptionComponent]}],mode:[{type:core.Input}],change:[{type:core.Output}]}};SdsButtonGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-button-group",template:'<mat-button-toggle-group [multiple]="mode === \'checkbox\'" (change)="change.emit($event)">\n  <ng-container *ngFor="let option of buttonOptions">\n    <mat-button-toggle\n      #singleToggle\n      value="{{ option.value }}"\n      aria-label="{{ option.ariaLabel }}"\n      class="sds-button-group__item"\n      [disableRipple]="true"\n      [checked]="option.checked"\n    >\n      <div class="usa-button" [ngClass]="{ \'usa-button--outline\': !singleToggle.checked }">\n        <ng-container *ngTemplateOutlet="option.buttonGroupTemplate"></ng-container>\n      </div>\n    </mat-button-toggle>\n  </ng-container>\n</mat-button-toggle-group>\n',host:{class:"sds-button-group--segmented"},styles:[button_group_componentngResource_default()]})],SdsButtonGroupComponent);let SdsButtonGroupModule=class SdsButtonGroupModule{};SdsButtonGroupModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[SdsButtonGroupComponent,SdsButtonGroupOptionComponent],imports:[common.CommonModule,button_toggle.Vg],exports:[SdsButtonGroupComponent,SdsButtonGroupOptionComponent]})],SdsButtonGroupModule)}}]);