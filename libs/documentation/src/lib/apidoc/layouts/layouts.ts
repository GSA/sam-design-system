const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "Alert",
            "id": "interface-Alert-5187e6bee7c5825196de89acd19cc4c1",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/model/alert.model.ts",
            "type": "interface",
            "sourceCode": "export interface Alert {\n  header: string,\n  date: Date,\n  description: string,\n  displayDescription?: boolean;\n}",
            "properties": [
                {
                    "name": "date",
                    "type": "Date",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "description",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "displayDescription",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 5
                },
                {
                    "name": "header",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-aed7b66c77d03fc064024826348da1e5",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n     * link \n     */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "agencyName",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 69
                },
                {
                    "name": "href",
                    "type": "string",
                    "optional": false,
                    "description": "<p>link </p>\n",
                    "line": 67
                },
                {
                    "name": "imageAltText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 62
                },
                {
                    "name": "imageSourcePath",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 56
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 50
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "HeaderModel",
            "id": "interface-HeaderModel-031a3e4cfc194f81934f42b7e3f5884f",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "home",
                    "type": "HeaderHome",
                    "optional": false,
                    "description": "<p>Header logo and header logo home link</p>\n",
                    "line": 9
                },
                {
                    "name": "navigationLinks",
                    "type": "HeaderNavigationLink[]",
                    "optional": false,
                    "description": "<p>List of main navigaation links/drop downs</p>\n",
                    "line": 19
                },
                {
                    "name": "secondaryLinks",
                    "type": "HeaderSecondaryLink[]",
                    "optional": false,
                    "description": "<p>List of secondary links</p>\n",
                    "line": 14
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "Page",
            "id": "interface-Page-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
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
            "name": "ResultsModel",
            "id": "interface-ResultsModel-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "filterModel",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 105
                },
                {
                    "name": "page",
                    "type": "number",
                    "optional": true,
                    "description": "",
                    "line": 104
                },
                {
                    "name": "sort",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 103
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SearchListInterface",
            "id": "interface-SearchListInterface-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
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
            "name": "FooterLink",
            "id": "class-FooterLink-aed7b66c77d03fc064024826348da1e5",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n     * link \n     */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 32
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 42
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 37
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "INavigationLink"
            ]
        },
        {
            "name": "FooterLinkSection",
            "id": "class-FooterLinkSection-aed7b66c77d03fc064024826348da1e5",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n     * link \n     */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "links",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 25
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 20
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
            "name": "FooterModel",
            "id": "class-FooterModel-aed7b66c77d03fc064024826348da1e5",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n     * link \n     */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "disclaimer",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "footerLogo",
                    "type": "FooterLogo",
                    "optional": true,
                    "description": "<p>Footer text and logo</p>\n",
                    "line": 13
                },
                {
                    "name": "linkSections",
                    "type": "FooterLinkSection[]",
                    "optional": false,
                    "description": "<p>List of sections and their links</p>\n",
                    "line": 7
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
            "name": "HeaderHome",
            "id": "class-HeaderHome-031a3e4cfc194f81934f42b7e3f5884f",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 48
                },
                {
                    "name": "logo",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Agency Logo for the Header</p>\n",
                    "line": 38
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 28
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route for Home image button</p>\n",
                    "line": 43
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 53
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 33
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "HeaderNavigationLink",
            "id": "class-HeaderNavigationLink-031a3e4cfc194f81934f42b7e3f5884f",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "children",
                    "type": "HeaderNavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 79
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 84
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 64
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 74
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 89
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 69
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "HeaderSecondaryLink",
            "id": "class-HeaderSecondaryLink-031a3e4cfc194f81934f42b7e3f5884f",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "hasCounter",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>displays counter with image</p>\n",
                    "line": 123
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 128
                },
                {
                    "name": "imageClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class</p>\n",
                    "line": 118
                },
                {
                    "name": "imageClassPrefix",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class eg. fas</p>\n",
                    "line": 113
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 98
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 108
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 133
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 103
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "SearchListConfiguration",
            "id": "class-SearchListConfiguration-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "defaultFilterValue",
                    "defaultValue": "{}",
                    "type": "any",
                    "optional": true,
                    "description": "<p>Default values to use during initialization when there is none in url.</p>\n",
                    "line": 98
                },
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
            "id": "class-SearchParameters-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
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
            "id": "class-SearchResult-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
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
            "id": "class-sortItem-79c4d07a80a9265267f9cec524a57b85",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
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
            "name": "SdsDrawerContentComponent",
            "id": "component-SdsDrawerContentComponent-21b2bb10d400ca219c87f7c494365a70",
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
                    "line": 55,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "drawerContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 53
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 56
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss']\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
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
                "line": 53,
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
            "name": "SdsFeedbackComponent",
            "id": "component-SdsFeedbackComponent-c857a6f52f480cd45900568b7e7139b1",
            "file": "libs/packages/layouts/src/lib/feature/sds-feedback/sds-feedback.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-feedback",
            "styleUrls": [
                "./sds-feedback.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./sds-feedback.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "feedbackModel",
                    "defaultValue": "new FormControl('')",
                    "line": 11,
                    "type": "FormControl"
                },
                {
                    "name": "isCollapsedContent",
                    "defaultValue": "true",
                    "line": 12
                }
            ],
            "outputsClass": [
                {
                    "name": "feedbackSubmit",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 13,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onFeedbackSubmitClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 17
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'sds-feedback',\n  templateUrl: './sds-feedback.component.html',\n  styleUrls: ['./sds-feedback.component.scss']\n})\nexport class SdsFeedbackComponent {\n\n  @Input() feedbackModel: FormControl = new FormControl('');\n  @Input() isCollapsedContent = true;\n  @Output() feedbackSubmit = new EventEmitter<string>();\n\n  constructor() { }\n\n  onFeedbackSubmitClicked() {\n    this.feedbackSubmit.emit(this.feedbackModel.value);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./sds-feedback.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 13
            },
            "templateData": "<div class=\"sds-feedback\">\n  <button\n    type=\"button\"\n    class=\"sds-feedback__button simple-toggle\"\n    [attr.aria-expanded]=\"!isCollapsedContent\"\n    aria-controls=\"feedbackCollapseId\"\n    (click)=\"isCollapsedContent = !isCollapsedContent\">\n    \n    <sds-icon [icon]=\"['bs', 'arrow-up-circle-fill']\" [sdsCollapse]=\"isCollapsedContent\"\n      [size]=\"'2x'\" class=\"text-primary margin-auto\"></sds-icon>\n\n    <sds-icon [icon]=\"['bs', 'arrow-down-circle-fill']\" [size]=\"'2x'\"\n      [sdsCollapse]=\"!isCollapsedContent\" class=\"text-primary margin-auto\"></sds-icon>\n\n    <span class=\"sds-feedback__title\">Feedback</span>\n  </button>\n  <div\n    id=\"feedbackCollapseId\"\n    [sdsCollapse]=\"isCollapsedContent\"\n    class=\"sds-feedback__response\"\n  >\n    <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\n      <span class=\"sds-feedback__response-title\">One Question </span>\n      <span class=\"sds-feedback__response-title-thin\"> Survey</span>\n      <p class=\"sds-feedback__response-text\">\n        What changes or improvements would you suggest?\n      </p>\n      <textarea [formControl]=\"feedbackModel\" class=\"sds-feedback__input\" id=\"feedbackInput\" aria-label=\"Feedback input form\" type=\"text\" rows=\"8\"></textarea>\n      <p class=\"text-left\">\n        <button class=\"usa-button usa-button--secondary\" id=\"feedbackSubmit\" \n          aria-label=\"Feedback submit\" (click)=\"onFeedbackSubmitClicked()\">Submit</button>\n      </p>\n    </div>\n  </div>\n</div>"
        },
        {
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-a360ed16f690e6bc8863f2ee05644c12",
            "file": "libs/packages/layouts/src/lib/feature/footer/footer.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-footer",
            "styleUrls": [
                "./footer.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./footer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "feedbackTemplate",
                    "line": 24,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the footer</p>\n",
                    "line": 23,
                    "type": "FooterModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "feedbackSubmit",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 33,
                    "type": "EventEmitter"
                },
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 30,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "expandedIndex",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 13,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "innerWidth",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 18
                }
            ],
            "methodsClass": [
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 39,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 942,
                                "end": 946,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 936,
                                "end": 941,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onFeedbackSubmitClicked",
                    "args": [
                        {
                            "name": "feedback",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44,
                    "jsdoctags": [
                        {
                            "name": "feedback",
                            "type": "string",
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
            "sourceCode": "import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';\nimport { FooterModel } from './model/FooterModel';\nimport { INavigationLink } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\n\n@Component({\n  selector: 'sds-footer',\n  templateUrl: './footer.component.html',\n  styleUrls: ['./footer.component.scss']\n})\nexport class SdsFooterComponent {\n  public innerWidth: any;\n  public expandedIndex: number;\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the footer\n   */\n  @Input() model: FooterModel;\n  @Input() feedbackTemplate: TemplateRef<any>;\n  \n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  @Output()\n  feedbackSubmit = new EventEmitter<string>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  onFeedbackSubmitClicked(feedback: string) {\n    this.feedbackSubmit.emit(feedback);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer\" role=\"contentinfo\">\n  <div *ngIf=\"feedbackTemplate; else defaultFeedback\">\n    <ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n  </div>\n\n  <ng-template #defaultFeedback>\n    <sds-feedback (feedbackSubmit)=\"onFeedbackSubmitClicked($event)\"></sds-feedback>\n  </ng-template>\n\n  <div class=\"usa-footer__primary-section\">\n    <div\n      class=\"grid-container margin-x-0 mobile-lg:margin-x-auto padding-x-0 mobile-lg:padding-x-auto display-none tablet:display-block\">\n      <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap\">\n        <div class=\"tablet:grid-col-12\">\n          <nav class=\"usa-footer__nav margin-x-0 mobile-lg:margin-x-2 padding-x-0 mobile-lg:padding-x-2\" aria-label=\"Footer Navigation Links\">\n            <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap-4\">\n              <div class=\"mobile-lg:grid-col-6 desktop:grid-col-3\" *ngFor=\"let section of model.linkSections\">\n                <section class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\">\n                  <span class=\"h4 usa-footer__primary-link\">{{ section.text }}</span>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                      <ng-container [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <nav class=\"sds-footer__nav--accordion display-block tablet:display-none\" aria-label=\"Footer Navigation Links\">\n      <sds-accordion-next [multi]=\"true\">\n        <sds-accordion-item *ngFor=\"let section of model.linkSections; let $index = index\">\n          <sds-accordion-title>{{ section.text }}</sds-accordion-title>\n          <sds-accordion-content>\n            <ul class=\"usa-list usa-list--unstyled padding-y-1\">\n              <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                <ng-container [ngTemplateOutlet]=\"\n                    navigationHelper.isLinkInternal(link)\n                      ? footerRouteLinkTemplate\n                      : navigationHelper.isLinkExternal(link)\n                      ? footerHREFLinkTemplate\n                      : footerEVENTLinkTemplate\n                  \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n              </li>\n            </ul>\n          </sds-accordion-content>\n        </sds-accordion-item>\n      </sds-accordion-next>\n    </nav>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-4 margin-bottom-4\">\n          <div class=\"sds-footer__logo\">\n            <a class=\"sds-footer__logo-link\" [attr.href]=\"model.footerLogo.href\">\n              <img *ngIf=\"model.footerLogo\" class=\"usa-footer__logo-img\" [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\" />\n            </a>\n            <h3 class=\"sds-footer__logo-heading\">\n              {{model.footerLogo.agencyName}}\n            </h3>\n          </div>\n        </div>\n        <div class=\"sds-footer__note grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-8\" [innerHTML]=\"model.disclaimer\">\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a class=\"usa-link\" [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a class=\"usa-link\" [attr.aria-label]=\"'Open ' + link.text + ' in new window'\" target=\"_blank\" [href]=\"link.route\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-401b00fca59558ee6ead4a5bd0e6946f",
            "file": "libs/packages/layouts/src/lib/feature/header/header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-header",
            "styleUrls": [
                "./header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "alertsTemplate",
                    "line": 50,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the header</p>\n",
                    "line": 44,
                    "type": "HeaderModel"
                },
                {
                    "name": "showHeaderLogo",
                    "defaultValue": "true",
                    "line": 48
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 39
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "line": 46
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 56,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 29,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavClose'"
                        }
                    ]
                },
                {
                    "name": "mobileNavActive",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 30
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 34
                },
                {
                    "name": "openNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 28,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavOpen'"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "closeMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 196
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 99,
                    "description": "<p>Deselects all the items in the header model</p>\n"
                },
                {
                    "name": "find",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 128,
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2983,
                                "end": 2985,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2977,
                                "end": 2982,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>of the navigation item</p>\n"
                        }
                    ]
                },
                {
                    "name": "findNavigationLinks",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 152,
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3587,
                                "end": 3589,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3581,
                                "end": 3586,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "hasCounter",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>seeif any secondary link has a counter</p>\n"
                },
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 174,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4181,
                                "end": 4185,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 4175,
                                "end": 4180,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "navAnimationEnd",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 207
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 192
                },
                {
                    "name": "removeWhiteSpace",
                    "args": [
                        {
                            "name": "text",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 61,
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1442,
                                "end": 1446,
                                "flags": 0,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1436,
                                "end": 1441,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "select",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 88,
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2039,
                                "end": 2041,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2033,
                                "end": 2038,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:resize",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "line": 183
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  Output,\n  EventEmitter,\n  ViewChild,\n  ElementRef,\n  HostListener,\n  TemplateRef\n} from '@angular/core';\nimport {\n  HeaderModel,\n  HeaderNavigationLink,\n  HeaderSecondaryLink\n} from './model/HeaderModel';\nimport { INavigationLink, Selectable } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\nimport { FaIconLibrary } from '@fortawesome/angular-fontawesome';\nimport { fas } from '@fortawesome/free-solid-svg-icons';\nimport { sds } from '@gsa-sam/sam-styles/src/icons/';\n\n@Component({\n  selector: 'sds-header',\n  templateUrl: './header.component.html',\n  styleUrls: ['./header.component.scss']\n})\nexport class SdsHeaderComponent {\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\n  mobileNavActive = false;\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * determines if the top banner is shown\n   */\n  @Input() showTopBanner = true;\n\n  /**\n   * Model used for the different display portions of the header\n   */\n  @Input() model: HeaderModel;\n\n  @Input() topBannerDescription = '';\n\n  @Input() showHeaderLogo = true;\n\n  @Input() alertsTemplate: TemplateRef<any>;\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n  /**\n   * Takes in a text string and removes all white space characters and returns the new string\n   * @param text\n   */\n  removeWhiteSpace(text: string) {\n    return text.replace(/ /g, '');\n  }\n  constructor(library: FaIconLibrary) {\n    library.addIconPacks(fas, sds);\n  }\n  /**\n   * seeif any secondary link has a counter\n   */\n  hasCounter(): boolean {\n    let hasCounter = false;\n    if (this.model) {\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          if (item.hasCounter) {\n            hasCounter = true;\n          }\n        });\n      }\n    }\n    return hasCounter;\n  }\n\n  /**\n   * Deselects previous seletion\n   * @param id\n   */\n  select(id: string) {\n    this.deselect();\n    const item = this.find(id);\n    if (item) {\n      item.selected = true;\n    }\n  }\n\n  /**\n   * Deselects all the items in the header model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.home) {\n        this.model.home.selected = false;\n      }\n      if (this.model.navigationLinks) {\n        this.model.navigationLinks.forEach(function(\n          item: HeaderNavigationLink\n        ) {\n          item.selected = false;\n          if (item.children) {\n            item.children.forEach(function(child: HeaderNavigationLink) {\n              child.selected = false;\n            });\n          }\n        });\n      }\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          item.selected = false;\n        });\n      }\n    }\n  }\n\n  /**\n   * Finds the navigation element by id in the header model\n   * @param id of the navigation item\n   */\n  find(id: string): Selectable {\n    let toReturn = null;\n    if (this.model) {\n      if (this.model.home) {\n        if (this.model.home.id === id) {\n          toReturn = this.model.home;\n        }\n      }\n      toReturn = this.findNavigationLinks(id, toReturn);\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          if (item.id === id) {\n            toReturn = item;\n          }\n        });\n      }\n    }\n    return toReturn;\n  }\n\n  /**\n   * Searchs the items in the navigation links\n   * @param id\n   */\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\n    if (this.model.navigationLinks) {\n      this.model.navigationLinks.forEach(function(item: HeaderNavigationLink) {\n        if (item.id === id) {\n          toReturn = item;\n        }\n        if (item.children) {\n          item.children.forEach(function(child: HeaderNavigationLink) {\n            if (child.id === id) {\n              toReturn = child;\n            }\n          });\n        }\n      });\n    }\n    return toReturn;\n  }\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  // When the mobile nav is active, and the close box isn't visible,\n  // we know the user's viewport has been resized to be larger.\n  // Let's make the page state consistent by deactivating the mobile nav.\n  @HostListener('window:resize', ['$event'])\n  onBrowserResize(event) {\n    if (\n      this.mobileNavActive &&\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\n    ) {\n      this.mobileNavActive = false;\n    }\n  }\n\n  openMobileNav() {\n    this.mobileNavActive = true;\n  }\n\n  closeMobileNav() {\n    this.mobileNavActive = false;\n    // The mobile nav was just deactivated, and focus was on the close\n    // button, which is no longer visible. We don't want the focus to\n    // disappear into the void, so focus on the menu button if it's\n    // visible (this may have been what the user was just focused on,\n    // if they triggered the mobile nav by mistake).\n    this.openNavBtn.nativeElement.focus();\n  }\n\n  // The mobile nav was just activated, so focus on the close button,\n  navAnimationEnd() {\n    this.closeNavBtn.nativeElement.focus();\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./header.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "library",
                        "type": "FaIconLibrary"
                    }
                ],
                "line": 63,
                "jsdoctags": [
                    {
                        "name": "library",
                        "type": "FaIconLibrary",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "templateData": "<sds-top-banner *ngIf=\"showTopBanner\" [description]=\"topBannerDescription\"></sds-top-banner>\n\n<div *ngIf=\"alertsTemplate\">\n  <ng-container [ngTemplateOutlet]=\"alertsTemplate\"></ng-container>\n</div>\n\n<div class=\"usa-overlay\" [class.is-visible]=\"mobileNavActive\" (click)=\"closeMobileNav()\"></div>\n<header class=\"usa-header usa-header--extended\">\n  <div class=\"usa-navbar\">\n    <div *ngIf=\"showHeaderLogo; else fillerBlock\" class=\"usa-logo\">\n      <ng-container [ngTemplateOutlet]=\"\n            navigationHelper.isLinkInternal(model.home)\n              ? homeLinkRouteTemplate\n              : homeLinkHREFTemplate\n          \" [ngTemplateOutletContext]=\"{ $implicit: model.home }\"></ng-container>\n    </div>\n    <button #usaNavOpen class=\"usa-menu-btn\" (click)=\"openMobileNav()\">\n      <fa-layers [fixedWidth]=\"true\" size=\"3x\">\n        <fa-icon [icon]=\"['fas', 'square']\" [classes]=\"['text-primary']\"></fa-icon>\n        <fa-icon [icon]=\"['sds', 'bars']\" [classes]=\"['icon-bars']\" transform=\"shrink-6\"></fa-icon>\n        <fa-layers-counter *ngIf=\"hasCounter()\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\n      </fa-layers>\n      <span class=\"usa-sr-only\">Menu</span>\n    </button>\n  </div>\n  <nav aria-label=\"Primary navigation\" class=\"usa-nav\" (keydown.esc)=\"closeMobileNav()\"\n    (animationend)=\"navAnimationEnd()\" [class.is-visible]=\"mobileNavActive\" [cdkTrapFocus]=\"mobileNavActive\">\n    <div class=\"usa-nav__inner\">\n      <button #usaNavClose class=\"usa-nav__close\" (click)=\"closeMobileNav()\">\n        <fa-layers [fixedWidth]=\"true\" size=\"lg\">\n          <fa-icon [icon]=\"['fas', 'circle']\" [inverse]=\"true\" transform=\"grow-2\"></fa-icon>\n          <fa-icon [icon]=\"['fas', 'times']\" transform=\"shrink-6\"></fa-icon>\n        </fa-layers>\n        <span class=\"usa-sr-only\">Close</span>\n      </button>\n      <ul class=\"usa-nav__primary usa-accordion\">\n        <li *ngFor=\"let link of model.navigationLinks\" class=\"usa-nav__primary-item\">\n          <ng-container [ngTemplateOutlet]=\"link.route ? linkTemplate : dropDownTemplate\"\n            [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n        </li>\n      </ul>\n      <div class=\"usa-nav__secondary\" [ngClass]=\"{'sds-nav__secondary--blank': !showHeaderLogo}\">\n        <ul class=\"usa-nav__secondary-links\">\n          <li *ngFor=\"let link of model.secondaryLinks\" class=\"usa-nav__secondary-item\">\n            <ng-container [ngTemplateOutlet]=\"\n                navigationHelper.isLinkInternal(link)\n                  ? secondaryRouteLinkTemplate\n                  : navigationHelper.isLinkExternal(link)\n                  ? secondaryHREFLinkTemplate\n                  : secondaryEVENTLinkTemplate\n              \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n<ng-template #homeLinkRouteTemplate let-home>\n  <a [routerLink]=\"home.route\" title=\"Home\" aria-label=\"Go to Home page\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #homeLinkHREFTemplate let-home>\n  <a [attr.href]=\"home.route\" title=\"Home\" aria-label=\"Go to Home page\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #secondaryRouteLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" [routerLink]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryHREFLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.href]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryEVENTLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" (click)=\"linkClickEvent(link)\" href=\"javascript:void(0)\"\n    [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #iconLinkTemplate let-link>\n  <fa-layers [fixedWidth]=\"true\">\n    <fa-icon [icon]=\"[link.imageClassPrefix, link.imageClass]\"></fa-icon>\n    <fa-layers-counter *ngIf=\"link.hasCounter\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\n  </fa-layers>\n  <span class=\"sds-nav__secondary-item-text\">{{ link.text }}</span>\n</ng-template>\n\n<ng-template #linkTemplate let-link>\n  <ng-container [ngTemplateOutlet]=\"\n      navigationHelper.isLinkInternal(link)\n        ? linkRouteTemplate\n        : navigationHelper.isLinkExternal(link)\n        ? linkHREFTemplate\n        : linkEventTemplate\n    \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n</ng-template>\n\n<ng-template #linkRouteTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [routerLink]=\"[link.route]\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #linkHREFTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [attr.href]=\"[link.route]\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #linkEventTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #dropDownTemplate let-link>\n  <button [attr.id]=\"link.id\" [attr.class]=\"\n      link.selected\n        ? 'usa-accordion__button usa-nav__link usa-current'\n        : 'usa-accordion__button usa-nav__link'\n    \" aria-expanded=\"false\" [attr.aria-controls]=\"removeWhiteSpace(link.text) + '-section'\">\n    <span>{{ link.text }}</span>\n  </button>\n  <ul [attr.id]=\"removeWhiteSpace(link.text) + '-section'\" class=\"usa-nav__submenu\" hidden>\n    <li *ngFor=\"let childLink of link.children\" class=\"usa-nav__submenu-item\">\n      <ng-container [ngTemplateOutlet]=\"\n          navigationHelper.isLinkInternal(childLink)\n            ? dropDownRouteLinkTemplate\n            : navigationHelper.isLinkExternal(childLink)\n            ? dropDownHREFLinkTemplate\n            : dropDownEVENTLinkTemplate\n        \" [ngTemplateOutletContext]=\"{ $implicit: childLink }\"></ng-container>\n    </li>\n  </ul>\n</ng-template>\n\n<ng-template #dropDownRouteLinkTemplate let-childLink>\n  <a [routerLink]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownHREFLinkTemplate let-childLink>\n  <a [attr.href]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownEVENTLinkTemplate let-childLink>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(childLink)\">{{\n    childLink.text\n  }}</a>\n</ng-template>\n\n<ng-template #fillerBlock>\n  <!--Empty filler space for secondary links for when header logo display is turned off-->\n  <div class=\"sds-navbar--blank \"></div>\n</ng-template>"
        },
        {
            "name": "SdsSubheaderActionsComponent",
            "id": "component-SdsSubheaderActionsComponent-21b2bb10d400ca219c87f7c494365a70",
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
                    "line": 25
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 26,
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
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss']\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 26
            },
            "templateData": "<!-- Actions Menu Trigger: Desktop -->\n<span class=\"display-none desktop:display-inline-block\">\n  <button\n    class=\"sds-button sds-button--labeled-icon actions-button\"\n    [sdsMenuTriggerFor]=\"menu\"\n  >\n    Actions\n    <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\n  </button>\n</span>\n\n<!-- Actions Menu Trigger: Tablet -->\n<span class=\"desktop:display-none \">\n  <span class=\"display-none tablet-lg:display-inline-block\">\n    <button\n      class=\"sds-button sds-button--circular actions-button\"\n      [sdsMenuTriggerFor]=\"menu\"\n    >\n      <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\n      <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n    </button>\n  </span>\n</span>\n\n<!-- Actions Menu Trigger: Mobile -->\n<span class=\"tablet-lg:display-none\">\n  <button\n  class=\"sds-button sds-button--circular actions-button margin-top-05 tablet:margin-top-0\"\n    [sdsMenuTriggerFor]=\"menu\"\n  >\n  <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\n  <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n  </button>\n</span>\n\n<!-- Menu content -->\n<sds-menu #menu=\"sdsMenu\" xPosition=\"before\" overlapTrigger=\"true\">\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button\n    *ngFor=\"let button of model.actions\"\n    (click)=\"clicks.emit(button.id)\"\n    sds-menu-item\n  >\n    {{ button.text }}\n  </button>\n</sds-menu>\n"
        },
        {
            "name": "SdsSubheaderComponent",
            "id": "component-SdsSubheaderComponent-21b2bb10d400ca219c87f7c494365a70",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader",
            "styleUrls": [
                "subheader.component.scss"
            ],
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
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss']\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-navbar{\n  ::ng-deep{\n    sds-button-group{\n      width: 100%;\n      margin: 0;\n      mat-button-toggle-group{\n        width: 100%;\n        mat-button-toggle{\n          @media screen and (max-width: 480px) {\n            flex: 1 1 0px;\n          }\n          .mat-button-toggle-label-content{\n            width: 100%;\n            .usa-button.usa-button--outline{\n              display: flex;\n              justify-content: center;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
                    "styleUrl": "subheader.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 16
            },
            "templateData": "<div class=\"sds-navbar border-bottom border-base-lighter\">\n  <div class=\"sds-subheader__content\">\n    <div class=\"order-first grid-col-auto\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"margin-x-105 margin-top-05 tablet:margin-top-0 tablet:order-0 grid-col-fill display-flex flex-justify-end tablet-lg:flex-justify-start tablet-lg:padding-left-6\">\n      <ng-content select=\"sds-search\"></ng-content>\n    </div>\n    <div class=\"order-last grid-col-12 tablet:order-1 tablet:grid-col-auto display-flex button-container\">\n      <ng-content select=\"[subheader-buttons-container]\"></ng-content>\n      <ng-content select=\"[subheader-buttongroup-container]\"></ng-content>\n    </div>\n    <div class=\"order-2 tablet:margin-left-2 grid-col-auto actions-div\">\n      <ng-content select=\"sds-subheader-actions\"></ng-content>\n    </div>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsSubheaderDrawerComponent",
            "id": "component-SdsSubheaderDrawerComponent-21b2bb10d400ca219c87f7c494365a70",
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
                    "line": 35,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 36,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 39,
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
                    "line": 37
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44
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
                    "line": 40,
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
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss']\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html'\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html'\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html'\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      template => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\n  }\n}\n",
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
                "line": 37,
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
            "name": "SdsSystemAlertComponent",
            "id": "component-SdsSystemAlertComponent-c8270c536e123433d3e1d5573a8f4cd8",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/system-alert.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-system-alert",
            "styleUrls": [
                "./system-alert.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./system-alert.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "alerts",
                    "description": "<p>List of alerts to display. When the list contains only one item, the description of the alert will also\nbe displayed. Description text may contain html</p>\n",
                    "line": 14,
                    "type": "Alert[]"
                }
            ],
            "outputsClass": [
                {
                    "name": "detailsClicked",
                    "defaultValue": "new EventEmitter<Alert>()",
                    "line": 18,
                    "type": "EventEmitter"
                },
                {
                    "name": "seeAllAlerts",
                    "defaultValue": "new EventEmitter()",
                    "line": 16,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onAlertClose",
                    "args": [
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 26,
                    "description": "<p>Removes the alert from input alerts array</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 692,
                                "end": 697,
                                "flags": 0,
                                "escapedText": "index"
                            },
                            "type": "number",
                            "tagName": {
                                "pos": 686,
                                "end": 691,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<ul>\n<li>index of the alert in array to remove</li>\n</ul>\n"
                        }
                    ]
                },
                {
                    "name": "onSeeAllAlertsClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 33,
                    "description": "<p>Fired when &#39;See All Alerts&#39; button is clicked. Emits the seeAllAlerts event</p>\n"
                },
                {
                    "name": "onShowDetailsClicked",
                    "args": [
                        {
                            "name": "alert",
                            "type": "Alert"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43,
                    "description": "<p>Fired when &#39;Show Details&#39; for an alert is clicked. Emits the detailsClicked event\nwith the alert whose &#39;Show Details&#39; link was clicked and toggles description view for\nthe alert</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1182,
                                "end": 1187,
                                "flags": 0,
                                "escapedText": "alert"
                            },
                            "type": "Alert",
                            "tagName": {
                                "pos": 1176,
                                "end": 1181,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onToggleAlertsClicked",
                    "args": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "description": "<p>On mobile view - hide/display list of alerts based on toggle button </p>\n",
                    "jsdoctags": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement",
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
            "sourceCode": "import { Component, EventEmitter, Input, Output } from '@angular/core';\nimport { Alert } from './model/alert.model';\n\n@Component({\n  selector: 'sds-system-alert',\n  templateUrl: './system-alert.component.html',\n  styleUrls: ['./system-alert.component.scss']\n})\nexport class SdsSystemAlertComponent {\n\n  /** List of alerts to display. When the list contains only one item, the description of the alert will also\n   * be displayed. Description text may contain html\n   */\n  @Input() alerts: Alert[];\n  \n  @Output() seeAllAlerts = new EventEmitter();\n\n  @Output() detailsClicked = new EventEmitter<Alert>();\n\n  constructor() { }\n\n  /**\n   * Removes the alert from input alerts array\n   * @param index - index of the alert in array to remove\n   */\n  onAlertClose(index: number) {\n    this.alerts.splice(index, 1);\n  }\n\n  /**\n   * Fired when 'See All Alerts' button is clicked. Emits the seeAllAlerts event\n   */\n  onSeeAllAlertsClicked() {\n    this.seeAllAlerts.emit();\n  }\n\n  /**\n   * Fired when 'Show Details' for an alert is clicked. Emits the detailsClicked event\n   * with the alert whose 'Show Details' link was clicked and toggles description view for\n   * the alert\n   * @param alert \n   */\n  onShowDetailsClicked(alert: Alert) {\n    alert.displayDescription = !alert.displayDescription;\n    this.detailsClicked.emit(alert);\n  }\n\n  /** On mobile view - hide/display list of alerts based on toggle button */\n  onToggleAlertsClicked(alertsContent: HTMLElement) {\n    const isHidden = alertsContent.classList.contains('display-none');\n    if (isHidden) {\n      alertsContent.classList.remove('display-none');\n    } else {\n      alertsContent.classList.add('display-none');\n    }\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./system-alert.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 18
            },
            "templateData": "<div class=\"sds-alert--header usa-grid\">\n  <div class=\"sds-alert--container\">\n    <div class=\"sds-mobile-alert grid-row\">\n      <div class=\"grid-col-auto padding-top-1\">\n        <sds-icon [icon]=\"['sds', 'alert-warning']\" [class]=\"'sds-alert--header__icon-mobile'\" [size]=\"'3x'\"></sds-icon>\n      </div>\n  \n      <div class=\"grid-col-fill\">\n        <div class=\"grid-row tablet:display-none\">\n          <div class=\"grid-col-fill\">\n            <div class=\"sds-alert--header__label\">\n              You have {{alerts.length}} new alerts\n            </div>\n            <div>\n              <a href=\"javascript:void(0)\" (click)=\"onToggleAlertsClicked(alertsContent)\"\n                class=\"sds-alert--header__link simple-toggle\" aria-controls=\"collapseTarget\">\n                Show / Hide Alerts\n              </a>\n            </div>\n          </div>\n          <div class=\"grid-col-auto\">\n            <button (click)=\"onToggleAlertsClicked(alertsContent)\"\n              aria-label=\"Show/Hide alerts\"\n              class=\"sds-button--circle usa-button--secondary simple-toggle\" aria-controls=\"collapseTarget\">\n              <sds-icon [icon]=\"['bs', 'caret-down-fill']\" [size]=\"'1x'\"></sds-icon>\n            </button>\n          </div>\n        </div>\n        <div #alertsContent class=\"grid-row width-full display-none tablet:display-inline-block\" id=\"collapseTarget\">\n          <div class=\"grid-col-fill\">\n            <div class=\"grid-row\">\n              <ng-container \n                [ngTemplateOutlet]=\"alerts && alerts.length == 1 ? singleAlert : multipleAlerts\"\n                [ngTemplateOutletContext]=\"{$implicit: alerts}\"\n              >\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"tablet:grid-offset-1 tablet:grid-col-auto tablet:display-none\">\n            <div>\n              <button class=\"usa-button usa-button--secondary\" id=\"seeAllAlertsMobileBtn\"\n                (click)=\"onSeeAllAlertsClicked()\">See All Alerts</button>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"grid-offset-1 grid-col-auto display-none tablet:display-inline-block\">\n        <button class=\"usa-button usa-button--secondary margin-y-1\" id=\"seeAllAlertsTabletBtn\"\n          (click)=\"onSeeAllAlertsClicked()\">See All\n          Alerts</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #multipleAlerts let-alerts>\n  <div *ngFor=\"let alert of alerts; let i = index;\" class=\"grid-col-12\" [attr.id]=\"'alert' + i\">\n    <div class=\"sds-alert--header__content grid-row\">\n      <div class=\"grid-col-fill\">\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alert.header\"></div>\n        <a (click)=\"onShowDetailsClicked(alert)\"\n          role=\"button\"\n          href=\"javascript:void(0)\" class=\"sds-alert--header__link\"\n          [attr.aria-expanded]=\"alert.displayDescription\"\n          [attr.aria-controls]=\"'alertDescription' + i\"\n          >\n          {{alert.displayDescription ? 'Hide Details' : 'Show Details'}}\n        </a>\n        <span class=\"sds-alert--header__date\">\n          {{alert.date | date: 'mediumDate'}}\n        </span>\n        <span\n          aria-live=\"polite\" \n          [attr.id]=\"'alertDescription' + i\" \n          [sdsCollapse]=\"!alert.displayDescription\" \n          [innerHTML]=\"alert.description\">\n        </span>\n      </div>\n      <div class=\"grid-offset-1 grid-col-auto\">\n        <button (click)=\"onAlertClose(i)\" [attr.id]=\"'alert'+ i + 'CloseBtn'\"\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\n          aria-label=\"Close Alert\" [attr.aria-controls]=\"'alert' + i\">\n          <sds-icon [icon]=\"['sds', 'exit']\"></sds-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #singleAlert let-alerts>\n  <div class=\"grid-col-12\" id=\"alert0\">\n    <div class=\"sds-alert--header__content grid-row\">\n      <div class=\"grid-col-fill\">\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alerts[0].header\"></div>\n        <span class=\"sds-alert--header__date\">\n          {{alerts[0].date | date: 'mediumDate'}}\n        </span>\n        <span [innerHTML]=\"alerts[0].description\"></span>\n      </div>\n      <div class=\"grid-offset-1 grid-col-auto\">\n        <button (click)=\"onAlertClose(0)\" id=\"alert0CloseBtn\"\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\n          aria-label=\"Close Alert\" aria-controls=\"alert0\">\n          <sds-icon [icon]=\"['sds', 'exit']\"></sds-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>"
        },
        {
            "name": "SearchListLayoutComponent",
            "id": "component-SearchListLayoutComponent-6c194091cfae6d1004f853e0595d9bc7",
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
                    "line": 60,
                    "type": "SearchListConfiguration"
                },
                {
                    "name": "customResultsTemplate",
                    "description": "<p>Allow to insert a customized template for no results to use</p>\n",
                    "line": 54,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "isHistoryEnabled",
                    "defaultValue": "true",
                    "line": 56
                },
                {
                    "name": "service",
                    "description": "<p>Input service to be called when items change</p>\n",
                    "line": 49,
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
                    "line": 91
                },
                {
                    "name": "filterData",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 65,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "formlySubscription",
                    "type": "Subscription",
                    "optional": false,
                    "description": "",
                    "line": 71,
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
                    "line": 101
                },
                {
                    "name": "page",
                    "defaultValue": "{\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0,\n    default: true,\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 76
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 96,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 35,
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
                    "description": "<p>sort value</p>\n",
                    "line": 106,
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
                    "line": 86
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items</p>\n",
                    "line": 70
                }
            ],
            "methodsClass": [
                {
                    "name": "convertToModel",
                    "args": [
                        {
                            "name": "filters",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 231,
                    "jsdoctags": [
                        {
                            "name": "filters",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "convertToParam",
                    "args": [
                        {
                            "name": "filters",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 193,
                    "jsdoctags": [
                        {
                            "name": "filters",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getHistoryModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 145
                },
                {
                    "name": "getUrlParams",
                    "args": [
                        {
                            "name": "queryString",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 205,
                    "jsdoctags": [
                        {
                            "name": "queryString",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "longFormatDate",
                    "args": [
                        {
                            "name": "prefix",
                            "type": ""
                        },
                        {
                            "name": "value",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 242,
                    "jsdoctags": [
                        {
                            "name": "prefix",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "value",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnChanges",
                    "args": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 115,
                    "jsdoctags": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 139
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 123
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 254,
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "shortFormatDate",
                    "args": [
                        {
                            "name": "prefix",
                            "type": ""
                        },
                        {
                            "name": "value",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 217,
                    "jsdoctags": [
                        {
                            "name": "prefix",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "value",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateContent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 262,
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
                    "line": 165,
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3956,
                                "end": 3962,
                                "flags": 0,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 3950,
                                "end": 3955,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<ul>\n<li>the updated filter model</li>\n</ul>\n"
                        }
                    ]
                },
                {
                    "name": "updateNavigation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 172
                },
                {
                    "name": "updateSearchResultsModel",
                    "args": [
                        {
                            "name": "historyModel",
                            "type": "ResultsModel"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 286,
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": "historyModel",
                            "type": "ResultsModel",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:popstate",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "line": 109
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  ContentChild,\n  TemplateRef,\n  Optional,\n  OnChanges,\n  SimpleChanges,\n  OnInit,\n  ChangeDetectorRef,\n  HostListener,\n} from '@angular/core';\nimport { BehaviorSubject, Subscription } from 'rxjs';\nimport * as qs from 'qs';\nimport {\n  SearchListInterface,\n  SearchListConfiguration,\n  ResultsModel,\n} from './model/search-list-layout.model';\nimport {\n  SDSFormlyUpdateComunicationService,\n  SDSFormlyUpdateModelService,\n} from '@gsa-sam/sam-formly';\nimport { Router, ActivatedRoute } from '@angular/router';\n\n@Component({\n  selector: 'search-list-layout',\n  templateUrl: './search-list-layout.component.html',\n  styleUrls: ['./search-list-layout.component.scss'],\n})\nexport class SearchListLayoutComponent implements OnChanges, OnInit {\n  /**\n   * Child Template to be used to display the data for each item in the list of items\n   */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n\n  constructor(\n    private cdr: ChangeDetectorRef,\n    private router: Router,\n    private route: ActivatedRoute,\n    @Optional()\n    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,\n    private filterUpdateModelService: SDSFormlyUpdateModelService\n  ) {}\n\n  /**\n   * Input service to be called when items change\n   */\n  @Input() service: SearchListInterface;\n\n  /**\n   * Allow to insert a customized template for no results to use\n   */\n  @Input() customResultsTemplate: TemplateRef<any>;\n\n  @Input() isHistoryEnabled = true;\n  /**\n   * configuration\n   */\n  @Input() configuration: SearchListConfiguration;\n\n  /**\n   * Filter information\n   */\n  private filterData: any;\n\n  /**\n   * Total number of items\n   */\n  totalItems: number;\n  private formlySubscription: Subscription;\n\n  /**\n   * Default Page setttings\n   */\n  page = {\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0,\n    default: true,\n  };\n\n  /**\n   * Id of the top pagination control\n   */\n  top = { id: 'topPagination' };\n\n  /**\n   * Id of the bottom pagination control\n   */\n  bottom = { id: 'bottomPagination' };\n\n  /**\n   * Page event listener\n   */\n  public paginationChange = new BehaviorSubject<object>(this.page);\n\n  /**\n   * List of items to be displayed\n   */\n  items = [];\n\n  /**\n   * sort value\n   */\n  public sortField = '';\n\n  @HostListener('window:popstate', ['$event'])\n  onpopstate(event) {\n    if (this.isHistoryEnabled) {\n      this.getHistoryModel();\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.configuration.currentValue) {\n      this.configuration = changes.configuration.currentValue;\n      this.sortField = this.configuration.defaultSortValue;\n      this.onSelectChange();\n    }\n  }\n\n  ngOnInit() {\n    if (this.isHistoryEnabled) {\n      this.getHistoryModel();\n    }\n    this.page.pageSize = this.configuration.pageSize;\n    this.sortField = this.configuration.defaultSortValue;\n    this.paginationChange.subscribe(() => {\n      this.updateContent();\n    });\n    if (this.formlyUpdateComunicationService) {\n      this.formlySubscription = this.formlyUpdateComunicationService.filterUpdate.subscribe((filter) => {\n        this.updateFilter(filter);\n      });\n    }\n  }\n\n  ngOnDestroy() {\n    if (this.formlySubscription) {\n      this.formlySubscription.unsubscribe();\n    }\n  }\n\n  getHistoryModel() {\n    const queryString = window.location.search.substring(1);\n    const params: any = this.getUrlParams(queryString);\n    const paramModel: any = this.convertToModel(params);\n    this.page.pageNumber = paramModel['page'] ? +paramModel['page'] : 1;\n\n    this.sortField = paramModel['sort'];\n    if (this.filterUpdateModelService) {\n      if (paramModel && paramModel['sfm']) {\n        this.filterUpdateModelService.updateModel(paramModel['sfm']);\n      } else {\n        this.filterUpdateModelService.updateModel(this.configuration.defaultFilterValue);\n      }\n    }\n  }\n\n  /**\n   * updates the filter and set the page number to 1 and calls imported service\n   * @param filter - the updated filter model\n   */\n  public updateFilter(filter: any) {\n    this.filterData = filter;\n    this.page.pageNumber = this.page.default ? this.page.pageNumber : 1;\n    this.page.default = filter ? false : true;\n    this.updateContent();\n  }\n\n  updateNavigation() {\n    const queryString = window.location.search.substring(1);\n    let queryObj = qs.parse(queryString, { allowPrototypes: true });\n\n    if (queryObj.hasOwnProperty('sfm')) {\n      queryObj['sfm'] = {};\n    }\n\n    queryObj['page'] = this.page.pageNumber\n      ? this.page.pageNumber.toString()\n      : '1';\n    queryObj['sort'] = this.sortField ? this.sortField.toString() : '';\n    queryObj['sfm'] = this.filterData;\n    const params = this.convertToParam(queryObj);\n    this.router.navigate([], {\n      relativeTo: this.route,\n      queryParams: params,\n      // queryParamsHandling: \"merge\"\n    });\n  }\n\n  convertToParam(filters) {\n    const encodedValues = qs.stringify(filters, {\n      skipNulls: true,\n      encode: false,\n      filter: this.shortFormatDate,\n    });\n    if (encodedValues) {\n      return this.getUrlParams(encodedValues);\n    } else {\n      return '';\n    }\n  }\n  getUrlParams(queryString) {\n    const target = {};\n    queryString.split('&').forEach((pair) => {\n      if (pair !== '') {\n        const splitpair = pair.split('=');\n        target[splitpair[0]] =\n          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];\n      }\n    });\n    return target;\n  }\n\n  shortFormatDate(prefix, value) {\n    const fixDigit = (val) => {\n      return val.toString().length === 1 ? '0' + val : val;\n    };\n    const getFormattedDate = (date) =>\n      `${fixDigit(\n        date.getMonth() + 1\n      )}/${date.getDate()}/${date.getFullYear()}`;\n    if (value instanceof Date) {\n      value = getFormattedDate(new Date(value));\n    }\n    return value;\n  }\n\n  convertToModel(filters) {\n    let obj = {};\n    const encodedValues = qs.stringify(filters, {\n      skipNulls: true,\n      encode: false,\n      filter: this.longFormatDate,\n    });\n    obj = qs.parse(encodedValues);\n    return obj;\n  }\n\n  longFormatDate(prefix, value) {\n    const val = decodeURIComponent(value);\n    const isDate = /^(\\d{1,2})[-\\/](\\d{1,2})[-\\/](\\d{4})$/.exec(val);\n    if (isDate) {\n      value = new Date(val).toISOString();\n    }\n    return value;\n  }\n\n  /**\n   * Sorty by change event\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.updateContent();\n  }\n\n  /**\n   * calls service when updated\n   */\n  private updateContent() {\n    if (this.isHistoryEnabled) {\n      this.updateNavigation();\n    }\n\n    if (this.filterData && this.service) {\n      setTimeout(() => {\n        this.service\n          .getData({\n            page: this.page,\n            sortField: this.sortField,\n            filter: this.filterData,\n          })\n          .subscribe((result) => {\n            this.items = result.items;\n            this.page.totalPages = Math.ceil(\n              result.totalItems / this.page.pageSize\n            );\n            this.totalItems = result.totalItems;\n          });\n      });\n    }\n  }\n\n  public updateSearchResultsModel(historyModel: ResultsModel) {\n    this.filterData = historyModel.filterModel;\n    this.page.default = historyModel.page || historyModel.sort ? true : false;\n    this.page.pageNumber = historyModel.page ? historyModel.page : 1;\n    this.sortField = historyModel.sort ? historyModel.sort : this.sortField;\n    if (this.filterUpdateModelService) {\n      if (historyModel && historyModel.filterModel) {\n        this.filterUpdateModelService.updateModel(historyModel.filterModel);\n      } else {\n        this.filterUpdateModelService.updateModel({});\n      }\n    }\n  }\n}\n",
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
                        "name": "cdr",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "router",
                        "type": "Router"
                    },
                    {
                        "name": "route",
                        "type": "ActivatedRoute"
                    },
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService"
                    },
                    {
                        "name": "filterUpdateModelService",
                        "type": "SDSFormlyUpdateModelService"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "cdr",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "router",
                        "type": "Router",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "route",
                        "type": "ActivatedRoute",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "filterUpdateModelService",
                        "type": "SDSFormlyUpdateModelService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnChanges",
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\n  <div class=\"grid-col\">\n    <div class=\"grid-row\">\n      <div class=\"grid-col-auto\">\n        <sds-pagination class=\"tablet:grid-col display-block margin-top-3 padding-top-3\" [paginationConfiguration]=\"top\"\n          [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\" displayMode='results' [totalItems]=\"totalItems\">\n        </sds-pagination>\n      </div>\n      <div class=\"grid-col-fill\"></div>\n      <div class=\"grid-col-auto float-right\">\n        <div class=\"margin-left-1\">\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\n            Sort by\n          </label>\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\"\n            class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\n              {{ item.text }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"grid-row\">\n  <div class=\"grid-col-12\">\n    <sds-search-result-list [model]=\"items\" [customResultsTemplate]=\"customResultsTemplate\">\n      <ng-template #resultContent let-item>\n        <ng-container *ngTemplateOutlet=\"resultContentTemplate,\n                context: { $implicit: item }\"></ng-container>\n      </ng-template>\n    </sds-search-result-list>\n    <sds-pagination *ngIf=\"items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\"\n      (pageChange)=\"paginationChange.next($event)\"></sds-pagination>\n  </div>\n</div>\n"
        },
        {
            "name": "SideToolbarComponent",
            "id": "component-SideToolbarComponent-29700e717f5bd65e622220d56d01c66f",
            "file": "libs/packages/layouts/src/lib/feature/side-toolbar/side-toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-toolbar",
            "styleUrls": [
                "./side-toolbar.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "responsiveButtonText",
                    "line": 24,
                    "type": "string"
                },
                {
                    "name": "responsiveSize",
                    "defaultValue": "480",
                    "line": 27
                }
            ],
            "outputsClass": [
                {
                    "name": "responsiveDialog",
                    "defaultValue": "new EventEmitter()",
                    "line": 29,
                    "type": "EventEmitter"
                },
                {
                    "name": "responsiveView",
                    "defaultValue": "new EventEmitter()",
                    "line": 30,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "isResponsiveView",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 32
                },
                {
                    "name": "openResponsiveDialog",
                    "type": "SdsDialogRef<TemplateRef<any>>",
                    "optional": false,
                    "description": "",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "subscription",
                    "defaultValue": "new Subscription()",
                    "type": "Subscription",
                    "optional": false,
                    "description": "",
                    "line": 34,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "template",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 21,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 46
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 42
                },
                {
                    "name": "observeViewChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 64,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onResponsiveViewButtonClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 50
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  ContentChild,\n  EventEmitter,\n  Input,\n  OnDestroy,\n  OnInit,\n  Output,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';\nimport { BreakpointObserver } from '@angular/cdk/layout';\nimport { Subscription } from 'rxjs';\n\n@Component({\n  selector: 'sds-side-toolbar',\n  templateUrl: './side-toolbar.component.html',\n  styleUrls: ['./side-toolbar.component.scss'],\n})\nexport class SideToolbarComponent implements OnInit, OnDestroy {\n  @ContentChild(TemplateRef) template: TemplateRef<any>;\n\n  // Text for button in responsive view\n  @Input() responsiveButtonText: string;\n\n  // default value is size of mobile view in px\n  @Input() responsiveSize = 480;\n\n  @Output() responsiveDialog = new EventEmitter();\n  @Output() responsiveView = new EventEmitter();\n\n  isResponsiveView = false;\n\n  private subscription: Subscription = new Subscription();\n  private openResponsiveDialog: SdsDialogRef<TemplateRef<any>>;\n\n  constructor(\n    private sdsDialogService: SdsDialogService,\n    private breakpointObserver: BreakpointObserver // Will watch for changes between mobile and non-mobile screen size\n  ) {}\n\n  ngOnInit() {\n    this.observeViewChange();\n  }\n\n  ngOnDestroy() {\n    this.subscription.unsubscribe();\n  }\n\n  onResponsiveViewButtonClicked() {\n    this.openResponsiveDialog = this.sdsDialogService.open(this.template, {\n      height: '100vh',\n      width: '100vw',\n      maxWidth: '100vw',\n      maxHeight: '100vh',\n      hasBackdrop: false,\n      displayCloseBtn: false,\n      panelClass: ['sds-dialog--full'],\n    });\n\n    this.responsiveDialog.emit(this.openResponsiveDialog);\n  }\n\n  private observeViewChange() {\n    const breakpointUnsubscription = this.breakpointObserver\n      .observe([`(max-width: ${this.responsiveSize}px)`])\n      .subscribe((result) => {\n        if (result.matches) {\n          this.isResponsiveView = true;\n        } else {\n          this.isResponsiveView = false;\n          if (this.openResponsiveDialog) {\n            this.openResponsiveDialog.close();\n            this.openResponsiveDialog = undefined;\n            this.responsiveDialog.emit(this.openResponsiveDialog);\n          }\n        }\n\n        this.responsiveView.emit(this.isResponsiveView);\n      });\n\n    this.subscription.add(breakpointUnsubscription);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-toolbar.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService"
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "templateData": "<div *ngIf=\"!isResponsiveView\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>\n\n<div *ngIf=\"isResponsiveView\">\n  <button class=\"usa-button usa-button--accent-cool usa-button--hover text-secondary-dar\" id=\"responsiveViewButton\"\n    (click)=\"onResponsiveViewButtonClicked()\" [attr.aria-label]=\"responsiveButtonText\">\n    {{responsiveButtonText}}\n  </button>\n</div>"
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
            "name": "SdsFeedbackModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsFeedbackComponent"
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
                            "name": "SdsFeedbackComponent"
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
            "name": "SdsFooterModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsFooterComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsFeedbackModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsFooterComponent"
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
            "name": "SdsHeaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsHeaderComponent"
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
                            "name": "SdsHeaderComponent"
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
            "name": "SdsSystemAlertModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSystemAlertComponent"
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
                            "name": "SdsSystemAlertComponent"
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
        },
        {
            "name": "SideToolbarModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SideToolbarComponent"
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
                            "name": "SideToolbarComponent"
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
    "miscellaneous": []
};

export default LAYOUTS;