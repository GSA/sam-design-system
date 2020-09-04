const MATERIAL = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [],
    "directives": [],
    "components": [
        {
            "name": "SdsAccordionComponent",
            "id": "component-SdsAccordionComponent-48481c8310b0de8a8e10b735ad8de6a1",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-next",
            "styleUrls": [
                "./accordion.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./accordion.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  OnInit,\n  ViewChild\n} from '@angular/core';\n//import { MatSort, MatTableDataSource } from '@angular/material';\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  // @ViewChild(MatSort) sort: MatSort;\n\n  // /**\n  //  * Data for table\n  //  */\n  // @Input() data;\n\n  // /**\n  //  * columns to display in header\n  //  * {@link SdsTableColumnSettings}\n  //  */\n  // @Input() columns: SdsTableColumnSettings[];\n\n  // /**\n  //  * template outlet for expandable detail\n  //  * all properties for the selected row will be available for use in the template after set using let-{new property name}\n  //  */\n  // @Input() detailRow?: TemplateRef<any>;\n\n  // /**\n  //  * table settings\n  //  * {@link SdsTableSettings}\n  // */\n  // @Input() settings?: SdsTableSettings;\n\n  // /**\n  //  * table MatTableDataSource data source based on Input data\n  //  */\n  // dataSource: MatTableDataSource<any>;\n\n  // /**\n  //  * currently expanded row\n  //  */\n  // expandedRow: any | null = null;\n\n  // /**\n  //  * column ids displayed\n  //  */\n  // columnIds: string[] = [];\n\n  // constructor() {}\n\n  // ngOnInit() {\n  //   // convert data to MatTableDataSource\n  //   this.dataSource = new MatTableDataSource(this.data);\n\n  //   // enable sort if set in settings\n  //   if (this.settings && this.settings.sort) {\n  //     this.dataSource.sort = this.sort;\n  //   } else {\n  //     this.sort.disabled = true;\n  //   }\n\n  //   // get column primary keys\n  //   this.columns.forEach(col => {\n  //     this.columnIds.push(col.primaryKey);\n  //   });\n\n  //   // add column if expandable\n  //   if (this.detailRow) {\n  //     this.columnIds.push('sdsExpandableRow');\n  //   }\n  // }\n\n  // toggleRowExpansion(row: any) {\n  //   this.expandedRow = this.expandedRow === row ? null : row;\n  // }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./accordion.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "test\n"
        }
    ],
    "modules": [
        {
            "name": "SdsAccordionModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsAccordionComponent"
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
                            "name": "SdsAccordionComponent"
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
