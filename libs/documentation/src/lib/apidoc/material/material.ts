const MATERIAL = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [
        {
            "name": "SdsTableColumnSettings",
            "id": "class-SdsTableColumnSettings-7b7728ce0b6161d5405befb0fe6e9ddb",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-column-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableColumnSettings {\n  primaryKey: string;\n  alternativeKey?: string;\n  header?: string;\n  sticky?: boolean = false;\n}\n",
            "properties": [
                {
                    "name": "alternativeKey",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "header",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "primaryKey",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 5
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        }
    ],
    "directives": [],
    "components": [
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-3e493381ab8a74d84d10882a92c237c8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-table",
            "styleUrls": [
                "./table.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./table.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "borderless",
                    "defaultValue": "false",
                    "description": "<p>table without border</p>\n",
                    "line": 40,
                    "type": "boolean"
                },
                {
                    "name": "columns",
                    "description": "<p>columns to display in header\n{@link SdsTableColumnSettings}</p>\n",
                    "line": 29,
                    "type": "SdsTableColumnSettings[]"
                },
                {
                    "name": "dataSource",
                    "description": "<p>Data source for table</p>\n",
                    "line": 23
                },
                {
                    "name": "detailRow",
                    "description": "<p>template outlet for expandable detail\nall properties for the selected row will be available for use in the template after set using let-{new property name}</p>\n",
                    "line": 35,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "sortTable",
                    "defaultValue": "false",
                    "description": "<p>sortable table</p>\n",
                    "line": 50,
                    "type": "boolean"
                },
                {
                    "name": "stickyHeader",
                    "defaultValue": "false",
                    "description": "<p>Include sticky header row</p>\n",
                    "line": 45,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "columnIds",
                    "defaultValue": "[]",
                    "type": "string[]",
                    "optional": false,
                    "description": "<p>column ids displayed</p>\n",
                    "line": 66
                },
                {
                    "name": "expandedRow",
                    "type": "any | null",
                    "optional": false,
                    "description": "<p>currently expanded row</p>\n",
                    "line": 61
                },
                {
                    "name": "sort",
                    "type": "MatSort",
                    "optional": false,
                    "description": "",
                    "line": 18,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatSort"
                        }
                    ]
                },
                {
                    "name": "sortDirection",
                    "defaultValue": "'asc'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 56
                },
                {
                    "name": "sortKey",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort vars</p>\n",
                    "line": 55
                }
            ],
            "methodsClass": [
                {
                    "name": "adjustSort",
                    "args": [
                        {
                            "name": "col",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 91,
                    "jsdoctags": [
                        {
                            "name": "col",
                            "type": "string",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70
                },
                {
                    "name": "toggleRowExpansion",
                    "args": [
                        {
                            "name": "row",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 87,
                    "jsdoctags": [
                        {
                            "name": "row",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  OnInit,\n  ViewChild\n} from '@angular/core';\nimport { MatSort } from '@angular/material';\nimport * as _ from 'lodash';\nimport { SdsTableColumnSettings } from './models/table-column-settings.model';\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss']\n})\nexport class SdsTableComponent implements OnInit {\n  @ViewChild(MatSort) sort: MatSort;\n\n  /**\n   * Data source for table\n   */\n  @Input() dataSource;\n\n  /**\n   * columns to display in header\n   * {@link SdsTableColumnSettings}\n   */\n  @Input() columns: SdsTableColumnSettings[];\n\n  /**\n   * template outlet for expandable detail\n   * all properties for the selected row will be available for use in the template after set using let-{new property name}\n   */\n  @Input() detailRow?: TemplateRef<any>;\n\n  /**\n   * table without border\n   */\n  @Input() borderless?: boolean = false;\n\n  /**\n   * Include sticky header row\n   */\n  @Input() stickyHeader?: boolean = false;\n\n  /**\n   * sortable table\n   */\n  @Input() sortTable?: boolean = false;\n\n  /**\n   * sort vars\n   */\n  sortKey: string;\n  sortDirection: string = 'asc';\n\n  /**\n   * currently expanded row\n   */\n  expandedRow: any | null;\n\n  /**\n   * column ids displayed\n   */\n  columnIds: string[] = [];\n\n  constructor() {}\n\n  ngOnInit() {\n    if (this.sortTable) {\n      this.dataSource.sort = this.sort;\n    } else {\n      this.sort.disabled = true;\n    }\n\n    this.columns.forEach(col => {\n      this.columnIds.push(col.primaryKey);\n    });\n\n    // add blank column if expandable\n    if (this.detailRow) {\n      this.columnIds.push(' ');\n    }\n  }\n\n  toggleRowExpansion(row: any) {\n    this.expandedRow = this.expandedRow === row ? null : row;\n  }\n\n  adjustSort(col: string) {\n    if (this.sortKey === col) {\n      if (this.sortDirection === 'asc') {\n        this.sortDirection = 'desc';\n      } else {\n        this.sortDirection = 'asc';\n      }\n      return (this.dataSource = _.orderBy(\n        this.dataSource,\n        col,\n        this.sortDirection\n      ));\n    }\n\n    this.sortKey = col;\n    this.sortDirection = 'asc';\n    this.dataSource = _.orderBy(this.dataSource, col, this.sortDirection);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-table {\n  width: 100%;\n  border-collapse: separate;\n  border: 0;\n  margin: 0;\n\n  tr {\n    th, td {\n      padding: 8px 16px;\n      color: inherit;\n      font-size: inherit;\n    }\n  }\n  tr.sds-table__head {\n    > th {\n      border-bottom: 1px solid #C9C9C9;\n      background:  #F5F5F0;\n    }\n  }\n\n  .sds-table__row {\n    td {\n      border-bottom: 0;\n    }\n    .mat-table-sticky:first-child {\n      border-right: 1px solid #C9C9C9;\n    }\n  }\n\n  // expansion tables\n  &--expansion {\n    tr:nth-child(4n + 3) {\n      > * {\n        background: #F9F9F7;\n      }\n    }\n\n    // expansion row parent\n    .sds-table__row--expanded {\n      td {\n        background: #E9F0FB;\n        border-top: 1px solid #C9C9C9;\n      }\n      // expansion row when expanded\n      + .sds-table__row--detail {\n        display: table-row;\n      }\n    }\n\n    // expansion row when collapsed\n    .sds-table__row--detail {\n      display: none;\n      .sds-table__detail {\n        border-bottom: 1px solid #C9C9C9;\n        background: white;\n      }\n    }\n  }\n}\n\n:host {\n  height: inherit;\n  max-height: inherit;\n}\n\n.sds-table__container {\n  border: 1px solid #C9C9C9;\n  height: inherit;\n  max-height: inherit;\n  overflow: auto;\n  &--borderless {\n    border: 0;\n  }\n}\n",
                    "styleUrl": "./table.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 66
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-table__container\" [ngClass]=\"{'sds-table__container--borderless': borderless}\">\n  <table mat-table [dataSource]=\"dataSource\" matSort [multiTemplateDataRows]=detailRow\n    [ngClass]=\"{'sds-table--expansion': detailRow}\" class=\"sds-table\">\n\n    <!-- Columns -->\n    <ng-container matColumnDef=\"{{col.primaryKey}}\" *ngFor=\"let col of columns\" [sticky]=col.sticky>\n\n      <!-- table header cells -->\n      <th mat-header-cell *matHeaderCellDef mat-sort-header scope=\"col\">\n        {{ col.header  || (col.primaryKey | titlecase)}}\n      </th>\n\n      <td mat-cell *matCellDef=\"let row\">{{row[col.primaryKey] || row[col.alternativeKey]}}</td>\n    </ng-container>\n\n    <!-- column for expandable icon -->\n    <ng-container matColumnDef=\" \" *ngIf=\"detailRow\">\n      <th mat-header-cell *matHeaderCellDef scope=\"col\"></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <fa-icon *ngIf=\"row !== expandedRow\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n        <fa-icon *ngIf=\"row === expandedRow\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      </td>\n    </ng-container>\n\n    <!-- Expandable detail row -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"columnIds.length\" class=\"sds-table__detail\">\n\n        <!-- display detailRow templateRef with all row data -->\n        <ng-container *ngTemplateOutlet=\"detailRow; context: row\"></ng-container>\n      </td>\n    </ng-container>\n\n    <!-- Header and row declarations for expansion table-->\n    <ng-container *ngIf=\"detailRow\">\n      <tr mat-header-row *matHeaderRowDef=\"columnIds; sticky: stickyHeader\" class=\"sds-table__head\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columnIds\" (click)=\"toggleRowExpansion(row)\" class=\"sds-table__row\"\n        [ngClass]=\"{'sds-table__row--expanded': row === expandedRow}\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n\n    <!-- Header and row declarations for non-expandable tables-->\n    <ng-container *ngIf=\"!detailRow\">\n      <tr mat-header-row *matHeaderRowDef=\"columnIds; sticky: stickyHeader\" class=\"sds-table__head\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columnIds\" class=\"sds-table__row\"></tr>\n    </ng-container>\n  </table>\n</div>\n"
        }
    ],
    "modules": [
        {
            "name": "PackagesSamMaterialExtensionsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTableModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTableComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsTableComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/sam-material-extensions/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default MATERIAL;