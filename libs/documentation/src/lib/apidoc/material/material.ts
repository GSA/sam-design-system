const MATERIAL = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [
        {
            "name": "SdsTableColumnSettings",
            "id": "class-SdsTableColumnSettings-f58b84b4fae1eeb494c7aee86895bb9e",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-column-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableColumnSettings {\n  /**\n   *  primary key to access value from data\n   */\n  primaryKey: string;\n  /**\n   * Displayed column header -- defaults to primaryKey value in titlecase\n   */\n  header?: string;\n  /**\n   * Column sticks to left side of table on horizontal scroll\n   */\n  sticky? = false;\n}\n",
            "properties": [
                {
                    "name": "header",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Displayed column header -- defaults to primaryKey value in titlecase</p>\n",
                    "line": 9
                },
                {
                    "name": "primaryKey",
                    "type": "string",
                    "optional": false,
                    "description": "<p>primary key to access value from data</p>\n",
                    "line": 5
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "type": "",
                    "optional": true,
                    "description": "<p>Column sticks to left side of table on horizontal scroll</p>\n",
                    "line": 13
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsTableSettings",
            "id": "class-SdsTableSettings-dd54dcc0518640df9b404298e01b9e5a",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableSettings {\n  /**\n   * table without border\n   */\n  borderless?: boolean;\n  /*\n   * sortable table\n   */\n  sort?: boolean;\n  /*\n   * Include sticky header row\n   */\n  stickyHeader?: boolean;\n}\n",
            "properties": [
                {
                    "name": "borderless",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>table without border</p>\n",
                    "line": 5
                },
                {
                    "name": "sort",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "stickyHeader",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 13
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
            "id": "component-SdsTableComponent-6466a84a71684fb0c329cdcac1c068c1",
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
                    "name": "columns",
                    "description": "<p>columns to display in header\n{@link SdsTableColumnSettings}</p>\n",
                    "line": 31,
                    "type": "SdsTableColumnSettings[]"
                },
                {
                    "name": "data",
                    "description": "<p>Data for table</p>\n",
                    "line": 25
                },
                {
                    "name": "detailRow",
                    "description": "<p>template outlet for expandable detail\nall properties for the selected row will be available for use in the template after set using let-{new property name}</p>\n",
                    "line": 37,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "settings",
                    "description": "<p>table settings\n{@link SdsTableSettings}</p>\n",
                    "line": 43,
                    "type": "SdsTableSettings"
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
                    "line": 58
                },
                {
                    "name": "dataSource",
                    "type": "MatTableDataSource<any>",
                    "optional": false,
                    "description": "<p>table MatTableDataSource data source based on Input data</p>\n",
                    "line": 48
                },
                {
                    "name": "expandedRow",
                    "defaultValue": "null",
                    "type": "any | null",
                    "optional": false,
                    "description": "<p>currently expanded row</p>\n",
                    "line": 53
                },
                {
                    "name": "sort",
                    "type": "MatSort",
                    "optional": false,
                    "description": "",
                    "line": 20,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatSort, {static: true}"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62
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
                    "line": 85,
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
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  OnInit,\n  ViewChild\n} from '@angular/core';\nimport { MatSort, MatTableDataSource } from '@angular/material';\n\nimport { SdsTableColumnSettings } from './models/table-column-settings.model';\nimport { SdsTableSettings } from './models/table-settings.model';\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss']\n})\nexport class SdsTableComponent implements OnInit {\n\n  @ViewChild(MatSort, {static: true}) sort: MatSort;\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * columns to display in header\n   * {@link SdsTableColumnSettings}\n   */\n  @Input() columns: SdsTableColumnSettings[];\n\n  /**\n   * template outlet for expandable detail\n   * all properties for the selected row will be available for use in the template after set using let-{new property name}\n   */\n  @Input() detailRow?: TemplateRef<any>;\n\n  /**\n   * table settings\n   * {@link SdsTableSettings}\n  */\n  @Input() settings?: SdsTableSettings;\n\n  /**\n   * table MatTableDataSource data source based on Input data\n   */\n  dataSource: MatTableDataSource<any>;\n\n  /**\n   * currently expanded row\n   */\n  expandedRow: any | null = null;\n\n  /**\n   * column ids displayed\n   */\n  columnIds: string[] = [];\n\n  constructor() {}\n\n  ngOnInit() {\n    // convert data to MatTableDataSource\n    this.dataSource = new MatTableDataSource(this.data);\n\n    // enable sort if set in settings\n    if (this.settings && this.settings.sort) {\n      this.dataSource.sort = this.sort;\n    } else {\n      this.sort.disabled = true;\n    }\n\n    // get column primary keys\n    this.columns.forEach(col => {\n      this.columnIds.push(col.primaryKey);\n    });\n\n    // add column if expandable\n    if (this.detailRow) {\n      this.columnIds.push('sdsExpandableRow');\n    }\n  }\n\n  // toggle clicked row's detail row\n  toggleRowExpansion(row: any) {\n    this.expandedRow = this.expandedRow === row ? null : row;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ":host {\n  height: inherit;\n  max-height: inherit;\n}\n",
                    "styleUrl": "./table.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 58
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-table__container\" [ngClass]=\"{'sds-table__container--borderless': settings?.borderless}\">\n    <table mat-table [dataSource]=\"dataSource\" matSort [multiTemplateDataRows]=detailRow\n      [ngClass]=\"{'sds-table--expansion': detailRow}\" class=\"sds-table\">\n\n    <!-- Columns -->\n    <ng-container matColumnDef=\"{{col.primaryKey}}\" *ngFor=\"let col of columns\" [sticky]=col.sticky>\n\n      <!-- table header cells -->\n      <ng-container *ngIf=\"settings?.sort\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header scope=\"col\" [ngClass]=\"{'sds-table__heading--sticky': col.sticky}\">\n          {{ col.header  || (col.primaryKey | titlecase)}}\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!settings || !settings.sort\">\n        <th mat-header-cell *matHeaderCellDef scope=\"col\" [ngClass]=\"{'sds-table__heading--sticky': col.sticky}\">\n          {{ col.header  || (col.primaryKey | titlecase)}}\n        </th>\n      </ng-container>\n\n      <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{'sds-table__cell--sticky': col.sticky}\">\n        {{ row[col.primaryKey] }}\n      </td>\n    </ng-container>\n\n    <!-- column for expandable icon -->\n    <ng-container matColumnDef=\"sdsExpandableRow\" *ngIf=\"detailRow\">\n      <th mat-header-cell *matHeaderCellDef scope=\"col\" class=\"sds-table__heading--detail\">\n        <span class=\"sr-only\">More Information</span>\n      </th>\n\n      <td mat-cell *matCellDef=\"let row\">\n        <button class=\"sds-button usa-button--unstyled\" tabindex=\"0\" aria-label=\"expand row\">\n          <fa-icon *ngIf=\"row !== expandedRow\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n          <fa-icon *ngIf=\"row === expandedRow\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- Expandable detail row -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let row;\" [attr.colspan]=\"columnIds.length\" class=\"sds-table__cell--detail\">\n        <!-- display detailRow templateRef with all row data -->\n        <ng-container *ngTemplateOutlet=\"detailRow; context: row\"></ng-container>\n      </td>\n    </ng-container>\n\n    <!-- Header and row declarations -->\n    <tr mat-header-row *matHeaderRowDef=\"columnIds; sticky: settings?.stickyHeader\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: columnIds\" class=\"sds-table__row\"\n      [ngClass]=\"{'sds-table__row--expanded': row === expandedRow}\" (click)=\"toggleRowExpansion(row)\"></tr>\n\n    <!-- expansion row declaration -->\n    <ng-container *ngIf=\"detailRow\">\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n  </table>\n</div>\n"
        }
    ],
    "modules": [
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