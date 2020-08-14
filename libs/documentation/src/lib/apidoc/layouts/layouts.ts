const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "Page",
            "id": "interface-Page-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page number</p>\n",
                    "line": 26
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page size</p>\n",
                    "line": 31
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of pages</p>\n",
                    "line": 36
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SearchListInterface",
            "id": "interface-SearchListInterface-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getData",
                    "args": [
                        {
                            "name": "search",
                            "type": "SearchParameters"
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SearchResult>",
                    "typeParameters": [],
                    "line": 61,
                    "description": "<p>Method to get the takes it takes in the SearchParameters and returns SearchResult object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 785,
                                "end": 791,
                                "flags": 0,
                                "escapedText": "search"
                            },
                            "type": "SearchParameters",
                            "tagName": {
                                "pos": 779,
                                "end": 784,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        }
    ],
    "injectables": [
        {
            "name": "SdsDrawerCommunicationService",
            "id": "injectable-SdsDrawerCommunicationService-9539dd5998c81e048cecea3b5b23c472",
            "file": "libs/packages/layouts/src/lib/feature/subheader/drawer-communication.service.ts",
            "properties": [
                {
                    "name": "contentTemplate",
                    "defaultValue": "this.currentTemplate.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "currentTemplate",
                    "defaultValue": "new BehaviorSubject<TemplateRef<any>>(null)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "this.isOpen.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "isOpen",
                    "defaultValue": "new BehaviorSubject(false)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 6,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "onDrawerOpen",
                    "args": [
                        {
                            "name": "open",
                            "type": "boolean"
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12,
                    "jsdoctags": [
                        {
                            "name": "open",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "description": "",
            "sourceCode": "import { Injectable, TemplateRef } from '@angular/core';\nimport { BehaviorSubject } from 'rxjs';\n\n@Injectable()\nexport class SdsDrawerCommunicationService {\n  private isOpen = new BehaviorSubject(false);\n  isDrawerOpen = this.isOpen.asObservable();\n\n  private currentTemplate= new BehaviorSubject<TemplateRef<any>>(null);\n  contentTemplate = this.currentTemplate.asObservable();\n\n  onDrawerOpen(open: boolean, temp : TemplateRef<any>){\n    this.isOpen.next(open);\n    this.currentTemplate.next(temp);  \n  }\n}",
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "SearchListConfiguration",
            "id": "class-SearchListConfiguration-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [
                {
                    "name": "defaultSortValue",
                    "type": "string",
                    "optional": false,
                    "description": "<p>default sort value</p>\n",
                    "line": 88
                },
                {
                    "name": "pageSize",
                    "defaultValue": "25",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Starting page size</p>\n",
                    "line": 93
                },
                {
                    "name": "sortList",
                    "type": "sortItem[]",
                    "optional": false,
                    "description": "<p>List of sort by items</p>\n",
                    "line": 83
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
            "name": "SearchParameters",
            "id": "class-SearchParameters-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [
                {
                    "name": "filter",
                    "type": "any",
                    "optional": false,
                    "description": "<p>filter data</p>\n",
                    "line": 17
                },
                {
                    "name": "page",
                    "type": "Page",
                    "optional": false,
                    "description": "<p>page  </p>\n",
                    "line": 7
                },
                {
                    "name": "sortField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Sort value</p>\n",
                    "line": 12
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
            "name": "SearchResult",
            "id": "class-SearchResult-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [
                {
                    "name": "items",
                    "type": "any[]",
                    "optional": false,
                    "description": "<p>Items to be displayed</p>\n",
                    "line": 50
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items (beyond the page)</p>\n",
                    "line": 45
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
            "name": "sortItem",
            "id": "class-sortItem-1ac63cee68dcb066f47674b6ad12ca00",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n}",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed</p>\n",
                    "line": 68
                },
                {
                    "name": "value",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Value of Item</p>\n",
                    "line": 73
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
            "name": "SdsActionsMenuComponent",
            "id": "component-SdsActionsMenuComponent-b29369330e17e32ba02c3425b2f75f08",
            "file": "libs/packages/layouts/src/lib/feature/actions-menu/actions-menu.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-actions-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "actions-menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 8
                },
                {
                    "name": "size",
                    "line": 9,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 10,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'sds-actions-menu',\n  templateUrl: 'actions-menu.component.html'\n})\nexport class SdsActionsMenuComponent {\n  @Input() model;\n  @Input() size: string;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            },
            "templateData": "<!-- Button that triggers menu (sdsMenuTriggerFor) -->\n<button\n  class=\"sds-button sds-button--circular\"\n  [class.sds-button--primary]=\"model.trigger.type === 'primary'\"\n  [class.sds-button--shadow]=\"model.trigger.shadow\"\n  [class.sds-button--small]=\"size === 'sm'\"\n  [sdsMenuTriggerFor]=\"menu\"\n>\n  <fa-icon\n    [fixedWidth]=\"true\"\n    [icon]=\"['sds', 'ellipsis']\"\n    transform=\"grow-5\"\n  ></fa-icon>\n  <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n</button>\n\n<!-- Menu content -->\n<sds-menu\n  #menu=\"sdsMenu\"\n  [size]=\"size\"\n  xPosition=\"before\"\n  overlapTrigger=\"true\"\n>\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button\n    *ngFor=\"let button of model.actions\"\n    (click)=\"clicks.emit(button.id)\"\n    sds-menu-item\n  >\n    {{ button.text }}\n  </button>\n</sds-menu>\n"
        },
        {
            "name": "SdsDownloadModalComponent",
            "id": "component-SdsDownloadModalComponent-d0159959292d2fa3e99272be944b8e38",
            "file": "libs/packages/layouts/src/lib/feature/download-modal/download-modal.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-download-modal",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "./download-modal.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "fields",
                    "line": 13,
                    "type": "FormlyFieldConfig[]"
                },
                {
                    "name": "message",
                    "line": 11,
                    "type": "string"
                },
                {
                    "name": "model",
                    "line": 12,
                    "type": "any"
                }
            ],
            "outputsClass": [
                {
                    "name": "onFormGroupChange",
                    "defaultValue": "new EventEmitter<any>()",
                    "line": 9,
                    "type": "EventEmitter<any>"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onSubmit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 15
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'sds-download-modal',\n  templateUrl: './download-modal.component.html'\n})\nexport class SdsDownloadModalComponent {\n  @Output() onFormGroupChange: EventEmitter<any> = new EventEmitter<any>();\n\n  @Input() message: string;\n  @Input() model: any;\n  @Input() fields: FormlyFieldConfig[];\n\n  onSubmit() {\n    this.onFormGroupChange.emit(this.model);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div sds-dialog-title>Download</div>\n<div sds-dialog-content>\n  <p>Choose from following download option. Lorem ipsum dolor sit amet, <br>\n    consecteur adipiscing elit, sed do eiusmod tempor incidunt.\n  </p>\n\n  <formly-form [fields]=\"fields\" [model]=\"model\">\n  </formly-form>\n\n\n</div>\n<div sds-dialog-actions>\n  <button class=\"usa-button usa-button--base\">\n    Cancel\n  </button>\n  <button class=\"usa-button\" (click)=\"onSubmit()\" cdkFocusInitial>\n    Submit\n  </button>\n</div>\n"
        },
        {
            "name": "SdsDrawerContentComponent",
            "id": "component-SdsDrawerContentComponent-06e8be92f247b147e203e9e3ff211942",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-drawer-content",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "drawer.content.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 54,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "drawerContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 51
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 52
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 55
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html'\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 52,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<ng-container *ngIf=\"drawerContentTemplate && isDrawerOpen\" [ngTemplateOutlet]=\"drawerContentTemplate\" >\n</ng-container>\n"
        },
        {
            "name": "SdsSubheaderActionsComponent",
            "id": "component-SdsSubheaderActionsComponent-06e8be92f247b147e203e9e3ff211942",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-actions",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-actions.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 24
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 25,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html'\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 25
            },
            "templateData": "<!-- Actions Menu Trigger: Desktop -->\n<span class=\"display-none desktop-lg:display-inline-block\">\n  <button\n    class=\"sds-button sds-button--labeled-icon\"\n    [sdsMenuTriggerFor]=\"menu\"\n  >\n    Actions\n    <fa-layers [fixedWidth]=\"true\" size=\"lg\">\n      <fa-icon [icon]=\"['fas', 'circle']\"></fa-icon>\n      <fa-icon [icon]=\"['fas', 'ellipsis-v']\" transform=\"shrink-6\"></fa-icon>\n    </fa-layers>\n  </button>\n</span>\n\n<!-- Actions Menu Trigger: Tablet -->\n<span class=\"desktop-lg:display-none \">\n  <span class=\"display-none tablet-lg:display-inline-block\">\n    <button\n      class=\"sds-button sds-button--primary sds-button--circular\"\n      [sdsMenuTriggerFor]=\"menu\"\n    >\n      <fa-icon [fixedWidth]=\"true\" [icon]=\"['fas', 'ellipsis-v']\"></fa-icon>\n      <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n    </button>\n  </span>\n</span>\n\n<!-- Actions Menu Trigger: Mobile -->\n<span class=\"tablet-lg:display-none\">\n  <button\n    *ngFor=\"let button of model.actions\"\n    (click)=\"clicks.emit(button.id)\"\n    class=\"sds-button sds-button--circular margin-top-05 tablet:margin-top-0\"\n  >\n    <fa-icon [fixedWidth]=\"true\" [icon]=\"['sds', button.icon]\"></fa-icon>\n  </button>\n</span>\n\n<!-- Menu content -->\n<sds-menu #menu=\"sdsMenu\" xPosition=\"before\" overlapTrigger=\"true\">\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button\n    *ngFor=\"let button of model.actions\"\n    (click)=\"clicks.emit(button.id)\"\n    sds-menu-item\n  >\n    {{ button.text }}\n  </button>\n</sds-menu>\n"
        },
        {
            "name": "SdsSubheaderComponent",
            "id": "component-SdsSubheaderComponent-06e8be92f247b147e203e9e3ff211942",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader.component.html"
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
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html'\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 15
            },
            "templateData": "<div class=\"sds-navbar border-bottom border-base-lighter\">\n  <div class=\"sds-navbar__content\">\n    <div class=\"grid-row\">\n      <div\n        class=\"grid-col-12 tablet-lg:grid-col-auto display-flex flex-align-center margin-bottom-1 tablet-lg:margin-bottom-0\"\n      >\n        <ng-content></ng-content>\n      </div>\n      <div class=\"grid-col-12 tablet-lg:grid-col-fill display-flex\">\n        <div class=\"tablet-lg:order-1\">\n          <!-- Buttons -->\n          <ng-content select=\"[subheader-buttons-container]\"></ng-content>\n        </div>\n        <div class=\"flex-fill\">\n          <!-- Search -->\n          <div class=\"margin-x-105 margin-top-05 tablet:margin-top-0\">\n            <ng-content select=\"sds-search\"></ng-content>\n          </div>\n        </div>\n        <div class=\"tablet-lg:order-2 margin-left-2\">\n          <!-- Actions Menu Trigger -->\n          <ng-content select=\"sds-subheader-actions\"></ng-content>\n\n          <!-- Drawer Trigger -->\n          <ng-content select=\"sds-subheader-drawer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- =============== DRAWER CONTENT =============== -->\n<sds-drawer-content></sds-drawer-content>\n"
        },
        {
            "name": "SdsSubheaderDrawerComponent",
            "id": "component-SdsSubheaderDrawerComponent-06e8be92f247b147e203e9e3ff211942",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-drawer",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-drawer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "drawerContentTemplate",
                    "line": 34,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 35,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 38,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 36
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                },
                {
                    "name": "onDrawerOpenClose",
                    "args": [
                        {
                            "name": "ev",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 39,
                    "jsdoctags": [
                        {
                            "name": "ev",
                            "type": "",
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
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html'\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 36,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<button\n  (click)=\"onDrawerOpenClose($event)\"\n  class=\"sds-button sds-button--circular margin-top-2px tablet:margin-top-0\"\n>\n  <fa-icon\n    [fixedWidth]=\"true\"\n    [icon]=\"isOpen ? ['fas', 'arrow-up'] : ['fas', 'arrow-down']\"\n  ></fa-icon>\n</button>\n"
        },
        {
            "name": "SearchListLayoutComponent",
            "id": "component-SearchListLayoutComponent-2300dad616bf084c0833f63ba5506ba3",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/search-list-layout.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "search-list-layout",
            "styleUrls": [
                "./search-list-layout.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-list-layout.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>configuration</p>\n",
                    "line": 30,
                    "type": "SearchListConfiguration"
                },
                {
                    "name": "service",
                    "description": "<p>Input service to be called when items change</p>\n",
                    "line": 24,
                    "type": "SearchListInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "bottom",
                    "defaultValue": "{ id: 'bottomPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the bottom pagination control</p>\n",
                    "line": 89
                },
                {
                    "name": "filterData",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "items",
                    "defaultValue": "[]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>List of items to be displayed</p>\n",
                    "line": 99
                },
                {
                    "name": "page",
                    "defaultValue": "{\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 57
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 94,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 16,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                },
                {
                    "name": "sortField",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort value </p>\n",
                    "line": 104,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "top",
                    "defaultValue": "{ id: 'topPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the top pagination control</p>\n",
                    "line": 84
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "updateContent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 109,
                    "description": "<p>calls service when updated</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "updateFilter",
                    "args": [
                        {
                            "name": "filter",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 67,
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1693,
                                "end": 1699,
                                "flags": 0,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 1687,
                                "end": 1692,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit, Input, ContentChild, TemplateRef, Optional } from '@angular/core';\nimport { BehaviorSubject } from \"rxjs\";\nimport { SearchListInterface, SearchListConfiguration } from './model/search-list-layout.model';\nimport { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';\n\n@Component({\n  selector: 'search-list-layout',\n  templateUrl: './search-list-layout.component.html',\n  styleUrls: ['./search-list-layout.component.scss']\n})\nexport class SearchListLayoutComponent implements OnInit {\n\n  /**\n  * Child Template to be used to display the data for each item in the list of items\n  */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n\n  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService) { }\n\n  /**\n   * Input service to be called when items change\n   */\n  @Input()\n  service: SearchListInterface;\n\n  /**\n   * configuration\n   */\n  @Input()\n  configuration: SearchListConfiguration;\n\n  /**\n   * Filter information\n   */\n  private filterData: any;\n\n  ngOnInit() {\n    this.page.pageSize = this.configuration.pageSize;\n    this.sortField = this.configuration.defaultSortValue;\n    this.paginationChange.subscribe(\n      () => {\n        this.updateContent();\n      }\n    );\n    if (this.formlyUpdateComunicationService) {\n      this.formlyUpdateComunicationService.filterUpdate.subscribe(\n        (filter) => {\n          this.updateFilter(filter);\n        }\n      )\n    }\n  }\n\n  /**\n   * Default Page setttings\n   */\n  page = {\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0\n  }\n\n  /**\n   * updates the filter and set the page number to 1 and calls imported service\n   * @param filter \n   */\n  public updateFilter(filter: any) {\n    this.filterData = filter;\n    this.page.pageNumber = 1;\n    this.updateContent();\n  }\n\n  /**\n   * Sorty by change event\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.updateContent();\n  }\n\n  /**\n   * Id of the top pagination control\n   */\n  top = { id: 'topPagination' };\n\n  /**\n   * Id of the bottom pagination control\n   */\n  bottom = { id: 'bottomPagination' };\n\n  /**\n   * Page event listener\n   */\n  public paginationChange = new BehaviorSubject<object>(this.page);\n\n  /**\n   * List of items to be displayed\n   */\n  items = [];\n\n  /**\n   * sort value \n   */\n  public sortField = '';\n\n  /**\n   * calls service when updated\n   */\n  private updateContent() {\n    this.service.getData({ 'page': this.page, sortField: this.sortField, filter: this.filterData }).subscribe(\n      (result) => {\n        this.items = result.items;\n        this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);\n      }\n    );\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-list-layout.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService"
                    }
                ],
                "line": 16,
                "jsdoctags": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\n  <div class=\"grid-col\">\n    <div class=\"grid-row\">\n      <div class=\"grid-col-auto\">\n        <sds-pagination class=\"tablet:grid-col\" [paginationConfiguration]=\"top\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\">\n        </sds-pagination>\n      </div>\n      <div class=\"grid-col-fill\"></div>\n      <div class=\"grid-col-auto float-right\">\n        <div class=\"margin-left-1\">\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\n            Sort by\n          </label>\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\" class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\n              {{ item.text }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"grid-row\">\n  <div class=\"grid-col-12\">\n    <sds-search-result-list [model]=\"items\">\n      <ng-template #resultContent let-item>\n        <ng-container *ngTemplateOutlet=\"resultContentTemplate,\n                context: { $implicit: item }\"></ng-container>\n      </ng-template>\n    </sds-search-result-list>\n    <sds-pagination *ngIf=\"items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\">\n    </sds-pagination>\n  </div>\n</div>\n"
        }
    ],
    "modules": [
        {
            "name": "PackagesLayoutsModule",
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
            "name": "SdsActionsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsActionsMenuComponent"
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
                            "name": "SdsActionsMenuComponent"
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
        },
        {
            "name": "SdsDownloadModalModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDownloadModalComponent"
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
                            "name": "SdsDownloadModalComponent"
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
        },
        {
            "name": "SdsSubheaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDrawerCommunicationService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsActionsMenuModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
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
        },
        {
            "name": "SearchListServiceModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SearchListLayoutComponent"
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
                            "name": "SearchListLayoutComponent"
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
                "file": "libs/packages/layouts/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/layouts/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/layouts/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default LAYOUTS;