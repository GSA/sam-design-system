const COMPONENTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "DialogPosition",
            "id": "interface-DialogPosition-25804f8cb6d8bbb14cb999c34e6a15e6",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "interface",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\nimport {Direction} from '@angular/cdk/bidi';\nimport {ScrollStrategy} from '@angular/cdk/overlay';\n\n/** Valid ARIA roles for a dialog element. */\nexport type DialogRole = 'dialog' | 'alertdialog';\n\n/** Possible overrides for a dialog's position. */\nexport interface DialogPosition {\n  /** Override for the dialog's top position. */\n  top?: string;\n\n  /** Override for the dialog's bottom position. */\n  bottom?: string;\n\n  /** Override for the dialog's left position. */\n  left?: string;\n\n  /** Override for the dialog's right position. */\n  right?: string;\n}\n\n/**\n * Configuration for opening a modal dialog with the SdsDialog service.\n */\nexport class SdsDialogConfig<D = any> {\n\n  /**\n   * Where the attached component should live in Angular's *logical* component tree.\n   * This affects what is available for injection and the change detection order for the\n   * component instantiated inside of the dialog. This does not affect where the dialog\n   * content will be rendered.\n   */\n  viewContainerRef?: ViewContainerRef;\n\n  /** ID for the dialog. If omitted, a unique one will be generated. */\n  id?: string;\n\n  /** The ARIA role of the dialog element. */\n  role?: DialogRole = 'dialog';\n\n  /** Custom class for the overlay pane. */\n  panelClass?: string | string[] = '';\n\n  /** Whether the dialog has a backdrop. */\n  hasBackdrop? = true;\n\n  /** Custom class for the backdrop, */\n  backdropClass? = '';\n\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\n  disableClose? = false;\n\n  /** Width of the dialog. */\n  width? = '';\n\n  /** Height of the dialog. */\n  height? = '';\n\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\n  minWidth?: number | string;\n\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\n  minHeight?: number | string;\n\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\n  maxWidth?: number | string = '80vw';\n\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\n  maxHeight?: number | string;\n\n  /** Position overrides. */\n  position?: DialogPosition;\n\n  /** Data being injected into the child component. */\n  data?: D | null = null;\n\n  /** Layout direction for the dialog's content. */\n  direction?: Direction;\n\n  /** ID of the element that describes the dialog. */\n  ariaDescribedBy?: string | null = null;\n\n  /** Aria label to assign to the dialog element */\n  ariaLabel?: string | null = null;\n\n  /** Whether the dialog should focus the first focusable element on open. */\n  autoFocus? = true;\n\n  /**\n   * Whether the dialog should restore focus to the\n   * previously-focused element, after it's closed.\n   */\n  restoreFocus? = true;\n\n  /** Scroll strategy to be used for the dialog. */\n  scrollStrategy?: ScrollStrategy;\n\n  /**\n   * Whether the dialog should close when the user goes backwards/forwards in history.\n   * Note that this usually doesn't include clicking on links (unless the user is using\n   * the `HashLocationStrategy`).\n   */\n  closeOnNavigation? = true;\n\n  /**\n   * Wheter the dialog its an alert\n   */\n  alert?: 'warning' | 'info' | 'error';\n}\n",
            "properties": [
                {
                    "name": "bottom",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s bottom position. </p>\n",
                    "line": 14
                },
                {
                    "name": "left",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s left position. </p>\n",
                    "line": 17
                },
                {
                    "name": "right",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s right position. </p>\n",
                    "line": 20
                },
                {
                    "name": "top",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s top position. </p>\n",
                    "line": 11
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Possible overrides for a dialog&#39;s position. </p>\n",
            "methods": []
        },
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-8351bbc206ff7dcca88f5b1b636b3881",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "interface",
            "sourceCode": "import {\n  INavigationLink,\n  NavigationMode\n} from '../../common-navigation/common-navigation-model';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n}\n",
            "properties": [
                {
                    "name": "imageAltText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 65
                },
                {
                    "name": "imageSourcePath",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 59
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 53
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "HeaderModel",
            "id": "interface-HeaderModel-ee7a838bc2d256032384e3e7e9c96aff",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
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
            "name": "INavigationLink",
            "id": "interface-INavigationLink-77ea232dd64ab74fe9e2f7c81b3b5ff4",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n}\n\nexport enum NavigationMode {\n    INTERNAL, EXTERNAL, EVENT, LABEL\n}\n\nexport interface Selectable {\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 15
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 10
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "InitPxVideoConfig",
            "id": "interface-InitPxVideoConfig-7f06797e3bbc19532544d7018135f1ad",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "type": "interface",
            "sourceCode": "import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\nimport { VPInterface } from './video-player';\n\ninterface InitPxVideoConfig {\n  \"videoId\": string,\n  \"captionsOnDefault\": boolean,\n  \"seekInterval\": number,\n  \"videoTitle\": string,\n  \"debug\": boolean\n}\n\ndeclare const GLOBAL_STRINGS: any;\n\ndeclare class InitPxVideo {\n  constructor(config: InitPxVideoConfig);\n}\n\n@Component({\n  selector: 'sds-video-player',\n  templateUrl: './video-player.component.html',\n  styleUrls: ['./css/px-video.css'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class SdsVideoPlayerComponent implements AfterViewInit {\n  @Input() VPConfiguration: VPInterface;\n  private config: InitPxVideoConfig;\n\n  ngAfterViewInit() {\n    this.config = {\n      videoId: this.VPConfiguration.id,\n      captionsOnDefault: false,\n      seekInterval: this.VPConfiguration.seekInterval,\n      videoTitle: 'Video Player',\n      debug: this.VPConfiguration.debug\n    }\n\n    new InitPxVideo(this.config);\n  }\n\n  constructor() {\n}\n\n}\n",
            "properties": [
                {
                    "name": "captionsOnDefault",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "videoId",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "videoTitle",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 10
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsAccordionBase",
            "id": "interface-SdsAccordionBase-2b6e6aeafd6e6801eb33c71834068be0",
            "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
            "type": "interface",
            "sourceCode": "import {InjectionToken} from '@angular/core';\nimport {CdkAccordion} from '@angular/cdk/accordion';\n\n/** Accordion's display modes. */\nexport type SdsAccordionDisplayMode = 'default' | 'basic';\n\n/**\n * Base interface for a `SdsAccordion`.\n */\nexport interface SdsAccordionBase extends CdkAccordion {\n  /** Display mode used for all accordion items in the accordion. */\n  displayMode: SdsAccordionDisplayMode;\n\n  /** Handles keyboard events coming in from the item headers. */\n  _handleHeaderKeydown: (event: KeyboardEvent) => void;\n\n  /** Handles focus events on the item headers. */\n  _handleHeaderFocus: (header: any) => void;\n}\n\n\n/**\n * Token used to provide a `SdsAccordion` to `SdsAccordionItem`.\n * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.\n */\nexport const SDS_ACCORDION = new InjectionToken<SdsAccordionBase>('SDS_ACCORDION');\n",
            "properties": [
                {
                    "name": "_handleHeaderFocus",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles focus events on the item headers. </p>\n",
                    "line": 19
                },
                {
                    "name": "_handleHeaderKeydown",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "line": 16
                },
                {
                    "name": "displayMode",
                    "type": "SdsAccordionDisplayMode",
                    "optional": false,
                    "description": "<p>Display mode used for all accordion items in the accordion. </p>\n",
                    "line": 13
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Base interface for a <code>SdsAccordion</code>.</p>\n",
            "methods": [],
            "extends": "CdkAccordion"
        },
        {
            "name": "SDSAutocompleteServiceInterface",
            "id": "interface-SDSAutocompleteServiceInterface-789c2f09fc917454d7d68b1fa43ff91c",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getDataByText",
                    "args": [
                        {
                            "name": "currentItems",
                            "type": "number"
                        },
                        {
                            "name": "searchValue",
                            "type": "string",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SDSHiercarchicalServiceResult>",
                    "typeParameters": [],
                    "line": 7,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": "currentItems",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": {
                                "pos": 116,
                                "end": 127,
                                "flags": 0,
                                "escapedText": "searchValue"
                            },
                            "type": "string",
                            "optional": true,
                            "tagName": {
                                "pos": 110,
                                "end": 115,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        },
        {
            "name": "SDSHiercarchicalServiceResult",
            "id": "interface-SDSHiercarchicalServiceResult-789c2f09fc917454d7d68b1fa43ff91c",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "",
                    "line": 14
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 19
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsMenuInterface",
            "id": "interface-SdsMenuInterface-4050c302487b07002ba93aa66872433c",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  Component,\n  ElementRef,\n  EventEmitter,\n  InjectionToken,\n  Input,\n  OnDestroy,\n  Output,\n  TemplateRef,\n  ViewChild,\n  ViewEncapsulation,\n  OnInit\n} from '@angular/core';\nimport { AnimationEvent } from '@angular/animations';\nimport {\n  ESCAPE,\n  DOWN_ARROW,\n  UP_ARROW,\n  HOME,\n  END,\n  hasModifierKey\n} from '@angular/cdk/keycodes';\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { Subscription } from 'rxjs';\nimport { sdsMenuAnimations } from './menu-animations';\nimport { SdsMenuItemComponent } from './menu-item.component';\n\n/** Menu Positions */\nexport type MenuPositionX = 'before' | 'after';\nexport type MenuPositionY = 'above' | 'below';\n\n/** Menu available sizes */\n// sm = 'small'\nexport type MenuSizes = 'sm';\n\n/** Injection token used to provide the parent menu to menu items. */\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n);\n\n/** Menu Interface */\nexport interface SdsMenuInterface<T = any> {\n  xPosition: MenuPositionX;\n  yPosition: MenuPositionY;\n  overlapTrigger: boolean;\n  templateRef: TemplateRef<any>;\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\n  parentMenu?: SdsMenuInterface;\n  size?: MenuSizes;\n  focusFirstItem: (origin?: FocusOrigin) => void;\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\n  addItem?: (item: T) => void;\n  insertItem?: (item: T, index: number) => void;\n  removeItem?: (item: T) => void;\n}\n\n@Component({\n  selector: 'sds-menu',\n  exportAs: 'sdsMenu',\n  templateUrl: 'menu.component.html',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  animations: [sdsMenuAnimations.transformMenu],\n  providers: [\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\n  ]\n})\nexport class SdsMenuComponent\n  implements\n    OnInit,\n    AfterContentInit,\n    OnDestroy,\n    SdsMenuInterface<SdsMenuItemComponent> {\n  /** After | Before the menu triger element */\n  private _xPosition: MenuPositionX = 'after';\n\n  /** Above | Below the menu triger element */\n  private _yPosition: MenuPositionY = 'below';\n\n  /** Manage browser focus */\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\n\n  /** Menu items inside the current menu. */\n  private _items: SdsMenuItemComponent[] = [];\n\n  /** Subscription to tab events on the menu panel */\n  private _tabSubscription = Subscription.EMPTY;\n\n  /** Stores <sds-menu> classes */\n  private _previousPanelClass: string;\n\n  /** Config object to be passed into the menu's ngClass */\n  _classList: { [key: string]: boolean } = {};\n\n  /** Current state of the panel animation. */\n  _panelAnimationState: 'void' | 'enter' = 'void';\n\n  /** Grab the component template */\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\n\n  /**\n   * Size of menu component.\n   * Affects the font-size of the menu items and\n   * the size of the close button in the menu header\n   */\n  @Input() size: MenuSizes;\n\n  /** Position of the menu in the X axis. */\n  @Input()\n  get xPosition(): MenuPositionX {\n    return this._xPosition;\n  }\n  set xPosition(value: MenuPositionX) {\n    this._xPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Position of the menu in the Y axis. */\n  @Input()\n  get yPosition(): MenuPositionY {\n    return this._yPosition;\n  }\n  set yPosition(value: MenuPositionY) {\n    this._yPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Whether menu panel overlaps trigger element */\n  @Input()\n  get overlapTrigger(): boolean {\n    return this._overlapTrigger;\n  }\n  set overlapTrigger(value: boolean) {\n    this._overlapTrigger = coerceBooleanProperty(value);\n  }\n  private _overlapTrigger = false;\n\n  /** Transfer classes from the sds-menu to the overlay container */\n  @Input('class')\n  set panelClass(classes: string) {\n    const previousPanelClass = this._previousPanelClass;\n    // Remove previous classes from current set of classes\n    if (previousPanelClass && previousPanelClass.length) {\n      previousPanelClass.split(' ').forEach((className: string) => {\n        this._classList[className] = false;\n      });\n    }\n\n    this._previousPanelClass = classes;\n\n    // Adds new classes to current set of classes\n    if (classes && classes.length) {\n      classes.split(' ').forEach((className: string) => {\n        this._classList[className] = true;\n      });\n\n      // Remove all classes from <sds-menu>\n      this._elementRef.nativeElement.className = '';\n    }\n  }\n\n  /** Event emitted when the menu is closed. */\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\n\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\n\n  ngOnInit() {\n    this.setPositionClasses();\n  }\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\n      this._items\n    ).withWrap();\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\n      this.closed.emit('tab')\n    );\n  }\n\n  ngOnDestroy() {\n    this._tabSubscription.unsubscribe();\n    this.closed.complete();\n  }\n\n  /** Focus the first item in the menu */\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\n  }\n\n  /** Adds classes to the menu panel based on its position */\n  setPositionClasses(\n    posX: MenuPositionX = this.xPosition,\n    posY: MenuPositionY = this.yPosition\n  ) {\n    const classes = this._classList;\n    classes['sds-menu-before'] = posX === 'before';\n    classes['sds-menu-after'] = posX === 'after';\n    classes['sds-menu-above'] = posY === 'above';\n    classes['sds-menu-below'] = posY === 'below';\n  }\n\n  /** Adds a menu item with the menu. */\n  addItem(item: SdsMenuItemComponent) {\n    if (this._items.indexOf(item) === -1) {\n      this._items.push(item);\n    }\n  }\n\n  /** Inserts a menu item at an index */\n  insertItem(item: SdsMenuItemComponent, index: number) {\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\n      this._items.splice(index, 0, item);\n    }\n  }\n\n  /** Removes an item from the menu. */\n  removeItem(item: SdsMenuItemComponent) {\n    const index = this._items.indexOf(item);\n    if (this._items.indexOf(item) > -1) {\n      this._items.splice(index, 1);\n    }\n  }\n\n  /** Handle a keyboard event from the menu */\n  _handleKeydown(event: KeyboardEvent) {\n    // tslint:disable-next-line: deprecation\n    const keyCode = event.keyCode;\n    const manager = this._keyManager;\n\n    switch (keyCode) {\n      case ESCAPE:\n        this.closed.emit('keydown');\n        break;\n      case HOME:\n      case END:\n        if (!hasModifierKey(event)) {\n          keyCode === HOME\n            ? manager.setFirstItemActive()\n            : manager.setLastItemActive();\n          event.preventDefault();\n        }\n        break;\n      default:\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\n          manager.setFocusOrigin('keyboard');\n        }\n\n        manager.onKeydown(event);\n    }\n  }\n\n  /** Starts the enter animation. */\n  _startAnimation() {\n    this._panelAnimationState = 'enter';\n  }\n\n  /** Callback that is invoked when the panel animation completes. */\n  _onAnimationDone(event: AnimationEvent) {}\n\n  /** Resets the panel animation to its initial state. */\n  _resetAnimation() {\n    this._panelAnimationState = 'void';\n  }\n\n  _onAnimationStart(event: AnimationEvent) {\n    // Scroll the content element to the top as soon as the animation starts.\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\n      event.element.scrollTop = 0;\n    }\n  }\n}\n",
            "properties": [
                {
                    "name": "addItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 55
                },
                {
                    "name": "closed",
                    "type": "EventEmitter<void | \"click\" | \"keydown\" | \"tab\">",
                    "optional": false,
                    "description": "",
                    "line": 50
                },
                {
                    "name": "focusFirstItem",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 53
                },
                {
                    "name": "insertItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 56
                },
                {
                    "name": "overlapTrigger",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 48
                },
                {
                    "name": "parentMenu",
                    "type": "SdsMenuInterface",
                    "optional": true,
                    "description": "",
                    "line": 51
                },
                {
                    "name": "removeItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 57
                },
                {
                    "name": "setPositionClasses",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 54
                },
                {
                    "name": "size",
                    "type": "MenuSizes",
                    "optional": true,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 49
                },
                {
                    "name": "xPosition",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "",
                    "line": 46
                },
                {
                    "name": "yPosition",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "",
                    "line": 47
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Menu Interface </p>\n",
            "methods": []
        },
        {
            "name": "SdsTruncateTextData",
            "id": "interface-SdsTruncateTextData-8a0fa5c4ffa157b927aac5b53d6e5e46",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "type": "interface",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\n\nexport interface SdsTruncateTextData {\n  text: string;\n}\n\n@Component({\n  selector: 'sds-truncated-text-container',\n  template: `\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n  `,\n  animations: [sdsTruncateTextAnimations.container]\n})\nexport class SdsTruncatedTextContainerComponent {\n  @HostBinding('@container') _animationState = 'void';\n\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\n\n  /** Starts the animation. */\n  startAnimation() {\n    this._animationState = 'enter';\n  }\n\n  /** Resets the animation to its initial state. */\n  resetAnimation() {\n    this._animationState = 'void';\n  }\n\n  /** Intentionally left empty to trigger change detection */\n  @HostListener('@container.done')\n  _onAnimationDone() {}\n}\n",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "Selectable",
            "id": "interface-Selectable-77ea232dd64ab74fe9e2f7c81b3b5ff4",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n}\n\nexport enum NavigationMode {\n    INTERNAL, EXTERNAL, EVENT, LABEL\n}\n\nexport interface Selectable {\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 26
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 31
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "VPInterface",
            "id": "interface-VPInterface-686f0a82da8d932f74857b3369247fe4",
            "file": "libs/packages/components/src/lib/video-player/video-player.ts",
            "type": "interface",
            "sourceCode": "export interface VPInterface{\n  sourceWebm: string;\n  sourceMp4: string;\n  height: string;\n  width: string;\n \tcaption: string;\n  poster: string;\n  id: string;\n \tseekInterval: number;\n \tdebug: boolean;\n  preload: string;\n}\n",
            "properties": [
                {
                    "name": "caption",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "height",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "poster",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "preload",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "sourceMp4",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "sourceWebm",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                },
                {
                    "name": "width",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        }
    ],
    "injectables": [
        {
            "name": "SdsDialogService",
            "id": "injectable-SdsDialogService-6429059d9697a36bc859ee95c621f68e",
            "file": "libs/packages/components/src/lib/dialog/dialog.ts",
            "properties": [
                {
                    "name": "_afterAllClosedAtThisLevel",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpenedAtThisLevel",
                    "defaultValue": "new Subject<SdsDialogRef<any>>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 65,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_ariaHiddenElements",
                    "defaultValue": "new Map<Element, string|null>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 66,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openDialogsAtThisLevel",
                    "defaultValue": "[]",
                    "type": "SdsDialogRef<any>[]",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_scrollStrategy",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 67,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "afterAllClosed",
                    "defaultValue": "defer<void>(() => this.openDialogs.length ?\n      this._afterAllClosed :\n      this._afterAllClosed.pipe(startWith(undefined)))",
                    "type": "Observable<void>",
                    "optional": false,
                    "description": "<p>Stream that emits when all open dialog have finished closing.\nWill emit on subscribe if there are no open dialogs to begin with.</p>\n",
                    "line": 88,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_attachDialogContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogContainerComponent",
                    "typeParameters": [],
                    "line": 225,
                    "description": "<p>Attaches an SdsDialogContainerComponent to a dialog&#39;s already-created overlay.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 7587,
                                "end": 7594,
                                "flags": 0,
                                "escapedText": "overlay"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 7581,
                                "end": 7586,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog&#39;s underlying overlay.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 7653,
                                "end": 7659,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 7647,
                                "end": 7652,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 7692,
                                "end": 7699,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to a ComponentRef for the attached container.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_attachDialogContent",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "overlayRef",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "R"
                    ],
                    "line": 246,
                    "description": "<p>Attaches the user-provided component to the already-created SdsDialogContainerComponent.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 8465,
                                "end": 8487,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 8459,
                                "end": 8464,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The type of component being loaded into the dialog,\nor a TemplateRef to instantiate as the content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8609,
                                "end": 8624,
                                "flags": 0,
                                "escapedText": "dialogContainer"
                            },
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "pos": 8603,
                                "end": 8608,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the wrapping SdsDialogContainerComponent.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8692,
                                "end": 8702,
                                "flags": 0,
                                "escapedText": "overlayRef"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 8686,
                                "end": 8691,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the overlay in which the dialog resides.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8769,
                                "end": 8775,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 8763,
                                "end": 8768,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 8808,
                                "end": 8815,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the SdsDialogRef that should be returned to the user.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_closeDialogs",
                    "args": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 373,
                    "description": "<p>Closes all of the dialogs in an array. </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createInjector",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        },
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "PortalInjector",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 292,
                    "description": "<p>Creates a custom injector to be used inside the dialog. This allows a component loaded inside\nof a dialog to close itself and, optionally, to return a value.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 10449,
                                "end": 10455,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 10443,
                                "end": 10448,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config object that is used to construct the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 10520,
                                "end": 10529,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<T>",
                            "tagName": {
                                "pos": 10514,
                                "end": 10519,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog.</p>\n"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "tagName": {
                                "pos": 10640,
                                "end": 10647,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The custom injector that can be used inside the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 188,
                    "description": "<p>Creates the overlay into which the dialog will be loaded.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6307,
                                "end": 6313,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6301,
                                "end": 6306,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6346,
                                "end": 6353,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the OverlayRef for the created overlay.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [
                        {
                            "name": "dialogConfig",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 198,
                    "description": "<p>Creates an overlay config from a dialog config.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6669,
                                "end": 6681,
                                "flags": 0,
                                "escapedText": "dialogConfig"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6663,
                                "end": 6668,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6714,
                                "end": 6721,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The overlay configuration.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_hideNonDialogContentFromAssistiveTechnology",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 350,
                    "description": "<p>Hides all of the content that isn&#39;t an overlay from assistive technology.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_removeOpenDialog",
                    "args": [
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 324,
                    "description": "<p>Removes a dialog from the array of open dialogs.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 11919,
                                "end": 11928,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<any>",
                            "tagName": {
                                "pos": 11913,
                                "end": 11918,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Dialog to be removed.</p>\n"
                        }
                    ]
                },
                {
                    "name": "closeAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Closes all of the currently-open dialogs.</p>\n"
                },
                {
                    "name": "getDialogById",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef | undefined",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Finds an open dialog by its id.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 5773,
                                "end": 5775,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 5767,
                                "end": 5772,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>ID to use when looking up the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 175
                },
                {
                    "name": "open",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig<D>",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "D",
                        "R"
                    ],
                    "line": 110,
                    "description": "<p>Opens a modal dialog containing the given component.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3690,
                                "end": 3712,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 3684,
                                "end": 3689,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Type of the component to load into the dialog,\nor a TemplateRef to instantiate as the dialog content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 3836,
                                "end": 3842,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig<D>",
                            "optional": true,
                            "tagName": {
                                "pos": 3830,
                                "end": 3835,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Extra configuration options.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 3878,
                                "end": 3885,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>Reference to the newly-opened dialog.</p>\n"
                        }
                    ]
                }
            ],
            "description": "<p>Service to open modal dialogs.</p>\n",
            "sourceCode": "import {Directionality} from '@angular/cdk/bidi';\nimport {\n  Overlay,\n  OverlayConfig,\n  OverlayContainer,\n  OverlayRef,\n  ScrollStrategy,\n} from '@angular/cdk/overlay';\nimport {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';\nimport {Location} from '@angular/common';\nimport {\n  Inject,\n  Injectable,\n  InjectionToken,\n  Injector,\n  OnDestroy,\n  Optional,\n  SkipSelf,\n  TemplateRef,\n} from '@angular/core';\nimport {defer, Observable, of as observableOf, Subject} from 'rxjs';\nimport {startWith} from 'rxjs/operators';\nimport {SdsDialogConfig} from './dialog-config';\nimport {SdsDialogContainerComponent} from './dialog-container.component';\nimport {SdsDialogRef} from './dialog-ref';\n\n\n/** Injection token that can be used to access the data that was passed in to a dialog. */\nexport const SDS_DIALOG_DATA = new InjectionToken<any>('SdsDialogData');\n\n/** Injection token that can be used to specify default dialog options. */\nexport const SDS_DIALOG_DEFAULT_OPTIONS =\n    new InjectionToken<SdsDialogConfig>('sds-dialog-default-options');\n\n/** Injection token that determines the scroll handling while the dialog is open. */\nexport const SDS_DIALOG_SCROLL_STRATEGY =\n    new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy');\n\n/** @docs-private */\nexport function SDS_DIALOG_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {\n  return () => overlay.scrollStrategies.block();\n}\n\n/** @docs-private */\nexport function SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):\n  () => ScrollStrategy {\n  return () => overlay.scrollStrategies.block();\n}\n\n/** @docs-private */\nexport const SDS_DIALOG_SCROLL_STRATEGY_PROVIDER = {\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n};\n\n\n/**\n * Service to open modal dialogs.\n */\n@Injectable()\nexport class SdsDialogService implements OnDestroy {\n  private _openDialogsAtThisLevel: SdsDialogRef<any>[] = [];\n  private readonly _afterAllClosedAtThisLevel = new Subject<void>();\n  private readonly _afterOpenedAtThisLevel = new Subject<SdsDialogRef<any>>();\n  private _ariaHiddenElements = new Map<Element, string|null>();\n  private _scrollStrategy: () => ScrollStrategy;\n\n  /** Keeps track of the currently-open dialogs. */\n  get openDialogs(): SdsDialogRef<any>[] {\n    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;\n  }\n\n  /** Stream that emits when a dialog has been opened. */\n  get afterOpened(): Subject<SdsDialogRef<any>> {\n    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;\n  }\n\n  get _afterAllClosed(): Subject<void> {\n    const parent = this._parentDialog;\n    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;\n  }\n\n  /**\n   * Stream that emits when all open dialog have finished closing.\n   * Will emit on subscribe if there are no open dialogs to begin with.\n   */\n  readonly afterAllClosed: Observable<void> = defer<void>(() => this.openDialogs.length ?\n      this._afterAllClosed :\n      this._afterAllClosed.pipe(startWith(undefined)));\n\n  constructor(\n      private _overlay: Overlay,\n      private _injector: Injector,\n      @Optional() private _location: Location,\n      @Optional() @Inject(SDS_DIALOG_DEFAULT_OPTIONS) private _defaultOptions: SdsDialogConfig,\n      @Inject(SDS_DIALOG_SCROLL_STRATEGY) scrollStrategy: any,\n      @Optional() @SkipSelf() private _parentDialog: SdsDialogService,\n      private _overlayContainer: OverlayContainer) {\n    this._scrollStrategy = scrollStrategy;\n  }\n\n  /**\n   * Opens a modal dialog containing the given component.\n   * @param componentOrTemplateRef Type of the component to load into the dialog,\n   *     or a TemplateRef to instantiate as the dialog content.\n   * @param config Extra configuration options.\n   * @returns Reference to the newly-opened dialog.\n   */\n  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\n          config?: SdsDialogConfig<D>): SdsDialogRef<T, R> {\n\n    // Convenience widths names: small | medium | large\n    // added to help with standardization\n    if (config && config.width) {\n      switch (config.width) {\n        case 'small': {\n          config.width = '370px';\n          break;\n        }\n        case 'medium': {\n          config.width = '730px';\n          break;\n        }\n        case 'large': {\n          config.width = '960px';\n          break;\n        }\n        default: {\n          break;\n        }\n      }\n    }\n\n    config = _applyConfigDefaults(config, this._defaultOptions || new SdsDialogConfig());\n\n    if (config.id && this.getDialogById(config.id)) {\n      throw Error(`Dialog with id \"${config.id}\" exists already. The dialog id must be unique.`);\n    }\n\n    const overlayRef = this._createOverlay(config);\n    const dialogContainer = this._attachDialogContainer(overlayRef, config);\n    const dialogRef = this._attachDialogContent<T, R>(componentOrTemplateRef,\n                                                      dialogContainer,\n                                                      overlayRef,\n                                                      config);\n\n    // If this is the first dialog that we're opening, hide all the non-overlay content.\n    if (!this.openDialogs.length) {\n      this._hideNonDialogContentFromAssistiveTechnology();\n    }\n\n    this.openDialogs.push(dialogRef);\n    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));\n    this.afterOpened.next(dialogRef);\n\n    return dialogRef;\n  }\n\n  /**\n   * Closes all of the currently-open dialogs.\n   */\n  closeAll(): void {\n    this._closeDialogs(this.openDialogs);\n  }\n\n  /**\n   * Finds an open dialog by its id.\n   * @param id ID to use when looking up the dialog.\n   */\n  getDialogById(id: string): SdsDialogRef<any> | undefined {\n    return this.openDialogs.find(dialog => dialog.id === id);\n  }\n\n  ngOnDestroy() {\n    // Only close the dialogs at this level on destroy\n    // since the parent service may still be active.\n    this._closeDialogs(this._openDialogsAtThisLevel);\n    this._afterAllClosedAtThisLevel.complete();\n    this._afterOpenedAtThisLevel.complete();\n  }\n\n  /**\n   * Creates the overlay into which the dialog will be loaded.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to the OverlayRef for the created overlay.\n   */\n  private _createOverlay(config: SdsDialogConfig): OverlayRef {\n    const overlayConfig = this._getOverlayConfig(config);\n    return this._overlay.create(overlayConfig);\n  }\n\n  /**\n   * Creates an overlay config from a dialog config.\n   * @param dialogConfig The dialog configuration.\n   * @returns The overlay configuration.\n   */\n  private _getOverlayConfig(dialogConfig: SdsDialogConfig): OverlayConfig {\n    const state = new OverlayConfig({\n      positionStrategy: this._overlay.position().global(),\n      scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),\n      panelClass: dialogConfig.panelClass,\n      hasBackdrop: dialogConfig.hasBackdrop,\n      direction: dialogConfig.direction,\n      minWidth: dialogConfig.minWidth,\n      minHeight: dialogConfig.minHeight,\n      maxWidth: dialogConfig.maxWidth,\n      maxHeight: dialogConfig.maxHeight,\n      disposeOnNavigation: dialogConfig.closeOnNavigation\n    });\n\n    if (dialogConfig.backdropClass) {\n      state.backdropClass = dialogConfig.backdropClass;\n    }\n\n    return state;\n  }\n\n  /**\n   * Attaches an SdsDialogContainerComponent to a dialog's already-created overlay.\n   * @param overlay Reference to the dialog's underlying overlay.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to a ComponentRef for the attached container.\n   */\n  private _attachDialogContainer(overlay: OverlayRef, config: SdsDialogConfig): SdsDialogContainerComponent {\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\n    const injector = new PortalInjector(userInjector || this._injector, new WeakMap([\n      [SdsDialogConfig, config]\n    ]));\n    const containerPortal =\n        new ComponentPortal(SdsDialogContainerComponent, config.viewContainerRef, injector);\n    const containerRef = overlay.attach<SdsDialogContainerComponent>(containerPortal);\n\n    return containerRef.instance;\n  }\n\n  /**\n   * Attaches the user-provided component to the already-created SdsDialogContainerComponent.\n   * @param componentOrTemplateRef The type of component being loaded into the dialog,\n   *     or a TemplateRef to instantiate as the content.\n   * @param dialogContainer Reference to the wrapping SdsDialogContainerComponent.\n   * @param overlayRef Reference to the overlay in which the dialog resides.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to the SdsDialogRef that should be returned to the user.\n   */\n  private _attachDialogContent<T, R>(\n      componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\n      dialogContainer: SdsDialogContainerComponent,\n      overlayRef: OverlayRef,\n      config: SdsDialogConfig): SdsDialogRef<T, R> {\n\n    // Create a reference to the dialog we're creating in order to give the user a handle\n    // to modify and close it.\n    const dialogRef =\n        new SdsDialogRef<T, R>(overlayRef, dialogContainer, this._location, config.id);\n\n    // When the dialog backdrop is clicked, we want to close it.\n    if (config.hasBackdrop) {\n      overlayRef.backdropClick().subscribe(() => {\n        if (!dialogRef.disableClose) {\n          dialogRef.close();\n        }\n      });\n    }\n\n    if (componentOrTemplateRef instanceof TemplateRef) {\n      dialogContainer.attachTemplatePortal(\n        new TemplatePortal<T>(componentOrTemplateRef, null!,\n          <any>{ $implicit: config.data, dialogRef }));\n    } else {\n      const injector = this._createInjector<T>(config, dialogRef, dialogContainer);\n      const contentRef = dialogContainer.attachComponentPortal<T>(\n          new ComponentPortal(componentOrTemplateRef, undefined, injector));\n      dialogRef.componentInstance = contentRef.instance;\n    }\n\n    dialogRef\n      .updateSize(config.width, config.height)\n      .updatePosition(config.position);\n\n    return dialogRef;\n  }\n\n  /**\n   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside\n   * of a dialog to close itself and, optionally, to return a value.\n   * @param config Config object that is used to construct the dialog.\n   * @param dialogRef Reference to the dialog.\n   * @param container Dialog container element that wraps all of the contents.\n   * @returns The custom injector that can be used inside the dialog.\n   */\n  private _createInjector<T>(\n      config: SdsDialogConfig,\n      dialogRef: SdsDialogRef<T>,\n      dialogContainer: SdsDialogContainerComponent): PortalInjector {\n\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\n\n    // The SdsDialogContainerComponent is injected in the portal as the SdsDialogContainerComponent and the dialog's\n    // content are created out of the same ViewContainerRef and as such, are siblings for injector\n    // purposes. To allow the hierarchy that is expected, the SdsDialogContainerComponent is explicitly\n    // added to the injection tokens.\n    const injectionTokens = new WeakMap<any, any>([\n      [SdsDialogContainerComponent, dialogContainer],\n      [SDS_DIALOG_DATA, config.data],\n      [SdsDialogRef, dialogRef]\n    ]);\n\n    if (config.direction &&\n        (!userInjector || !userInjector.get<Directionality | null>(Directionality, null))) {\n      injectionTokens.set(Directionality, {\n        value: config.direction,\n        change: observableOf()\n      });\n    }\n\n    return new PortalInjector(userInjector || this._injector, injectionTokens);\n  }\n\n  /**\n   * Removes a dialog from the array of open dialogs.\n   * @param dialogRef Dialog to be removed.\n   */\n  private _removeOpenDialog(dialogRef: SdsDialogRef<any>) {\n    const index = this.openDialogs.indexOf(dialogRef);\n\n    if (index > -1) {\n      this.openDialogs.splice(index, 1);\n\n      // If all the dialogs were closed, remove/restore the `aria-hidden`\n      // to a the siblings and emit to the `afterAllClosed` stream.\n      if (!this.openDialogs.length) {\n        this._ariaHiddenElements.forEach((previousValue, element) => {\n          if (previousValue) {\n            element.setAttribute('aria-hidden', previousValue);\n          } else {\n            element.removeAttribute('aria-hidden');\n          }\n        });\n\n        this._ariaHiddenElements.clear();\n        this._afterAllClosed.next();\n      }\n    }\n  }\n\n  /**\n   * Hides all of the content that isn't an overlay from assistive technology.\n   */\n  private _hideNonDialogContentFromAssistiveTechnology() {\n    const overlayContainer = this._overlayContainer.getContainerElement();\n\n    // Ensure that the overlay container is attached to the DOM.\n    if (overlayContainer.parentElement) {\n      const siblings = overlayContainer.parentElement.children;\n\n      for (let i = siblings.length - 1; i > -1; i--) {\n        const sibling = siblings[i];\n\n        if (sibling !== overlayContainer &&\n          sibling.nodeName !== 'SCRIPT' &&\n          sibling.nodeName !== 'STYLE' &&\n          !sibling.hasAttribute('aria-live')) {\n\n          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));\n          sibling.setAttribute('aria-hidden', 'true');\n        }\n      }\n    }\n  }\n\n  /** Closes all of the dialogs in an array. */\n  private _closeDialogs(dialogs: SdsDialogRef<any>[]) {\n    let i = dialogs.length;\n\n    while (i--) {\n      // The `_openDialogs` property isn't updated after close until the rxjs subscription\n      // runs on the next microtask, in addition to modifying the array as we're going\n      // through it. We loop through all of them and call close without assuming that\n      // they'll be removed from the list instantaneously.\n      dialogs[i].close();\n    }\n  }\n\n}\n\n/**\n * Applies default options to the dialog config.\n * @param config Config to be modified.\n * @param defaultOptions Default options provided.\n * @returns The new configuration object.\n */\nfunction _applyConfigDefaults(\n    config?: SdsDialogConfig, defaultOptions?: SdsDialogConfig): SdsDialogConfig {\n  return {...defaultOptions, ...config};\n}\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_location",
                        "type": "Location"
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig"
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any"
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService"
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer"
                    }
                ],
                "line": 90,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "openDialogs": {
                    "name": "openDialogs",
                    "getSignature": {
                        "name": "openDialogs",
                        "type": "[]",
                        "returnType": "SdsDialogRef[]",
                        "line": 70,
                        "description": "<p>Keeps track of the currently-open dialogs. </p>\n"
                    }
                },
                "afterOpened": {
                    "name": "afterOpened",
                    "getSignature": {
                        "name": "afterOpened",
                        "type": "",
                        "returnType": "Subject<SdsDialogRef<any>>",
                        "line": 75,
                        "description": "<p>Stream that emits when a dialog has been opened. </p>\n"
                    }
                },
                "_afterAllClosed": {
                    "name": "_afterAllClosed",
                    "getSignature": {
                        "name": "_afterAllClosed",
                        "type": "",
                        "returnType": "Subject<void>",
                        "line": 79
                    }
                }
            },
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "FooterLink",
            "id": "class-FooterLink-8351bbc206ff7dcca88f5b1b636b3881",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\n  INavigationLink,\n  NavigationMode\n} from '../../common-navigation/common-navigation-model';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n}\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 35
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 45
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 40
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
            "id": "class-FooterLinkSection-8351bbc206ff7dcca88f5b1b636b3881",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\n  INavigationLink,\n  NavigationMode\n} from '../../common-navigation/common-navigation-model';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n}\n",
            "properties": [
                {
                    "name": "links",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 28
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 23
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
            "id": "class-FooterModel-8351bbc206ff7dcca88f5b1b636b3881",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\n  INavigationLink,\n  NavigationMode\n} from '../../common-navigation/common-navigation-model';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n}\n",
            "properties": [
                {
                    "name": "footerLogo",
                    "type": "FooterLogo",
                    "optional": true,
                    "description": "<p>Footer text and logo</p>\n",
                    "line": 16
                },
                {
                    "name": "linkSections",
                    "type": "FooterLinkSection[]",
                    "optional": false,
                    "description": "<p>List of sections and their links</p>\n",
                    "line": 10
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
            "id": "class-HeaderHome-ee7a838bc2d256032384e3e7e9c96aff",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
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
            "id": "class-HeaderNavigationLink-ee7a838bc2d256032384e3e7e9c96aff",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
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
            "id": "class-HeaderSecondaryLink-ee7a838bc2d256032384e3e7e9c96aff",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class eg. fas\n     */\n    imageClassPrefix: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
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
            "name": "KeyHelper",
            "id": "class-KeyHelper-1e96ba0265feb21181984429697db65d",
            "file": "libs/packages/components/src/lib/key-helper/key-helper.ts",
            "type": "class",
            "sourceCode": "export class KeyHelper {\n\n  private _allowedKeys: string[] = [];\n\n  private _currentlySupported = [\n    'enter','up','down','left','right','tab','esc','space',\n    'shift','backspace','1','2','3','4','5','6','7','8',\n    '9','0', 'delete'\n  ];\n\n  constructor (...keys) {\n    this._setAllowedKeys(...keys);\n  }\n\n  public isAllowed (event): boolean {\n    const val = this._allowedKeys\n      .reduce(\n        (val, key) => {\n          return KeyHelper.is(key, event) || val;\n        },\n        false\n      );\n    return val;\n  }\n\n  private _setAllowedKeys(...keys) {\n    keys.forEach(\n      key => {\n        if (this._currentlySupported.indexOf(key) !== -1) {\n          this._allowedKeys.push(key);\n        } else {\n          const ok = this._allowedToString();\n          const msg = `Only supports ${ok} at this time`;\n          throw new TypeError(msg);\n        }\n      }\n    );\n  }\n\n  private _allowedToString (): string {\n    return this._allowedKeys.join(', ');\n  }\n\n  public static getKeyCode (event: any): string {\n\n    if (!event) {\n      return undefined;\n    } else if (event.key) {\n      return event.key;\n    } else if (event.code) {\n      return event.code;\n    } else if (event.keyIdentifier) {\n      return event.keyIdentifier;\n    } else {\n      return undefined;\n    }\n\n  }\n\n  public static getNumberFromKey (event): number {\n    const tests = [\n      KeyHelper._zero, KeyHelper._one, KeyHelper._two,\n      KeyHelper._three, KeyHelper._four, KeyHelper._five,\n      KeyHelper._six, KeyHelper._seven, KeyHelper._eight,\n      KeyHelper._nine\n    ];\n\n    return tests.reduce(\n      (val: number | undefined, test: Function) => {\n        return val !== undefined\n          ? val\n          : test(event);\n      }, undefined\n    );\n  }\n\n  public static is (\n    validKeyParam: string,\n    event: KeyboardEvent | any): boolean {\n    let lowercased = validKeyParam.toLowerCase();\n    switch (lowercased) {\n      case 'enter':\n        return this._isEnter(event);\n      case 'up':\n        return this._isArrowUp(event);\n      case 'down':\n        return this._isArrowDown(event);\n      case 'left':\n        return this._isArrowLeft(event);\n      case 'right':\n        return this._isArrowRight(event);\n      case 'tab':\n        return this._isTab(event);\n      case 'esc':\n        return this._isEscape(event);\n      case 'space':\n        return this._isSpace(event);\n      case 'shift':\n        return this._isShift(event);\n      case 'backspace':\n        return this._isBackspace(event);\n      case 'delete':\n        return this._isDelete(event);\n      case '0':\n        return this._isExpectedNumber(0, event);\n      case '1':\n        return this._isExpectedNumber(1, event);\n      case '2':\n        return this._isExpectedNumber(2, event);\n      case '3':\n        return this._isExpectedNumber(3, event);\n      case '4':\n        return this._isExpectedNumber(4, event);\n      case '5':\n        return this._isExpectedNumber(5, event);\n      case '6':\n        return this._isExpectedNumber(6, event);\n      case '7':\n        return this._isExpectedNumber(7, event);\n      case '8':\n        return this._isExpectedNumber(8, event);\n      case '9':\n        return this._isExpectedNumber(9, event);\n      default:\n        return false;\n    }\n  }\n\n  private static _isEnter (e: KeyboardEvent | any) {\n    if (e.code === 'Enter'\n      || e.key === 'Enter'\n      || e.keyIdentifier === 'Enter'\n      || e.which === 13\n      || e.charCode === 13\n      || e.keyCode === 13) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowUp (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowUp'\n      || e.key === 'ArrowUp'\n      || e.key === 'Up'\n      || e.keyIdentifier === 'Up'\n      || e.which === 38\n      || e.keyCode === 38) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowDown (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowDown'\n      || e.key === 'ArrowDown'\n      || e.key === 'Down'\n      || e.keyIdentifier === 'Down'\n      || e.which === 40\n      || e.keyCode === 40) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowLeft (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowLeft'\n      || e.key === 'ArrowLeft'\n      || e.key === 'Left'\n      || e.keyIdentifier === 'Left'\n      || e.which === 37\n      || e.keyCode === 37) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowRight (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowRight'\n      || e.key === 'ArrowRight'\n      || e.key === 'Right'\n      || e.keyIdentifier === 'Right'\n      || e.which === 39\n      || e.keyCode === 39) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isTab (e: KeyboardEvent | any) {\n    if (e.code === 'Tab'\n      || e.key === 'Tab'\n      || e.keyIdentifier === 'U+0009'\n      || e.which === 9\n      || e.keyCode === 9) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isEscape (e: KeyboardEvent | any) {\n    if (e.code === 'Escape'\n      || e.key === 'Escape'\n      || e.key === 'Esc'\n      || e.keyIdentifier === 'U+001B'\n      || e.which === 27\n      || e.keyCode === 27) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isSpace (e: KeyboardEvent | any) {\n    if (e.code === 'Space'\n      || e.key === ' '\n      || e.key === 'Spacebar'\n      || e.keyIdentifier === 'U+0020'\n      || e.which === 32\n      || e.keyCode === 32) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isShift (e: KeyboardEvent | any) {\n    if (e.code === 'ShiftLeft'\n      || e.code === 'ShiftRight'\n      || e.key === 'Shift'\n      || e.keyIdentifier === 'Shift'\n      || e.which === 16\n      || e.keyCode === 16) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isBackspace (e: KeyboardEvent | any) {\n    if (e.code === 'Backspace'\n      || e.key === 'Backspace'\n      || e.keyIdentifier === 'U+0008'\n      || e.which === 8\n      || e.keyCode === 8) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isDelete (e: KeyboardEvent | any) {\n    if (e.code === 'Delete'\n      || e.key === 'Delete'\n      || e.keyIdentifier === 'U+007F'\n      || e.which === 46\n      || e.keyCode === 46) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _zero (e): number {\n    if (e.code === 'Digit0'\n      || e.code === 'Numpad0'\n      || e.key === 0\n      || e.keyCode === 48\n      || e.keyCode === 96\n      || e.keyIdentifier === 'U+0030'\n      || e.which === 48) {\n      return 0;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _one (e): number {\n    if (e.code === 'Digit1'\n      || e.code === 'Numpad1'\n      || e.key === 1\n      || e.keyCode === 49\n      || e.keyCode === 97\n      || e.keyIdentifier === 'U+0031'\n      || e.which === 49) {\n      return 1;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _two (e): number {\n    if (e.code === 'Digit2'\n      || e.code === 'Numpad2'\n      || e.key === 2\n      || e.keyCode === 50\n      || e.keyCode === 98\n      || e.keyIdentifier === 'U+0032'\n      || e.which === 50) {\n      return 2;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _three (e): number {\n    if (e.code === 'Digit3'\n      || e.code === 'Numpad3'\n      || e.key === 3\n      || e.keyCode === 51\n      || e.keyCode === 99\n      || e.keyIdentifier === 'U+0033'\n      || e.which === 51) {\n      return 3;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _four (e): number {\n    if (e.code === 'Digit4'\n      || e.code === 'Numpad4'\n      || e.key === 4\n      || e.keyCode === 52\n      || e.keyCode === 100\n      || e.keyIdentifier === 'U+0034'\n      || e.which === 52) {\n      return 4;\n    } else {\n      return undefined;\n    }\n  }\n  private static _five (e): number {\n    if (e.code === 'Digit5'\n      || e.code === 'Numpad5'\n      || e.key === 5\n      || e.keyCode === 53\n      || e.keyCode === 101\n      || e.keyIdentifier === 'U+0035'\n      || e.which === 53) {\n      return 5;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _six (e): number {\n    if (e.code === 'Digit6'\n      || e.code === 'Numpad6'\n      || e.key === 6\n      || e.keyCode === 54\n      || e.keyCode === 102\n      || e.keyIdentifier === 'U+0036'\n      || e.which === 54) {\n      return 6;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _seven (e): number {\n    if (e.code === 'Digit7'\n      || e.code === 'Numpad7'\n      || e.key === 7\n      || e.keyCode === 55\n      || e.keyCode === 103\n      || e.keyIdentifier === 'U+0037'\n      || e.which === 55) {\n      return 7;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _eight (e): number {\n    if (e.code === 'Digit8'\n      || e.code === 'Numpad8'\n      || e.key === 8\n      || e.keyCode === 56\n      || e.keyCode === 104\n      || e.keyIdentifier === 'U+0038'\n      || e.which === 56) {\n      return 8;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _nine (e): number {\n    if (e.code === 'Digit9'\n      || e.code === 'Numpad9'\n      || e.key === 9\n      || e.keyCode === 57\n      || e.keyCode === 105\n      || e.keyIdentifier === 'U+0039'\n      || e.which === 57) {\n      return 9;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _isExpectedNumber (expected, event)\n    : boolean {\n    return expected === KeyHelper.getNumberFromKey(event);\n  }\n\n}\n\nexport enum KEYS {\n  'ENTER' = 'enter',\n  'UP' = 'up',\n  'DOWN' = 'down',\n  'LEFT' = 'left',\n  'RIGHT' = 'right',\n  'TAB' = 'tab',\n  'ESC' = 'esc',\n  'SPACE' = 'space',\n  'SHIFT' = 'shift',\n  'BACKSPACE' = 'backspace',\n  'ONE' = '1',\n  'TWO' = '2',\n  'THREE' = '3',\n  'FOUR' = '4',\n  'FIVE' = '5',\n  'SIX' = '6',\n  'SEVEN' = '7',\n  'EIGHT' = '8',\n  'NINE' = '9',\n  'ZERO' = '0',\n  'DELETE' = 'delete'\n}\n\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true
                    }
                ],
                "line": 9,
                "jsdoctags": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_allowedKeys",
                    "defaultValue": "[]",
                    "type": "string[]",
                    "optional": false,
                    "description": "",
                    "line": 3,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_currentlySupported",
                    "defaultValue": "[\n    'enter','up','down','left','right','tab','esc','space',\n    'shift','backspace','1','2','3','4','5','6','7','8',\n    '9','0', 'delete'\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "",
                    "line": 5,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_allowedToString",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_eight",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 380,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_five",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 338,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_four",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 325,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowDown",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 155,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowLeft",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 168,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowRight",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 181,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowUp",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 142,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isBackspace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 245,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isDelete",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 257,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEnter",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 129,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEscape",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 206,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isExpectedNumber",
                    "args": [
                        {
                            "name": "expected",
                            "type": ""
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 408,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "expected",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isShift",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 232,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isSpace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 219,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isTab",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 194,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_nine",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 394,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_one",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 283,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setAllowedKeys",
                    "args": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 26,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_seven",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 366,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_six",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 352,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_three",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 311,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_two",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 297,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_zero",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 269,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getKeyCode",
                    "args": [
                        {
                            "name": "event",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 44,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getNumberFromKey",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 60,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "is",
                    "args": [
                        {
                            "name": "validKeyParam",
                            "type": "string"
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 77,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "validKeyParam",
                            "type": "string",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isAllowed",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 15,
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "NavigationHelper",
            "id": "class-NavigationHelper-4ecdafa8ba2dfaeb583d08a13a9bad4b",
            "file": "libs/packages/components/src/lib/common-navigation/navigation-helper.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from './common-navigation-model';\nexport class NavigationHelper {\n\n    /**\n     * checks if link is internal\n     * @param link \n     */\n    isLinkInternal(link: INavigationLink) {\n        return link.mode === NavigationMode.INTERNAL;\n    }\n\n    /**\n     * checks if link is external\n     * @param link \n     */\n    isLinkExternal(link: INavigationLink) {\n        return link.mode === NavigationMode.EXTERNAL;\n    }\n}",
            "properties": [],
            "methods": [
                {
                    "name": "isLinkExternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 16,
                    "description": "<p>checks if link is external</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 341,
                                "end": 345,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 335,
                                "end": 340,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "isLinkInternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 8,
                    "description": "<p>checks if link is internal</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 166,
                                "end": 170,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 160,
                                "end": 165,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "NavigationLink",
            "id": "class-NavigationLink-21182fefec95af167a2b3367dbe1050f",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\nexport class SideNavigationModel {\n\n    /**\n     * \n     */\n    navigationLinks: NavigationLink[];\n}\n\n\nexport class NavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: NavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n\n\n    /**\n     * Query string paramaters supporeted with external and internal links\n     * ex. { 'name': 'value',...}\n     */\n    queryParams?: {\n        [k: string]: any;\n    }\n\n}\n\n\n\n\n",
            "properties": [
                {
                    "name": "children",
                    "type": "NavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 32
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 37
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 17
                },
                {
                    "name": "queryParams",
                    "type": "literal type",
                    "optional": true,
                    "description": "<p>Query string paramaters supporeted with external and internal links\nex. { &#39;name&#39;: &#39;value&#39;,...}</p>\n",
                    "line": 49
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 27
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 42
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 22
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
            "name": "PaginationConfigurationModel",
            "id": "class-PaginationConfigurationModel-e22700d6799a2fbbeca5d7b2f30c4157",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\n\n    /**\n     * used to distinguish fields\n     */\n    id: string;\n}\n\nexport class PaginationModel {\n\n    /**\n     * current page number\n     */\n    pageNumber: number;\n\n    /**\n     * size of page ex 25, 50,100\n     */\n    pageSize: number;\n\n    /**\n     * total number of pages\n     */\n    totalPages: number;\n}\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>used to distinguish fields</p>\n",
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
            "name": "PaginationModel",
            "id": "class-PaginationModel-e22700d6799a2fbbeca5d7b2f30c4157",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\n\n    /**\n     * used to distinguish fields\n     */\n    id: string;\n}\n\nexport class PaginationModel {\n\n    /**\n     * current page number\n     */\n    pageNumber: number;\n\n    /**\n     * size of page ex 25, 50,100\n     */\n    pageSize: number;\n\n    /**\n     * total number of pages\n     */\n    totalPages: number;\n}\n",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>current page number</p>\n",
                    "line": 15
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>size of page ex 25, 50,100</p>\n",
                    "line": 20
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>total number of pages</p>\n",
                    "line": 25
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
            "name": "SDSAutocompletelConfiguration",
            "id": "class-SDSAutocompletelConfiguration-9a4f259f5181a416b21896645a75c918",
            "file": "libs/packages/components/src/lib/autocomplete/models/SDSAutocompletelConfiguration.model.ts",
            "type": "class",
            "sourceCode": "import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';\nimport { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';\nimport { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\n\nexport class SDSAutocompletelConfiguration implements SDSSelectedResultConfiguration, SDSAutocompleteSearchConfiguration {\n  /**\n     * sets the default debounce time to 250 milliseconds \n     */\n  constructor() {\n    this.debounceTime = 250;\n    this.minimumCharacterCountSearch = 0;\n  }\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   * Used for the Id of the control\n   */\n  public id: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\n   */\n  public debounceTime: number;\n\n  /**\n   * Place holder text for autocomplete input\n   */\n  public autocompletePlaceHolderText: string;\n\n  /**\n   * Mininumn Characters for search\n   */\n  public minimumCharacterCountSearch: number;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n\n\n  /**\n   * Allows option to allow user text not in the standard results\n   */\n  public isFreeTextEnabled: boolean = false;\n\n  /**\n   * Text appeneded ad the end of free text\n   */\n  public freeTextSubtext: string = 'search';\n\n  /**\n   * Focus into autocomplete search\n   */\n  public focusInSearch: boolean = true;\n\n  /**\n   * The aria-label for the auto-complete\n   */\n  public ariaLabelText: string = 'Auto Complete';\n\n   /**\n   * To enable the tag mode\n   */\n  public isTagModeEnabled: boolean =false;\n\n    /**\n   * To make input readonly\n   */\n  public inputReadOnly = false;\n\n}",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds </p>\n",
                "args": [],
                "line": 5
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 78,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 47,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 73,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 68,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 22,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>To make input readonly</p>\n",
                    "line": 88,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 63,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isTagModeEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the tag mode</p>\n",
                    "line": 83,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 17,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 52,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 27,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 32,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 37,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 57,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "SDSSelectedResultConfiguration",
                "SDSAutocompleteSearchConfiguration"
            ]
        },
        {
            "name": "SDSAutocompleteSearchConfiguration",
            "id": "class-SDSAutocompleteSearchConfiguration-fc704c3d7aacce334adbe3622dc57a81",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\n\nexport class SDSAutocompleteSearchConfiguration {\n\n  /**\n   * sets the default debounce time to 250 milliseconds \n   */\n  constructor() {\n    this.debounceTime = 250;\n    this.minimumCharacterCountSearch = 0;\n  }\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   * Used for the Id of the control\n   */\n  public id: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template \n   *  and the text for single selection\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\n   */\n  public debounceTime: number;\n\n  /**\n   * Place holder text for autocomplete input\n   */\n  public autocompletePlaceHolderText: string;\n\n  /**\n   * Mininumn Characters for search\n   */\n  public minimumCharacterCountSearch: number;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n\n  /**\n   * Allows option to allow user text not in the standard results\n   */\n  public isFreeTextEnabled: boolean = false;\n\n  /**\n   * Text appeneded ad the end of free text\n   */\n  public freeTextSubtext: string = 'search';\n\n  /**\n   * Focus into autocomplete search\n   */\n  public focusInSearch: boolean = true;\n\n  /**\n   * The aria-label for the auto-complete\n   */\n  public ariaLabelText: string = 'Auto Complete';\n\n  /**\n   * To enable the tag mode\n   */\n  public isTagModeEnabled: boolean =false;\n\n    /**\n   * To make input readonly\n   */\n  public inputReadOnly = false;\n\n}\n",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds </p>\n",
                "args": [],
                "line": 3
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 77,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 47,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 72,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 67,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 21,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>To make input readonly</p>\n",
                    "line": 87,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 62,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isTagModeEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the tag mode</p>\n",
                    "line": 82,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 16,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 52,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 26,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template \nand the text for single selection</p>\n",
                    "line": 32,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 37,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 57,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SdsDialogConfig",
            "id": "class-SdsDialogConfig-25804f8cb6d8bbb14cb999c34e6a15e6",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "class",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\nimport {Direction} from '@angular/cdk/bidi';\nimport {ScrollStrategy} from '@angular/cdk/overlay';\n\n/** Valid ARIA roles for a dialog element. */\nexport type DialogRole = 'dialog' | 'alertdialog';\n\n/** Possible overrides for a dialog's position. */\nexport interface DialogPosition {\n  /** Override for the dialog's top position. */\n  top?: string;\n\n  /** Override for the dialog's bottom position. */\n  bottom?: string;\n\n  /** Override for the dialog's left position. */\n  left?: string;\n\n  /** Override for the dialog's right position. */\n  right?: string;\n}\n\n/**\n * Configuration for opening a modal dialog with the SdsDialog service.\n */\nexport class SdsDialogConfig<D = any> {\n\n  /**\n   * Where the attached component should live in Angular's *logical* component tree.\n   * This affects what is available for injection and the change detection order for the\n   * component instantiated inside of the dialog. This does not affect where the dialog\n   * content will be rendered.\n   */\n  viewContainerRef?: ViewContainerRef;\n\n  /** ID for the dialog. If omitted, a unique one will be generated. */\n  id?: string;\n\n  /** The ARIA role of the dialog element. */\n  role?: DialogRole = 'dialog';\n\n  /** Custom class for the overlay pane. */\n  panelClass?: string | string[] = '';\n\n  /** Whether the dialog has a backdrop. */\n  hasBackdrop? = true;\n\n  /** Custom class for the backdrop, */\n  backdropClass? = '';\n\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\n  disableClose? = false;\n\n  /** Width of the dialog. */\n  width? = '';\n\n  /** Height of the dialog. */\n  height? = '';\n\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\n  minWidth?: number | string;\n\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\n  minHeight?: number | string;\n\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\n  maxWidth?: number | string = '80vw';\n\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\n  maxHeight?: number | string;\n\n  /** Position overrides. */\n  position?: DialogPosition;\n\n  /** Data being injected into the child component. */\n  data?: D | null = null;\n\n  /** Layout direction for the dialog's content. */\n  direction?: Direction;\n\n  /** ID of the element that describes the dialog. */\n  ariaDescribedBy?: string | null = null;\n\n  /** Aria label to assign to the dialog element */\n  ariaLabel?: string | null = null;\n\n  /** Whether the dialog should focus the first focusable element on open. */\n  autoFocus? = true;\n\n  /**\n   * Whether the dialog should restore focus to the\n   * previously-focused element, after it's closed.\n   */\n  restoreFocus? = true;\n\n  /** Scroll strategy to be used for the dialog. */\n  scrollStrategy?: ScrollStrategy;\n\n  /**\n   * Whether the dialog should close when the user goes backwards/forwards in history.\n   * Note that this usually doesn't include clicking on links (unless the user is using\n   * the `HashLocationStrategy`).\n   */\n  closeOnNavigation? = true;\n\n  /**\n   * Wheter the dialog its an alert\n   */\n  alert?: 'warning' | 'info' | 'error';\n}\n",
            "properties": [
                {
                    "name": "alert",
                    "type": "\"warning\" | \"info\" | \"error\"",
                    "optional": true,
                    "description": "<p>Wheter the dialog its an alert</p>\n",
                    "line": 109
                },
                {
                    "name": "ariaDescribedBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>ID of the element that describes the dialog. </p>\n",
                    "line": 82
                },
                {
                    "name": "ariaLabel",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>Aria label to assign to the dialog element </p>\n",
                    "line": 85
                },
                {
                    "name": "autoFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should focus the first focusable element on open. </p>\n",
                    "line": 88
                },
                {
                    "name": "backdropClass",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Custom class for the backdrop, </p>\n",
                    "line": 49
                },
                {
                    "name": "closeOnNavigation",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should close when the user goes backwards/forwards in history.\nNote that this usually doesn&#39;t include clicking on links (unless the user is using\nthe <code>HashLocationStrategy</code>).</p>\n",
                    "line": 104
                },
                {
                    "name": "data",
                    "defaultValue": "null",
                    "type": "D | null",
                    "optional": true,
                    "description": "<p>Data being injected into the child component. </p>\n",
                    "line": 76
                },
                {
                    "name": "direction",
                    "type": "Direction",
                    "optional": true,
                    "description": "<p>Layout direction for the dialog&#39;s content. </p>\n",
                    "line": 79
                },
                {
                    "name": "disableClose",
                    "defaultValue": "false",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the user can use escape or clicking on the backdrop to close the modal. </p>\n",
                    "line": 52
                },
                {
                    "name": "hasBackdrop",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog has a backdrop. </p>\n",
                    "line": 46
                },
                {
                    "name": "height",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Height of the dialog. </p>\n",
                    "line": 58
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": true,
                    "description": "<p>ID for the dialog. If omitted, a unique one will be generated. </p>\n",
                    "line": 37
                },
                {
                    "name": "maxHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 70
                },
                {
                    "name": "maxWidth",
                    "defaultValue": "'80vw'",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw </p>\n",
                    "line": 67
                },
                {
                    "name": "minHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 64
                },
                {
                    "name": "minWidth",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-width of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 61
                },
                {
                    "name": "panelClass",
                    "defaultValue": "''",
                    "type": "string | string[]",
                    "optional": true,
                    "description": "<p>Custom class for the overlay pane. </p>\n",
                    "line": 43
                },
                {
                    "name": "position",
                    "type": "DialogPosition",
                    "optional": true,
                    "description": "<p>Position overrides. </p>\n",
                    "line": 73
                },
                {
                    "name": "restoreFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should restore focus to the\npreviously-focused element, after it&#39;s closed.</p>\n",
                    "line": 94
                },
                {
                    "name": "role",
                    "defaultValue": "'dialog'",
                    "type": "DialogRole",
                    "optional": true,
                    "description": "<p>The ARIA role of the dialog element. </p>\n",
                    "line": 40
                },
                {
                    "name": "scrollStrategy",
                    "type": "ScrollStrategy",
                    "optional": true,
                    "description": "<p>Scroll strategy to be used for the dialog. </p>\n",
                    "line": 97
                },
                {
                    "name": "viewContainerRef",
                    "type": "ViewContainerRef",
                    "optional": true,
                    "description": "<p>Where the attached component should live in Angular&#39;s <em>logical</em> component tree.\nThis affects what is available for injection and the change detection order for the\ncomponent instantiated inside of the dialog. This does not affect where the dialog\ncontent will be rendered.</p>\n",
                    "line": 34
                },
                {
                    "name": "width",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Width of the dialog. </p>\n",
                    "line": 55
                }
            ],
            "description": "<p>Configuration for opening a modal dialog with the SdsDialog service.</p>\n",
            "rawdescription": "Configuration for opening a modal dialog with the SdsDialog service.",
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsDialogRef",
            "id": "class-SdsDialogRef-f018eede837db3ccddd25aafabd8e8aa",
            "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
            "type": "class",
            "sourceCode": "import {ESCAPE} from '@angular/cdk/keycodes';\nimport {GlobalPositionStrategy, OverlayRef} from '@angular/cdk/overlay';\nimport {Location} from '@angular/common';\nimport {Observable, Subject} from 'rxjs';\nimport {filter, take} from 'rxjs/operators';\nimport {DialogPosition} from './dialog-config';\nimport {SdsDialogContainerComponent} from './dialog-container.component';\n\n// Counter for unique dialog ids.\nlet uniqueId = 0;\n\n/**\n * Reference to a dialog opened via the SdsDialog service.\n */\nexport class SdsDialogRef<T, R = any> {\n  /** The instance of component opened into the dialog. */\n  componentInstance: T;\n\n  /** Whether the user is allowed to close the dialog. */\n  disableClose: boolean | undefined = this._containerInstance._config.disableClose;\n\n  /** Subject for notifying the user that the dialog has finished opening. */\n  private readonly _afterOpened = new Subject<void>();\n\n  /** Subject for notifying the user that the dialog has finished closing. */\n  private readonly _afterClosed = new Subject<R | undefined>();\n\n  /** Subject for notifying the user that the dialog has started closing. */\n  private readonly _beforeClosed = new Subject<R | undefined>();\n\n  /** Result to be passed to afterClosed. */\n  private _result: R | undefined;\n\n  constructor(\n    private _overlayRef: OverlayRef,\n    public _containerInstance: SdsDialogContainerComponent,\n    _location?: Location,\n    readonly id: string = `sds-dialog-${uniqueId++}`) {\n\n    // Pass the id along to the container.\n    _containerInstance._id = id;\n\n    // Emit when opening animation completes\n    _containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'done' && event.toState === 'enter'),\n      take(1)\n    )\n    .subscribe(() => {\n      this._afterOpened.next();\n      this._afterOpened.complete();\n    });\n\n    // Dispose overlay when closing animation is complete\n    _containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'done' && event.toState === 'exit'),\n      take(1)\n    ).subscribe(() => this._overlayRef.dispose());\n\n    _overlayRef.detachments().subscribe(() => {\n      this._beforeClosed.next(this._result);\n      this._beforeClosed.complete();\n      this._afterClosed.next(this._result);\n      this._afterClosed.complete();\n      this.componentInstance = null!;\n      this._overlayRef.dispose();\n    });\n\n    _overlayRef.keydownEvents()\n      .pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose))\n      .subscribe(() => this.close());\n  }\n\n  /**\n   * Close the dialog.\n   * @param dialogResult Optional result to return to the dialog opener.\n   */\n  close(dialogResult?: R): void {\n    this._result = dialogResult;\n\n    // Transition the backdrop in parallel to the dialog.\n    this._containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'start'),\n      take(1)\n    )\n    .subscribe(() => {\n      this._beforeClosed.next(dialogResult);\n      this._beforeClosed.complete();\n      this._overlayRef.detachBackdrop();\n    });\n\n    this._containerInstance._startExitAnimation();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog is finished opening.\n   */\n  afterOpened(): Observable<void> {\n    return this._afterOpened.asObservable();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog is finished closing.\n   */\n  afterClosed(): Observable<R | undefined> {\n    return this._afterClosed.asObservable();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog has started closing.\n   */\n  beforeClosed(): Observable<R | undefined> {\n    return this._beforeClosed.asObservable();\n  }\n\n  /**\n   * Gets an observable that emits when the overlay's backdrop has been clicked.\n   */\n  backdropClick(): Observable<MouseEvent> {\n    return this._overlayRef.backdropClick();\n  }\n\n  /**\n   * Gets an observable that emits when keydown events are targeted on the overlay.\n   */\n  keydownEvents(): Observable<KeyboardEvent> {\n    return this._overlayRef.keydownEvents();\n  }\n\n  /**\n   * Updates the dialog's position.\n   * @param position New dialog position.\n   */\n  updatePosition(position?: DialogPosition): this {\n    const strategy = this._getPositionStrategy();\n\n    if (position && (position.left || position.right)) {\n      position.left ? strategy.left(position.left) : strategy.right(position.right);\n    } else {\n      strategy.centerHorizontally();\n    }\n\n    if (position && (position.top || position.bottom)) {\n      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);\n    } else {\n      strategy.centerVertically();\n    }\n\n    this._overlayRef.updatePosition();\n\n    return this;\n  }\n\n  /**\n   * Updates the dialog's width and height.\n   * @param width New width of the dialog.\n   * @param height New height of the dialog.\n   */\n  updateSize(width: string = '', height: string = ''): this {\n    this._getPositionStrategy().width(width).height(height);\n    this._overlayRef.updatePosition();\n    return this;\n  }\n\n  /** Add a CSS class or an array of classes to the overlay pane. */\n  addPanelClass(classes: string | string[]): this {\n    this._overlayRef.addPanelClass(classes);\n    return this;\n  }\n\n  /** Remove a CSS class or an array of classes from the overlay pane. */\n  removePanelClass(classes: string | string[]): this {\n    this._overlayRef.removePanelClass(classes);\n    return this;\n  }\n\n  /** Fetches the position strategy object from the overlay ref. */\n  private _getPositionStrategy(): GlobalPositionStrategy {\n    return this._overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;\n  }\n}\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef"
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent"
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`"
                    }
                ],
                "line": 32,
                "jsdoctags": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_afterClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished closing. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpened",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished opening. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_beforeClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has started closing. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_containerInstance",
                    "type": "SdsDialogContainerComponent",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_result",
                    "type": "R | undefined",
                    "optional": false,
                    "description": "<p>Result to be passed to afterClosed. </p>\n",
                    "line": 32,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "componentInstance",
                    "type": "T",
                    "optional": false,
                    "description": "<p>The instance of component opened into the dialog. </p>\n",
                    "line": 17
                },
                {
                    "name": "disableClose",
                    "defaultValue": "this._containerInstance._config.disableClose",
                    "type": "boolean | undefined",
                    "optional": false,
                    "description": "<p>Whether the user is allowed to close the dialog. </p>\n",
                    "line": 20
                }
            ],
            "description": "<p>Reference to a dialog opened via the SdsDialog service.</p>\n",
            "rawdescription": "Reference to a dialog opened via the SdsDialog service.",
            "methods": [
                {
                    "name": "_getPositionStrategy",
                    "args": [],
                    "optional": false,
                    "returnType": "GlobalPositionStrategy",
                    "typeParameters": [],
                    "line": 177,
                    "description": "<p>Fetches the position strategy object from the overlay ref. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "addPanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 165,
                    "description": "<p>Add a CSS class or an array of classes to the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "afterClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 104,
                    "description": "<p>Gets an observable that is notified when the dialog is finished closing.</p>\n"
                },
                {
                    "name": "afterOpened",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<void>",
                    "typeParameters": [],
                    "line": 97,
                    "description": "<p>Gets an observable that is notified when the dialog is finished opening.</p>\n"
                },
                {
                    "name": "backdropClick",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<MouseEvent>",
                    "typeParameters": [],
                    "line": 118,
                    "description": "<p>Gets an observable that emits when the overlay&#39;s backdrop has been clicked.</p>\n"
                },
                {
                    "name": "beforeClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 111,
                    "description": "<p>Gets an observable that is notified when the dialog has started closing.</p>\n"
                },
                {
                    "name": "close",
                    "args": [
                        {
                            "name": "dialogResult",
                            "type": "R",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "description": "<p>Close the dialog.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2566,
                                "end": 2578,
                                "flags": 0,
                                "escapedText": "dialogResult"
                            },
                            "type": "R",
                            "optional": true,
                            "tagName": {
                                "pos": 2560,
                                "end": 2565,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Optional result to return to the dialog opener.</p>\n"
                        }
                    ]
                },
                {
                    "name": "keydownEvents",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<KeyboardEvent>",
                    "typeParameters": [],
                    "line": 125,
                    "description": "<p>Gets an observable that emits when keydown events are targeted on the overlay.</p>\n"
                },
                {
                    "name": "removePanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Remove a CSS class or an array of classes from the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updatePosition",
                    "args": [
                        {
                            "name": "position",
                            "type": "DialogPosition",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 133,
                    "description": "<p>Updates the dialog&#39;s position.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4081,
                                "end": 4089,
                                "flags": 0,
                                "escapedText": "position"
                            },
                            "type": "DialogPosition",
                            "optional": true,
                            "tagName": {
                                "pos": 4075,
                                "end": 4080,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New dialog position.</p>\n"
                        }
                    ]
                },
                {
                    "name": "updateSize",
                    "args": [
                        {
                            "name": "width",
                            "type": "string",
                            "defaultValue": "''"
                        },
                        {
                            "name": "height",
                            "type": "string",
                            "defaultValue": "''"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Updates the dialog&#39;s width and height.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4739,
                                "end": 4744,
                                "flags": 0,
                                "escapedText": "width"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4733,
                                "end": 4738,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New width of the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 4782,
                                "end": 4788,
                                "flags": 0,
                                "escapedText": "height"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4776,
                                "end": 4781,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New height of the dialog.</p>\n"
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSHiercarchicalServiceSearchItem",
            "id": "class-SDSHiercarchicalServiceSearchItem-789c2f09fc917454d7d68b1fa43ff91c",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
            "properties": [
                {
                    "name": "currentItemCount",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 42
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 27
                },
                {
                    "name": "searchValue",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 32
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
            "name": "SDSSelectedItemModel",
            "id": "class-SDSSelectedItemModel-26efaed51d41a8f1f286c184b063c419",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selectedItem.model.ts",
            "type": "class",
            "sourceCode": "export class SDSSelectedItemModel {\n  /**\n   * List of items selected\n   */\n  public items: object[];\n\n  constructor(items?: object[]) {\n    this.items = items ? [...items] : [];\n  }\n\n}\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "items",
                        "type": "object[]",
                        "optional": true
                    }
                ],
                "line": 5,
                "jsdoctags": [
                    {
                        "name": "items",
                        "type": "object[]",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>List of items selected</p>\n",
                    "line": 5,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SDSSelectedItemModelHelper",
            "id": "class-SDSSelectedItemModelHelper-15748583d135072c772d4b3ef1f1ad7c",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts",
            "type": "class",
            "sourceCode": "export class SDSSelectedItemModelHelper {\n\n    /**\n      *  adds an item to the collection\n      * if selected mode is single it removes any existing items\n      * also checks to see if that item already exists\n      * keyfield is used to determine uniqueness of the item added\n      * @param itemToAdd \n      * @param keyField \n      * @param selectionMode \n      * @param items \n      */\n    public static addItem(itemToAdd: object, keyField: string, selectionMode: SelectionMode, items: object[]) {\n        if (!SDSSelectedItemModelHelper.contatinsItem(itemToAdd[keyField], keyField, items)) {\n            if (selectionMode === SelectionMode.SINGLE) {\n                SDSSelectedItemModelHelper.clearItems(items);\n            }\n            items.push(itemToAdd);\n        }\n    }\n\n    /**\n     * adds an array of items to the list and will not add duplicate items\n     * keyfield is used to determine uniqueness of the item added\n     * @param toAddItems \n     * @param keyField \n     * @param selectionMode \n     * @param items \n     */\n    public static addItems(toAddItems: object[], keyField: string, selectionMode: SelectionMode, items: object[]) {\n        for (let i = 0; i < toAddItems.length; i++) {\n            SDSSelectedItemModelHelper.addItem(toAddItems[i], keyField, selectionMode, items);\n        }\n    }\n\n    /**\n     * removes the item from the list\n     * keyfield is used to determine uniqueness of the item added\n     * @param item \n     * @param keyField \n     * @param items \n     */\n    public static removeItem(item: object, keyField: string, items: object[]) {\n        if (SDSSelectedItemModelHelper.contatinsItem(item[keyField], keyField, items)) {\n            items.splice(items.indexOf(item), 1)\n        }\n    }\n\n    /**\n     * checks to see if a particular item exists by the provied key\n     * keyfield is used to determine uniqueness of the item added\n     * @param key \n     * @param keyField \n     * @param items \n     */\n    public static contatinsItem(key: string, keyField: string, items: object[]): boolean {\n        let item = items.find(o => o[keyField] === key);\n        return item !== null && item !== undefined;\n    }\n\n    /**\n     * Clears the list of items\n     * @param items \n     */\n    public static clearItems(items: object[]) {\n        while (items.length > 0) {\n            items.pop();\n        }\n    }\n\n    /**\n     * updates an array of items to the list and will not add duplicate items\n     * keyfield is used to determine uniqueness of the item added\n     * @param selectedItems \n     * @param keyField \n     * @param selectionMode \n     * @param items \n     */\n    public static replaceItems(selectedItems: object[], keyField: string, selectionMode: SelectionMode, items: object[]) {\n        //Clears Old List\n        SDSSelectedItemModelHelper.clearItems(items);\n        //Adds new List\n        SDSSelectedItemModelHelper.addItems(selectedItems, keyField, selectionMode, items);\n    }\n}\n\nexport enum SelectionMode {\n    SINGLE, MULTIPLE\n}\n",
            "properties": [],
            "methods": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "itemToAdd",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 13,
                    "description": "<p>adds an item to the collection\nif selected mode is single it removes any existing items\nalso checks to see if that item already exists\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 293,
                                "end": 302,
                                "flags": 0,
                                "escapedText": "itemToAdd"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 287,
                                "end": 292,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 319,
                                "end": 327,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 313,
                                "end": 318,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 344,
                                "end": 357,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 338,
                                "end": 343,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 374,
                                "end": 379,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 368,
                                "end": 373,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "addItems",
                    "args": [
                        {
                            "name": "toAddItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30,
                    "description": "<p>adds an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 946,
                                "end": 956,
                                "flags": 0,
                                "escapedText": "toAddItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 940,
                                "end": 945,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 972,
                                "end": 980,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 966,
                                "end": 971,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 996,
                                "end": 1009,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 990,
                                "end": 995,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1025,
                                "end": 1030,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1019,
                                "end": 1024,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "clearItems",
                    "args": [
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 65,
                    "description": "<p>Clears the list of items</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2217,
                                "end": 2222,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2211,
                                "end": 2216,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "contatinsItem",
                    "args": [
                        {
                            "name": "key",
                            "type": "string"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 56,
                    "description": "<p>checks to see if a particular item exists by the provied key\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1898,
                                "end": 1901,
                                "flags": 0,
                                "escapedText": "key"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1892,
                                "end": 1897,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1917,
                                "end": 1925,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1911,
                                "end": 1916,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1941,
                                "end": 1946,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1935,
                                "end": 1940,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43,
                    "description": "<p>removes the item from the list\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1448,
                                "end": 1452,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1442,
                                "end": 1447,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1468,
                                "end": 1476,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1462,
                                "end": 1467,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1492,
                                "end": 1497,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1486,
                                "end": 1491,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "replaceItems",
                    "args": [
                        {
                            "name": "selectedItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 79,
                    "description": "<p>updates an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2523,
                                "end": 2536,
                                "flags": 0,
                                "escapedText": "selectedItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2517,
                                "end": 2522,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2552,
                                "end": 2560,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2546,
                                "end": 2551,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2576,
                                "end": 2589,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 2570,
                                "end": 2575,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2605,
                                "end": 2610,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2599,
                                "end": 2604,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSSelectedResultConfiguration",
            "id": "class-SDSSelectedResultConfiguration-24e084062ea572751b858341d16eb2b7",
            "file": "libs/packages/components/src/lib/selected-result/models/SDSSelectedResultConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from './sds-selected-item-model-helper';\n\nexport class SDSSelectedResultConfiguration {\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n}\n",
            "properties": [
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 8,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 13,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 18,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 23,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SearchSettings",
            "id": "class-SearchSettings-2a8efc30de9eecd95e1bad6122a942d7",
            "file": "libs/packages/components/src/lib/search/search.component.ts",
            "type": "class",
            "sourceCode": "import {\n  Component,\n  ViewChild,\n  ElementRef,\n  Input,\n  AfterViewInit,\n  forwardRef,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { FocusMonitor } from '@angular/cdk/a11y';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nexport class SearchSettings {\n  public placeholder = 'Search';\n  public size: string;\n  public dropdown: any = {\n    placeholder: '-Select-',\n    options: [],\n    inverse: false\n  };\n}\n@Component({\n  selector: 'sds-search',\n  templateUrl: 'search.component.html',\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsSearchComponent),\n      multi: true\n    }\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\n  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;\n  @ViewChild('selectEl', { read: ElementRef }) selectEl: ElementRef;\n  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;\n\n  @Input() inputClass: string;\n  @Input() parentSelector: string;\n  @Input() searchSettings: SearchSettings = new SearchSettings();\n\n  model: any = {};\n  inputState = {\n    initial: { visible: undefined },\n    visible: undefined\n  };\n  private _onChange = (_: any) => {};\n  private _onTouched = () => {};\n\n  constructor(\n    private cd: ChangeDetectorRef,\n    private focusMonitor: FocusMonitor,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngAfterViewInit() {\n    this.inputState.initial.visible = this.isInputVisible();\n    this.inputState.visible = this.inputState.initial.visible;\n    this.viewportRuler.change(0).subscribe(() => {\n      this.inputState.initial.visible = this.isInputVisible();\n      this.inputState.visible = this.inputState.initial.visible;\n    });\n  }\n\n  hasDropdown() {\n    if (\n      this.searchSettings &&\n      this.searchSettings.dropdown &&\n      this.searchSettings.dropdown.options &&\n      this.searchSettings.dropdown.options.length\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  handleClick(event) {\n    event.preventDefault();\n    if (!this.inputState.visible) {\n      this.setInputVisibleStyles();\n      this.focusMonitor.focusVia(this.inputEl, 'program');\n    } else if (this.inputEl.nativeElement.value || this.selectEl.nativeElement.value) {\n      this.model.searchText = this.inputEl.nativeElement.value;\n      if (this.selectEl && this.selectEl.nativeElement.value) {\n        this.model.searchCategory = this.selectEl.nativeElement.value;\n      }\n      this._onChange(this.model);\n    }\n  }\n\n  writeValue(value: any) {\n    if (value && this.model !== value) {\n      this.model = value;\n      this.cd.markForCheck();\n    } else {\n      this.model = {};\n      this.cd.markForCheck();\n    }\n  }\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  isInputVisible(): boolean {\n    return this.inputEl.nativeElement.getBoundingClientRect().width\n      ? true\n      : false;\n  }\n\n  setInputVisibleStyles() {\n    const inputWidth = this.calculateInputWidth();\n    this.inputEl.nativeElement.style.display = 'block';\n    this.inputEl.nativeElement.style.position = 'absolute';\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\n    this.inputEl.nativeElement.style.width = `${inputWidth}px`;\n    this.inputState.visible = true;\n  }\n\n  removeInputVisibleStyles() {\n    this.inputEl.nativeElement.style.display = '';\n    this.inputEl.nativeElement.style.position = '';\n    this.inputEl.nativeElement.style.left = '';\n    this.inputEl.nativeElement.style.width = '';\n    this.inputState.visible = false;\n  }\n\n  focusChange(event) {\n    if (event === null && !this.inputState.initial.visible) {\n      this.removeInputVisibleStyles();\n    }\n  }\n\n  calculateInputWidth(): number {\n    const buttonElement = this.buttonEl.nativeElement;\n    const inputElement = this.inputEl.nativeElement;\n    const rightPosition = buttonElement.getBoundingClientRect().left;\n    const leftPosition = this.parentSelector\n      ? inputElement.closest(this.parentSelector).getBoundingClientRect().left\n      : 0;\n    return Math.floor(rightPosition - leftPosition);\n  }\n  getClass() {\n    const cls =\n      this.searchSettings && this.searchSettings.size === 'large'\n        ? 'usa-search--big'\n        : 'usa-search--small';\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\n      ? `${cls} sds-inverse`\n      : cls;\n  }\n}\n",
            "properties": [
                {
                    "name": "dropdown",
                    "defaultValue": "{\n    placeholder: '-Select-',\n    options: [],\n    inverse: false\n  }",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 17,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "placeholder",
                    "defaultValue": "'Search'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 15,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "size",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 16,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SideNavigationModel",
            "id": "class-SideNavigationModel-21182fefec95af167a2b3367dbe1050f",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\nexport class SideNavigationModel {\n\n    /**\n     * \n     */\n    navigationLinks: NavigationLink[];\n}\n\n\nexport class NavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: NavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n\n\n    /**\n     * Query string paramaters supporeted with external and internal links\n     * ex. { 'name': 'value',...}\n     */\n    queryParams?: {\n        [k: string]: any;\n    }\n\n}\n\n\n\n\n",
            "properties": [
                {
                    "name": "navigationLinks",
                    "type": "NavigationLink[]",
                    "optional": false,
                    "description": "",
                    "line": 8
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
    "directives": [
        {
            "name": "CollapseDirective",
            "id": "directive-CollapseDirective-71f90cfbf9a60a80d4613d3df6cb8882",
            "file": "libs/packages/components/src/lib/collapse/collapse.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, HostBinding, Input } from '@angular/core';\n\n@Directive({\n  selector: '[sdsCollapse]',\n  exportAs: 'sdsCollapse',\n  host: {'[class.display-none]':'collapsed'}\n})\nexport class CollapseDirective {\n\n  @Input('sdsCollapse') collapsed: boolean = true;\n\n  constructor() {\n  }\n\n}\n",
            "selector": "[sdsCollapse]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsCollapse",
                    "defaultValue": "true",
                    "line": 10,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            }
        },
        {
            "name": "ExternalLinkDirective",
            "id": "directive-ExternalLinkDirective-fe45ae3e858ce344479d029a62f010da",
            "file": "libs/packages/components/src/lib/external-link/external-link.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Directive,\n  AfterViewChecked,\n  ElementRef,\n  Renderer2,\n  Input,\n  ComponentFactoryResolver,\n  ViewContainerRef,\n  OnChanges\n} from '@angular/core';\nimport { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';\nimport { FaIconComponent } from '@fortawesome/angular-fontawesome';\n@Directive({\n  selector: 'a[href]'\n})\nexport class ExternalLinkDirective\n  implements OnChanges {\n    private vcRef: ViewContainerRef;\n  @Input() href: string;\n  @Input() public hideIcon: boolean = false;\n\n \n  private get isExternalLink (): boolean {\n    return this.href.replace(/^https?:\\/\\//,'').replace(/^www\\./, '').split('/')[0] != location.hostname;\n  }\n\n  constructor (\n    private el: ElementRef,\n    private renderer: Renderer2, private cfr: ComponentFactoryResolver , private vc : ViewContainerRef) {   \n    }\n\n    public ngOnChanges () {\n    if (!this.isExternalLink){\n      return;\n    }\n    if (!this.hideIcon) {\n      this.createIcon();\n      \n    }\n  }\n \n  private createIcon () {\n    // tslint:disable-next-line:no-unused-expression\n    this.vc.constructor.name === \"ViewContainerRef_\";\n    const factory = this.cfr.resolveComponentFactory(FaIconComponent);\n    const component = this.vc.createComponent(factory);\n    component.instance.iconProp =  ['fas','external-link-alt'];\n    const spanElement = document.createElement('span');\n    spanElement.classList.add('margin-left-2px');\n    const supElement = document.createElement('sup');\n    supElement.appendChild(component.location.nativeElement);\n    spanElement.appendChild(supElement);\n    this.el.nativeElement.appendChild(spanElement);\n    component.instance.ngOnChanges({});\n  }\n \n}\n",
            "selector": "a[href]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "hideIcon",
                    "defaultValue": "false",
                    "line": 20,
                    "type": "boolean"
                },
                {
                    "name": "href",
                    "line": 19,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "vcRef",
                    "type": "ViewContainerRef",
                    "optional": false,
                    "description": "",
                    "line": 18,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "createIcon",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 42,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "ngOnChanges",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 32,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "implements": [
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver"
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 25,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "isExternalLink": {
                    "name": "isExternalLink",
                    "getSignature": {
                        "name": "isExternalLink",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 23
                    }
                }
            }
        },
        {
            "name": "SdsAccordionDirective",
            "id": "directive-SdsAccordionDirective-f472d2adde26141d0d31b2a7e5aa5887",
            "file": "libs/packages/components/src/lib/accordion/accordion.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Directive,\n  Input,\n  ContentChildren,\n  QueryList,\n  AfterContentInit\n} from \"@angular/core\";\n\nimport { CdkAccordion } from \"@angular/cdk/accordion\";\nimport { FocusKeyManager } from \"@angular/cdk/a11y\";\nimport { HOME, END } from \"@angular/cdk/keycodes\";\nimport {\n  SDS_ACCORDION,\n  SdsAccordionBase,\n  SdsAccordionDisplayMode\n} from \"./accordion-base\";\nimport { SdsAccordionItemHeaderComponent } from \"./accordion-item-header.component\";\n\n@Directive({\n  selector: \"sds-accordion\",\n  exportAs: \"sdsAccordion\",\n  inputs: [\"multi\"],\n  providers: [\n    {\n      provide: SDS_ACCORDION,\n      useExisting: SdsAccordionDirective\n    }\n  ],\n  host: {\n    'class': 'sds-accordion',\n    '[class.sds-accordion--basic]': 'displayMode === \"basic\"',\n  }\n})\nexport class SdsAccordionDirective extends CdkAccordion\n  implements SdsAccordionBase, AfterContentInit {\n  private _keyManager: FocusKeyManager<SdsAccordionItemHeaderComponent>;\n\n  @ContentChildren(SdsAccordionItemHeaderComponent, { descendants: true })\n  _headers: QueryList<SdsAccordionItemHeaderComponent>;\n\n  @Input() displayMode: SdsAccordionDisplayMode = \"default\";\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager(this._headers).withWrap();\n  }\n\n  /** Handles keyboard events coming in from the item headers. */\n  _handleHeaderKeydown(event: KeyboardEvent) {\n    const { keyCode } = event;\n    if (keyCode === HOME) {\n      this._keyManager.setFirstItemActive();\n      event.preventDefault();\n    } else if (keyCode === END) {\n      this._keyManager.setLastItemActive();\n      event.preventDefault();\n    } else {\n      this._keyManager.onKeydown(event);\n    }\n  }\n\n  _handleHeaderFocus(header: SdsAccordionItemHeaderComponent) {\n    this._keyManager.updateActiveItem(header);\n  }\n}\n",
            "selector": "sds-accordion",
            "providers": [
                {
                    "name": "{\n    provide: SDS_ACCORDION, useExisting: SdsAccordionDirective\n}",
                    "type": "directive"
                }
            ],
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "\"default\"",
                    "line": 41,
                    "type": "SdsAccordionDisplayMode"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_headers",
                    "type": "QueryList<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsAccordionItemHeaderComponent, {descendants: true}"
                        }
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleHeaderFocus",
                    "args": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 61,
                    "jsdoctags": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_handleHeaderKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 48,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                }
            ],
            "implements": [
                "SdsAccordionBase",
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsAccordionItemContentDirective",
            "id": "directive-SdsAccordionItemContentDirective-49da46ff547e3e35e1e0080a0699f754",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-content.directive.ts",
            "type": "directive",
            "description": "<p>Accordion Item content that will be rendered lazily\nafter the accordion item is opened for the first time.</p>\n",
            "sourceCode": "import {Directive, TemplateRef} from '@angular/core';\n\n/**\n * Accordion Item content that will be rendered lazily\n * after the accordion item is opened for the first time.\n */\n@Directive({\n  selector: 'ng-template[sdsAccordionItemContent]'\n})\nexport class SdsAccordionItemContentDirective {\n  constructor(public _template: TemplateRef<any>) {}\n}\n",
            "selector": "ng-template[sdsAccordionItemContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_template",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 11,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>"
                    }
                ],
                "line": 10,
                "jsdoctags": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSClickOutsideDirective",
            "id": "directive-SDSClickOutsideDirective-3330dfea755a01908dc52dcf97422719",
            "file": "libs/packages/components/src/lib/click-outside/click-outside.directive.ts",
            "type": "directive",
            "description": "<p>The <sam-click-outside> directive can detect whether a click is made inside \nthe target</p>\n",
            "sourceCode": "import {\n  Directive, ElementRef,\n  Output, EventEmitter,\n  HostListener\n} from '@angular/core';\n\n/**\n * The <sam-click-outside> directive can detect whether a click is made inside \n * the target\n */\n@Directive({\n  selector: '[sds-click-outside]'\n})\nexport class SDSClickOutsideDirective {\n  /**\n  * Event emitted when clicked outside the target\n  */\n  @Output() clickOutside = new EventEmitter();\n\n  constructor(private _elementRef: ElementRef) { }\n\n  @HostListener('document:click', ['$event.target'])\n  public onClick(targetElement) {\n    const clickedInside =\n      this._elementRef.nativeElement.contains(targetElement);\n    if (!clickedInside) {\n      this.clickOutside.emit(undefined);\n    }\n  }\n}\n",
            "selector": "[sds-click-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "clickOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Event emitted when clicked outside the target</p>\n",
                    "line": 18,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:click",
                    "args": [
                        {
                            "name": "targetElement",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 23
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 18,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogActionsDirective",
            "id": "directive-SdsDialogActionsDirective-cb1ece29bdc266c0ee53de3641b696c6",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Container for the bottom action buttons in a dialog.\nStays fixed to the bottom when scrolling.</p>\n",
            "sourceCode": "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
            "selector": "[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogCloseDirective",
            "id": "directive-SdsDialogCloseDirective-cb1ece29bdc266c0ee53de3641b696c6",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Button that will close the current dialog.</p>\n",
            "sourceCode": "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
            "selector": "button[sds-dialog-close], button[sdsDialogClose]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "aria-label",
                    "description": "<p>Screenreader label for the button. </p>\n",
                    "line": 31,
                    "type": "string"
                },
                {
                    "name": "sds-dialog-close",
                    "description": "<p>Dialog close input. </p>\n",
                    "line": 34,
                    "type": "any"
                },
                {
                    "name": "sdsDialogClose",
                    "line": 36,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "dialogRef",
                    "type": "SdsDialogRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
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
                    "line": 54,
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
                    "line": 43
                }
            ],
            "implements": [
                "OnInit",
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 36,
                "jsdoctags": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogContentDirective",
            "id": "directive-SdsDialogContentDirective-cb1ece29bdc266c0ee53de3641b696c6",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Scrollable content container of a dialog.</p>\n",
            "sourceCode": "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
            "selector": "[sds-dialog-content], sds-dialog-content, [sdsDialogContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogSubtitleDirective",
            "id": "directive-SdsDialogSubtitleDirective-cb1ece29bdc266c0ee53de3641b696c6",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>SubTitle of a dialog element</p>\n",
            "sourceCode": "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
            "selector": "[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogTitleDirective",
            "id": "directive-SdsDialogTitleDirective-cb1ece29bdc266c0ee53de3641b696c6",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Title of a dialog element. Stays fixed to the top of the dialog when scrolling.</p>\n",
            "sourceCode": "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
            "selector": "[sds-dialog-title], [sdsDialogTitle]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "id",
                    "defaultValue": "`sds-dialog-title-${dialogElementUid++}`",
                    "line": 76
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 83
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 76,
                "jsdoctags": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsMenuTriggerForDirective",
            "id": "directive-SdsMenuTriggerForDirective-97cc0e5db4e572845050eea1e3279cf4",
            "file": "libs/packages/components/src/lib/menu/menu-trigger.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Directive,\n  ElementRef,\n  EventEmitter,\n  Input,\n  OnDestroy,\n  Output,\n  ViewContainerRef,\n  HostBinding,\n  HostListener,\n} from '@angular/core';\nimport {\n  FocusMonitor,\n  FocusOrigin,\n  isFakeMousedownFromScreenReader\n} from '@angular/cdk/a11y';\nimport {\n  FlexibleConnectedPositionStrategy,\n  HorizontalConnectionPos,\n  Overlay,\n  OverlayConfig,\n  OverlayRef,\n  VerticalConnectionPos\n} from '@angular/cdk/overlay';\nimport { TemplatePortal } from '@angular/cdk/portal';\nimport { normalizePassiveListenerOptions } from '@angular/cdk/platform';\nimport { merge, Subscription } from 'rxjs';\nimport {\n  SdsMenuInterface,\n  SdsMenuComponent,\n  MenuPositionX,\n  MenuPositionY\n} from './menu.component';\n\n@Directive({\n  selector: '[sdsMenuTriggerFor]'\n})\nexport class SdsMenuTriggerForDirective implements OnDestroy {\n  /** ARIA haspopup for the menu trigger. */\n  @HostBinding('attr.aria-haspopup') ariaHasPopup = true;\n\n  /** ARIA expanded for the menu trigger. */\n  @HostBinding('attr.aria-expanded')\n  get menuOpen(): boolean {\n    return this._menuOpen;\n  }\n\n  /** Holds the menu instance */\n  private _menu: SdsMenuInterface;\n\n  /** Holds value for menuOpen variable */\n  private _menuOpen = false;\n\n  /** CDK Portal for menu panel */\n  private _portal: TemplatePortal;\n\n  /** PortalOutlet */\n  private _overlayRef: OverlayRef | null = null;\n\n  /** Tracks input type  */\n  private _openedBy: 'mouse' | 'touch' | null = null;\n\n  private _closingActionsSubscription = Subscription.EMPTY;\n  private _menuCloseSubscription = Subscription.EMPTY;\n\n  /** References the menu instance that the trigger is associated with. */\n  @Input('sdsMenuTriggerFor')\n  get menu() {\n    return this._menu;\n  }\n  set menu(menu: SdsMenuInterface) {\n    if (menu === this._menu) {\n      return;\n    }\n    this._menu = menu;\n    this._menuCloseSubscription.unsubscribe();\n\n    if (menu) {\n      this._menuCloseSubscription = menu.closed.asObservable().subscribe(() => {\n        this._destroyMenu();\n      });\n    }\n  }\n\n  /** Event emitted when the associated menu is opened. */\n  @Output() menuOpened: EventEmitter<void> = new EventEmitter<void>();\n\n  /** Event emitted when the associated menu is closed. */\n  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();\n\n  /** Handles mouse presses on the trigger. */\n  @HostListener('mousedown', ['$event'])\n  _handleMousedown(event: MouseEvent): void {\n    if (!isFakeMousedownFromScreenReader(event)) {\n      // Since right or middle button clicks won't trigger the `click` event,\n      // we shouldn't consider the menu as opened by mouse in those cases.\n      this._openedBy = event.button === 0 ? 'mouse' : null;\n    }\n  }\n\n  /** Toggles the menu between the open and closed states. */\n  @HostListener('click')\n  toggleMenu(): void {\n    return this._menuOpen ? this.closeMenu() : this.openMenu();\n  }\n\n  constructor(\n    private _overlay: Overlay,\n    private _element: ElementRef<HTMLElement>,\n    private _viewContainerRef: ViewContainerRef,\n    private _focusMonitor: FocusMonitor\n  ) {\n    // On touch devices set _openedBy to 'touch'\n    _element.nativeElement.addEventListener(\n      'touchstart',\n      () => (this._openedBy = 'touch'),\n      normalizePassiveListenerOptions({ passive: true })\n    );\n  }\n\n  ngOnDestroy() {\n    if (this._overlayRef) {\n      this._overlayRef.dispose();\n      this._overlayRef = null;\n    }\n\n    this._element.nativeElement.removeEventListener(\n      'touchstart',\n      () => (this._openedBy = 'touch'),\n      normalizePassiveListenerOptions({ passive: true })\n    );\n\n    this._menuCloseSubscription.unsubscribe();\n    this._closingActionsSubscription.unsubscribe();\n  }\n\n  /** Opens the menu. */\n  openMenu(): void {\n    if (this._menuOpen) {\n      return;\n    }\n    const overlayRef = this._createOverlay();\n    const overlayConfig = overlayRef.getConfig();\n    this._setPosition(\n      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy\n    );\n    overlayRef.attach(this._getPortal());\n    this._closingActionsSubscription = this._menuClosingActions().subscribe(\n      () => this.closeMenu()\n    );\n    this._initMenu();\n    if (this.menu instanceof SdsMenuComponent) {\n      this.menu._startAnimation();\n    }\n  }\n\n  /** Closes the menu. */\n  closeMenu(): void {\n    this.menu.closed.emit();\n  }\n\n  /** Focuses the menu trigger. */\n  focus(origin: FocusOrigin = 'program'): void {\n    this._focusMonitor.focusVia(this._element, origin);\n  }\n\n  /** This method sets the menu state to open and focuses the first item */\n  private _initMenu(): void {\n    this._setIsMenuOpen(true);\n    this.menu.focusFirstItem(this._openedBy || 'program');\n  }\n\n  /** sets open state */\n  private _setIsMenuOpen(isOpen: boolean): void {\n    this._menuOpen = isOpen;\n    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();\n  }\n\n  /**\n   * This method resets the menu when it's closed,\n   * most importantly restoring focus to the menu trigger\n   */\n  private _resetMenu(): void {\n    this._setIsMenuOpen(false);\n\n    if (!this._openedBy) {\n      this.focus();\n    } else {\n      this.focus(this._openedBy);\n    }\n\n    this._openedBy = null;\n  }\n\n  /** Closes the menu and does the necessary cleanup. */\n  private _destroyMenu() {\n    if (!this._overlayRef || !this.menuOpen) {\n      return;\n    }\n\n    this._closingActionsSubscription.unsubscribe();\n\n    this._overlayRef.detach();\n\n    if (this.menu instanceof SdsMenuComponent) {\n      this.menu._resetAnimation();\n      this._resetMenu();\n    }\n    \n  }\n\n  /**\n   * This method creates the overlay from the provided menu's template and saves its\n   * OverlayRef so that it can be attached to the DOM when openMenu is called.\n   */\n  private _createOverlay(): OverlayRef {\n    if (!this._overlayRef) {\n      const config = this._getOverlayConfig();\n      this._subscribeToPositions(\n        config.positionStrategy as FlexibleConnectedPositionStrategy\n      );\n      this._overlayRef = this._overlay.create(config);\n      this._overlayRef.keydownEvents().subscribe();\n    }\n    return this._overlayRef;\n  }\n\n  /**\n   * This method builds the configuration object needed to create the overlay, the OverlayState.\n   * @returns OverlayConfig\n   */\n  private _getOverlayConfig(): OverlayConfig {\n    return new OverlayConfig({\n      positionStrategy: this._overlay\n        .position()\n        .flexibleConnectedTo(this._element)\n        .withLockedPosition()\n        .withTransformOriginOn('.sds-overlay'),\n      hasBackdrop: true,\n      backdropClass: 'cdk-overlay-transparent-backdrop',\n      scrollStrategy: this._overlay.scrollStrategies.reposition()\n    });\n  }\n\n  /**\n   * Listens to changes in the position of the overlay and sets the correct classes\n   * on the menu based on the new position.\n   */\n  private _subscribeToPositions(\n    position: FlexibleConnectedPositionStrategy\n  ): void {\n    position.positionChanges.subscribe(change => {\n      const posX: MenuPositionX =\n        change.connectionPair.overlayX === 'start' ? 'after' : 'before';\n      const posY: MenuPositionY =\n        change.connectionPair.overlayY === 'top' ? 'below' : 'above';\n\n      this.menu.setPositionClasses(posX, posY);\n    });\n  }\n\n  /**\n   * Sets the appropriate positions on a position strategy\n   * so the overlay connects with the trigger correctly.\n   */\n  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {\n    const [originX, originFallbackX]: HorizontalConnectionPos[] =\n      this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];\n\n    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =\n      this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];\n\n    let [originY, originFallbackY] = [overlayY, overlayFallbackY];\n    const [overlayX, overlayFallbackX] = [originX, originFallbackX];\n    const offsetY = 0;\n\n    if (!this.menu.overlapTrigger) {\n      originY = overlayY === 'top' ? 'bottom' : 'top';\n      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';\n    }\n\n    // Positions from most to least desirable\n    positionStrategy.withPositions([\n      { originX, originY, overlayX, overlayY, offsetY },\n      {\n        originX: originFallbackX,\n        originY,\n        overlayX: overlayFallbackX,\n        overlayY,\n        offsetY\n      },\n      {\n        originX,\n        originY: originFallbackY,\n        overlayX,\n        overlayY: overlayFallbackY,\n        offsetY: -offsetY\n      },\n      {\n        originX: originFallbackX,\n        originY: originFallbackY,\n        overlayX: overlayFallbackX,\n        overlayY: overlayFallbackY,\n        offsetY: -offsetY\n      }\n    ]);\n  }\n\n  /** Returns a stream that emits whenever an action that should close the menu occurs. */\n  private _menuClosingActions() {\n    const backdrop = this._overlayRef.backdropClick();\n    const detachments = this._overlayRef.detachments();\n    return merge(backdrop, detachments);\n  }\n\n  /** Gets the portal that should be attached to the overlay. */\n  private _getPortal(): TemplatePortal {\n    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {\n      this._portal = new TemplatePortal(\n        this.menu.templateRef,\n        this._viewContainerRef\n      );\n    }\n    return this._portal;\n  }\n}\n",
            "selector": "[sdsMenuTriggerFor]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsMenuTriggerFor",
                    "description": "<p>References the menu instance that the trigger is associated with. </p>\n",
                    "line": 68
                }
            ],
            "outputsClass": [
                {
                    "name": "menuClosed",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is closed. </p>\n",
                    "line": 89,
                    "type": "EventEmitter<void>"
                },
                {
                    "name": "menuOpened",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is opened. </p>\n",
                    "line": 86,
                    "type": "EventEmitter<void>"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.aria-expanded",
                    "description": "<p>ARIA expanded for the menu trigger. </p>\n",
                    "line": 44,
                    "type": "boolean"
                },
                {
                    "name": "attr.aria-haspopup",
                    "defaultValue": "true",
                    "description": "<p>ARIA haspopup for the menu trigger. </p>\n",
                    "line": 40
                }
            ],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Toggles the menu between the open and closed states. </p>\n",
                    "line": 103
                },
                {
                    "name": "mousedown",
                    "args": [
                        {
                            "name": "event",
                            "type": "MouseEvent"
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "description": "<p>Handles mouse presses on the trigger. </p>\n",
                    "line": 93
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menu",
                    "type": "SdsMenuInterface",
                    "optional": false,
                    "description": "<p>Holds the menu instance </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuCloseSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds value for menuOpen variable </p>\n",
                    "line": 52,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openedBy",
                    "defaultValue": "null",
                    "type": "\"mouse\" | \"touch\" | null",
                    "optional": false,
                    "description": "<p>Tracks input type  </p>\n",
                    "line": 61,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 58,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>CDK Portal for menu panel </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 216,
                    "description": "<p>This method creates the overlay from the provided menu&#39;s template and saves its\nOverlayRef so that it can be attached to the DOM when openMenu is called.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_destroyMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 196,
                    "description": "<p>Closes the menu and does the necessary cleanup. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 232,
                    "description": "<p>This method builds the configuration object needed to create the overlay, the OverlayState.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "tagName": {
                                "pos": 6181,
                                "end": 6188,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>OverlayConfig</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getPortal",
                    "args": [],
                    "optional": false,
                    "returnType": "TemplatePortal",
                    "typeParameters": [],
                    "line": 317,
                    "description": "<p>Gets the portal that should be attached to the overlay. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_initMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168,
                    "description": "<p>This method sets the menu state to open and focuses the first item </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 310,
                    "description": "<p>Returns a stream that emits whenever an action that should close the menu occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_resetMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183,
                    "description": "<p>This method resets the menu when it&#39;s closed,\nmost importantly restoring focus to the menu trigger</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_setIsMenuOpen",
                    "args": [
                        {
                            "name": "isOpen",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174,
                    "description": "<p>sets open state </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "isOpen",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setPosition",
                    "args": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 266,
                    "description": "<p>Sets the appropriate positions on a position strategy\nso the overlay connects with the trigger correctly.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_subscribeToPositions",
                    "args": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 249,
                    "description": "<p>Listens to changes in the position of the overlay and sets the correct classes\non the menu based on the new position.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "closeMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Closes the menu. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Focuses the menu trigger. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
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
                    "line": 121
                },
                {
                    "name": "openMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Opens the menu. </p>\n"
                }
            ],
            "implements": [
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    }
                ],
                "line": 105,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "menu": {
                    "name": "menu",
                    "setSignature": {
                        "name": "menu",
                        "type": "void",
                        "args": [
                            {
                                "name": "menu",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 71,
                        "jsdoctags": [
                            {
                                "name": "menu",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsObserveWidthDirective",
            "id": "directive-SdsObserveWidthDirective-7148f6c2b90a7c6061b4c4ff44090e81",
            "file": "libs/packages/components/src/lib/observers/observe-width.directive.ts",
            "type": "directive",
            "description": "<p>Directive that triggers a callback whenever the width of\nits associated element has changed.</p>\n",
            "sourceCode": "import {\n  Directive,\n  Output,\n  EventEmitter,\n  ElementRef,\n  OnInit,\n  OnDestroy\n} from '@angular/core';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { startWith } from 'rxjs/operators';\nimport { Subscription } from 'rxjs';\n\n/**\n * Directive that triggers a callback whenever the width of\n * its associated element has changed.\n */\n@Directive({ selector: '[sdsObserveWidth]' })\nexport class SdsObserveWidthDirective implements OnInit, OnDestroy {\n  /** Event emitted for each change in the element's width. */\n  @Output('sdsObserveWidth') elementWidth = new EventEmitter<number>();\n\n  /** Subscription to window resize stream */\n  windowResize$: Subscription;\n\n  constructor(\n    private _elementRef: ElementRef<HTMLElement>,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngOnInit() {\n    this.windowResize$ = this.viewportRuler\n      .change(0)\n      .pipe(startWith(this._getElementWidth()))\n      .subscribe(() => this._emitEvent());\n  }\n\n  ngOnDestroy() {\n    this.windowResize$.unsubscribe();\n  }\n\n  _emitEvent() {\n    const width = this._getElementWidth();\n    this.elementWidth.emit(width);\n  }\n\n  _getElementWidth(): number {\n    return this._elementRef.nativeElement.offsetWidth;\n  }\n}\n",
            "selector": "[sdsObserveWidth]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "sdsObserveWidth",
                    "defaultValue": "new EventEmitter<number>()",
                    "description": "<p>Event emitted for each change in the element&#39;s width. </p>\n",
                    "line": 20,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 23
                }
            ],
            "methodsClass": [
                {
                    "name": "_emitEvent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 41
                },
                {
                    "name": "_getElementWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 46
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 23,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsPopupDirective",
            "id": "directive-SdsPopupDirective-f90e258a1339ca9bbf2c49725c31b0e5",
            "file": "libs/packages/components/src/lib/popup/popup.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, Input, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';\n\n\n@Directive({\n  selector: '[sdsPopup]',\n  exportAs: 'sdsPopup'\n})\nexport class SdsPopupDirective implements AfterViewInit {\n  @Input() sdsPopup: HTMLElement;\n  @Input() position: string;\n  @Input() placement: string;\n  sdsPopupDiv: HTMLElement;\n\n  constructor(private el: ElementRef, private renderer: Renderer2) {\n    this.renderer.addClass(this.el.nativeElement, 'sds-popup');\n    this.sdsPopupDiv = document.createElement('div');\n    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');\n  }\n\n\n  ngAfterViewInit() {\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopup);\n    this.renderer.addClass(this.sdsPopupDiv, this.placement);\n    this.renderer.addClass(this.sdsPopupDiv, this.position);\n    this.renderer.appendChild(this.sdsPopupDiv, this.el.nativeElement.children[0]);\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);\n  }\n}\n",
            "selector": "[sdsPopup]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "placement",
                    "line": 11,
                    "type": "string"
                },
                {
                    "name": "position",
                    "line": 10,
                    "type": "string"
                },
                {
                    "name": "sdsPopup",
                    "line": 9,
                    "type": "HTMLElement"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "sdsPopupDiv",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "",
                    "line": 12
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 21
                }
            ],
            "implements": [
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    }
                ],
                "line": 12,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSTabOutsideDirective",
            "id": "directive-SDSTabOutsideDirective-b3f19222ac9324a35928c2f49ee140f0",
            "file": "libs/packages/components/src/lib/tab-outside/taboutside.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Directive, ElementRef, Output,\n  EventEmitter, HostListener\n} from '@angular/core';\n\n\n@Directive({\n  selector: '[sds-tab-outside]'\n})\nexport class SDSTabOutsideDirective {\n  /**\n   * Emitter for tabOutside event\n   */\n  @Output() tabOutside: EventEmitter<any> = new EventEmitter();\n\n  constructor(private _elementRef: ElementRef) { }\n\n  @HostListener('document:keyup', ['$event.target'])\n  public hasFocusChanged(target) {\n    const isInsideHost = this._elementRef.nativeElement.contains(target);\n    if (!isInsideHost) {\n      this.tabOutside.emit(undefined);\n    }\n  }\n}\n",
            "selector": "[sds-tab-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "tabOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Emitter for tabOutside event</p>\n",
                    "line": 14,
                    "type": "EventEmitter<any>"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:keyup",
                    "args": [
                        {
                            "name": "target",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 19
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 14,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsToolbarExpandDirective",
            "id": "directive-SdsToolbarExpandDirective-c6913009548411e7fd6803737d530c6f",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-expand.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, ElementRef, Input, Renderer2, OnInit } from \"@angular/core\";\nimport { SdsToolbarComponent } from \"./toolbar.component\";\n\n@Directive({\n  selector: \"[sdsToolbarExpand]\"\n})\nexport class SdsToolbarExpandDirective implements OnInit {\n  /** Width of the toolbar while expanded. */\n  _expandedWidth: string;\n\n  /** References the toolbar instance that the element its associated with. */\n  @Input(\"sdsToolbarExpand\")\n  get toolbar() {\n    return this._toolbar;\n  }\n  set toolbar(toolbar: SdsToolbarComponent) {\n    if (toolbar === this._toolbar) {\n      return;\n    }\n    this._toolbar = toolbar;\n    /** Sets toolbar expanded width */\n\n    this._expandedWidth = this._toolbar.expandedSpace;\n  }\n  private _toolbar: SdsToolbarComponent;\n\n  constructor(private renderer: Renderer2, private _element: ElementRef) { }\n  ngOnInit() {\n    this.setStyle(this.toolbar.expanded);\n    this.toolbar.expandedChange.subscribe(value => {\n      this.setStyle(value);\n    });\n  }\n\n  private setStyle(value: any) {\n    if (value) {\n      this.renderer.setStyle(this._element.nativeElement, \"margin-left\", `${this._expandedWidth}`);\n    }\n    else {\n      this.renderer.removeStyle(this._element.nativeElement, \"margin-left\");\n    }\n  }\n}\n",
            "selector": "[sdsToolbarExpand]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsToolbarExpand",
                    "description": "<p>References the toolbar instance that the element its associated with. </p>\n",
                    "line": 13
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_expandedWidth",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Width of the toolbar while expanded. </p>\n",
                    "line": 9
                },
                {
                    "name": "_toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 25,
                    "modifierKind": [
                        112
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
                    "line": 28
                },
                {
                    "name": "setStyle",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 35,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    }
                ],
                "line": 25,
                "jsdoctags": [
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "toolbar": {
                    "name": "toolbar",
                    "setSignature": {
                        "name": "toolbar",
                        "type": "void",
                        "args": [
                            {
                                "name": "toolbar",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 16,
                        "jsdoctags": [
                            {
                                "name": "toolbar",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsTruncateTextByLineDirective",
            "id": "directive-SdsTruncateTextByLineDirective-a427ef32fe5697c69962e187aa71fc2c",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Directive,\n  ElementRef,\n  OnInit,\n  Input,\n  OnDestroy,\n  AfterViewInit,\n  HostListener,\n  Injector,\n  ViewContainerRef\n} from '@angular/core';\nimport { coerceNumberProperty } from '@angular/cdk/coercion';\nimport {\n  ViewportRuler,\n  OverlayConfig,\n  Overlay,\n  OverlayRef,\n  ConnectedPosition\n} from '@angular/cdk/overlay';\nimport { Subscription, merge } from 'rxjs';\nimport { startWith } from 'rxjs/operators';\nimport { PortalInjector, ComponentPortal } from '@angular/cdk/portal';\nimport { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\n\n@Directive({ selector: '[sdsTruncateTextByLine]' })\nexport class SdsTruncateTextByLineDirective\n  implements OnInit, OnDestroy, AfterViewInit {\n  /** Maximum lines of text limit */\n  @Input('sdsTruncateTextByLine')\n  get textLinesLimit(): any {\n    return this._textLinesLimit;\n  }\n  set textLinesLimit(_textLinesLimit: any) {\n    _textLinesLimit = coerceNumberProperty(_textLinesLimit);\n    if (this._textLinesLimit !== _textLinesLimit) {\n      this._textLinesLimit = _textLinesLimit;\n    }\n  }\n  private _textLinesLimit: number;\n\n  /** PortalOutlet */\n  private _overlayRef: OverlayRef | null = null;\n\n  /** Holds subscription to stream of overlay closing events */\n  private _closingActionsSubscription = Subscription.EMPTY;\n\n  /** Holds initial text */\n  private initialText: string;\n\n  /** Subscription to window resize stream */\n  windowResize$: Subscription;\n\n  /** Approximated character width of the host text */\n  private approximatedCharacterWidth: number;\n\n  constructor(\n    private _overlay: Overlay,\n    private _injector: Injector,\n    private _element: ElementRef,\n    private _viewportRuler: ViewportRuler,\n    private _viewContainerRef: ViewContainerRef\n  ) {}\n\n  ngOnInit() {\n    this.initialText = this._element.nativeElement.innerText.trim();\n\n    // Clone element to facilitate calculations\n    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;\n\n    // Add 1 character to calculate character width\n    hostCloneEl.innerHTML = 'x';\n\n    // Render the clone to get character width\n    this._element.nativeElement.parentElement.appendChild(hostCloneEl);\n\n    // Set the clone to inline to prevent cases where the clone\n    // expands to 100% width of the container\n    hostCloneEl.setAttribute('style', 'display: inline');\n\n    // These are close approximations that are used to better guess\n    // how many characters fit in X number of lines\n    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;\n\n    // Remove clone after calculations\n    hostCloneEl.remove();\n  }\n\n  ngAfterViewInit(): void {\n    this.windowResize$ = this._viewportRuler\n      .change(0)\n      .pipe(startWith('Start'))\n      .subscribe(() => this.updateUI());\n  }\n\n  ngOnDestroy(): void {\n    if (this._overlayRef) {\n      this._overlayRef.dispose();\n    }\n    this._closingActionsSubscription.unsubscribe();\n    this.windowResize$.unsubscribe();\n  }\n\n  /** Configures and creates the CDK overlay */\n  private _createOverlay() {\n    const overlayPositions: ConnectedPosition = {\n      originX: 'start',\n      originY: 'bottom',\n      overlayX: 'start',\n      overlayY: 'top'\n    };\n    const config = new OverlayConfig({\n      positionStrategy: this._overlay\n        .position()\n        .flexibleConnectedTo(this._element)\n        .withLockedPosition()\n        .withPositions([overlayPositions])\n        .withTransformOriginOn('.sds-overlay'),\n      hasBackdrop: true,\n      backdropClass: 'cdk-overlay-transparent-backdrop',\n      scrollStrategy: this._overlay.scrollStrategies.close()\n    });\n    return this._overlay.create(config);\n  }\n\n  /** Attach a ComponentPortal to the overlay **/\n  private _attachContainer(overlay: OverlayRef) {\n    const injector = new PortalInjector(\n      this._injector,\n      new WeakMap([[SDS_TRUNCATED_TEXT_DATA, { text: this.initialText }]])\n    );\n    const containerPortal = new ComponentPortal(\n      SdsTruncatedTextContainerComponent,\n      this._viewContainerRef,\n      injector\n    );\n    const containerRef = overlay.attach(containerPortal);\n\n    return containerRef.instance;\n  }\n\n  /** Returns a stream that emits whenever an action that should close the overlay occurs. */\n  private _overlayClosingActions() {\n    const backdrop = this._overlayRef.backdropClick();\n    const detachments = this._overlayRef.detachments();\n    return merge(backdrop, detachments);\n  }\n\n  /** Width of host element */\n  private _getHostWidth(): number {\n    return this._element.nativeElement.offsetWidth;\n  }\n\n  /** Approximated number of characters that are visible in the container */\n  private _getVisibleCharacters(): number {\n    return Math.floor(\n      (this._getHostWidth() / this.approximatedCharacterWidth) *\n        this.textLinesLimit\n    );\n  }\n\n  private _isNotLongEnough(): boolean {\n    return this._getVisibleCharacters() > this.initialText.length;\n  }\n\n  @HostListener('click')\n  openOverlay(): void {\n    // Exit if all text can be visible in container\n    if (this._isNotLongEnough()) return;\n\n    this._overlayRef = this._createOverlay();\n    const container = this._attachContainer(this._overlayRef);\n    this._closingActionsSubscription = this._overlayClosingActions().subscribe(\n      () => this.closeOverlay()\n    );\n    // Wait for the next event loop tick to start the animation\n    setTimeout(() => {\n      container.startAnimation();\n    });\n  }\n\n  updateUI() {\n    // Exit if all text can be visible in container\n    if (this._isNotLongEnough()) return;\n\n    const wordCut = false;\n    const ellipsis = '...';\n    const limit = this._getVisibleCharacters() - ellipsis.length;\n\n    let visibleText = this.initialText.slice(0, limit);\n\n    if (!wordCut) {\n      const isEndofWord = this.initialText.substr(limit, limit + 1) === ' ';\n      if (!isEndofWord) {\n        const previousWord = visibleText.lastIndexOf(' ');\n        visibleText = visibleText.slice(0, previousWord);\n      }\n    }\n\n    this._element.nativeElement.innerText = visibleText + ellipsis;\n  }\n\n  closeOverlay() {\n    this._closingActionsSubscription.unsubscribe();\n    this._overlayRef.detach();\n  }\n}\n",
            "selector": "[sdsTruncateTextByLine]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsTruncateTextByLine",
                    "description": "<p>Maximum lines of text limit </p>\n",
                    "line": 31,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "line": 167
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds subscription to stream of overlay closing events </p>\n",
                    "line": 46,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 43,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_textLinesLimit",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "approximatedCharacterWidth",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Approximated character width of the host text </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "initialText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Holds initial text </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 52
                }
            ],
            "methodsClass": [
                {
                    "name": "_attachContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Attach a ComponentPortal to the overlay *</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 105,
                    "description": "<p>Configures and creates the CDK overlay </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getHostWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 150,
                    "description": "<p>Width of host element </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getVisibleCharacters",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Approximated number of characters that are visible in the container </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_isNotLongEnough",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 162,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 143,
                    "description": "<p>Returns a stream that emits whenever an action that should close the overlay occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "closeOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 203
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 89
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 96
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 65
                },
                {
                    "name": "updateUI",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 182
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy",
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 55,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "textLinesLimit": {
                    "name": "textLinesLimit",
                    "setSignature": {
                        "name": "textLinesLimit",
                        "type": "void",
                        "args": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 34,
                        "jsdoctags": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        }
    ],
    "components": [
        {
            "name": "PaginationComponent",
            "id": "component-PaginationComponent-192096590a3fa1708b9b7bac4c3324f5",
            "file": "libs/packages/components/src/lib/pagination/pagination.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-pagination",
            "styleUrls": [
                "./pagination.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./pagination.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "page",
                    "defaultValue": "new PaginationModel()",
                    "description": "<p>Pagination model</p>\n",
                    "line": 40,
                    "type": "PaginationModel"
                },
                {
                    "name": "paginationConfiguration",
                    "description": "<p>configuration for the pagination</p>\n",
                    "line": 46,
                    "type": "PaginationConfigurationModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "pageChange",
                    "defaultValue": "new EventEmitter<PaginationModel>()",
                    "description": "<p>Output of the page model object</p>\n",
                    "line": 34,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "currentPageField",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Input field for the current page</p>\n",
                    "line": 28,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'currentPage'"
                        }
                    ]
                },
                {
                    "name": "debounceTime",
                    "defaultValue": "500",
                    "type": "number",
                    "optional": false,
                    "description": "<p>debounce time for current page input</p>\n",
                    "line": 52
                },
                {
                    "name": "options",
                    "defaultValue": "[\n    { label: '25', value: 25 },\n    { label: '50', value: 50 },\n    { label: '100', value: 100 }\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>Drop down options for page size</p>\n",
                    "line": 67,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "previousNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Stores the previous number</p>\n",
                    "line": 57,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>timeout id of the debounce time </p>\n",
                    "line": 62
                }
            ],
            "methodsClass": [
                {
                    "name": "currentPageFocusOut",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>current page focus out will replace with previous valid if empty</p>\n"
                },
                {
                    "name": "handleInputOutsideBounds",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 123,
                    "description": "<p>adjusts the value if not within the page limit above or below</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2832,
                                "end": 2840,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 2826,
                                "end": 2831,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>handles</p>\n"
                        }
                    ]
                },
                {
                    "name": "maintainPreviousValue",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 21,
                    "description": "<p>Stores the previous number. Used when focus out if field empty</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "nextPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 87,
                    "description": "<p>next page increase page number by one within range</p>\n"
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 11
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 148,
                    "description": "<p>page size selection change</p>\n"
                },
                {
                    "name": "previousPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "description": "<p>previous page lowers page number by one within range</p>\n"
                },
                {
                    "name": "valuechange",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 99,
                    "description": "<p>current page changes sets new value if within range</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2118,
                                "end": 2126,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 2112,
                                "end": 2117,
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
            "sourceCode": "import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';\nimport { PaginationConfigurationModel, PaginationModel } from './model/paginationModel';\n\n@Component({\n  selector: 'sds-pagination',\n  templateUrl: './pagination.component.html',\n  styleUrls: ['./pagination.component.scss']\n})\nexport class PaginationComponent implements OnInit {\n\n  ngOnInit(): void {\n    this.maintainPreviousValue();\n  }\n\n  constructor(private change: ChangeDetectorRef) { }\n\n\n  /**\n   * Stores the previous number. Used when focus out if field empty\n   */\n  private maintainPreviousValue() {\n    this.previousNumber = this.page.pageNumber.valueOf();\n  }\n\n  /**\n   * Input field for the current page\n   */\n  @ViewChild('currentPage') currentPageField: ElementRef;\n\n  /**\n   * Output of the page model object\n   */\n  @Output()\n  pageChange = new EventEmitter<PaginationModel>();\n\n  /**\n   * Pagination model\n   */\n  @Input()\n  page: PaginationModel = new PaginationModel();\n\n  /**\n   * configuration for the pagination\n   */\n  @Input()\n  paginationConfiguration: PaginationConfigurationModel;\n\n\n  /**\n   * debounce time for current page input\n   */\n  debounceTime: number = 500;\n\n  /**\n   * Stores the previous number\n   */\n  private previousNumber: number;\n\n  /**\n   * timeout id of the debounce time \n   */\n  timeoutNumber: number;\n\n  /**\n   * Drop down options for page size\n   */\n  public options = [\n    { label: '25', value: 25 },\n    { label: '50', value: 50 },\n    { label: '100', value: 100 }\n  ];\n\n  /**\n   * previous page lowers page number by one within range\n   */\n  previousPage() {\n    if (this.page.pageNumber > 1) {\n      this.page.pageNumber--;\n      this.maintainPreviousValue();\n      this.pageChange.emit(this.page);\n    }\n  }\n\n  /**\n   * next page increase page number by one within range\n   */\n  nextPage() {\n    if (this.page.pageNumber < this.page.totalPages) {\n      this.page.pageNumber++;\n      this.maintainPreviousValue();\n      this.pageChange.emit(this.page);\n    }\n  }\n\n  /**\n   * current page changes sets new value if within range\n   * @param newValue \n   */\n  valuechange(newValue?: number) {\n    window.clearTimeout(this.timeoutNumber);\n    this.timeoutNumber = window.setTimeout(() => {\n      if (newValue || newValue === 0) {\n        newValue = this.handleInputOutsideBounds(newValue);\n        if (newValue >= 1 && newValue <= this.page.totalPages) {\n          this.page.pageNumber = newValue;\n          this.maintainPreviousValue();\n          this.pageChange.emit(this.page);\n          this.change.detectChanges();\n        }\n      } else {\n\n        if (this.page.pageNumber) {\n          this.maintainPreviousValue();\n        }\n      }\n    }, this.debounceTime);\n  }\n\n  /**\n   * adjusts the value if not within the page limit above or below\n   * @param newValue handles\n   */\n  private handleInputOutsideBounds(newValue?: number) {\n    if (newValue < 1) {\n      newValue = 1;\n      this.currentPageField.nativeElement.value = newValue;\n    }\n    else if (newValue > this.page.totalPages) {\n      newValue = this.page.totalPages;\n      this.currentPageField.nativeElement.value = newValue;\n    }\n    return newValue;\n  }\n\n  /**\n   * current page focus out will replace with previous valid if empty\n   */\n  currentPageFocusOut() {\n    if (this.currentPageField.nativeElement.value === '') {\n      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;\n      this.change.detectChanges();\n    }\n  }\n\n  /**\n   * page size selection change\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.pageChange.emit(this.page);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* Hide HTML5 Up and Down arrows. */\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n \ninput[type=\"number\"] {\n    -moz-appearance: textfield;\n}",
                    "styleUrl": "./pagination.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 13,
                "jsdoctags": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-pagination\">\n  <div class=\"sds-pagination__controls\">\n    <button [attr.id]=\"paginationConfiguration.id +'-previousPage'\" (click)=\"previousPage()\">Previous Page</button>\n    <label class=\"usa-label font-sans-3xs margin-top-1 text-italic text-base usa-sr-only\"\n      [attr.for]=\"paginationConfiguration.id + '-currentPage'\">Current Page</label>\n    <input [attr.id]=\"paginationConfiguration.id +'-currentPage'\"\n      class=\"usa-input height-3 width-4 line-height-05 font-sans-3xs text-center border-base-light\" #currentPage\n      (ngModelChange)=\"valuechange($event)\" [(ngModel)]=\"page.pageNumber\" type=\"number\" min=\"1\"\n      [(attr.max)]=\"page.totalPages\" (focusout)=\"currentPageFocusOut()\" aria-label=\"current page\" />\n    <span class=\"sds-pagination__total\">\n      of <strong>{{ page.totalPages }}</strong>\n    </span>\n    <button [attr.id]=\"paginationConfiguration.id +'-nextPage'\" (click)=\"nextPage()\">Next Page</button>\n  </div>\n  <div class=\"sds-pagination__results\">\n    <label class=\"usa-label font-sans-3xs text-italic text-base\"\n      [attr.for]=\"paginationConfiguration.id + '-select'\">Results per page</label>\n    <select class=\"usa-select usa-select--small border-base-light\" [attr.id]=\"paginationConfiguration.id + '-select'\"\n      (change)=\"onSelectChange()\" [(ngModel)]=\"page.pageSize\">\n      <option *ngFor=\"let item of options\" [ngValue]=\"item.value\">\n        {{ item.label }}\n      </option>\n    </select>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-98185092fcc8b74ccd547f6ae38e3da5",
            "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsAccordionItem",
            "host": {},
            "inputs": [
                "disabled",
                "expanded"
            ],
            "outputs": [
                "opened",
                "closed",
                "expandedChange"
            ],
            "providers": [],
            "selector": "sds-accordion-item",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "accordion-item.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "afterCollapse",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s collapse animation happens. </p>\n",
                    "line": 61,
                    "type": "EventEmitter"
                },
                {
                    "name": "afterExpand",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s expansion animation happens. </p>\n",
                    "line": 58,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_animationMode",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 89,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        },
                        {
                            "name": "Inject",
                            "stringifiedArguments": "ANIMATION_MODULE_TYPE"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_body",
                    "type": "ElementRef<HTMLElement>",
                    "optional": false,
                    "description": "<p>Element containing the accordion item&#39;s user-provided content. </p>\n",
                    "line": 73,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'body'"
                        }
                    ]
                },
                {
                    "name": "_bodyAnimationDone",
                    "defaultValue": "new Subject<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream of body animation done events. </p>\n",
                    "line": 82
                },
                {
                    "name": "_document",
                    "type": "Document",
                    "optional": false,
                    "description": "",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-accordion-item-header-${uniqueId++}`",
                    "type": "",
                    "optional": false,
                    "description": "<p>ID for the associated header element. Used for a11y labelling. </p>\n",
                    "line": 79
                },
                {
                    "name": "_inputChanges",
                    "defaultValue": "new Subject<SimpleChanges>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream that emits for changes in <code>@Input</code> properties. </p>\n",
                    "line": 64,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_lazyContent",
                    "type": "SdsAccordionItemContentDirective",
                    "optional": false,
                    "description": "<p>Content that will be rendered lazily. </p>\n",
                    "line": 70,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsAccordionItemContentDirective"
                        }
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>Portal holding the user&#39;s content. </p>\n",
                    "line": 76
                },
                {
                    "name": "accordion",
                    "type": "SdsAccordionBase",
                    "optional": false,
                    "description": "<p>Optionally defined accordion the accordion item belongs to. </p>\n",
                    "line": 67
                }
            ],
            "methodsClass": [
                {
                    "name": "_containsFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Checks whether the accordion item&#39;s content contains the currently-focused element. </p>\n"
                },
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsAccordionItemState",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
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
                    "line": 127,
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
                    "line": 131
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {AnimationEvent} from '@angular/animations';\nimport { CdkAccordionItem } from \"@angular/cdk/accordion\";\nimport {UniqueSelectionDispatcher} from '@angular/cdk/collections';\nimport {TemplatePortal} from '@angular/cdk/portal';\nimport {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ContentChild,\n  EventEmitter,\n  ElementRef,\n  Inject,\n  OnChanges,\n  OnDestroy,\n  Optional,\n  Output,\n  SimpleChanges,\n  SkipSelf,\n  ViewContainerRef,\n  ViewEncapsulation,\n  ViewChild\n} from \"@angular/core\";\nimport {DOCUMENT} from '@angular/common';\nimport {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';\nimport {Subject} from 'rxjs';\nimport {filter, startWith, take, distinctUntilChanged} from 'rxjs/operators';\nimport {sdsExpansionAnimations} from './accordion-animations';\nimport {SdsAccordionItemContentDirective} from './accordion-item-content.directive';\nimport {SDS_ACCORDION, SdsAccordionBase} from './accordion-base';\n\n/** Accordion Item's states. */\nexport type SdsAccordionItemState = 'expanded' | 'collapsed';\n\n/** Counter for generating unique element ids. */\nlet uniqueId = 0;\n\n@Component({\n  selector: \"sds-accordion-item\",\n  exportAs: \"sdsAccordionItem\",\n  templateUrl: \"accordion-item.component.html\",\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  inputs: ['disabled', 'expanded'],\n  outputs: ['opened', 'closed', 'expandedChange'],\n  animations: [sdsExpansionAnimations.bodyExpansion],\n  host: {\n    'class': 'sds-accordion__item',\n    '[class.sds-accordion__item--expanded]': 'expanded',\n    '[class._sds-animation-noopable]': '_animationMode === \"NoopAnimations\"'\n  }\n})\nexport class SdsAccordionItemComponent extends CdkAccordionItem\n  implements AfterContentInit, OnChanges, OnDestroy {\n  private _document: Document;\n\n  /** An event emitted after the body's expansion animation happens. */\n  @Output() afterExpand = new EventEmitter<void>();\n\n  /** An event emitted after the body's collapse animation happens. */\n  @Output() afterCollapse = new EventEmitter<void>();\n\n  /** Stream that emits for changes in `@Input` properties. */\n  readonly _inputChanges = new Subject<SimpleChanges>();\n\n  /** Optionally defined accordion the accordion item belongs to. */\n  accordion: SdsAccordionBase;\n\n  /** Content that will be rendered lazily. */\n  @ContentChild(SdsAccordionItemContentDirective) _lazyContent: SdsAccordionItemContentDirective;\n\n  /** Element containing the accordion item's user-provided content. */\n  @ViewChild('body') _body: ElementRef<HTMLElement>;\n\n  /** Portal holding the user's content. */\n  _portal: TemplatePortal;\n\n  /** ID for the associated header element. Used for a11y labelling. */\n  _headerId = `sds-accordion-item-header-${uniqueId++}`;\n\n  /** Stream of body animation done events. */\n  _bodyAnimationDone = new Subject<AnimationEvent>();\n\n  constructor(@Optional() @SkipSelf() @Inject(SDS_ACCORDION) accordion: SdsAccordionBase,\n              _changeDetectorRef: ChangeDetectorRef,\n              _uniqueSelectionDispatcher: UniqueSelectionDispatcher,\n              private _viewContainerRef: ViewContainerRef,\n              @Inject(DOCUMENT) _document: any,\n              @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {\n    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);\n    this.accordion = accordion;\n    this._document = _document;\n\n    // We need a Subject with distinctUntilChanged, because the `done` event\n    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084\n    this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {\n      return x.fromState === y.fromState && x.toState === y.toState;\n    })).subscribe(event => {\n      if (event.fromState !== 'void') {\n        if (event.toState === 'expanded') {\n          this.afterExpand.emit();\n        } else if (event.toState === 'collapsed') {\n          this.afterCollapse.emit();\n        }\n      }\n    });\n  }\n\n  /** Gets the expanded state string. */\n  _getExpandedState(): SdsAccordionItemState {\n    return this.expanded ? 'expanded' : 'collapsed';\n  }\n\n  ngAfterContentInit() {\n    if (this._lazyContent) {\n      // Render the content as soon as the accordion item becomes open.\n      this.opened.pipe(\n        startWith(null!),\n        filter(() => this.expanded && !this._portal),\n        take(1)\n      ).subscribe(() => {\n        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);\n      });\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    this._inputChanges.next(changes);\n  }\n\n  ngOnDestroy() {\n    super.ngOnDestroy();\n    this._bodyAnimationDone.complete();\n    this._inputChanges.complete();\n  }\n\n  /** Checks whether the accordion item's content contains the currently-focused element. */\n  _containsFocus(): boolean {\n    if (this._body) {\n      const focusedElement = this._document.activeElement;\n      const bodyElement = this._body.nativeElement;\n      return focusedElement === bodyElement || bodyElement.contains(focusedElement);\n    }\n\n    return false;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_animationMode",
                        "type": "string"
                    }
                ],
                "line": 82,
                "jsdoctags": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_animationMode",
                        "type": "string",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "CdkAccordionItem",
            "implements": [
                "AfterContentInit",
                "OnChanges",
                "OnDestroy"
            ],
            "templateData": "<ng-content select=\"sds-accordion-item-header\"></ng-content>\n<div\n  class=\"sam-accordion__panel\"\n  role=\"region\"\n  [@bodyExpansion]=\"_getExpandedState()\"\n  (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n  [attr.aria-labelledby]=\"_headerId\"\n  [id]=\"id\"\n  #body\n>\n  <div class=\"sds-accordion__panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsAccordionItemHeaderComponent",
            "id": "component-SdsAccordionItemHeaderComponent-83ae9453f6503be121c0955b6fcbe7bc",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-header.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-item-header",
            "styleUrls": [
                "./accordion-item-header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./accordion-item-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_parentChangeSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "accordionItem",
                    "type": "SdsAccordionItemComponent",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getAccordionItemId",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 80,
                    "description": "<p>Gets the accordion item id. </p>\n"
                },
                {
                    "name": "_isExpanded",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets whether the accordion item is expanded. </p>\n"
                },
                {
                    "name": "_keydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 85,
                    "description": "<p>Handle keydown event calling to toggle() if appropriate. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the accordion item. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Focuses the item header. Implemented as a part of <code>FocusableOption</code>.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3158,
                                "end": 3164,
                                "flags": 0,
                                "escapedText": "origin"
                            },
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\"",
                            "tagName": {
                                "pos": 3152,
                                "end": 3157,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Origin of the action that triggered the focus.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { FocusMonitor, FocusableOption, FocusOrigin } from \"@angular/cdk/a11y\";\nimport { ENTER, SPACE, hasModifierKey } from \"@angular/cdk/keycodes\";\nimport {\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ElementRef,\n  Host,\n  OnDestroy,\n  ViewEncapsulation\n} from \"@angular/core\";\nimport { merge, Subscription } from \"rxjs\";\nimport { filter } from \"rxjs/operators\";\nimport { SdsAccordionItemComponent } from \"./accordion-item.component\";\n\n@Component({\n  selector: \"sds-accordion-item-header\",\n  templateUrl: \"./accordion-item-header.component.html\",\n  styleUrls:['./accordion-item-header.component.scss'],\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: \"sds-accordion__trigger\",\n    role: \"button\",\n    \"[attr.id]\": \"accordionItem._headerId\",\n    \"[attr.tabindex]\": \"disabled ? -1 : 0\",\n    \"[attr.aria-controls]\": \"_getAccordionItemId()\",\n    \"[attr.aria-expanded]\": \"_isExpanded()\",\n    \"[attr.aria-disabled]\": \"accordionItem.disabled\",\n    \"(click)\": \"_toggle()\",\n    \"(keydown)\": \"_keydown($event)\"\n  }\n})\nexport class SdsAccordionItemHeaderComponent implements OnDestroy, FocusableOption {\n  private _parentChangeSubscription = Subscription.EMPTY;\n  constructor(\n    @Host() public accordionItem: SdsAccordionItemComponent,\n    private _element: ElementRef,\n    private _focusMonitor: FocusMonitor,\n    private _changeDetectorRef: ChangeDetectorRef\n  ) {\n\n    // Since the toggle state depends on an @Input on the accordion item, we\n    // need to subscribe and trigger change detection manually.\n    this._parentChangeSubscription = merge(\n      accordionItem.opened,\n      accordionItem.closed,\n      accordionItem._inputChanges.pipe(\n        filter(changes => !!(changes[\"disabled\"]))\n      )\n    ).subscribe(() => this._changeDetectorRef.markForCheck());\n\n    _focusMonitor.monitor(_element).subscribe(origin => {\n      if (origin && accordionItem.accordion) {\n        accordionItem.accordion._handleHeaderFocus(this);\n      }\n    });\n\n  }\n\n  /**\n   * Whether the associated accordion item is disabled. \n   * Implemented as a part of `FocusableOption`.\n   */\n  get disabled() {\n    return this.accordionItem.disabled;\n  }\n\n  /** Toggles the expanded state of the accordion item. */\n  _toggle(): void {\n    this.accordionItem.toggle();\n  }\n\n  /** Gets whether the accordion item is expanded. */\n  _isExpanded(): boolean {\n    return this.accordionItem.expanded;\n  }\n\n  /** Gets the accordion item id. */\n  _getAccordionItemId(): string {\n    return this.accordionItem.id;\n  }\n\n  /** Handle keydown event calling to toggle() if appropriate. */\n  _keydown(event: KeyboardEvent) {\n    switch (event.keyCode) {\n      // Toggle for space and enter keys.\n      case SPACE:\n      case ENTER:\n        if (!hasModifierKey(event)) {\n          event.preventDefault();\n          this._toggle();\n        }\n\n        break;\n      default:\n        if (this.accordionItem.accordion) {\n          this.accordionItem.accordion._handleHeaderKeydown(event);\n        }\n\n        return;\n    }\n  }\n\n  /**\n   * Focuses the item header. Implemented as a part of `FocusableOption`.\n   * @param origin Origin of the action that triggered the focus.\n   * @docs-private\n   */\n  focus(origin: FocusOrigin = \"program\") {\n    this._focusMonitor.focusVia(this._element, origin);\n  }\n\n  ngOnDestroy() {\n    this._parentChangeSubscription.unsubscribe();\n    this._focusMonitor.stopMonitoring(this._element);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./accordion-item-header.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnDestroy",
                "FocusableOption"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "getSignature": {
                        "name": "disabled",
                        "type": "",
                        "returnType": "",
                        "line": 65,
                        "description": "<p>Whether the associated accordion item is disabled. \nImplemented as a part of <code>FocusableOption</code>.</p>\n"
                    }
                }
            },
            "templateData": "<span class=\"sds-accordion__title\" role=\"heading\">\n  <span class=\"sds-accordion__title-text\">\n    <ng-content></ng-content>\n  </span>\n  <span class=\"sds-accordion__icon\"></span>\n</span>\n"
        },
        {
            "name": "SDSAutocompleteComponent",
            "id": "component-SDSAutocompleteComponent-85b586688a95b92a0eb02674db4655d1",
            "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-autocomplete",
            "styleUrls": [
                "./autocomplete.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the control</p>\n",
                    "line": 57,
                    "type": "SDSAutocompletelConfiguration"
                },
                {
                    "name": "selectedItemTemplate",
                    "description": "<p>Allow to insert a customized template for selected items</p>\n",
                    "line": 44,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 63,
                    "type": "SDSAutocompleteServiceInterface"
                },
                {
                    "name": "suggestionTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions results</p>\n",
                    "line": 39,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "disabled",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 51,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 49,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 76,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "getModel",
                    "args": [],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 110
                },
                {
                    "name": "isSingleMode",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 128
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 115,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 120,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 124,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateItems",
                    "args": [
                        {
                            "name": "$event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 99,
                    "jsdoctags": [
                        {
                            "name": "$event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 104
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 81,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
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
                    "name": "focusout",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 71
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  ViewChild,\n  TemplateRef,\n  ElementRef,\n  forwardRef,\n  HostListener,\n  ChangeDetectorRef,\n  ChangeDetectionStrategy\n} from '@angular/core';\nimport {\n  NG_VALUE_ACCESSOR,\n  ControlValueAccessor,\n  FormControl\n} from '@angular/forms';\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\nimport { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';\nimport { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';\nimport { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';\n\nconst Autocomplete_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n};\n\n@Component({\n  selector: 'sds-autocomplete',\n  templateUrl: './autocomplete.component.html',\n  styleUrls: ['./autocomplete.component.scss'],\n  providers: [Autocomplete_VALUE_ACCESSOR],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SDSAutocompleteComponent implements ControlValueAccessor {\n  /**\n   * Allow to insert a customized template for suggestions results\n   */\n  @Input() suggestionTemplate: TemplateRef<any>;\n\n  /**\n   * Allow to insert a customized template for selected items\n   */\n  @Input() selectedItemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel;\n\n  public disabled: boolean;\n\n  /**\n   * Configuration for the control\n   */\n  @Input()\n  public configuration: SDSAutocompletelConfiguration;\n\n  /**\n   * Instance of the SamHiercarchicalServiceInterface provided\n   */\n  @Input()\n  public service: SDSAutocompleteServiceInterface;\n\n  constructor(private cd: ChangeDetectorRef) { }\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  @HostListener('focusout')\n  public onTouched = () => { };\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onChange = (_: any) => { };\n\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\n  // If there is a value we will just overwrite items\n  // If there is no value we reset the items array to be empty\n  writeValue(value: any) {\n    if (value instanceof SDSSelectedItemModel && value.items && value.items.length && this.model.items !== value.items) {\n      this.model.items = [...value.items];\n      this.cd.markForCheck();\n    }\n    else if(value && value.length && this.model.items !== value) {\n      this.model.items = value;\n      this.cd.markForCheck();\n    } else {\n      if(!this.model || !(this.model instanceof SDSSelectedItemModel)) {\n        this.model = new SDSSelectedItemModel();\n      }\n      this.model.items = value && value.items ? value.items : [];\n      this.cd.markForCheck();\n    }\n  }\n\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\n  updateItems($event) {\n    this.updateModel();\n  }\n\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\n  updateModel() {\n    const model = this.getModel();\n    this.onChange(model);\n  }\n\n  // Helper method to return a new instance of an array that contains our items\n  getModel() {\n    return [...this.model.items];\n  }\n\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\n  registerOnChange(fn: any): void {\n    this.onChange = fn;\n  }\n\n  // ControlValueAccessor hook (not used)\n  registerOnTouched(fn: any) {\n    this.onTouched = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n\n  isSingleMode(): boolean {\n    if (this.configuration) {\n      return this.configuration.selectionMode === SelectionMode.SINGLE;\n    } else {\n      return false;\n    }\n  }\n}",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./autocomplete.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 63,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<sds-search-autocomplete [disabled]=\"disabled\" (ngModelChange)=\"updateItems($event)\" #autocomplete\n    [service]=\"service\" [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"suggestionTemplate\">\n</sds-search-autocomplete>\n<sds-selected-result (ngModelChange)=\"updateItems($event)\" [disabled]=\"disabled\" *ngIf=\"!isSingleMode()\"\n    [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"selectedItemTemplate\"></sds-selected-result>\n"
        },
        {
            "name": "SDSAutocompleteSearchComponent",
            "id": "component-SDSAutocompleteSearchComponent-8617f5a8143d448f62d754d6ca6c42be",
            "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-search-autocomplete",
            "styleUrls": [
                "./autocomplete-search.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete-search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Autocomplete control </p>\n",
                    "line": 48,
                    "type": "SDSAutocompleteSearchConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 122,
                    "type": "boolean"
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "description": "<p>To make input readonly</p>\n",
                    "line": 108
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 37,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 54,
                    "type": "SDSAutocompleteServiceInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "highlightedIndex",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "<p>selected index</p>\n",
                    "line": 74,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "highlightedItem",
                    "type": "object",
                    "optional": false,
                    "description": "<p>highlighted object in drop down</p>\n",
                    "line": 79,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "HighlightedPropertyName",
                    "defaultValue": "'highlighted'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Proprty being set on the object is highlighted</p>\n",
                    "line": 89,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "index",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 127,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "input",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>input control </p>\n",
                    "line": 31,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'input'"
                        }
                    ]
                },
                {
                    "name": "inputValue",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>value of the input field </p>\n",
                    "line": 84,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "maxResults",
                    "type": "number",
                    "optional": false,
                    "description": "<p>max number of results to be shown</p>\n",
                    "line": 69,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 113,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 118,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "results",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>result set to be rendered</p>\n",
                    "line": 64
                },
                {
                    "name": "resultsAvailableMessage",
                    "defaultValue": "' results available. Use up and down arrows\\\n  to scroll through results. Hit enter to select.'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 124,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "resultsListElement",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Ul list of elements </p>\n",
                    "line": 26,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'resultsList'"
                        }
                    ]
                },
                {
                    "name": "searchString",
                    "defaultValue": "null",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Search string</p>\n",
                    "line": 96,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "showLoad",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 91,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "showResults",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Determines if the dropdown should be shown</p>\n",
                    "line": 160,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "srOnlyText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Message announced by screen readers when\nautocomplete results are updated or new item\nis highlighted</p>\n",
                    "line": 103,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Timer id for the timer awaiting the service call for more typeing</p>\n",
                    "line": 59,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "addResult",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 447,
                    "description": "<p>adds a single item to the list</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12492,
                                "end": 12496,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 12486,
                                "end": 12491,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "addScreenReaderMessage",
                    "args": [
                        {
                            "name": "message",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 491,
                    "description": "<p>Adds message to be read by screen reader</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 13910,
                                "end": 13917,
                                "flags": 0,
                                "escapedText": "message"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 13904,
                                "end": 13909,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "checkForFocus",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 175,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4332,
                                "end": 4337,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 4326,
                                "end": 4331,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "clearAndHideResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 296,
                    "description": "<p>clears the results and closes result drop down</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "clearInput",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 165,
                    "description": "<p>Clears the input fields and value</p>\n",
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "createFreeTextItem",
                    "args": [],
                    "optional": false,
                    "returnType": "{ 'type': string; }",
                    "typeParameters": [],
                    "line": 358,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "focusRemoved",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183,
                    "description": "",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getAdditionalResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 431,
                    "description": "<p>gets more results based when scrolling and adds the items</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 133,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3326,
                                "end": 3332,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 3320,
                                "end": 3325,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 3346,
                                "end": 3360,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3340,
                                "end": 3345,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "getResults",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 369,
                    "description": "<p>gets the inital results</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 9789,
                                "end": 9801,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 9783,
                                "end": 9788,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "inputFocusHandler",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 221,
                    "description": "<p>Event method used when focus is gained to the input</p>\n"
                },
                {
                    "name": "listItemHover",
                    "args": [
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 409,
                    "description": "<p>highlights the index being hovered</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 11293,
                                "end": 11298,
                                "flags": 0,
                                "escapedText": "index"
                            },
                            "type": "number",
                            "tagName": {
                                "pos": 11287,
                                "end": 11292,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "matchPastSearchString",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 401,
                    "description": "<p>Checks if the new search string matches the old search string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 11107,
                                "end": 11119,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 11101,
                                "end": 11106,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onArrowDown",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 318,
                    "description": "<p>handles the arrow down key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onArrowUp",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 305,
                    "description": "<p>handles the arrow up key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 234,
                    "description": "<p>Key event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 5835,
                                "end": 5840,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 5829,
                                "end": 5834,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onkeypress",
                    "args": [
                        {
                            "name": "ev",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 202,
                    "jsdoctags": [
                        {
                            "name": "ev",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "onScroll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 417,
                    "description": "<p>Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)</p>\n"
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 509,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 513,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "scrollSelectedItemIntoView",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 455,
                    "description": "<p>When paging up and down with arrow key it sets the highlighted item into view</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 284,
                    "description": "<p>selects the item adding it to the model and closes the results</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 7305,
                                "end": 7309,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 7299,
                                "end": 7304,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 517,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setHighlightedItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "Object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 466,
                    "description": "<p>Sets the highlighted item by keyboard or mouseover</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 13074,
                                "end": 13078,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 13068,
                                "end": 13073,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "showFreeText",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 328
                },
                {
                    "name": "textChange",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 205,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 496,
                    "jsdoctags": [
                        {
                            "name": "obj",
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
            "sourceCode": "import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nimport { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';\nimport { KeyHelper, KEYS } from '../key-helper/key-helper';\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\nimport { SelectionMode, SDSSelectedItemModelHelper } from '../selected-result/models/sds-selected-item-model-helper';\nimport { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';\nconst Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true\n};\n\n@Component({\n  selector: 'sds-search-autocomplete',\n  templateUrl: './autocomplete-search.component.html',\n  styleUrls: ['./autocomplete-search.component.scss'],\n  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR]\n})\nexport class SDSAutocompleteSearchComponent implements ControlValueAccessor {\n\n  constructor(private _changeDetectorRef: ChangeDetectorRef) { }\n  /**\n   * Ul list of elements \n   */\n  @ViewChild('resultsList') resultsListElement: ElementRef;\n\n  /**\n   * input control \n   */\n  @ViewChild('input') input: ElementRef;\n\n\n  /**\n   * Allow to insert a customized template for suggestions to use\n   */\n  @Input() itemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel;\n\n  /**\n   * Configuration for the Autocomplete control \n   */\n  @Input()\n  public configuration: SDSAutocompleteSearchConfiguration;\n\n  /**\n   * Instance of the SamHiercarchicalServiceInterface provided\n   */\n  @Input()\n  public service: SDSAutocompleteServiceInterface;\n\n  /**\n   * Timer id for the timer awaiting the service call for more typeing\n   */\n  private timeoutNumber: number;\n\n  /**\n   *  result set to be rendered\n   */\n  results: object[];\n\n  /**\n   * max number of results to be shown\n   */\n  private maxResults: number;\n\n  /**\n   * selected index\n   */\n  public highlightedIndex: number = 0;\n\n  /**\n   * highlighted object in drop down\n   */\n  private highlightedItem: object;\n\n  /**\n   * value of the input field \n   */\n  public inputValue: string = '';\n\n  /**\n   * Proprty being set on the object is highlighted\n   */\n  private HighlightedPropertyName = 'highlighted';\n\n  public showLoad: boolean = true;\n\n  /**\n   * Search string\n   */\n  private searchString: string = null;\n\n  /**\n   * Message announced by screen readers when\n   * autocomplete results are updated or new item\n   * is highlighted\n   */\n  public srOnlyText: string;\n  \n  /**\n   * To make input readonly\n   */\n   @Input() public inputReadOnly = false;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onTouchedCallback: () => void = () => null;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public propogateChange: (_: any) => void = (_: any) => null;\n\n\n  @Input()\n  public disabled: boolean;\n\n  private resultsAvailableMessage: string = ' results available. Use up and down arrows\\\n  to scroll through results. Hit enter to select.';\n\n  private index = 0;\n  /**\n   * Gets the string value from the specifed properties of an object\n   * @param object \n   * @param propertyFields comma seperated list with periods depth of object\n   */\n  getObjectValue(object: Object, propertyFields: string): string {\n    let value = '';\n    let current = object;\n    let fieldSplit = propertyFields.split(',');\n    for (let i = 0; i < fieldSplit.length; i++) {\n      let fieldValue = fieldSplit[i];\n      let fieldPartSplit = fieldValue.split('.');\n      for (let j = 0; j < fieldPartSplit.length; j++) {\n        let fieldCheckValue = fieldPartSplit[j];\n        if (current) {\n          current = current[fieldCheckValue];\n        }\n      }\n\n      if (current) {\n        value += current.toString() + ' ';\n      }\n      current = object;\n    }\n    return value.trim();\n  }\n\n\n\n  /**\n   * Determines if the dropdown should be shown\n   */\n  public showResults = false;\n\n  /**\n   * Clears the input fields and value\n   */\n  public clearInput(): void {\n    this.inputValue = '';\n    this.onTouchedCallback();\n    this.clearAndHideResults();\n  }\n\n  /**\n   * \n   * @param event \n   */\n  checkForFocus(event): void {\n    this.focusRemoved();\n    this.showResults = false;\n  }\n\n  /**\n   * \n   */\n  private focusRemoved() {\n    if (this.configuration) {\n      if (this.configuration.selectionMode === SelectionMode.SINGLE) {\n        if (this.model.items.length > 0) {\n          if (this.inputValue.length === 0) {\n            SDSSelectedItemModelHelper.clearItems(this.model.items);\n            this.propogateChange(this.model);\n          } else {\n            this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);\n          }\n        }\n      } else {\n        this.inputValue = '';\n      }\n    } else {\n      this.inputValue = '';\n    }\n  }\n\n  onkeypress(ev) {\n    return this.configuration.inputReadOnly ? false: true;\n  }\n  textChange(event) {\n    if (!this.configuration.isTagModeEnabled) {\n    // ie 11 placeholders will incorrectly trigger input events (known bug)\n    // if input isn't active element then don't do anything\n    if (event.target != document.activeElement) {\n      event.preventDefault();\n      return;\n    }\n    const searchString = event.target.value || '';\n    this.getResults(searchString);\n  }\n}\n\n  /**\n   * Event method used when focus is gained to the input\n   */\n  inputFocusHandler(): void {\n    if (!this.configuration.isTagModeEnabled) {\n    if (this.configuration.focusInSearch) {\n      this.getResults(this.inputValue || '');\n    }\n    this.onTouchedCallback();\n  }\n}\n\n  /**\n   * Key event\n   * @param event \n   */\n  onKeydown(event): void {\n    if (KeyHelper.is(KEYS.TAB, event)) {\n      return;\n    } else if (KeyHelper.is(KEYS.BACKSPACE, event)) {\n      if(this.configuration.inputReadOnly){\n        event.preventDefault();\n      }\n    }\n    else if (KeyHelper.is(KEYS.DOWN, event)) {\n      this.onArrowDown();\n    }\n    else if (KeyHelper.is(KEYS.UP, event)) {\n      event.preventDefault();\n      this.onArrowUp();\n    }\n    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {\n    if (this.configuration.isTagModeEnabled) {\n      const item = {};\n      item[this.configuration.primaryKeyField] = this.index++;\n      item[this.configuration.primaryTextField] = this.inputValue;\n      SDSSelectedItemModelHelper.addItem(\n        item,\n        this.configuration.primaryKeyField,\n        this.configuration.selectionMode,\n        this.model.items\n      );\n      this.propogateChange(this.model);\n      this.focusRemoved();\n    } else {\n    this.selectItem(this.highlightedItem);\n     }\n    }\n    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {\n      const item = this.createFreeTextItem();\n      this.selectItem(item);\n    }\n    else if (KeyHelper.is(KEYS.ESC, event)) {\n      if (this.showResults) {\n        this.clearAndHideResults();\n        if (event.stopPropagation) {\n          event.stopPropagation();\n        }\n      }\n    }\n  }\n\n  /**\n   * selects the item adding it to the model and closes the results\n   * @param item \n   */\n  public selectItem(item: object): void {\n    SDSSelectedItemModelHelper.addItem(item, this.configuration.primaryKeyField, this.configuration.selectionMode, this.model.items);\n    this.propogateChange(this.model);\n    let message = this.getObjectValue(item, this.configuration.primaryTextField);\n    this.inputValue = message;\n    this.focusRemoved();\n    this.showResults = false;\n  }\n\n  /**\n   *  clears the results and closes result drop down\n   */\n  private clearAndHideResults(): void {\n    this.results = [];\n    this.showResults = false;\n    this.focusRemoved();\n  }\n\n  /**\n   *  handles the arrow up key event\n   */\n  private onArrowUp(): void {\n    if (this.results && this.results.length > 0) {\n      if (this.highlightedIndex >= 0) {\n        this.highlightedIndex--;\n        this.setHighlightedItem(this.results[this.highlightedIndex]);\n        this.scrollSelectedItemIntoView();\n      }\n    }\n  }\n\n  /**\n   *  handles the arrow down key event\n   */\n  private onArrowDown(): void {\n    if (this.results && this.results.length > 0) {\n      if (this.highlightedIndex < this.results.length - 1) {\n        this.highlightedIndex++;\n        this.setHighlightedItem(this.results[this.highlightedIndex]);\n        this.scrollSelectedItemIntoView();\n      }\n    }\n  }\n\n  showFreeText() {\n    if (this.configuration.isFreeTextEnabled) {\n      if (this.inputValue) {\n        if (this.inputValue.length !== 0) {\n          let foundItem = false;\n          if (this.results) {\n            for (var i = 0; i < this.results.length && !foundItem; i++) {\n              let item = this.results[i];\n              foundItem = item[this.configuration.primaryTextField] === this.inputValue;\n            }\n          }\n          if (this.model.items.length > 0 && !foundItem) {\n            for (var i = 0; i < this.model.items.length && !foundItem; i++) {\n              let item = this.model.items[i];\n              foundItem = item[this.configuration.primaryTextField] === this.inputValue;\n            }\n          }\n\n          return !foundItem;\n        } else {\n          return false;\n        }\n      } else {\n        return false;\n      }\n    } else {\n      return this.configuration.isFreeTextEnabled;\n    }\n  }\n\n  private createFreeTextItem() {\n    let item = { 'type': 'custom' };\n    item[this.configuration.primaryTextField] = this.inputValue;\n    item[this.configuration.primaryKeyField] = this.inputValue;\n    return item;\n  }\n\n  /**\n   *  gets the inital results\n   * @param searchString \n   */\n  private getResults(searchString: string): void {\n    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {\n      if (!this.matchPastSearchString(searchString) ||\n        (this.matchPastSearchString(searchString) && !this.showResults)\n        || this.matchPastSearchString('')) {\n        this.searchString = searchString;\n        window.clearTimeout(this.timeoutNumber);\n        this.timeoutNumber = window.setTimeout(() => {\n          this.showLoad = true;\n          this.service.getDataByText(0, searchString).subscribe(\n            (result) => {\n              this.results = result.items;\n              this.showLoad = false;\n              this.maxResults = result.totalItems;\n\n              this.highlightedIndex = this.configuration.isFreeTextEnabled ? -1 : 0;\n              if (!this.configuration.isFreeTextEnabled) {\n                this.setHighlightedItem(this.results[this.highlightedIndex]);\n              }\n              this.showResults = true;\n              this.addScreenReaderMessage(this.maxResults + ' ' + this.resultsAvailableMessage);\n              this._changeDetectorRef.markForCheck();\n            });\n        }, this.configuration.debounceTime);\n      }\n    }\n  }\n\n  /**\n   * Checks if the new search string matches the old search string\n   * @param searchString \n   */\n  private matchPastSearchString(searchString: string) {\n    return this.searchString === searchString;\n  }\n\n  /**\n   * highlights the index being hovered\n   * @param index \n   */\n  listItemHover(index: number): void {\n    this.highlightedIndex = index;\n    this.setHighlightedItem(this.results[this.highlightedIndex]);\n  }\n\n  /**\n   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)\n   */\n  onScroll() {\n    if (this.maxResults > this.results.length) {\n      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;\n      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;\n      let scrollAreaMaxHeight = this.resultsListElement.nativeElement.scrollHeight;\n      if ((scrollTopPos + scrollAreaHeight * 2) >= scrollAreaMaxHeight) {\n        this.getAdditionalResults();\n      }\n    }\n  }\n\n  /**\n   * gets more results based when scrolling and adds the items\n   */\n  private getAdditionalResults() {\n    this.showLoad = true;\n    this.service.getDataByText(this.results.length, this.searchString).subscribe(\n      (result) => {\n        for (let i = 0; i < result.items.length; i++) {\n          this.addResult(result.items[i]);\n        }\n        this.showLoad = false;\n        this.maxResults = result.totalItems;\n      });\n  }\n\n  /**\n   * adds a single item to the list\n   * @param item \n   */\n  private addResult(item: object) {\n    //add check to make sure item does not exist\n    this.results.push(item);\n  }\n\n  /**\n   * When paging up and down with arrow key it sets the highlighted item into view\n   */\n  private scrollSelectedItemIntoView() {\n    if (this.highlightedIndex >= 0) {\n      const selectedChild = this.resultsListElement.nativeElement.children[this.highlightedIndex];\n      selectedChild.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});\n    }\n  }\n\n  /**\n   * Sets the highlighted item by keyboard or mouseover\n   * @param item \n   */\n  private setHighlightedItem(item: Object): void {\n    if (this.results && this.results.length > 0) {\n      if (this.highlightedItem) {\n        this.highlightedItem[this.HighlightedPropertyName] = false;\n      }\n      let message = '';\n      if (item) {\n        this.highlightedItem = item;\n        this.highlightedItem[this.HighlightedPropertyName] = true;\n        message = item[this.configuration.primaryTextField];\n        if (this.configuration.secondaryTextField && item[this.configuration.secondaryTextField]) {\n          message += ': ' + item[this.configuration.secondaryTextField];\n        }\n      } else {\n        this.highlightedItem = undefined;\n        message = 'No item selected';\n      }\n      this.addScreenReaderMessage(message);\n    }\n  }\n\n  /**\n   * Adds message to be read by screen reader\n   * @param message \n   */\n  private addScreenReaderMessage(message: string) {\n    this.srOnlyText = message;\n  }\n\n\n  writeValue(obj: any): void {\n    if (obj instanceof SDSSelectedItemModel) {\n      this.model = obj as SDSSelectedItemModel;\n      if (this.model.items.length === 0) {\n        this.inputValue = '';\n      } else {\n        if (this.configuration.selectionMode === SelectionMode.SINGLE) {\n          this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);\n        }\n      }\n    }\n  }\n\n  registerOnChange(fn: any): void {\n    this.propogateChange = fn;\n  }\n\n  registerOnTouched(fn: any): void {\n    this.onTouchedCallback = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n}",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\n.grayToLightBackgroundGradiate{\n    background: linear-gradient(to right,#C4C4C4, #F7F7F7);\n    background-size: 400% 400%;\n    height: 10px;\n    padding: 2.5px 0 2.5px 0;\n    text-align:center;\n    color:#888888;\n    font-size:15px;\n    font-weight:bold;\n    margin: 7px 10px 0 10px;\n\n    -webkit-animation: gradiantShiftGray 5s ease infinite ;\n    -moz-animation: gradiantShiftGray 5s ease infinite  ;\n    animation: gradiantShiftGray 5s ease infinite;\n\n    @-webkit-keyframes gradiantShiftGray {\n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n    @-moz-keyframes gradiantShiftGray {\n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n    @keyframes gradiantShiftGray { \n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n}\n\n.lightToGrayBackgroundGradiate{\n\n    background: linear-gradient(to right,#F7F7F7,#C4C4C4);\n    background-size: 400% 400%;\n    height: 15px;\n    padding: 2.5px 0 2.5px 0;\n    text-align:center;\n    color:#888888;\n    font-size:15px;\n    font-weight:bold;\n    margin: 10px 10px 0 10px;\n\n    -webkit-animation: gradiantShift 5s ease infinite ;\n    -moz-animation: gradiantShift 5s ease infinite  ;\n    animation: gradiantShift 5s ease infinite;\n\n    @-webkit-keyframes gradiantShift {\n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n    @-moz-keyframes gradiantShift {\n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n    @keyframes gradiantShift { \n        0%{background-position:0% 50%}\n        50%{background-position:100% 50%}\n        100%{background-position:0% 50%}\n    }\n}\n\n.autoLoading{\n    height: 60px;\n}\n",
                    "styleUrl": "./autocomplete-search.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 20,
                "jsdoctags": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<div sds-click-outside (clickOutside)=\"checkForFocus($event)\" sds-tab-outside (tabOutside)=\"checkForFocus($event)\">\n  <div class=\"maxw-mobile-lg position-relative\">\n    <div role=\"combobox\" [attr.id]=\"configuration.id+'-container'\" [attr.aria-expanded]=\"showResults\" [attr.aria-owns]=\"showResults? configuration.id+ '-listbox' : undefined\"\n      aria-haspopup=\"listbox\">\n      <input [disabled]=\"disabled\" (keypress)=\"onkeypress($event)\" (input)=\"textChange($event)\" class=\"usa-input padding-right-3\"\n        #input [attr.aria-label]=\"configuration.ariaLabelText\" [attr.id]=\"configuration.id\" type=\"text\" (focus)=\"inputFocusHandler()\"\n        (keydown)=\"onKeydown($event)\" [(ngModel)]=\"inputValue\" aria-autocomplete=\"list\" [attr.placeholder]=\"configuration.autocompletePlaceHolderText\"\n        [attr.aria-activedescendant]=\"showResults? configuration.id+'-resultItem-'+highlightedIndex :''\"\n        [attr.aria-controls]=\"showResults? configuration.id+ '-listbox' : undefined\" autocomplete=\"off\">\n    </div>\n    <ul #resultsList *ngIf=\"showResults\" [attr.id]=\"configuration.id+ '-listbox'\" role=\"listbox\" class=\"usa-list usa-list--unstyled sds-autocomplete\"\n      (scroll)=\"onScroll()\">\n      <ng-container *ngIf=\"(results && results.length > 0)\">\n        <li [attr.id]=\"configuration.id+'-resultItem-'+i\" role=\"option\" *ngFor=\"let result of results; let i = index\"\n          (mouseenter)=\"listItemHover(i)\" [class]=\"result['highlighted'] ? 'sds-autocomplete__item sds-autocomplete__item--selected' : 'sds-autocomplete__item' \"\n          (click)=\"selectItem(result)\">\n          <ng-container *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{$implicit:result}\">\n          </ng-container>\n\n          <ng-container *ngIf=\"!itemTemplate\">\n            <span class=\"display-block text-semibold\">\n              {{ getObjectValue(result, configuration.primaryTextField) }}\n              <span *ngIf=\"result.type === 'custom'\">\n                - {{configuration.freeTextSubtext}}\n              </span>\n            </span>\n            <ng-container *ngIf=\"configuration.secondaryTextField &&  result[configuration.secondaryTextField] \">\n              <span class=\"description\">{{ result[configuration.secondaryTextField] }}</span>\n            </ng-container>\n          </ng-container>\n        </li>\n      </ng-container>\n      <ng-container *ngIf=\"(!results || results.length == 0)\">\n        <li class=\"emptyResults\">No results found</li>\n      </ng-container>\n      <ng-container *ngIf=\"showLoad\">\n        <li class=\"autoLoading\">\n          <div class=\"lightToGrayBackgroundGradiate\">\n\n          </div>\n          <div class=\"grayToLightBackgroundGradiate\">\n\n          </div>\n        </li>\n        <li class=\"autoLoading\">\n          <div class=\"lightToGrayBackgroundGradiate\">\n\n          </div>\n          <div class=\"grayToLightBackgroundGradiate\">\n\n          </div>\n        </li>\n      </ng-container>\n    </ul>\n\n    <ng-container *ngIf=\"!input.disabled\">\n      <span class=\"position-absolute right-105 top-1 cursor-pointer\">\n        <span *ngIf=\"inputValue\" tabindex=\"0\" role=\"button\" aria-label=\"Clear input\" aria-hidden=\"false\" (click)=\"clearInput()\"\n          (keyup.enter)=\"clearInput()\">\n          <fa-icon [icon]=\"['fas', 'times']\" size=\"xs\"></fa-icon>\n        </span>\n        <span *ngIf=\"!configuration.isTagModeEnabled\" tabindex=\"1\" role=\"button\" aria-label=\"Clear input\" aria-hidden=\"false\"\n          class=\"margin-left-1\">\n          <fa-icon *ngIf=\"!showResults\" (click)=\"inputFocusHandler()\" [icon]=\"['fas', 'caret-down']\" size=\"sm\"></fa-icon>\n          <fa-icon *ngIf=\"showResults\" (click)=\"checkForFocus($event)\" [icon]=\"['fas', 'caret-up']\" size=\"sm\"></fa-icon>\n        </span>\n      </span>\n    </ng-container>\n    <ul class=\"usa-sr-only\" aria-live=\"assertive\">\n      <li>{{srOnlyText}}</li>\n    </ul>\n  </div>"
        },
        {
            "name": "SdsDialogContainerComponent",
            "id": "component-SdsDialogContainerComponent-91bd96f8c86f08efeb7f772bd349f2ab",
            "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
            "changeDetection": "ChangeDetectionStrategy.Default",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-dialog-container",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "dialog-container.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_animationStateChanged",
                    "defaultValue": "new EventEmitter<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Emits when an animation state changes. </p>\n",
                    "line": 81
                },
                {
                    "name": "_ariaLabelledBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": false,
                    "description": "<p>ID of the element that should be considered as the dialog&#39;s label. </p>\n",
                    "line": 84
                },
                {
                    "name": "_config",
                    "type": "SdsDialogConfig",
                    "optional": false,
                    "description": "<p>The dialog configuration. </p>\n",
                    "line": 95,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_elementFocusedBeforeDialogWasOpened",
                    "defaultValue": "null",
                    "type": "HTMLElement | null",
                    "optional": false,
                    "description": "<p>Element that was focused before the dialog was opened. Save this to restore upon close. </p>\n",
                    "line": 75,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_focusTrap",
                    "type": "FocusTrap",
                    "optional": false,
                    "description": "<p>The class that traps and manages focus within the dialog. </p>\n",
                    "line": 72,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the container DOM element. </p>\n",
                    "line": 87
                },
                {
                    "name": "_portalOutlet",
                    "type": "CdkPortalOutlet",
                    "optional": false,
                    "description": "<p>The portal outlet inside of this container into which the dialog content will be loaded. </p>\n",
                    "line": 69,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "CdkPortalOutlet"
                        }
                    ]
                },
                {
                    "name": "_state",
                    "defaultValue": "'enter'",
                    "type": "\"void\" | \"enter\" | \"exit\"",
                    "optional": false,
                    "description": "<p>State of the dialog animation. </p>\n",
                    "line": 78
                }
            ],
            "methodsClass": [
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170,
                    "description": "<p>Callback, invoked whenever an animation on the host completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 181,
                    "description": "<p>Callback, invoked when an animation on the host starts. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_restoreFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 141,
                    "description": "<p>Restores focus to the element that was focused before the dialog opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_savePreviouslyFocusedElement",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Saves a reference to the element that was focused before the dialog was opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_startExitAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 186,
                    "description": "<p>Starts the dialog exit animation. </p>\n"
                },
                {
                    "name": "_trapFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Moves the focus inside the focus trap. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "attachComponentPortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "ComponentPortal<T>"
                        }
                    ],
                    "optional": false,
                    "returnType": "ComponentRef<T>",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 104,
                    "description": "<p>Attach a ComponentPortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3455,
                                "end": 3461,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "ComponentPortal<T>",
                            "tagName": {
                                "pos": 3449,
                                "end": 3454,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                },
                {
                    "name": "attachTemplatePortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "TemplatePortal<C>"
                        }
                    ],
                    "optional": false,
                    "returnType": "EmbeddedViewRef<C>",
                    "typeParameters": [
                        "C"
                    ],
                    "line": 117,
                    "description": "<p>Attach a TemplatePortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3881,
                                "end": 3887,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "TemplatePortal<C>",
                            "tagName": {
                                "pos": 3875,
                                "end": 3880,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "<p>Internal component that wraps user-provided dialog content.</p>\n",
            "rawdescription": "Internal component that wraps user-provided dialog content.",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  ComponentRef,\n  ElementRef,\n  EmbeddedViewRef,\n  EventEmitter,\n  Inject,\n  Optional,\n  ChangeDetectorRef,\n  ViewChild,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n} from '@angular/core';\nimport {DOCUMENT} from '@angular/common';\nimport {AnimationEvent} from '@angular/animations';\nimport {sdsDialogAnimations} from './dialog-animations';\nimport {\n  BasePortalOutlet,\n  ComponentPortal,\n  CdkPortalOutlet,\n  TemplatePortal\n} from '@angular/cdk/portal';\nimport {FocusTrap, FocusTrapFactory} from '@angular/cdk/a11y';\nimport {SdsDialogConfig} from './dialog-config';\n\n\n/**\n * Throws an exception for the case when a ComponentPortal is\n * attached to a DomPortalOutlet without an origin.\n * @docs-private\n */\nexport function throwSdsDialogContentAlreadyAttachedError() {\n  throw Error('Attempting to attach dialog content after content is already attached');\n}\n\n/**\n * Internal component that wraps user-provided dialog content.\n * @docs-private\n */\n@Component({\n  selector: 'sds-dialog-container',\n  templateUrl: 'dialog-container.component.html',\n  encapsulation: ViewEncapsulation.None,\n  // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.\n  // tslint:disable-next-line:validate-decorators\n  changeDetection: ChangeDetectionStrategy.Default,\n  animations: [sdsDialogAnimations.dialogContainer],\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    'class': 'sds-dialog__container',\n    '[class.sds-dialog--alert]': '_config.alert',\n    '[class.sds-dialog--alert-error]':'_config.alert === \"error\"',\n    '[class.sds-dialog--alert-warning]':'_config.alert === \"warning\"',\n    '[class.sds-dialog--alert-info]':'_config.alert === \"info\"',\n    'tabindex': '-1',\n    'aria-modal': 'true',\n    '[attr.id]': '_id',\n    '[attr.role]': '_config.role',\n    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',\n    '[attr.aria-label]': '_config.ariaLabel',\n    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',\n    '[@dialogContainer]': '_state',\n    '(@dialogContainer.start)': '_onAnimationStart($event)',\n    '(@dialogContainer.done)': '_onAnimationDone($event)',\n  },\n})\nexport class SdsDialogContainerComponent extends BasePortalOutlet {\n  /** The portal outlet inside of this container into which the dialog content will be loaded. */\n  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;\n\n  /** The class that traps and manages focus within the dialog. */\n  private _focusTrap: FocusTrap;\n\n  /** Element that was focused before the dialog was opened. Save this to restore upon close. */\n  private _elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;\n\n  /** State of the dialog animation. */\n  _state: 'void' | 'enter' | 'exit' = 'enter';\n\n  /** Emits when an animation state changes. */\n  _animationStateChanged = new EventEmitter<AnimationEvent>();\n\n  /** ID of the element that should be considered as the dialog's label. */\n  _ariaLabelledBy: string | null = null;\n\n  /** ID for the container DOM element. */\n  _id: string;\n\n  constructor(\n    private _elementRef: ElementRef,\n    private _focusTrapFactory: FocusTrapFactory,\n    private _changeDetectorRef: ChangeDetectorRef,\n    @Optional() @Inject(DOCUMENT) private _document: any,\n    /** The dialog configuration. */\n    public _config: SdsDialogConfig) {\n\n    super();\n  }\n\n  /**\n   * Attach a ComponentPortal as content to this dialog container.\n   * @param portal Portal to be attached as the dialog content.\n   */\n  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {\n    if (this._portalOutlet.hasAttached()) {\n      throwSdsDialogContentAlreadyAttachedError();\n    }\n\n    this._savePreviouslyFocusedElement();\n    return this._portalOutlet.attachComponentPortal(portal);\n  }\n\n  /**\n   * Attach a TemplatePortal as content to this dialog container.\n   * @param portal Portal to be attached as the dialog content.\n   */\n  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {\n    if (this._portalOutlet.hasAttached()) {\n      throwSdsDialogContentAlreadyAttachedError();\n    }\n\n    this._savePreviouslyFocusedElement();\n    return this._portalOutlet.attachTemplatePortal(portal);\n  }\n\n  /** Moves the focus inside the focus trap. */\n  private _trapFocus() {\n    if (!this._focusTrap) {\n      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);\n    }\n\n    // If were to attempt to focus immediately, then the content of the dialog would not yet be\n    // ready in instances where change detection has to run first. To deal with this, we simply\n    // wait for the microtask queue to be empty.\n    if (this._config.autoFocus) {\n      this._focusTrap.focusInitialElementWhenReady();\n    }\n  }\n\n  /** Restores focus to the element that was focused before the dialog opened. */\n  private _restoreFocus() {\n    const toFocus = this._elementFocusedBeforeDialogWasOpened;\n\n    // We need the extra check, because IE can set the `activeElement` to null in some cases.\n    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {\n      toFocus.focus();\n    }\n\n    if (this._focusTrap) {\n      this._focusTrap.destroy();\n    }\n  }\n\n  /** Saves a reference to the element that was focused before the dialog was opened. */\n  private _savePreviouslyFocusedElement() {\n    if (this._document) {\n      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement as HTMLElement;\n\n      // Note that there is no focus method when rendering on the server.\n      if (this._elementRef.nativeElement.focus) {\n        // Move focus onto the dialog immediately in order to prevent the user from accidentally\n        // opening multiple dialogs at the same time. Needs to be async, because the element\n        // may not be focusable immediately.\n        Promise.resolve().then(() => this._elementRef.nativeElement.focus());\n      }\n    }\n  }\n\n  /** Callback, invoked whenever an animation on the host completes. */\n  _onAnimationDone(event: AnimationEvent) {\n    if (event.toState === 'enter') {\n      this._trapFocus();\n    } else if (event.toState === 'exit') {\n      this._restoreFocus();\n    }\n\n    this._animationStateChanged.emit(event);\n  }\n\n  /** Callback, invoked when an animation on the host starts. */\n  _onAnimationStart(event: AnimationEvent) {\n    this._animationStateChanged.emit(event);\n  }\n\n  /** Starts the dialog exit animation. */\n  _startExitAnimation(): void {\n    this._state = 'exit';\n\n    // Mark the container for check so it can react if the\n    // view container is using OnPush change detection.\n    this._changeDetectorRef.markForCheck();\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "jsdoctags": [
                {
                    "pos": 956,
                    "end": 961,
                    "flags": 0,
                    "kind": 288,
                    "atToken": {
                        "pos": 956,
                        "end": 957,
                        "flags": 0,
                        "kind": 57
                    },
                    "tagName": {
                        "pos": 957,
                        "end": 961,
                        "flags": 0,
                        "escapedText": "docs"
                    },
                    "comment": "-private"
                }
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig"
                    }
                ],
                "line": 87,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "BasePortalOutlet",
            "templateData": "<button sds-dialog-close class=\"close-btn\">\n  <fa-icon [icon]=\"['fas', 'times']\"></fa-icon>\n</button>\n\n<!-- Alert Icons -->\n<div *ngIf=\"_config.alert\" [ngSwitch]=\"_config.alert\" class=\"sds-dialog-icon\">\n  <fa-icon *ngSwitchCase=\"'error'\" [icon]=\"['fas', 'ban']\" size=\"3x\"></fa-icon>\n  <fa-icon\n    *ngSwitchCase=\"'warning'\"\n    [icon]=\"['fas', 'exclamation-triangle']\"\n    size=\"3x\"\n  ></fa-icon>\n  <fa-icon\n    *ngSwitchCase=\"'info'\"\n    [icon]=\"['fas', 'info-circle']\"\n    size=\"3x\"\n  ></fa-icon>\n  <div *ngSwitchDefault>\n    Alert <em>{{ _config.alert }}</em> is not valid\n  </div>\n</div>\n\n<ng-template cdkPortalOutlet></ng-template>\n"
        },
        {
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-9e08477c235d1c2ba89094f1b7244093",
            "file": "libs/packages/components/src/lib/footer/footer.component.ts",
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
                    "line": 22,
                    "type": "boolean"
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
                                "pos": 869,
                                "end": 873,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 863,
                                "end": 868,
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
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { FooterModel } from './model/FooterModel';\nimport { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\n\n@Component({\n  selector: 'sds-footer',\n  templateUrl: './footer.component.html',\n  styleUrls: ['./footer.component.scss']\n})\nexport class SdsFooterComponent {\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the footer\n   */\n  @Input() model: FooterModel;\n  @Input() isCollapsedContent: boolean = true;\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer usa-footer--big\" role=\"contentinfo\">\n\n  <div class=\"sds-feedback\">\n    <button type=\"button\" class=\"sds-feedback__button\" [attr.aria-expanded]=\"!isCollapsedContent\" aria-controls=\"collapseID\" (click)=\"isCollapsedContent = !isCollapsedContent\">\n      <fa-layers [fixedWidth]=\"true\" size=\"2x\">\n        <fa-icon [icon]=\"['fas', 'circle']\" [sdsCollapse]=\"isCollapsedContent\" class=\"text-base-light margin-auto\"></fa-icon>\n        <fa-icon [icon]=\"['sds', 'arrow-up']\" [sdsCollapse]=\"isCollapsedContent\" transform=\"shrink-6\"></fa-icon>\n        <fa-icon [icon]=\"['fas', 'circle']\" [sdsCollapse]=\"!isCollapsedContent\" class=\"text-primary margin-auto\"></fa-icon>\n        <fa-icon [icon]=\"['sds', 'arrow-down']\" [sdsCollapse]=\"!isCollapsedContent\" transform=\"shrink-6\"></fa-icon>\n      </fa-layers>\n      <span class=\"sds-feedback__title\">Feedback</span>\n    </button>\n    <div id=\"collapseID\" [sdsCollapse]=\"isCollapsedContent\" class=\"sds-feedback__response\">\n      <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\n        <span class=\"sds-feedback__response-title\">One Question </span>\n        <span class=\"sds-feedback__response-title-thin\"> Survey</span>\n        <p class=\"sds-feedback__response-text\">What changes or improvements would you suggest?</p>\n        <input class=\"sds-feedback__input\" type=\"text\">\n        <button class=\"usa-button usa-button--secondary margin-y-2 float-right\">Submit</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"usa-footer__primary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-4\">\n          <div\n            class=\"usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3\"\n          >\n            <div\n              class=\"mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto\"\n            >\n              <img\n                *ngIf=\"model.footerLogo\"\n                class=\"usa-footer__logo-img\"\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\"\n              />\n              <a\n                *ngIf=\"!model.footerLogo\"\n                class=\"usa-footer__logo-text\"\n                target=\"_blank\"\n                href=\"http://gsa.gov\"\n              >\n                GSA.gov\n              </a>\n            </div>\n            <div class=\"mobile-lg:grid-col-4 tablet:grid-col-auto\">\n              <span class=\"usa-footer__logo-heading\">\n                {{\n                  model.footerLogo?.text || 'General Services Administration'\n                }}\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-8\">\n          <nav class=\"usa-footer__nav\">\n            <div class=\"grid-row grid-gap-4\">\n              <div\n                class=\"mobile-lg:grid-col-12 desktop:grid-col-4\"\n                *ngFor=\"let section of model.linkSections\"\n              >\n                <section\n                  class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\"\n                >\n                  <span class=\"usa-footer__primary-link\">{{\n                    section.text\n                  }}</span>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li\n                      class=\"usa-footer__secondary-link\"\n                      *ngFor=\"let link of section.links\"\n                    >\n                      <ng-container\n                        [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \"\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\n                      ></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row\">\n        <div class=\"grid-col-12\">\n          <p class=\"font-body-2xs line-height-sans-4 margin-top-0\">\n            This is a U.S. General Services Administration Federal Government\n            computer system that is\n            <strong>\"FOR OFFICIAL USE ONLY.\"</strong> This system is subject to\n            monitoring. Individuals found performing unauthorized activities are\n            subject to disciplinary action including criminal prosecution.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a [attr.href]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>\n"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-00970f2b0809c98c35ceb149ab6f8c2b",
            "file": "libs/packages/components/src/lib/header/header.component.ts",
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
                    "line": 28,
                    "type": "HeaderModel"
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 23,
                    "type": "boolean"
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "line": 30,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 144,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 13,
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
                    "line": 14
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 18
                },
                {
                    "name": "openNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 12,
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
                    "line": 172
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 71,
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
                    "line": 98,
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2565,
                                "end": 2567,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2559,
                                "end": 2564,
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
                    "line": 122,
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3170,
                                "end": 3172,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3164,
                                "end": 3169,
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
                    "line": 42,
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
                    "line": 150,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3869,
                                "end": 3873,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 3863,
                                "end": 3868,
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
                    "line": 183
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168
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
                    "line": 35,
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1121,
                                "end": 1125,
                                "flags": 0,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1115,
                                "end": 1120,
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
                    "line": 60,
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1640,
                                "end": 1642,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1634,
                                "end": 1639,
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
                    "line": 159
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';\nimport { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';\nimport { INavigationLink, NavigationMode, Selectable } from '../common-navigation/common-navigation-model';\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\n@Component({\n  selector: 'sds-header',\n  templateUrl: './header.component.html',\n  styleUrls: ['./header.component.scss']\n})\nexport class SdsHeaderComponent {\n\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\n  mobileNavActive = false;\n  /**\n  * Navigation helper\n  */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * determines if the top banner is shown\n   */\n  @Input() showTopBanner: boolean = true;\n\n  /**\n   * Model used for the different display portions of the header\n   */\n  @Input() model: HeaderModel;\n\n  @Input() topBannerDescription: string = '';\n  /**\n   * Takes in a text string and removes all white space characters and returns the new string\n   * @param text\n   */\n  removeWhiteSpace(text: string) {\n    return text.replace(/ /g, '');\n  }\n\n  /**\n   * seeif any secondary link has a counter\n   */\n  hasCounter(): boolean {\n    let hasCounter = false;\n    if (this.model) {\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          if (item.hasCounter) {\n            hasCounter = true;\n          }\n        });\n      }\n    }\n    return hasCounter;\n  }\n\n  /**\n   * Deselects previous seletion\n   * @param id\n   */\n  select(id: string) {\n    this.deselect();\n    let item = this.find(id);\n    if (item) {\n      item.selected = true;\n    }\n  }\n\n  /**\n   * Deselects all the items in the header model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.home) {\n        this.model.home.selected = false;\n      }\n      if (this.model.navigationLinks) {\n        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\n          item.selected = false;\n          if (item.children) {\n            item.children.forEach(function (child: HeaderNavigationLink) {\n              child.selected = false;\n            });\n          }\n        });\n      }\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          item.selected = false;\n        });\n      }\n    }\n  }\n\n  /**\n   * Finds the navigation element by id in the header model\n   * @param id of the navigation item\n   */\n  find(id: string): Selectable {\n    let toReturn = null;\n    if (this.model) {\n      if (this.model.home) {\n        if (this.model.home.id === id) {\n          toReturn = this.model.home;\n        }\n      }\n      toReturn = this.findNavigationLinks(id, toReturn);\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\n          if (item.id === id) {\n            toReturn = item;\n          }\n        });\n      }\n    }\n    return toReturn;\n  }\n\n  /**\n   * Searchs the items in the navigation links\n   * @param id\n   */\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\n    if (this.model.navigationLinks) {\n      this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\n        if (item.id === id) {\n          toReturn = item;\n        }\n        if (item.children) {\n          item.children.forEach(function (child: HeaderNavigationLink) {\n            if (child.id === id) {\n              toReturn = child;\n            }\n          });\n        }\n      });\n    }\n    return toReturn;\n  }\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  // When the mobile nav is active, and the close box isn't visible,\n  // we know the user's viewport has been resized to be larger.\n  // Let's make the page state consistent by deactivating the mobile nav.\n  @HostListener('window:resize', ['$event'])\n  onBrowserResize(event) {\n    if (\n      this.mobileNavActive &&\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\n    ) {\n      this.mobileNavActive = false;\n    }\n  }\n\n  openMobileNav() {\n    this.mobileNavActive = true;\n  }\n\n  closeMobileNav() {\n    this.mobileNavActive = false;\n    // The mobile nav was just deactivated, and focus was on the close\n    // button, which is no longer visible. We don't want the focus to\n    // disappear into the void, so focus on the menu button if it's\n    // visible (this may have been what the user was just focused on,\n    // if they triggered the mobile nav by mistake).\n    this.openNavBtn.nativeElement.focus();\n  }\n\n  // The mobile nav was just activated, so focus on the close button,\n  navAnimationEnd() {\n    this.closeNavBtn.nativeElement.focus();\n  }\n\n\n}\n",
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
            "name": "SdsMenuComponent",
            "id": "component-SdsMenuComponent-4050c302487b07002ba93aa66872433c",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsMenu",
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{ provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }",
                    "type": "component"
                }
            ],
            "selector": "sds-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "class",
                    "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                    "line": 143,
                    "type": "string"
                },
                {
                    "name": "overlapTrigger",
                    "description": "<p>Whether menu panel overlaps trigger element </p>\n",
                    "line": 133,
                    "type": "boolean"
                },
                {
                    "name": "size",
                    "description": "<p>Size of menu component.\nAffects the font-size of the menu items and\nthe size of the close button in the menu header</p>\n",
                    "line": 109,
                    "type": "MenuSizes"
                },
                {
                    "name": "xPosition",
                    "description": "<p>Position of the menu in the X axis. </p>\n",
                    "line": 113,
                    "type": "MenuPositionX"
                },
                {
                    "name": "yPosition",
                    "description": "<p>Position of the menu in the Y axis. </p>\n",
                    "line": 123,
                    "type": "MenuPositionY"
                }
            ],
            "outputsClass": [
                {
                    "name": "closed",
                    "defaultValue": "new EventEmitter<void | 'click' | 'keydown' | 'tab'>()",
                    "description": "<p>Event emitted when the menu is closed. </p>\n",
                    "line": 166,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_classList",
                    "defaultValue": "{}",
                    "type": "literal type",
                    "optional": false,
                    "description": "<p>Config object to be passed into the menu&#39;s ngClass </p>\n",
                    "line": 96
                },
                {
                    "name": "_items",
                    "defaultValue": "[]",
                    "type": "SdsMenuItemComponent[]",
                    "optional": false,
                    "description": "<p>Menu items inside the current menu. </p>\n",
                    "line": 87,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsMenuItemComponent>",
                    "optional": false,
                    "description": "<p>Manage browser focus </p>\n",
                    "line": 84,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlapTrigger",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 139,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_panelAnimationState",
                    "defaultValue": "'void'",
                    "type": "\"void\" | \"enter\"",
                    "optional": false,
                    "description": "<p>Current state of the panel animation. </p>\n",
                    "line": 99
                },
                {
                    "name": "_previousPanelClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Stores <sds-menu> classes </p>\n",
                    "line": 93,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_tabSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subscription to tab events on the menu panel </p>\n",
                    "line": 90,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_xPosition",
                    "defaultValue": "'after'",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "<p>After | Before the menu triger element </p>\n",
                    "line": 78,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_yPosition",
                    "defaultValue": "'below'",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "<p>Above | Below the menu triger element </p>\n",
                    "line": 81,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Grab the component template </p>\n",
                    "line": 102,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 228,
                    "description": "<p>Handle a keyboard event from the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 261,
                    "description": "<p>Callback that is invoked when the panel animation completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 268,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 264,
                    "description": "<p>Resets the panel animation to its initial state. </p>\n"
                },
                {
                    "name": "_startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 256,
                    "description": "<p>Starts the enter animation. </p>\n"
                },
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 206,
                    "description": "<p>Adds a menu item with the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "focusFirstItem",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 189,
                    "description": "<p>Focus the first item in the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "insertItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        },
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 213,
                    "description": "<p>Inserts a menu item at an index </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "index",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 220,
                    "description": "<p>Removes an item from the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setPositionClasses",
                    "args": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition"
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 194,
                    "description": "<p>Adds classes to the menu panel based on its position </p>\n",
                    "jsdoctags": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition",
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
            "sourceCode": "import {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  Component,\n  ElementRef,\n  EventEmitter,\n  InjectionToken,\n  Input,\n  OnDestroy,\n  Output,\n  TemplateRef,\n  ViewChild,\n  ViewEncapsulation,\n  OnInit\n} from '@angular/core';\nimport { AnimationEvent } from '@angular/animations';\nimport {\n  ESCAPE,\n  DOWN_ARROW,\n  UP_ARROW,\n  HOME,\n  END,\n  hasModifierKey\n} from '@angular/cdk/keycodes';\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { Subscription } from 'rxjs';\nimport { sdsMenuAnimations } from './menu-animations';\nimport { SdsMenuItemComponent } from './menu-item.component';\n\n/** Menu Positions */\nexport type MenuPositionX = 'before' | 'after';\nexport type MenuPositionY = 'above' | 'below';\n\n/** Menu available sizes */\n// sm = 'small'\nexport type MenuSizes = 'sm';\n\n/** Injection token used to provide the parent menu to menu items. */\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n);\n\n/** Menu Interface */\nexport interface SdsMenuInterface<T = any> {\n  xPosition: MenuPositionX;\n  yPosition: MenuPositionY;\n  overlapTrigger: boolean;\n  templateRef: TemplateRef<any>;\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\n  parentMenu?: SdsMenuInterface;\n  size?: MenuSizes;\n  focusFirstItem: (origin?: FocusOrigin) => void;\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\n  addItem?: (item: T) => void;\n  insertItem?: (item: T, index: number) => void;\n  removeItem?: (item: T) => void;\n}\n\n@Component({\n  selector: 'sds-menu',\n  exportAs: 'sdsMenu',\n  templateUrl: 'menu.component.html',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  animations: [sdsMenuAnimations.transformMenu],\n  providers: [\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\n  ]\n})\nexport class SdsMenuComponent\n  implements\n    OnInit,\n    AfterContentInit,\n    OnDestroy,\n    SdsMenuInterface<SdsMenuItemComponent> {\n  /** After | Before the menu triger element */\n  private _xPosition: MenuPositionX = 'after';\n\n  /** Above | Below the menu triger element */\n  private _yPosition: MenuPositionY = 'below';\n\n  /** Manage browser focus */\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\n\n  /** Menu items inside the current menu. */\n  private _items: SdsMenuItemComponent[] = [];\n\n  /** Subscription to tab events on the menu panel */\n  private _tabSubscription = Subscription.EMPTY;\n\n  /** Stores <sds-menu> classes */\n  private _previousPanelClass: string;\n\n  /** Config object to be passed into the menu's ngClass */\n  _classList: { [key: string]: boolean } = {};\n\n  /** Current state of the panel animation. */\n  _panelAnimationState: 'void' | 'enter' = 'void';\n\n  /** Grab the component template */\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\n\n  /**\n   * Size of menu component.\n   * Affects the font-size of the menu items and\n   * the size of the close button in the menu header\n   */\n  @Input() size: MenuSizes;\n\n  /** Position of the menu in the X axis. */\n  @Input()\n  get xPosition(): MenuPositionX {\n    return this._xPosition;\n  }\n  set xPosition(value: MenuPositionX) {\n    this._xPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Position of the menu in the Y axis. */\n  @Input()\n  get yPosition(): MenuPositionY {\n    return this._yPosition;\n  }\n  set yPosition(value: MenuPositionY) {\n    this._yPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Whether menu panel overlaps trigger element */\n  @Input()\n  get overlapTrigger(): boolean {\n    return this._overlapTrigger;\n  }\n  set overlapTrigger(value: boolean) {\n    this._overlapTrigger = coerceBooleanProperty(value);\n  }\n  private _overlapTrigger = false;\n\n  /** Transfer classes from the sds-menu to the overlay container */\n  @Input('class')\n  set panelClass(classes: string) {\n    const previousPanelClass = this._previousPanelClass;\n    // Remove previous classes from current set of classes\n    if (previousPanelClass && previousPanelClass.length) {\n      previousPanelClass.split(' ').forEach((className: string) => {\n        this._classList[className] = false;\n      });\n    }\n\n    this._previousPanelClass = classes;\n\n    // Adds new classes to current set of classes\n    if (classes && classes.length) {\n      classes.split(' ').forEach((className: string) => {\n        this._classList[className] = true;\n      });\n\n      // Remove all classes from <sds-menu>\n      this._elementRef.nativeElement.className = '';\n    }\n  }\n\n  /** Event emitted when the menu is closed. */\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\n\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\n\n  ngOnInit() {\n    this.setPositionClasses();\n  }\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\n      this._items\n    ).withWrap();\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\n      this.closed.emit('tab')\n    );\n  }\n\n  ngOnDestroy() {\n    this._tabSubscription.unsubscribe();\n    this.closed.complete();\n  }\n\n  /** Focus the first item in the menu */\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\n  }\n\n  /** Adds classes to the menu panel based on its position */\n  setPositionClasses(\n    posX: MenuPositionX = this.xPosition,\n    posY: MenuPositionY = this.yPosition\n  ) {\n    const classes = this._classList;\n    classes['sds-menu-before'] = posX === 'before';\n    classes['sds-menu-after'] = posX === 'after';\n    classes['sds-menu-above'] = posY === 'above';\n    classes['sds-menu-below'] = posY === 'below';\n  }\n\n  /** Adds a menu item with the menu. */\n  addItem(item: SdsMenuItemComponent) {\n    if (this._items.indexOf(item) === -1) {\n      this._items.push(item);\n    }\n  }\n\n  /** Inserts a menu item at an index */\n  insertItem(item: SdsMenuItemComponent, index: number) {\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\n      this._items.splice(index, 0, item);\n    }\n  }\n\n  /** Removes an item from the menu. */\n  removeItem(item: SdsMenuItemComponent) {\n    const index = this._items.indexOf(item);\n    if (this._items.indexOf(item) > -1) {\n      this._items.splice(index, 1);\n    }\n  }\n\n  /** Handle a keyboard event from the menu */\n  _handleKeydown(event: KeyboardEvent) {\n    // tslint:disable-next-line: deprecation\n    const keyCode = event.keyCode;\n    const manager = this._keyManager;\n\n    switch (keyCode) {\n      case ESCAPE:\n        this.closed.emit('keydown');\n        break;\n      case HOME:\n      case END:\n        if (!hasModifierKey(event)) {\n          keyCode === HOME\n            ? manager.setFirstItemActive()\n            : manager.setLastItemActive();\n          event.preventDefault();\n        }\n        break;\n      default:\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\n          manager.setFocusOrigin('keyboard');\n        }\n\n        manager.onKeydown(event);\n    }\n  }\n\n  /** Starts the enter animation. */\n  _startAnimation() {\n    this._panelAnimationState = 'enter';\n  }\n\n  /** Callback that is invoked when the panel animation completes. */\n  _onAnimationDone(event: AnimationEvent) {}\n\n  /** Resets the panel animation to its initial state. */\n  _resetAnimation() {\n    this._panelAnimationState = 'void';\n  }\n\n  _onAnimationStart(event: AnimationEvent) {\n    // Scroll the content element to the top as soon as the animation starts.\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\n      event.element.scrollTop = 0;\n    }\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    }
                ],
                "line": 166,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "AfterContentInit",
                "OnDestroy",
                "SdsMenuInterface"
            ],
            "accessors": {
                "xPosition": {
                    "name": "xPosition",
                    "setSignature": {
                        "name": "xPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 116,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "yPosition": {
                    "name": "yPosition",
                    "setSignature": {
                        "name": "yPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 126,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "overlapTrigger": {
                    "name": "overlapTrigger",
                    "setSignature": {
                        "name": "overlapTrigger",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 136,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "panelClass": {
                    "name": "panelClass",
                    "setSignature": {
                        "name": "panelClass",
                        "type": "void",
                        "args": [
                            {
                                "name": "classes",
                                "type": "string"
                            }
                        ],
                        "returnType": "void",
                        "line": 143,
                        "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                        "jsdoctags": [
                            {
                                "name": "classes",
                                "type": "string",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<ng-template>\n  <div\n    class=\"sds-overlay minw-menu maxw-mobile radius-overlay\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n  >\n    <div class=\"sds-menu\" [class.sds-menu--small]=\"size === 'sm'\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n"
        },
        {
            "name": "SdsMenuHeaderComponent",
            "id": "component-SdsMenuHeaderComponent-385fbcf820475668c8709317adbec5d0",
            "file": "libs/packages/components/src/lib/menu/menu-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-menu-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "hideClose",
                    "defaultValue": "false",
                    "line": 8
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-menu-header',\n  templateUrl: 'menu-header.component.html'\n})\nexport class SdsMenuHeaderComponent {\n  @Input() hideClose = false;\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"sds-menu__header\">\n  <span class=\"sds-menu__header-title\"> <ng-content></ng-content> </span>\n  <button\n    *ngIf=\"!hideClose\"\n    aria-label=\"Close Menu\"\n    sds-menu-item\n    role=\"button\"\n  >\n  <fa-icon\n  [icon]=\"['fas', 'times']\"\n  [fixedWidth]=\"true\"\n></fa-icon>\n  </button>\n</div>\n"
        },
        {
            "name": "SdsMenuItemComponent",
            "id": "component-SdsMenuItemComponent-e341254367af51f341c713fc6150632e",
            "file": "libs/packages/components/src/lib/menu/menu-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "[sds-menu-item]",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the menu item should be disabled </p>\n",
                    "line": 39
                },
                {
                    "name": "role",
                    "defaultValue": "'menuitem'",
                    "description": "<p>ARIA role for the menu item. </p>\n",
                    "line": 29,
                    "type": ""
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds the disable status value </p>\n",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 66,
                    "description": "<p>Get item class </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Focuses the menu item. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
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
                    "line": 80,
                    "description": "<p>Stop listening to focus changes and remove item from parent </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.tabIndex",
                    "defaultValue": "this.disabled ? '-1' : '0'",
                    "description": "<p>Menu item tab index </p>\n",
                    "line": 32
                },
                {
                    "name": "class",
                    "defaultValue": "this._getClass()",
                    "description": "<p>Menu item class </p>\n",
                    "line": 26
                }
            ],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  ElementRef,\n  OnDestroy,\n  Inject,\n  Input,\n  HostBinding,\n  ChangeDetectionStrategy,\n  ViewEncapsulation,\n  Optional\n} from '@angular/core';\nimport { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { SDS_MENU_TOKEN, SdsMenuInterface } from './menu.component';\nimport { SdsMenuHeaderComponent } from './menu-header.component';\n\n@Component({\n  // tslint:disable-next-line: component-selector\n  selector: '[sds-menu-item]',\n  template: '<ng-content></ng-content>',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None\n})\nexport class SdsMenuItemComponent implements FocusableOption, OnDestroy {\n  /** Menu item class */\n  @HostBinding('class') class = this._getClass();\n\n  /** ARIA role for the menu item. */\n  @HostBinding('attr.role') @Input() role: 'menuitem' = 'menuitem';\n\n  /** Menu item tab index */\n  @HostBinding('attr.tabIndex') tabIndex = this.disabled ? '-1' : '0';\n\n  /** Holds the disable status value */\n  private _disabled = false;\n\n  /** Whether the menu item should be disabled */\n  @Input()\n  get disabled() {\n    return this._disabled;\n  }\n  set disabled(value: any) {\n    this._disabled = coerceBooleanProperty(value);\n  }\n\n  constructor(\n    private _elementRef: ElementRef<HTMLElement>,\n    private _focusMonitor: FocusMonitor,\n    @Inject(SDS_MENU_TOKEN)\n    private _parentMenu: SdsMenuInterface<SdsMenuItemComponent>,\n    @Optional() private _parentMenuHeader: SdsMenuHeaderComponent\n  ) {\n    // Start listening to focus changes\n    _focusMonitor.monitor(this._elementRef, false);\n    // Add this menu item to its parent menu\n    // If item its inside a header\n    // add it as the first item in the list\n    if (_parentMenuHeader) {\n      _parentMenu.insertItem(this, 0);\n    } else {\n      _parentMenu.addItem(this);\n    }\n  }\n\n  /** Get item class */\n  _getClass(): string {\n    const headerButtonSmall =\n      this._parentMenu.size === 'sm' ? 'sds-button--small' : '';\n    return this._parentMenuHeader\n      ? `sds-button sds-button--circular ${headerButtonSmall}`\n      : 'sds-menu__item';\n  }\n\n  /** Focuses the menu item. */\n  focus(origin: FocusOrigin = 'program'): void {\n    this._focusMonitor.focusVia(this._elementRef.nativeElement, origin);\n  }\n\n  /** Stop listening to focus changes and remove item from parent */\n  ngOnDestroy() {\n    this._focusMonitor.stopMonitoring(this._elementRef);\n    this._parentMenu.removeItem(this);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>"
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent"
                    }
                ],
                "line": 44,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "FocusableOption",
                "OnDestroy"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 42,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsPageComponent",
            "id": "component-SdsPageComponent-717c4135d1fc09822ae19def187bf093",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-container\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'sds-page',\n  template: `\n    <div class=\"grid-container\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-page-options',\n  template: `\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageOptionsComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 9
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsPageOptionsComponent",
            "id": "component-SdsPageOptionsComponent-717c4135d1fc09822ae19def187bf093",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page-options",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 24
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'sds-page',\n  template: `\n    <div class=\"grid-container\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-page-options',\n  template: `\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageOptionsComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 21
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsSearchComponent",
            "id": "component-SdsSearchComponent-2a8efc30de9eecd95e1bad6122a942d7",
            "file": "libs/packages/components/src/lib/search/search.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsSearchComponent), multi: true\n}",
                    "type": "component"
                }
            ],
            "selector": "sds-search",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "inputClass",
                    "line": 40,
                    "type": "string"
                },
                {
                    "name": "parentSelector",
                    "line": 41,
                    "type": "string"
                },
                {
                    "name": "searchSettings",
                    "defaultValue": "new SearchSettings()",
                    "line": 42,
                    "type": "SearchSettings"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_onTouched",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 50,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "buttonEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 38,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'buttonEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'inputEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputState",
                    "defaultValue": "{\n    initial: { visible: undefined },\n    visible: undefined\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 45
                },
                {
                    "name": "model",
                    "defaultValue": "{}",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 44
                },
                {
                    "name": "selectEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'selectEl', {read: ElementRef}"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "calculateInputWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 138
                },
                {
                    "name": "focusChange",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 132,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 147
                },
                {
                    "name": "handleClick",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 79,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "hasDropdown",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 67
                },
                {
                    "name": "isInputVisible",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 109
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 58
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 105,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 102,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "removeInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 124
                },
                {
                    "name": "setInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 115
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 93,
                    "jsdoctags": [
                        {
                            "name": "value",
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
            "sourceCode": "import {\n  Component,\n  ViewChild,\n  ElementRef,\n  Input,\n  AfterViewInit,\n  forwardRef,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { FocusMonitor } from '@angular/cdk/a11y';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nexport class SearchSettings {\n  public placeholder = 'Search';\n  public size: string;\n  public dropdown: any = {\n    placeholder: '-Select-',\n    options: [],\n    inverse: false\n  };\n}\n@Component({\n  selector: 'sds-search',\n  templateUrl: 'search.component.html',\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsSearchComponent),\n      multi: true\n    }\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\n  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;\n  @ViewChild('selectEl', { read: ElementRef }) selectEl: ElementRef;\n  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;\n\n  @Input() inputClass: string;\n  @Input() parentSelector: string;\n  @Input() searchSettings: SearchSettings = new SearchSettings();\n\n  model: any = {};\n  inputState = {\n    initial: { visible: undefined },\n    visible: undefined\n  };\n  private _onChange = (_: any) => {};\n  private _onTouched = () => {};\n\n  constructor(\n    private cd: ChangeDetectorRef,\n    private focusMonitor: FocusMonitor,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngAfterViewInit() {\n    this.inputState.initial.visible = this.isInputVisible();\n    this.inputState.visible = this.inputState.initial.visible;\n    this.viewportRuler.change(0).subscribe(() => {\n      this.inputState.initial.visible = this.isInputVisible();\n      this.inputState.visible = this.inputState.initial.visible;\n    });\n  }\n\n  hasDropdown() {\n    if (\n      this.searchSettings &&\n      this.searchSettings.dropdown &&\n      this.searchSettings.dropdown.options &&\n      this.searchSettings.dropdown.options.length\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  handleClick(event) {\n    event.preventDefault();\n    if (!this.inputState.visible) {\n      this.setInputVisibleStyles();\n      this.focusMonitor.focusVia(this.inputEl, 'program');\n    } else if (this.inputEl.nativeElement.value || this.selectEl.nativeElement.value) {\n      this.model.searchText = this.inputEl.nativeElement.value;\n      if (this.selectEl && this.selectEl.nativeElement.value) {\n        this.model.searchCategory = this.selectEl.nativeElement.value;\n      }\n      this._onChange(this.model);\n    }\n  }\n\n  writeValue(value: any) {\n    if (value && this.model !== value) {\n      this.model = value;\n      this.cd.markForCheck();\n    } else {\n      this.model = {};\n      this.cd.markForCheck();\n    }\n  }\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  isInputVisible(): boolean {\n    return this.inputEl.nativeElement.getBoundingClientRect().width\n      ? true\n      : false;\n  }\n\n  setInputVisibleStyles() {\n    const inputWidth = this.calculateInputWidth();\n    this.inputEl.nativeElement.style.display = 'block';\n    this.inputEl.nativeElement.style.position = 'absolute';\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\n    this.inputEl.nativeElement.style.width = `${inputWidth}px`;\n    this.inputState.visible = true;\n  }\n\n  removeInputVisibleStyles() {\n    this.inputEl.nativeElement.style.display = '';\n    this.inputEl.nativeElement.style.position = '';\n    this.inputEl.nativeElement.style.left = '';\n    this.inputEl.nativeElement.style.width = '';\n    this.inputState.visible = false;\n  }\n\n  focusChange(event) {\n    if (event === null && !this.inputState.initial.visible) {\n      this.removeInputVisibleStyles();\n    }\n  }\n\n  calculateInputWidth(): number {\n    const buttonElement = this.buttonEl.nativeElement;\n    const inputElement = this.inputEl.nativeElement;\n    const rightPosition = buttonElement.getBoundingClientRect().left;\n    const leftPosition = this.parentSelector\n      ? inputElement.closest(this.parentSelector).getBoundingClientRect().left\n      : 0;\n    return Math.floor(rightPosition - leftPosition);\n  }\n  getClass() {\n    const cls =\n      this.searchSettings && this.searchSettings.size === 'large'\n        ? 'usa-search--big'\n        : 'usa-search--small';\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\n      ? `${cls} sds-inverse`\n      : cls;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 50,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "AfterViewInit",
                "ControlValueAccessor"
            ],
            "templateData": "<form class=\"usa-form usa-search\" [ngClass]=\"getClass()\" role=\"search\">\n  <label class=\"usa-sr-only\" for=\"options\">Dropdown label</label>\n  <select *ngIf=\"hasDropdown()\" [value]=\"model.searchCategory? model.searchCategory :''\" #selectEl name=\"search options\"\n    class=\"usa-select\" id=\"search-options\">\n    <option [value]=\"\"> {{searchSettings.dropdown.placeholder ? searchSettings.dropdown.placeholder : '-Select-'}}</option>\n    <ng-container *ngFor=\"let item of searchSettings.dropdown.options\">\n      <optgroup *ngIf=\"item.group\" label=\"{{item.label}}\">\n        <option *ngFor=\"let child of item.group\" [value]=\"child.value\" [selected]=\"model.searchCategory == child.value\"\n          [disabled]=\"child.disabled\">\n          {{ child.label }}\n        </option>\n      </optgroup>\n      <option *ngIf=\"!item.group\" [value]=\"item.value\" [selected]=\"model.searchCategory == item.value\" [disabled]=\"item.disabled\">{{\n        item.label }}</option>\n    </ng-container>\n  </select>\n  <ng-container *ngIf=\"(searchSettings.dropdown && searchSettings.dropdown.inverse); then inverseTemplate else inputTemplate\">\n  </ng-container>\n</form>\n\n<ng-template #inputTemplate> <label class=\"usa-sr-only\" for=\"search-field\">Search</label>\n  <input #inputEl [value]=\"model.searchText? model.searchText :''\" [ngClass]=\"inputClass\" id=\"search-field\" type=\"search\" class=\"usa-input\"\n    name=\"search\" [placeholder]=\"searchSettings.placeholder? searchSettings.placeholder : 'type here'\" />\n  <button class=\"usa-button\" type=\"submit\"  (click)=\"handleClick($event)\">\n    <span class=\"usa-sr-only\">Search</span>\n  </button>\n</ng-template>\n<ng-template #inverseTemplate>\n  <div class=\"sds-inverse__search\">\n    <ng-container [ngTemplateOutlet]=\"inputTemplate\"></ng-container>\n  </div>\n</ng-template>"
        },
        {
            "name": "SdsSearchResultListComponent",
            "id": "component-SdsSearchResultListComponent-a9cbf78d607e49b20948ad64bc2a955d",
            "file": "libs/packages/components/src/lib/search-result-list/search-result-list.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-search-result-list",
            "styleUrls": [
                "./search-result-list.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-result-list.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "divider",
                    "defaultValue": "true",
                    "description": "<p>Show divider between results</p>\n",
                    "line": 17
                },
                {
                    "name": "model",
                    "description": "<p>List of items</p>\n",
                    "line": 12,
                    "type": "any[]"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 22,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                }
            ],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, ContentChild, TemplateRef } from '@angular/core';\n@Component({\n  selector: 'sds-search-result-list',\n  templateUrl: './search-result-list.component.html',\n  styleUrls: ['./search-result-list.component.scss']\n})\nexport class SdsSearchResultListComponent {\n\n  /**\n   * List of items\n   */\n  @Input() model: any[];\n\n  /**\n   * Show divider between results\n   */\n  @Input() divider = true;\n\n  /**\n   * Child Template to be used to display the data for each item in the list of items\n   */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-result-list.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<div *ngFor=\"let item of model\">\n    <hr *ngIf=\"divider\" class=\"thin\" />\n    <ng-container *ngTemplateOutlet=\"resultContentTemplate,\n                   context: { $implicit: item }\"></ng-container>\n</div>\n<hr *ngIf=\"divider && model?.length\" class=\"thin\" />\n<div *ngIf=\"!model|| model.length===0\">\n    <div class=\"grid-row border-1px border-base-lighter bg-base-lightest\">\n      <div class=\"grid-col-auto text-center text-base margin-4\">\n        <fa-icon [icon]=\"['sds', 'search']\" [classes]=\"['search']\" size=\"7x\"></fa-icon>\n      </div>\n      <div class=\"grid-col-fill display-flex flex-column padding-y-1\">\n        <h1 class=\"margin-bottom-105 text-semibold\">No matches found</h1>\n        <p class=\"margin-y-0 font-sans-lg\">We couldn't find a match for your search criteria.</p>\n        <p class=\"margin-y-0 font-sans-lg\">Please try another search or go back to previous results.</p>\n        <button class=\"usa-button usa-button--secondary width-card margin-y-2\">Go Back</button>\n      </div>\n    </div>\n</div>\n"
        },
        {
            "name": "SDSSelectedResultComponent",
            "id": "component-SDSSelectedResultComponent-e571d258144e5125ba58fc971ece946c",
            "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-selected-result",
            "styleUrls": [
                "./selected-result.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./selected-result.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Selected Results control </p>\n",
                    "line": 35,
                    "type": "SDSSelectedResultConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 48,
                    "type": "boolean"
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 23,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 40,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 45,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 86,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2213,
                                "end": 2219,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 2207,
                                "end": 2212,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2233,
                                "end": 2247,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2227,
                                "end": 2232,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 68,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 72,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Removes item from the model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1501,
                                "end": 1505,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1495,
                                "end": 1500,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62,
                    "jsdoctags": [
                        {
                            "name": "obj",
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
            "sourceCode": "import { Component, Input, TemplateRef, forwardRef } from '@angular/core';\nimport { SDSSelectedItemModel } from './models/sds-selectedItem.model';\nimport { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nimport { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';\nconst SDS_SelectedResult_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n};\n\n@Component({\n  selector: 'sds-selected-result',\n  templateUrl: './selected-result.component.html',\n  styleUrls: ['./selected-result.component.scss'],\n  providers: [SDS_SelectedResult_VALUE_ACCESSOR]\n})\nexport class SDSSelectedResultComponent implements ControlValueAccessor {\n\n  /**\n  * Allow to insert a customized template for suggestions to use\n  */\n  @Input() itemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel;\n\n\n  /**\n  * Configuration for the Selected Results control \n  */\n  @Input()\n  public configuration: SDSSelectedResultConfiguration;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onTouchedCallback: () => void = () => null;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public propogateChange: (_: any) => void = (_: any) => null;\n\n  @Input()\n  public disabled: boolean;\n\n  /**\n   * Removes item from the model\n   * @param item \n   */\n  removeItem(item: object) {\n    if (!this.disabled) {\n      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model.items);\n      this.propogateChange(this.model);\n      this.onTouchedCallback();\n    }\n  }\n\n  writeValue(obj: any): void {\n    if (obj instanceof SDSSelectedItemModel) {\n      this.model = obj as SDSSelectedItemModel;\n    }\n  }\n\n  registerOnChange(fn: any): void {\n    this.propogateChange = fn;\n  }\n\n  registerOnTouched(fn: any): void {\n    this.onTouchedCallback = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n\n\n  /**\n   * Gets the string value from the specifed properties of an object\n   * @param object \n   * @param propertyFields comma seperated list with periods depth of object\n   */\n  getObjectValue(object: Object, propertyFields: string): string {\n    let value = '';\n    let current = object;\n    let fieldSplit = propertyFields.split(',');\n    for (let i = 0; i < fieldSplit.length; i++) {\n      let fieldValue = fieldSplit[i];\n      let fieldPartSplit = fieldValue.split('.');\n      for (let j = 0; j < fieldPartSplit.length; j++) {\n        let fieldCheckValue = fieldPartSplit[j];\n        if (current) {\n          current = current[fieldCheckValue];\n        }\n      }\n\n      if (current) {\n        value += current.toString() + ' ';\n      }\n      current = object;\n    }\n    return value.trim();\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./selected-result.component.scss"
                }
            ],
            "stylesData": "",
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<ul *ngIf=\"model\" [attr.aria-label]=\"configuration.labelText +' results'\" class=\"usa-list usa-list--unstyled sds-autocomplete-selected\" aria-relevant=\"additions\" role=\"listbox\" aria-live=\"polite\">\n    <li role=\"option\" *ngFor=\"let result of model.items; let i = index\">\n        <div [attr.class]=\" disabled ? 'sds-tag sds-tag--chip sds-autocomplete-selected__item sds-autocomplete-selected__item--disabled' :'sds-tag sds-tag--chip sds-autocomplete-selected__item'\">\n            <ng-container *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{$implicit:result}\">\n            </ng-container>\n            <ng-container *ngIf=\"!itemTemplate\">\n                <span class=\"display-block text-semibold\"> {{ getObjectValue(result, configuration.primaryTextField) }}\n                </span>\n                <ng-container *ngIf=\"configuration.secondaryTextField && result[configuration.secondaryTextField] \">\n                    {{ result[configuration.secondaryTextField] }}\n                </ng-container>\n            </ng-container>\n            <button [attr.aria-label]=\"'Remove Item ' + getObjectValue(result, configuration.primaryTextField)\" [class.text-base]=\"disabled\" aria-hidden=\"false\" class=\"sds-tag__close  position-absolute right-1 top-2px\" (click)=\"removeItem(result)\" (keyup.enter)=\"removeItem(result)\">\n        <fa-icon [icon]=\"['fas', 'times']\" size=\"sm\"></fa-icon>\n      </button>\n        </div>\n    </li>\n</ul>"
        },
        {
            "name": "SdsSideNavigationComponent",
            "id": "component-SdsSideNavigationComponent-ac894eb9183e3046839a1089a9148abc",
            "file": "libs/packages/components/src/lib/side-navigation/side-navigation.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-navigation",
            "styleUrls": [
                "./side-navigation.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-navigation.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the side navigation </p>\n",
                    "line": 71,
                    "type": "SideNavigationModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 144,
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
                    "line": 66
                },
                {
                    "name": "sideNavEVENTLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for event response</p>\n",
                    "line": 35,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavEVENTLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavHREFLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for external href </p>\n",
                    "line": 29,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavHREFLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavLabelLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for side menu items that are a label</p>\n",
                    "line": 23,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavLabelLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavRouteLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for internal links</p>\n",
                    "line": 17,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavRouteLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 116,
                    "description": "<p>Deselects all the items in the side navigation model</p>\n"
                },
                {
                    "name": "deselectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 129,
                    "description": "<p>checks if item is selected and if selcted will check children and will unselect</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "NavigationLink",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getItemTemplate",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "TemplateRef<any>",
                    "typeParameters": [],
                    "line": 41,
                    "description": "<p>Takes the navigation item and returns the template to be used</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1317,
                                "end": 1321,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 1311,
                                "end": 1316,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>navigation item</p>\n"
                        }
                    ]
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
                    "line": 150,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3936,
                                "end": 3940,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 3930,
                                "end": 3935,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "queryStringBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 178,
                    "description": "<p>creates query string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4550,
                                "end": 4554,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4544,
                                "end": 4549,
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
                    "line": 77,
                    "description": "<p>Selects new item and parents and deselects previous</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2221,
                                "end": 2223,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2215,
                                "end": 2220,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        },
                        {
                            "name": "parent",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 91,
                    "description": "<p>Selects item if matches passed in id and will select parent</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2522,
                                "end": 2524,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2516,
                                "end": 2521,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2538,
                                "end": 2542,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2532,
                                "end": 2537,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2556,
                                "end": 2562,
                                "flags": 0,
                                "escapedText": "parent"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2550,
                                "end": 2555,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "urlBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 159,
                    "description": "<p>creates url from provided route and query params</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4116,
                                "end": 4120,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4110,
                                "end": 4115,
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
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';\nimport { SideNavigationModel, NavigationLink } from './model/side-navigation-model';\nimport { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\n\n@Component({\n  selector: 'sds-side-navigation',\n  templateUrl: './side-navigation.component.html',\n  styleUrls: ['./side-navigation.component.scss']\n})\nexport class SdsSideNavigationComponent {\n\n  /**\n   * Reference to the the Template used for internal links\n   */\n  @ViewChild('sideNavRouteLinkTemplate')\n  private sideNavRouteLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for side menu items that are a label\n   */\n  @ViewChild('sideNavLabelLinkTemplate')\n  private sideNavLabelLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for external href \n   */\n  @ViewChild('sideNavHREFLinkTemplate')\n  private sideNavHREFLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for event response\n   */\n  @ViewChild('sideNavEVENTLinkTemplate')\n  private sideNavEVENTLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Takes the navigation item and returns the template to be used\n   * @param item navigation item\n   */\n  getItemTemplate(item: NavigationLink): TemplateRef<any> {\n    let template = null;\n    switch (item.mode) {\n      case NavigationMode.EVENT:\n        template = this.sideNavEVENTLinkTemplate;\n        break;\n      case NavigationMode.EXTERNAL:\n        template = this.sideNavHREFLinkTemplate;\n        break;\n      case NavigationMode.INTERNAL:\n        template = this.sideNavRouteLinkTemplate;\n        break;\n      case NavigationMode.LABEL:\n        template = this.sideNavLabelLinkTemplate;\n        break;\n      default:\n        template = null;\n        break;\n    }\n    return template;\n  }\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the side navigation \n   */\n  @Input() model: SideNavigationModel;\n\n  /**\n   * Selects new item and parents and deselects previous\n   * @param id \n   */\n  select(id: string) {\n    this.deselect();\n    for (let i = 0; i < this.model.navigationLinks.length; i++) {\n      let item = this.model.navigationLinks[i];\n      this.selectItem(id, item, null);\n    }\n  }\n\n  /**\n   * Selects item if matches passed in id and will select parent\n   * @param id \n   * @param item \n   * @param parent \n   */\n  private selectItem(id: string, item: NavigationLink, parent: NavigationLink) {\n    if (item.id === id) {\n      item.selected = true;\n      if (parent) {\n        parent.selected = true;\n      }\n    } else {\n      if (item.children) {\n        for (let i = 0; i < item.children.length; i++) {\n          let childItem = item.children[i];\n          this.selectItem(id, childItem, item);\n        }\n        if (item.selected) {\n          if (parent) {\n            parent.selected = true;\n          }\n        }\n      }\n    }\n  }\n\n\n  /**\n   * Deselects all the items in the side navigation model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.navigationLinks) {\n        for (let i = 0; i < this.model.navigationLinks.length; i++) {\n          this.deselectItem(this.model.navigationLinks[i]);\n        }\n      }\n    }\n  }\n\n  /**\n   * checks if item is selected and if selcted will check children and will unselect\n   */\n  private deselectItem(item: NavigationLink) {\n    if (item.selected) {\n      item.selected = false;\n      if (item.children) {\n        for (let i = 0; i < item.children.length; i++) {\n          this.deselectItem(item.children[i]);\n        }\n      }\n    }\n  }\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link \n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  /**\n   * creates url from provided route and query params\n   * @param item \n   */\n  urlBuilder(item: NavigationLink) {\n    let url = item.route;\n    let queryParams = this.queryStringBuilder(item);\n    if (queryParams) {\n      if (url.indexOf('?') === -1) {\n        url += '?' + queryParams;\n      } else if (url.indexOf('?') === url.length - 1) {\n        url += queryParams;\n      } else {\n        url += '&' + queryParams;\n      }\n    }\n    return url;\n  }\n\n  /**\n   * creates query string\n   * @param item \n   */\n  private queryStringBuilder(item: NavigationLink) {\n    const ret = [];\n    for (let d in item.queryParams) {\n      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(item.queryParams[d]));\n    }\n    return ret.join('&');\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-navigation.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<nav>\n    <ul class=\"usa-sidenav\">\n        <li *ngFor=\"let link of model.navigationLinks\" class=\"sidenav__item\">\n            <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\n            </ng-container>\n        </li>\n    </ul>\n</nav>\n\n<ng-template #sideNavLinkTemplate let-link>\n    <ng-container [ngTemplateOutlet]=\"getItemTemplate(link)\" [ngTemplateOutletContext]=\"{$implicit:link}\">\n    </ng-container>\n    <ul *ngIf=\"link.children\" class=\"usa-sidenav__sublist\">\n        <li *ngFor=\"let link of link.children\" class=\"sidenav__item\">\n            <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\n            </ng-container>\n        </li>\n    </ul>\n</ng-template>\n\n<ng-template #sideNavRouteLinkTemplate let-link>\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [routerLink]=\"[link.route]\"\n        [queryParams]=\"link.queryParams\"><span>{{link.text}}</span></a>\n</ng-template>\n\n<ng-template #sideNavHREFLinkTemplate let-link>\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [attr.href]=\"urlBuilder(link)\"><span>{{link.text}}</span></a>\n</ng-template>\n\n<ng-template #sideNavLabelLinkTemplate let-link>\n    <span [attr.class]=\"link.selected ? ' usa-current' : ''\"><span>{{link.text}}</span></span>\n</ng-template>\n\n<ng-template #sideNavEVENTLinkTemplate let-link>\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" href=\"javascript:void(0)\"\n        (click)=\"linkClickEvent(link)\"><span>{{link.text}}</span></a>\n</ng-template>"
        },
        {
            "name": "SdsTextChildComponent",
            "id": "component-SdsTextChildComponent-c11eaf163618dec5897ac362ed360fc2",
            "file": "libs/packages/components/src/lib/text/child.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-text-child",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-container *ngIf=\"items\">\n  <span class=\"sds-tag sds-tag--chip margin-x-05\" style=\"cursor:pointer;\" *ngFor=\"let item of items; let i=index\" (click)=\"removeItem(i)\">{{item}} <small class=\"margin-left-05\">(x)</small></span>\n</ng-container>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "items",
                    "line": 13
                }
            ],
            "outputsClass": [
                {
                    "name": "itemsChange",
                    "defaultValue": "new EventEmitter()",
                    "line": 14,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "index",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 17,
                    "jsdoctags": [
                        {
                            "name": "index",
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
            "sourceCode": "import { Component, Input, EventEmitter, Output } from '@angular/core';\nimport { Subject } from 'rxjs';\n\n@Component({\n  selector: 'sds-text-child',\n  template: `\n    <ng-container *ngIf=\"items\">\n      <span class=\"sds-tag sds-tag--chip margin-x-05\" style=\"cursor:pointer;\" *ngFor=\"let item of items; let i=index\" (click)=\"removeItem(i)\">{{item}} <small class=\"margin-left-05\">(x)</small></span>\n    </ng-container>\n  `\n})\nexport class SdsTextChildComponent  {\n    @Input() items;\n    @Output() itemsChange = new EventEmitter();\n\n    // Method to remove an item from the items array, emits an event that the parent component is listening for\n    removeItem(index){\n      this.items.splice(index, 1);\n      this.itemsChange.emit(this.items);\n    }\n\n}\n\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTextComponent",
            "id": "component-SdsTextComponent-78fc7f8e5847c1c8259ef079095159c9",
            "file": "libs/packages/components/src/lib/text/text.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsTextComponent), multi: true\n}",
                    "type": "component"
                }
            ],
            "selector": "sds-text",
            "styleUrls": [],
            "styles": [],
            "template": "<div>\n  <input #searchInput class=\"usa-input display-inline-block\" />\n  <button class=\"usa-button margin-left-05 display-inline-block\" (click)=\"addItem(searchInput.value); searchInput.value=''\">Add Item</button>\n</div>\n\n<h4>Component Items</h4>\n<pre>{{ items | json }}</pre>\n\n<hr />\n\n<h4>Child Component Items <small>(click to remove)</small></h4>\n<sds-text-child [(items)]=\"items\" (itemsChange)=\"updateItems($event)\"></sds-text-child>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 34,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_onTouched",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
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
                    "description": "",
                    "line": 31
                },
                {
                    "name": "multiple",
                    "defaultValue": "true",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 32
                }
            ],
            "methodsClass": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "val",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 40,
                    "jsdoctags": [
                        {
                            "name": "val",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getModel",
                    "args": [],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 59
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 82,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateItems",
                    "args": [
                        {
                            "name": "$event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 48,
                    "jsdoctags": [
                        {
                            "name": "$event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 53
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 66,
                    "jsdoctags": [
                        {
                            "name": "value",
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
            "sourceCode": "import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\n\n@Component({\n  selector: 'sds-text',\n  template: `\n    <div>\n      <input #searchInput class=\"usa-input display-inline-block\" />\n      <button class=\"usa-button margin-left-05 display-inline-block\" (click)=\"addItem(searchInput.value); searchInput.value=''\">Add Item</button>\n    </div>\n\n    <h4>Component Items</h4>\n    <pre>{{ items | json }}</pre>\n\n    <hr />\n\n    <h4>Child Component Items <small>(click to remove)</small></h4>\n    <sds-text-child [(items)]=\"items\" (itemsChange)=\"updateItems($event)\"></sds-text-child>\n  `,\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsTextComponent),\n      multi: true\n    }\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SdsTextComponent implements ControlValueAccessor {\n\n  items = [];\n  multiple = true;\n\n  private _onChange = (_: any) => { };\n  private _onTouched = () => { };\n\n  constructor(private cd: ChangeDetectorRef) { }\n\n  // Helper method to programatically add a value to the existing items array\n  addItem(val) {\n    if(this.multiple){\n      this.items = [...this.items, val];\n      this.updateModel();\n    }\n  }\n\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\n  updateItems($event) {\n    this.updateModel();\n  }\n\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\n  updateModel() {\n    const model = this.getModel();\n    this._onChange(model);\n  }\n\n  // Helper method to return a new instance of an array that contains our items\n  getModel() {\n    return [...this.items];\n  }\n\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\n  // If there is a value we will just overwrite items\n  // If there is no value we reset the items array to be empty\n  writeValue(value: any) {\n    if(value && value.length && this.items !== value) {\n      this.items = value;\n      this.cd.markForCheck();\n    } else {\n      this.items = [];\n      this.cd.markForCheck();\n    }\n  }\n\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  // ControlValueAccessor hook (not used)\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ]
        },
        {
            "name": "SdsToolbarComponent",
            "id": "component-SdsToolbarComponent-67efc4d28a051482f71d87c2eeaa0d7a",
            "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "exportAs": "sdsToolbar",
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the toolbar is disabled. </p>\n",
                    "line": 54
                },
                {
                    "name": "expanded",
                    "description": "<p>Whether the toolbar is expanded. </p>\n",
                    "line": 38,
                    "type": "any"
                },
                {
                    "name": "expandedSpace",
                    "defaultValue": "\"20px\"",
                    "line": 67,
                    "type": "string"
                },
                {
                    "name": "expandedWidth",
                    "defaultValue": "\"300px\"",
                    "description": "<p>Width of the toolbar when is expanded. </p>\n",
                    "line": 63,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "expandedChange",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "description": "<p>Emits whenever the expanded state of the toolbar changes. </p>\n",
                    "line": 34,
                    "type": "EventEmitter<boolean>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_contentId",
                    "defaultValue": "`sds-toolbar-content-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the content element. Used for a11y labelling. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 60,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_expanded",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 50,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-toolbar-header-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the header element. Used for a11y labelling. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "id",
                    "defaultValue": "uniqueId++",
                    "type": "",
                    "optional": false,
                    "description": "<p>The unique Toolbar id. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsToolbarState",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, Output } from \"@angular/core\";\nimport { coerceBooleanProperty } from \"@angular/cdk/coercion\";\nimport { sdsToolbarAnimations } from \"./toolbar-animations\";\n\n/** Toolbar's states. */\nexport type SdsToolbarState = \"expanded\" | \"collapsed\";\n\n/** Counter for generating unique element ids. */\nlet uniqueId = 0;\n\n@Component({\n  selector: \"sds-toolbar\",\n  exportAs: \"sdsToolbar\",\n  templateUrl: \"toolbar.component.html\",\n  animations: [sdsToolbarAnimations.bodyExpansion],\n  host: {\n    class: \"sds-toolbar\",\n    \"[class.sds-toolbar--expanded]\": \"expanded\"\n  }\n})\nexport class SdsToolbarComponent {\n  /** The unique Toolbar id. */\n  readonly id = uniqueId++;\n\n  /** ID for the header element. Used for a11y labelling. */\n  readonly _headerId: string = `sds-toolbar-header-${this.id}`;\n\n  /** ID for the content element. Used for a11y labelling. */\n  readonly _contentId: string = `sds-toolbar-content-${this.id}`;\n\n  constructor() {}\n\n  /** Emits whenever the expanded state of the toolbar changes. */\n  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  /** Whether the toolbar is expanded. */\n  @Input()\n  get expanded(): any {\n    return this._expanded;\n  }\n  set expanded(expanded: any) {\n    expanded = coerceBooleanProperty(expanded);\n\n    // Only emit events and update the internal value if the value changes.\n    if (this._expanded !== expanded) {\n      this._expanded = expanded;\n      this.expandedChange.emit(expanded);\n    }\n  }\n  private _expanded = false;\n\n  /** Whether the toolbar is disabled. */\n  @Input()\n  get disabled() {\n    return this._disabled;\n  }\n  set disabled(disabled: any) {\n    this._disabled = coerceBooleanProperty(disabled);\n  }\n  private _disabled: boolean = false;\n\n  /** Width of the toolbar when is expanded. */\n  @Input() expandedWidth: string = \"300px\";\n\n  // Elements that surround the toolbar need to make space for the expanded toolbar.\n  // Adding 20 more pixes to provide padding\n  @Input() expandedSpace: string = \"20px\";\n\n  /** Toggles the expanded state of the toolbar. */\n  toggle() {\n    this.expanded = !this.expanded;\n  }\n\n  /** Gets the expanded state string. */\n  _getExpandedState(): SdsToolbarState {\n    return this.expanded ? \"expanded\" : \"collapsed\";\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 29
            },
            "accessors": {
                "expanded": {
                    "name": "expanded",
                    "setSignature": {
                        "name": "expanded",
                        "type": "void",
                        "args": [
                            {
                                "name": "expanded",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 41,
                        "jsdoctags": [
                            {
                                "name": "expanded",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "disabled",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 57,
                        "jsdoctags": [
                            {
                                "name": "disabled",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<sds-toolbar-header></sds-toolbar-header>\n<div\n  class=\"sds-toolbar__content\"\n  role=\"region\"\n  [@bodyExpansion]=\"{\n    value: _getExpandedState(),\n    params: { expandedWidth: expandedWidth }\n  }\"\n  [attr.aria-labelledby]=\"_headerId\"\n  [id]=\"_contentId\"\n>\n  <ng-content></ng-content>\n</div>\n"
        },
        {
            "name": "SdsToolbarHeaderComponent",
            "id": "component-SdsToolbarHeaderComponent-e9fb11c75f9df204a16398668c7dfaaa",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 15,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Host } from \"@angular/core\";\nimport { SdsToolbarComponent } from \"./toolbar.component\";\n\n@Component({\n  selector: \"sds-toolbar-header\",\n  templateUrl: \"toolbar-header.component.html\",\n  host: {\n    class: \"sds-toolbar__header\"\n  }\n})\nexport class SdsToolbarHeaderComponent {\n  constructor(@Host() public toolbar: SdsToolbarComponent) {}\n\n  /** Toggles the expanded state of the toolbar. */\n  _toggle() {\n    this.toolbar.toggle();\n  }\n\n  /** Gets whether the toolbar is expanded. */\n  get _isExpanded(): boolean {\n    return this.toolbar.expanded;\n  }\n\n  /** Whether the toolbar is disabled. */\n  get _disabled(): boolean {\n    return this.toolbar.disabled;\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent"
                    }
                ],
                "line": 11,
                "jsdoctags": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "_isExpanded": {
                    "name": "_isExpanded",
                    "getSignature": {
                        "name": "_isExpanded",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 20,
                        "description": "<p>Gets whether the toolbar is expanded. </p>\n"
                    }
                },
                "_disabled": {
                    "name": "_disabled",
                    "getSignature": {
                        "name": "_disabled",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 25,
                        "description": "<p>Whether the toolbar is disabled. </p>\n"
                    }
                }
            },
            "templateData": "<button\n  class=\"sds-toolbar__toogle-btn\"\n  [attr.id]=\"toolbar._headerId\"\n  [attr.tabindex]=\"_disabled ? -1 : 0\"\n  [attr.aria-controls]=\"toolbar._contentId\"\n  [attr.aria-expanded]=\"_isExpanded\"\n  [attr.aria-disabled]=\"_disabled\"\n  (click)=\"_toggle()\"\n>\n  <div class=\"sds-toolbar__toggle\">\n    <span class=\"usa-sr-only\">Open/Close Toolbar</span>\n  </div>\n</button>\n"
        },
        {
            "name": "SdsTopBannerComponent",
            "id": "component-SdsTopBannerComponent-3b4c71d05c318dbff0fb621f4f617475",
            "file": "libs/packages/components/src/lib/top-banner/top-banner.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-top-banner",
            "styleUrls": [
                "./top-banner.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./top-banner.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "description",
                    "defaultValue": "''",
                    "line": 10
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "showDetail",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9
                }
            ],
            "methodsClass": [
                {
                    "name": "closeDetail",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 16
                },
                {
                    "name": "toggleDetails",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-top-banner',\n  templateUrl: './top-banner.component.html',\n  styleUrls: ['./top-banner.component.scss']\n})\nexport class SdsTopBannerComponent {\n  showDetail = false;\n  @Input() description = '';\n\n  toggleDetails() {\n    this.showDetail = !this.showDetail;\n  }\n\n  closeDetail() {\n    if (this.showDetail) {\n      this.showDetail = false;\n    }\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./top-banner.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<div class=\"usa-banner\">\n  <div class=\"usa-accordion\">\n    <header\n      class=\"usa-banner__header\"\n      [class.sam-banner__header--expanded]=\"showDetail\"\n    >\n      <div class=\"usa-banner__inner\">\n        <div class=\"grid-col-auto\">\n          <span class=\"usa-banner__header-flag\"></span>\n        </div>\n        <div class=\"grid-col-fill tablet:grid-col-auto\">\n          <p class=\"usa-banner__header-text\">\n            An official website of the United States government\n          </p>\n          <p class=\"usa-banner__header-action\" aria-hidden=\"true\">\n            Here’s how you know\n          </p>\n        </div>\n        <button\n          class=\"usa-accordion__button usa-banner__button\"\n          (click)=\"toggleDetails()\"\n          (blur)=\"closeDetail()\"\n          [attr.aria-expanded]=\"showDetail\"\n          aria-controls=\"gov-banner\"\n        >\n          <span class=\"usa-banner__button-text\">Here’s how you know</span>\n        </button>\n        <div class=\"usa-banner__header-description\">\n          <em>{{ description }}</em>\n        </div>\n      </div>\n    </header>\n    <div\n      class=\"usa-banner__content usa-accordion__content\"\n      id=\"gov-banner\"\n      [hidden]=\"!showDetail\"\n    >\n      <div class=\"grid-row grid-gap-lg\">\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\n          <div class=\"usa-media-block__body\">\n            <p>\n              <strong>The .gov means it’s official.</strong> <br />\n              Federal government websites often end in .gov or .mil. Before\n              sharing sensitive information, make sure you’re on a federal\n              government site.\n            </p>\n          </div>\n        </div>\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\n          <div class=\"usa-media-block__body\">\n            <p>\n              <strong>The site is secure.</strong> <br />\n              The <strong>https://</strong> ensures that you are connecting to\n              the official website and that any information you provide is\n              encrypted and transmitted securely.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsTruncatedTextContainerComponent",
            "id": "component-SdsTruncatedTextContainerComponent-8a0fa5c4ffa157b927aac5b53d6e5e46",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-truncated-text-container",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsTruncateTextData",
                    "optional": false,
                    "description": "",
                    "line": 19,
                    "decorators": [
                        {
                            "name": "Inject",
                            "stringifiedArguments": "SDS_TRUNCATED_TEXT_DATA"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 27,
                    "description": "<p>Resets the animation to its initial state. </p>\n"
                },
                {
                    "name": "startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 22,
                    "description": "<p>Starts the animation. </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "@container",
                    "defaultValue": "'void'",
                    "line": 17
                }
            ],
            "hostListeners": [
                {
                    "name": "@container.done",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Intentionally left empty to trigger change detection </p>\n",
                    "line": 33
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\n\nexport interface SdsTruncateTextData {\n  text: string;\n}\n\n@Component({\n  selector: 'sds-truncated-text-container',\n  template: `\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n  `,\n  animations: [sdsTruncateTextAnimations.container]\n})\nexport class SdsTruncatedTextContainerComponent {\n  @HostBinding('@container') _animationState = 'void';\n\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\n\n  /** Starts the animation. */\n  startAnimation() {\n    this._animationState = 'enter';\n  }\n\n  /** Resets the animation to its initial state. */\n  resetAnimation() {\n    this._animationState = 'void';\n  }\n\n  /** Intentionally left empty to trigger change detection */\n  @HostListener('@container.done')\n  _onAnimationDone() {}\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData"
                    }
                ],
                "line": 17,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsVideoPlayerComponent",
            "id": "component-SdsVideoPlayerComponent-7f06797e3bbc19532544d7018135f1ad",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-video-player",
            "styleUrls": [
                "./css/px-video.css"
            ],
            "styles": [],
            "templateUrl": [
                "./video-player.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "VPConfiguration",
                    "line": 27,
                    "type": "VPInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "config",
                    "type": "InitPxVideoConfig",
                    "optional": false,
                    "description": "",
                    "line": 28,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\nimport { VPInterface } from './video-player';\n\ninterface InitPxVideoConfig {\n  \"videoId\": string,\n  \"captionsOnDefault\": boolean,\n  \"seekInterval\": number,\n  \"videoTitle\": string,\n  \"debug\": boolean\n}\n\ndeclare const GLOBAL_STRINGS: any;\n\ndeclare class InitPxVideo {\n  constructor(config: InitPxVideoConfig);\n}\n\n@Component({\n  selector: 'sds-video-player',\n  templateUrl: './video-player.component.html',\n  styleUrls: ['./css/px-video.css'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class SdsVideoPlayerComponent implements AfterViewInit {\n  @Input() VPConfiguration: VPInterface;\n  private config: InitPxVideoConfig;\n\n  ngAfterViewInit() {\n    this.config = {\n      videoId: this.VPConfiguration.id,\n      captionsOnDefault: false,\n      seekInterval: this.VPConfiguration.seekInterval,\n      videoTitle: 'Video Player',\n      debug: this.VPConfiguration.debug\n    }\n\n    new InitPxVideo(this.config);\n  }\n\n  constructor() {\n}\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* utilities */\n.pull-left {\n  float: left;\n}\n.sr-only {\n  position: absolute !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n}\n.hide {\n  display: none;\n}\n.show-inline {\n  display: inline-block;\n}\n\n/* containers */\n.px-video-img-captions-container * {\n  box-sizing: border-box;\n}\n\n.px-video-img-captions-container {\n  position: relative;\n}\n\n/* progress indicator */\n.px-video-progress {\n  width: 100%;\n  height: 10px;\n}\n.px-video-progress[value] {\n  /* Reset the default appearance */\n  -webkit-appearance: none;\n  border: none;\n}\n.px-video-progress[value]::-webkit-progress-bar {\n  background-color: #e6e6e6;\n}\n.px-video-progress[value]::-webkit-progress-value {\n  background-color: #009cdf;\n}\n\n/* time */\n.px-video-time {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  float: right;\n  margin-top: 2px;\n  font-size: 14px;\n}\n\n/* caption area */\n.px-video-captions {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.5em;\n  min-height: 2.5em;\n  background-color: #000;\n  color: #fff;\n  font-size: 1.1em;\n  text-align: center;\n  opacity: 0.75;\n}\n\n/* buttons */\n.px-video-controls button {\n  border: 1px #fff solid;\n  background: transparent;\n  padding: 0;\n  margin: 0 5px;\n  width: 25px;\n  height: 20px;\n  overflow: hidden;\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\n}\n.px-video-controls button:focus {\n  border: 1px #999 dotted;\n  outline: none;\n}\n.px-video-controls button {\n  cursor: pointer;\n}\n\n/* restart button */\n.px-video-controls button.px-video-restart {\n  background-position: -6px -333px;\n  margin-left: 0;\n}\n.px-video-controls button.px-video-restart:hover,\n.px-video-controls button.px-video-restart:focus {\n  background-position: -6px -297px;\n}\n\n/* rewind button */\n.px-video-controls button.px-video-rewind {\n  background-position: -6px -189px;\n}\n.px-video-controls button.px-video-rewind:hover,\n.px-video-controls button.px-video-rewind:focus {\n  background-position: -6px -153px;\n}\n\n/* play button */\n.px-video-controls button.px-video-play {\n  background-position: -6px -45px;\n}\n.px-video-controls button.px-video-play:hover,\n.px-video-controls button.px-video-play:focus {\n  background-position: -6px -9px;\n}\n\n/* pause button */\n.px-video-controls button.px-video-pause {\n  background-position: -6px -117px;\n}\n.px-video-controls button.px-video-pause:hover,\n.px-video-controls button.px-video-pause:focus {\n  background-position: -6px -81px;\n}\n\n/* forward button */\n.px-video-controls button.px-video-forward {\n  background-position: -6px -261px;\n}\n.px-video-controls button.px-video-forward:hover,\n.px-video-controls button.px-video-forward:focus {\n  background-position: -6px -225px;\n}\n\n.px-video-fullscreen-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 10px;\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\n  background-position: -6px -907px;\n}\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -943px;\n}\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:hover + label {\n  background-position: -6px -943px;\n  cursor: pointer;\n}\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -943px;\n}\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:checked + label {\n  background-position: -6px -979px;\n}\n.px-video-fullscreen-btn-container\n  input[type=\"checkbox\"]:checked:hover\n  + label {\n  background-position: -6px -1015px;\n}\n\n/* captions button */\n.px-video-captions-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 10px;\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\n  background-position: -6px -835px;\n}\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -799px;\n}\n.px-video-captions-btn-container input[type=\"checkbox\"]:hover + label {\n  background-position: -6px -799px;\n  cursor: pointer;\n}\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -799px;\n}\n.px-video-captions-btn-container input[type=\"checkbox\"]:checked + label {\n  background-position: -6px -871px;\n}\n\n/* mute button */\n.px-video-mute-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 240px;\n  margin-top: 2px;\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\n  background-position: -6px -476px;\n}\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -440px;\n}\n.px-video-mute-btn-container input[type=\"checkbox\"]:hover + label {\n  background-position: -6px -440px;\n  cursor: pointer;\n}\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\n  outline: 1px #999 dotted;\n  background-position: -6px -440px;\n}\n/* checked state of mute button */\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked + label {\n  background-position: -6px -692px;\n}\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:hover + label,\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:focus + label {\n  background-position: -6px -656px;\n}\n\n/* volume range input */\n.px-video-controls input[type=\"range\"] {\n  -webkit-appearance: none;\n  height: 6px;\n  width: 100px;\n  margin-top: 8px;\n  background-color: #e6e6e6;\n  outline: none;\n}\n.px-video-controls input[type=\"range\"]:focus::-webkit-slider-thumb {\n  outline: 1px #999 dotted;\n}\n.px-video-controls input[type=\"range\"]::-moz-range-track {\n  -moz-appearance: none;\n  height: 6px;\n  background-color: #e6e6e6;\n  border: none;\n}\n.px-video-controls input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 10px;\n  width: 6px;\n  background-color: #666;\n}\n.px-video-controls input[type=\"range\"]::-moz-range-thumb {\n  height: 12px;\n  width: 8px;\n  background-color: #666;\n}\n/* fixing display for IE10+ */\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .px-video-controls input[type=\"range\"] {\n    position: relative;\n    padding: 0;\n    height: 8px;\n    top: -3px;\n  }\n  .px-video-time {\n    margin-top: 4px;\n  }\n  .px-video-captions {\n    padding: 8px;\n    min-height: 36px;\n  }\n}\n\n.px-video-container {\n  position: relative;\n}\n.px-video-container.fullscreen {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-cursor-visibility: auto-hide;\n}\n\n/* Fullscreen styles */\n\n/* style applied through js */\n.px-video-controls.js-fullscreen-controls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 940;\n  background: white;\n}\n\n.px-video-captions.js-fullscreen-captions {\n  min-height: 3.5em;\n  font-size: 2.5em;\n  padding: 1em;\n}\n\n.px-timetip {\n  padding: 5px 10px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.83);\n  border-radius: 3px;\n  color: #fff;\n  width: auto;\n}\n.px-timetip:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(43, 43, 43, 0);\n  border-top-color: #2b2b2b;\n  border-width: 10px;\n  margin-left: -10px;\n}\n",
                    "styleUrl": "./css/px-video.css"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 40
            },
            "implements": [
                "AfterViewInit"
            ],
            "templateData": "<div class=\"px-video-container\" id=\"{{VPConfiguration.id}}\" [style.width.px]=\"VPConfiguration.width\" >\n  <div class=\"px-video-img-captions-container\" >\n      <div class=\"px-video-captions hide\" aria-hidden=\"true\"></div>\n      <video width=\"{{VPConfiguration.width}}\" height=\"{{VPConfiguration.height}}\" poster=\"{{VPConfiguration.poster}}\" controls preload={{VPConfiguration.preload}}>\n        <!-- if Safari/Chrome-->\n          <source src=\"{{VPConfiguration.sourceMp4}}\" type=\"video/mp4\" />\n          <!-- If Firefox/Opera/Chrome/IE -->\n          <source src=\"{{VPConfiguration.sourceWebm}}\" type=\"video/webm\" />\n          <track kind=\"subtitles\" kind=\"captions\" label=\"English captions\" src=\"{{VPConfiguration.caption}}\" srclang=\"en\" default />\n      </video>\n  </div>\n  <div class=\"px-video-controls\"></div>\n</div>\n"
        }
    ],
    "modules": [
        {
            "name": "PaginationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "PaginationComponent"
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
                            "name": "PaginationComponent"
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
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
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
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
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
            "name": "SdsAutocompleteModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAutocompleteSearchModule"
                        },
                        {
                            "name": "SdsSelectedResultsModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
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
            "name": "SdsAutocompleteSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SDSClickOutsideModule"
                        },
                        {
                            "name": "SdsTabOutsideModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
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
            "name": "SDSClickOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSClickOutsideDirective"
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
                            "name": "SDSClickOutsideDirective"
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
            "name": "SdsCollapseModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "CollapseDirective"
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
                            "name": "CollapseDirective"
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
            "name": "SdsDialogModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDialogService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
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
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
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
            "name": "SdsDirectivesModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "ExternalLinkDirective"
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
                            "name": "ExternalLinkDirective"
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
                            "name": "SdsCollapseModule"
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
                        },
                        {
                            "name": "SdsTopBannerComponent"
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
            "name": "SdsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
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
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
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
            "name": "SdsObserversModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsObserveWidthDirective"
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
                            "name": "SdsObserveWidthDirective"
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
            "name": "SdsPageModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
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
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
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
            "name": "SdsPopupModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPopupDirective"
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
                            "name": "SdsPopupDirective"
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
            "name": "SdsSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchComponent"
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
                            "name": "SdsSearchComponent"
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
            "name": "SdsSearchResultListModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchResultListComponent"
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
                            "name": "SdsSearchResultListComponent"
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
            "name": "SdsSelectedResultsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSSelectedResultComponent"
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
                            "name": "SDSSelectedResultComponent"
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
            "name": "SdsSideNavigationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAccordionModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
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
            "name": "SdsTabOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSTabOutsideDirective"
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
                            "name": "SDSTabOutsideDirective"
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
            "name": "SdsTextModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
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
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
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
            "name": "SdsToolbarModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
                        },
                        {
                            "name": "SdsToolbarHeaderComponent"
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
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
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
            "name": "SdsTruncateModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTruncateTextByLineDirective"
                        },
                        {
                            "name": "SdsTruncatedTextContainerComponent"
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
                            "name": "SdsTruncateTextByLineDirective"
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
            "name": "SdsVideoPlayerModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsVideoPlayerComponent"
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
                            "name": "SdsVideoPlayerComponent"
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
                "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "animationBody",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "[]",
                "defaultValue": "[\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\n  // decimate the animation performance. Leaving it as `none` solves both issues.\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\n  state('enter', style({transform: 'none'})),\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\n      style({transform: 'none', opacity: 1}))),\n  transition('* => void, * => exit',\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\n]"
            },
            {
                "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                "type": "any",
                "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true\n}"
            },
            {
                "name": "Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                "type": "any",
                "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n}"
            },
            {
                "name": "ChromeFirefoxMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\n  enter: {\n    charCode: 13,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13,\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
            },
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "dialogElementUid",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
            },
            {
                "name": "EdgeMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
            },
            {
                "name": "GLOBAL_STRINGS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                "type": "any"
            },
            {
                "name": "IEMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: 'Spacebar',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
            },
            {
                "name": "mocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\n  ie: IEMocks,\n  edge: EdgeMocks,\n  default: ChromeFirefoxMocks,\n  safari: SafariMocks\n}"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "any"
            },
            {
                "name": "SafariMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: 'Enter',\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: 'Up',\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: 'Down',\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: 'Left',\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: 'Right',\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: 'U+0009',\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: 'U+001B',\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: 'U+0020',\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: 'Shift',\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: 'U+0008',\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: 'U+007F',\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
            },
            {
                "name": "SDS_ACCORDION",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "SDS_DIALOG_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
            },
            {
                "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "object",
                "defaultValue": "{\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}"
            },
            {
                "name": "SDS_MENU_TOKEN",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n)",
                "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
            },
            {
                "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                "type": "any",
                "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n}"
            },
            {
                "name": "SDS_TRUNCATED_TEXT_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>(\n  'SdsTruncatedTextData'\n)",
                "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "sdsDialogAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "literal type",
                "defaultValue": "{\n  /** Animation that is applied on the dialog container by defalt. */\n  dialogContainer: trigger('dialogContainer', animationBody),\n}",
                "description": "<p>Animations used by SdsDialog.</p>\n"
            },
            {
                "name": "sdsExpansionAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "literal type",
                "defaultValue": "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\n    state('expanded', style({height: '*', visibility: 'visible'})),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\n  ])\n}"
            },
            {
                "name": "sdsMenuAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                "type": "literal type",
                "defaultValue": "{\n  transformMenu: trigger('transformMenu', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-menu',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}"
            },
            {
                "name": "sdsToolbarAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "literal type",
                "defaultValue": "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\n      params: { expandedWidth: '300px' }\n    }),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(TOOLBAR_ANIMATION_TIMING)),\n  ])\n}"
            },
            {
                "name": "sdsTruncateTextAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                "type": "literal type",
                "defaultValue": "{\n  container: trigger('container', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-overlay',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}"
            },
            {
                "name": "TOOLBAR_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                "type": "number",
                "defaultValue": "0"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            }
        ],
        "functions": [
            {
                "name": "_applyConfigDefaults",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Applies default options to the dialog config.</p>\n",
                "args": [
                    {
                        "name": "config",
                        "optional": true
                    },
                    {
                        "name": "defaultOptions",
                        "optional": true
                    }
                ],
                "returnType": "SdsDialogConfig",
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 14093,
                            "end": 14099,
                            "flags": 0,
                            "escapedText": "config"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14087,
                            "end": 14092,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Config to be modified.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 14133,
                            "end": 14147,
                            "flags": 0,
                            "escapedText": "defaultOptions"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14127,
                            "end": 14132,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Default options provided.</p>\n"
                    },
                    {
                        "tagName": {
                            "pos": 14178,
                            "end": 14185,
                            "flags": 0,
                            "escapedText": "returns"
                        },
                        "comment": "<p>The new configuration object.</p>\n"
                    }
                ]
            },
            {
                "name": "createFakeEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": ""
                    },
                    {
                        "name": "cancelable",
                        "type": ""
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cancelable",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Dispatches a keydown event from an element. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    },
                    {
                        "name": "key",
                        "optional": true
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "key",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createMouseEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "button",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "button",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createTouchEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "pageX",
                        "type": "number"
                    },
                    {
                        "name": "pageY",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageX",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageY",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "event"
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchFakeEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    }
                ],
                "returnType": "KeyboardEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchMouseEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "event",
                        "type": ""
                    }
                ],
                "returnType": "MouseEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchTouchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "getClosestDialog",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                "args": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "openDialogs"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 3907,
                            "end": 3914,
                            "flags": 0,
                            "escapedText": "element"
                        },
                        "tagName": {
                            "pos": 3901,
                            "end": 3906,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 3973,
                            "end": 3984,
                            "flags": 0,
                            "escapedText": "openDialogs"
                        },
                        "tagName": {
                            "pos": 3967,
                            "end": 3972,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>References to the currently-open dialogs.</p>\n"
                    }
                ]
            },
            {
                "name": "patchElementFocus",
                "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                "args": [
                    {
                        "name": "element"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "element",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "throwSdsDialogContentAlreadyAttachedError",
                "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                "args": []
            }
        ],
        "typealiases": [
            {
                "name": "DialogRole",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"dialog\" | \"alertdialog\"",
                "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionX",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"before\" | \"after\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu Positions </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionY",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"above\" | \"below\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "",
                "kind": 168
            },
            {
                "name": "MenuSizes",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu available sizes </p>\n",
                "kind": 177
            },
            {
                "name": "SdsAccordionDisplayMode",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"default\" | \"basic\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "description": "<p>Accordion&#39;s display modes. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsAccordionItemState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "description": "<p>Accordion Item&#39;s states. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsToolbarState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "description": "<p>Toolbar&#39;s states. </p>\n",
                "kind": 168
            }
        ],
        "enumerations": [
            {
                "name": "KEYS",
                "childs": [
                    {
                        "name": "ENTER",
                        "value": "enter"
                    },
                    {
                        "name": "UP",
                        "value": "up"
                    },
                    {
                        "name": "DOWN",
                        "value": "down"
                    },
                    {
                        "name": "LEFT",
                        "value": "left"
                    },
                    {
                        "name": "RIGHT",
                        "value": "right"
                    },
                    {
                        "name": "TAB",
                        "value": "tab"
                    },
                    {
                        "name": "ESC",
                        "value": "esc"
                    },
                    {
                        "name": "SPACE",
                        "value": "space"
                    },
                    {
                        "name": "SHIFT",
                        "value": "shift"
                    },
                    {
                        "name": "BACKSPACE",
                        "value": "backspace"
                    },
                    {
                        "name": "ONE",
                        "value": "1"
                    },
                    {
                        "name": "TWO",
                        "value": "2"
                    },
                    {
                        "name": "THREE",
                        "value": "3"
                    },
                    {
                        "name": "FOUR",
                        "value": "4"
                    },
                    {
                        "name": "FIVE",
                        "value": "5"
                    },
                    {
                        "name": "SIX",
                        "value": "6"
                    },
                    {
                        "name": "SEVEN",
                        "value": "7"
                    },
                    {
                        "name": "EIGHT",
                        "value": "8"
                    },
                    {
                        "name": "NINE",
                        "value": "9"
                    },
                    {
                        "name": "ZERO",
                        "value": "0"
                    },
                    {
                        "name": "DELETE",
                        "value": "delete"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
            },
            {
                "name": "NavigationMode",
                "childs": [
                    {
                        "name": "INTERNAL"
                    },
                    {
                        "name": "EXTERNAL"
                    },
                    {
                        "name": "EVENT"
                    },
                    {
                        "name": "LABEL"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
            },
            {
                "name": "SelectionMode",
                "childs": [
                    {
                        "name": "SINGLE"
                    },
                    {
                        "name": "MULTIPLE"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
            }
        ],
        "groupedVariables": {
            "libs/packages/components/src/lib/accordion/accordion-animations.ts": [
                {
                    "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                },
                {
                    "name": "sdsExpansionAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\n    state('expanded', style({height: '*', visibility: 'visible'})),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\n  ])\n}"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-animations.ts": [
                {
                    "name": "animationBody",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "[]",
                    "defaultValue": "[\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\n  // decimate the animation performance. Leaving it as `none` solves both issues.\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\n  state('enter', style({transform: 'none'})),\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\n      style({transform: 'none', opacity: 1}))),\n  transition('* => void, * => exit',\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\n]"
                },
                {
                    "name": "sdsDialogAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\n  /** Animation that is applied on the dialog container by defalt. */\n  dialogContainer: trigger('dialogContainer', animationBody),\n}",
                    "description": "<p>Animations used by SdsDialog.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                    "type": "any",
                    "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true\n}"
                }
            ],
            "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                    "type": "any",
                    "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n}"
                }
            ],
            "libs/packages/components/src/lib/key-helper/key-mocks.ts": [
                {
                    "name": "ChromeFirefoxMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\n  enter: {\n    charCode: 13,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13,\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
                },
                {
                    "name": "EdgeMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
                },
                {
                    "name": "IEMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: 'Spacebar',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
                },
                {
                    "name": "mocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\n  ie: IEMocks,\n  edge: EdgeMocks,\n  default: ChromeFirefoxMocks,\n  safari: SafariMocks\n}"
                },
                {
                    "name": "SafariMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\n  enter: {\n    charCode: 0,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: 'Enter',\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: 'Up',\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: 'Down',\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: 'Left',\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: 'Right',\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: 'U+0009',\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: 'U+001B',\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: 'U+0020',\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: 'Shift',\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: 'U+0008',\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: 'U+007F',\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}"
                }
            ],
            "libs/packages/components/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "dialogElementUid",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/video-player/video-player.component.ts": [
                {
                    "name": "GLOBAL_STRINGS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SDS_ACCORDION",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                    "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "SDS_DIALOG_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                    "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                    "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                    "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "object",
                    "defaultValue": "{\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}"
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "SDS_MENU_TOKEN",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n)",
                    "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/selected-result/selected-result.component.ts": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                    "type": "any",
                    "defaultValue": "{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n}"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts": [
                {
                    "name": "SDS_TRUNCATED_TEXT_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>(\n  'SdsTruncatedTextData'\n)",
                    "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/menu/menu-animations.ts": [
                {
                    "name": "sdsMenuAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\n  transformMenu: trigger('transformMenu', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-menu',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar-animations.ts": [
                {
                    "name": "sdsToolbarAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\n      params: { expandedWidth: '300px' }\n    }),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(TOOLBAR_ANIMATION_TIMING)),\n  ])\n}"
                },
                {
                    "name": "TOOLBAR_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts": [
                {
                    "name": "sdsTruncateTextAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\n  container: trigger('container', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-overlay',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-ref.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                    "type": "number",
                    "defaultValue": "0"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ]
        },
        "groupedFunctions": {
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "_applyConfigDefaults",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Applies default options to the dialog config.</p>\n",
                    "args": [
                        {
                            "name": "config",
                            "optional": true
                        },
                        {
                            "name": "defaultOptions",
                            "optional": true
                        }
                    ],
                    "returnType": "SdsDialogConfig",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 14093,
                                "end": 14099,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14087,
                                "end": 14092,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config to be modified.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 14133,
                                "end": 14147,
                                "flags": 0,
                                "escapedText": "defaultOptions"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14127,
                                "end": 14132,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Default options provided.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 14178,
                                "end": 14185,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The new configuration object.</p>\n"
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/event-objects.ts": [
                {
                    "name": "createFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": ""
                        },
                        {
                            "name": "cancelable",
                            "type": ""
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "cancelable",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Dispatches a keydown event from an element. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        },
                        {
                            "name": "key",
                            "optional": true
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "key",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "button",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "button",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "pageX",
                            "type": "number"
                        },
                        {
                            "name": "pageY",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageX",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageY",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/dispatch-events.ts": [
                {
                    "name": "dispatchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "event"
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        }
                    ],
                    "returnType": "KeyboardEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "returnType": "MouseEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "getClosestDialog",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        },
                        {
                            "name": "openDialogs"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3907,
                                "end": 3914,
                                "flags": 0,
                                "escapedText": "element"
                            },
                            "tagName": {
                                "pos": 3901,
                                "end": 3906,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 3973,
                                "end": 3984,
                                "flags": 0,
                                "escapedText": "openDialogs"
                            },
                            "tagName": {
                                "pos": 3967,
                                "end": 3972,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>References to the currently-open dialogs.</p>\n"
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/element-focus.ts": [
                {
                    "name": "patchElementFocus",
                    "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "element",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-container.component.ts": [
                {
                    "name": "throwSdsDialogContentAlreadyAttachedError",
                    "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                    "args": []
                }
            ]
        },
        "groupedEnumerations": {
            "libs/packages/components/src/lib/key-helper/key-helper.ts": [
                {
                    "name": "KEYS",
                    "childs": [
                        {
                            "name": "ENTER",
                            "value": "enter"
                        },
                        {
                            "name": "UP",
                            "value": "up"
                        },
                        {
                            "name": "DOWN",
                            "value": "down"
                        },
                        {
                            "name": "LEFT",
                            "value": "left"
                        },
                        {
                            "name": "RIGHT",
                            "value": "right"
                        },
                        {
                            "name": "TAB",
                            "value": "tab"
                        },
                        {
                            "name": "ESC",
                            "value": "esc"
                        },
                        {
                            "name": "SPACE",
                            "value": "space"
                        },
                        {
                            "name": "SHIFT",
                            "value": "shift"
                        },
                        {
                            "name": "BACKSPACE",
                            "value": "backspace"
                        },
                        {
                            "name": "ONE",
                            "value": "1"
                        },
                        {
                            "name": "TWO",
                            "value": "2"
                        },
                        {
                            "name": "THREE",
                            "value": "3"
                        },
                        {
                            "name": "FOUR",
                            "value": "4"
                        },
                        {
                            "name": "FIVE",
                            "value": "5"
                        },
                        {
                            "name": "SIX",
                            "value": "6"
                        },
                        {
                            "name": "SEVEN",
                            "value": "7"
                        },
                        {
                            "name": "EIGHT",
                            "value": "8"
                        },
                        {
                            "name": "NINE",
                            "value": "9"
                        },
                        {
                            "name": "ZERO",
                            "value": "0"
                        },
                        {
                            "name": "DELETE",
                            "value": "delete"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
                }
            ],
            "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts": [
                {
                    "name": "NavigationMode",
                    "childs": [
                        {
                            "name": "INTERNAL"
                        },
                        {
                            "name": "EXTERNAL"
                        },
                        {
                            "name": "EVENT"
                        },
                        {
                            "name": "LABEL"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
                }
            ],
            "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts": [
                {
                    "name": "SelectionMode",
                    "childs": [
                        {
                            "name": "SINGLE"
                        },
                        {
                            "name": "MULTIPLE"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
                }
            ]
        },
        "groupedTypeAliases": {
            "libs/packages/components/src/lib/dialog/dialog-config.ts": [
                {
                    "name": "DialogRole",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"dialog\" | \"alertdialog\"",
                    "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                    "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "MenuPositionX",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"before\" | \"after\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu Positions </p>\n",
                    "kind": 168
                },
                {
                    "name": "MenuPositionY",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"above\" | \"below\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "",
                    "kind": 168
                },
                {
                    "name": "MenuSizes",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu available sizes </p>\n",
                    "kind": 177
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SdsAccordionDisplayMode",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"default\" | \"basic\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "description": "<p>Accordion&#39;s display modes. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "SdsAccordionItemState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "description": "<p>Accordion Item&#39;s states. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "SdsToolbarState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "description": "<p>Toolbar&#39;s states. </p>\n",
                    "kind": 168
                }
            ]
        }
    }
};

export default COMPONENTS;