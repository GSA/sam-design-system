const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-197b29013c6c1d8a14afce009a936010",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n\n  /**\n   * Footer disclaimer\n   */\n\n  disclaimer?: string;\n\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link for logo image\n   */\n\n  href?: string;\n\n  /**\n   * agency name adjacent to logo\n   */\n\n  agencyName?: string;\n\n}\n",
            "properties": [
                {
                    "name": "agencyName",
                    "type": "string",
                    "optional": true,
                    "description": "<p>agency name adjacent to logo</p>\n",
                    "line": 81
                },
                {
                    "name": "href",
                    "type": "string",
                    "optional": true,
                    "description": "<p>link for logo image</p>\n",
                    "line": 75
                },
                {
                    "name": "imageAltText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 69
                },
                {
                    "name": "imageSourcePath",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 63
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 57
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
            "name": "FooterLink",
            "id": "class-FooterLink-197b29013c6c1d8a14afce009a936010",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n\n  /**\n   * Footer disclaimer\n   */\n\n  disclaimer?: string;\n\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link for logo image\n   */\n\n  href?: string;\n\n  /**\n   * agency name adjacent to logo\n   */\n\n  agencyName?: string;\n\n}\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 39
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 49
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 44
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
            "id": "class-FooterLinkSection-197b29013c6c1d8a14afce009a936010",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n\n  /**\n   * Footer disclaimer\n   */\n\n  disclaimer?: string;\n\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link for logo image\n   */\n\n  href?: string;\n\n  /**\n   * agency name adjacent to logo\n   */\n\n  agencyName?: string;\n\n}\n",
            "properties": [
                {
                    "name": "links",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 32
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 27
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
            "id": "class-FooterModel-197b29013c6c1d8a14afce009a936010",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n\n  /**\n   * Footer disclaimer\n   */\n\n  disclaimer?: string;\n\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link for logo image\n   */\n\n  href?: string;\n\n  /**\n   * agency name adjacent to logo\n   */\n\n  agencyName?: string;\n\n}\n",
            "properties": [
                {
                    "name": "disclaimer",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Footer disclaimer</p>\n",
                    "line": 19
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
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-00bbc7f7f1bfaf8e8172196bb0ccb4c7",
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
                    "name": "isCollapsedContent",
                    "defaultValue": "true",
                    "line": 22
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the footer</p>\n",
                    "line": 21,
                    "type": "FooterModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 28,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 16
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
                    "line": 34,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 800,
                                "end": 804,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 794,
                                "end": 799,
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
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { FooterModel } from './model/FooterModel';\nimport { INavigationLink } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\n\n@Component({\n  selector: 'sds-footer',\n  templateUrl: './footer.component.html',\n  styleUrls: ['./footer.component.scss']\n})\nexport class SdsFooterComponent {\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the footer\n   */\n  @Input() model: FooterModel;\n  @Input() isCollapsedContent = true;\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer\" role=\"contentinfo\">\n  <div class=\"sds-feedback\">\n    <button\n      type=\"button\"\n      class=\"sds-feedback__button simple-toggle\"\n      [attr.aria-expanded]=\"!isCollapsedContent\"\n      aria-controls=\"collapseID\"\n      (click)=\"isCollapsedContent = !isCollapsedContent\"\n    >\n      <fa-layers [fixedWidth]=\"true\" size=\"2x\">\n        <fa-icon\n          [icon]=\"['fas', 'circle']\"\n          [sdsCollapse]=\"isCollapsedContent\"\n          class=\"text-base-light margin-auto\"\n        ></fa-icon>\n        <fa-icon\n          [icon]=\"['sds', 'arrow-up']\"\n          [sdsCollapse]=\"isCollapsedContent\"\n          transform=\"shrink-6\"\n        ></fa-icon>\n        <fa-icon\n          [icon]=\"['fas', 'circle']\"\n          [sdsCollapse]=\"!isCollapsedContent\"\n          class=\"text-primary margin-auto\"\n        ></fa-icon>\n        <fa-icon\n          [icon]=\"['sds', 'arrow-down']\"\n          [sdsCollapse]=\"!isCollapsedContent\"\n          transform=\"shrink-6\"\n        ></fa-icon>\n      </fa-layers>\n      <span class=\"sds-feedback__title\">Feedback</span>\n    </button>\n    <div\n      id=\"collapseID\"\n      [sdsCollapse]=\"isCollapsedContent\"\n      class=\"sds-feedback__response\"\n    >\n      <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\n        <span class=\"sds-feedback__response-title\">One Question </span>\n        <span class=\"sds-feedback__response-title-thin\"> Survey</span>\n        <p class=\"sds-feedback__response-text\">\n          What changes or improvements would you suggest?\n        </p>\n        <input class=\"sds-feedback__input\" type=\"text\" />\n        <p class=\"text-right\">\n          <button class=\"usa-button usa-button--secondary\">Submit</button>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"usa-footer__primary-section\">\n    <div class=\"grid-container margin-x-0 mobile-lg:margin-x-auto padding-x-0 mobile-lg:padding-x-auto display-none tablet:display-block\">\n      <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap\">\n        <div class=\"tablet:grid-col-12\">\n          <nav class=\"usa-footer__nav margin-x-0 mobile-lg:margin-x-2 padding-x-0 mobile-lg:padding-x-2\">\n            <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap-4\">\n              <div class=\"mobile-lg:grid-col-6 desktop:grid-col-3\" *ngFor=\"let section of model.linkSections\">\n                <section class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\">\n                  <h4 class=\"usa-footer__primary-link\">{{ section.text }}</h4>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                      <ng-container\n                        [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \"\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\n                      ></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <nav class=\"sds-footer__nav--accordion display-block tablet:display-none\">\n      <sds-accordion-next [multi]=\"true\">\n        <sds-accordion-item *ngFor=\"let section of model.linkSections; let $index = index\">\n          <sds-accordion-title>{{ section.text }}</sds-accordion-title>\n          <sds-accordion-content>\n            <ul class=\"usa-list usa-list--unstyled padding-y-1\">\n              <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                <ng-container\n                  [ngTemplateOutlet]=\"\n                    navigationHelper.isLinkInternal(link)\n                      ? footerRouteLinkTemplate\n                      : navigationHelper.isLinkExternal(link)\n                      ? footerHREFLinkTemplate\n                      : footerEVENTLinkTemplate\n                  \"\n                  [ngTemplateOutletContext]=\"{ $implicit: link }\"\n                ></ng-container>\n              </li>\n            </ul>\n          </sds-accordion-content>\n        </sds-accordion-item>\n      </sds-accordion-next>\n    </nav>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-4 margin-bottom-4\">\n          <div class=\"sds-footer__logo\">\n            <a class=\"sds-footer__logo-link\" [attr.href]=\"model.footerLogo.href\">\n              <img\n                *ngIf=\"model.footerLogo\"\n                class=\"usa-footer__logo-img\"\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\"\n              />\n            </a>\n            <h3 class=\"sds-footer__logo-heading\">\n              {{model.footerLogo.agencyName}}\n            </h3>\n          </div>\n        </div>\n        <div class=\"sds-footer__note grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-8\" [innerHTML]=\"model.disclaimer\"></div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a class=\"usa-link\" [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a class=\"usa-link\" [href]=\"link.route\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>\n"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-6fdff3bd5093d5be97cd59b18c7f4570",
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
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the header</p>\n",
                    "line": 30,
                    "type": "HeaderModel"
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 25
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "line": 32
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 38,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 15,
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
                    "line": 16
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 20
                },
                {
                    "name": "openNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 14,
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
                    "line": 174
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 79,
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
                    "line": 106,
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2611,
                                "end": 2613,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2605,
                                "end": 2610,
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
                    "line": 130,
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3216,
                                "end": 3218,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3210,
                                "end": 3215,
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
                    "line": 50,
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
                    "line": 152,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3812,
                                "end": 3816,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 3806,
                                "end": 3811,
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
                    "line": 185
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170
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
                    "line": 43,
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1165,
                                "end": 1169,
                                "flags": 0,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1159,
                                "end": 1164,
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
                    "line": 68,
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1684,
                                "end": 1686,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1678,
                                "end": 1683,
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
                    "line": 161
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';\nimport { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';\nimport { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\n\n\n@Component({\n  selector: 'sds-header',\n  templateUrl: './header.component.html',\n  styleUrls: ['./header.component.scss']\n})\nexport class SdsHeaderComponent {\n\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\n  mobileNavActive = false;\n  /**\n  * Navigation helper\n  */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * determines if the top banner is shown\n   */\n  @Input() showTopBanner = true;\n\n  /**\n   * Model used for the different display portions of the header\n   */\n  @Input() model: HeaderModel;\n\n  @Input() topBannerDescription = '';\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n  /**\n   * Takes in a text string and removes all white space characters and returns the new string\n   * @param text\n   */\n  removeWhiteSpace(text: string) {\n    return text.replace(/ /g, '');\n  }\n\n  /**\n   * seeif any secondary link has a counter\n   */\n  hasCounter(): boolean {\n    let hasCounter = false;\n    if (this.model) {\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          if (item.hasCounter) {\n            hasCounter = true;\n          }\n        });\n      }\n    }\n    return hasCounter;\n  }\n\n  /**\n   * Deselects previous seletion\n   * @param id\n   */\n  select(id: string) {\n    this.deselect();\n    const item = this.find(id);\n    if (item) {\n      item.selected = true;\n    }\n  }\n\n  /**\n   * Deselects all the items in the header model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.home) {\n        this.model.home.selected = false;\n      }\n      if (this.model.navigationLinks) {\n        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\n          item.selected = false;\n          if (item.children) {\n            item.children.forEach(function (child: HeaderNavigationLink) {\n              child.selected = false;\n            });\n          }\n        });\n      }\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          item.selected = false;\n        });\n      }\n    }\n  }\n\n  /**\n   * Finds the navigation element by id in the header model\n   * @param id of the navigation item\n   */\n  find(id: string): Selectable {\n    let toReturn = null;\n    if (this.model) {\n      if (this.model.home) {\n        if (this.model.home.id === id) {\n          toReturn = this.model.home;\n        }\n      }\n      toReturn = this.findNavigationLinks(id, toReturn);\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          if (item.id === id) {\n            toReturn = item;\n          }\n        });\n      }\n    }\n    return toReturn;\n  }\n\n  /**\n   * Searchs the items in the navigation links\n   * @param id\n   */\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\n    if (this.model.navigationLinks) {\n      this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\n        if (item.id === id) {\n          toReturn = item;\n        }\n        if (item.children) {\n          item.children.forEach(function (child: HeaderNavigationLink) {\n            if (child.id === id) {\n              toReturn = child;\n            }\n          });\n        }\n      });\n    }\n    return toReturn;\n  }\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  // When the mobile nav is active, and the close box isn't visible,\n  // we know the user's viewport has been resized to be larger.\n  // Let's make the page state consistent by deactivating the mobile nav.\n  @HostListener('window:resize', ['$event'])\n  onBrowserResize(event) {\n    if (\n      this.mobileNavActive &&\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\n    ) {\n      this.mobileNavActive = false;\n    }\n  }\n\n  openMobileNav() {\n    this.mobileNavActive = true;\n  }\n\n  closeMobileNav() {\n    this.mobileNavActive = false;\n    // The mobile nav was just deactivated, and focus was on the close\n    // button, which is no longer visible. We don't want the focus to\n    // disappear into the void, so focus on the menu button if it's\n    // visible (this may have been what the user was just focused on,\n    // if they triggered the mobile nav by mistake).\n    this.openNavBtn.nativeElement.focus();\n  }\n\n  // The mobile nav was just activated, so focus on the close button,\n  navAnimationEnd() {\n    this.closeNavBtn.nativeElement.focus();\n  }\n\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./header.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<sds-top-banner *ngIf=\"showTopBanner\" \n[description]=\"topBannerDescription\"\n></sds-top-banner>\n<div\n  class=\"usa-overlay\"\n  [class.is-visible]=\"mobileNavActive\"\n  (click)=\"closeMobileNav()\"\n></div>\n<header class=\"usa-header usa-header--extended\">\n  <div class=\"usa-navbar\">\n    <div class=\"usa-logo\" id=\"extended-logo\">\n      <ng-container\n        [ngTemplateOutlet]=\"\n          navigationHelper.isLinkInternal(model.home)\n            ? homeLinkRouteTemplate\n            : homeLinkHREFTemplate\n        \"\n        [ngTemplateOutletContext]=\"{ $implicit: model.home }\"\n      ></ng-container>\n    </div>\n    <button #usaNavOpen class=\"usa-menu-btn\" (click)=\"openMobileNav()\">\n      <fa-layers [fixedWidth]=\"true\" size=\"3x\">\n        <fa-icon\n          [icon]=\"['fas', 'square']\"\n          [classes]=\"['text-primary']\"\n        ></fa-icon>\n        <fa-icon\n          [icon]=\"['sds', 'bars']\"\n          [classes]=\"['icon-bars']\"\n          transform=\"shrink-6\"\n        ></fa-icon>\n        <fa-layers-counter\n          *ngIf=\"hasCounter()\"\n          [classes]=\"['icon-layers-counter']\"\n        ></fa-layers-counter>\n      </fa-layers>\n      <span class=\"usa-sr-only\">Menu</span>\n    </button>\n  </div>\n  <nav\n    aria-label=\"Primary navigation\"\n    class=\"usa-nav\"\n    (keydown.esc)=\"closeMobileNav()\"\n    (animationend)=\"navAnimationEnd()\"\n    [class.is-visible]=\"mobileNavActive\"\n    [cdkTrapFocus]=\"mobileNavActive\"\n  >\n    <div class=\"usa-nav__inner\">\n      <button #usaNavClose class=\"usa-nav__close\" (click)=\"closeMobileNav()\">\n        <fa-layers [fixedWidth]=\"true\" size=\"lg\">\n          <fa-icon\n            [icon]=\"['fas', 'circle']\"\n            [inverse]=\"true\"\n            transform=\"grow-2\"\n          ></fa-icon>\n          <fa-icon [icon]=\"['fas', 'times']\" transform=\"shrink-6\"></fa-icon>\n        </fa-layers>\n        <span class=\"usa-sr-only\">Close</span>\n      </button>\n      <ul class=\"usa-nav__primary usa-accordion\">\n        <li\n          *ngFor=\"let link of model.navigationLinks\"\n          class=\"usa-nav__primary-item\"\n        >\n          <ng-container\n            [ngTemplateOutlet]=\"link.route ? linkTemplate : dropDownTemplate\"\n            [ngTemplateOutletContext]=\"{ $implicit: link }\"\n          ></ng-container>\n        </li>\n      </ul>\n      <div class=\"usa-nav__secondary\">\n        <ul class=\"usa-nav__secondary-links\">\n          <li\n            *ngFor=\"let link of model.secondaryLinks\"\n            class=\"usa-nav__secondary-item\"\n          >\n            <ng-container\n              [ngTemplateOutlet]=\"\n                navigationHelper.isLinkInternal(link)\n                  ? secondaryRouteLinkTemplate\n                  : navigationHelper.isLinkExternal(link)\n                  ? secondaryHREFLinkTemplate\n                  : secondaryEVENTLinkTemplate\n              \"\n              [ngTemplateOutletContext]=\"{ $implicit: link }\"\n            ></ng-container>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n<ng-template #homeLinkRouteTemplate let-home>\n  <a [routerLink]=\"home.route\" title=\"Home\" aria-label=\"Home\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #homeLinkHREFTemplate let-home>\n  <a [attr.href]=\"home.route\" title=\"Home\" aria-label=\"Home\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #secondaryRouteLinkTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    [routerLink]=\"[link.route]\"\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\n    >\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryHREFLinkTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    [attr.href]=\"[link.route]\"\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\n    >\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryEVENTLinkTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    (click)=\"linkClickEvent(link)\"\n    href=\"javascript:void(0)\"\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\n    >\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #iconLinkTemplate let-link>\n  <fa-layers [fixedWidth]=\"true\">\n    <fa-icon [icon]=\"[link.imageClassPrefix, link.imageClass]\"></fa-icon>\n    <fa-layers-counter\n      *ngIf=\"link.hasCounter\"\n      [classes]=\"['icon-layers-counter']\"\n    ></fa-layers-counter>\n  </fa-layers>\n  <span class=\"sds-nav__secondary-item-text\">{{ link.text }}</span>\n</ng-template>\n\n<ng-template #linkTemplate let-link>\n  <ng-container\n    [ngTemplateOutlet]=\"\n      navigationHelper.isLinkInternal(link)\n        ? linkRouteTemplate\n        : navigationHelper.isLinkExternal(link)\n        ? linkHREFTemplate\n        : linkEventTemplate\n    \"\n    [ngTemplateOutletContext]=\"{ $implicit: link }\"\n  ></ng-container>\n</ng-template>\n\n<ng-template #linkRouteTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [routerLink]=\"[link.route]\"\n    ><span>{{ link.text }}</span></a\n  >\n</ng-template>\n\n<ng-template #linkHREFTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [attr.href]=\"[link.route]\"\n    ><span>{{ link.text }}</span></a\n  >\n</ng-template>\n\n<ng-template #linkEventTemplate let-link>\n  <a\n    [attr.id]=\"link.id\"\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    href=\"javascript:void(0)\"\n    (click)=\"linkClickEvent(link)\"\n    ><span>{{ link.text }}</span></a\n  >\n</ng-template>\n\n<ng-template #dropDownTemplate let-link>\n  <button\n    [attr.id]=\"link.id\"\n    [attr.class]=\"\n      link.selected\n        ? 'usa-accordion__button usa-nav__link usa-current'\n        : 'usa-accordion__button usa-nav__link'\n    \"\n    aria-expanded=\"false\"\n    [attr.aria-controls]=\"removeWhiteSpace(link.text) + '-section'\"\n  >\n    <span>{{ link.text }}</span>\n  </button>\n  <ul\n    [attr.id]=\"removeWhiteSpace(link.text) + '-section'\"\n    class=\"usa-nav__submenu\"\n    hidden\n  >\n    <li *ngFor=\"let childLink of link.children\" class=\"usa-nav__submenu-item\">\n      <ng-container\n        [ngTemplateOutlet]=\"\n          navigationHelper.isLinkInternal(childLink)\n            ? dropDownRouteLinkTemplate\n            : navigationHelper.isLinkExternal(childLink)\n            ? dropDownHREFLinkTemplate\n            : dropDownEVENTLinkTemplate\n        \"\n        [ngTemplateOutletContext]=\"{ $implicit: childLink }\"\n      ></ng-container>\n    </li>\n  </ul>\n</ng-template>\n\n<ng-template #dropDownRouteLinkTemplate let-childLink>\n  <a [routerLink]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownHREFLinkTemplate let-childLink>\n  <a [attr.href]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownEVENTLinkTemplate let-childLink>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(childLink)\">{{\n    childLink.text\n  }}</a>\n</ng-template>\n"
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
            "id": "component-SearchListLayoutComponent-c1a25dfbfc7e13e3868296ddb886cc5f",
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
                    "line": 102
                },
                {
                    "name": "filterData",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 42,
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
                    "line": 112
                },
                {
                    "name": "page",
                    "defaultValue": "{\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 70
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 107,
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
                    "description": "<p>sort value</p>\n",
                    "line": 117,
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
                    "line": 97
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items</p>\n",
                    "line": 47
                }
            ],
            "methodsClass": [
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
                    "line": 32,
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
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 89,
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "updateContent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 122,
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
                    "line": 80,
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2041,
                                "end": 2047,
                                "flags": 0,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 2035,
                                "end": 2040,
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
            "sourceCode": "import { Component, Input, ContentChild, TemplateRef, Optional, OnChanges, SimpleChanges, OnInit } from '@angular/core';\nimport { BehaviorSubject } from \"rxjs\";\nimport { SearchListInterface, SearchListConfiguration } from './model/search-list-layout.model';\nimport { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';\n\n@Component({\n  selector: 'search-list-layout',\n  templateUrl: './search-list-layout.component.html',\n  styleUrls: ['./search-list-layout.component.scss']\n})\nexport class SearchListLayoutComponent implements OnChanges, OnInit {\n\n  /**\n  * Child Template to be used to display the data for each item in the list of items\n  */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n\n  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService) { }\n\n  /**\n   * Input service to be called when items change\n   */\n  @Input()\n  service: SearchListInterface;\n\n  /**\n   * configuration\n   */\n  @Input()\n  configuration: SearchListConfiguration;\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.configuration.currentValue) {\n      this.configuration = changes.configuration.currentValue;\n      this.sortField = this.configuration.defaultSortValue;\n      this.onSelectChange();\n    }\n  }\n  /**\n   * Filter information\n   */\n  private filterData: any;\n\n  /**\n   * Total number of items\n   */\n  totalItems: number;\n\n  ngOnInit() {\n    this.page.pageSize = this.configuration.pageSize;\n    this.sortField = this.configuration.defaultSortValue;\n    this.paginationChange.subscribe(\n      () => {\n        this.updateContent();\n      }\n    );\n    if (this.formlyUpdateComunicationService) {\n      this.formlyUpdateComunicationService.filterUpdate.subscribe(\n        (filter) => {\n          this.updateFilter(filter);\n        }\n      )\n    }\n  }\n\n\n  /**\n   * Default Page setttings\n   */\n  page = {\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0\n  }\n\n  /**\n   * updates the filter and set the page number to 1 and calls imported service\n   * @param filter\n   */\n  public updateFilter(filter: any) {\n    this.filterData = filter;\n    this.page.pageNumber = 1;\n    this.updateContent();\n  }\n\n  /**\n   * Sorty by change event\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.updateContent();\n  }\n\n  /**\n   * Id of the top pagination control\n   */\n  top = { id: 'topPagination' };\n\n  /**\n   * Id of the bottom pagination control\n   */\n  bottom = { id: 'bottomPagination' };\n\n  /**\n   * Page event listener\n   */\n  public paginationChange = new BehaviorSubject<object>(this.page);\n\n  /**\n   * List of items to be displayed\n   */\n  items = [];\n\n  /**\n   * sort value\n   */\n  public sortField = '';\n\n  /**\n   * calls service when updated\n   */\n  private updateContent() {\n    if (this.filterData) {\n      setTimeout(() => {\n        this.service.getData({ 'page': this.page, sortField: this.sortField, filter: this.filterData }).subscribe(\n          (result) => {\n            this.items = result.items;\n            this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);\n            this.totalItems = result.totalItems;\n          }\n        );\n      });\n    }\n  }\n}\n",
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
                "OnChanges",
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\n  <div class=\"grid-col\">\n    <div class=\"grid-row\">\n      <div class=\"grid-col-auto\">\n        <sds-pagination class=\"tablet:grid-col display-block margin-top-3 padding-top-3\" [paginationConfiguration]=\"top\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\" displayMode='results' [totalItems]=\"totalItems\"></sds-pagination>\n      </div>\n      <div class=\"grid-col-fill\"></div>\n      <div class=\"grid-col-auto float-right\">\n        <div class=\"margin-left-1\">\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\n            Sort by\n          </label>\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\" class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\n              {{ item.text }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"grid-row\">\n  <div class=\"grid-col-12\">\n    <sds-search-result-list [model]=\"items\">\n      <ng-template #resultContent let-item>\n        <ng-container *ngTemplateOutlet=\"resultContentTemplate,\n                context: { $implicit: item }\"></ng-container>\n      </ng-template>\n    </sds-search-result-list>\n    <sds-pagination *ngIf=\"items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\"></sds-pagination>\n  </div>\n</div>\n"
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
                    "elements": []
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