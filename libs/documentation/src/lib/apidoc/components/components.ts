const COMPONENTS = {
  pipes: [
    {
      name: 'SdsDatePipe',
      id: 'pipe-SdsDatePipe-9a8b1ee059f6b5ed6b79441f4ee7b7e9',
      file: 'libs/packages/components/src/lib/date/sds-date.pipe.ts',
      type: 'pipe',
      description: '',
      properties: [],
      methods: [
        {
          name: 'transform',
          args: [
            {
              name: 'value',
              type: 'string | number',
            },
          ],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 11,
          jsdoctags: [
            {
              name: 'value',
              type: 'string | number',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      ngname: 'sdsDate',
      sourceCode:
        "import { Pipe, PipeTransform } from '@angular/core';\nimport { DatePipe } from '@angular/common';\n\n@Pipe({\n  name: 'sdsDate'\n})\nexport class SdsDatePipe implements PipeTransform {\n\n  constructor(private datePipe: DatePipe) { }\n\n  transform(value: string | number): string {\n    const passedInDate = new Date(value);\n    const now = new Date();\n\n    if(\n      now.getFullYear() === passedInDate.getFullYear() &&\n      now.getMonth() === passedInDate.getMonth() &&\n      now.getDate() === passedInDate.getDate()\n    ){\n      return this.datePipe.transform(passedInDate, 'shortTime');\n    } else if(now.getFullYear() === passedInDate.getFullYear()){\n      return this.datePipe.transform(passedInDate, 'MMM d');\n    } else {\n      return this.datePipe.transform(passedInDate, 'mediumDate');\n    }\n  }\n\n}\n",
    },
  ],
  interfaces: [
    {
      name: 'DialogPosition',
      id: 'interface-DialogPosition-1566a6a7b1ab371c1f52bc1d4b5afcd9',
      file: 'libs/packages/components/src/lib/dialog/dialog-config.ts',
      type: 'interface',
      sourceCode:
        "import { ViewContainerRef } from '@angular/core';\nimport { Direction } from '@angular/cdk/bidi';\nimport { ScrollStrategy } from '@angular/cdk/overlay';\n\n/** Valid ARIA roles for a dialog element. */\nexport type DialogRole = 'dialog' | 'alertdialog';\n\n/** Possible overrides for a dialog's position. */\nexport interface DialogPosition {\n  /** Override for the dialog's top position. */\n  top?: string;\n\n  /** Override for the dialog's bottom position. */\n  bottom?: string;\n\n  /** Override for the dialog's left position. */\n  left?: string;\n\n  /** Override for the dialog's right position. */\n  right?: string;\n}\n\n/** Custom Slide Out Panel configurations */\nexport interface SlideOutConfig {\n  /** Width of the slide out panel */\n  width?: string;\n\n  /** Time that it takes to open and close the panel */\n  time?: string;\n}\n\n/**\n * Configuration for opening a modal dialog with the SdsDialog service.\n */\nexport class SdsDialogConfig<D = any> {\n\n  /**\n   * Where the attached component should live in Angular's *logical* component tree.\n   * This affects what is available for injection and the change detection order for the\n   * component instantiated inside of the dialog. This does not affect where the dialog\n   * content will be rendered.\n   */\n  viewContainerRef?: ViewContainerRef;\n\n  /** ID for the dialog. If omitted, a unique one will be generated. */\n  id?: string;\n\n  /** The ARIA role of the dialog element. */\n  role?: DialogRole = 'dialog';\n\n  /** Custom class for the overlay pane. */\n  panelClass?: string | string[] = '';\n\n  /** Whether the dialog has a backdrop. */\n  hasBackdrop?= true;\n\n  /** Custom class for the backdrop, */\n  backdropClass?= '';\n\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\n  disableClose?= false;\n\n  /** Width of the dialog. */\n  width?= '';\n\n  /** Height of the dialog. */\n  height?= '';\n\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\n  minWidth?: number | string;\n\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\n  minHeight?: number | string;\n\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\n  maxWidth?: number | string = '80vw';\n\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\n  maxHeight?: number | string;\n\n  /** Position overrides. */\n  position?: DialogPosition;\n\n  /** Data being injected into the child component. */\n  data?: D | null = null;\n\n  /** Layout direction for the dialog's content. */\n  direction?: Direction;\n\n  /** ID of the element that describes the dialog. */\n  ariaDescribedBy?: string | null = null;\n\n  /** Aria label to assign to the dialog element */\n  ariaLabel?: string | null = null;\n\n  /** Whether the dialog should focus the first focusable element on open. */\n  autoFocus?= true;\n\n  /**\n   * Whether the dialog should restore focus to the\n   * previously-focused element, after it's closed.\n   */\n  restoreFocus?= true;\n\n  /** Scroll strategy to be used for the dialog. */\n  scrollStrategy?: ScrollStrategy;\n\n  /**\n   * Whether the dialog should close when the user goes backwards/forwards in history.\n   * Note that this usually doesn't include clicking on links (unless the user is using\n   * the `HashLocationStrategy`).\n   */\n  closeOnNavigation?= true;\n\n  /**\n   * Wheter the dialog its an alert\n   */\n  alert?: 'warning' | 'info' | 'error' | 'success';\n\n  /**\n   * Whether to display the close button in dialog header\n   */\n  displayCloseBtn?= true;\n\n  /**\n   * Whether dialog is a slide-out. Changes enter and exit animation, and adds\n   * class `dialog-slide-out` to container\n   */\n  slideOut?: boolean | SlideOutConfig = false;\n}\n",
      properties: [
        {
          name: 'bottom',
          type: 'string',
          optional: true,
          description:
            '<p>Override for the dialog&#39;s bottom position. </p>\n',
          line: 14,
        },
        {
          name: 'left',
          type: 'string',
          optional: true,
          description: '<p>Override for the dialog&#39;s left position. </p>\n',
          line: 17,
        },
        {
          name: 'right',
          type: 'string',
          optional: true,
          description:
            '<p>Override for the dialog&#39;s right position. </p>\n',
          line: 20,
        },
        {
          name: 'top',
          type: 'string',
          optional: true,
          description: '<p>Override for the dialog&#39;s top position. </p>\n',
          line: 11,
        },
      ],
      indexSignatures: [],
      kind: 150,
      description: '<p>Possible overrides for a dialog&#39;s position. </p>\n',
      methods: [],
    },
    {
      name: 'INavigationLink',
      id: 'interface-INavigationLink-77ea232dd64ab74fe9e2f7c81b3b5ff4',
      file:
        'libs/packages/components/src/lib/common-navigation/common-navigation-model.ts',
      type: 'interface',
      sourceCode:
        'export interface INavigationLink {\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n}\n\nexport enum NavigationMode {\n    INTERNAL, EXTERNAL, EVENT, LABEL\n}\n\nexport interface Selectable {\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n}\n',
      properties: [
        {
          name: 'mode',
          type: 'NavigationMode',
          optional: false,
          description:
            '<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n',
          line: 15,
        },
        {
          name: 'route',
          type: 'string',
          optional: false,
          description: '<p>Navigation Route </p>\n',
          line: 10,
        },
        {
          name: 'text',
          type: 'string',
          optional: false,
          description: '<p>Text to be displayed in the link</p>\n',
          line: 5,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
    {
      name: 'InitPxVideoConfig',
      id: 'interface-InitPxVideoConfig-8a5633d645af5ee69ebab40d5246abcc',
      file:
        'libs/packages/components/src/lib/video-player/video-player.component.ts',
      type: 'interface',
      sourceCode:
        "import {\n  Component,\n  ViewChild,\n  Input,\n  ElementRef,\n  AfterViewInit,\n  ViewEncapsulation,\n  Renderer2,\n  OnChanges,\n  AfterContentInit,\n  OnInit,\n  ChangeDetectorRef,\n  OnDestroy,\n  Inject,\n} from '@angular/core';\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\nimport { VPInterface } from './video-player';\nimport { DOCUMENT } from '@angular/common';\n\ninterface InitPxVideoConfig {\n  videoId: string;\n  captionsOnDefault: boolean;\n  seekInterval: number;\n  videoTitle: string;\n  debug: boolean;\n}\n\ndeclare const GLOBAL_STRINGS: any;\n\ndeclare class InitPxVideo {\n  constructor(config: InitPxVideoConfig);\n}\n\n@Component({\n  selector: 'sds-video-player',\n  templateUrl: './video-player.component.html',\n  styleUrls: ['./css/px-video.css'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class SdsVideoPlayerComponent\n  implements AfterViewInit, OnChanges, OnInit, OnDestroy {\n  @Input() VPConfiguration: VPInterface;\n  @ViewChild('video') video: ElementRef;\n  private config: InitPxVideoConfig;\n  @Input() crossorigin = '';\n\n  loadVideoSource = false;\n\n  constructor(\n    private elementRef: ElementRef,\n    private renderer2: Renderer2,\n    private cdr: ChangeDetectorRef,\n    @Inject(DOCUMENT) private document: any\n  ) {}\n\n  ngOnDestroy() {\n    let element = this.document.getElementById('px-video-aria-announce');\n    if (element) {\n      this.renderer2.removeChild(this.elementRef, element);\n    }\n  }\n  ngOnInit() {\n    if (this.VPConfiguration.preload != 'none') {\n      this.loadVideoSource = true;\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.crossorigin) {\n      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');\n      id.setAttribute('crossorigin', this.crossorigin);\n    }\n    this.config = {\n      videoId: this.VPConfiguration.id,\n      captionsOnDefault: false,\n      seekInterval: this.VPConfiguration.seekInterval,\n      videoTitle: 'Video Player',\n      debug: this.VPConfiguration.debug,\n    };\n\n    const video = new InitPxVideo(this.config);\n    this.video.nativeElement.setAttribute(\n      'style',\n      'width:' + this.VPConfiguration.width + ';'\n    );\n\n    const progressElement: HTMLProgressElement = this.elementRef.nativeElement.querySelector(\n      'progress'\n    );\n    \n    if (progressElement) {\n      this.renderer2.setAttribute(\n        progressElement,\n        'aria-label',\n        this.VPConfiguration.description + ' progress bar'\n      );\n    }\n\n    if (this.VPConfiguration.preload === 'none') {\n      this._loadVideoSourceOnDemand();\n    }\n  }\n\n  ngOnChanges(changes) {\n    if (changes && changes.crossorigin) {\n      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');\n      if (id) {\n        id.setAttribute('crossorigin', this.crossorigin);\n      }\n    }\n  }\n\n  /**\n   * IE and Edge ignore preload attribute and load video data eagerly. In order to\n   * workaround those such browsers, we add video source only after user clicks\n   * on play or restart button of the video.\n   */\n  private _loadVideoSourceOnDemand() {\n    const playButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(\n      '.px-video-play'\n    );\n    const restartButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(\n      '.px-video-restart'\n    );\n    const video: HTMLVideoElement = this.elementRef.nativeElement.querySelector(\n      '#videoPlayer'\n    );\n\n    const loadVideo = ($event) => {\n      if (this.loadVideoSource) {\n        return;\n      }\n\n      this.loadVideoSource = true;\n\n      // Due to event handler timing issues in safari, the browser does not load the source\n      // when play and source are set at the same time. So we first set the source, wait for\n      // an event loop, pause, then play the video to trigger source loading\n      setTimeout(() => {\n        video.pause();\n        video.play();\n      });\n    };\n\n    if (!playButton || !restartButton) {\n      // Edge case - if the button to toggle video source does not exist in dom, then add in the\n      // video source and let the browser decide when to fetch video data\n      this.loadVideoSource = true;\n    } else {\n      playButton.onclick = loadVideo;\n      restartButton.onclick = loadVideo;\n    }\n  }\n}\n",
      properties: [
        {
          name: 'captionsOnDefault',
          type: 'boolean',
          optional: false,
          description: '',
          line: 23,
        },
        {
          name: 'debug',
          type: 'boolean',
          optional: false,
          description: '',
          line: 26,
        },
        {
          name: 'seekInterval',
          type: 'number',
          optional: false,
          description: '',
          line: 24,
        },
        {
          name: 'videoId',
          type: 'string',
          optional: false,
          description: '',
          line: 22,
        },
        {
          name: 'videoTitle',
          type: 'string',
          optional: false,
          description: '',
          line: 25,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
    {
      name: 'SdsAccordionBase',
      id: 'interface-SdsAccordionBase-2b6e6aeafd6e6801eb33c71834068be0',
      file: 'libs/packages/components/src/lib/accordion/accordion-base.ts',
      type: 'interface',
      sourceCode:
        "import {InjectionToken} from '@angular/core';\nimport {CdkAccordion} from '@angular/cdk/accordion';\n\n/** Accordion's display modes. */\nexport type SdsAccordionDisplayMode = 'default' | 'basic';\n\n/**\n * Base interface for a `SdsAccordion`.\n */\nexport interface SdsAccordionBase extends CdkAccordion {\n  /** Display mode used for all accordion items in the accordion. */\n  displayMode: SdsAccordionDisplayMode;\n\n  /** Handles keyboard events coming in from the item headers. */\n  _handleHeaderKeydown: (event: KeyboardEvent) => void;\n\n  /** Handles focus events on the item headers. */\n  _handleHeaderFocus: (header: any) => void;\n}\n\n\n/**\n * Token used to provide a `SdsAccordion` to `SdsAccordionItem`.\n * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.\n */\nexport const SDS_ACCORDION = new InjectionToken<SdsAccordionBase>('SDS_ACCORDION');\n",
      properties: [
        {
          name: '_handleHeaderFocus',
          type: 'function',
          optional: false,
          description: '<p>Handles focus events on the item headers. </p>\n',
          line: 19,
        },
        {
          name: '_handleHeaderKeydown',
          type: 'function',
          optional: false,
          description:
            '<p>Handles keyboard events coming in from the item headers. </p>\n',
          line: 16,
        },
        {
          name: 'displayMode',
          type: 'SdsAccordionDisplayMode',
          optional: false,
          description:
            '<p>Display mode used for all accordion items in the accordion. </p>\n',
          line: 13,
        },
      ],
      indexSignatures: [],
      kind: 150,
      description: '<p>Base interface for a <code>SdsAccordion</code>.</p>\n',
      methods: [],
      extends: 'CdkAccordion',
    },
    {
      name: 'SDSAutocompleteServiceInterface',
      id:
        'interface-SDSAutocompleteServiceInterface-789c2f09fc917454d7d68b1fa43ff91c',
      file:
        'libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts',
      type: 'interface',
      sourceCode:
        "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
      properties: [],
      indexSignatures: [],
      kind: 152,
      methods: [
        {
          name: 'getDataByText',
          args: [
            {
              name: 'currentItems',
              type: 'number',
            },
            {
              name: 'searchValue',
              type: 'string',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'Observable<SDSHiercarchicalServiceResult>',
          typeParameters: [],
          line: 7,
          description: '',
          jsdoctags: [
            {
              name: 'currentItems',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: {
                pos: 116,
                end: 127,
                flags: 0,
                escapedText: 'searchValue',
              },
              type: 'string',
              optional: true,
              tagName: {
                pos: 110,
                end: 115,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
      ],
    },
    {
      name: 'SDSHiercarchicalServiceResult',
      id:
        'interface-SDSHiercarchicalServiceResult-789c2f09fc917454d7d68b1fa43ff91c',
      file:
        'libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts',
      type: 'interface',
      sourceCode:
        "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
      properties: [
        {
          name: 'items',
          type: 'object[]',
          optional: false,
          description: '',
          line: 14,
        },
        {
          name: 'totalItems',
          type: 'number',
          optional: false,
          description: '',
          line: 19,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
    {
      name: 'SdsMenuInterface',
      id: 'interface-SdsMenuInterface-99189209fb0bfc13ba0d62e8ec0e324e',
      file: 'libs/packages/components/src/lib/menu/menu.component.ts',
      type: 'interface',
      sourceCode:
        "import {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  Component,\n  ElementRef,\n  EventEmitter,\n  InjectionToken,\n  Input,\n  OnDestroy,\n  Output,\n  TemplateRef,\n  ViewChild,\n  ViewEncapsulation,\n  OnInit\n} from '@angular/core';\nimport { AnimationEvent } from '@angular/animations';\nimport {\n  ESCAPE,\n  DOWN_ARROW,\n  UP_ARROW,\n  HOME,\n  END,\n  hasModifierKey\n} from '@angular/cdk/keycodes';\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { Subscription } from 'rxjs';\nimport { sdsMenuAnimations } from './menu-animations';\nimport { SdsMenuItemComponent } from './menu-item.component';\n\n/** Menu Positions */\nexport type MenuPositionX = 'before' | 'after';\nexport type MenuPositionY = 'above' | 'below';\n\n/** Menu available sizes */\n// sm = 'small'\nexport type MenuSizes = 'sm';\n\n/** Injection token used to provide the parent menu to menu items. */\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n);\n\n/** Menu Interface */\nexport interface SdsMenuInterface<T = any> {\n  xPosition: MenuPositionX;\n  yPosition: MenuPositionY;\n  overlapTrigger: boolean;\n  templateRef: TemplateRef<any>;\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\n  parentMenu?: SdsMenuInterface;\n  size?: MenuSizes;\n  focusFirstItem: (origin?: FocusOrigin) => void;\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\n  addItem?: (item: T) => void;\n  insertItem?: (item: T, index: number) => void;\n  removeItem?: (item: T) => void;\n}\n\n@Component({\n  selector: 'sds-menu',\n  exportAs: 'sdsMenu',\n  templateUrl: 'menu.component.html',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  animations: [sdsMenuAnimations.transformMenu],\n  providers: [\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\n  ]\n})\nexport class SdsMenuComponent\n  implements\n  OnInit,\n  AfterContentInit,\n  OnDestroy,\n  SdsMenuInterface<SdsMenuItemComponent> {\n  /** After | Before the menu triger element */\n  private _xPosition: MenuPositionX = 'after';\n\n  /** Above | Below the menu triger element */\n  private _yPosition: MenuPositionY = 'below';\n\n  /** Manage browser focus */\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\n\n  /** Menu items inside the current menu. */\n  private _items: SdsMenuItemComponent[] = [];\n\n  /** Subscription to tab events on the menu panel */\n  private _tabSubscription = Subscription.EMPTY;\n\n  /** Stores <sds-menu> classes */\n  private _previousPanelClass: string;\n\n  /** Config object to be passed into the menu's ngClass */\n  _classList: { [key: string]: boolean } = {};\n\n  /** Current state of the panel animation. */\n  _panelAnimationState: 'void' | 'enter' = 'void';\n\n  /** Grab the component template */\n  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;\n\n  /**\n   * Size of menu component.\n   * Affects the font-size of the menu items and\n   * the size of the close button in the menu header\n   */\n  @Input() size: MenuSizes;\n\n  /** Position of the menu in the X axis. */\n  @Input()\n  get xPosition(): MenuPositionX {\n    return this._xPosition;\n  }\n  set xPosition(value: MenuPositionX) {\n    this._xPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Position of the menu in the Y axis. */\n  @Input()\n  get yPosition(): MenuPositionY {\n    return this._yPosition;\n  }\n  set yPosition(value: MenuPositionY) {\n    this._yPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Whether menu panel overlaps trigger element */\n  @Input()\n  get overlapTrigger(): boolean {\n    return this._overlapTrigger;\n  }\n  set overlapTrigger(value: boolean) {\n    this._overlapTrigger = coerceBooleanProperty(value);\n  }\n  private _overlapTrigger = false;\n\n  /** Transfer classes from the sds-menu to the overlay container */\n  @Input('class')\n  set panelClass(classes: string) {\n    const previousPanelClass = this._previousPanelClass;\n    // Remove previous classes from current set of classes\n    if (previousPanelClass && previousPanelClass.length) {\n      previousPanelClass.split(' ').forEach((className: string) => {\n        this._classList[className] = false;\n      });\n    }\n\n    this._previousPanelClass = classes;\n\n    // Adds new classes to current set of classes\n    if (classes && classes.length) {\n      classes.split(' ').forEach((className: string) => {\n        this._classList[className] = true;\n      });\n\n      // Remove all classes from <sds-menu>\n      this._elementRef.nativeElement.className = '';\n    }\n  }\n\n  /** Event emitted when the menu is closed. */\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\n\n  constructor(private _elementRef: ElementRef<HTMLElement>) { }\n\n  ngOnInit() {\n    this.setPositionClasses();\n  }\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\n      this._items\n    ).withWrap();\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\n      this.closed.emit('tab')\n    );\n  }\n\n  ngOnDestroy() {\n    this._tabSubscription.unsubscribe();\n    this.closed.complete();\n  }\n\n  /** Focus the first item in the menu */\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\n  }\n\n  /** Adds classes to the menu panel based on its position */\n  setPositionClasses(\n    posX: MenuPositionX = this.xPosition,\n    posY: MenuPositionY = this.yPosition\n  ) {\n    const classes = this._classList;\n    classes['sds-menu-before'] = posX === 'before';\n    classes['sds-menu-after'] = posX === 'after';\n    classes['sds-menu-above'] = posY === 'above';\n    classes['sds-menu-below'] = posY === 'below';\n  }\n\n  /** Adds a menu item with the menu. */\n  addItem(item: SdsMenuItemComponent) {\n    if (this._items.indexOf(item) === -1) {\n      this._items.push(item);\n    }\n  }\n\n  /** Inserts a menu item at an index */\n  insertItem(item: SdsMenuItemComponent, index: number) {\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\n      this._items.splice(index, 0, item);\n    }\n  }\n\n  /** Removes an item from the menu. */\n  removeItem(item: SdsMenuItemComponent) {\n    const index = this._items.indexOf(item);\n    if (this._items.indexOf(item) > -1) {\n      this._items.splice(index, 1);\n    }\n  }\n\n  /** Handle a keyboard event from the menu */\n  _handleKeydown(event: KeyboardEvent) {\n    // tslint:disable-next-line: deprecation\n    const keyCode = event.keyCode;\n    const manager = this._keyManager;\n\n    switch (keyCode) {\n      case ESCAPE:\n        this.closed.emit('keydown');\n        break;\n      case HOME:\n      case END:\n        if (!hasModifierKey(event)) {\n          keyCode === HOME\n            ? manager.setFirstItemActive()\n            : manager.setLastItemActive();\n          event.preventDefault();\n        }\n        break;\n      default:\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\n          manager.setFocusOrigin('keyboard');\n        }\n\n        manager.onKeydown(event);\n    }\n  }\n\n  /** Starts the enter animation. */\n  _startAnimation() {\n    this._panelAnimationState = 'enter';\n  }\n\n  /** Callback that is invoked when the panel animation completes. */\n  _onAnimationDone(event: AnimationEvent) { }\n\n  /** Resets the panel animation to its initial state. */\n  _resetAnimation() {\n    this._panelAnimationState = 'void';\n  }\n\n  _onAnimationStart(event: AnimationEvent) {\n    // Scroll the content element to the top as soon as the animation starts.\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\n      event.element.scrollTop = 0;\n    }\n  }\n}\n",
      properties: [
        {
          name: 'addItem',
          type: 'function',
          optional: true,
          description: '',
          line: 55,
        },
        {
          name: 'closed',
          type: 'EventEmitter<void | "click" | "keydown" | "tab">',
          optional: false,
          description: '',
          line: 50,
        },
        {
          name: 'focusFirstItem',
          type: 'function',
          optional: false,
          description: '',
          line: 53,
        },
        {
          name: 'insertItem',
          type: 'function',
          optional: true,
          description: '',
          line: 56,
        },
        {
          name: 'overlapTrigger',
          type: 'boolean',
          optional: false,
          description: '',
          line: 48,
        },
        {
          name: 'parentMenu',
          type: 'SdsMenuInterface',
          optional: true,
          description: '',
          line: 51,
        },
        {
          name: 'removeItem',
          type: 'function',
          optional: true,
          description: '',
          line: 57,
        },
        {
          name: 'setPositionClasses',
          type: 'function',
          optional: true,
          description: '',
          line: 54,
        },
        {
          name: 'size',
          type: 'MenuSizes',
          optional: true,
          description: '',
          line: 52,
        },
        {
          name: 'templateRef',
          type: 'TemplateRef<any>',
          optional: false,
          description: '',
          line: 49,
        },
        {
          name: 'xPosition',
          type: 'MenuPositionX',
          optional: false,
          description: '',
          line: 46,
        },
        {
          name: 'yPosition',
          type: 'MenuPositionY',
          optional: false,
          description: '',
          line: 47,
        },
      ],
      indexSignatures: [],
      kind: 150,
      description: '<p>Menu Interface </p>\n',
      methods: [],
    },
    {
      name: 'SdsTreeTableData',
      id: 'interface-SdsTreeTableData-cc4510dee7f1009b4fa42b445dacfc50',
      file: 'libs/packages/components/src/lib/tree-table/tree-table.model.ts',
      type: 'interface',
      sourceCode:
        "export interface SdsTreeTableData {\n  /** Id to use to uniquely idetntify the row */\n  id: string;\n\n  /** Children of row - by default, children rows will be collapsed */\n  children?: SdsTreeTableData[];\n\n  /** \n   * Total number of children for this table data. If this value\n   * is greater than children's length, then a button will be shown\n   * to users to load remaining children\n   */\n  totalChildren: number;\n\n  /** \n   * Additional data to add in - primarly useful for adding in data\n   * to display in the table\n   */\n  [key: string]: any;\n\n  /**\n   * Whether this row is expanded to display its children or not\n   */\n  expanded?: boolean;\n}",
      properties: [
        {
          name: 'children',
          type: 'SdsTreeTableData[]',
          optional: true,
          description:
            '<p>Children of row - by default, children rows will be collapsed </p>\n',
          line: 7,
        },
        {
          name: 'expanded',
          type: 'boolean',
          optional: true,
          description:
            '<p>Whether this row is expanded to display its children or not</p>\n',
          line: 25,
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '<p>Id to use to uniquely idetntify the row </p>\n',
          line: 4,
        },
        {
          name: 'totalChildren',
          type: 'number',
          optional: false,
          description:
            '<p>Total number of children for this table data. If this value\nis greater than children&#39;s length, then a button will be shown\nto users to load remaining children</p>\n',
          line: 14,
        },
      ],
      indexSignatures: [
        {
          id: 'index-declaration-cc4510dee7f1009b4fa42b445dacfc50',
          args: [
            {
              name: 'key',
              type: 'string',
            },
          ],
          returnType: 'any',
          line: 14,
          description:
            '<p>Additional data to add in - primarly useful for adding in data\nto display in the table</p>\n',
        },
      ],
      kind: 150,
      methods: [],
    },
    {
      name: 'SdsTruncateTextData',
      id: 'interface-SdsTruncateTextData-8a0fa5c4ffa157b927aac5b53d6e5e46',
      file:
        'libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts',
      type: 'interface',
      sourceCode:
        "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\n\nexport interface SdsTruncateTextData {\n  text: string;\n}\n\n@Component({\n  selector: 'sds-truncated-text-container',\n  template: `\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n  `,\n  animations: [sdsTruncateTextAnimations.container]\n})\nexport class SdsTruncatedTextContainerComponent {\n  @HostBinding('@container') _animationState = 'void';\n\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\n\n  /** Starts the animation. */\n  startAnimation() {\n    this._animationState = 'enter';\n  }\n\n  /** Resets the animation to its initial state. */\n  resetAnimation() {\n    this._animationState = 'void';\n  }\n\n  /** Intentionally left empty to trigger change detection */\n  @HostListener('@container.done')\n  _onAnimationDone() {}\n}\n",
      properties: [
        {
          name: 'text',
          type: 'string',
          optional: false,
          description: '',
          line: 6,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
    {
      name: 'Selectable',
      id: 'interface-Selectable-77ea232dd64ab74fe9e2f7c81b3b5ff4',
      file:
        'libs/packages/components/src/lib/common-navigation/common-navigation-model.ts',
      type: 'interface',
      sourceCode:
        'export interface INavigationLink {\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n}\n\nexport enum NavigationMode {\n    INTERNAL, EXTERNAL, EVENT, LABEL\n}\n\nexport interface Selectable {\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n}\n',
      properties: [
        {
          name: 'id',
          type: 'string',
          optional: false,
          description:
            '<p>Identifier for the item when search for selected </p>\n',
          line: 26,
        },
        {
          name: 'selected',
          type: 'boolean',
          optional: true,
          description: '<p>Status of if the item is selected </p>\n',
          line: 31,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
    {
      name: 'SlideOutConfig',
      id: 'interface-SlideOutConfig-1566a6a7b1ab371c1f52bc1d4b5afcd9',
      file: 'libs/packages/components/src/lib/dialog/dialog-config.ts',
      type: 'interface',
      sourceCode:
        "import { ViewContainerRef } from '@angular/core';\nimport { Direction } from '@angular/cdk/bidi';\nimport { ScrollStrategy } from '@angular/cdk/overlay';\n\n/** Valid ARIA roles for a dialog element. */\nexport type DialogRole = 'dialog' | 'alertdialog';\n\n/** Possible overrides for a dialog's position. */\nexport interface DialogPosition {\n  /** Override for the dialog's top position. */\n  top?: string;\n\n  /** Override for the dialog's bottom position. */\n  bottom?: string;\n\n  /** Override for the dialog's left position. */\n  left?: string;\n\n  /** Override for the dialog's right position. */\n  right?: string;\n}\n\n/** Custom Slide Out Panel configurations */\nexport interface SlideOutConfig {\n  /** Width of the slide out panel */\n  width?: string;\n\n  /** Time that it takes to open and close the panel */\n  time?: string;\n}\n\n/**\n * Configuration for opening a modal dialog with the SdsDialog service.\n */\nexport class SdsDialogConfig<D = any> {\n\n  /**\n   * Where the attached component should live in Angular's *logical* component tree.\n   * This affects what is available for injection and the change detection order for the\n   * component instantiated inside of the dialog. This does not affect where the dialog\n   * content will be rendered.\n   */\n  viewContainerRef?: ViewContainerRef;\n\n  /** ID for the dialog. If omitted, a unique one will be generated. */\n  id?: string;\n\n  /** The ARIA role of the dialog element. */\n  role?: DialogRole = 'dialog';\n\n  /** Custom class for the overlay pane. */\n  panelClass?: string | string[] = '';\n\n  /** Whether the dialog has a backdrop. */\n  hasBackdrop?= true;\n\n  /** Custom class for the backdrop, */\n  backdropClass?= '';\n\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\n  disableClose?= false;\n\n  /** Width of the dialog. */\n  width?= '';\n\n  /** Height of the dialog. */\n  height?= '';\n\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\n  minWidth?: number | string;\n\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\n  minHeight?: number | string;\n\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\n  maxWidth?: number | string = '80vw';\n\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\n  maxHeight?: number | string;\n\n  /** Position overrides. */\n  position?: DialogPosition;\n\n  /** Data being injected into the child component. */\n  data?: D | null = null;\n\n  /** Layout direction for the dialog's content. */\n  direction?: Direction;\n\n  /** ID of the element that describes the dialog. */\n  ariaDescribedBy?: string | null = null;\n\n  /** Aria label to assign to the dialog element */\n  ariaLabel?: string | null = null;\n\n  /** Whether the dialog should focus the first focusable element on open. */\n  autoFocus?= true;\n\n  /**\n   * Whether the dialog should restore focus to the\n   * previously-focused element, after it's closed.\n   */\n  restoreFocus?= true;\n\n  /** Scroll strategy to be used for the dialog. */\n  scrollStrategy?: ScrollStrategy;\n\n  /**\n   * Whether the dialog should close when the user goes backwards/forwards in history.\n   * Note that this usually doesn't include clicking on links (unless the user is using\n   * the `HashLocationStrategy`).\n   */\n  closeOnNavigation?= true;\n\n  /**\n   * Wheter the dialog its an alert\n   */\n  alert?: 'warning' | 'info' | 'error' | 'success';\n\n  /**\n   * Whether to display the close button in dialog header\n   */\n  displayCloseBtn?= true;\n\n  /**\n   * Whether dialog is a slide-out. Changes enter and exit animation, and adds\n   * class `dialog-slide-out` to container\n   */\n  slideOut?: boolean | SlideOutConfig = false;\n}\n",
      properties: [
        {
          name: 'time',
          type: 'string',
          optional: true,
          description:
            '<p>Time that it takes to open and close the panel </p>\n',
          line: 29,
        },
        {
          name: 'width',
          type: 'string',
          optional: true,
          description: '<p>Width of the slide out panel </p>\n',
          line: 26,
        },
      ],
      indexSignatures: [],
      kind: 150,
      description: '<p>Custom Slide Out Panel configurations </p>\n',
      methods: [],
    },
    {
      name: 'VPInterface',
      id: 'interface-VPInterface-aef0e62b658b36ee1c0d330f95fc35a8',
      file: 'libs/packages/components/src/lib/video-player/video-player.ts',
      type: 'interface',
      sourceCode:
        'export interface VPInterface{\n  sourceWebm: string;\n  sourceMp4: string;\n  height: string;\n  width: string;\n \tcaption: string;\n  poster: string;\n  id: string;\n \tseekInterval: number;\n \tdebug: boolean;\n  preload: string;\n  description?: string;\n}\n',
      properties: [
        {
          name: 'caption',
          type: 'string',
          optional: false,
          description: '',
          line: 6,
        },
        {
          name: 'debug',
          type: 'boolean',
          optional: false,
          description: '',
          line: 10,
        },
        {
          name: 'description',
          type: 'string',
          optional: true,
          description: '',
          line: 12,
        },
        {
          name: 'height',
          type: 'string',
          optional: false,
          description: '',
          line: 4,
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '',
          line: 8,
        },
        {
          name: 'poster',
          type: 'string',
          optional: false,
          description: '',
          line: 7,
        },
        {
          name: 'preload',
          type: 'string',
          optional: false,
          description: '',
          line: 11,
        },
        {
          name: 'seekInterval',
          type: 'number',
          optional: false,
          description: '',
          line: 9,
        },
        {
          name: 'sourceMp4',
          type: 'string',
          optional: false,
          description: '',
          line: 3,
        },
        {
          name: 'sourceWebm',
          type: 'string',
          optional: false,
          description: '',
          line: 2,
        },
        {
          name: 'width',
          type: 'string',
          optional: false,
          description: '',
          line: 5,
        },
      ],
      indexSignatures: [],
      kind: 150,
      methods: [],
    },
  ],
  injectables: [
    {
      name: 'SdsDialogService',
      id: 'injectable-SdsDialogService-20484071e70a1983928235d992d346ef',
      file: 'libs/packages/components/src/lib/dialog/dialog.ts',
      properties: [
        {
          name: '_afterAllClosedAtThisLevel',
          defaultValue: 'new Subject<void>()',
          type: '',
          optional: false,
          description: '',
          line: 79,
          modifierKind: [112, 132],
        },
        {
          name: '_afterOpenedAtThisLevel',
          defaultValue: 'new Subject<SdsDialogRef<any>>()',
          type: '',
          optional: false,
          description: '',
          line: 80,
          modifierKind: [112, 132],
        },
        {
          name: '_ariaHiddenElements',
          defaultValue: 'new Map<Element, string|null>()',
          type: '',
          optional: false,
          description: '',
          line: 81,
          modifierKind: [112],
        },
        {
          name: '_openDialogsAtThisLevel',
          defaultValue: '[]',
          type: 'SdsDialogRef<any>[]',
          optional: false,
          description: '',
          line: 78,
          modifierKind: [112],
        },
        {
          name: '_scrollStrategy',
          type: 'function',
          optional: false,
          description: '',
          line: 82,
          modifierKind: [112],
        },
        {
          name: '_slideOutScrollStrategy',
          type: 'function',
          optional: false,
          description: '',
          line: 83,
          modifierKind: [112],
        },
        {
          name: 'afterAllClosed',
          defaultValue:
            'defer<void>(() => this.openDialogs.length ?\n      this._afterAllClosed :\n      this._afterAllClosed.pipe(startWith(undefined)))',
          type: 'Observable<void>',
          optional: false,
          description:
            '<p>Stream that emits when all open dialog have finished closing.\nWill emit on subscribe if there are no open dialogs to begin with.</p>\n',
          line: 104,
          modifierKind: [132],
        },
      ],
      methods: [
        {
          name: '_attachDialogContainer',
          args: [
            {
              name: 'overlay',
              type: 'OverlayRef',
            },
            {
              name: 'config',
              type: 'SdsDialogConfig',
            },
          ],
          optional: false,
          returnType: 'SdsDialogContainerComponent',
          typeParameters: [],
          line: 243,
          description:
            '<p>Attaches an SdsDialogContainerComponent to a dialog&#39;s already-created overlay.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 8327,
                end: 8334,
                flags: 0,
                escapedText: 'overlay',
              },
              type: 'OverlayRef',
              tagName: {
                pos: 8321,
                end: 8326,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Reference to the dialog&#39;s underlying overlay.</p>\n',
            },
            {
              name: {
                pos: 8393,
                end: 8399,
                flags: 0,
                escapedText: 'config',
              },
              type: 'SdsDialogConfig',
              tagName: {
                pos: 8387,
                end: 8392,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>The dialog configuration.</p>\n',
            },
            {
              tagName: {
                pos: 8432,
                end: 8439,
                flags: 0,
                escapedText: 'returns',
              },
              comment:
                '<p>A promise resolving to a ComponentRef for the attached container.</p>\n',
            },
          ],
        },
        {
          name: '_attachDialogContent',
          args: [
            {
              name: 'componentOrTemplateRef',
              type: 'ComponentType<T> | TemplateRef<T>',
            },
            {
              name: 'dialogContainer',
              type: 'SdsDialogContainerComponent',
            },
            {
              name: 'overlayRef',
              type: 'OverlayRef',
            },
            {
              name: 'config',
              type: 'SdsDialogConfig',
            },
          ],
          optional: false,
          returnType: 'SdsDialogRef<T, R>',
          typeParameters: ['T', 'R'],
          line: 264,
          description:
            '<p>Attaches the user-provided component to the already-created SdsDialogContainerComponent.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 9205,
                end: 9227,
                flags: 0,
                escapedText: 'componentOrTemplateRef',
              },
              type: 'ComponentType<T> | TemplateRef<T>',
              tagName: {
                pos: 9199,
                end: 9204,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>The type of component being loaded into the dialog,\nor a TemplateRef to instantiate as the content.</p>\n',
            },
            {
              name: {
                pos: 9349,
                end: 9364,
                flags: 0,
                escapedText: 'dialogContainer',
              },
              type: 'SdsDialogContainerComponent',
              tagName: {
                pos: 9343,
                end: 9348,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Reference to the wrapping SdsDialogContainerComponent.</p>\n',
            },
            {
              name: {
                pos: 9432,
                end: 9442,
                flags: 0,
                escapedText: 'overlayRef',
              },
              type: 'OverlayRef',
              tagName: {
                pos: 9426,
                end: 9431,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Reference to the overlay in which the dialog resides.</p>\n',
            },
            {
              name: {
                pos: 9509,
                end: 9515,
                flags: 0,
                escapedText: 'config',
              },
              type: 'SdsDialogConfig',
              tagName: {
                pos: 9503,
                end: 9508,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>The dialog configuration.</p>\n',
            },
            {
              tagName: {
                pos: 9548,
                end: 9555,
                flags: 0,
                escapedText: 'returns',
              },
              comment:
                '<p>A promise resolving to the SdsDialogRef that should be returned to the user.</p>\n',
            },
          ],
        },
        {
          name: '_closeDialogs',
          args: [
            {
              name: 'dialogs',
              type: 'SdsDialogRef<any>[]',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 391,
          description: '<p>Closes all of the dialogs in an array. </p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'dialogs',
              type: 'SdsDialogRef<any>[]',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_createInjector',
          args: [
            {
              name: 'config',
              type: 'SdsDialogConfig',
            },
            {
              name: 'dialogRef',
              type: 'SdsDialogRef<T>',
            },
            {
              name: 'dialogContainer',
              type: 'SdsDialogContainerComponent',
            },
          ],
          optional: false,
          returnType: 'PortalInjector',
          typeParameters: ['T'],
          line: 310,
          description:
            '<p>Creates a custom injector to be used inside the dialog. This allows a component loaded inside\nof a dialog to close itself and, optionally, to return a value.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 11189,
                end: 11195,
                flags: 0,
                escapedText: 'config',
              },
              type: 'SdsDialogConfig',
              tagName: {
                pos: 11183,
                end: 11188,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Config object that is used to construct the dialog.</p>\n',
            },
            {
              name: {
                pos: 11260,
                end: 11269,
                flags: 0,
                escapedText: 'dialogRef',
              },
              type: 'SdsDialogRef<T>',
              tagName: {
                pos: 11254,
                end: 11259,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Reference to the dialog.</p>\n',
            },
            {
              name: 'dialogContainer',
              type: 'SdsDialogContainerComponent',
              tagName: {
                text: 'param',
              },
            },
            {
              tagName: {
                pos: 11380,
                end: 11387,
                flags: 0,
                escapedText: 'returns',
              },
              comment:
                '<p>The custom injector that can be used inside the dialog.</p>\n',
            },
          ],
        },
        {
          name: '_createOverlay',
          args: [
            {
              name: 'config',
              type: 'SdsDialogConfig',
            },
          ],
          optional: false,
          returnType: 'OverlayRef',
          typeParameters: [],
          line: 206,
          description:
            '<p>Creates the overlay into which the dialog will be loaded.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 6988,
                end: 6994,
                flags: 0,
                escapedText: 'config',
              },
              type: 'SdsDialogConfig',
              tagName: {
                pos: 6982,
                end: 6987,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>The dialog configuration.</p>\n',
            },
            {
              tagName: {
                pos: 7027,
                end: 7034,
                flags: 0,
                escapedText: 'returns',
              },
              comment:
                '<p>A promise resolving to the OverlayRef for the created overlay.</p>\n',
            },
          ],
        },
        {
          name: '_getOverlayConfig',
          args: [
            {
              name: 'dialogConfig',
              type: 'SdsDialogConfig',
            },
          ],
          optional: false,
          returnType: 'OverlayConfig',
          typeParameters: [],
          line: 216,
          description:
            '<p>Creates an overlay config from a dialog config.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 7350,
                end: 7362,
                flags: 0,
                escapedText: 'dialogConfig',
              },
              type: 'SdsDialogConfig',
              tagName: {
                pos: 7344,
                end: 7349,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>The dialog configuration.</p>\n',
            },
            {
              tagName: {
                pos: 7395,
                end: 7402,
                flags: 0,
                escapedText: 'returns',
              },
              comment: '<p>The overlay configuration.</p>\n',
            },
          ],
        },
        {
          name: '_hideNonDialogContentFromAssistiveTechnology',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 368,
          description:
            '<p>Hides all of the content that isn&#39;t an overlay from assistive technology.</p>\n',
          modifierKind: [112],
        },
        {
          name: '_removeOpenDialog',
          args: [
            {
              name: 'dialogRef',
              type: 'SdsDialogRef<any>',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 342,
          description:
            '<p>Removes a dialog from the array of open dialogs.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 12659,
                end: 12668,
                flags: 0,
                escapedText: 'dialogRef',
              },
              type: 'SdsDialogRef<any>',
              tagName: {
                pos: 12653,
                end: 12658,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Dialog to be removed.</p>\n',
            },
          ],
        },
        {
          name: 'closeAll',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 181,
          description: '<p>Closes all of the currently-open dialogs.</p>\n',
        },
        {
          name: 'getDialogById',
          args: [
            {
              name: 'id',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'SdsDialogRef | undefined',
          typeParameters: [],
          line: 189,
          description: '<p>Finds an open dialog by its id.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 6454,
                end: 6456,
                flags: 0,
                escapedText: 'id',
              },
              type: 'string',
              tagName: {
                pos: 6448,
                end: 6453,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>ID to use when looking up the dialog.</p>\n',
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 193,
        },
        {
          name: 'open',
          args: [
            {
              name: 'componentOrTemplateRef',
              type: 'ComponentType<T> | TemplateRef<T>',
            },
            {
              name: 'config',
              type: 'SdsDialogConfig<D>',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'SdsDialogRef<T, R>',
          typeParameters: ['T', 'D', 'R'],
          line: 128,
          description:
            '<p>Opens a modal dialog containing the given component.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4371,
                end: 4393,
                flags: 0,
                escapedText: 'componentOrTemplateRef',
              },
              type: 'ComponentType<T> | TemplateRef<T>',
              tagName: {
                pos: 4365,
                end: 4370,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Type of the component to load into the dialog,\nor a TemplateRef to instantiate as the dialog content.</p>\n',
            },
            {
              name: {
                pos: 4517,
                end: 4523,
                flags: 0,
                escapedText: 'config',
              },
              type: 'SdsDialogConfig<D>',
              optional: true,
              tagName: {
                pos: 4511,
                end: 4516,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Extra configuration options.</p>\n',
            },
            {
              tagName: {
                pos: 4559,
                end: 4566,
                flags: 0,
                escapedText: 'returns',
              },
              comment: '<p>Reference to the newly-opened dialog.</p>\n',
            },
          ],
        },
      ],
      description: '<p>Service to open modal dialogs.</p>\n',
      sourceCode:
        "import {Directionality} from '@angular/cdk/bidi';\nimport {\n  Overlay,\n  OverlayConfig,\n  OverlayContainer,\n  OverlayRef,\n  ScrollStrategy,\n} from '@angular/cdk/overlay';\nimport {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';\nimport {Location} from '@angular/common';\nimport {\n  Inject,\n  Injectable,\n  InjectionToken,\n  Injector,\n  OnDestroy,\n  Optional,\n  SkipSelf,\n  TemplateRef,\n} from '@angular/core';\nimport {defer, Observable, of as observableOf, Subject} from 'rxjs';\nimport {startWith} from 'rxjs/operators';\nimport {SdsDialogConfig} from './dialog-config';\nimport {SdsDialogContainerComponent} from './dialog-container.component';\nimport {SdsDialogRef} from './dialog-ref';\n\n\n/** Injection token that can be used to access the data that was passed in to a dialog. */\nexport const SDS_DIALOG_DATA = new InjectionToken<any>('SdsDialogData');\n\n/** Injection token that can be used to specify default dialog options. */\nexport const SDS_DIALOG_DEFAULT_OPTIONS =\n    new InjectionToken<SdsDialogConfig>('sds-dialog-default-options');\n\n/** Injection token that determines the scroll handling while the dialog is open. */\nexport const SDS_DIALOG_SCROLL_STRATEGY =\n    new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy');\n\nexport const SDS_SLIDE_OUT_SCROLL_STRATEGY =\n  new InjectionToken<() => ScrollStrategy>('sds-slide-out-scroll-strategy');\n\n/** @docs-private */\nexport function SDS_DIALOG_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {\n  return () => overlay.scrollStrategies.block();\n}\n\n/** @docs-private */\nexport function SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):\n  () => ScrollStrategy {\n  return () => overlay.scrollStrategies.block();\n}\n\n/** @docs-private */\nexport function SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):\n  () => ScrollStrategy {\n  return () => overlay.scrollStrategies.reposition();\n}\n\n/** @docs-private */\nexport const SDS_DIALOG_SCROLL_STRATEGY_PROVIDER = {\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n};\n\nexport const SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER = {\n  provide: SDS_SLIDE_OUT_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY,\n};\n\n\n/**\n * Service to open modal dialogs.\n */\n@Injectable()\nexport class SdsDialogService implements OnDestroy {\n  private _openDialogsAtThisLevel: SdsDialogRef<any>[] = [];\n  private readonly _afterAllClosedAtThisLevel = new Subject<void>();\n  private readonly _afterOpenedAtThisLevel = new Subject<SdsDialogRef<any>>();\n  private _ariaHiddenElements = new Map<Element, string|null>();\n  private _scrollStrategy: () => ScrollStrategy;\n  private _slideOutScrollStrategy: () => ScrollStrategy;\n\n  /** Keeps track of the currently-open dialogs. */\n  get openDialogs(): SdsDialogRef<any>[] {\n    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;\n  }\n\n  /** Stream that emits when a dialog has been opened. */\n  get afterOpened(): Subject<SdsDialogRef<any>> {\n    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;\n  }\n\n  get _afterAllClosed(): Subject<void> {\n    const parent = this._parentDialog;\n    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;\n  }\n\n  /**\n   * Stream that emits when all open dialog have finished closing.\n   * Will emit on subscribe if there are no open dialogs to begin with.\n   */\n  readonly afterAllClosed: Observable<void> = defer<void>(() => this.openDialogs.length ?\n      this._afterAllClosed :\n      this._afterAllClosed.pipe(startWith(undefined)));\n\n  constructor(\n      private _overlay: Overlay,\n      private _injector: Injector,\n      @Optional() private _location: Location,\n      @Optional() @Inject(SDS_DIALOG_DEFAULT_OPTIONS) private _defaultOptions: SdsDialogConfig,\n      @Inject(SDS_DIALOG_SCROLL_STRATEGY) scrollStrategy: any,\n      @Inject(SDS_SLIDE_OUT_SCROLL_STRATEGY) slideOutScrollStrategy: any,\n      @Optional() @SkipSelf() private _parentDialog: SdsDialogService,\n      private _overlayContainer: OverlayContainer) {\n    this._scrollStrategy = scrollStrategy;\n    this._slideOutScrollStrategy = slideOutScrollStrategy;\n  }\n\n  /**\n   * Opens a modal dialog containing the given component.\n   * @param componentOrTemplateRef Type of the component to load into the dialog,\n   *     or a TemplateRef to instantiate as the dialog content.\n   * @param config Extra configuration options.\n   * @returns Reference to the newly-opened dialog.\n   */\n  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\n          config?: SdsDialogConfig<D>): SdsDialogRef<T, R> {\n\n    // Convenience widths names: small | medium | large\n    // added to help with standardization\n    if (config && config.width) {\n      switch (config.width) {\n        case 'small': {\n          config.width = '370px';\n          break;\n        }\n        case 'medium': {\n          config.width = '730px';\n          break;\n        }\n        case 'large': {\n          config.width = '960px';\n          break;\n        }\n        default: {\n          break;\n        }\n      }\n    }\n\n    config = _applyConfigDefaults(config, this._defaultOptions || new SdsDialogConfig());\n\n    if (config.id && this.getDialogById(config.id)) {\n      throw Error(`Dialog with id \"${config.id}\" exists already. The dialog id must be unique.`);\n    }\n\n    const overlayRef = this._createOverlay(config);\n    const dialogContainer = this._attachDialogContainer(overlayRef, config);\n    const dialogRef = this._attachDialogContent<T, R>(componentOrTemplateRef,\n                                                      dialogContainer,\n                                                      overlayRef,\n                                                      config);\n\n    // If this is the first dialog that we're opening, hide all the non-overlay content.\n    if (!this.openDialogs.length) {\n      this._hideNonDialogContentFromAssistiveTechnology();\n    }\n\n    this.openDialogs.push(dialogRef);\n    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));\n    this.afterOpened.next(dialogRef);\n\n    return dialogRef;\n  }\n\n  /**\n   * Closes all of the currently-open dialogs.\n   */\n  closeAll(): void {\n    this._closeDialogs(this.openDialogs);\n  }\n\n  /**\n   * Finds an open dialog by its id.\n   * @param id ID to use when looking up the dialog.\n   */\n  getDialogById(id: string): SdsDialogRef<any> | undefined {\n    return this.openDialogs.find(dialog => dialog.id === id);\n  }\n\n  ngOnDestroy() {\n    // Only close the dialogs at this level on destroy\n    // since the parent service may still be active.\n    this._closeDialogs(this._openDialogsAtThisLevel);\n    this._afterAllClosedAtThisLevel.complete();\n    this._afterOpenedAtThisLevel.complete();\n  }\n\n  /**\n   * Creates the overlay into which the dialog will be loaded.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to the OverlayRef for the created overlay.\n   */\n  private _createOverlay(config: SdsDialogConfig): OverlayRef {\n    const overlayConfig = this._getOverlayConfig(config);\n    return this._overlay.create(overlayConfig);\n  }\n\n  /**\n   * Creates an overlay config from a dialog config.\n   * @param dialogConfig The dialog configuration.\n   * @returns The overlay configuration.\n   */\n  private _getOverlayConfig(dialogConfig: SdsDialogConfig): OverlayConfig {\n    const state = new OverlayConfig({\n      positionStrategy: this._overlay.position().global(),\n      scrollStrategy: dialogConfig.scrollStrategy || (dialogConfig.slideOut ? this._slideOutScrollStrategy() : this._scrollStrategy()),\n      panelClass: dialogConfig.panelClass,\n      hasBackdrop: dialogConfig.hasBackdrop,\n      direction: dialogConfig.direction,\n      minWidth: dialogConfig.minWidth,\n      minHeight: dialogConfig.minHeight,\n      maxWidth: dialogConfig.maxWidth,\n      maxHeight: dialogConfig.maxHeight,\n      disposeOnNavigation: dialogConfig.closeOnNavigation\n    });\n\n    if (dialogConfig.backdropClass) {\n      state.backdropClass = dialogConfig.backdropClass;\n    }\n\n    return state;\n  }\n\n  /**\n   * Attaches an SdsDialogContainerComponent to a dialog's already-created overlay.\n   * @param overlay Reference to the dialog's underlying overlay.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to a ComponentRef for the attached container.\n   */\n  private _attachDialogContainer(overlay: OverlayRef, config: SdsDialogConfig): SdsDialogContainerComponent {\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\n    const injector = new PortalInjector(userInjector || this._injector, new WeakMap([\n      [SdsDialogConfig, config]\n    ]));\n    const containerPortal =\n        new ComponentPortal(SdsDialogContainerComponent, config.viewContainerRef, injector);\n    const containerRef = overlay.attach<SdsDialogContainerComponent>(containerPortal);\n\n    return containerRef.instance;\n  }\n\n  /**\n   * Attaches the user-provided component to the already-created SdsDialogContainerComponent.\n   * @param componentOrTemplateRef The type of component being loaded into the dialog,\n   *     or a TemplateRef to instantiate as the content.\n   * @param dialogContainer Reference to the wrapping SdsDialogContainerComponent.\n   * @param overlayRef Reference to the overlay in which the dialog resides.\n   * @param config The dialog configuration.\n   * @returns A promise resolving to the SdsDialogRef that should be returned to the user.\n   */\n  private _attachDialogContent<T, R>(\n      componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\n      dialogContainer: SdsDialogContainerComponent,\n      overlayRef: OverlayRef,\n      config: SdsDialogConfig): SdsDialogRef<T, R> {\n\n    // Create a reference to the dialog we're creating in order to give the user a handle\n    // to modify and close it.\n    const dialogRef =\n        new SdsDialogRef<T, R>(overlayRef, dialogContainer, this._location, config.id);\n\n    // When the dialog backdrop is clicked, we want to close it.\n    if (config.hasBackdrop) {\n      overlayRef.backdropClick().subscribe(() => {\n        if (!dialogRef.disableClose) {\n          dialogRef.close();\n        }\n      });\n    }\n\n    if (componentOrTemplateRef instanceof TemplateRef) {\n      dialogContainer.attachTemplatePortal(\n        new TemplatePortal<T>(componentOrTemplateRef, null!,\n          <any>{ $implicit: config.data, dialogRef }));\n    } else {\n      const injector = this._createInjector<T>(config, dialogRef, dialogContainer);\n      const contentRef = dialogContainer.attachComponentPortal<T>(\n          new ComponentPortal(componentOrTemplateRef, undefined, injector));\n      dialogRef.componentInstance = contentRef.instance;\n    }\n\n    dialogRef\n      .updateSize(config.width, config.height)\n      .updatePosition(config.position);\n\n    return dialogRef;\n  }\n\n  /**\n   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside\n   * of a dialog to close itself and, optionally, to return a value.\n   * @param config Config object that is used to construct the dialog.\n   * @param dialogRef Reference to the dialog.\n   * @param container Dialog container element that wraps all of the contents.\n   * @returns The custom injector that can be used inside the dialog.\n   */\n  private _createInjector<T>(\n      config: SdsDialogConfig,\n      dialogRef: SdsDialogRef<T>,\n      dialogContainer: SdsDialogContainerComponent): PortalInjector {\n\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\n\n    // The SdsDialogContainerComponent is injected in the portal as the SdsDialogContainerComponent and the dialog's\n    // content are created out of the same ViewContainerRef and as such, are siblings for injector\n    // purposes. To allow the hierarchy that is expected, the SdsDialogContainerComponent is explicitly\n    // added to the injection tokens.\n    const injectionTokens = new WeakMap<any, any>([\n      [SdsDialogContainerComponent, dialogContainer],\n      [SDS_DIALOG_DATA, config.data],\n      [SdsDialogRef, dialogRef]\n    ]);\n\n    if (config.direction &&\n        (!userInjector || !userInjector.get<Directionality | null>(Directionality, null))) {\n      injectionTokens.set(Directionality, {\n        value: config.direction,\n        change: observableOf()\n      });\n    }\n\n    return new PortalInjector(userInjector || this._injector, injectionTokens);\n  }\n\n  /**\n   * Removes a dialog from the array of open dialogs.\n   * @param dialogRef Dialog to be removed.\n   */\n  private _removeOpenDialog(dialogRef: SdsDialogRef<any>) {\n    const index = this.openDialogs.indexOf(dialogRef);\n\n    if (index > -1) {\n      this.openDialogs.splice(index, 1);\n\n      // If all the dialogs were closed, remove/restore the `aria-hidden`\n      // to a the siblings and emit to the `afterAllClosed` stream.\n      if (!this.openDialogs.length) {\n        this._ariaHiddenElements.forEach((previousValue, element) => {\n          if (previousValue) {\n            element.setAttribute('aria-hidden', previousValue);\n          } else {\n            element.removeAttribute('aria-hidden');\n          }\n        });\n\n        this._ariaHiddenElements.clear();\n        this._afterAllClosed.next();\n      }\n    }\n  }\n\n  /**\n   * Hides all of the content that isn't an overlay from assistive technology.\n   */\n  private _hideNonDialogContentFromAssistiveTechnology() {\n    const overlayContainer = this._overlayContainer.getContainerElement();\n\n    // Ensure that the overlay container is attached to the DOM.\n    if (overlayContainer.parentElement) {\n      const siblings = overlayContainer.parentElement.children;\n\n      for (let i = siblings.length - 1; i > -1; i--) {\n        const sibling = siblings[i];\n\n        if (sibling !== overlayContainer &&\n          sibling.nodeName !== 'SCRIPT' &&\n          sibling.nodeName !== 'STYLE' &&\n          !sibling.hasAttribute('aria-live')) {\n\n          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));\n          sibling.setAttribute('aria-hidden', 'true');\n        }\n      }\n    }\n  }\n\n  /** Closes all of the dialogs in an array. */\n  private _closeDialogs(dialogs: SdsDialogRef<any>[]) {\n    let i = dialogs.length;\n\n    while (i--) {\n      // The `_openDialogs` property isn't updated after close until the rxjs subscription\n      // runs on the next microtask, in addition to modifying the array as we're going\n      // through it. We loop through all of them and call close without assuming that\n      // they'll be removed from the list instantaneously.\n      dialogs[i].close();\n    }\n  }\n\n}\n\n/**\n * Applies default options to the dialog config.\n * @param config Config to be modified.\n * @param defaultOptions Default options provided.\n * @returns The new configuration object.\n */\nfunction _applyConfigDefaults(\n    config?: SdsDialogConfig, defaultOptions?: SdsDialogConfig): SdsDialogConfig {\n  return {...defaultOptions, ...config};\n}\n",
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_overlay',
            type: 'Overlay',
          },
          {
            name: '_injector',
            type: 'Injector',
          },
          {
            name: '_location',
            type: 'Location',
          },
          {
            name: '_defaultOptions',
            type: 'SdsDialogConfig',
          },
          {
            name: 'scrollStrategy',
            type: 'any',
          },
          {
            name: 'slideOutScrollStrategy',
            type: 'any',
          },
          {
            name: '_parentDialog',
            type: 'SdsDialogService',
          },
          {
            name: '_overlayContainer',
            type: 'OverlayContainer',
          },
        ],
        line: 106,
        jsdoctags: [
          {
            name: '_overlay',
            type: 'Overlay',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_injector',
            type: 'Injector',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_location',
            type: 'Location',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_defaultOptions',
            type: 'SdsDialogConfig',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'scrollStrategy',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'slideOutScrollStrategy',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_parentDialog',
            type: 'SdsDialogService',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_overlayContainer',
            type: 'OverlayContainer',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        openDialogs: {
          name: 'openDialogs',
          getSignature: {
            name: 'openDialogs',
            type: '[]',
            returnType: 'SdsDialogRef[]',
            line: 86,
            description: '<p>Keeps track of the currently-open dialogs. </p>\n',
          },
        },
        afterOpened: {
          name: 'afterOpened',
          getSignature: {
            name: 'afterOpened',
            type: '',
            returnType: 'Subject<SdsDialogRef<any>>',
            line: 91,
            description:
              '<p>Stream that emits when a dialog has been opened. </p>\n',
          },
        },
        _afterAllClosed: {
          name: '_afterAllClosed',
          getSignature: {
            name: '_afterAllClosed',
            type: '',
            returnType: 'Subject<void>',
            line: 95,
          },
        },
      },
      type: 'injectable',
    },
  ],
  classes: [
    {
      name: 'Button',
      id: 'class-Button-c99f0414ab1510d4ed7080f5fda40447',
      file:
        'libs/packages/components/src/lib/search-result-list/model/search-results.model.ts',
      type: 'class',
      sourceCode:
        "import { TemplateRef } from '@angular/core';\n\nexport class SearchModel {\n  results: any[];\n  metadata: {\n    messages: Message[] | TemplateRef<any>;\n  };\n}\nexport class Message {\n  type: string;\n  title: string;\n  message: string;\n  classes: string;\n  buttons: Button[];\n}\nexport class Button {\n  id: string;\n  text: string;\n  classes: string;\n  action: any;\n  ariaLabel?: string;\n}\n",
      properties: [
        {
          name: 'action',
          type: 'any',
          optional: false,
          description: '',
          line: 20,
        },
        {
          name: 'ariaLabel',
          type: 'string',
          optional: true,
          description: '',
          line: 21,
        },
        {
          name: 'classes',
          type: 'string',
          optional: false,
          description: '',
          line: 19,
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '',
          line: 17,
        },
        {
          name: 'text',
          type: 'string',
          optional: false,
          description: '',
          line: 18,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'KeyHelper',
      id: 'class-KeyHelper-f1f2ea19e2924a992295147e9521db45',
      file: 'libs/packages/components/src/lib/key-helper/key-helper.ts',
      type: 'class',
      sourceCode:
        "export class KeyHelper {\n\n  private _allowedKeys: string[] = [];\n\n  private _currentlySupported = [\n    'alt','enter','up','down','left','right','tab','esc','space',\n    'shift','backspace','1','2','3','4','5','6','7','8',\n    '9','0', 'delete'\n  ];\n\n  constructor (...keys) {\n    this._setAllowedKeys(...keys);\n  }\n\n  public isAllowed (event): boolean {\n    const val = this._allowedKeys\n      .reduce(\n        (val, key) => {\n          return KeyHelper.is(key, event) || val;\n        },\n        false\n      );\n    return val;\n  }\n\n  private _setAllowedKeys(...keys) {\n    keys.forEach(\n      key => {\n        if (this._currentlySupported.indexOf(key) !== -1) {\n          this._allowedKeys.push(key);\n        } else {\n          const ok = this._allowedToString();\n          const msg = `Only supports ${ok} at this time`;\n          throw new TypeError(msg);\n        }\n      }\n    );\n  }\n\n  private _allowedToString (): string {\n    return this._allowedKeys.join(', ');\n  }\n\n  public static getKeyCode (event: any): string {\n\n    if (!event) {\n      return undefined;\n    } else if (event.key) {\n      return event.key;\n    } else if (event.code) {\n      return event.code;\n    } else if (event.keyIdentifier) {\n      return event.keyIdentifier;\n    } else {\n      return undefined;\n    }\n\n  }\n\n  public static getNumberFromKey (event): number {\n    const tests = [\n      KeyHelper._zero, KeyHelper._one, KeyHelper._two,\n      KeyHelper._three, KeyHelper._four, KeyHelper._five,\n      KeyHelper._six, KeyHelper._seven, KeyHelper._eight,\n      KeyHelper._nine\n    ];\n\n    return tests.reduce(\n      (val: number | undefined, test: Function) => {\n        return val !== undefined\n          ? val\n          : test(event);\n      }, undefined\n    );\n  }\n\n  public static is (\n    validKeyParam: string,\n    event: KeyboardEvent | any): boolean {\n    let lowercased = validKeyParam.toLowerCase();\n    switch (lowercased) {\n      case 'alt'  :\n        return this._isAltKey(event);\n      case 'enter':\n        return this._isEnter(event);\n      case 'up':\n        return this._isArrowUp(event);\n      case 'down':\n        return this._isArrowDown(event);\n      case 'left':\n        return this._isArrowLeft(event);\n      case 'right':\n        return this._isArrowRight(event);\n      case 'tab':\n        return this._isTab(event);\n      case 'esc':\n        return this._isEscape(event);\n      case 'space':\n        return this._isSpace(event);\n      case 'shift':\n        return this._isShift(event);\n      case 'backspace':\n        return this._isBackspace(event);\n      case 'delete':\n        return this._isDelete(event);\n      case '0':\n        return this._isExpectedNumber(0, event);\n      case '1':\n        return this._isExpectedNumber(1, event);\n      case '2':\n        return this._isExpectedNumber(2, event);\n      case '3':\n        return this._isExpectedNumber(3, event);\n      case '4':\n        return this._isExpectedNumber(4, event);\n      case '5':\n        return this._isExpectedNumber(5, event);\n      case '6':\n        return this._isExpectedNumber(6, event);\n      case '7':\n        return this._isExpectedNumber(7, event);\n      case '8':\n        return this._isExpectedNumber(8, event);\n      case '9':\n        return this._isExpectedNumber(9, event);\n      default:\n        return false;\n    }\n  }\n\n  private static _isEnter (e: KeyboardEvent | any) {\n    if (e.code === 'Enter'\n      || e.key === 'Enter'\n      || e.keyIdentifier === 'Enter'\n      || e.which === 13\n      || e.charCode === 13\n      || e.keyCode === 13) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  private static _isAltKey (e: KeyboardEvent | any) {\n    if (e.code === 'Alt'\n      || e.key === 'Alt'\n      || e.keyIdentifier === 'Alt'\n      || e.which === 18\n      || e.charCode === 18\n      || e.keyCode === 18) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n\n  private static _isArrowUp (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowUp'\n      || e.key === 'ArrowUp'\n      || e.key === 'Up'\n      || e.keyIdentifier === 'Up'\n      || e.which === 38\n      || e.keyCode === 38) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowDown (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowDown'\n      || e.key === 'ArrowDown'\n      || e.key === 'Down'\n      || e.keyIdentifier === 'Down'\n      || e.which === 40\n      || e.keyCode === 40) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowLeft (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowLeft'\n      || e.key === 'ArrowLeft'\n      || e.key === 'Left'\n      || e.keyIdentifier === 'Left'\n      || e.which === 37\n      || e.keyCode === 37) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isArrowRight (e: KeyboardEvent | any) {\n    if (e.code === 'ArrowRight'\n      || e.key === 'ArrowRight'\n      || e.key === 'Right'\n      || e.keyIdentifier === 'Right'\n      || e.which === 39\n      || e.keyCode === 39) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isTab (e: KeyboardEvent | any) {\n    if (e.code === 'Tab'\n      || e.key === 'Tab'\n      || e.keyIdentifier === 'U+0009'\n      || e.which === 9\n      || e.keyCode === 9) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isEscape (e: KeyboardEvent | any) {\n    if (e.code === 'Escape'\n      || e.key === 'Escape'\n      || e.key === 'Esc'\n      || e.keyIdentifier === 'U+001B'\n      || e.which === 27\n      || e.keyCode === 27) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isSpace (e: KeyboardEvent | any) {\n    if (e.code === 'Space'\n      || e.key === ' '\n      || e.key === 'Spacebar'\n      || e.keyIdentifier === 'U+0020'\n      || e.which === 32\n      || e.keyCode === 32) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isShift (e: KeyboardEvent | any) {\n    if (e.code === 'ShiftLeft'\n      || e.code === 'ShiftRight'\n      || e.key === 'Shift'\n      || e.keyIdentifier === 'Shift'\n      || e.which === 16\n      || e.keyCode === 16) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isBackspace (e: KeyboardEvent | any) {\n    if (e.code === 'Backspace'\n      || e.key === 'Backspace'\n      || e.keyIdentifier === 'U+0008'\n      || e.which === 8\n      || e.keyCode === 8) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _isDelete (e: KeyboardEvent | any) {\n    if (e.code === 'Delete'\n      || e.key === 'Delete'\n      || e.keyIdentifier === 'U+007F'\n      || e.which === 46\n      || e.keyCode === 46) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  private static _zero (e): number {\n    if (e.code === 'Digit0'\n      || e.code === 'Numpad0'\n      || e.key === 0\n      || e.keyCode === 48\n      || e.keyCode === 96\n      || e.keyIdentifier === 'U+0030'\n      || e.which === 48) {\n      return 0;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _one (e): number {\n    if (e.code === 'Digit1'\n      || e.code === 'Numpad1'\n      || e.key === 1\n      || e.keyCode === 49\n      || e.keyCode === 97\n      || e.keyIdentifier === 'U+0031'\n      || e.which === 49) {\n      return 1;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _two (e): number {\n    if (e.code === 'Digit2'\n      || e.code === 'Numpad2'\n      || e.key === 2\n      || e.keyCode === 50\n      || e.keyCode === 98\n      || e.keyIdentifier === 'U+0032'\n      || e.which === 50) {\n      return 2;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _three (e): number {\n    if (e.code === 'Digit3'\n      || e.code === 'Numpad3'\n      || e.key === 3\n      || e.keyCode === 51\n      || e.keyCode === 99\n      || e.keyIdentifier === 'U+0033'\n      || e.which === 51) {\n      return 3;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _four (e): number {\n    if (e.code === 'Digit4'\n      || e.code === 'Numpad4'\n      || e.key === 4\n      || e.keyCode === 52\n      || e.keyCode === 100\n      || e.keyIdentifier === 'U+0034'\n      || e.which === 52) {\n      return 4;\n    } else {\n      return undefined;\n    }\n  }\n  private static _five (e): number {\n    if (e.code === 'Digit5'\n      || e.code === 'Numpad5'\n      || e.key === 5\n      || e.keyCode === 53\n      || e.keyCode === 101\n      || e.keyIdentifier === 'U+0035'\n      || e.which === 53) {\n      return 5;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _six (e): number {\n    if (e.code === 'Digit6'\n      || e.code === 'Numpad6'\n      || e.key === 6\n      || e.keyCode === 54\n      || e.keyCode === 102\n      || e.keyIdentifier === 'U+0036'\n      || e.which === 54) {\n      return 6;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _seven (e): number {\n    if (e.code === 'Digit7'\n      || e.code === 'Numpad7'\n      || e.key === 7\n      || e.keyCode === 55\n      || e.keyCode === 103\n      || e.keyIdentifier === 'U+0037'\n      || e.which === 55) {\n      return 7;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _eight (e): number {\n    if (e.code === 'Digit8'\n      || e.code === 'Numpad8'\n      || e.key === 8\n      || e.keyCode === 56\n      || e.keyCode === 104\n      || e.keyIdentifier === 'U+0038'\n      || e.which === 56) {\n      return 8;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _nine (e): number {\n    if (e.code === 'Digit9'\n      || e.code === 'Numpad9'\n      || e.key === 9\n      || e.keyCode === 57\n      || e.keyCode === 105\n      || e.keyIdentifier === 'U+0039'\n      || e.which === 57) {\n      return 9;\n    } else {\n      return undefined;\n    }\n  }\n\n  private static _isExpectedNumber (expected, event)\n    : boolean {\n    return expected === KeyHelper.getNumberFromKey(event);\n  }\n\n}\n\nexport enum KEYS {\n  'ENTER' = 'enter',\n  'ALT' = 'alt',\n  'UP' = 'up',\n  'DOWN' = 'down',\n  'LEFT' = 'left',\n  'RIGHT' = 'right',\n  'TAB' = 'tab',\n  'ESC' = 'esc',\n  'SPACE' = 'space',\n  'SHIFT' = 'shift',\n  'BACKSPACE' = 'backspace',\n  'ONE' = '1',\n  'TWO' = '2',\n  'THREE' = '3',\n  'FOUR' = '4',\n  'FIVE' = '5',\n  'SIX' = '6',\n  'SEVEN' = '7',\n  'EIGHT' = '8',\n  'NINE' = '9',\n  'ZERO' = '0',\n  'DELETE' = 'delete'\n}\n\n",
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'keys',
            type: 'any[]',
            dotDotDotToken: true,
          },
        ],
        line: 9,
        jsdoctags: [
          {
            name: 'keys',
            type: 'any[]',
            dotDotDotToken: true,
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      properties: [
        {
          name: '_allowedKeys',
          defaultValue: '[]',
          type: 'string[]',
          optional: false,
          description: '',
          line: 3,
          modifierKind: [112],
        },
        {
          name: '_currentlySupported',
          defaultValue:
            "[\n    'alt','enter','up','down','left','right','tab','esc','space',\n    'shift','backspace','1','2','3','4','5','6','7','8',\n    '9','0', 'delete'\n  ]",
          type: '[]',
          optional: false,
          description: '',
          line: 5,
          modifierKind: [112],
        },
      ],
      methods: [
        {
          name: '_allowedToString',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 40,
          modifierKind: [112],
        },
        {
          name: '_eight',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 395,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_five',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 353,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_four',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 340,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isAltKey',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 143,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isArrowDown',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 170,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isArrowLeft',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 183,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isArrowRight',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 196,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isArrowUp',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 157,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isBackspace',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 260,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isDelete',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 272,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isEnter',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 131,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isEscape',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 221,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isExpectedNumber',
          args: [
            {
              name: 'expected',
              type: '',
            },
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 423,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'expected',
              type: '',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isShift',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 247,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isSpace',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 234,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_isTab',
          args: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 209,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_nine',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 409,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_one',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 298,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_setAllowedKeys',
          args: [
            {
              name: 'keys',
              type: 'any[]',
              dotDotDotToken: true,
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 26,
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'keys',
              type: 'any[]',
              dotDotDotToken: true,
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_seven',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 381,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_six',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 367,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_three',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 326,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_two',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 312,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_zero',
          args: [
            {
              name: 'e',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 284,
          modifierKind: [112, 115],
          jsdoctags: [
            {
              name: 'e',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getKeyCode',
          args: [
            {
              name: 'event',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 44,
          modifierKind: [115],
          jsdoctags: [
            {
              name: 'event',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getNumberFromKey',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 60,
          modifierKind: [115],
          jsdoctags: [
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'is',
          args: [
            {
              name: 'validKeyParam',
              type: 'string',
            },
            {
              name: 'event',
              type: 'KeyboardEvent | any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 77,
          modifierKind: [115],
          jsdoctags: [
            {
              name: 'validKeyParam',
              type: 'string',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'event',
              type: 'KeyboardEvent | any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'isAllowed',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 15,
          modifierKind: [114],
          jsdoctags: [
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'Message',
      id: 'class-Message-c99f0414ab1510d4ed7080f5fda40447',
      file:
        'libs/packages/components/src/lib/search-result-list/model/search-results.model.ts',
      type: 'class',
      sourceCode:
        "import { TemplateRef } from '@angular/core';\n\nexport class SearchModel {\n  results: any[];\n  metadata: {\n    messages: Message[] | TemplateRef<any>;\n  };\n}\nexport class Message {\n  type: string;\n  title: string;\n  message: string;\n  classes: string;\n  buttons: Button[];\n}\nexport class Button {\n  id: string;\n  text: string;\n  classes: string;\n  action: any;\n  ariaLabel?: string;\n}\n",
      properties: [
        {
          name: 'buttons',
          type: 'Button[]',
          optional: false,
          description: '',
          line: 14,
        },
        {
          name: 'classes',
          type: 'string',
          optional: false,
          description: '',
          line: 13,
        },
        {
          name: 'message',
          type: 'string',
          optional: false,
          description: '',
          line: 12,
        },
        {
          name: 'title',
          type: 'string',
          optional: false,
          description: '',
          line: 11,
        },
        {
          name: 'type',
          type: 'string',
          optional: false,
          description: '',
          line: 10,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'NavigationHelper',
      id: 'class-NavigationHelper-4ecdafa8ba2dfaeb583d08a13a9bad4b',
      file:
        'libs/packages/components/src/lib/common-navigation/navigation-helper.ts',
      type: 'class',
      sourceCode:
        "import { INavigationLink, NavigationMode } from './common-navigation-model';\nexport class NavigationHelper {\n\n    /**\n     * checks if link is internal\n     * @param link \n     */\n    isLinkInternal(link: INavigationLink) {\n        return link.mode === NavigationMode.INTERNAL;\n    }\n\n    /**\n     * checks if link is external\n     * @param link \n     */\n    isLinkExternal(link: INavigationLink) {\n        return link.mode === NavigationMode.EXTERNAL;\n    }\n}",
      properties: [],
      methods: [
        {
          name: 'isLinkExternal',
          args: [
            {
              name: 'link',
              type: 'INavigationLink',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 16,
          description: '<p>checks if link is external</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 341,
                end: 345,
                flags: 0,
                escapedText: 'link',
              },
              type: 'INavigationLink',
              tagName: {
                pos: 335,
                end: 340,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'isLinkInternal',
          args: [
            {
              name: 'link',
              type: 'INavigationLink',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 8,
          description: '<p>checks if link is internal</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 166,
                end: 170,
                flags: 0,
                escapedText: 'link',
              },
              type: 'INavigationLink',
              tagName: {
                pos: 160,
                end: 165,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
      ],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'NavigationLink',
      id: 'class-NavigationLink-295cd59da07c4ec4067ea8a525ff10bf',
      file:
        'libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts',
      type: 'class',
      sourceCode:
        "import { QueryParamsHandling } from '@angular/router';\nimport { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\nexport class SideNavigationModel {\n\n    /**\n     * \n     */\n    navigationLinks: NavigationLink[];\n}\n\n\nexport class NavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: NavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n\n\n    /**\n     * Query string paramaters supporeted with external and internal links\n     * ex. { 'name': 'value',...}\n     */\n    queryParams?: {\n        [k: string]: any;\n    }\n\n    queryParamsHandling?: QueryParamsHandling;\n}\n\n\n\n\n",
      properties: [
        {
          name: 'children',
          type: 'NavigationLink[]',
          optional: true,
          description:
            '<p>List of child navigation items that will show when no route is provieded</p>\n',
          line: 33,
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description:
            '<p>Identifier for the item when search for selected </p>\n',
          line: 38,
        },
        {
          name: 'mode',
          type: 'NavigationMode',
          optional: false,
          description:
            '<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n',
          line: 18,
        },
        {
          name: 'queryParams',
          type: 'literal type',
          optional: true,
          description:
            '<p>Query string paramaters supporeted with external and internal links\nex. { &#39;name&#39;: &#39;value&#39;,...}</p>\n',
          line: 50,
        },
        {
          name: 'queryParamsHandling',
          type: 'QueryParamsHandling',
          optional: true,
          description: '',
          line: 54,
        },
        {
          name: 'route',
          type: 'string',
          optional: false,
          description: '<p>Navigation Route </p>\n',
          line: 28,
        },
        {
          name: 'selected',
          type: 'boolean',
          optional: true,
          description: '<p>Status of if the item is selected </p>\n',
          line: 43,
        },
        {
          name: 'text',
          type: 'string',
          optional: false,
          description: '<p>Text to be displayed in the link or button</p>\n',
          line: 23,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      implements: ['Selectable', 'INavigationLink'],
    },
    {
      name: 'PaginationConfigurationModel',
      id: 'class-PaginationConfigurationModel-e22700d6799a2fbbeca5d7b2f30c4157',
      file:
        'libs/packages/components/src/lib/pagination/model/paginationModel.ts',
      type: 'class',
      sourceCode:
        'export class PaginationConfigurationModel {\n\n    /**\n     * used to distinguish fields\n     */\n    id: string;\n}\n\nexport class PaginationModel {\n\n    /**\n     * current page number\n     */\n    pageNumber: number;\n\n    /**\n     * size of page ex 25, 50,100\n     */\n    pageSize: number;\n\n    /**\n     * total number of pages\n     */\n    totalPages: number;\n}\n',
      properties: [
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '<p>used to distinguish fields</p>\n',
          line: 7,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'PaginationModel',
      id: 'class-PaginationModel-e22700d6799a2fbbeca5d7b2f30c4157',
      file:
        'libs/packages/components/src/lib/pagination/model/paginationModel.ts',
      type: 'class',
      sourceCode:
        'export class PaginationConfigurationModel {\n\n    /**\n     * used to distinguish fields\n     */\n    id: string;\n}\n\nexport class PaginationModel {\n\n    /**\n     * current page number\n     */\n    pageNumber: number;\n\n    /**\n     * size of page ex 25, 50,100\n     */\n    pageSize: number;\n\n    /**\n     * total number of pages\n     */\n    totalPages: number;\n}\n',
      properties: [
        {
          name: 'pageNumber',
          type: 'number',
          optional: false,
          description: '<p>current page number</p>\n',
          line: 15,
        },
        {
          name: 'pageSize',
          type: 'number',
          optional: false,
          description: '<p>size of page ex 25, 50,100</p>\n',
          line: 20,
        },
        {
          name: 'totalPages',
          type: 'number',
          optional: false,
          description: '<p>total number of pages</p>\n',
          line: 25,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SDSAutocompletelConfiguration',
      id:
        'class-SDSAutocompletelConfiguration-690b38b2f0cb802f1627b505142bfd42',
      file:
        'libs/packages/components/src/lib/autocomplete/models/SDSAutocompletelConfiguration.model.ts',
      type: 'class',
      sourceCode:
        "import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';\nimport { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';\nimport { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\nimport { Observable } from 'rxjs';\n\nexport class SDSAutocompletelConfiguration\n  implements\n  SDSSelectedResultConfiguration,\n  SDSAutocompleteSearchConfiguration {\n  /**\n   * sets the default debounce time to 250 milliseconds\n   */\n  constructor() {\n    this.debounceTime = 250;\n    this.minimumCharacterCountSearch = 0;\n  }\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   * Used for the Id of the control\n   */\n  public id: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\n   */\n  public debounceTime: number;\n\n  /**\n   * Place holder text for autocomplete input\n   */\n  public autocompletePlaceHolderText: string;\n\n  /**\n   * Mininumn Characters for search\n   */\n  public minimumCharacterCountSearch: number;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n\n  /**\n   * Allows option to allow user text not in the standard results\n   */\n  public isFreeTextEnabled: boolean = false;\n\n  /**\n   * Text appeneded ad the end of free text\n   */\n  public freeTextSubtext: string = 'search';\n\n  /**\n   * Focus into autocomplete search\n   */\n  public focusInSearch: boolean = true;\n\n  /**\n   * The aria-label for the auto-complete\n   */\n  public ariaLabelText: string;\n\n  /**\n   * To enable the tag mode\n   */\n  public isTagModeEnabled: boolean = false;\n\n  /**\n   * To make input readonly\n   */\n  public inputReadOnly = false;\n\n  /**\n   * Name of the children filed\n   */\n  public groupByChild: string = 'children';\n\n  /**\n   * To enable the Grouping mode\n   */\n  public isGroupingEnabled: boolean = false;\n\n  /**\n   * To enable the Group item selectable\n   */\n  public isSelectableGroup: boolean = true;\n\n  /**\n   * Toggle whether or not to display chips. This can be useful if some custom UI is used\n   * for rendering autocomplete values in multi-select mode\n   * @default false\n   */\n  public hideChips: boolean = false;\n\n  /** \n   * Modifiier function to change display of how primary text field is shown\n   * Allows adding prefix / suffix values when displaying tags\n   */\n  public displayModifierFn: (displayValue: string, index?: number) => string;\n\n  /**\n   * Provides a way for external components to force change detection\n   * on internal components. Any time this observable is emitted, a change\n   * detection will be preformed, ensuring data model and template values are\n   * in sync. This can be useful if some external changes are made and visual\n   * updates need to be made\n   */\n  public registerChanges$: Observable<void>;\n\n  public hideCloseIcon: boolean = false;\n}\n",
      constructorObj: {
        name: 'constructor',
        description:
          '<p>sets the default debounce time to 250 milliseconds</p>\n',
        args: [],
        line: 9,
      },
      properties: [
        {
          name: 'ariaLabelText',
          type: 'string',
          optional: false,
          description: '<p>The aria-label for the auto-complete</p>\n',
          line: 81,
          modifierKind: [114],
        },
        {
          name: 'autocompletePlaceHolderText',
          type: 'string',
          optional: false,
          description: '<p>Place holder text for autocomplete input</p>\n',
          line: 51,
          modifierKind: [114],
        },
        {
          name: 'debounceTime',
          type: 'number',
          optional: false,
          description:
            '<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n',
          line: 46,
          modifierKind: [114],
        },
        {
          name: 'displayModifierFn',
          type: 'function',
          optional: false,
          description:
            '<p>Modifiier function to change display of how primary text field is shown\nAllows adding prefix / suffix values when displaying tags</p>\n',
          line: 119,
          modifierKind: [114],
        },
        {
          name: 'focusInSearch',
          defaultValue: 'true',
          type: 'boolean',
          optional: false,
          description: '<p>Focus into autocomplete search</p>\n',
          line: 76,
          modifierKind: [114],
        },
        {
          name: 'freeTextSubtext',
          defaultValue: "'search'",
          type: 'string',
          optional: false,
          description: '<p>Text appeneded ad the end of free text</p>\n',
          line: 71,
          modifierKind: [114],
        },
        {
          name: 'groupByChild',
          defaultValue: "'children'",
          type: 'string',
          optional: false,
          description: '<p>Name of the children filed</p>\n',
          line: 96,
          modifierKind: [114],
        },
        {
          name: 'hideChips',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description:
            '<p>Toggle whether or not to display chips. This can be useful if some custom UI is used\nfor rendering autocomplete values in multi-select mode</p>\n',
          line: 113,
          modifierKind: [114],
          jsdoctags: [
            {
              pos: 2694,
              end: 2703,
              flags: 0,
              kind: 288,
              atToken: {
                pos: 2694,
                end: 2695,
                flags: 0,
                kind: 57,
              },
              tagName: {
                pos: 2695,
                end: 2702,
                flags: 0,
                escapedText: 'default',
              },
              comment: '<p>false</p>\n',
            },
          ],
        },
        {
          name: 'hideCloseIcon',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '',
          line: 130,
          modifierKind: [114],
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '<p>Used for the Id of the control</p>\n',
          line: 26,
          modifierKind: [114],
        },
        {
          name: 'inputReadOnly',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '<p>To make input readonly</p>\n',
          line: 91,
          modifierKind: [114],
        },
        {
          name: 'isFreeTextEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description:
            '<p>Allows option to allow user text not in the standard results</p>\n',
          line: 66,
          modifierKind: [114],
        },
        {
          name: 'isGroupingEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the Grouping mode</p>\n',
          line: 101,
          modifierKind: [114],
        },
        {
          name: 'isSelectableGroup',
          defaultValue: 'true',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the Group item selectable</p>\n',
          line: 106,
          modifierKind: [114],
        },
        {
          name: 'isTagModeEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the tag mode</p>\n',
          line: 86,
          modifierKind: [114],
        },
        {
          name: 'labelText',
          type: 'string',
          optional: false,
          description:
            '<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n',
          line: 21,
          modifierKind: [114],
        },
        {
          name: 'minimumCharacterCountSearch',
          type: 'number',
          optional: false,
          description: '<p>Mininumn Characters for search</p>\n',
          line: 56,
          modifierKind: [114],
        },
        {
          name: 'primaryKeyField',
          type: 'string',
          optional: false,
          description:
            '<p>This is the primary field used to identify each object in the results</p>\n',
          line: 31,
          modifierKind: [114],
        },
        {
          name: 'primaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the top part of the basic template</p>\n',
          line: 36,
          modifierKind: [114],
        },
        {
          name: 'registerChanges$',
          type: 'Observable<void>',
          optional: false,
          description:
            '<p>Provides a way for external components to force change detection\non internal components. Any time this observable is emitted, a change\ndetection will be preformed, ensuring data model and template values are\nin sync. This can be useful if some external changes are made and visual\nupdates need to be made</p>\n',
          line: 128,
          modifierKind: [114],
        },
        {
          name: 'secondaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the bottom part of the basic template</p>\n',
          line: 41,
          modifierKind: [114],
        },
        {
          name: 'selectionMode',
          defaultValue: 'SelectionMode.SINGLE',
          type: 'SelectionMode',
          optional: false,
          description:
            '<p>Mode of the model either allows a single item or multiple items</p>\n',
          line: 61,
          modifierKind: [114],
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      implements: [
        'SDSSelectedResultConfiguration',
        'SDSAutocompleteSearchConfiguration',
      ],
    },
    {
      name: 'SDSAutocompleteSearchConfiguration',
      id:
        'class-SDSAutocompleteSearchConfiguration-0026702cafb8623c576ee5e93954ffeb',
      file:
        'libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteConfiguration.ts',
      type: 'class',
      sourceCode:
        "import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\n\nexport class SDSAutocompleteSearchConfiguration {\n  /**\n   * sets the default debounce time to 250 milliseconds\n   */\n  constructor() {\n    this.debounceTime = 250;\n    this.minimumCharacterCountSearch = 0;\n  }\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   * Used for the Id of the control\n   */\n  public id: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template\n   *  and the text for single selection\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\n   */\n  public debounceTime: number;\n\n  /**\n   * Place holder text for autocomplete input\n   */\n  public autocompletePlaceHolderText: string;\n\n  /**\n   * Mininumn Characters for search\n   */\n  public minimumCharacterCountSearch: number;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n\n  /**\n   * Allows option to allow user text not in the standard results\n   */\n  public isFreeTextEnabled: boolean = false;\n\n  /**\n   * Text appeneded ad the end of free text\n   */\n  public freeTextSubtext: string = 'search';\n\n  /**\n   * Focus into autocomplete search\n   */\n  public focusInSearch: boolean = true;\n\n  /**\n   * The aria-label for the auto-complete\n   */\n  public ariaLabelText: string;\n\n  /**\n   * To enable the tag mode\n   */\n  public isTagModeEnabled: boolean = false;\n\n  /**\n   * To make input readonly\n   */\n  public inputReadOnly = false;\n\n  /**\n   * Name of the children filed\n   */\n  public groupByChild: string = 'children';\n\n  /**\n   * To enable the Grouping mode\n   */\n  public isGroupingEnabled: boolean = false;\n\n  /**\n   * To enable the Group item selectable\n   */\n  public isSelectableGroup: boolean = true;\n\n  public hideCloseIcon: boolean = false;\n}\n",
      constructorObj: {
        name: 'constructor',
        description:
          '<p>sets the default debounce time to 250 milliseconds</p>\n',
        args: [],
        line: 3,
      },
      properties: [
        {
          name: 'ariaLabelText',
          type: 'string',
          optional: false,
          description: '<p>The aria-label for the auto-complete</p>\n',
          line: 76,
          modifierKind: [114],
        },
        {
          name: 'autocompletePlaceHolderText',
          type: 'string',
          optional: false,
          description: '<p>Place holder text for autocomplete input</p>\n',
          line: 46,
          modifierKind: [114],
        },
        {
          name: 'debounceTime',
          type: 'number',
          optional: false,
          description:
            '<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n',
          line: 41,
          modifierKind: [114],
        },
        {
          name: 'focusInSearch',
          defaultValue: 'true',
          type: 'boolean',
          optional: false,
          description: '<p>Focus into autocomplete search</p>\n',
          line: 71,
          modifierKind: [114],
        },
        {
          name: 'freeTextSubtext',
          defaultValue: "'search'",
          type: 'string',
          optional: false,
          description: '<p>Text appeneded ad the end of free text</p>\n',
          line: 66,
          modifierKind: [114],
        },
        {
          name: 'groupByChild',
          defaultValue: "'children'",
          type: 'string',
          optional: false,
          description: '<p>Name of the children filed</p>\n',
          line: 91,
          modifierKind: [114],
        },
        {
          name: 'hideCloseIcon',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '',
          line: 103,
          modifierKind: [114],
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '<p>Used for the Id of the control</p>\n',
          line: 20,
          modifierKind: [114],
        },
        {
          name: 'inputReadOnly',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '<p>To make input readonly</p>\n',
          line: 86,
          modifierKind: [114],
        },
        {
          name: 'isFreeTextEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description:
            '<p>Allows option to allow user text not in the standard results</p>\n',
          line: 61,
          modifierKind: [114],
        },
        {
          name: 'isGroupingEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the Grouping mode</p>\n',
          line: 96,
          modifierKind: [114],
        },
        {
          name: 'isSelectableGroup',
          defaultValue: 'true',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the Group item selectable</p>\n',
          line: 101,
          modifierKind: [114],
        },
        {
          name: 'isTagModeEnabled',
          defaultValue: 'false',
          type: 'boolean',
          optional: false,
          description: '<p>To enable the tag mode</p>\n',
          line: 81,
          modifierKind: [114],
        },
        {
          name: 'labelText',
          type: 'string',
          optional: false,
          description:
            '<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n',
          line: 15,
          modifierKind: [114],
        },
        {
          name: 'minimumCharacterCountSearch',
          type: 'number',
          optional: false,
          description: '<p>Mininumn Characters for search</p>\n',
          line: 51,
          modifierKind: [114],
        },
        {
          name: 'primaryKeyField',
          type: 'string',
          optional: false,
          description:
            '<p>This is the primary field used to identify each object in the results</p>\n',
          line: 25,
          modifierKind: [114],
        },
        {
          name: 'primaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the top part of the basic template\nand the text for single selection</p>\n',
          line: 31,
          modifierKind: [114],
        },
        {
          name: 'secondaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the bottom part of the basic template</p>\n',
          line: 36,
          modifierKind: [114],
        },
        {
          name: 'selectionMode',
          defaultValue: 'SelectionMode.SINGLE',
          type: 'SelectionMode',
          optional: false,
          description:
            '<p>Mode of the model either allows a single item or multiple items</p>\n',
          line: 56,
          modifierKind: [114],
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SdsDialogConfig',
      id: 'class-SdsDialogConfig-1566a6a7b1ab371c1f52bc1d4b5afcd9',
      file: 'libs/packages/components/src/lib/dialog/dialog-config.ts',
      type: 'class',
      sourceCode:
        "import { ViewContainerRef } from '@angular/core';\nimport { Direction } from '@angular/cdk/bidi';\nimport { ScrollStrategy } from '@angular/cdk/overlay';\n\n/** Valid ARIA roles for a dialog element. */\nexport type DialogRole = 'dialog' | 'alertdialog';\n\n/** Possible overrides for a dialog's position. */\nexport interface DialogPosition {\n  /** Override for the dialog's top position. */\n  top?: string;\n\n  /** Override for the dialog's bottom position. */\n  bottom?: string;\n\n  /** Override for the dialog's left position. */\n  left?: string;\n\n  /** Override for the dialog's right position. */\n  right?: string;\n}\n\n/** Custom Slide Out Panel configurations */\nexport interface SlideOutConfig {\n  /** Width of the slide out panel */\n  width?: string;\n\n  /** Time that it takes to open and close the panel */\n  time?: string;\n}\n\n/**\n * Configuration for opening a modal dialog with the SdsDialog service.\n */\nexport class SdsDialogConfig<D = any> {\n\n  /**\n   * Where the attached component should live in Angular's *logical* component tree.\n   * This affects what is available for injection and the change detection order for the\n   * component instantiated inside of the dialog. This does not affect where the dialog\n   * content will be rendered.\n   */\n  viewContainerRef?: ViewContainerRef;\n\n  /** ID for the dialog. If omitted, a unique one will be generated. */\n  id?: string;\n\n  /** The ARIA role of the dialog element. */\n  role?: DialogRole = 'dialog';\n\n  /** Custom class for the overlay pane. */\n  panelClass?: string | string[] = '';\n\n  /** Whether the dialog has a backdrop. */\n  hasBackdrop?= true;\n\n  /** Custom class for the backdrop, */\n  backdropClass?= '';\n\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\n  disableClose?= false;\n\n  /** Width of the dialog. */\n  width?= '';\n\n  /** Height of the dialog. */\n  height?= '';\n\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\n  minWidth?: number | string;\n\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\n  minHeight?: number | string;\n\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\n  maxWidth?: number | string = '80vw';\n\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\n  maxHeight?: number | string;\n\n  /** Position overrides. */\n  position?: DialogPosition;\n\n  /** Data being injected into the child component. */\n  data?: D | null = null;\n\n  /** Layout direction for the dialog's content. */\n  direction?: Direction;\n\n  /** ID of the element that describes the dialog. */\n  ariaDescribedBy?: string | null = null;\n\n  /** Aria label to assign to the dialog element */\n  ariaLabel?: string | null = null;\n\n  /** Whether the dialog should focus the first focusable element on open. */\n  autoFocus?= true;\n\n  /**\n   * Whether the dialog should restore focus to the\n   * previously-focused element, after it's closed.\n   */\n  restoreFocus?= true;\n\n  /** Scroll strategy to be used for the dialog. */\n  scrollStrategy?: ScrollStrategy;\n\n  /**\n   * Whether the dialog should close when the user goes backwards/forwards in history.\n   * Note that this usually doesn't include clicking on links (unless the user is using\n   * the `HashLocationStrategy`).\n   */\n  closeOnNavigation?= true;\n\n  /**\n   * Wheter the dialog its an alert\n   */\n  alert?: 'warning' | 'info' | 'error' | 'success';\n\n  /**\n   * Whether to display the close button in dialog header\n   */\n  displayCloseBtn?= true;\n\n  /**\n   * Whether dialog is a slide-out. Changes enter and exit animation, and adds\n   * class `dialog-slide-out` to container\n   */\n  slideOut?: boolean | SlideOutConfig = false;\n}\n",
      properties: [
        {
          name: 'alert',
          type: '"warning" | "info" | "error" | "success"',
          optional: true,
          description: '<p>Wheter the dialog its an alert</p>\n',
          line: 118,
        },
        {
          name: 'ariaDescribedBy',
          defaultValue: 'null',
          type: 'string | null',
          optional: true,
          description: '<p>ID of the element that describes the dialog. </p>\n',
          line: 91,
        },
        {
          name: 'ariaLabel',
          defaultValue: 'null',
          type: 'string | null',
          optional: true,
          description: '<p>Aria label to assign to the dialog element </p>\n',
          line: 94,
        },
        {
          name: 'autoFocus',
          defaultValue: 'true',
          type: '',
          optional: true,
          description:
            '<p>Whether the dialog should focus the first focusable element on open. </p>\n',
          line: 97,
        },
        {
          name: 'backdropClass',
          defaultValue: "''",
          type: 'string',
          optional: true,
          description: '<p>Custom class for the backdrop, </p>\n',
          line: 58,
        },
        {
          name: 'closeOnNavigation',
          defaultValue: 'true',
          type: '',
          optional: true,
          description:
            '<p>Whether the dialog should close when the user goes backwards/forwards in history.\nNote that this usually doesn&#39;t include clicking on links (unless the user is using\nthe <code>HashLocationStrategy</code>).</p>\n',
          line: 113,
        },
        {
          name: 'data',
          defaultValue: 'null',
          type: 'D | null',
          optional: true,
          description:
            '<p>Data being injected into the child component. </p>\n',
          line: 85,
        },
        {
          name: 'direction',
          type: 'Direction',
          optional: true,
          description:
            '<p>Layout direction for the dialog&#39;s content. </p>\n',
          line: 88,
        },
        {
          name: 'disableClose',
          defaultValue: 'false',
          type: '',
          optional: true,
          description:
            '<p>Whether the user can use escape or clicking on the backdrop to close the modal. </p>\n',
          line: 61,
        },
        {
          name: 'displayCloseBtn',
          defaultValue: 'true',
          type: '',
          optional: true,
          description:
            '<p>Whether to display the close button in dialog header</p>\n',
          line: 123,
        },
        {
          name: 'hasBackdrop',
          defaultValue: 'true',
          type: '',
          optional: true,
          description: '<p>Whether the dialog has a backdrop. </p>\n',
          line: 55,
        },
        {
          name: 'height',
          defaultValue: "''",
          type: 'string',
          optional: true,
          description: '<p>Height of the dialog. </p>\n',
          line: 67,
        },
        {
          name: 'id',
          type: 'string',
          optional: true,
          description:
            '<p>ID for the dialog. If omitted, a unique one will be generated. </p>\n',
          line: 46,
        },
        {
          name: 'maxHeight',
          type: 'number | string',
          optional: true,
          description:
            '<p>Max-height of the dialog. If a number is provided, pixel units are assumed. </p>\n',
          line: 79,
        },
        {
          name: 'maxWidth',
          defaultValue: "'80vw'",
          type: 'number | string',
          optional: true,
          description:
            '<p>Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw </p>\n',
          line: 76,
        },
        {
          name: 'minHeight',
          type: 'number | string',
          optional: true,
          description:
            '<p>Min-height of the dialog. If a number is provided, pixel units are assumed. </p>\n',
          line: 73,
        },
        {
          name: 'minWidth',
          type: 'number | string',
          optional: true,
          description:
            '<p>Min-width of the dialog. If a number is provided, pixel units are assumed. </p>\n',
          line: 70,
        },
        {
          name: 'panelClass',
          defaultValue: "''",
          type: 'string | string[]',
          optional: true,
          description: '<p>Custom class for the overlay pane. </p>\n',
          line: 52,
        },
        {
          name: 'position',
          type: 'DialogPosition',
          optional: true,
          description: '<p>Position overrides. </p>\n',
          line: 82,
        },
        {
          name: 'restoreFocus',
          defaultValue: 'true',
          type: '',
          optional: true,
          description:
            '<p>Whether the dialog should restore focus to the\npreviously-focused element, after it&#39;s closed.</p>\n',
          line: 103,
        },
        {
          name: 'role',
          defaultValue: "'dialog'",
          type: 'DialogRole',
          optional: true,
          description: '<p>The ARIA role of the dialog element. </p>\n',
          line: 49,
        },
        {
          name: 'scrollStrategy',
          type: 'ScrollStrategy',
          optional: true,
          description: '<p>Scroll strategy to be used for the dialog. </p>\n',
          line: 106,
        },
        {
          name: 'slideOut',
          defaultValue: 'false',
          type: 'boolean | SlideOutConfig',
          optional: true,
          description:
            '<p>Whether dialog is a slide-out. Changes enter and exit animation, and adds\nclass <code>dialog-slide-out</code> to container</p>\n',
          line: 129,
        },
        {
          name: 'viewContainerRef',
          type: 'ViewContainerRef',
          optional: true,
          description:
            '<p>Where the attached component should live in Angular&#39;s <em>logical</em> component tree.\nThis affects what is available for injection and the change detection order for the\ncomponent instantiated inside of the dialog. This does not affect where the dialog\ncontent will be rendered.</p>\n',
          line: 43,
        },
        {
          name: 'width',
          defaultValue: "''",
          type: 'string',
          optional: true,
          description: '<p>Width of the dialog. </p>\n',
          line: 64,
        },
      ],
      description:
        '<p>Configuration for opening a modal dialog with the SdsDialog service.</p>\n',
      rawdescription:
        'Configuration for opening a modal dialog with the SdsDialog service.',
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SdsDialogRef',
      id: 'class-SdsDialogRef-07046616d000bafc1b964555cb6e26d9',
      file: 'libs/packages/components/src/lib/dialog/dialog-ref.ts',
      type: 'class',
      sourceCode:
        "import {ESCAPE} from '@angular/cdk/keycodes';\nimport {GlobalPositionStrategy, OverlayRef} from '@angular/cdk/overlay';\nimport {Location} from '@angular/common';\nimport {Observable, Subject} from 'rxjs';\nimport {filter, take} from 'rxjs/operators';\nimport {DialogPosition} from './dialog-config';\nimport {SdsDialogContainerComponent} from './dialog-container.component';\n\n// Counter for unique dialog ids.\nlet uniqueId = 0;\n\n/**\n * Reference to a dialog opened via the SdsDialog service.\n */\nexport class SdsDialogRef<T, R = any> {\n  /** The instance of component opened into the dialog. */\n  componentInstance: T;\n\n  /** Whether the user is allowed to close the dialog. */\n  disableClose: boolean | undefined = this._containerInstance._config.disableClose;\n\n  /** Subject for notifying the user that the dialog has finished opening. */\n  private readonly _afterOpened = new Subject<void>();\n\n  /** Subject for notifying the user that the dialog has finished closing. */\n  private readonly _afterClosed = new Subject<R | undefined>();\n\n  /** Subject for notifying the user that the dialog has started closing. */\n  private readonly _beforeClosed = new Subject<R | undefined>();\n\n  /** Result to be passed to afterClosed. */\n  private _result: R | undefined;\n\n  constructor(\n    private _overlayRef: OverlayRef,\n    public _containerInstance: SdsDialogContainerComponent,\n    _location?: Location,\n    readonly id: string = `sds-dialog-${uniqueId++}`) {\n\n    // Pass the id along to the container.\n    _containerInstance._id = id;\n\n    // Emit when opening animation completes\n    _containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'done' && (event.toState === 'enter' || event.toState === 'slideEnter')),\n      take(1)\n    )\n    .subscribe(() => {\n      this._afterOpened.next();\n      this._afterOpened.complete();\n    });\n\n    // Dispose overlay when closing animation is complete\n    _containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'done' && (event.toState === 'exit' || event.toState === 'slideExit')),\n      take(1)\n    ).subscribe(() => this._overlayRef.dispose());\n\n    _overlayRef.detachments().subscribe(() => {\n      this._beforeClosed.next(this._result);\n      this._beforeClosed.complete();\n      this._afterClosed.next(this._result);\n      this._afterClosed.complete();\n      this.componentInstance = null!;\n      this._overlayRef.dispose();\n    });\n\n    _overlayRef.keydownEvents()\n      .pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose))\n      .subscribe(() => this.close());\n  }\n\n  /**\n   * Close the dialog.\n   * @param dialogResult Optional result to return to the dialog opener.\n   */\n  close(dialogResult?: R): void {\n    this._result = dialogResult;\n\n    // Transition the backdrop in parallel to the dialog.\n    this._containerInstance._animationStateChanged.pipe(\n      filter(event => event.phaseName === 'start'),\n      take(1)\n    )\n    .subscribe(() => {\n      this._beforeClosed.next(dialogResult);\n      this._beforeClosed.complete();\n      this._overlayRef.detachBackdrop();\n    });\n\n    this._containerInstance._startExitAnimation();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog is finished opening.\n   */\n  afterOpened(): Observable<void> {\n    return this._afterOpened.asObservable();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog is finished closing.\n   */\n  afterClosed(): Observable<R | undefined> {\n    return this._afterClosed.asObservable();\n  }\n\n  /**\n   * Gets an observable that is notified when the dialog has started closing.\n   */\n  beforeClosed(): Observable<R | undefined> {\n    return this._beforeClosed.asObservable();\n  }\n\n  /**\n   * Gets an observable that emits when the overlay's backdrop has been clicked.\n   */\n  backdropClick(): Observable<MouseEvent> {\n    return this._overlayRef.backdropClick();\n  }\n\n  /**\n   * Gets an observable that emits when keydown events are targeted on the overlay.\n   */\n  keydownEvents(): Observable<KeyboardEvent> {\n    return this._overlayRef.keydownEvents();\n  }\n\n  /**\n   * Updates the dialog's position.\n   * @param position New dialog position.\n   */\n  updatePosition(position?: DialogPosition): this {\n    const strategy = this._getPositionStrategy();\n\n    if (position && (position.left || position.right)) {\n      position.left ? strategy.left(position.left) : strategy.right(position.right);\n    } else {\n      strategy.centerHorizontally();\n    }\n\n    if (position && (position.top || position.bottom)) {\n      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);\n    } else {\n      strategy.centerVertically();\n    }\n\n    this._overlayRef.updatePosition();\n\n    return this;\n  }\n\n  /**\n   * Updates the dialog's width and height.\n   * @param width New width of the dialog.\n   * @param height New height of the dialog.\n   */\n  updateSize(width: string = '', height: string = ''): this {\n    this._getPositionStrategy().width(width).height(height);\n    this._overlayRef.updatePosition();\n    return this;\n  }\n\n  /** Add a CSS class or an array of classes to the overlay pane. */\n  addPanelClass(classes: string | string[]): this {\n    this._overlayRef.addPanelClass(classes);\n    return this;\n  }\n\n  /** Remove a CSS class or an array of classes from the overlay pane. */\n  removePanelClass(classes: string | string[]): this {\n    this._overlayRef.removePanelClass(classes);\n    return this;\n  }\n\n  /** Fetches the position strategy object from the overlay ref. */\n  private _getPositionStrategy(): GlobalPositionStrategy {\n    return this._overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;\n  }\n}\n",
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_overlayRef',
            type: 'OverlayRef',
          },
          {
            name: '_containerInstance',
            type: 'SdsDialogContainerComponent',
          },
          {
            name: '_location',
            type: 'Location',
            optional: true,
          },
          {
            name: 'id',
            type: 'string',
            defaultValue: '`sds-dialog-${uniqueId++}`',
          },
        ],
        line: 32,
        jsdoctags: [
          {
            name: '_overlayRef',
            type: 'OverlayRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_containerInstance',
            type: 'SdsDialogContainerComponent',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_location',
            type: 'Location',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'id',
            type: 'string',
            defaultValue: '`sds-dialog-${uniqueId++}`',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      properties: [
        {
          name: '_afterClosed',
          defaultValue: 'new Subject<R | undefined>()',
          type: '',
          optional: false,
          description:
            '<p>Subject for notifying the user that the dialog has finished closing. </p>\n',
          line: 26,
          modifierKind: [112, 132],
        },
        {
          name: '_afterOpened',
          defaultValue: 'new Subject<void>()',
          type: '',
          optional: false,
          description:
            '<p>Subject for notifying the user that the dialog has finished opening. </p>\n',
          line: 23,
          modifierKind: [112, 132],
        },
        {
          name: '_beforeClosed',
          defaultValue: 'new Subject<R | undefined>()',
          type: '',
          optional: false,
          description:
            '<p>Subject for notifying the user that the dialog has started closing. </p>\n',
          line: 29,
          modifierKind: [112, 132],
        },
        {
          name: '_containerInstance',
          type: 'SdsDialogContainerComponent',
          optional: false,
          description: '',
          line: 36,
          modifierKind: [114],
        },
        {
          name: '_result',
          type: 'R | undefined',
          optional: false,
          description: '<p>Result to be passed to afterClosed. </p>\n',
          line: 32,
          modifierKind: [112],
        },
        {
          name: 'componentInstance',
          type: 'T',
          optional: false,
          description:
            '<p>The instance of component opened into the dialog. </p>\n',
          line: 17,
        },
        {
          name: 'disableClose',
          defaultValue: 'this._containerInstance._config.disableClose',
          type: 'boolean | undefined',
          optional: false,
          description:
            '<p>Whether the user is allowed to close the dialog. </p>\n',
          line: 20,
        },
      ],
      description:
        '<p>Reference to a dialog opened via the SdsDialog service.</p>\n',
      rawdescription: 'Reference to a dialog opened via the SdsDialog service.',
      methods: [
        {
          name: '_getPositionStrategy',
          args: [],
          optional: false,
          returnType: 'GlobalPositionStrategy',
          typeParameters: [],
          line: 177,
          description:
            '<p>Fetches the position strategy object from the overlay ref. </p>\n',
          modifierKind: [112],
        },
        {
          name: 'addPanelClass',
          args: [
            {
              name: 'classes',
              type: 'string | string[]',
            },
          ],
          optional: false,
          returnType: '',
          typeParameters: [],
          line: 165,
          description:
            '<p>Add a CSS class or an array of classes to the overlay pane. </p>\n',
          jsdoctags: [
            {
              name: 'classes',
              type: 'string | string[]',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'afterClosed',
          args: [],
          optional: false,
          returnType: 'Observable<R | undefined>',
          typeParameters: [],
          line: 104,
          description:
            '<p>Gets an observable that is notified when the dialog is finished closing.</p>\n',
        },
        {
          name: 'afterOpened',
          args: [],
          optional: false,
          returnType: 'Observable<void>',
          typeParameters: [],
          line: 97,
          description:
            '<p>Gets an observable that is notified when the dialog is finished opening.</p>\n',
        },
        {
          name: 'backdropClick',
          args: [],
          optional: false,
          returnType: 'Observable<MouseEvent>',
          typeParameters: [],
          line: 118,
          description:
            '<p>Gets an observable that emits when the overlay&#39;s backdrop has been clicked.</p>\n',
        },
        {
          name: 'beforeClosed',
          args: [],
          optional: false,
          returnType: 'Observable<R | undefined>',
          typeParameters: [],
          line: 111,
          description:
            '<p>Gets an observable that is notified when the dialog has started closing.</p>\n',
        },
        {
          name: 'close',
          args: [
            {
              name: 'dialogResult',
              type: 'R',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 77,
          description: '<p>Close the dialog.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 2637,
                end: 2649,
                flags: 0,
                escapedText: 'dialogResult',
              },
              type: 'R',
              optional: true,
              tagName: {
                pos: 2631,
                end: 2636,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Optional result to return to the dialog opener.</p>\n',
            },
          ],
        },
        {
          name: 'keydownEvents',
          args: [],
          optional: false,
          returnType: 'Observable<KeyboardEvent>',
          typeParameters: [],
          line: 125,
          description:
            '<p>Gets an observable that emits when keydown events are targeted on the overlay.</p>\n',
        },
        {
          name: 'removePanelClass',
          args: [
            {
              name: 'classes',
              type: 'string | string[]',
            },
          ],
          optional: false,
          returnType: '',
          typeParameters: [],
          line: 171,
          description:
            '<p>Remove a CSS class or an array of classes from the overlay pane. </p>\n',
          jsdoctags: [
            {
              name: 'classes',
              type: 'string | string[]',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updatePosition',
          args: [
            {
              name: 'position',
              type: 'DialogPosition',
              optional: true,
            },
          ],
          optional: false,
          returnType: '',
          typeParameters: [],
          line: 133,
          description: '<p>Updates the dialog&#39;s position.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4152,
                end: 4160,
                flags: 0,
                escapedText: 'position',
              },
              type: 'DialogPosition',
              optional: true,
              tagName: {
                pos: 4146,
                end: 4151,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>New dialog position.</p>\n',
            },
          ],
        },
        {
          name: 'updateSize',
          args: [
            {
              name: 'width',
              type: 'string',
              defaultValue: "''",
            },
            {
              name: 'height',
              type: 'string',
              defaultValue: "''",
            },
          ],
          optional: false,
          returnType: '',
          typeParameters: [],
          line: 158,
          description: '<p>Updates the dialog&#39;s width and height.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4810,
                end: 4815,
                flags: 0,
                escapedText: 'width',
              },
              type: 'string',
              defaultValue: "''",
              tagName: {
                pos: 4804,
                end: 4809,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>New width of the dialog.</p>\n',
            },
            {
              name: {
                pos: 4853,
                end: 4859,
                flags: 0,
                escapedText: 'height',
              },
              type: 'string',
              defaultValue: "''",
              tagName: {
                pos: 4847,
                end: 4852,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>New height of the dialog.</p>\n',
            },
          ],
        },
      ],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SDSHiercarchicalServiceSearchItem',
      id:
        'class-SDSHiercarchicalServiceSearchItem-789c2f09fc917454d7d68b1fa43ff91c',
      file:
        'libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts',
      type: 'class',
      sourceCode:
        "import { Observable } from 'rxjs';\nexport interface SDSAutocompleteServiceInterface {\n    /**\n     * \n     * @param searchValue \n     */\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\n}\n\nexport interface SDSHiercarchicalServiceResult {\n    /**\n     * \n     */\n    items: object[];\n\n    /**\n     * \n     */\n    totalItems: number;\n}\n\nexport class SDSHiercarchicalServiceSearchItem {\n\n    /**\n     * \n     */\n    id: string;\n\n    /**\n     * \n     */\n    searchValue: string;\n\n    /**\n     * \n     */\n    // sort: Sort;\n\n    /**\n     * \n     */\n    currentItemCount: number;\n}\n\n",
      properties: [
        {
          name: 'currentItemCount',
          type: 'number',
          optional: false,
          description: '',
          line: 42,
        },
        {
          name: 'id',
          type: 'string',
          optional: false,
          description: '',
          line: 27,
        },
        {
          name: 'searchValue',
          type: 'string',
          optional: false,
          description: '',
          line: 32,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SDSSelectedItemModel',
      id: 'class-SDSSelectedItemModel-26efaed51d41a8f1f286c184b063c419',
      file:
        'libs/packages/components/src/lib/selected-result/models/sds-selectedItem.model.ts',
      type: 'class',
      sourceCode:
        'export class SDSSelectedItemModel {\n  /**\n   * List of items selected\n   */\n  public items: object[];\n\n  constructor(items?: object[]) {\n    this.items = items ? [...items] : [];\n  }\n\n}\n',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'items',
            type: 'object[]',
            optional: true,
          },
        ],
        line: 5,
        jsdoctags: [
          {
            name: 'items',
            type: 'object[]',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      properties: [
        {
          name: 'items',
          type: 'object[]',
          optional: false,
          description: '<p>List of items selected</p>\n',
          line: 5,
          modifierKind: [114],
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SDSSelectedItemModelHelper',
      id: 'class-SDSSelectedItemModelHelper-0fe1a23cc4fbe13701dd50729d3a4a9b',
      file:
        'libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts',
      type: 'class',
      sourceCode:
        "import { SDSSelectedItemModel } from './sds-selectedItem.model';\n\nexport class SDSSelectedItemModelHelper {\n\n    /**\n      *  adds an item to the collection\n      * if selected mode is single it removes any existing items\n      * also checks to see if that item already exists\n      * keyfield is used to determine uniqueness of the item added\n      * @param itemToAdd \n      * @param keyField \n      * @param selectionMode \n      * @param items \n      */\n    public static addItem(itemToAdd: object, keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\n        if (!SDSSelectedItemModelHelper.containsItem(itemToAdd[keyField], keyField, model.items)) {\n            if (selectionMode === SelectionMode.SINGLE) {\n                SDSSelectedItemModelHelper.clearItems(model.items);\n            }\n            model.items.push(itemToAdd);\n        }\n    }\n\n    /**\n     * adds an array of items to the list and will not add duplicate items\n     * keyfield is used to determine uniqueness of the item added\n     * @param toAddItems \n     * @param keyField \n     * @param selectionMode \n     * @param items \n     */\n    public static addItems(toAddItems: object[], keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\n        for (let i = 0; i < toAddItems.length; i++) {\n            SDSSelectedItemModelHelper.addItem(toAddItems[i], keyField, selectionMode, model);\n        }\n    }\n\n    /**\n     * removes the item from the list\n     * keyfield is used to determine uniqueness of the item added\n     * @param item \n     * @param keyField \n     * @param items \n     */\n    public static removeItem(item: object, keyField: string, model: SDSSelectedItemModel) {\n        if (SDSSelectedItemModelHelper.containsItem(item[keyField], keyField, model.items)) {\n            model.items.splice(model.items.indexOf(item), 1)\n        }\n    }\n\n    /**\n     * checks to see if a particular item exists by the provied key\n     * keyfield is used to determine uniqueness of the item added\n     * @param key \n     * @param keyField \n     * @param items \n     */\n    public static containsItem(key: string, keyField: string, items: object[]): boolean {\n        let item = items.find(o => o[keyField] === key);\n        return item !== null && item !== undefined;\n    }\n\n    /**\n     * Clears the list of items\n     * @param items \n     */\n    public static clearItems(items: object[]) {\n        while (items.length > 0) {\n            items.pop();\n        }\n    }\n\n    /**\n     * updates an array of items to the list and will not add duplicate items\n     * keyfield is used to determine uniqueness of the item added\n     * @param selectedItems \n     * @param keyField \n     * @param selectionMode \n     * @param items \n     */\n    public static replaceItems(selectedItems: object[], keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\n        //Clears Old List\n        SDSSelectedItemModelHelper.clearItems(model.items);\n        //Adds new List\n        SDSSelectedItemModelHelper.addItems(selectedItems, keyField, selectionMode, model);\n    }\n}\n\nexport enum SelectionMode {\n    SINGLE, MULTIPLE\n}\n",
      properties: [],
      methods: [
        {
          name: 'addItem',
          args: [
            {
              name: 'itemToAdd',
              type: 'object',
            },
            {
              name: 'keyField',
              type: 'string',
            },
            {
              name: 'selectionMode',
              type: 'SelectionMode',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 15,
          description:
            '<p>adds an item to the collection\nif selected mode is single it removes any existing items\nalso checks to see if that item already exists\nkeyfield is used to determine uniqueness of the item added</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 359,
                end: 368,
                flags: 0,
                escapedText: 'itemToAdd',
              },
              type: 'object',
              tagName: {
                pos: 353,
                end: 358,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 385,
                end: 393,
                flags: 0,
                escapedText: 'keyField',
              },
              type: 'string',
              tagName: {
                pos: 379,
                end: 384,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 410,
                end: 423,
                flags: 0,
                escapedText: 'selectionMode',
              },
              type: 'SelectionMode',
              tagName: {
                pos: 404,
                end: 409,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'addItems',
          args: [
            {
              name: 'toAddItems',
              type: 'object[]',
            },
            {
              name: 'keyField',
              type: 'string',
            },
            {
              name: 'selectionMode',
              type: 'SelectionMode',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 32,
          description:
            '<p>adds an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 1041,
                end: 1051,
                flags: 0,
                escapedText: 'toAddItems',
              },
              type: 'object[]',
              tagName: {
                pos: 1035,
                end: 1040,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 1067,
                end: 1075,
                flags: 0,
                escapedText: 'keyField',
              },
              type: 'string',
              tagName: {
                pos: 1061,
                end: 1066,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 1091,
                end: 1104,
                flags: 0,
                escapedText: 'selectionMode',
              },
              type: 'SelectionMode',
              tagName: {
                pos: 1085,
                end: 1090,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'clearItems',
          args: [
            {
              name: 'items',
              type: 'object[]',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 67,
          description: '<p>Clears the list of items</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 2352,
                end: 2357,
                flags: 0,
                escapedText: 'items',
              },
              type: 'object[]',
              tagName: {
                pos: 2346,
                end: 2351,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'containsItem',
          args: [
            {
              name: 'key',
              type: 'string',
            },
            {
              name: 'keyField',
              type: 'string',
            },
            {
              name: 'items',
              type: 'object[]',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 58,
          description:
            '<p>checks to see if a particular item exists by the provied key\nkeyfield is used to determine uniqueness of the item added</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 2034,
                end: 2037,
                flags: 0,
                escapedText: 'key',
              },
              type: 'string',
              tagName: {
                pos: 2028,
                end: 2033,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2053,
                end: 2061,
                flags: 0,
                escapedText: 'keyField',
              },
              type: 'string',
              tagName: {
                pos: 2047,
                end: 2052,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2077,
                end: 2082,
                flags: 0,
                escapedText: 'items',
              },
              type: 'object[]',
              tagName: {
                pos: 2071,
                end: 2076,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'removeItem',
          args: [
            {
              name: 'item',
              type: 'object',
            },
            {
              name: 'keyField',
              type: 'string',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 45,
          description:
            '<p>removes the item from the list\nkeyfield is used to determine uniqueness of the item added</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 1555,
                end: 1559,
                flags: 0,
                escapedText: 'item',
              },
              type: 'object',
              tagName: {
                pos: 1549,
                end: 1554,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 1575,
                end: 1583,
                flags: 0,
                escapedText: 'keyField',
              },
              type: 'string',
              tagName: {
                pos: 1569,
                end: 1574,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'replaceItems',
          args: [
            {
              name: 'selectedItems',
              type: 'object[]',
            },
            {
              name: 'keyField',
              type: 'string',
            },
            {
              name: 'selectionMode',
              type: 'SelectionMode',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 81,
          description:
            '<p>updates an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n',
          modifierKind: [115],
          jsdoctags: [
            {
              name: {
                pos: 2658,
                end: 2671,
                flags: 0,
                escapedText: 'selectedItems',
              },
              type: 'object[]',
              tagName: {
                pos: 2652,
                end: 2657,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2687,
                end: 2695,
                flags: 0,
                escapedText: 'keyField',
              },
              type: 'string',
              tagName: {
                pos: 2681,
                end: 2686,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2711,
                end: 2724,
                flags: 0,
                escapedText: 'selectionMode',
              },
              type: 'SelectionMode',
              tagName: {
                pos: 2705,
                end: 2710,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: 'model',
              type: 'SDSSelectedItemModel',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SDSSelectedResultConfiguration',
      id:
        'class-SDSSelectedResultConfiguration-8cea9d3e4a71dad5ed79e10a5e35e1e4',
      file:
        'libs/packages/components/src/lib/selected-result/models/SDSSelectedResultConfiguration.ts',
      type: 'class',
      sourceCode:
        "import { Observable } from 'rxjs';\nimport { SelectionMode } from './sds-selected-item-model-helper';\n\nexport class SDSSelectedResultConfiguration {\n\n  /**\n   * Used to describe the drop down (Text should match the label that will be supplied)\n   */\n  public labelText: string;\n\n  /**\n   *  This is the primary field used to identify each object in the results\n   */\n  public primaryKeyField: string;\n\n  /**\n   *  Property from supplied model used for the top part of the basic template\n   */\n  public primaryTextField: string;\n\n  /**\n   *  Property from supplied model used for the bottom part of the basic template\n   */\n  public secondaryTextField: string;\n\n  /**\n   * Mode of the model either allows a single item or multiple items\n   */\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\n\n  /** \n   * Modifiier function to change display of how primary text field is shown\n   * Allows adding prefix / suffix values when displaying tags\n   */\n  public displayModifierFn?: (displayValue: string, index?: number) => string;\n}\n",
      properties: [
        {
          name: 'displayModifierFn',
          type: 'function',
          optional: true,
          description:
            '<p>Modifiier function to change display of how primary text field is shown\nAllows adding prefix / suffix values when displaying tags</p>\n',
          line: 35,
          modifierKind: [114],
        },
        {
          name: 'labelText',
          type: 'string',
          optional: false,
          description:
            '<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n',
          line: 9,
          modifierKind: [114],
        },
        {
          name: 'primaryKeyField',
          type: 'string',
          optional: false,
          description:
            '<p>This is the primary field used to identify each object in the results</p>\n',
          line: 14,
          modifierKind: [114],
        },
        {
          name: 'primaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the top part of the basic template</p>\n',
          line: 19,
          modifierKind: [114],
        },
        {
          name: 'secondaryTextField',
          type: 'string',
          optional: false,
          description:
            '<p>Property from supplied model used for the bottom part of the basic template</p>\n',
          line: 24,
          modifierKind: [114],
        },
        {
          name: 'selectionMode',
          defaultValue: 'SelectionMode.SINGLE',
          type: 'SelectionMode',
          optional: false,
          description:
            '<p>Mode of the model either allows a single item or multiple items</p>\n',
          line: 29,
          modifierKind: [114],
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SearchModel',
      id: 'class-SearchModel-c99f0414ab1510d4ed7080f5fda40447',
      file:
        'libs/packages/components/src/lib/search-result-list/model/search-results.model.ts',
      type: 'class',
      sourceCode:
        "import { TemplateRef } from '@angular/core';\n\nexport class SearchModel {\n  results: any[];\n  metadata: {\n    messages: Message[] | TemplateRef<any>;\n  };\n}\nexport class Message {\n  type: string;\n  title: string;\n  message: string;\n  classes: string;\n  buttons: Button[];\n}\nexport class Button {\n  id: string;\n  text: string;\n  classes: string;\n  action: any;\n  ariaLabel?: string;\n}\n",
      properties: [
        {
          name: 'metadata',
          type: 'literal type',
          optional: false,
          description: '',
          line: 5,
        },
        {
          name: 'results',
          type: 'any[]',
          optional: false,
          description: '',
          line: 4,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SearchSettings',
      id: 'class-SearchSettings-72bcc44c273e4e7b7e8665fb6faff583',
      file: 'libs/packages/components/src/lib/search/search.component.ts',
      type: 'class',
      sourceCode:
        "import {\n  Component,\n  ViewChild,\n  ElementRef,\n  Input,\n  AfterViewInit,\n  forwardRef,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Output,\n  EventEmitter,\n} from '@angular/core';\nimport { FocusMonitor } from '@angular/cdk/a11y';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nexport class SearchSettings {\n  public placeholder = 'Search';\n  public ariaLabel? = 'Search';\n  public size?: string;\n  public inputClass?: string;\n  public parentSelector?: string;\n  public id?: string;\n  public dropdown?: any = {\n    id: 'searchOptions',\n    placeholder: '-Select-',\n    options: [],\n    inverse: false,\n  };\n  public isSuffixSearchIcon?: boolean = false;\n}\n@Component({\n  selector: 'sds-search',\n  templateUrl: 'search.component.html',\n  styleUrls: ['search.component.scss'],\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsSearchComponent),\n      multi: true,\n    },\n  ],\n\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\n  @ViewChild('inputEl', { read: ElementRef, static: false })\n  inputEl: ElementRef;\n  @ViewChild('selectEl', { read: ElementRef, static: false })\n  selectEl: ElementRef;\n  @ViewChild('buttonEl', { read: ElementRef, static: false })\n  buttonEl: ElementRef;\n\n  @Input() searchSettings: SearchSettings = new SearchSettings();\n  @Output() submit: EventEmitter<{ searchText: string }> = new EventEmitter(\n    null\n  );\n\n  model: any = {};\n  inputState = {\n    initial: { visible: undefined },\n    visible: undefined,\n  };\n  private _onChange = (_: any) => {};\n  private _onTouched = () => {};\n\n  constructor(\n    private cd: ChangeDetectorRef,\n    private focusMonitor: FocusMonitor,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngAfterViewInit() {\n    this.inputState.initial.visible = this.isInputVisible();\n    this.inputState.visible = this.inputState.initial.visible;\n    this.viewportRuler.change(0).subscribe(() => {\n      this.inputState.initial.visible = this.isInputVisible();\n      this.inputState.visible = this.inputState.initial.visible;\n    });\n  }\n\n  hasDropdown() {\n    if (\n      this.searchSettings &&\n      this.searchSettings.dropdown &&\n      this.searchSettings.dropdown.options &&\n      this.searchSettings.dropdown.options.length\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  handleClick(event) {\n    event.preventDefault();\n    if (!this.inputState.visible) {\n      this.setInputVisibleStyles();\n      this.focusMonitor.focusVia(this.inputEl, 'program');\n    } else if (this.inputEl || this.selectEl) {\n      this.submit.emit(this.model);\n    }\n  }\n\n  writeValueToModel() {\n    this.model.searchText = this.inputEl\n      ? this.inputEl.nativeElement.value\n      : '';\n    if (this.selectEl && this.selectEl.nativeElement.value) {\n      this.model.searchCategory = this.selectEl.nativeElement.value;\n    }\n    this._onChange(Object.assign({}, this.model));\n  }\n\n  writeValue(value: any) {\n    if (value && this.model !== value) {\n      this.model = value;\n      this.cd.markForCheck();\n    } else {\n      this.model = {};\n      this.cd.markForCheck();\n    }\n  }\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  isInputVisible(): boolean {\n    return this.inputEl.nativeElement.getBoundingClientRect().width\n      ? true\n      : false;\n  }\n\n  setInputVisibleStyles() {\n    const inputWidth = this.calculateInputWidth();\n    this.inputEl.nativeElement.style.setProperty(\n      'display',\n      'block',\n      'important'\n    );\n    this.inputEl.nativeElement.style.position = 'absolute';\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\n    this.inputEl.nativeElement.style.setProperty(\n      'width',\n      `${inputWidth}px`,\n      'important'\n    );\n    this.inputState.visible = true;\n  }\n\n  removeInputVisibleStyles() {\n    this.inputEl.nativeElement.style.display = '';\n    this.inputEl.nativeElement.style.position = '';\n    this.inputEl.nativeElement.style.left = '';\n    this.inputEl.nativeElement.style.width = '';\n    this.inputState.visible = false;\n  }\n\n  focusChange() {\n    if (!this.inputState.initial.visible) {\n      this.removeInputVisibleStyles();\n    }\n  }\n\n  calculateInputWidth(): number {\n    const leftPadding = 20;\n    const buttonElement = this.buttonEl.nativeElement;\n    const inputElement = this.inputEl.nativeElement;\n    const rightPosition = buttonElement.getBoundingClientRect().left;\n    const leftPosition = this.searchSettings.parentSelector\n      ? inputElement\n          .closest(this.searchSettings.parentSelector)\n          .getBoundingClientRect().left\n      : 0;\n    return Math.floor(rightPosition - leftPosition - leftPadding);\n  }\n  getClass() {\n    const cls =\n      this.searchSettings && this.searchSettings.size === 'large'\n        ? 'usa-search--big'\n        : 'usa-search--small';\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\n      ? `${cls} sds-inverse`\n      : cls;\n  }\n  clearInput(ev) {\n    this.inputEl.nativeElement.value = '';\n    this.writeValueToModel();\n  }\n}\n",
      properties: [
        {
          name: 'ariaLabel',
          defaultValue: "'Search'",
          type: 'string',
          optional: true,
          description: '',
          line: 18,
          modifierKind: [114],
        },
        {
          name: 'dropdown',
          defaultValue:
            "{\n    id: 'searchOptions',\n    placeholder: '-Select-',\n    options: [],\n    inverse: false,\n  }",
          type: 'any',
          optional: true,
          description: '',
          line: 23,
          modifierKind: [114],
        },
        {
          name: 'id',
          type: 'string',
          optional: true,
          description: '',
          line: 22,
          modifierKind: [114],
        },
        {
          name: 'inputClass',
          type: 'string',
          optional: true,
          description: '',
          line: 20,
          modifierKind: [114],
        },
        {
          name: 'isSuffixSearchIcon',
          defaultValue: 'false',
          type: 'boolean',
          optional: true,
          description: '',
          line: 29,
          modifierKind: [114],
        },
        {
          name: 'parentSelector',
          type: 'string',
          optional: true,
          description: '',
          line: 21,
          modifierKind: [114],
        },
        {
          name: 'placeholder',
          defaultValue: "'Search'",
          type: 'string',
          optional: false,
          description: '',
          line: 17,
          modifierKind: [114],
        },
        {
          name: 'size',
          type: 'string',
          optional: true,
          description: '',
          line: 19,
          modifierKind: [114],
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SelectionPanelModel',
      id: 'class-SelectionPanelModel-cf45e3c33740e59148cc1f28eb2c0908',
      file:
        'libs/packages/components/src/lib/selection-panel/model/selection-panel.model.ts',
      type: 'class',
      sourceCode:
        "import { SideNavigationModel } from '../../side-navigation/model/side-navigation-model';\n\nexport class SelectionPanelModel extends SideNavigationModel {\n  /**\n   * The mode selected impacts which version of the selection panel is used.\n   * 'SELECTION' mode will only display the top level navigation items and\n   * will not display children items. 'NAVIGATION' mode will display the children\n   * navigation items indented under its parent. If a mode is not passed in,\n   * then 'NAVIGATION' mode is assumed.\n   */\n  selectionMode?: 'SELECTION' | 'NAVIGATION';\n}",
      properties: [
        {
          name: 'selectionMode',
          type: '"SELECTION" | "NAVIGATION"',
          optional: true,
          description:
            '<p>The mode selected impacts which version of the selection panel is used.\n&#39;SELECTION&#39; mode will only display the top level navigation items and\nwill not display children items. &#39;NAVIGATION&#39; mode will display the children\nnavigation items indented under its parent. If a mode is not passed in,\nthen &#39;NAVIGATION&#39; mode is assumed.</p>\n',
          line: 11,
        },
        {
          name: 'navigationLinks',
          type: 'NavigationLink[]',
          optional: false,
          description: '',
          line: 9,
          inheritance: {
            file: 'SideNavigationModel',
          },
        },
      ],
      methods: [],
      indexSignatures: [],
      extends: 'SideNavigationModel',
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
    {
      name: 'SideNavigationModel',
      id: 'class-SideNavigationModel-295cd59da07c4ec4067ea8a525ff10bf',
      file:
        'libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts',
      type: 'class',
      sourceCode:
        "import { QueryParamsHandling } from '@angular/router';\nimport { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\n\nexport class SideNavigationModel {\n\n    /**\n     * \n     */\n    navigationLinks: NavigationLink[];\n}\n\n\nexport class NavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route \n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: NavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected \n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected \n     */\n    selected?: boolean;\n\n\n    /**\n     * Query string paramaters supporeted with external and internal links\n     * ex. { 'name': 'value',...}\n     */\n    queryParams?: {\n        [k: string]: any;\n    }\n\n    queryParamsHandling?: QueryParamsHandling;\n}\n\n\n\n\n",
      properties: [
        {
          name: 'navigationLinks',
          type: 'NavigationLink[]',
          optional: false,
          description: '',
          line: 9,
        },
      ],
      methods: [],
      indexSignatures: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
    },
  ],
  directives: [
    {
      name: 'CollapseDirective',
      id: 'directive-CollapseDirective-71f90cfbf9a60a80d4613d3df6cb8882',
      file: 'libs/packages/components/src/lib/collapse/collapse.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import { Directive, HostBinding, Input } from '@angular/core';\n\n@Directive({\n  selector: '[sdsCollapse]',\n  exportAs: 'sdsCollapse',\n  host: {'[class.display-none]':'collapsed'}\n})\nexport class CollapseDirective {\n\n  @Input('sdsCollapse') collapsed: boolean = true;\n\n  constructor() {\n  }\n\n}\n",
      selector: '[sdsCollapse]',
      providers: [],
      inputsClass: [
        {
          name: 'sdsCollapse',
          defaultValue: 'true',
          line: 10,
          type: 'boolean',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [],
        line: 10,
      },
    },
    {
      name: 'ExternalLinkDirective',
      id: 'directive-ExternalLinkDirective-9519744497344088b0f99fceb62cbbd4',
      file:
        'libs/packages/components/src/lib/external-link/external-link.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import {\n  Directive,\n  HostBinding,\n  ElementRef,\n  PLATFORM_ID,\n  Inject,\n  Input,\n  ViewContainerRef,\n  OnChanges,\n  AfterViewInit,\n} from '@angular/core';\n\nimport { isPlatformBrowser } from '@angular/common';\n\n@Directive({\n  selector: 'a[href]',\n})\nexport class ExternalLinkDirective implements OnChanges {\n  @HostBinding('attr.rel') relAttr = '';\n  @HostBinding('attr.target') targetAttr = '';\n  @HostBinding('attr.href') hrefAttr = '';\n\n  @Input() href: string;\n  @Input() target: string;\n\n  @Input() public hideIcon: boolean = false;\n\n  /** Treat these domains as internal links */\n  private internalLinks = [\n    /** 'fsd.gov' - Removed until fsd.gov contains proper route back to sam.gov */\n  ];\n\n  private readonly emailLinkKeyword = 'mailto';\n\n  constructor(\n    @Inject(PLATFORM_ID) private platformId: string,\n    private el: ElementRef,\n    private vc: ViewContainerRef\n  ) { }\n\n  public ngOnChanges() {\n    this.hrefAttr = this.href;\n    this.targetAttr = this.target;\n\n    if (!this.isExternalLink) {\n      return;\n    }\n\n    this.relAttr = 'noopener';\n    this.targetAttr = '_blank';\n\n    const ariaLabel = this._getAriaLabel();\n    (this.el.nativeElement as HTMLAnchorElement).setAttribute('aria-label', ariaLabel);\n\n    if (!this.hideIcon) {\n      this.createIcon();\n    }\n  }\n\n  /**\n   * Appends indication that the link will open in a separate window to the aria label.\n   * If link does not contain any aria label, then an aria label will be generated using either the inner text\n   *  or href value based on whether the anchor element contains children elements or not\n   * If link contains aria label, but the label does not contain key words 'new' or 'window',\n   *  then the text 'opens in a new window' will be appended to the end of the aria label\n   * If link contains aria label as well as the key words 'new' and 'window', then aria label will\n   *  be kept as is\n   */\n  private _getAriaLabel(): string {\n\n    const anchorElement = this.el.nativeElement as HTMLAnchorElement\n    const currentAriaLabel: string = anchorElement.getAttribute('aria-label');\n\n    /** No aria label, attach a default one using inner text if anchor does not contain additional\n     * html element as children. If anchor does contain additional html element as children, then use href \n     */\n    if (!currentAriaLabel || currentAriaLabel.length === 0) {\n      let label = anchorElement.firstElementChild ? this.href : anchorElement.innerText;\n      label = label.trim();\n      return `Open ${label} in a new window`;\n    }\n\n    const lowerCaseAriaLabel = currentAriaLabel.toLowerCase();\n\n    /** Aria label already indicates link will open in a new window, set to defined aria label */\n    if (lowerCaseAriaLabel.indexOf('new') != -1 && lowerCaseAriaLabel.indexOf('window') != -1) {\n      return currentAriaLabel;\n    }\n\n    /** Aria label is attached, but does not indicate link will open in new window. \n       Add opens in new window keyword to aria label */\n    return `${currentAriaLabel} - opens in a new window`;\n  }\n\n  private get isExternalLink(): boolean {\n    const link = this.href\n      .replace(/^https?:\\/\\//, '')\n      .replace(/^www\\./, '')\n      .split('/')[0];\n    return (\n      isPlatformBrowser(this.platformId) &&\n      !link.includes(location.hostname) &&\n      link.indexOf(this.emailLinkKeyword) !== 0  &&\n      !this.internalLinks.includes(link)\n    );\n  }\n  private createIcon() {\n    // tslint:disable-next-line:no-unused-expression\n    this.vc.constructor.name === 'ViewContainerRef_';\n    const spanElement = document.createElement('span');\n    spanElement.classList.add('margin-left-1px');\n    spanElement.classList.add('usa-link--external');\n    spanElement.classList.add('font-body-md');\n    this.el.nativeElement.appendChild(spanElement);\n  }\n}\n",
      selector: 'a[href]',
      providers: [],
      inputsClass: [
        {
          name: 'hideIcon',
          defaultValue: 'false',
          line: 26,
          type: 'boolean',
        },
        {
          name: 'href',
          line: 23,
          type: 'string',
        },
        {
          name: 'target',
          line: 24,
          type: 'string',
        },
      ],
      outputsClass: [],
      hostBindings: [
        {
          name: 'attr.href',
          defaultValue: "''",
          line: 21,
        },
        {
          name: 'attr.rel',
          defaultValue: "''",
          line: 19,
        },
        {
          name: 'attr.target',
          defaultValue: "''",
          line: 20,
        },
      ],
      hostListeners: [],
      propertiesClass: [
        {
          name: 'emailLinkKeyword',
          defaultValue: "'mailto'",
          type: 'string',
          optional: false,
          description: '',
          line: 33,
          modifierKind: [112, 132],
        },
        {
          name: 'internalLinks',
          defaultValue:
            "[\n    /** 'fsd.gov' - Removed until fsd.gov contains proper route back to sam.gov */\n  ]",
          type: '[]',
          optional: false,
          description: '<p>Treat these domains as internal links </p>\n',
          line: 29,
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: '_getAriaLabel',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 69,
          description:
            '<p>Appends indication that the link will open in a separate window to the aria label.\nIf link does not contain any aria label, then an aria label will be generated using either the inner text\n  or href value based on whether the anchor element contains children elements or not\nIf link contains aria label, but the label does not contain key words &#39;new&#39; or &#39;window&#39;,\n  then the text &#39;opens in a new window&#39; will be appended to the end of the aria label\nIf link contains aria label as well as the key words &#39;new&#39; and &#39;window&#39;, then aria label will\n  be kept as is</p>\n',
          modifierKind: [112],
        },
        {
          name: 'createIcon',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 107,
          modifierKind: [112],
        },
        {
          name: 'ngOnChanges',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 41,
          modifierKind: [114],
        },
      ],
      implements: ['OnChanges'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'platformId',
            type: 'string',
          },
          {
            name: 'el',
            type: 'ElementRef',
          },
          {
            name: 'vc',
            type: 'ViewContainerRef',
          },
        ],
        line: 33,
        jsdoctags: [
          {
            name: 'platformId',
            type: 'string',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'el',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'vc',
            type: 'ViewContainerRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        isExternalLink: {
          name: 'isExternalLink',
          getSignature: {
            name: 'isExternalLink',
            type: 'boolean',
            returnType: 'boolean',
            line: 95,
          },
        },
      },
    },
    {
      name: 'SdsAccordionDirective',
      id: 'directive-SdsAccordionDirective-f472d2adde26141d0d31b2a7e5aa5887',
      file: 'libs/packages/components/src/lib/accordion/accordion.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        'import {\n  Directive,\n  Input,\n  ContentChildren,\n  QueryList,\n  AfterContentInit\n} from "@angular/core";\n\nimport { CdkAccordion } from "@angular/cdk/accordion";\nimport { FocusKeyManager } from "@angular/cdk/a11y";\nimport { HOME, END } from "@angular/cdk/keycodes";\nimport {\n  SDS_ACCORDION,\n  SdsAccordionBase,\n  SdsAccordionDisplayMode\n} from "./accordion-base";\nimport { SdsAccordionItemHeaderComponent } from "./accordion-item-header.component";\n\n@Directive({\n  selector: "sds-accordion",\n  exportAs: "sdsAccordion",\n  inputs: ["multi"],\n  providers: [\n    {\n      provide: SDS_ACCORDION,\n      useExisting: SdsAccordionDirective\n    }\n  ],\n  host: {\n    \'class\': \'sds-accordion\',\n    \'[class.sds-accordion--basic]\': \'displayMode === "basic"\',\n  }\n})\nexport class SdsAccordionDirective extends CdkAccordion\n  implements SdsAccordionBase, AfterContentInit {\n  private _keyManager: FocusKeyManager<SdsAccordionItemHeaderComponent>;\n\n  @ContentChildren(SdsAccordionItemHeaderComponent, { descendants: true })\n  _headers: QueryList<SdsAccordionItemHeaderComponent>;\n\n  @Input() displayMode: SdsAccordionDisplayMode = "default";\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager(this._headers).withWrap();\n  }\n\n  /** Handles keyboard events coming in from the item headers. */\n  _handleHeaderKeydown(event: KeyboardEvent) {\n    const { keyCode } = event;\n    if (keyCode === HOME) {\n      this._keyManager.setFirstItemActive();\n      event.preventDefault();\n    } else if (keyCode === END) {\n      this._keyManager.setLastItemActive();\n      event.preventDefault();\n    } else {\n      this._keyManager.onKeydown(event);\n    }\n  }\n\n  _handleHeaderFocus(header: SdsAccordionItemHeaderComponent) {\n    this._keyManager.updateActiveItem(header);\n  }\n}\n',
      selector: 'sds-accordion',
      providers: [
        {
          name:
            '{\n    provide: SDS_ACCORDION, useExisting: SdsAccordionDirective\n}',
          type: 'directive',
        },
      ],
      inputsClass: [
        {
          name: 'displayMode',
          defaultValue: '"default"',
          line: 41,
          type: 'SdsAccordionDisplayMode',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: '_headers',
          type: 'QueryList<SdsAccordionItemHeaderComponent>',
          optional: false,
          description: '',
          line: 39,
          decorators: [
            {
              name: 'ContentChildren',
              stringifiedArguments:
                'SdsAccordionItemHeaderComponent, {descendants: true}',
            },
          ],
        },
        {
          name: '_keyManager',
          type: 'FocusKeyManager<SdsAccordionItemHeaderComponent>',
          optional: false,
          description: '',
          line: 36,
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: '_handleHeaderFocus',
          args: [
            {
              name: 'header',
              type: 'SdsAccordionItemHeaderComponent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 61,
          jsdoctags: [
            {
              name: 'header',
              type: 'SdsAccordionItemHeaderComponent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_handleHeaderKeydown',
          args: [
            {
              name: 'event',
              type: 'KeyboardEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 48,
          description:
            '<p>Handles keyboard events coming in from the item headers. </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'KeyboardEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngAfterContentInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 43,
        },
      ],
      implements: ['SdsAccordionBase', 'AfterContentInit'],
    },
    {
      name: 'SdsAccordionItemContentDirective',
      id:
        'directive-SdsAccordionItemContentDirective-49da46ff547e3e35e1e0080a0699f754',
      file:
        'libs/packages/components/src/lib/accordion/accordion-item-content.directive.ts',
      type: 'directive',
      description:
        '<p>Accordion Item content that will be rendered lazily\nafter the accordion item is opened for the first time.</p>\n',
      sourceCode:
        "import {Directive, TemplateRef} from '@angular/core';\n\n/**\n * Accordion Item content that will be rendered lazily\n * after the accordion item is opened for the first time.\n */\n@Directive({\n  selector: 'ng-template[sdsAccordionItemContent]'\n})\nexport class SdsAccordionItemContentDirective {\n  constructor(public _template: TemplateRef<any>) {}\n}\n",
      selector: 'ng-template[sdsAccordionItemContent]',
      providers: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: '_template',
          type: 'TemplateRef<any>',
          optional: false,
          description: '',
          line: 11,
          modifierKind: [114],
        },
      ],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_template',
            type: 'TemplateRef<any>',
          },
        ],
        line: 10,
        jsdoctags: [
          {
            name: '_template',
            type: 'TemplateRef<any>',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SDSClickOutsideDirective',
      id: 'directive-SDSClickOutsideDirective-3330dfea755a01908dc52dcf97422719',
      file:
        'libs/packages/components/src/lib/click-outside/click-outside.directive.ts',
      type: 'directive',
      description:
        '<p>The <sam-click-outside> directive can detect whether a click is made inside \nthe target</p>\n',
      sourceCode:
        "import {\n  Directive, ElementRef,\n  Output, EventEmitter,\n  HostListener\n} from '@angular/core';\n\n/**\n * The <sam-click-outside> directive can detect whether a click is made inside \n * the target\n */\n@Directive({\n  selector: '[sds-click-outside]'\n})\nexport class SDSClickOutsideDirective {\n  /**\n  * Event emitted when clicked outside the target\n  */\n  @Output() clickOutside = new EventEmitter();\n\n  constructor(private _elementRef: ElementRef) { }\n\n  @HostListener('document:click', ['$event.target'])\n  public onClick(targetElement) {\n    const clickedInside =\n      this._elementRef.nativeElement.contains(targetElement);\n    if (!clickedInside) {\n      this.clickOutside.emit(undefined);\n    }\n  }\n}\n",
      selector: '[sds-click-outside]',
      providers: [],
      inputsClass: [],
      outputsClass: [
        {
          name: 'clickOutside',
          defaultValue: 'new EventEmitter()',
          description: '<p>Event emitted when clicked outside the target</p>\n',
          line: 18,
          type: 'EventEmitter',
        },
      ],
      hostBindings: [],
      hostListeners: [
        {
          name: 'document:click',
          args: [
            {
              name: 'targetElement',
              type: '',
            },
          ],
          argsDecorator: ['$event.target'],
          line: 23,
        },
      ],
      propertiesClass: [],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef',
          },
        ],
        line: 18,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsDialogActionsDirective',
      id:
        'directive-SdsDialogActionsDirective-cb1ece29bdc266c0ee53de3641b696c6',
      file:
        'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
      type: 'directive',
      description:
        '<p>Container for the bottom action buttons in a dialog.\nStays fixed to the bottom when scrolling.</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
      selector: '[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]',
      providers: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [],
    },
    {
      name: 'SdsDialogCloseDirective',
      id: 'directive-SdsDialogCloseDirective-cb1ece29bdc266c0ee53de3641b696c6',
      file:
        'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
      type: 'directive',
      description: '<p>Button that will close the current dialog.</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
      selector: 'button[sds-dialog-close], button[sdsDialogClose]',
      providers: [],
      inputsClass: [
        {
          name: 'aria-label',
          description: '<p>Screenreader label for the button. </p>\n',
          line: 31,
          type: 'string',
        },
        {
          name: 'sds-dialog-close',
          description: '<p>Dialog close input. </p>\n',
          line: 34,
          type: 'any',
        },
        {
          name: 'sdsDialogClose',
          line: 36,
          type: 'any',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: 'dialogRef',
          type: 'SdsDialogRef<any>',
          optional: false,
          description: '',
          line: 39,
          decorators: [
            {
              name: 'Optional',
              stringifiedArguments: '',
            },
          ],
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'ngOnChanges',
          args: [
            {
              name: 'changes',
              type: 'SimpleChanges',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 54,
          jsdoctags: [
            {
              name: 'changes',
              type: 'SimpleChanges',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 43,
        },
      ],
      implements: ['OnInit', 'OnChanges'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'dialogRef',
            type: 'SdsDialogRef<any>',
          },
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
          },
          {
            name: '_dialog',
            type: 'SdsDialogService',
          },
        ],
        line: 36,
        jsdoctags: [
          {
            name: 'dialogRef',
            type: 'SdsDialogRef<any>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_dialog',
            type: 'SdsDialogService',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsDialogContentDirective',
      id:
        'directive-SdsDialogContentDirective-cb1ece29bdc266c0ee53de3641b696c6',
      file:
        'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
      type: 'directive',
      description: '<p>Scrollable content container of a dialog.</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
      selector: '[sds-dialog-content], sds-dialog-content, [sdsDialogContent]',
      providers: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [],
    },
    {
      name: 'SdsDialogSubtitleDirective',
      id:
        'directive-SdsDialogSubtitleDirective-cb1ece29bdc266c0ee53de3641b696c6',
      file:
        'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
      type: 'directive',
      description: '<p>SubTitle of a dialog element</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
      selector:
        '[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]',
      providers: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [],
    },
    {
      name: 'SdsDialogTitleDirective',
      id: 'directive-SdsDialogTitleDirective-cb1ece29bdc266c0ee53de3641b696c6',
      file:
        'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
      type: 'directive',
      description:
        '<p>Title of a dialog element. Stays fixed to the top of the dialog when scrolling.</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Input,\n  OnChanges,\n  OnInit,\n  Optional,\n  SimpleChanges,\n  ElementRef,\n} from '@angular/core';\nimport {SdsDialogService} from './dialog';\nimport {SdsDialogRef} from './dialog-ref';\n\n/** Counter used to generate unique IDs for dialog elements. */\nlet dialogElementUid = 0;\n\n/**\n * Button that will close the current dialog.\n */\n@Directive({\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\n  exportAs: 'sdsDialogClose',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '(click)': 'dialogRef.close(dialogResult)',\n    '[attr.aria-label]': 'ariaLabel || null',\n    'type': 'button', // Prevents accidental form submits.\n  }\n})\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\n  /** Screenreader label for the button. */\n  @Input('aria-label') ariaLabel: string;\n\n  /** Dialog close input. */\n  @Input('sds-dialog-close') dialogResult: any;\n\n  @Input('sdsDialogClose') _sdsDialogClose: any;\n\n  constructor(\n    @Optional() public dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this.dialogRef) {\n      // When this directive is included in a dialog via TemplateRef (rather than being\n      // in a Component), the DialogRef isn't available via injection because embedded\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\n      // be resolved at constructor time.\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\n\n    if (proxiedChange) {\n      this.dialogResult = proxiedChange.currentValue;\n    }\n  }\n}\n\n/**\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\n */\n@Directive({\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\n  exportAs: 'sdsDialogTitle',\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    '[class.sds-dialog-title]': 'true',\n    '[id]': 'id',\n  },\n})\nexport class SdsDialogTitleDirective implements OnInit {\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\n\n  constructor(\n    @Optional() private _dialogRef: SdsDialogRef<any>,\n    private _elementRef: ElementRef<HTMLElement>,\n    private _dialog: SdsDialogService) {}\n\n  ngOnInit() {\n    if (!this._dialogRef) {\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\n    }\n\n    if (this._dialogRef) {\n      Promise.resolve().then(() => {\n        const container = this._dialogRef._containerInstance;\n\n        if (container && !container._ariaLabelledBy) {\n          container._ariaLabelledBy = this.id;\n        }\n      });\n    }\n  }\n}\n\n/**\n * SubTitle of a dialog element\n */\n@Directive({\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-subtitle]': 'true'}\n})\nexport class SdsDialogSubtitleDirective {}\n\n\n/**\n * Scrollable content container of a dialog.\n */\n@Directive({\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-content]': 'true'}\n})\nexport class SdsDialogContentDirective {}\n\n\n/**\n * Container for the bottom action buttons in a dialog.\n * Stays fixed to the bottom when scrolling.\n */\n@Directive({\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {'[class.sds-dialog-actions]': 'true'}\n})\nexport class SdsDialogActionsDirective {}\n\n\n/**\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\n * @param element Element relative to which to look for a dialog.\n * @param openDialogs References to the currently-open dialogs.\n */\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\n\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\n    parent = parent.parentElement;\n  }\n\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\n}\n",
      selector: '[sds-dialog-title], [sdsDialogTitle]',
      providers: [],
      inputsClass: [
        {
          name: 'id',
          defaultValue: '`sds-dialog-title-${dialogElementUid++}`',
          line: 76,
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 83,
        },
      ],
      implements: ['OnInit'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_dialogRef',
            type: 'SdsDialogRef<any>',
          },
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
          },
          {
            name: '_dialog',
            type: 'SdsDialogService',
          },
        ],
        line: 76,
        jsdoctags: [
          {
            name: '_dialogRef',
            type: 'SdsDialogRef<any>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_dialog',
            type: 'SdsDialogService',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsExpiresDirective',
      id: 'directive-SdsExpiresDirective-b817fa72f604971e1280fa1385c0cc31',
      file: 'libs/packages/components/src/lib/expires/expires.directive.ts',
      type: 'directive',
      description:
        '<p>Define expiration date for a given element. If current date is\npast expiration date, the given element will not be displayed\nto the user\nusage: </p>\n<div *expires="\'2021-01-13T22:30:59">\n</div>\nThe element above expires after January 13 2021 10:30:59pm at user\'s local timezone.\n\n<p>You may also define desired timezone in following format:\nYYYY-MM-DDThh:mm:ss.sssZ\nexample: 2021:01013T22:30:59.000+5:00 // Eastern time</p>\n',
      sourceCode:
        "import {\n  Directive, \n  Input, \n  TemplateRef, \n  ViewContainerRef\n  } from '@angular/core';\n  \n  /**\n   * Define expiration date for a given element. If current date is\n   * past expiration date, the given element will not be displayed\n   * to the user\n   * usage: \n   * <div *expires=\"'2021-01-13T22:30:59\">\n   * </div>\n   * The element above expires after January 13 2021 10:30:59pm at user's local timezone.\n   * \n   * You may also define desired timezone in following format:\n   * YYYY-MM-DDThh:mm:ss.sssZ\n   * example: 2021:01013T22:30:59.000+5:00 // Eastern time\n   */\n  @Directive({\n    selector: '[expires]'\n  })\n  export class SdsExpiresDirective {\n  \n    /** \n     * Expiration date string. This string should be parsable\n     * through native Date object\n     * */\n    @Input() set expires(date: string) {\n      const expirationDate = new Date(date);\n      const today = new Date();\n\n      const isExpired = expirationDate.valueOf() < today.valueOf();\n      \n      if (isExpired) {\n        this.viewContainer.clear();\n      } else {\n        this.viewContainer.createEmbeddedView(this.templateRef);\n      }\n    }\n  \n    constructor(\n      private templateRef: TemplateRef<any>,\n      private viewContainer: ViewContainerRef\n    ) { }\n  \n  }",
      selector: '[expires]',
      providers: [],
      inputsClass: [
        {
          name: 'expires',
          description:
            '<p>Expiration date string. This string should be parsable\nthrough native Date object</p>\n',
          line: 30,
          type: 'string',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'templateRef',
            type: 'TemplateRef<any>',
          },
          {
            name: 'viewContainer',
            type: 'ViewContainerRef',
          },
        ],
        line: 41,
        jsdoctags: [
          {
            name: 'templateRef',
            type: 'TemplateRef<any>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'viewContainer',
            type: 'ViewContainerRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        expires: {
          name: 'expires',
          setSignature: {
            name: 'expires',
            type: 'void',
            args: [
              {
                name: 'date',
                type: 'string',
              },
            ],
            returnType: 'void',
            line: 30,
            description:
              '<p>Expiration date string. This string should be parsable\nthrough native Date object</p>\n',
            jsdoctags: [
              {
                name: 'date',
                type: 'string',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
    },
    {
      name: 'SdsMenuTriggerForDirective',
      id:
        'directive-SdsMenuTriggerForDirective-97cc0e5db4e572845050eea1e3279cf4',
      file: 'libs/packages/components/src/lib/menu/menu-trigger.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import {\n  Directive,\n  ElementRef,\n  EventEmitter,\n  Input,\n  OnDestroy,\n  Output,\n  ViewContainerRef,\n  HostBinding,\n  HostListener,\n} from '@angular/core';\nimport {\n  FocusMonitor,\n  FocusOrigin,\n  isFakeMousedownFromScreenReader\n} from '@angular/cdk/a11y';\nimport {\n  FlexibleConnectedPositionStrategy,\n  HorizontalConnectionPos,\n  Overlay,\n  OverlayConfig,\n  OverlayRef,\n  VerticalConnectionPos\n} from '@angular/cdk/overlay';\nimport { TemplatePortal } from '@angular/cdk/portal';\nimport { normalizePassiveListenerOptions } from '@angular/cdk/platform';\nimport { merge, Subscription } from 'rxjs';\nimport {\n  SdsMenuInterface,\n  SdsMenuComponent,\n  MenuPositionX,\n  MenuPositionY\n} from './menu.component';\n\n@Directive({\n  selector: '[sdsMenuTriggerFor]'\n})\nexport class SdsMenuTriggerForDirective implements OnDestroy {\n  /** ARIA haspopup for the menu trigger. */\n  @HostBinding('attr.aria-haspopup') ariaHasPopup = true;\n\n  /** ARIA expanded for the menu trigger. */\n  @HostBinding('attr.aria-expanded')\n  get menuOpen(): boolean {\n    return this._menuOpen;\n  }\n\n  /** Holds the menu instance */\n  private _menu: SdsMenuInterface;\n\n  /** Holds value for menuOpen variable */\n  private _menuOpen = false;\n\n  /** CDK Portal for menu panel */\n  private _portal: TemplatePortal;\n\n  /** PortalOutlet */\n  private _overlayRef: OverlayRef | null = null;\n\n  /** Tracks input type  */\n  private _openedBy: 'mouse' | 'touch' | null = null;\n\n  private _closingActionsSubscription = Subscription.EMPTY;\n  private _menuCloseSubscription = Subscription.EMPTY;\n\n  /** References the menu instance that the trigger is associated with. */\n  @Input('sdsMenuTriggerFor')\n  get menu() {\n    return this._menu;\n  }\n  set menu(menu: SdsMenuInterface) {\n    if (menu === this._menu) {\n      return;\n    }\n    this._menu = menu;\n    this._menuCloseSubscription.unsubscribe();\n\n    if (menu) {\n      this._menuCloseSubscription = menu.closed.asObservable().subscribe(() => {\n        this._destroyMenu();\n      });\n    }\n  }\n\n  /** Event emitted when the associated menu is opened. */\n  @Output() menuOpened: EventEmitter<void> = new EventEmitter<void>();\n\n  /** Event emitted when the associated menu is closed. */\n  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();\n\n  /** Handles mouse presses on the trigger. */\n  @HostListener('mousedown', ['$event'])\n  _handleMousedown(event: MouseEvent): void {\n    if (!isFakeMousedownFromScreenReader(event)) {\n      // Since right or middle button clicks won't trigger the `click` event,\n      // we shouldn't consider the menu as opened by mouse in those cases.\n      this._openedBy = event.button === 0 ? 'mouse' : null;\n    }\n  }\n\n  /** Toggles the menu between the open and closed states. */\n  @HostListener('click')\n  toggleMenu(): void {\n    return this._menuOpen ? this.closeMenu() : this.openMenu();\n  }\n\n  constructor(\n    private _overlay: Overlay,\n    private _element: ElementRef<HTMLElement>,\n    private _viewContainerRef: ViewContainerRef,\n    private _focusMonitor: FocusMonitor\n  ) {\n    // On touch devices set _openedBy to 'touch'\n    _element.nativeElement.addEventListener(\n      'touchstart',\n      () => (this._openedBy = 'touch'),\n      normalizePassiveListenerOptions({ passive: true })\n    );\n  }\n\n  ngOnDestroy() {\n    if (this._overlayRef) {\n      this._overlayRef.dispose();\n      this._overlayRef = null;\n    }\n\n    this._element.nativeElement.removeEventListener(\n      'touchstart',\n      () => (this._openedBy = 'touch'),\n      normalizePassiveListenerOptions({ passive: true })\n    );\n\n    this._menuCloseSubscription.unsubscribe();\n    this._closingActionsSubscription.unsubscribe();\n  }\n\n  /** Opens the menu. */\n  openMenu(): void {\n    if (this._menuOpen) {\n      return;\n    }\n    const overlayRef = this._createOverlay();\n    const overlayConfig = overlayRef.getConfig();\n    this._setPosition(\n      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy\n    );\n    overlayRef.attach(this._getPortal());\n    this._closingActionsSubscription = this._menuClosingActions().subscribe(\n      () => this.closeMenu()\n    );\n    this._initMenu();\n    if (this.menu instanceof SdsMenuComponent) {\n      this.menu._startAnimation();\n    }\n  }\n\n  /** Closes the menu. */\n  closeMenu(): void {\n    this.menu.closed.emit();\n  }\n\n  /** Focuses the menu trigger. */\n  focus(origin: FocusOrigin = 'program'): void {\n    this._focusMonitor.focusVia(this._element, origin);\n  }\n\n  /** This method sets the menu state to open and focuses the first item */\n  private _initMenu(): void {\n    this._setIsMenuOpen(true);\n    this.menu.focusFirstItem(this._openedBy || 'program');\n  }\n\n  /** sets open state */\n  private _setIsMenuOpen(isOpen: boolean): void {\n    this._menuOpen = isOpen;\n    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();\n  }\n\n  /**\n   * This method resets the menu when it's closed,\n   * most importantly restoring focus to the menu trigger\n   */\n  private _resetMenu(): void {\n    this._setIsMenuOpen(false);\n\n    if (!this._openedBy) {\n      this.focus();\n    } else {\n      this.focus(this._openedBy);\n    }\n\n    this._openedBy = null;\n  }\n\n  /** Closes the menu and does the necessary cleanup. */\n  private _destroyMenu() {\n    if (!this._overlayRef || !this.menuOpen) {\n      return;\n    }\n\n    this._closingActionsSubscription.unsubscribe();\n\n    this._overlayRef.detach();\n\n    if (this.menu instanceof SdsMenuComponent) {\n      this.menu._resetAnimation();\n      this._resetMenu();\n    }\n    \n  }\n\n  /**\n   * This method creates the overlay from the provided menu's template and saves its\n   * OverlayRef so that it can be attached to the DOM when openMenu is called.\n   */\n  private _createOverlay(): OverlayRef {\n    if (!this._overlayRef) {\n      const config = this._getOverlayConfig();\n      this._subscribeToPositions(\n        config.positionStrategy as FlexibleConnectedPositionStrategy\n      );\n      this._overlayRef = this._overlay.create(config);\n      this._overlayRef.keydownEvents().subscribe();\n    }\n    return this._overlayRef;\n  }\n\n  /**\n   * This method builds the configuration object needed to create the overlay, the OverlayState.\n   * @returns OverlayConfig\n   */\n  private _getOverlayConfig(): OverlayConfig {\n    return new OverlayConfig({\n      positionStrategy: this._overlay\n        .position()\n        .flexibleConnectedTo(this._element)\n        .withLockedPosition()\n        .withTransformOriginOn('.sds-overlay'),\n      hasBackdrop: true,\n      backdropClass: 'cdk-overlay-transparent-backdrop',\n      scrollStrategy: this._overlay.scrollStrategies.reposition()\n    });\n  }\n\n  /**\n   * Listens to changes in the position of the overlay and sets the correct classes\n   * on the menu based on the new position.\n   */\n  private _subscribeToPositions(\n    position: FlexibleConnectedPositionStrategy\n  ): void {\n    position.positionChanges.subscribe(change => {\n      const posX: MenuPositionX =\n        change.connectionPair.overlayX === 'start' ? 'after' : 'before';\n      const posY: MenuPositionY =\n        change.connectionPair.overlayY === 'top' ? 'below' : 'above';\n\n      this.menu.setPositionClasses(posX, posY);\n    });\n  }\n\n  /**\n   * Sets the appropriate positions on a position strategy\n   * so the overlay connects with the trigger correctly.\n   */\n  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {\n    const [originX, originFallbackX]: HorizontalConnectionPos[] =\n      this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];\n\n    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =\n      this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];\n\n    let [originY, originFallbackY] = [overlayY, overlayFallbackY];\n    const [overlayX, overlayFallbackX] = [originX, originFallbackX];\n    const offsetY = 0;\n\n    if (!this.menu.overlapTrigger) {\n      originY = overlayY === 'top' ? 'bottom' : 'top';\n      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';\n    }\n\n    // Positions from most to least desirable\n    positionStrategy.withPositions([\n      { originX, originY, overlayX, overlayY, offsetY },\n      {\n        originX: originFallbackX,\n        originY,\n        overlayX: overlayFallbackX,\n        overlayY,\n        offsetY\n      },\n      {\n        originX,\n        originY: originFallbackY,\n        overlayX,\n        overlayY: overlayFallbackY,\n        offsetY: -offsetY\n      },\n      {\n        originX: originFallbackX,\n        originY: originFallbackY,\n        overlayX: overlayFallbackX,\n        overlayY: overlayFallbackY,\n        offsetY: -offsetY\n      }\n    ]);\n  }\n\n  /** Returns a stream that emits whenever an action that should close the menu occurs. */\n  private _menuClosingActions() {\n    const backdrop = this._overlayRef.backdropClick();\n    const detachments = this._overlayRef.detachments();\n    return merge(backdrop, detachments);\n  }\n\n  /** Gets the portal that should be attached to the overlay. */\n  private _getPortal(): TemplatePortal {\n    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {\n      this._portal = new TemplatePortal(\n        this.menu.templateRef,\n        this._viewContainerRef\n      );\n    }\n    return this._portal;\n  }\n}\n",
      selector: '[sdsMenuTriggerFor]',
      providers: [],
      inputsClass: [
        {
          name: 'sdsMenuTriggerFor',
          description:
            '<p>References the menu instance that the trigger is associated with. </p>\n',
          line: 68,
        },
      ],
      outputsClass: [
        {
          name: 'menuClosed',
          defaultValue: 'new EventEmitter<void>()',
          description:
            '<p>Event emitted when the associated menu is closed. </p>\n',
          line: 89,
          type: 'EventEmitter<void>',
        },
        {
          name: 'menuOpened',
          defaultValue: 'new EventEmitter<void>()',
          description:
            '<p>Event emitted when the associated menu is opened. </p>\n',
          line: 86,
          type: 'EventEmitter<void>',
        },
      ],
      hostBindings: [
        {
          name: 'attr.aria-expanded',
          description: '<p>ARIA expanded for the menu trigger. </p>\n',
          line: 44,
          type: 'boolean',
        },
        {
          name: 'attr.aria-haspopup',
          defaultValue: 'true',
          description: '<p>ARIA haspopup for the menu trigger. </p>\n',
          line: 40,
        },
      ],
      hostListeners: [
        {
          name: 'click',
          args: [],
          argsDecorator: [],
          description:
            '<p>Toggles the menu between the open and closed states. </p>\n',
          line: 103,
        },
        {
          name: 'mousedown',
          args: [
            {
              name: 'event',
              type: 'MouseEvent',
            },
          ],
          argsDecorator: ['$event'],
          description: '<p>Handles mouse presses on the trigger. </p>\n',
          line: 93,
        },
      ],
      propertiesClass: [
        {
          name: '_closingActionsSubscription',
          defaultValue: 'Subscription.EMPTY',
          type: '',
          optional: false,
          description: '',
          line: 63,
          modifierKind: [112],
        },
        {
          name: '_menu',
          type: 'SdsMenuInterface',
          optional: false,
          description: '<p>Holds the menu instance </p>\n',
          line: 49,
          modifierKind: [112],
        },
        {
          name: '_menuCloseSubscription',
          defaultValue: 'Subscription.EMPTY',
          type: '',
          optional: false,
          description: '',
          line: 64,
          modifierKind: [112],
        },
        {
          name: '_menuOpen',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '<p>Holds value for menuOpen variable </p>\n',
          line: 52,
          modifierKind: [112],
        },
        {
          name: '_openedBy',
          defaultValue: 'null',
          type: '"mouse" | "touch" | null',
          optional: false,
          description: '<p>Tracks input type  </p>\n',
          line: 61,
          modifierKind: [112],
        },
        {
          name: '_overlayRef',
          defaultValue: 'null',
          type: 'OverlayRef | null',
          optional: false,
          description: '<p>PortalOutlet </p>\n',
          line: 58,
          modifierKind: [112],
        },
        {
          name: '_portal',
          type: 'TemplatePortal',
          optional: false,
          description: '<p>CDK Portal for menu panel </p>\n',
          line: 55,
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: '_createOverlay',
          args: [],
          optional: false,
          returnType: 'OverlayRef',
          typeParameters: [],
          line: 216,
          description:
            '<p>This method creates the overlay from the provided menu&#39;s template and saves its\nOverlayRef so that it can be attached to the DOM when openMenu is called.</p>\n',
          modifierKind: [112],
        },
        {
          name: '_destroyMenu',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 196,
          description:
            '<p>Closes the menu and does the necessary cleanup. </p>\n',
          modifierKind: [112],
        },
        {
          name: '_getOverlayConfig',
          args: [],
          optional: false,
          returnType: 'OverlayConfig',
          typeParameters: [],
          line: 232,
          description:
            '<p>This method builds the configuration object needed to create the overlay, the OverlayState.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              tagName: {
                pos: 6181,
                end: 6188,
                flags: 0,
                escapedText: 'returns',
              },
              comment: '<p>OverlayConfig</p>\n',
            },
          ],
        },
        {
          name: '_getPortal',
          args: [],
          optional: false,
          returnType: 'TemplatePortal',
          typeParameters: [],
          line: 317,
          description:
            '<p>Gets the portal that should be attached to the overlay. </p>\n',
          modifierKind: [112],
        },
        {
          name: '_initMenu',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 168,
          description:
            '<p>This method sets the menu state to open and focuses the first item </p>\n',
          modifierKind: [112],
        },
        {
          name: '_menuClosingActions',
          args: [],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 310,
          description:
            '<p>Returns a stream that emits whenever an action that should close the menu occurs. </p>\n',
          modifierKind: [112],
        },
        {
          name: '_resetMenu',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 183,
          description:
            '<p>This method resets the menu when it&#39;s closed,\nmost importantly restoring focus to the menu trigger</p>\n',
          modifierKind: [112],
        },
        {
          name: '_setIsMenuOpen',
          args: [
            {
              name: 'isOpen',
              type: 'boolean',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 174,
          description: '<p>sets open state </p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'isOpen',
              type: 'boolean',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_setPosition',
          args: [
            {
              name: 'positionStrategy',
              type: 'FlexibleConnectedPositionStrategy',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 266,
          description:
            '<p>Sets the appropriate positions on a position strategy\nso the overlay connects with the trigger correctly.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'positionStrategy',
              type: 'FlexibleConnectedPositionStrategy',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_subscribeToPositions',
          args: [
            {
              name: 'position',
              type: 'FlexibleConnectedPositionStrategy',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 249,
          description:
            '<p>Listens to changes in the position of the overlay and sets the correct classes\non the menu based on the new position.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'position',
              type: 'FlexibleConnectedPositionStrategy',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'closeMenu',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 158,
          description: '<p>Closes the menu. </p>\n',
        },
        {
          name: 'focus',
          args: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 163,
          description: '<p>Focuses the menu trigger. </p>\n',
          jsdoctags: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 121,
        },
        {
          name: 'openMenu',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 138,
          description: '<p>Opens the menu. </p>\n',
        },
      ],
      implements: ['OnDestroy'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_overlay',
            type: 'Overlay',
          },
          {
            name: '_element',
            type: 'ElementRef<HTMLElement>',
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
          },
        ],
        line: 105,
        jsdoctags: [
          {
            name: '_overlay',
            type: 'Overlay',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_element',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        menu: {
          name: 'menu',
          setSignature: {
            name: 'menu',
            type: 'void',
            args: [
              {
                name: 'menu',
                type: '',
              },
            ],
            returnType: 'void',
            line: 71,
            jsdoctags: [
              {
                name: 'menu',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
    },
    {
      name: 'SdsObserveWidthDirective',
      id: 'directive-SdsObserveWidthDirective-7148f6c2b90a7c6061b4c4ff44090e81',
      file:
        'libs/packages/components/src/lib/observers/observe-width.directive.ts',
      type: 'directive',
      description:
        '<p>Directive that triggers a callback whenever the width of\nits associated element has changed.</p>\n',
      sourceCode:
        "import {\n  Directive,\n  Output,\n  EventEmitter,\n  ElementRef,\n  OnInit,\n  OnDestroy\n} from '@angular/core';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { startWith } from 'rxjs/operators';\nimport { Subscription } from 'rxjs';\n\n/**\n * Directive that triggers a callback whenever the width of\n * its associated element has changed.\n */\n@Directive({ selector: '[sdsObserveWidth]' })\nexport class SdsObserveWidthDirective implements OnInit, OnDestroy {\n  /** Event emitted for each change in the element's width. */\n  @Output('sdsObserveWidth') elementWidth = new EventEmitter<number>();\n\n  /** Subscription to window resize stream */\n  windowResize$: Subscription;\n\n  constructor(\n    private _elementRef: ElementRef<HTMLElement>,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngOnInit() {\n    this.windowResize$ = this.viewportRuler\n      .change(0)\n      .pipe(startWith(this._getElementWidth()))\n      .subscribe(() => this._emitEvent());\n  }\n\n  ngOnDestroy() {\n    this.windowResize$.unsubscribe();\n  }\n\n  _emitEvent() {\n    const width = this._getElementWidth();\n    this.elementWidth.emit(width);\n  }\n\n  _getElementWidth(): number {\n    return this._elementRef.nativeElement.offsetWidth;\n  }\n}\n",
      selector: '[sdsObserveWidth]',
      providers: [],
      inputsClass: [],
      outputsClass: [
        {
          name: 'sdsObserveWidth',
          defaultValue: 'new EventEmitter<number>()',
          description:
            '<p>Event emitted for each change in the element&#39;s width. </p>\n',
          line: 20,
          type: 'EventEmitter',
        },
      ],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: 'windowResize$',
          type: 'Subscription',
          optional: false,
          description: '<p>Subscription to window resize stream </p>\n',
          line: 23,
        },
      ],
      methodsClass: [
        {
          name: '_emitEvent',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 41,
        },
        {
          name: '_getElementWidth',
          args: [],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 46,
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 37,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 30,
        },
      ],
      implements: ['OnInit', 'OnDestroy'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
          },
          {
            name: 'viewportRuler',
            type: 'ViewportRuler',
          },
        ],
        line: 23,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'viewportRuler',
            type: 'ViewportRuler',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsPopoverDirective',
      id: 'directive-SdsPopoverDirective-e0b9ccfba82196d5f35de33f4b980882',
      file: 'libs/packages/components/src/lib/popover/popover.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import {\n  AfterViewInit,\n  Directive,\n  ElementRef,\n  HostListener,\n  Input,\n  Renderer2,\n  TemplateRef,\n} from '@angular/core';\nimport { debounce } from './debounce.decorator';\n\n@Directive({\n  selector: '[sdsPopover]',\n  exportAs: 'sdsPopover',\n})\nexport class SdsPopoverDirective implements AfterViewInit {\n  private _sdsPopoverContent: string | TemplateRef<any> | HTMLParagraphElement;\n  private _sdsPopoverTitle: string | TemplateRef<any> | HTMLParagraphElement;\n\n  sdsPopoverDiv: HTMLElement;\n  popoverVisible = false;\n  popoverDivId: string;\n\n  @HostListener('click', ['$event']) onClick($event: MouseEvent) {\n    const clickedOnContent = this.sdsPopoverDiv.contains($event.target as any);\n    if (clickedOnContent && !this.closeOnContentClick) {\n      return;\n    }\n\n    this.clickEvent();\n  }\n\n  @HostListener('document:click', ['$event'])\n  clickout($event: MouseEvent) {\n    if (!this.closeOnClickOutside || !this.popoverVisible) {\n      return;\n    }\n\n    const clickedInElement = this.el.nativeElement.contains($event.target);\n    if (!clickedInElement) {\n      this.clickEvent();\n    }\n  }\n\n  /**\n   * Adding listener for keyup.enter to ensure that user can activate popover with keyboard\n   */\n  @HostListener('keyup.enter', ['$event']) onKeyUp($event: KeyboardEvent) {\n    if (\n      !this.closeOnContentClick &&\n      this.sdsPopoverDiv.contains($event.target as any)\n    ) {\n      return;\n    }\n    this.clickEvent();\n  }\n\n  /**\n   * Adding listener for keydown.space to ensure that user can activate popover with keyboard\n   */\n  @HostListener('keydown.Space', ['$event']) onKeySpace($event: KeyboardEvent) {\n    if (\n      !this.closeOnContentClick &&\n      this.sdsPopoverDiv.contains($event.target as any)\n    ) {\n      return;\n    }\n    this.clickEvent();\n    $event.preventDefault();\n  }\n\n  @Input()\n  position: string = 'top';\n\n  @Input() closeOnContentClick = true;\n\n  @Input() closeOnClickOutside = false;\n\n  constructor(private el: ElementRef, private renderer: Renderer2) {\n    this.renderer.addClass(this.el.nativeElement, 'sds-popover');\n\n    this.sdsPopoverDiv = document.createElement('div');\n  }\n\n  ngAfterViewInit() {\n    // Generating semi-random id for use with aria-describedby\n    this.popoverDivId = this.el.nativeElement.id\n      ? `${this.el.nativeElement.id}-popover`\n      : `${this.el.nativeElement.tagName}-${this.el.nativeElement.offsetTop}-${this.el.nativeElement.offsetWidth}-popover`;\n    this.sdsPopoverDiv.id = this.popoverDivId;\n\n    this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__content');\n    this.renderer.addClass(this.sdsPopoverDiv, 'tooltip');\n    this.renderer.addClass(this.sdsPopoverDiv, 'out');\n    this.renderer.setAttribute(\n      this.sdsPopoverDiv,\n      'data-position',\n      this.position\n    );\n    this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');\n    this.renderer.addClass(this.sdsPopoverDiv, this.position);\n\n    // Add title section and divider if title included\n    if (this._sdsPopoverTitle) {\n      this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverTitle);\n\n      const divider = document.createElement('hr');\n      this.renderer.addClass(divider, 'divider');\n      this.renderer.appendChild(this.sdsPopoverDiv, divider);\n    }\n\n    this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverContent);\n\n    this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');\n    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');\n    this.renderer.setAttribute(\n      this.el.nativeElement,\n      'aria-haspopup',\n      'dialog'\n    );\n\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopoverDiv);\n  }\n\n  @Input()\n  set sdsPopover(value: string | TemplateRef<any> | HTMLParagraphElement) {\n    this._sdsPopoverContent = this.handlePopoverSection(value, 'content');\n  }\n\n  get sdsPopover(): string | TemplateRef<any> | HTMLParagraphElement {\n    return this._sdsPopoverContent;\n  }\n\n  @Input()\n  set sdsPopoverTitle(value: string | TemplateRef<any> | HTMLParagraphElement) {\n    this._sdsPopoverTitle = this.handlePopoverSection(value, 'title');\n  }\n\n  get sdsPopoverTitle(): string | TemplateRef<any> | HTMLParagraphElement {\n    return this._sdsPopoverTitle;\n  }\n\n  handlePopoverSection(\n    value: string | TemplateRef<any> | HTMLParagraphElement,\n    classToApply: string\n  ): string | TemplateRef<any> | HTMLParagraphElement {\n    let popoverSection;\n    if (typeof value === 'string') {\n      popoverSection = document.createElement('p');\n      popoverSection.innerText = value;\n      this.renderer.addClass(popoverSection, classToApply);\n    } else {\n      popoverSection = value;\n    }\n    return popoverSection;\n  }\n\n  /**\n   * Using debounce decorator here to prevent a scenario where a popover is\n   * applied to a button and this function is called by both the enter key\n   * listener and click listener.\n   */\n  @debounce(100)\n  clickEvent() {\n    this.popoverVisible = !this.popoverVisible;\n    if (this.popoverVisible) {\n      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__shown');\n      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'false');\n      this.renderer.setAttribute(\n        this.el.nativeElement,\n        'aria-describedby',\n        this.popoverDivId\n      );\n      this.renderer.setAttribute(\n        this.el.nativeElement,\n        'aria-expanded',\n        'true'\n      );\n      this.renderer.setAttribute(this.el.nativeElement, 'role', 'none');\n      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__hidden');\n    } else {\n      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__hidden');\n      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');\n      this.renderer.setAttribute(\n        this.el.nativeElement,\n        'aria-expanded',\n        'false'\n      );\n      this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');\n\n      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__shown');\n      this.renderer.removeAttribute(this.el.nativeElement, 'aria-describedby');\n    }\n  }\n}\n",
      selector: '[sdsPopover]',
      providers: [],
      inputsClass: [
        {
          name: 'closeOnClickOutside',
          defaultValue: 'false',
          line: 77,
        },
        {
          name: 'closeOnContentClick',
          defaultValue: 'true',
          line: 75,
        },
        {
          name: 'position',
          defaultValue: "'top'",
          line: 73,
          type: 'string',
        },
        {
          name: 'sdsPopover',
          line: 126,
          type: '',
        },
        {
          name: 'sdsPopoverTitle',
          line: 135,
          type: '',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [
        {
          name: 'click',
          args: [
            {
              name: '$event',
              type: 'MouseEvent',
            },
          ],
          argsDecorator: ['$event'],
          line: 24,
        },
        {
          name: 'document:click',
          args: [
            {
              name: '$event',
              type: 'MouseEvent',
            },
          ],
          argsDecorator: ['$event'],
          line: 34,
        },
        {
          name: 'keydown.Space',
          args: [
            {
              name: '$event',
              type: 'KeyboardEvent',
            },
          ],
          argsDecorator: ['$event'],
          description:
            '<p>Adding listener for keydown.space to ensure that user can activate popover with keyboard</p>\n',
          line: 61,
        },
        {
          name: 'keyup.enter',
          args: [
            {
              name: '$event',
              type: 'KeyboardEvent',
            },
          ],
          argsDecorator: ['$event'],
          description:
            '<p>Adding listener for keyup.enter to ensure that user can activate popover with keyboard</p>\n',
          line: 48,
        },
      ],
      propertiesClass: [
        {
          name: '_sdsPopoverContent',
          type: 'string | TemplateRef<any> | HTMLParagraphElement',
          optional: false,
          description: '',
          line: 17,
          modifierKind: [112],
        },
        {
          name: '_sdsPopoverTitle',
          type: 'string | TemplateRef<any> | HTMLParagraphElement',
          optional: false,
          description: '',
          line: 18,
          modifierKind: [112],
        },
        {
          name: 'popoverDivId',
          type: 'string',
          optional: false,
          description: '',
          line: 22,
        },
        {
          name: 'popoverVisible',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '',
          line: 21,
        },
        {
          name: 'sdsPopoverDiv',
          type: 'HTMLElement',
          optional: false,
          description: '',
          line: 20,
        },
      ],
      methodsClass: [
        {
          name: 'clickEvent',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 164,
          description:
            '<p>Using debounce decorator here to prevent a scenario where a popover is\napplied to a button and this function is called by both the enter key\nlistener and click listener.</p>\n',
          decorators: [
            {
              name: 'debounce',
              stringifiedArguments: '100',
            },
          ],
        },
        {
          name: 'handlePopoverSection',
          args: [
            {
              name: 'value',
              type: 'string | TemplateRef<any> | HTMLParagraphElement',
            },
            {
              name: 'classToApply',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'string | TemplateRef | HTMLParagraphElement',
          typeParameters: [],
          line: 143,
          jsdoctags: [
            {
              name: 'value',
              type: 'string | TemplateRef<any> | HTMLParagraphElement',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'classToApply',
              type: 'string',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 85,
        },
      ],
      implements: ['AfterViewInit'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'el',
            type: 'ElementRef',
          },
          {
            name: 'renderer',
            type: 'Renderer2',
          },
        ],
        line: 77,
        jsdoctags: [
          {
            name: 'el',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'renderer',
            type: 'Renderer2',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        sdsPopover: {
          name: 'sdsPopover',
          setSignature: {
            name: 'sdsPopover',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 126,
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
          getSignature: {
            name: 'sdsPopover',
            type: '',
            returnType: 'string | TemplateRef | HTMLParagraphElement',
            line: 130,
          },
        },
        sdsPopoverTitle: {
          name: 'sdsPopoverTitle',
          setSignature: {
            name: 'sdsPopoverTitle',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 135,
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
          getSignature: {
            name: 'sdsPopoverTitle',
            type: '',
            returnType: 'string | TemplateRef | HTMLParagraphElement',
            line: 139,
          },
        },
      },
    },
    {
      name: 'SdsPopupDirective',
      id: 'directive-SdsPopupDirective-f90e258a1339ca9bbf2c49725c31b0e5',
      file: 'libs/packages/components/src/lib/popup/popup.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import { Directive, Input, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';\n\n\n@Directive({\n  selector: '[sdsPopup]',\n  exportAs: 'sdsPopup'\n})\nexport class SdsPopupDirective implements AfterViewInit {\n  @Input() sdsPopup: HTMLElement;\n  @Input() position: string;\n  @Input() placement: string;\n  sdsPopupDiv: HTMLElement;\n\n  constructor(private el: ElementRef, private renderer: Renderer2) {\n    this.renderer.addClass(this.el.nativeElement, 'sds-popup');\n    this.sdsPopupDiv = document.createElement('div');\n    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');\n  }\n\n\n  ngAfterViewInit() {\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopup);\n    this.renderer.addClass(this.sdsPopupDiv, this.placement);\n    this.renderer.addClass(this.sdsPopupDiv, this.position);\n    this.renderer.appendChild(this.sdsPopupDiv, this.el.nativeElement.children[0]);\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);\n  }\n}\n",
      selector: '[sdsPopup]',
      providers: [],
      inputsClass: [
        {
          name: 'placement',
          line: 11,
          type: 'string',
        },
        {
          name: 'position',
          line: 10,
          type: 'string',
        },
        {
          name: 'sdsPopup',
          line: 9,
          type: 'HTMLElement',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: 'sdsPopupDiv',
          type: 'HTMLElement',
          optional: false,
          description: '',
          line: 12,
        },
      ],
      methodsClass: [
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 21,
        },
      ],
      implements: ['AfterViewInit'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'el',
            type: 'ElementRef',
          },
          {
            name: 'renderer',
            type: 'Renderer2',
          },
        ],
        line: 12,
        jsdoctags: [
          {
            name: 'el',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'renderer',
            type: 'Renderer2',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SDSTabOutsideDirective',
      id: 'directive-SDSTabOutsideDirective-b3f19222ac9324a35928c2f49ee140f0',
      file:
        'libs/packages/components/src/lib/tab-outside/taboutside.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import {\n  Directive, ElementRef, Output,\n  EventEmitter, HostListener\n} from '@angular/core';\n\n\n@Directive({\n  selector: '[sds-tab-outside]'\n})\nexport class SDSTabOutsideDirective {\n  /**\n   * Emitter for tabOutside event\n   */\n  @Output() tabOutside: EventEmitter<any> = new EventEmitter();\n\n  constructor(private _elementRef: ElementRef) { }\n\n  @HostListener('document:keyup', ['$event.target'])\n  public hasFocusChanged(target) {\n    const isInsideHost = this._elementRef.nativeElement.contains(target);\n    if (!isInsideHost) {\n      this.tabOutside.emit(undefined);\n    }\n  }\n}\n",
      selector: '[sds-tab-outside]',
      providers: [],
      inputsClass: [],
      outputsClass: [
        {
          name: 'tabOutside',
          defaultValue: 'new EventEmitter()',
          description: '<p>Emitter for tabOutside event</p>\n',
          line: 14,
          type: 'EventEmitter<any>',
        },
      ],
      hostBindings: [],
      hostListeners: [
        {
          name: 'document:keyup',
          args: [
            {
              name: 'target',
              type: '',
            },
          ],
          argsDecorator: ['$event.target'],
          line: 19,
        },
      ],
      propertiesClass: [],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef',
          },
        ],
        line: 14,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsTooltipDirective',
      id: 'directive-SdsTooltipDirective-3f48bed8c4afaaf0586188d7c6e4e695',
      file: 'libs/packages/components/src/lib/tooltip/tooltip.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef } from '@angular/core';\n\n@Directive({\n  selector: '[sdsTooltip]',\n  exportAs: 'sdsTooltip'\n})\nexport class SdsTooltipDirective implements AfterViewInit {\n\n  private _sdsTooltip: string | TemplateRef<any> | HTMLDivElement;\n  sdsTooltipDiv: HTMLElement;\n\n  @Input()\n  position: string = 'top';\n\n  @HostListener('focus') onFocus() {\n    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'false')\n  }\n  @HostListener('blur') onBlur() {\n    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'true')\n  }\n\n\n  constructor(private el: ElementRef, private renderer: Renderer2) {\n    this.renderer.addClass(this.el.nativeElement, 'sds-tooltip');\n    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0')\n\n    this.sdsTooltipDiv = document.createElement('div');\n\n    this.renderer.addClass(this.sdsTooltipDiv, 'sds-tooltip__content');\n  }\n\n  ngAfterViewInit() {\n    this.renderer.setAttribute(this.sdsTooltipDiv, 'data-position', this.position)\n    if (this.position && this.sdsTooltip) {\n      this.renderer.addClass(this.sdsTooltipDiv, this.position);\n      this.renderer.appendChild(this.sdsTooltipDiv, this.sdsTooltip);\n      this.renderer.appendChild(this.el.nativeElement, this.sdsTooltipDiv);\n    }\n  }\n\n  @Input()\n  set sdsTooltip(value: string | TemplateRef<any> | HTMLDivElement) {\n    if (typeof value === 'string') {\n      this._sdsTooltip = document.createElement('div');\n      this._sdsTooltip.innerHTML = value;\n    } else {\n      this._sdsTooltip = value;\n    }\n\n    if (this._sdsTooltip) {\n      this.renderer.addClass(this._sdsTooltip, 'tooltip')\n    }\n  }\n\n  get sdsTooltip(): string | TemplateRef<any> | HTMLDivElement {\n    return this._sdsTooltip;\n  }\n\n}\n",
      selector: '[sdsTooltip]',
      providers: [],
      inputsClass: [
        {
          name: 'position',
          defaultValue: "'top'",
          line: 13,
          type: 'string',
        },
        {
          name: 'sdsTooltip',
          line: 42,
          type: '',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [
        {
          name: 'blur',
          args: [],
          argsDecorator: [],
          line: 18,
        },
        {
          name: 'focus',
          args: [],
          argsDecorator: [],
          line: 15,
        },
      ],
      propertiesClass: [
        {
          name: '_sdsTooltip',
          type: 'string | TemplateRef<any> | HTMLDivElement',
          optional: false,
          description: '',
          line: 9,
          modifierKind: [112],
        },
        {
          name: 'sdsTooltipDiv',
          type: 'HTMLElement',
          optional: false,
          description: '',
          line: 10,
        },
      ],
      methodsClass: [
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 32,
        },
      ],
      implements: ['AfterViewInit'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'el',
            type: 'ElementRef',
          },
          {
            name: 'renderer',
            type: 'Renderer2',
          },
        ],
        line: 20,
        jsdoctags: [
          {
            name: 'el',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'renderer',
            type: 'Renderer2',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        sdsTooltip: {
          name: 'sdsTooltip',
          setSignature: {
            name: 'sdsTooltip',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 42,
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
          getSignature: {
            name: 'sdsTooltip',
            type: '',
            returnType: 'string | TemplateRef | HTMLDivElement',
            line: 55,
          },
        },
      },
    },
    {
      name: 'SdsTreeTableRow',
      id: 'directive-SdsTreeTableRow-3efd080dc5e50f6c0a387e66f06141ab',
      file:
        'libs/packages/components/src/lib/tree-table/tree-table.component.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import { ChangeDetectionStrategy, ChangeDetectorRef, Component, \n  ContentChild, Directive, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef } from \"@angular/core\";\nimport { SdsTreeTableData } from \"./tree-table.model\";\n\n@Directive({\n  selector: `[sdsTreeTableRow]`\n})\nexport class SdsTreeTableRow {\n  constructor(\n    public templateRef: TemplateRef<any>\n  ) {}\n}\n\n@Component({\n  selector: `sds-tree-table`,\n  templateUrl: `./tree-table.component.html`,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsTreeTableComponent {\n  /** Rows of table tada to display */\n  @Input() dataSource: SdsTreeTableData[];\n\n  /** Column header text */\n  @Input() displayColumns: string[];\n\n  /** \n   * Defines maximum number of children to show to the user\n   * IE - if a row has 20 children available, and childrenLimit\n   * value is 10, then the amount of children displayed to the\n   * user will be numChildrenToDisplay amount, and the rest\n   * is toggled behind a 'View All' button,\n   * This should be greater than or equal to numChildrenToDisplay\n   * @default - Number.MAX_SAFE_INTEGER\n   */\n  @Input() childrenLimit: number = Number.MAX_SAFE_INTEGER;\n\n  /**\n   * Number of children to Display to users if a row's children length\n   * exceeds childrenLimit. This should be less than or equal to childrenLimit\n   * \n   * General Cases:\n   * If numChildrenToDisplay is 5, childrenLimit is 10, and row has 20 children\n   *  5 children will be shown and the remaining can be displayed through View All button\n   * \n   * If numChildrenToDisplay is 5, childrenLimit is 10, and row has 10 children\n   *  All 10 children will be displayed because the row's children does not exceed childrenLimit\n   * \n   * If numChildren is 5, childrenLimit is 10, and row has 4 children\n   *  All 4 children will be displayed because row's children does not exceed childrenLimit\n   * \n   * @default - Number.MAX_SAFE_INTEGER\n   */\n  @Input() numChildrenToDisplay: number = this.childrenLimit\n\n  /**\n   * Reference for content projection. User defined values for how to\n   * display each cell in a row\n   */\n  @ContentChild(SdsTreeTableRow) treetableRow: SdsTreeTableRow;\n\n  /** Emitted for a row if there are more children to display and user clicked view all */\n  @Output() viewAll = new EventEmitter<any>();\n\n  /** Emitted anytime a row 's expansion / collapse value changes */\n  @Output() rowExpanded = new EventEmitter<any>();\n\n  _selectedRow: any;\n  _selectedRowParent: any;\n\n  constructor(\n    private elementRef: ElementRef,\n    public cdr: ChangeDetectorRef,\n    private ngZone: NgZone,\n  ) {}\n\n\n  /**\n   * Public Interface - close all opened children\n   */\n  public collapseAll() {\n    this.toggleAllHelper(this.dataSource, false);\n    this.cdr.detectChanges();\n  }\n\n  /**\n   * Public interface - open all panels with children\n   */\n  public expandAll() {\n    this.toggleAllHelper(this.dataSource, true);\n    this.cdr.detectChanges();\n  }\n\n  /** \n   * Public interface - expand a single row given an ID. \n   * The row's predecessors will also be expanded \n   * @param rowId - id of row to expand\n   */\n  public expandRow(rowId: string) {\n    this.expandRowHelper(this.dataSource, rowId);\n    this.cdr.detectChanges();\n  }\n\n  /**\n   * Public Interface - Collapse a single row given an id.\n   * The row's successors will also be collapsed\n   * @param rowId - id of row to collapse\n   */\n  public collapseRow(rowId: string) {\n    const row = this.findRow(this.dataSource, rowId);\n    if (!row) {\n      return;\n    }\n\n    this.collapseRowHelper(row);\n    this.cdr.detectChanges();\n  }\n\n  viewAllClicked(row: SdsTreeTableData, currentRow: HTMLTableRowElement, tableRow: HTMLTableRowElement) {\n    \n    currentRow.setAttribute('tabindex', undefined);\n    tableRow.setAttribute('tabindex', '0');\n    row.viewAllChildren = true;\n    setTimeout(() => tableRow.focus());\n    if (row.totalChildren && row.totalChildren > row.children.length) {\n      this.viewAll.emit(row);\n    }\n  }\n\n  private toggleAllHelper(data: any[], expanded: boolean) {\n    data.forEach(data => {\n      if (data.children) {\n        this.toggleAllHelper(data.children, expanded);\n        data.expanded = expanded;\n\n        if (!expanded) {\n          data.viewAllChildren = false;\n        }\n      }\n    });\n  }\n\n  private expandRowHelper(allRows: any[], id: string) {\n    for (let i = 0; i < allRows.length; i++) {\n      const row = allRows[i];\n      if (row.id === id) {\n        return true;\n      } else if (row.children) {\n        const isChildExpanded = this.expandRowHelper(row.children, id);\n        if (isChildExpanded) {\n          row.expanded = true;\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  private findRow(allRows: any[], id: string) {\n    for (let i = 0; i < allRows.length; i++) {\n      const row = allRows[i];\n      if (row.id === id) {\n        return row;\n      } else if (row.children) {\n        return this.findRow(allRows, id);\n      }\n    }\n    return null;\n  }\n\n  private collapseRowHelper(row: any) {\n    row.expanded = false;\n    row.viewAllChildren = false;\n    if (row.children) {\n      row.children.forEach(child => this.collapseRowHelper(child));\n    }\n  }\n\n  /** Sets height of vertical border on the tree table view */\n  setHeight(row: HTMLTableRowElement, parentRow: HTMLTableRowElement, border: HTMLSpanElement) {\n    if (!row || !parentRow) {\n      return;\n    }\n\n    /** \n     * We run outside ngZone because we don't want the setTimeout to trigger change detection,\n     * which would re-run changes on template, and re-evalute this function, causing infinite loop\n     */\n    this.ngZone.runOutsideAngular(() => {\n\n      /** \n       * We do set timeout to let the table rows finish rendering. If a row was\n       * expanded / collapsed, then the height of the vertical border will need to\n       * be re-evaluated based on new distance from child to parent. We let the\n       * view finish refreshing so that bounding rectangle is re-evaluated, and then\n       * we can re-calculate height. Doing this synchronously without setTimeout\n       * would give us incorrect value for height because the bouunding rectangle\n       * has yet to update from the collapse / expand change\n       */\n      setTimeout(() => {\n        const firstRect = parentRow.getBoundingClientRect();\n        const rowRect = row.getBoundingClientRect();\n        \n        const yFirstRect = firstRect.top + firstRect.height / 2;\n        const yRowRect = rowRect.top + rowRect.height / 2;\n\n        const height = yRowRect - yFirstRect - 20;\n        border.style.height = `${height}px`;\n        border.style.bottom = `${rowRect.height / 2}px`;\n      })\n    })\n  }\n\n  /** \n   * Defines whether or not to display vertical border from this row. Vertical borders generally\n   * start from the last child and extend to the parent. However, if we are truncating the number\n   * of children displayed, then the vertical border would need to start from the child we\n   * truncate at.\n   * */\n  displayVerticalBorder(parentRow: SdsTreeTableData, index: number, siblingRows: SdsTreeTableRow[]): boolean {\n    if (!siblingRows) return false;\n\n    // Decide whether last child displayed is last child in row's children index or is at numChildrenToDisplay\n    if (parentRow.viewAllChildren || siblingRows.length <= this.childrenLimit) {\n      return index === siblingRows.length - 1;\n    } else {\n      return index === this.numChildrenToDisplay - 1;\n    }\n  }\n\n  getTemplateContext(parent: any, row: any, index: number, level: number, parentSelected?: boolean, parentRow?: HTMLTableRowElement) {\n    const updatedLevel = level + 1;\n    const posinset = index + 1;\n    return {\n      row: row,\n      level: updatedLevel,\n      index: posinset,\n      size: parent.children ? parent.children.length : 1,\n      rows: parent.children,\n      parentSelected: parentSelected,\n      parent: parent,\n      parentRow: parentRow\n    }\n  }\n\n  onRowClicked(row: SdsTreeTableData, tableRow: HTMLTableRowElement) {\n    if (row.children || row.totalChildren > 0) {\n      row.expanded = !row.expanded;\n    }\n\n    if (!row.expanded) {\n      row.viewAllChildren = false;\n    }\n\n    this._selectedRow = row;\n    this._selectedRowParent = this.getParentOfRow(this.dataSource, row);\n    setTimeout(() => tableRow.focus());\n    this.rowExpanded.emit(row);\n  }\n\n  onKeyDown($event: KeyboardEvent, tableRow: HTMLTableRowElement) {\n    if ($event.target != tableRow) {\n      return;\n    }\n\n    let siblingRow: HTMLTableRowElement;\n\n    if ($event.key === 'ArrowUp') {\n      siblingRow = ($event.target as HTMLTableRowElement).previousElementSibling as HTMLTableRowElement;\n    } else if ($event.key === 'ArrowDown') {\n      siblingRow = ($event.target as HTMLTableRowElement).nextElementSibling as HTMLTableRowElement;\n    } else if ($event.key === 'Home') {\n      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr');\n    } else if ($event.key === 'End') {\n      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr:last-child');\n    }\n\n    if (!siblingRow) return;\n\n    ($event.target as HTMLTableRowElement).setAttribute('tabindex', undefined);\n    siblingRow.setAttribute('tabindex', '0');\n    siblingRow.focus();\n    $event.preventDefault();\n  }\n\n  getParentOfRow(allRows: any[], row: any) {\n    let retRow = null;\n    for (let i = 0; i < allRows.length; i++) {\n      if (allRows[i] === row) {\n        retRow = allRows[i];\n        break;\n      } else if(allRows[i].children) {\n        const isChildRow = this.getParentOfRow(allRows[i].children, row);\n        if (isChildRow) {\n          retRow = allRows[i];\n        }\n      }\n    }\n    \n    return retRow;\n  }\n}",
      selector: '[sdsTreeTableRow]',
      providers: [],
      inputsClass: [],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [],
      propertiesClass: [
        {
          name: 'templateRef',
          type: 'TemplateRef<any>',
          optional: false,
          description: '',
          line: 10,
          modifierKind: [114],
        },
      ],
      methodsClass: [],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'templateRef',
            type: 'TemplateRef<any>',
          },
        ],
        line: 8,
        jsdoctags: [
          {
            name: 'templateRef',
            type: 'TemplateRef<any>',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsTruncateTextByLineDirective',
      id:
        'directive-SdsTruncateTextByLineDirective-a427ef32fe5697c69962e187aa71fc2c',
      file:
        'libs/packages/components/src/lib/truncate-text/truncate-text.directive.ts',
      type: 'directive',
      description: '',
      sourceCode:
        "import {\n  Directive,\n  ElementRef,\n  OnInit,\n  Input,\n  OnDestroy,\n  AfterViewInit,\n  HostListener,\n  Injector,\n  ViewContainerRef\n} from '@angular/core';\nimport { coerceNumberProperty } from '@angular/cdk/coercion';\nimport {\n  ViewportRuler,\n  OverlayConfig,\n  Overlay,\n  OverlayRef,\n  ConnectedPosition\n} from '@angular/cdk/overlay';\nimport { Subscription, merge } from 'rxjs';\nimport { startWith } from 'rxjs/operators';\nimport { PortalInjector, ComponentPortal } from '@angular/cdk/portal';\nimport { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\n\n@Directive({ selector: '[sdsTruncateTextByLine]' })\nexport class SdsTruncateTextByLineDirective\n  implements OnInit, OnDestroy, AfterViewInit {\n  /** Maximum lines of text limit */\n  @Input('sdsTruncateTextByLine')\n  get textLinesLimit(): any {\n    return this._textLinesLimit;\n  }\n  set textLinesLimit(_textLinesLimit: any) {\n    _textLinesLimit = coerceNumberProperty(_textLinesLimit);\n    if (this._textLinesLimit !== _textLinesLimit) {\n      this._textLinesLimit = _textLinesLimit;\n    }\n  }\n  private _textLinesLimit: number;\n\n  /** PortalOutlet */\n  private _overlayRef: OverlayRef | null = null;\n\n  /** Holds subscription to stream of overlay closing events */\n  private _closingActionsSubscription = Subscription.EMPTY;\n\n  /** Holds initial text */\n  private initialText: string;\n\n  /** Subscription to window resize stream */\n  windowResize$: Subscription;\n\n  /** Approximated character width of the host text */\n  private approximatedCharacterWidth: number;\n\n  constructor(\n    private _overlay: Overlay,\n    private _injector: Injector,\n    private _element: ElementRef,\n    private _viewportRuler: ViewportRuler,\n    private _viewContainerRef: ViewContainerRef\n  ) {}\n\n  ngOnInit() {\n    this.initialText = this._element.nativeElement.innerText.trim();\n\n    // Clone element to facilitate calculations\n    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;\n\n    // Add 1 character to calculate character width\n    hostCloneEl.innerHTML = 'x';\n\n    // Render the clone to get character width\n    this._element.nativeElement.parentElement.appendChild(hostCloneEl);\n\n    // Set the clone to inline to prevent cases where the clone\n    // expands to 100% width of the container\n    hostCloneEl.setAttribute('style', 'display: inline');\n\n    // These are close approximations that are used to better guess\n    // how many characters fit in X number of lines\n    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;\n\n    // Remove clone after calculations\n    hostCloneEl.remove();\n  }\n\n  ngAfterViewInit(): void {\n    this.windowResize$ = this._viewportRuler\n      .change(0)\n      .pipe(startWith('Start'))\n      .subscribe(() => this.updateUI());\n  }\n\n  ngOnDestroy(): void {\n    if (this._overlayRef) {\n      this._overlayRef.dispose();\n    }\n    this._closingActionsSubscription.unsubscribe();\n    this.windowResize$.unsubscribe();\n  }\n\n  /** Configures and creates the CDK overlay */\n  private _createOverlay() {\n    const overlayPositions: ConnectedPosition = {\n      originX: 'start',\n      originY: 'bottom',\n      overlayX: 'start',\n      overlayY: 'top'\n    };\n    const config = new OverlayConfig({\n      positionStrategy: this._overlay\n        .position()\n        .flexibleConnectedTo(this._element)\n        .withLockedPosition()\n        .withPositions([overlayPositions])\n        .withTransformOriginOn('.sds-overlay'),\n      hasBackdrop: true,\n      backdropClass: 'cdk-overlay-transparent-backdrop',\n      scrollStrategy: this._overlay.scrollStrategies.close()\n    });\n    return this._overlay.create(config);\n  }\n\n  /** Attach a ComponentPortal to the overlay **/\n  private _attachContainer(overlay: OverlayRef) {\n    const injector = new PortalInjector(\n      this._injector,\n      new WeakMap([[SDS_TRUNCATED_TEXT_DATA, { text: this.initialText }]])\n    );\n    const containerPortal = new ComponentPortal(\n      SdsTruncatedTextContainerComponent,\n      this._viewContainerRef,\n      injector\n    );\n    const containerRef = overlay.attach(containerPortal);\n\n    return containerRef.instance;\n  }\n\n  /** Returns a stream that emits whenever an action that should close the overlay occurs. */\n  private _overlayClosingActions() {\n    const backdrop = this._overlayRef.backdropClick();\n    const detachments = this._overlayRef.detachments();\n    return merge(backdrop, detachments);\n  }\n\n  /** Width of host element */\n  private _getHostWidth(): number {\n    return this._element.nativeElement.offsetWidth;\n  }\n\n  /** Approximated number of characters that are visible in the container */\n  private _getVisibleCharacters(): number {\n    return Math.floor(\n      (this._getHostWidth() / this.approximatedCharacterWidth) *\n        this.textLinesLimit\n    );\n  }\n\n  private _isNotLongEnough(): boolean {\n    return this._getVisibleCharacters() > this.initialText.length;\n  }\n\n  @HostListener('click')\n  openOverlay(): void {\n    // Exit if all text can be visible in container\n    if (this._isNotLongEnough()) return;\n\n    this._overlayRef = this._createOverlay();\n    const container = this._attachContainer(this._overlayRef);\n    this._closingActionsSubscription = this._overlayClosingActions().subscribe(\n      () => this.closeOverlay()\n    );\n    // Wait for the next event loop tick to start the animation\n    setTimeout(() => {\n      container.startAnimation();\n    });\n  }\n\n  updateUI() {\n    // Exit if all text can be visible in container\n    if (this._isNotLongEnough()) return;\n\n    const wordCut = false;\n    const ellipsis = '...';\n    const limit = this._getVisibleCharacters() - ellipsis.length;\n\n    let visibleText = this.initialText.slice(0, limit);\n\n    if (!wordCut) {\n      const isEndofWord = this.initialText.substr(limit, limit + 1) === ' ';\n      if (!isEndofWord) {\n        const previousWord = visibleText.lastIndexOf(' ');\n        visibleText = visibleText.slice(0, previousWord);\n      }\n    }\n\n    this._element.nativeElement.innerText = visibleText + ellipsis;\n  }\n\n  closeOverlay() {\n    this._closingActionsSubscription.unsubscribe();\n    this._overlayRef.detach();\n  }\n}\n",
      selector: '[sdsTruncateTextByLine]',
      providers: [],
      inputsClass: [
        {
          name: 'sdsTruncateTextByLine',
          description: '<p>Maximum lines of text limit </p>\n',
          line: 31,
          type: 'any',
        },
      ],
      outputsClass: [],
      hostBindings: [],
      hostListeners: [
        {
          name: 'click',
          args: [],
          argsDecorator: [],
          line: 167,
        },
      ],
      propertiesClass: [
        {
          name: '_closingActionsSubscription',
          defaultValue: 'Subscription.EMPTY',
          type: '',
          optional: false,
          description:
            '<p>Holds subscription to stream of overlay closing events </p>\n',
          line: 46,
          modifierKind: [112],
        },
        {
          name: '_overlayRef',
          defaultValue: 'null',
          type: 'OverlayRef | null',
          optional: false,
          description: '<p>PortalOutlet </p>\n',
          line: 43,
          modifierKind: [112],
        },
        {
          name: '_textLinesLimit',
          type: 'number',
          optional: false,
          description: '',
          line: 40,
          modifierKind: [112],
        },
        {
          name: 'approximatedCharacterWidth',
          type: 'number',
          optional: false,
          description:
            '<p>Approximated character width of the host text </p>\n',
          line: 55,
          modifierKind: [112],
        },
        {
          name: 'initialText',
          type: 'string',
          optional: false,
          description: '<p>Holds initial text </p>\n',
          line: 49,
          modifierKind: [112],
        },
        {
          name: 'windowResize$',
          type: 'Subscription',
          optional: false,
          description: '<p>Subscription to window resize stream </p>\n',
          line: 52,
        },
      ],
      methodsClass: [
        {
          name: '_attachContainer',
          args: [
            {
              name: 'overlay',
              type: 'OverlayRef',
            },
          ],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 127,
          description: '<p>Attach a ComponentPortal to the overlay *</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'overlay',
              type: 'OverlayRef',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_createOverlay',
          args: [],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 105,
          description: '<p>Configures and creates the CDK overlay </p>\n',
          modifierKind: [112],
        },
        {
          name: '_getHostWidth',
          args: [],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 150,
          description: '<p>Width of host element </p>\n',
          modifierKind: [112],
        },
        {
          name: '_getVisibleCharacters',
          args: [],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 155,
          description:
            '<p>Approximated number of characters that are visible in the container </p>\n',
          modifierKind: [112],
        },
        {
          name: '_isNotLongEnough',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 162,
          modifierKind: [112],
        },
        {
          name: '_overlayClosingActions',
          args: [],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 143,
          description:
            '<p>Returns a stream that emits whenever an action that should close the overlay occurs. </p>\n',
          modifierKind: [112],
        },
        {
          name: 'closeOverlay',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 203,
        },
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 89,
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 96,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 65,
        },
        {
          name: 'updateUI',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 182,
        },
      ],
      implements: ['OnInit', 'OnDestroy', 'AfterViewInit'],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_overlay',
            type: 'Overlay',
          },
          {
            name: '_injector',
            type: 'Injector',
          },
          {
            name: '_element',
            type: 'ElementRef',
          },
          {
            name: '_viewportRuler',
            type: 'ViewportRuler',
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
          },
        ],
        line: 55,
        jsdoctags: [
          {
            name: '_overlay',
            type: 'Overlay',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_injector',
            type: 'Injector',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_element',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_viewportRuler',
            type: 'ViewportRuler',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        textLinesLimit: {
          name: 'textLinesLimit',
          setSignature: {
            name: 'textLinesLimit',
            type: 'void',
            args: [
              {
                name: '_textLinesLimit',
                type: 'any',
              },
            ],
            returnType: 'void',
            line: 34,
            jsdoctags: [
              {
                name: '_textLinesLimit',
                type: 'any',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
    },
  ],
  components: [
    {
      name: 'PaginationComponent',
      id: 'component-PaginationComponent-2168abe62c9bc9ea8dd5ca1c9a136964',
      file:
        'libs/packages/components/src/lib/pagination/pagination.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-pagination',
      styleUrls: ['./pagination.component.scss'],
      styles: [],
      templateUrl: ['./pagination.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'displayMode',
          defaultValue: "'default'",
          description:
            '<p>displayMode = &#39;default&#39; | &#39;results&#39;;</p>\n',
          line: 55,
          type: 'PaginationDisplayMode',
        },
        {
          name: 'page',
          defaultValue: 'new PaginationModel()',
          description: '<p>Pagination model</p>\n',
          line: 43,
          type: 'PaginationModel',
        },
        {
          name: 'paginationConfiguration',
          description: '<p>configuration for the pagination</p>\n',
          line: 49,
          type: 'PaginationConfigurationModel',
        },
        {
          name: 'totalItems',
          defaultValue: '0',
          description: '<p>totalItems for display on results view;</p>\n',
          line: 61,
          type: 'number',
        },
      ],
      outputsClass: [
        {
          name: 'pageChange',
          defaultValue: 'new EventEmitter<PaginationModel>()',
          description: '<p>Output of the page model object</p>\n',
          line: 37,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: 'currentPageField',
          type: 'ElementRef',
          optional: false,
          description: '<p>Input field for the current page</p>\n',
          line: 31,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'currentPage', {static: false}",
            },
          ],
        },
        {
          name: 'debounceTime',
          defaultValue: '500',
          type: 'number',
          optional: false,
          description: '<p>debounce time for current page input</p>\n',
          line: 68,
        },
        {
          name: 'options',
          defaultValue:
            "[\n    { label: '25', value: 25 },\n    { label: '50', value: 50 },\n    { label: '100', value: 100 }\n  ]",
          type: '[]',
          optional: false,
          description: '<p>Drop down options for page size</p>\n',
          line: 83,
          modifierKind: [114],
        },
        {
          name: 'previousNumber',
          type: 'number',
          optional: false,
          description: '<p>Stores the previous number</p>\n',
          line: 73,
          modifierKind: [112],
        },
        {
          name: 'timeoutNumber',
          type: 'number',
          optional: false,
          description: '<p>timeout id of the debounce time</p>\n',
          line: 78,
        },
      ],
      methodsClass: [
        {
          name: 'currentPageFocusOut',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 154,
          description:
            '<p>current page focus out will replace with previous valid if empty</p>\n',
        },
        {
          name: 'handleInputOutsideBounds',
          args: [
            {
              name: 'newValue',
              type: 'number',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 139,
          description:
            '<p>adjusts the value if not within the page limit above or below</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 3151,
                end: 3159,
                flags: 0,
                escapedText: 'newValue',
              },
              type: 'number',
              optional: true,
              tagName: {
                pos: 3145,
                end: 3150,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>handles</p>\n',
            },
          ],
        },
        {
          name: 'maintainPreviousValue',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 24,
          description:
            '<p>Stores the previous number. Used when focus out if field empty</p>\n',
          modifierKind: [112],
        },
        {
          name: 'nextPage',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 103,
          description:
            '<p>next page increase page number by one within range</p>\n',
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 14,
        },
        {
          name: 'onSelectChange',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 164,
          description: '<p>page size selection change</p>\n',
        },
        {
          name: 'previousPage',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 92,
          description:
            '<p>previous page lowers page number by one within range</p>\n',
        },
        {
          name: 'valuechange',
          args: [
            {
              name: 'newValue',
              type: 'number',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 115,
          description:
            '<p>current page changes sets new value if within range</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 2438,
                end: 2446,
                flags: 0,
                escapedText: 'newValue',
              },
              type: 'number',
              optional: true,
              tagName: {
                pos: 2432,
                end: 2437,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';\nimport { PaginationConfigurationModel, PaginationModel } from './model/paginationModel';\n\n/** pagination display modes. */\nexport type PaginationDisplayMode = 'default' | 'results';\n\n@Component({\n  selector: 'sds-pagination',\n  templateUrl: './pagination.component.html',\n  styleUrls: ['./pagination.component.scss']\n})\nexport class PaginationComponent implements OnInit {\n\n  ngOnInit(): void {\n    this.maintainPreviousValue();\n  }\n\n  constructor(private change: ChangeDetectorRef) { }\n\n\n  /**\n   * Stores the previous number. Used when focus out if field empty\n   */\n  private maintainPreviousValue() {\n    this.previousNumber = this.page.pageNumber.valueOf();\n  }\n\n  /**\n   * Input field for the current page\n   */\n  @ViewChild('currentPage', { static: false }) currentPageField: ElementRef;\n\n  /**\n   * Output of the page model object\n   */\n  @Output()\n  pageChange = new EventEmitter<PaginationModel>();\n\n  /**\n   * Pagination model\n   */\n  @Input()\n  page: PaginationModel = new PaginationModel();\n\n  /**\n   * configuration for the pagination\n   */\n  @Input()\n  paginationConfiguration: PaginationConfigurationModel;\n\n  /**\n   * displayMode = 'default' | 'results';\n   */\n  @Input()\n  displayMode: PaginationDisplayMode = 'default';\n\n  /**\n * totalItems for display on results view;\n */\n  @Input()\n  totalItems?: number = 0;\n\n\n\n  /**\n   * debounce time for current page input\n   */\n  debounceTime: number = 500;\n\n  /**\n   * Stores the previous number\n   */\n  private previousNumber: number;\n\n  /**\n   * timeout id of the debounce time\n   */\n  timeoutNumber: number;\n\n  /**\n   * Drop down options for page size\n   */\n  public options = [\n    { label: '25', value: 25 },\n    { label: '50', value: 50 },\n    { label: '100', value: 100 }\n  ];\n\n  /**\n   * previous page lowers page number by one within range\n   */\n  previousPage() {\n    if (this.page.pageNumber > 1) {\n      this.page.pageNumber--;\n      this.maintainPreviousValue();\n      this.pageChange.emit(this.page);\n    }\n  }\n\n  /**\n   * next page increase page number by one within range\n   */\n  nextPage() {\n    if (this.page.pageNumber < this.page.totalPages) {\n      this.page.pageNumber++;\n      this.maintainPreviousValue();\n      this.pageChange.emit(this.page);\n    }\n  }\n\n  /**\n   * current page changes sets new value if within range\n   * @param newValue\n   */\n  valuechange(newValue?: number) {\n    window.clearTimeout(this.timeoutNumber);\n    this.timeoutNumber = window.setTimeout(() => {\n      if (newValue || newValue === 0) {\n        newValue = this.handleInputOutsideBounds(newValue);\n        if (newValue >= 1 && newValue <= this.page.totalPages) {\n          this.page.pageNumber = newValue;\n          this.maintainPreviousValue();\n          this.pageChange.emit(this.page);\n          this.change.detectChanges();\n        }\n      } else {\n\n        if (this.page.pageNumber) {\n          this.maintainPreviousValue();\n        }\n      }\n    }, this.debounceTime);\n  }\n\n  /**\n   * adjusts the value if not within the page limit above or below\n   * @param newValue handles\n   */\n  private handleInputOutsideBounds(newValue?: number) {\n    if (newValue < 1) {\n      newValue = 1;\n      this.currentPageField.nativeElement.value = newValue;\n    }\n    else if (newValue > this.page.totalPages) {\n      newValue = this.page.totalPages;\n      this.currentPageField.nativeElement.value = newValue;\n    }\n    return newValue;\n  }\n\n  /**\n   * current page focus out will replace with previous valid if empty\n   */\n  currentPageFocusOut() {\n    if (this.currentPageField.nativeElement.value === '') {\n      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;\n      this.change.detectChanges();\n    }\n  }\n\n  /**\n   * page size selection change\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.pageChange.emit(this.page);\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data:
            '/* Hide HTML5 Up and Down arrows. */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type="number"] {\n    -moz-appearance: textfield;\n}\n\n',
          styleUrl: './pagination.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'change',
            type: 'ChangeDetectorRef',
          },
        ],
        line: 16,
        jsdoctags: [
          {
            name: 'change',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['OnInit'],
      templateData:
        '<div class="sds-pagination" *ngIf="displayMode === \'default\'">\n  <div class="sds-pagination__controls">\n    <button [attr.id]="paginationConfiguration.id +\'-previousPage\'" (click)="previousPage()">Previous Page</button>\n    <label class="usa-label font-sans-3xs margin-top-1 text-italic text-base usa-sr-only"\n      [attr.for]="paginationConfiguration.id + \'-currentPage\'">Current Page</label>\n    <input [attr.id]="paginationConfiguration.id +\'-currentPage\'"\n      class="usa-input usa-input--small font-sans-3xs text-center border-base-light" #currentPage\n      [attr.aria-label]="\'Page \' + page.pageNumber + \' of \' + page.totalPages"\n      (ngModelChange)="valuechange($event)" [(ngModel)]="page.pageNumber" type="number" min="1"\n      [(attr.max)]="page.totalPages" (focusout)="currentPageFocusOut()" [ngStyle]="{\'width\': (20 + page.totalPages.toString().length * 10) +\'px\'}" />\n    <span class="sds-pagination__total">\n      of <strong>{{ page.totalPages }}</strong>\n    </span>\n    <button [attr.id]="paginationConfiguration.id +\'-nextPage\'" (click)="nextPage()">Next Page</button>\n  </div>\n  <div class="sds-pagination__results">\n    <label class="usa-label font-sans-3xs text-italic text-base"\n      [attr.for]="paginationConfiguration.id + \'-select\'">Results per page</label>\n    <select class="usa-select usa-select--small border-base-light" [attr.id]="paginationConfiguration.id + \'-select\'"\n      (change)="onSelectChange()" [(ngModel)]="page.pageSize">\n      <option *ngFor="let item of options" [ngValue]="item.value">\n        {{ item.label }}\n      </option>\n    </select>\n  </div>\n</div>\n\n<div aria-live="polite">\n  <div class="sds-pagination" *ngIf="totalItems && displayMode === \'results\'">\n    <div class="text-semibold font-sans-3xs">\n      Showing {{(page.pageNumber-1)*page.pageSize+1 | number:\'1.0\':\'en-US\'}} - {{((page.pageNumber-1)*page.pageSize+page.pageSize) > totalItems ? (totalItems | number:\'1.0\':\'en-US\') : ((page.pageNumber-1)*page.pageSize+page.pageSize | number:\'1.0\':\'en-US\') }} of {{totalItems | number:\'1.0\':\'en-US\'}} results\n    </div>\n  </div>\n</div>\n\n',
    },
    {
      name: 'SdsAccordionItemComponent',
      id:
        'component-SdsAccordionItemComponent-276ca499365a1a15dce6bf7a4af69471',
      file:
        'libs/packages/components/src/lib/accordion/accordion-item.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      exportAs: 'sdsAccordionItem',
      host: {},
      inputs: ['disabled', 'expanded'],
      outputs: ['opened', 'closed', 'expandedChange'],
      providers: [],
      selector: 'sds-accordion-item',
      styleUrls: [],
      styles: [],
      templateUrl: ['accordion-item.component.html'],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [
        {
          name: 'afterCollapse',
          defaultValue: 'new EventEmitter<void>()',
          description:
            '<p>An event emitted after the body&#39;s collapse animation happens. </p>\n',
          line: 61,
          type: 'EventEmitter',
        },
        {
          name: 'afterExpand',
          defaultValue: 'new EventEmitter<void>()',
          description:
            '<p>An event emitted after the body&#39;s expansion animation happens. </p>\n',
          line: 58,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: '_animationMode',
          type: 'string',
          optional: false,
          description: '',
          line: 90,
          decorators: [
            {
              name: 'Optional',
              stringifiedArguments: '',
            },
            {
              name: 'Inject',
              stringifiedArguments: 'ANIMATION_MODULE_TYPE',
            },
          ],
          modifierKind: [114],
        },
        {
          name: '_body',
          type: 'ElementRef<HTMLElement>',
          optional: false,
          description:
            '<p>Element containing the accordion item&#39;s user-provided content. </p>\n',
          line: 74,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'body', {static: false}",
            },
          ],
        },
        {
          name: '_bodyAnimationDone',
          defaultValue: 'new Subject<AnimationEvent>()',
          type: '',
          optional: false,
          description: '<p>Stream of body animation done events. </p>\n',
          line: 83,
        },
        {
          name: '_document',
          type: 'Document',
          optional: false,
          description: '',
          line: 55,
          modifierKind: [112],
        },
        {
          name: '_headerId',
          defaultValue: '`sds-accordion-item-header-${uniqueId++}`',
          type: '',
          optional: false,
          description:
            '<p>ID for the associated header element. Used for a11y labelling. </p>\n',
          line: 80,
        },
        {
          name: '_inputChanges',
          defaultValue: 'new Subject<SimpleChanges>()',
          type: '',
          optional: false,
          description:
            '<p>Stream that emits for changes in <code>@Input</code> properties. </p>\n',
          line: 64,
          modifierKind: [132],
        },
        {
          name: '_lazyContent',
          type: 'SdsAccordionItemContentDirective',
          optional: false,
          description: '<p>Content that will be rendered lazily. </p>\n',
          line: 70,
          decorators: [
            {
              name: 'ContentChild',
              stringifiedArguments: 'SdsAccordionItemContentDirective',
            },
          ],
        },
        {
          name: '_portal',
          type: 'TemplatePortal',
          optional: false,
          description: '<p>Portal holding the user&#39;s content. </p>\n',
          line: 77,
        },
        {
          name: 'accordion',
          type: 'SdsAccordionBase',
          optional: false,
          description:
            '<p>Optionally defined accordion the accordion item belongs to. </p>\n',
          line: 67,
        },
      ],
      methodsClass: [
        {
          name: '_containsFocus',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 142,
          description:
            '<p>Checks whether the accordion item&#39;s content contains the currently-focused element. </p>\n',
        },
        {
          name: '_getExpandedState',
          args: [],
          optional: false,
          returnType: 'SdsAccordionItemState',
          typeParameters: [],
          line: 114,
          description: '<p>Gets the expanded state string. </p>\n',
        },
        {
          name: 'ngAfterContentInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 118,
        },
        {
          name: 'ngOnChanges',
          args: [
            {
              name: 'changes',
              type: 'SimpleChanges',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 131,
          jsdoctags: [
            {
              name: 'changes',
              type: 'SimpleChanges',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 135,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { AnimationEvent } from '@angular/animations';\nimport { CdkAccordionItem } from \"@angular/cdk/accordion\";\nimport { UniqueSelectionDispatcher } from '@angular/cdk/collections';\nimport { TemplatePortal } from '@angular/cdk/portal';\nimport {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ContentChild,\n  EventEmitter,\n  ElementRef,\n  Inject,\n  OnChanges,\n  OnDestroy,\n  Optional,\n  Output,\n  SimpleChanges,\n  SkipSelf,\n  ViewContainerRef,\n  ViewEncapsulation,\n  ViewChild\n} from \"@angular/core\";\nimport { DOCUMENT } from '@angular/common';\nimport { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';\nimport { Subject } from 'rxjs';\nimport { filter, startWith, take, distinctUntilChanged } from 'rxjs/operators';\nimport { sdsExpansionAnimations } from './accordion-animations';\nimport { SdsAccordionItemContentDirective } from './accordion-item-content.directive';\nimport { SDS_ACCORDION, SdsAccordionBase } from './accordion-base';\n\n/** Accordion Item's states. */\nexport type SdsAccordionItemState = 'expanded' | 'collapsed';\n\n/** Counter for generating unique element ids. */\nlet uniqueId = 0;\n\n@Component({\n  selector: \"sds-accordion-item\",\n  exportAs: \"sdsAccordionItem\",\n  templateUrl: \"accordion-item.component.html\",\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  inputs: ['disabled', 'expanded'],\n  outputs: ['opened', 'closed', 'expandedChange'],\n  animations: [sdsExpansionAnimations.bodyExpansion],\n  host: {\n    'class': 'sds-accordion__item',\n    '[class.sds-accordion__item--expanded]': 'expanded',\n    '[class._sds-animation-noopable]': '_animationMode === \"NoopAnimations\"'\n  }\n})\nexport class SdsAccordionItemComponent extends CdkAccordionItem\n  implements AfterContentInit, OnChanges, OnDestroy {\n  private _document: Document;\n\n  /** An event emitted after the body's expansion animation happens. */\n  @Output() afterExpand = new EventEmitter<void>();\n\n  /** An event emitted after the body's collapse animation happens. */\n  @Output() afterCollapse = new EventEmitter<void>();\n\n  /** Stream that emits for changes in `@Input` properties. */\n  readonly _inputChanges = new Subject<SimpleChanges>();\n\n  /** Optionally defined accordion the accordion item belongs to. */\n  accordion: SdsAccordionBase;\n\n  /** Content that will be rendered lazily. */\n  @ContentChild(SdsAccordionItemContentDirective) _lazyContent: SdsAccordionItemContentDirective;\n\n  /** Element containing the accordion item's user-provided content. */\n  // @ViewChild('body') _body: ElementRef<HTMLElement>;\n  @ViewChild('body', { static: false }) _body: ElementRef<HTMLElement>;\n\n  /** Portal holding the user's content. */\n  _portal: TemplatePortal;\n\n  /** ID for the associated header element. Used for a11y labelling. */\n  _headerId = `sds-accordion-item-header-${uniqueId++}`;\n\n  /** Stream of body animation done events. */\n  _bodyAnimationDone = new Subject<AnimationEvent>();\n\n  constructor(@Optional() @SkipSelf() @Inject(SDS_ACCORDION) accordion: SdsAccordionBase,\n    _changeDetectorRef: ChangeDetectorRef,\n    _uniqueSelectionDispatcher: UniqueSelectionDispatcher,\n    private _viewContainerRef: ViewContainerRef,\n    @Inject(DOCUMENT) _document: any,\n    @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {\n    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);\n    this.accordion = accordion;\n    this._document = _document;\n\n    // We need a Subject with distinctUntilChanged, because the `done` event\n    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084\n    this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {\n      return x.fromState === y.fromState && x.toState === y.toState;\n    })).subscribe(event => {\n      if (event.fromState !== 'void') {\n        if (event.toState === 'expanded') {\n          this.afterExpand.emit();\n        } else if (event.toState === 'collapsed') {\n          this.afterCollapse.emit();\n        }\n      }\n    });\n\n    console.warn(`This is a deprectaed version of accordion component, and will be removed in future versions. \n      Please switch to using usa-accordion from @gsa-sam/ngx-uswds (https://github.com/GSA/ngx-uswds)`);\n  }\n\n  /** Gets the expanded state string. */\n  _getExpandedState(): SdsAccordionItemState {\n    return this.expanded ? 'expanded' : 'collapsed';\n  }\n\n  ngAfterContentInit() {\n    if (this._lazyContent) {\n      // Render the content as soon as the accordion item becomes open.\n      this.opened.pipe(\n        startWith(null!),\n        filter(() => this.expanded && !this._portal),\n        take(1)\n      ).subscribe(() => {\n        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);\n      });\n    }\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    this._inputChanges.next(changes);\n  }\n\n  ngOnDestroy() {\n    super.ngOnDestroy();\n    this._bodyAnimationDone.complete();\n    this._inputChanges.complete();\n  }\n\n  /** Checks whether the accordion item's content contains the currently-focused element. */\n  _containsFocus(): boolean {\n    if (this._body) {\n      const focusedElement = this._document.activeElement;\n      const bodyElement = this._body.nativeElement;\n      return focusedElement === bodyElement || bodyElement.contains(focusedElement);\n    }\n\n    return false;\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'accordion',
            type: 'SdsAccordionBase',
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
          },
          {
            name: '_uniqueSelectionDispatcher',
            type: 'UniqueSelectionDispatcher',
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
          },
          {
            name: '_document',
            type: 'any',
          },
          {
            name: '_animationMode',
            type: 'string',
          },
        ],
        line: 83,
        jsdoctags: [
          {
            name: 'accordion',
            type: 'SdsAccordionBase',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_uniqueSelectionDispatcher',
            type: 'UniqueSelectionDispatcher',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_viewContainerRef',
            type: 'ViewContainerRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_document',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_animationMode',
            type: 'string',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      extends: 'CdkAccordionItem',
      implements: ['AfterContentInit', 'OnChanges', 'OnDestroy'],
      templateData:
        '<ng-content select="sds-accordion-item-header"></ng-content>\n<div\n  class="sam-accordion__panel"\n  role="region"\n  [@bodyExpansion]="_getExpandedState()"\n  (@bodyExpansion.done)="_bodyAnimationDone.next($event)"\n  [id]="id"\n  #body\n>\n  <div class="sds-accordion__panel-body">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n  </div>\n</div>\n',
    },
    {
      name: 'SdsAccordionItemHeaderComponent',
      id:
        'component-SdsAccordionItemHeaderComponent-83ae9453f6503be121c0955b6fcbe7bc',
      file:
        'libs/packages/components/src/lib/accordion/accordion-item-header.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      host: {},
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-accordion-item-header',
      styleUrls: ['./accordion-item-header.component.scss'],
      styles: [],
      templateUrl: ['./accordion-item-header.component.html'],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_parentChangeSubscription',
          defaultValue: 'Subscription.EMPTY',
          type: '',
          optional: false,
          description: '',
          line: 35,
          modifierKind: [112],
        },
        {
          name: 'accordionItem',
          type: 'SdsAccordionItemComponent',
          optional: false,
          description: '',
          line: 37,
          decorators: [
            {
              name: 'Host',
              stringifiedArguments: '',
            },
          ],
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: '_getAccordionItemId',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 80,
          description: '<p>Gets the accordion item id. </p>\n',
        },
        {
          name: '_isExpanded',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 75,
          description: '<p>Gets whether the accordion item is expanded. </p>\n',
        },
        {
          name: '_keydown',
          args: [
            {
              name: 'event',
              type: 'KeyboardEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 85,
          description:
            '<p>Handle keydown event calling to toggle() if appropriate. </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'KeyboardEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_toggle',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 70,
          description:
            '<p>Toggles the expanded state of the accordion item. </p>\n',
        },
        {
          name: 'focus',
          args: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: '"program"',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 110,
          description:
            '<p>Focuses the item header. Implemented as a part of <code>FocusableOption</code>.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 3158,
                end: 3164,
                flags: 0,
                escapedText: 'origin',
              },
              type: 'FocusOrigin',
              defaultValue: '"program"',
              tagName: {
                pos: 3152,
                end: 3157,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Origin of the action that triggered the focus.</p>\n',
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 114,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        'import { FocusMonitor, FocusableOption, FocusOrigin } from "@angular/cdk/a11y";\nimport { ENTER, SPACE, hasModifierKey } from "@angular/cdk/keycodes";\nimport {\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ElementRef,\n  Host,\n  OnDestroy,\n  ViewEncapsulation\n} from "@angular/core";\nimport { merge, Subscription } from "rxjs";\nimport { filter } from "rxjs/operators";\nimport { SdsAccordionItemComponent } from "./accordion-item.component";\n\n@Component({\n  selector: "sds-accordion-item-header",\n  templateUrl: "./accordion-item-header.component.html",\n  styleUrls:[\'./accordion-item-header.component.scss\'],\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: "sds-accordion__trigger",\n    role: "button",\n    "[attr.id]": "accordionItem._headerId",\n    "[attr.tabindex]": "disabled ? -1 : 0",\n    "[attr.aria-controls]": "_getAccordionItemId()",\n    "[attr.aria-expanded]": "_isExpanded()",\n    "[attr.aria-disabled]": "accordionItem.disabled",\n    "(click)": "_toggle()",\n    "(keydown)": "_keydown($event)"\n  }\n})\nexport class SdsAccordionItemHeaderComponent implements OnDestroy, FocusableOption {\n  private _parentChangeSubscription = Subscription.EMPTY;\n  constructor(\n    @Host() public accordionItem: SdsAccordionItemComponent,\n    private _element: ElementRef,\n    private _focusMonitor: FocusMonitor,\n    private _changeDetectorRef: ChangeDetectorRef\n  ) {\n\n    // Since the toggle state depends on an @Input on the accordion item, we\n    // need to subscribe and trigger change detection manually.\n    this._parentChangeSubscription = merge(\n      accordionItem.opened,\n      accordionItem.closed,\n      accordionItem._inputChanges.pipe(\n        filter(changes => !!(changes["disabled"]))\n      )\n    ).subscribe(() => this._changeDetectorRef.markForCheck());\n\n    _focusMonitor.monitor(_element).subscribe(origin => {\n      if (origin && accordionItem.accordion) {\n        accordionItem.accordion._handleHeaderFocus(this);\n      }\n    });\n\n  }\n\n  /**\n   * Whether the associated accordion item is disabled. \n   * Implemented as a part of `FocusableOption`.\n   */\n  get disabled() {\n    return this.accordionItem.disabled;\n  }\n\n  /** Toggles the expanded state of the accordion item. */\n  _toggle(): void {\n    this.accordionItem.toggle();\n  }\n\n  /** Gets whether the accordion item is expanded. */\n  _isExpanded(): boolean {\n    return this.accordionItem.expanded;\n  }\n\n  /** Gets the accordion item id. */\n  _getAccordionItemId(): string {\n    return this.accordionItem.id;\n  }\n\n  /** Handle keydown event calling to toggle() if appropriate. */\n  _keydown(event: KeyboardEvent) {\n    switch (event.keyCode) {\n      // Toggle for space and enter keys.\n      case SPACE:\n      case ENTER:\n        if (!hasModifierKey(event)) {\n          event.preventDefault();\n          this._toggle();\n        }\n\n        break;\n      default:\n        if (this.accordionItem.accordion) {\n          this.accordionItem.accordion._handleHeaderKeydown(event);\n        }\n\n        return;\n    }\n  }\n\n  /**\n   * Focuses the item header. Implemented as a part of `FocusableOption`.\n   * @param origin Origin of the action that triggered the focus.\n   * @docs-private\n   */\n  focus(origin: FocusOrigin = "program") {\n    this._focusMonitor.focusVia(this._element, origin);\n  }\n\n  ngOnDestroy() {\n    this._parentChangeSubscription.unsubscribe();\n    this._focusMonitor.stopMonitoring(this._element);\n  }\n}\n',
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './accordion-item-header.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'accordionItem',
            type: 'SdsAccordionItemComponent',
          },
          {
            name: '_element',
            type: 'ElementRef',
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
          },
        ],
        line: 35,
        jsdoctags: [
          {
            name: 'accordionItem',
            type: 'SdsAccordionItemComponent',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_element',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['OnDestroy', 'FocusableOption'],
      accessors: {
        disabled: {
          name: 'disabled',
          getSignature: {
            name: 'disabled',
            type: '',
            returnType: '',
            line: 65,
            description:
              '<p>Whether the associated accordion item is disabled. \nImplemented as a part of <code>FocusableOption</code>.</p>\n',
          },
        },
      },
      templateData:
        '<span class="sds-accordion__title" role="heading" aria-level="2">\n  <span class="sds-accordion__title-text">\n    <ng-content></ng-content>\n  </span>\n  <span class="sds-accordion__icon"></span>\n</span>\n',
    },
    {
      name: 'SdsActionsMenuComponent',
      id: 'component-SdsActionsMenuComponent-b29369330e17e32ba02c3425b2f75f08',
      file:
        'libs/packages/components/src/lib/actions-menu/actions-menu.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-actions-menu',
      styleUrls: [],
      styles: [],
      templateUrl: ['actions-menu.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'model',
          line: 8,
        },
        {
          name: 'size',
          line: 9,
          type: 'string',
        },
      ],
      outputsClass: [
        {
          name: 'clicks',
          defaultValue: 'new EventEmitter<string>()',
          line: 10,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'sds-actions-menu',\n  templateUrl: 'actions-menu.component.html'\n})\nexport class SdsActionsMenuComponent {\n  @Input() model;\n  @Input() size: string;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [],
        line: 10,
      },
      templateData:
        '<!-- Button that triggers menu (sdsMenuTriggerFor) -->\n<button class="sds-button sds-button--circular" [class.sds-button--primary]="model.trigger.type === \'primary\'"\n  [class.sds-button--shadow]="model.trigger.shadow" [class.sds-button--small]="size === \'sm\'"\n  [sdsMenuTriggerFor]="menu">\n  <usa-icon [icon]="\'three-dots-vertical\'" [size]="\'1x\'"></usa-icon>\n  <span class="usa-sr-only">Toggle Actions</span>\n</button>\n\n<!-- Menu content -->\n<sds-menu #menu="sdsMenu" [size]="size" xPosition="before" overlapTrigger="true">\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button *ngFor="let button of model.actions" (click)="clicks.emit(button.id)" sds-menu-item>\n    {{ button.text }}\n  </button>\n</sds-menu>\n',
    },
    {
      name: 'SDSAutocompleteComponent',
      id: 'component-SDSAutocompleteComponent-3b2ac237c65767f1253b1d3242fde9c0',
      file:
        'libs/packages/components/src/lib/autocomplete/autocomplete.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name: 'Autocomplete_VALUE_ACCESSOR',
        },
      ],
      selector: 'sds-autocomplete',
      styleUrls: ['./autocomplete.component.scss'],
      styles: [],
      templateUrl: ['./autocomplete.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'configuration',
          description: '<p>Configuration for the control</p>\n',
          line: 62,
          type: 'SDSAutocompletelConfiguration',
        },
        {
          name: 'essentialModelFields',
          defaultValue: 'false',
          description:
            '<p>Model contain only the primary key, primary value, and secondary value.</p>\n',
          line: 68,
          type: 'boolean',
        },
        {
          name: 'selectedItemTemplate',
          description:
            '<p>Allow to insert a customized template for selected items</p>\n',
          line: 49,
          type: 'TemplateRef<any>',
        },
        {
          name: 'service',
          description:
            '<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n',
          line: 74,
          type: 'SDSAutocompleteServiceInterface',
        },
        {
          name: 'suggestionTemplate',
          description:
            '<p>Allow to insert a customized template for suggestions results</p>\n',
          line: 44,
          type: 'TemplateRef<any>',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_subscriptions',
          defaultValue: 'new Subscription()',
          type: '',
          optional: false,
          description: '',
          line: 76,
        },
        {
          name: 'autocompleteSearch',
          type: 'SDSAutocompleteSearchComponent',
          optional: false,
          description: '',
          line: 78,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'autocompleteSearch', {static: true}",
            },
          ],
        },
        {
          name: 'disabled',
          type: 'boolean',
          optional: false,
          description: '',
          line: 56,
          modifierKind: [114],
        },
        {
          name: 'model',
          defaultValue: 'new SDSSelectedItemModel()',
          type: 'SDSSelectedItemModel',
          optional: false,
          description: '<p>The data model that has the selected item</p>\n',
          line: 54,
          modifierKind: [114],
        },
        {
          name: 'onChange',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 106,
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'addItem',
          args: [
            {
              name: 'item',
              type: 'object',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 168,
          jsdoctags: [
            {
              name: 'item',
              type: 'object',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'addItems',
          args: [
            {
              name: 'list',
              type: 'object[]',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 172,
          jsdoctags: [
            {
              name: 'list',
              type: 'object[]',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getModel',
          args: [],
          optional: false,
          returnType: '{}',
          typeParameters: [],
          line: 142,
        },
        {
          name: 'isSingleMode',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 161,
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 93,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 81,
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 147,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 152,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'setDisabledState',
          args: [
            {
              name: 'isDisabled',
              type: 'boolean',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 156,
          jsdoctags: [
            {
              name: 'isDisabled',
              type: 'boolean',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updateItems',
          args: [
            {
              name: '$event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 131,
          jsdoctags: [
            {
              name: '$event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updateModel',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 136,
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'value',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 111,
          jsdoctags: [
            {
              name: 'value',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [
        {
          name: 'focusout',
          args: [],
          argsDecorator: [],
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 101,
        },
      ],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  Input,\n  ViewChild,\n  TemplateRef,\n  ElementRef,\n  forwardRef,\n  HostListener,\n  ChangeDetectorRef,\n  ChangeDetectionStrategy,\n  OnInit,\n  OnDestroy\n} from '@angular/core';\n\nimport {\n  NG_VALUE_ACCESSOR,\n  ControlValueAccessor,\n  FormControl\n} from '@angular/forms';\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\nimport { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';\nimport { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';\nimport { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';\nimport { SDSAutocompleteSearchComponent } from '../autocomplete-search/autocomplete-search.component';\nimport { Subscription } from 'rxjs';\n\nconst Autocomplete_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n};\n\n@Component({\n  selector: 'sds-autocomplete',\n  templateUrl: './autocomplete.component.html',\n  styleUrls: ['./autocomplete.component.scss'],\n  providers: [Autocomplete_VALUE_ACCESSOR],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SDSAutocompleteComponent implements ControlValueAccessor, OnInit, OnDestroy {\n  /**\n   * Allow to insert a customized template for suggestions results\n   */\n  @Input() suggestionTemplate: TemplateRef<any>;\n\n  /**\n   * Allow to insert a customized template for selected items\n   */\n  @Input() selectedItemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel = new SDSSelectedItemModel();\n\n  public disabled: boolean;\n\n  /**\n   * Configuration for the control\n   */\n  @Input()\n  public configuration: SDSAutocompletelConfiguration;\n\n  /**\n   * Model contain only the primary key, primary value, and secondary value.\n   */\n  @Input()\n  public essentialModelFields: boolean = false;\n\n  /**\n   * Instance of the SamHiercarchicalServiceInterface provided\n   */\n  @Input()\n  public service: SDSAutocompleteServiceInterface;\n\n  _subscriptions = new Subscription();\n\n  @ViewChild('autocompleteSearch', { static: true }) autocompleteSearch: SDSAutocompleteSearchComponent;\n  constructor(private cd: ChangeDetectorRef) {  }\n\n  ngOnInit() {\n    if (!this.configuration.registerChanges$) {\n      return;\n    }\n\n    const changesSubscription = this.configuration.registerChanges$.subscribe(() => {\n      this.cd.detectChanges();\n    });\n\n    this._subscriptions.add(changesSubscription);\n  }\n\n  ngOnDestroy() {\n    this._subscriptions.unsubscribe();\n  }\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  @HostListener('focusout')\n  public onTouched = () => { };\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onChange = (_: any) => { };\n\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\n  // If there is a value we will just overwrite items\n  // If there is no value we reset the items array to be empty\n  writeValue(value: any) {\n    if (value instanceof SDSSelectedItemModel && value.items && value.items.length) {\n      this.model.items = [...value.items];\n      this.cd.markForCheck();\n    }\n    else if (value && value.length) {\n      this.model.items = value;\n      this.cd.markForCheck();\n    } else {\n      if (!this.model || !(this.model instanceof SDSSelectedItemModel)) {\n        this.model = new SDSSelectedItemModel();\n      }\n      this.model.items = value && value.items ? value.items : [];\n      this.cd.markForCheck();\n    }\n\n    this.autocompleteSearch.writeValue(this.model);\n  }\n\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\n  updateItems($event) {\n    this.updateModel();\n  }\n\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\n  updateModel() {\n    const model = this.getModel();\n    this.onChange(model);\n  }\n\n  // Helper method to return a new instance of an array that contains our items\n  getModel() {\n    return [...this.model.items];\n  }\n\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\n  registerOnChange(fn: any): void {\n    this.onChange = fn;\n  }\n\n  // ControlValueAccessor hook (not used)\n  registerOnTouched(fn: any) {\n    this.onTouched = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n    this.cd.detectChanges();\n  }\n\n  isSingleMode(): boolean {\n    if (this.configuration) {\n      return this.configuration.selectionMode === SelectionMode.SINGLE;\n    } else {\n      return false;\n    }\n  }\n  addItem(item: object) {\n    this.autocompleteSearch.selectItem(item);\n  }\n\n  addItems(list: object[]) {\n    list.forEach(item => {\n      this.addItem(item);\n    })\n  }\n}",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './autocomplete.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
          },
        ],
        line: 78,
        jsdoctags: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['ControlValueAccessor', 'OnInit', 'OnDestroy'],
      templateData:
        '<sds-search-autocomplete [disabled]="disabled" [essentialModelFields]="essentialModelFields" (ngModelChange)="updateItems($event)" #autocompleteSearch\n    [service]="service" [(ngModel)]="model" [configuration]="configuration" [itemTemplate]="suggestionTemplate">\n</sds-search-autocomplete>\n<sds-selected-result (ngModelChange)="updateItems($event)" [disabled]="disabled" *ngIf="!isSingleMode() && !configuration?.hideChips"\n    [(ngModel)]="model" [configuration]="configuration" [itemTemplate]="selectedItemTemplate"></sds-selected-result>\n',
    },
    {
      name: 'SDSAutocompleteSearchComponent',
      id:
        'component-SDSAutocompleteSearchComponent-3db0999ae5036f955c5c724ffd450731',
      file:
        'libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name: 'Autocomplete_Autocomplete_VALUE_ACCESSOR',
        },
      ],
      selector: 'sds-search-autocomplete',
      styleUrls: ['./autocomplete-search.component.scss'],
      styles: [],
      templateUrl: ['./autocomplete-search.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'configuration',
          description: '<p>Configuration for the Autocomplete control</p>\n',
          line: 64,
          type: 'SDSAutocompleteSearchConfiguration',
        },
        {
          name: 'disabled',
          line: 142,
          type: 'boolean',
        },
        {
          name: 'essentialModelFields',
          defaultValue: 'false',
          description:
            '<p>Model contain only the primary key, primary value, and secondary value.</p>\n',
          line: 58,
          type: 'boolean',
        },
        {
          name: 'inputReadOnly',
          defaultValue: 'false',
          description: '<p>To make input readonly</p>\n',
          line: 129,
        },
        {
          name: 'itemTemplate',
          description:
            '<p>Allow to insert a customized template for suggestions to use</p>\n',
          line: 48,
          type: 'TemplateRef<any>',
        },
        {
          name: 'service',
          description:
            '<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n',
          line: 70,
          type: 'SDSAutocompleteServiceInterface',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'highlightedChildIndex',
          defaultValue: '0',
          type: 'number',
          optional: false,
          description: '<p>selected child index</p>\n',
          line: 95,
          modifierKind: [114],
        },
        {
          name: 'highlightedIndex',
          defaultValue: '0',
          type: 'number',
          optional: false,
          description: '<p>selected index</p>\n',
          line: 90,
          modifierKind: [114],
        },
        {
          name: 'highlightedItem',
          type: 'object',
          optional: false,
          description: '<p>highlighted object in drop down</p>\n',
          line: 100,
          modifierKind: [112],
        },
        {
          name: 'HighlightedPropertyName',
          defaultValue: "'highlighted'",
          type: 'string',
          optional: false,
          description:
            '<p>Proprty being set on the object is highlighted</p>\n',
          line: 110,
          modifierKind: [112],
        },
        {
          name: 'index',
          defaultValue: '0',
          type: 'number',
          optional: false,
          description: '',
          line: 148,
          modifierKind: [112],
        },
        {
          name: 'input',
          type: 'ElementRef',
          optional: false,
          description: '<p>input control</p>\n',
          line: 43,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'input'",
            },
          ],
        },
        {
          name: 'inputValue',
          defaultValue: "''",
          type: 'string',
          optional: false,
          description: '<p>value of the input field</p>\n',
          line: 105,
          modifierKind: [114],
        },
        {
          name: 'maxResults',
          type: 'number',
          optional: false,
          description: '<p>max number of results to be shown</p>\n',
          line: 85,
          modifierKind: [112],
        },
        {
          name: 'model',
          type: 'SDSSelectedItemModel',
          optional: false,
          description: '<p>The data model that has the selected item</p>\n',
          line: 53,
          modifierKind: [114],
        },
        {
          name: 'onTouchedCallback',
          defaultValue: '() => {...}',
          type: 'function',
          optional: false,
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 134,
          modifierKind: [114],
        },
        {
          name: 'propogateChange',
          defaultValue: '() => {...}',
          type: 'function',
          optional: false,
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 139,
          modifierKind: [114],
        },
        {
          name: 'results',
          type: 'object[]',
          optional: false,
          description: '<p>result set to be rendered</p>\n',
          line: 80,
        },
        {
          name: 'resultsAvailableMessage',
          defaultValue:
            "' results available. Use up and down arrows\\\n  to scroll through results. Hit enter to select.'",
          type: 'string',
          optional: false,
          description: '',
          line: 144,
          modifierKind: [112],
        },
        {
          name: 'resultsListElement',
          type: 'ElementRef',
          optional: false,
          description: '<p>Ul list of elements</p>\n',
          line: 38,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'resultsList'",
            },
          ],
        },
        {
          name: 'searchString',
          defaultValue: 'null',
          type: 'string',
          optional: false,
          description: '<p>Search string</p>\n',
          line: 117,
          modifierKind: [112],
        },
        {
          name: 'showLoad',
          defaultValue: 'true',
          type: 'boolean',
          optional: false,
          description: '',
          line: 112,
          modifierKind: [114],
        },
        {
          name: 'showResults',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '<p>Determines if the dropdown should be shown</p>\n',
          line: 181,
          modifierKind: [114],
        },
        {
          name: 'srOnlyText',
          type: 'string',
          optional: false,
          description:
            '<p>Message announced by screen readers when\nautocomplete results are updated or new item\nis highlighted</p>\n',
          line: 124,
          modifierKind: [114],
        },
        {
          name: 'timeoutNumber',
          type: 'number',
          optional: false,
          description:
            '<p>Timer id for the timer awaiting the service call for more typeing</p>\n',
          line: 75,
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: 'addListener',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 621,
        },
        {
          name: 'addResult',
          args: [
            {
              name: 'item',
              type: 'object',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 562,
          description: '<p>adds a single item to the list</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 15461,
                end: 15465,
                flags: 0,
                escapedText: 'item',
              },
              type: 'object',
              tagName: {
                pos: 15455,
                end: 15460,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'addScreenReaderMessage',
          args: [
            {
              name: 'message',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 599,
          description: '<p>Adds message to be read by screen reader</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 16530,
                end: 16537,
                flags: 0,
                escapedText: 'message',
              },
              type: 'string',
              tagName: {
                pos: 16524,
                end: 16529,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'checkForFocus',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 202,
          description: '',
          jsdoctags: [
            {
              name: {
                pos: 4800,
                end: 4805,
                flags: 0,
                escapedText: 'event',
              },
              type: '',
              tagName: {
                pos: 4794,
                end: 4799,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'checkItemSelected',
          args: [
            {
              name: 'result',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 474,
          description: '<p>return Item is already selected or not</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 12556,
                end: 12562,
                flags: 0,
                escapedText: 'result',
              },
              type: 'any',
              tagName: {
                pos: 12550,
                end: 12555,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'clearAndHideResults',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 355,
          description:
            '<p>clears the results and closes result drop down</p>\n',
          modifierKind: [112],
        },
        {
          name: 'clearInput',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 186,
          description: '<p>Clears the input fields and value</p>\n',
          modifierKind: [114],
        },
        {
          name: 'createFreeTextItem',
          args: [],
          optional: false,
          returnType: '{ type: string; }',
          typeParameters: [],
          line: 464,
          modifierKind: [112],
        },
        {
          name: 'focusRemoved',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 210,
          description: '',
          modifierKind: [112],
        },
        {
          name: 'getAdditionalResults',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 545,
          description:
            '<p>gets more results based when scrolling and adds the items</p>\n',
          modifierKind: [112],
        },
        {
          name: 'getClass',
          args: [],
          optional: false,
          returnType: '"hide-cursor" | ""',
          typeParameters: [],
          line: 646,
        },
        {
          name: 'getFlatElements',
          args: [],
          optional: false,
          returnType: '{}',
          typeParameters: [],
          line: 365,
          modifierKind: [114],
        },
        {
          name: 'getObjectValue',
          args: [
            {
              name: 'object',
              type: 'Object',
            },
            {
              name: 'propertyFields',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 156,
          description:
            '<p>Gets the string value from the specifed properties of an object</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 3566,
                end: 3572,
                flags: 0,
                escapedText: 'object',
              },
              type: 'Object',
              tagName: {
                pos: 3560,
                end: 3565,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 3585,
                end: 3599,
                flags: 0,
                escapedText: 'propertyFields',
              },
              type: 'string',
              tagName: {
                pos: 3579,
                end: 3584,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>comma seperated list with periods depth of object</p>\n',
            },
          ],
        },
        {
          name: 'getResults',
          args: [
            {
              name: 'searchString',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 486,
          description: '<p>gets the inital results</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 12884,
                end: 12896,
                flags: 0,
                escapedText: 'searchString',
              },
              type: 'string',
              tagName: {
                pos: 12878,
                end: 12883,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'inputFocusHandler',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 256,
          description:
            '<p>Event method used when focus is gained to the input</p>\n',
        },
        {
          name: 'isAutocompleteWithinModal',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 271,
        },
        {
          name: 'isClearIconVisible',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 242,
        },
        {
          name: 'matchPastSearchString',
          args: [
            {
              name: 'searchString',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 524,
          description:
            '<p>Checks if the new search string matches the old search string</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 14280,
                end: 14292,
                flags: 0,
                escapedText: 'searchString',
              },
              type: 'string',
              tagName: {
                pos: 14274,
                end: 14279,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'onArrowGroupDown',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 408,
          description: '<p>handles the arrow down key event</p>\n',
          modifierKind: [112],
        },
        {
          name: 'onArrowGroupUp',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 422,
          description: '<p>handles the arrow up key event</p>\n',
          modifierKind: [112],
        },
        {
          name: 'onKeydown',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 279,
          description: '<p>Key event</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 6732,
                end: 6737,
                flags: 0,
                escapedText: 'event',
              },
              type: '',
              tagName: {
                pos: 6726,
                end: 6731,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'onkeypress',
          args: [
            {
              name: 'ev',
              type: '',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 227,
          jsdoctags: [
            {
              name: 'ev',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'onScroll',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 530,
          description:
            '<p>Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)</p>\n',
        },
        {
          name: 'openOptions',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 361,
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 650,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 654,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'scrollToSelectedItem',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 387,
          description:
            '<p>When paging up and down with arrow key it sets the highlighted item into view</p>\n',
          modifierKind: [112],
        },
        {
          name: 'selectItem',
          args: [
            {
              name: 'item',
              type: 'object',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 322,
          description:
            '<p>selects the item adding it to the model and closes the results</p>\n',
          modifierKind: [114],
          jsdoctags: [
            {
              name: {
                pos: 8157,
                end: 8161,
                flags: 0,
                escapedText: 'item',
              },
              type: 'object',
              tagName: {
                pos: 8151,
                end: 8156,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'setDisabledState',
          args: [
            {
              name: 'isDisabled',
              type: 'boolean',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 658,
          jsdoctags: [
            {
              name: 'isDisabled',
              type: 'boolean',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'setHighlightedItem',
          args: [
            {
              name: 'item',
              type: 'Object',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 571,
          description:
            '<p>Sets the highlighted item by keyboard or mouseover</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 15665,
                end: 15669,
                flags: 0,
                escapedText: 'item',
              },
              type: 'Object',
              tagName: {
                pos: 15659,
                end: 15664,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'showFreeText',
          args: [],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 432,
        },
        {
          name: 'textChange',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 230,
          jsdoctags: [
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'obj',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 603,
          jsdoctags: [
            {
              name: 'obj',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  Input,\n  ViewChild,\n  TemplateRef,\n  ElementRef,\n  forwardRef,\n  ChangeDetectorRef,\n} from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nimport { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';\nimport { KeyHelper, KEYS } from '../key-helper/key-helper';\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\nimport {\n  SelectionMode,\n  SDSSelectedItemModelHelper,\n} from '../selected-result/models/sds-selected-item-model-helper';\n\nimport { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';\n\nconst Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true,\n};\n\n@Component({\n  selector: 'sds-search-autocomplete',\n  templateUrl: './autocomplete-search.component.html',\n  styleUrls: ['./autocomplete-search.component.scss'],\n  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR],\n})\nexport class SDSAutocompleteSearchComponent implements ControlValueAccessor {\n  constructor(private _changeDetectorRef: ChangeDetectorRef) {}\n  /**\n   * Ul list of elements\n   */\n  @ViewChild('resultsList') resultsListElement: ElementRef;\n\n  /**\n   * input control\n   */\n  @ViewChild('input') input: ElementRef;\n\n  /**\n   * Allow to insert a customized template for suggestions to use\n   */\n  @Input() itemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel;\n\n  /**\n   * Model contain only the primary key, primary value, and secondary value.\n   */\n  @Input() public essentialModelFields: boolean = false;\n\n  /**\n   * Configuration for the Autocomplete control\n   */\n  @Input()\n  public configuration: SDSAutocompleteSearchConfiguration;\n\n  /**\n   * Instance of the SamHiercarchicalServiceInterface provided\n   */\n  @Input()\n  public service: SDSAutocompleteServiceInterface;\n\n  /**\n   * Timer id for the timer awaiting the service call for more typeing\n   */\n  private timeoutNumber: number;\n\n  /**\n   *  result set to be rendered\n   */\n  results: object[];\n\n  /**\n   * max number of results to be shown\n   */\n  private maxResults: number;\n\n  /**\n   * selected index\n   */\n  public highlightedIndex: number = 0;\n\n  /**\n   * selected child index\n   */\n  public highlightedChildIndex = 0;\n\n  /**\n   * highlighted object in drop down\n   */\n  private highlightedItem: object;\n\n  /**\n   * value of the input field\n   */\n  public inputValue: string = '';\n\n  /**\n   * Proprty being set on the object is highlighted\n   */\n  private HighlightedPropertyName = 'highlighted';\n\n  public showLoad: boolean = true;\n\n  /**\n   * Search string\n   */\n  private searchString: string = null;\n\n  /**\n   * Message announced by screen readers when\n   * autocomplete results are updated or new item\n   * is highlighted\n   */\n  public srOnlyText: string;\n\n  /**\n   * To make input readonly\n   */\n  @Input() public inputReadOnly = false;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onTouchedCallback: () => void = () => null;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public propogateChange: (_: any) => void = (_: any) => null;\n\n  @Input()\n  public disabled: boolean;\n\n  private resultsAvailableMessage: string =\n    ' results available. Use up and down arrows\\\n  to scroll through results. Hit enter to select.';\n\n  private index = 0;\n\n  /**\n   * Gets the string value from the specifed properties of an object\n   * @param object\n   * @param propertyFields comma seperated list with periods depth of object\n   */\n\n  getObjectValue(object: Object, propertyFields: string): string {\n    let value = '';\n    let current = object;\n    let fieldSplit = propertyFields.split(',');\n    for (let i = 0; i < fieldSplit.length; i++) {\n      let fieldValue = fieldSplit[i];\n      let fieldPartSplit = fieldValue.split('.');\n      for (let j = 0; j < fieldPartSplit.length; j++) {\n        let fieldCheckValue = fieldPartSplit[j];\n        if (current) {\n          current = current[fieldCheckValue];\n        }\n      }\n\n      if (current) {\n        value += current.toString() + ' ';\n      }\n      current = object;\n    }\n    return value.trim();\n  }\n\n  /**\n   * Determines if the dropdown should be shown\n   */\n  public showResults = false;\n\n  /**\n   * Clears the input fields and value\n   */\n  public clearInput(): void {\n    this.inputValue = '';\n    if (this.configuration.selectionMode === SelectionMode.SINGLE) {\n      if (this.model.items.length > 0) {\n        SDSSelectedItemModelHelper.clearItems(this.model.items);\n        this.propogateChange(this.model);\n      }\n    }\n    this.onTouchedCallback();\n    this.clearAndHideResults();\n  }\n\n  /**\n   *\n   * @param event\n   */\n  checkForFocus(event): void {\n    this.focusRemoved();\n    this.showResults = false;\n  }\n\n  /**\n   *\n   */\n  private focusRemoved() {\n    if (this.configuration) {\n      if (this.configuration.selectionMode === SelectionMode.SINGLE) {\n        if (this.model.items.length > 0) {\n          this.inputValue = this.getObjectValue(\n            this.model.items[0],\n            this.configuration.primaryTextField\n          );\n        }\n      } else {\n        this.inputValue = '';\n      }\n    } else {\n      this.inputValue = '';\n    }\n  }\n\n  onkeypress(ev) {\n    return this.configuration.inputReadOnly ? false : true;\n  }\n  textChange(event) {\n    if (!this.configuration.isTagModeEnabled) {\n      // ie 11 placeholders will incorrectly trigger input events (known bug)\n      // if input isn't active element then don't do anything\n      if (event.target != document.activeElement) {\n        event.preventDefault();\n        return;\n      }\n      const searchString = event.target.value || '';\n      this.getResults(searchString);\n    }\n  }\n  isClearIconVisible(): boolean {\n    if (\n      this.model &&\n      this.model.items.length > 0 &&\n      this.configuration.hideCloseIcon\n    )\n      return false;\n\n    return this.inputValue && !this.disabled;\n  }\n  //\n  /**\n   * Event method used when focus is gained to the input\n   */\n  inputFocusHandler(): void {\n    if (!this.configuration.isTagModeEnabled) {\n      if (this.configuration.focusInSearch) {\n        this.highlightedIndex = 0;\n        this.highlightedChildIndex = this.configuration.isSelectableGroup\n          ? 0\n          : null;\n        this.getResults(this.inputValue || '');\n      }\n      this.onTouchedCallback();\n      if (this.isAutocompleteWithinModal()) {\n        this.addListener();\n      }\n    }\n  }\n  isAutocompleteWithinModal() {\n    return document.getElementsByClassName('sds-dialog-content').length > 0;\n  }\n\n  /**\n   * Key event\n   * @param event\n   */\n  onKeydown(event): void {\n    if (KeyHelper.is(KEYS.ALT, event)) {\n      event.preventDefault();\n      this.inputFocusHandler();\n    }\n    if (KeyHelper.is(KEYS.TAB, event)) {\n      return;\n    } else if (KeyHelper.is(KEYS.BACKSPACE, event)) {\n      if (this.configuration.inputReadOnly) {\n        event.preventDefault();\n      }\n    } else if (KeyHelper.is(KEYS.DOWN, event)) {\n      event.preventDefault();\n      this.onArrowGroupDown();\n    } else if (KeyHelper.is(KEYS.UP, event)) {\n      event.preventDefault();\n      this.onArrowGroupUp();\n    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {\n      if (this.configuration.isTagModeEnabled && this.inputValue.length > 0) {\n        const val = this.createFreeTextItem();\n        this.selectItem(val);\n      } else {\n        this.selectItem(this.results[this.highlightedIndex]);\n      }\n    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {\n      if (this.configuration.isFreeTextEnabled && this.inputValue.length > 0) {\n        const val = this.createFreeTextItem();\n        this.selectItem(val);\n      }\n    } else if (KeyHelper.is(KEYS.ESC, event)) {\n      if (this.showResults) {\n        this.clearAndHideResults();\n        if (event.stopPropagation) {\n          event.stopPropagation();\n        }\n      }\n    }\n  }\n\n  /**\n   * selects the item adding it to the model and closes the results\n   * @param item\n   */\n  public selectItem(item: object): void {\n    let filterItem = {};\n    if (this.essentialModelFields) {\n      filterItem[this.configuration.primaryKeyField] =\n        item[this.configuration.primaryKeyField];\n      filterItem[this.configuration.primaryTextField] =\n        item[this.configuration.primaryTextField];\n      if (this.configuration.secondaryTextField) {\n        filterItem[this.configuration.secondaryTextField] =\n          item[this.configuration.secondaryTextField];\n      }\n    } else {\n      filterItem = item;\n    }\n    SDSSelectedItemModelHelper.addItem(\n      filterItem,\n      this.configuration.primaryKeyField,\n      this.configuration.selectionMode,\n      this.model\n    );\n    this.propogateChange(this.model);\n    let message = this.getObjectValue(\n      item,\n      this.configuration.primaryTextField\n    );\n    this.inputValue = message;\n    this.focusRemoved();\n    this.showResults = false;\n  }\n\n  /**\n   *  clears the results and closes result drop down\n   */\n  private clearAndHideResults(): void {\n    this.results = [];\n    this.showResults = false;\n    this.focusRemoved();\n  }\n\n  openOptions() {\n    this.input.nativeElement.focus();\n  }\n\n  public getFlatElements() {\n    const results = this.results;\n    const flat = [];\n    const flatten = (array: any) => {\n      for (let i in array) {\n        const item = array[i];\n        flat.push(item);\n        if (\n          item[this.configuration.groupByChild] &&\n          item[this.configuration.groupByChild].length\n        ) {\n          flatten(item[this.configuration.groupByChild]);\n        }\n      }\n    };\n    flatten(results);\n    return flat;\n  }\n\n  /**\n   * When paging up and down with arrow key it sets the highlighted item into view\n   */\n  private scrollToSelectedItem() {\n    if (this.highlightedIndex >= 0) {\n      this._changeDetectorRef.detectChanges();\n      const dom = this.resultsListElement.nativeElement;\n      const selectedChild = dom.querySelector(\n        '.sds-autocomplete__item--highlighted'\n      );\n      if (selectedChild) {\n        // Manually set scroll top rather than invoke scroll functions for browser compatibility\n        const containerCenter =\n          this.resultsListElement.nativeElement.getBoundingClientRect().height /\n          2;\n        this.resultsListElement.nativeElement.scrollTop =\n          selectedChild.offsetTop - containerCenter;\n      }\n    }\n  }\n\n  /**\n   *  handles the arrow down key event\n   */\n  private onArrowGroupDown(): void {\n    if (this.results && this.results.length > 0) {\n      const flat = this.getFlatElements();\n      if (this.highlightedIndex < flat.length - 1) {\n        this.highlightedIndex++;\n      }\n      this.setHighlightedItem(flat[this.highlightedIndex]);\n      this.scrollToSelectedItem();\n    }\n  }\n\n  /**\n   *  handles the arrow up key event\n   */\n  private onArrowGroupUp(): void {\n    if (this.results && this.results.length > 0) {\n      const flat = this.getFlatElements();\n      if (this.highlightedIndex != 0) {\n        this.highlightedIndex--;\n      }\n      this.setHighlightedItem(flat[this.highlightedIndex]);\n      this.scrollToSelectedItem();\n    }\n  }\n  showFreeText() {\n    if (this.configuration.isFreeTextEnabled) {\n      if (this.inputValue) {\n        if (this.inputValue.length !== 0) {\n          let foundItem = false;\n          if (this.results) {\n            for (var i = 0; i < this.results.length && !foundItem; i++) {\n              let item = this.results[i];\n              foundItem =\n                item[this.configuration.primaryTextField] === this.inputValue;\n            }\n          }\n          if (this.model.items.length > 0 && !foundItem) {\n            for (var i = 0; i < this.model.items.length && !foundItem; i++) {\n              let item = this.model.items[i];\n              foundItem =\n                item[this.configuration.primaryTextField] === this.inputValue;\n            }\n          }\n\n          return !foundItem;\n        } else {\n          return false;\n        }\n      } else {\n        return false;\n      }\n    } else {\n      return this.configuration.isFreeTextEnabled;\n    }\n  }\n\n  private createFreeTextItem() {\n    let item = { type: 'custom' };\n    item[this.configuration.primaryTextField] = this.inputValue;\n    item[this.configuration.primaryKeyField] = this.inputValue;\n    return item;\n  }\n  /**\n   *  return Item is already selected or not\n   * @param result\n   */\n  checkItemSelected(result: any) {\n    const selectedItem = this.model.items.filter(\n      (item) =>\n        item[this.configuration.primaryKeyField] ===\n        result[this.configuration.primaryKeyField]\n    );\n    return selectedItem.length > 0 ? true : false;\n  }\n  /**\n   *  gets the inital results\n   * @param searchString\n   */\n  private getResults(searchString: string): void {\n    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {\n      if (\n        !this.matchPastSearchString(searchString) ||\n        (this.matchPastSearchString(searchString) && !this.showResults) ||\n        this.matchPastSearchString('')\n      ) {\n        this.searchString = searchString;\n        window.clearTimeout(this.timeoutNumber);\n        this.timeoutNumber = window.setTimeout(() => {\n          this.showLoad = true;\n          this.service.getDataByText(0, searchString).subscribe((result) => {\n            this.results = result.items;\n            this.showLoad = false;\n            this.maxResults = result.totalItems;\n\n            this.highlightedIndex =\n              this.configuration.isFreeTextEnabled || this.maxResults == 0\n                ? -1\n                : 0;\n            if (!this.configuration.isFreeTextEnabled) {\n              this.setHighlightedItem(this.results[this.highlightedIndex]);\n            }\n            this.showResults = true;\n            this.addScreenReaderMessage(\n              this.maxResults + ' ' + this.resultsAvailableMessage\n            );\n            this._changeDetectorRef.markForCheck();\n          });\n        }, this.configuration.debounceTime);\n      }\n    }\n  }\n\n  /**\n   * Checks if the new search string matches the old search string\n   * @param searchString\n   */\n  private matchPastSearchString(searchString: string) {\n    return this.searchString === searchString;\n  }\n  /**\n   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)\n   */\n  onScroll() {\n    if (this.maxResults > this.results.length) {\n      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;\n      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;\n      let scrollAreaMaxHeight = this.resultsListElement.nativeElement\n        .scrollHeight;\n      if (scrollTopPos + scrollAreaHeight * 2 >= scrollAreaMaxHeight) {\n        this.getAdditionalResults();\n      }\n    }\n  }\n\n  /**\n   * gets more results based when scrolling and adds the items\n   */\n  private getAdditionalResults() {\n    this.showLoad = true;\n    this.service\n      .getDataByText(this.results.length, this.searchString)\n      .subscribe((result) => {\n        for (let i = 0; i < result.items.length; i++) {\n          this.addResult(result.items[i]);\n        }\n        this.showLoad = false;\n        this.maxResults = result.totalItems;\n      });\n  }\n\n  /**\n   * adds a single item to the list\n   * @param item\n   */\n  private addResult(item: object) {\n    //add check to make sure item does not exist\n    this.results.push(item);\n  }\n\n  /**\n   * Sets the highlighted item by keyboard or mouseover\n   * @param item\n   */\n  private setHighlightedItem(item: Object): void {\n    if (this.results && this.results.length > 0) {\n      if (this.highlightedItem) {\n        this.highlightedItem[this.HighlightedPropertyName] = false;\n      }\n      let message = '';\n      if (item) {\n        this.highlightedItem = item;\n        this.highlightedItem[this.HighlightedPropertyName] = true;\n        message = item[this.configuration.primaryTextField];\n        if (\n          this.configuration.secondaryTextField &&\n          item[this.configuration.secondaryTextField]\n        ) {\n          message += ': ' + item[this.configuration.secondaryTextField];\n        }\n      } else {\n        this.highlightedItem = undefined;\n        message = 'No item selected';\n      }\n      this.addScreenReaderMessage(message);\n    }\n  }\n\n  /**\n   * Adds message to be read by screen reader\n   * @param message\n   */\n  private addScreenReaderMessage(message: string) {\n    this.srOnlyText = message;\n  }\n\n  writeValue(obj: any): void {\n    if (obj instanceof SDSSelectedItemModel) {\n      this.model = obj as SDSSelectedItemModel;\n      this._changeDetectorRef.markForCheck();\n      if (this.model.items.length === 0) {\n        this.inputValue = '';\n      } else if (\n        this.configuration &&\n        this.configuration.selectionMode === SelectionMode.SINGLE\n      ) {\n        this.inputValue = this.getObjectValue(\n          this.model.items[0],\n          this.configuration.primaryTextField\n        );\n      }\n    }\n  }\n\n  addListener() {\n    const autocompleteElement = document.getElementById(this.configuration.id);\n    const dialogContainer = document.getElementsByClassName(\n      'sds-dialog-content'\n    );\n    const resultsDropdown = document.getElementsByClassName('sds-autocomplete');\n\n    let inputHeight = autocompleteElement.getBoundingClientRect().height;\n    let modalHeight = dialogContainer[0].getBoundingClientRect().height;\n    dialogContainer[0].addEventListener('scroll', function (event) {\n      if (resultsDropdown.length > 0) {\n        let inputTopValue = autocompleteElement.getBoundingClientRect().top;\n        let inputBottomValue = modalHeight - inputTopValue;\n        let listHeight = resultsDropdown[0].getBoundingClientRect().height;\n        let element = resultsDropdown[0].parentElement;\n        if (element && element.style.bottom) {\n          element.style.bottom =\n            inputBottomValue + listHeight - inputHeight + 30 + 'px';\n        } else {\n          element.style.top = inputTopValue + inputHeight + 'px';\n        }\n      }\n    });\n  }\n\n  getClass() {\n    return this.configuration.inputReadOnly ? 'hide-cursor' : '';\n  }\n\n  registerOnChange(fn: any): void {\n    this.propogateChange = fn;\n  }\n\n  registerOnTouched(fn: any): void {\n    this.onTouchedCallback = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data:
            '.grayToLightBackgroundGradiate {\n  background: linear-gradient(to right, #c4c4c4, #f7f7f7);\n  background-size: 400% 400%;\n  height: 10px;\n  padding: 2.5px 0 2.5px 0;\n  text-align: center;\n  color: #888888;\n  font-size: 15px;\n  font-weight: bold;\n  margin: 7px 10px 0 10px;\n  -webkit-animation: gradiantShiftGray 5s ease infinite;\n  -moz-animation: gradiantShiftGray 5s ease infinite;\n  animation: gradiantShiftGray 5s ease infinite;\n\n  @-webkit-keyframes gradiantShiftGray {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  @-moz-keyframes gradiantShiftGray {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  @keyframes gradiantShiftGray {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n}\n\n.lightToGrayBackgroundGradiate {\n  background: linear-gradient(to right, #f7f7f7, #c4c4c4);\n  background-size: 400% 400%;\n  height: 15px;\n  padding: 2.5px 0 2.5px 0;\n  text-align: center;\n  color: #888888;\n  font-size: 15px;\n  font-weight: bold;\n  margin: 10px 10px 0 10px;\n  -webkit-animation: gradiantShift 5s ease infinite;\n  -moz-animation: gradiantShift 5s ease infinite;\n  animation: gradiantShift 5s ease infinite;\n\n  @-webkit-keyframes gradiantShift {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  @-moz-keyframes gradiantShift {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  @keyframes gradiantShift {\n    0% {\n      background-position: 0% 50%;\n    }\n\n    50% {\n      background-position: 100% 50%;\n    }\n\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n}\n\n.autoLoading {\n  height: 60px;\n}\n\n.hide-cursor {\n  caret-color: transparent;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n',
          styleUrl: './autocomplete-search.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
          },
        ],
        line: 33,
        jsdoctags: [
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['ControlValueAccessor'],
      templateData:
        '<div sds-click-outside (clickOutside)="checkForFocus($event)" sds-tab-outside (tabOutside)="checkForFocus($event)">\n  <div class="maxw-mobile-lg position-relative">\n    <div [attr.id]="configuration.id + \'-container\'">\n      <input role="combobox" [attr.aria-expanded]="showResults" cdkOverlayOrigin #trigger="cdkOverlayOrigin"\n        [attr.aria-owns]="showResults ? configuration.id + \'-listbox\' : \'\'" aria-haspopup="listbox"\n        [disabled]="disabled" (keypress)="onkeypress($event)" (input)="textChange($event)"\n        class="usa-input padding-right-3" [ngClass]="getClass()" #input\n        [attr.aria-label]="configuration.ariaLabelText ? configuration.ariaLabelText : configuration.labelText"\n        [attr.id]="configuration.id" type="text" (focus)="inputFocusHandler()" (keydown)="onKeydown($event)"\n        aria-autocomplete="list" [(ngModel)]="inputValue" [attr.placeholder]="configuration.autocompletePlaceHolderText"\n        [attr.aria-activedescendant]="\n          showResults\n            ? configuration.id + \'-resultItem-\' + highlightedIndex\n            : \'\'\n        " [attr.aria-controls]="\n          showResults ? configuration.id + \'-listbox\' : \'\'\n        " autocomplete="off" />\n    </div>\n    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="showResults"\n      [cdkConnectedOverlayDisableClose]="true" [cdkConnectedOverlayMinWidth]="input.offsetWidth">\n      <ul #resultsList [attr.id]="configuration.id + \'-listbox\'" role="listbox" class="usa-list \n        usa-list--unstyled sds-autocomplete" (scroll)="onScroll()">\n        <ng-container *ngIf="results && results.length">\n          <li [attr.id]="configuration.id + \'-resultItem-\' + i" role="option" [ngClass]="{\n              \'sds-autocomplete__group\': configuration.isGroupingEnabled,\n              \'sds-autocomplete__item\': !configuration.isGroupingEnabled,\n              \'sds-autocomplete__item--highlighted\':\n                result[\'highlighted\'] && !configuration.isGroupingEnabled,\n              \'sds-autocomplete__item--selected\':\n                checkItemSelected(result) && !configuration.isGroupingEnabled\n            }" *ngFor="let result of results; let i = index"\n            (click)="!configuration.isSelectableGroup ? \'\' : selectItem(result)">\n            <ng-container *ngIf="itemTemplate" [ngTemplateOutlet]="itemTemplate"\n              [ngTemplateOutletContext]="{ $implicit: result }">\n            </ng-container>\n            <ng-container *ngIf="!itemTemplate">\n              <div [ngClass]="{\n                  \'sds-autocomplete__item\': configuration.isGroupingEnabled,\n                  \'sds-autocomplete__item--highlighted\':\n                    configuration.isGroupingEnabled && result[\'highlighted\'],\n                  \'sds-autocomplete__item--disabled\':\n                    !configuration.isSelectableGroup &&\n                    configuration.isGroupingEnabled,\n                  \'sds-autocomplete__item--selected\':\n                    checkItemSelected(result) && configuration.isGroupingEnabled\n                }">\n                <div [ngClass]="{\n                    \'text-semibold\': configuration.secondaryTextField\n                  }">\n                  {{ getObjectValue(result, configuration.primaryTextField) }}\n                </div>\n                <ng-container *ngIf="\n                    configuration.secondaryTextField &&\n                    result[configuration.secondaryTextField]\n                  ">\n                  <div>{{ result[configuration.secondaryTextField] }}</div>\n                </ng-container>\n              </div>\n\n              <ul class="usa-list usa-list--unstyled" #childrenList\n                [attr.id]="configuration.id + \'-childrenlistbox-\' + i" role="listbox">\n                <li [attr.id]="configuration.id + \'-childItem-\' + j" role="option" [ngClass]="{\n                    \'sds-autocomplete__group\':\n                      child[configuration.groupByChild]?.length,\n                    \'sds-autocomplete__item\': !child[configuration.groupByChild]\n                      ?.length,\n                    \'sds-autocomplete__item--highlighted\':\n                      child[\'highlighted\'] &&\n                      !child[configuration.groupByChild]?.length,\n                    \'sds-autocomplete__item--selected\':\n                      checkItemSelected(child) &&\n                      !child[configuration.groupByChild]?.length\n                  }" *ngFor="\n                    let child of result[configuration.groupByChild];\n                    let j = index\n                  " (click)="selectItem(child)">\n                  <div [ngClass]="{\n                      \'sds-autocomplete__item\':\n                        child[configuration.groupByChild]?.length,\n                      \'sds-autocomplete__item--highlighted\':\n                        child[configuration.groupByChild]?.length &&\n                        child[\'highlighted\'],\n                      \'sds-autocomplete__item--disabled\':\n                        !configuration.isSelectableGroup &&\n                        child[configuration.groupByChild]?.length,\n                      \'sds-autocomplete__item--selected\':\n                        checkItemSelected(child) &&\n                        child[configuration.groupByChild]?.length\n                    }">\n                    <div [ngClass]="{\n                        \'text-semibold\': configuration.secondaryTextField\n                      }">\n                      {{ getObjectValue(child, configuration.primaryTextField) }}\n                    </div>\n\n                    <div *ngIf="\n                        configuration.secondaryTextField &&\n                        child[configuration.secondaryTextField]\n                      ">\n                      {{ child[configuration.secondaryTextField] }}\n                    </div>\n                  </div>\n                  <ul class="usa-list usa-list--unstyled" #childrenItems\n                    [attr.id]="configuration.id + \'-grandchildren-\'" role="listbox">\n                    <li [attr.id]="configuration.id + \'-grandchildren-\' + k" role="option"\n                      class="sds-autocomplete__item" [ngClass]="{\n                        \'sds-autocomplete__item--selected\': checkItemSelected(\n                          subchild\n                        ),\n                        \'sds-autocomplete__item--highlighted\':\n                          subchild[\'highlighted\']\n                      }" *ngFor="\n                        let subchild of child[configuration.groupByChild];\n                        let k = index\n                      " (click)="selectItem(subchild)">\n                      <div>\n                        <div [ngClass]="{\n                            \'text-semibold\': configuration.secondaryTextField\n                          }">\n                          {{ getObjectValue( subchild, configuration.primaryTextField ) }}\n\n                          <div *ngIf="\n                              configuration.secondaryTextField &&\n                              subchild[configuration.secondaryTextField]\n                            ">\n                            {{ subchild[configuration.secondaryTextField] }}\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </ng-container>\n          </li>\n        </ng-container>\n        <ng-container *ngIf="!results || results.length == 0">\n          <li class="emptyResults margin-1">No results found</li>\n        </ng-container>\n        <ng-container *ngIf="showLoad">\n          <li class="autoLoading">\n            <div class="lightToGrayBackgroundGradiate"></div>\n            <div class="grayToLightBackgroundGradiate"></div>\n          </li>\n          <li class="autoLoading">\n            <div class="lightToGrayBackgroundGradiate"></div>\n            <div class="grayToLightBackgroundGradiate"></div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul class="usa-sr-only" aria-live="assertive">\n        <li>{{ srOnlyText }}</li>\n      </ul>\n    </ng-template>\n\n\n    <ng-container *ngIf="!input.disabled">\n      <span class="position-absolute right-105 top-1 cursor-pointer bg-white">\n        <span *ngIf="isClearIconVisible()" role="button" aria-label="Clear input" (click)="clearInput()"\n          (keyup.enter)="clearInput()" tabindex="0">\n          <usa-icon [icon]="\'x\'" size="lg" class="font-sans-xs"></usa-icon>\n        </span>\n        <span *ngIf="!configuration.isTagModeEnabled" class="margin-left-1 margin-top-05">\n          <usa-icon role="button" aria-label="Display Options" tabindex="0" *ngIf="!showResults && !disabled"\n            (click)="openOptions()" class="font-sans-xs" (keyup.enter)="openOptions()" [icon]="\'caret-down-fill\'"\n            size="1x">\n          </usa-icon>\n          <usa-icon role="button" aria-label="Hide Options" tabindex="0" *ngIf="showResults && !disabled"\n            (click)="checkForFocus($event)" class="font-sans-xs" (keyup.enter)="checkForFocus($event)"\n            [icon]="\'caret-up-fill\'" size="1x">\n          </usa-icon>\n        </span>\n      </span>\n    </ng-container>\n  </div>\n</div>\n',
    },
    {
      name: 'SdsDialogContainerComponent',
      id:
        'component-SdsDialogContainerComponent-6468268fc23e1315d72f96acb85a39ed',
      file:
        'libs/packages/components/src/lib/dialog/dialog-container.component.ts',
      changeDetection: 'ChangeDetectionStrategy.Default',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      host: {},
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-dialog-container',
      styleUrls: [],
      styles: [],
      templateUrl: ['dialog-container.component.html'],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_animationStateChanged',
          defaultValue: 'new EventEmitter<AnimationEvent>()',
          type: '',
          optional: false,
          description: '<p>Emits when an animation state changes. </p>\n',
          line: 85,
        },
        {
          name: '_ariaLabelledBy',
          defaultValue: 'null',
          type: 'string | null',
          optional: false,
          description:
            '<p>ID of the element that should be considered as the dialog&#39;s label. </p>\n',
          line: 88,
        },
        {
          name: '_config',
          type: 'SdsDialogConfig',
          optional: false,
          description: '<p>The dialog configuration. </p>\n',
          line: 99,
          modifierKind: [114],
        },
        {
          name: '_elementFocusedBeforeDialogWasOpened',
          defaultValue: 'null',
          type: 'HTMLElement | null',
          optional: false,
          description:
            '<p>Element that was focused before the dialog was opened. Save this to restore upon close. </p>\n',
          line: 79,
          modifierKind: [112],
        },
        {
          name: '_focusTrap',
          type: 'FocusTrap',
          optional: false,
          description:
            '<p>The class that traps and manages focus within the dialog. </p>\n',
          line: 76,
          modifierKind: [112],
        },
        {
          name: '_id',
          type: 'string',
          optional: false,
          description: '<p>ID for the container DOM element. </p>\n',
          line: 91,
        },
        {
          name: '_portalOutlet',
          type: 'CdkPortalOutlet',
          optional: false,
          description:
            '<p>The portal outlet inside of this container into which the dialog content will be loaded. </p>\n',
          line: 73,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: 'CdkPortalOutlet, {static: true}',
            },
          ],
        },
        {
          name: '_state',
          defaultValue: "this._config.slideOut ? 'slideEnter' : 'enter'",
          type: '"void" | "enter" | "exit" | "slideEnter" | "slideExit"',
          optional: false,
          description: '<p>State of the dialog animation. </p>\n',
          line: 82,
        },
      ],
      methodsClass: [
        {
          name: '_onAnimationDone',
          args: [
            {
              name: 'event',
              type: 'AnimationEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 174,
          description:
            '<p>Callback, invoked whenever an animation on the host completes. </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'AnimationEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_onAnimationStart',
          args: [
            {
              name: 'event',
              type: 'AnimationEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 185,
          description:
            '<p>Callback, invoked when an animation on the host starts. </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'AnimationEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_restoreFocus',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 145,
          description:
            '<p>Restores focus to the element that was focused before the dialog opened. </p>\n',
          modifierKind: [112],
        },
        {
          name: '_savePreviouslyFocusedElement',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 159,
          description:
            '<p>Saves a reference to the element that was focused before the dialog was opened. </p>\n',
          modifierKind: [112],
        },
        {
          name: '_startExitAnimation',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 190,
          description: '<p>Starts the dialog exit animation. </p>\n',
        },
        {
          name: '_trapFocus',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 131,
          description: '<p>Moves the focus inside the focus trap. </p>\n',
          modifierKind: [112],
        },
        {
          name: 'attachComponentPortal',
          args: [
            {
              name: 'portal',
              type: 'ComponentPortal<T>',
            },
          ],
          optional: false,
          returnType: 'ComponentRef<T>',
          typeParameters: ['T'],
          line: 108,
          description:
            '<p>Attach a ComponentPortal as content to this dialog container.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4008,
                end: 4014,
                flags: 0,
                escapedText: 'portal',
              },
              type: 'ComponentPortal<T>',
              tagName: {
                pos: 4002,
                end: 4007,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Portal to be attached as the dialog content.</p>\n',
            },
          ],
        },
        {
          name: 'attachTemplatePortal',
          args: [
            {
              name: 'portal',
              type: 'TemplatePortal<C>',
            },
          ],
          optional: false,
          returnType: 'EmbeddedViewRef<C>',
          typeParameters: ['C'],
          line: 121,
          description:
            '<p>Attach a TemplatePortal as content to this dialog container.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4434,
                end: 4440,
                flags: 0,
                escapedText: 'portal',
              },
              type: 'TemplatePortal<C>',
              tagName: {
                pos: 4428,
                end: 4433,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Portal to be attached as the dialog content.</p>\n',
            },
          ],
        },
        {
          name: 'isSlideOutConfig',
          args: [
            {
              name: 'val',
              type: 'boolean | SlideOutConfig',
            },
          ],
          optional: false,
          returnType: 'SlideOutConfig',
          typeParameters: [],
          line: 200,
          description:
            '<p>Checks if the value is a Slide Out panel configuration or a boolean. </p>\n',
          jsdoctags: [
            {
              name: 'val',
              type: 'boolean | SlideOutConfig',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description:
        '<p>Internal component that wraps user-provided dialog content.</p>\n',
      rawdescription:
        'Internal component that wraps user-provided dialog content.',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  ComponentRef,\n  ElementRef,\n  EmbeddedViewRef,\n  EventEmitter,\n  Inject,\n  Optional,\n  ChangeDetectorRef,\n  ViewChild,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n} from '@angular/core';\nimport { DOCUMENT } from '@angular/common';\nimport { AnimationEvent } from '@angular/animations';\nimport { sdsDialogAnimations } from './dialog-animations';\nimport {\n  BasePortalOutlet,\n  ComponentPortal,\n  CdkPortalOutlet,\n  TemplatePortal\n} from '@angular/cdk/portal';\nimport { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';\nimport { SdsDialogConfig, SlideOutConfig } from './dialog-config';\n/**\n * Throws an exception for the case when a ComponentPortal is\n * attached to a DomPortalOutlet without an origin.\n * @docs-private\n */\nexport function throwSdsDialogContentAlreadyAttachedError() {\n  throw Error('Attempting to attach dialog content after content is already attached');\n}\n\n/**\n * Internal component that wraps user-provided dialog content.\n * @docs-private\n */\n@Component({\n  selector: 'sds-dialog-container',\n  templateUrl: 'dialog-container.component.html',\n  encapsulation: ViewEncapsulation.None,\n  // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.\n  // tslint:disable-next-line:validate-decorators\n  changeDetection: ChangeDetectionStrategy.Default,\n  animations: [sdsDialogAnimations.dialogContainer],\n  // tslint:disable-next-line: use-host-property-decorator\n  host: {\n    'class': 'sds-dialog__container',\n    '[class.sds-dialog--alert]': '_config.alert',\n    '[class.sds-dialog--alert-error]': '_config.alert === \"error\"',\n    '[class.sds-dialog--alert-warning]': '_config.alert === \"warning\"',\n    '[class.sds-dialog--alert-info]': '_config.alert === \"info\"',\n    '[class.sds-dialog--alert-success]': '_config.alert === \"success\"',\n    '[class.dialog-slide-out]': '_config.slideOut',\n    'tabindex': '-1',\n    'aria-modal': 'true',\n    '[attr.id]': '_id',\n    '[attr.role]': '_config.role',\n    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',\n    '[attr.aria-label]': '_config.ariaLabel',\n    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',\n    '[style.width]':\n      '_config.slideOut && isSlideOutConfig(_config.slideOut) ? _config.slideOut.width : null',\n    '[@dialogContainer]':\n      '{ value: _state, params: _config.slideOut && isSlideOutConfig(_config.slideOut) ? { width: _config.slideOut.width || \"15rem\", time: _config.slideOut.time || \"1s\" } : { width: \"15rem\", time: \"1s\" } }',\n    '(@dialogContainer.start)': '_onAnimationStart($event)',\n    '(@dialogContainer.done)': '_onAnimationDone($event)',\n  },\n})\nexport class SdsDialogContainerComponent extends BasePortalOutlet {\n\n  /** The portal outlet inside of this container into which the dialog content will be loaded. */\n  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet: CdkPortalOutlet;\n\n  /** The class that traps and manages focus within the dialog. */\n  private _focusTrap: FocusTrap;\n\n  /** Element that was focused before the dialog was opened. Save this to restore upon close. */\n  private _elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;\n\n  /** State of the dialog animation. */\n  _state: 'void' | 'enter' | 'exit' | 'slideEnter' | 'slideExit' = this._config.slideOut ? 'slideEnter' : 'enter';\n\n  /** Emits when an animation state changes. */\n  _animationStateChanged = new EventEmitter<AnimationEvent>();\n\n  /** ID of the element that should be considered as the dialog's label. */\n  _ariaLabelledBy: string | null = null;\n\n  /** ID for the container DOM element. */\n  _id: string;\n\n  constructor(\n    private _elementRef: ElementRef,\n    private _focusTrapFactory: FocusTrapFactory,\n    private _changeDetectorRef: ChangeDetectorRef,\n    @Optional() @Inject(DOCUMENT) private _document: any,\n    /** The dialog configuration. */\n    public _config: SdsDialogConfig) {\n    super();\n\n  }\n\n  /**\n   * Attach a ComponentPortal as content to this dialog container.\n   * @param portal Portal to be attached as the dialog content.\n   */\n  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {\n    if (this._portalOutlet.hasAttached()) {\n      throwSdsDialogContentAlreadyAttachedError();\n    }\n\n    this._savePreviouslyFocusedElement();\n    return this._portalOutlet.attachComponentPortal(portal);\n  }\n\n  /**\n   * Attach a TemplatePortal as content to this dialog container.\n   * @param portal Portal to be attached as the dialog content.\n   */\n  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {\n    if (this._portalOutlet.hasAttached()) {\n      throwSdsDialogContentAlreadyAttachedError();\n    }\n\n    this._savePreviouslyFocusedElement();\n    return this._portalOutlet.attachTemplatePortal(portal);\n  }\n\n  /** Moves the focus inside the focus trap. */\n  private _trapFocus() {\n    if (!this._focusTrap) {\n      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);\n    }\n\n    // If were to attempt to focus immediately, then the content of the dialog would not yet be\n    // ready in instances where change detection has to run first. To deal with this, we simply\n    // wait for the microtask queue to be empty.\n    if (this._config.autoFocus) {\n      this._focusTrap.focusInitialElementWhenReady();\n    }\n  }\n\n  /** Restores focus to the element that was focused before the dialog opened. */\n  private _restoreFocus() {\n    const toFocus = this._elementFocusedBeforeDialogWasOpened;\n\n    // We need the extra check, because IE can set the `activeElement` to null in some cases.\n    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {\n      toFocus.focus();\n    }\n\n    if (this._focusTrap) {\n      this._focusTrap.destroy();\n    }\n  }\n\n  /** Saves a reference to the element that was focused before the dialog was opened. */\n  private _savePreviouslyFocusedElement() {\n    if (this._document) {\n      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement as HTMLElement;\n\n      // Note that there is no focus method when rendering on the server.\n      if (this._elementRef.nativeElement.focus) {\n        // Move focus onto the dialog immediately in order to prevent the user from accidentally\n        // opening multiple dialogs at the same time. Needs to be async, because the element\n        // may not be focusable immediately.\n        Promise.resolve().then(() => this._elementRef.nativeElement.focus());\n      }\n    }\n  }\n\n  /** Callback, invoked whenever an animation on the host completes. */\n  _onAnimationDone(event: AnimationEvent) {\n    if (event.toState === 'enter' || event.toState === 'slideEnter') {\n      this._trapFocus();\n    } else if (event.toState === 'exit' || event.toState === 'slideExit') {\n      this._restoreFocus();\n    }\n\n    this._animationStateChanged.emit(event);\n  }\n\n  /** Callback, invoked when an animation on the host starts. */\n  _onAnimationStart(event: AnimationEvent) {\n    this._animationStateChanged.emit(event);\n  }\n\n  /** Starts the dialog exit animation. */\n  _startExitAnimation(): void {\n    this._state = this._config.slideOut ? 'slideExit' : 'exit';\n\n    // Mark the container for check so it can react if the\n    // view container is using OnPush change detection.\n    this._changeDetectorRef.markForCheck();\n  }\n\n  /** Checks if the value is a Slide Out panel configuration or a boolean. */\n  /** A configuration indicates that a user wants a custom Slide Out Panel */\n  isSlideOutConfig(val: boolean | SlideOutConfig): val is SlideOutConfig {\n    return (\n      (val as SlideOutConfig).width !== undefined ||\n      (val as SlideOutConfig).time !== undefined\n    );\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      jsdoctags: [
        {
          pos: 980,
          end: 985,
          flags: 0,
          kind: 288,
          atToken: {
            pos: 980,
            end: 981,
            flags: 0,
            kind: 57,
          },
          tagName: {
            pos: 981,
            end: 985,
            flags: 0,
            escapedText: 'docs',
          },
          comment: '-private',
        },
      ],
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef',
          },
          {
            name: '_focusTrapFactory',
            type: 'FocusTrapFactory',
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
          },
          {
            name: '_document',
            type: 'any',
          },
          {
            name: '_config',
            type: 'SdsDialogConfig',
          },
        ],
        line: 91,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_focusTrapFactory',
            type: 'FocusTrapFactory',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_changeDetectorRef',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_document',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_config',
            type: 'SdsDialogConfig',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      extends: 'BasePortalOutlet',
      templateData:
        '<button *ngIf="_config.displayCloseBtn" sds-dialog-close class="close-btn" aria-label="Close Modal">\n  <usa-icon [icon]="\'x\'"></usa-icon>\n</button>\n\n<!-- Alert Icons -->\n<div *ngIf="_config.alert" [ngSwitch]="_config.alert" class="sds-dialog-icon">\n  <usa-icon *ngSwitchCase="\'error\'" [icon]="\'alert-error\'" size="3x"></usa-icon>\n  <usa-icon *ngSwitchCase="\'warning\'" [icon]="\'exclamation-triangle\'" size="3x"></usa-icon>\n  <usa-icon *ngSwitchCase="\'info\'" [icon]="\'info-circle\'" size="3x"></usa-icon>\n  <usa-icon *ngSwitchCase="\'success\'" [icon]="\'check-circle\'" size="3x"></usa-icon>\n  <div *ngSwitchDefault>\n    Alert <em>{{ _config.alert }}</em> is not valid\n  </div>\n</div>\n\n<ng-template cdkPortalOutlet></ng-template>\n',
    },
    {
      name: 'SdsEditorComponent',
      id: 'component-SdsEditorComponent-cfb0408b4d3c40a541d50e786d8c30a1',
      file: 'libs/packages/components/src/lib/editor/editor.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name:
            '{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsEditorComponent), multi: true,\n}',
          type: 'component',
        },
      ],
      selector: 'sds-editor',
      styleUrls: [],
      styles: [
        '\n    ::ng-deep mark {\n        background-color: red;\n        color: white;\n    }',
      ],
      template:
        '<div\n  #searchInput\n  [attr.id]="id"\n  class="minh-15 border-gray-70 border-1px margin-top-1 padding-05"\n  contenteditable="true"\n  (input)="!validateOnBlur && onValueChange($event.target.innerHTML)"\n  (blur)="validateOnBlur && onBlur($event.target.innerHTML)"\n>\n</div>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [
        {
          name: 'id',
          defaultValue: "'searchEditor'",
          line: 45,
        },
        {
          name: 'regex',
          defaultValue: "''",
          line: 46,
        },
        {
          name: 'validateOnBlur',
          defaultValue: 'false',
          line: 47,
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_onChange',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 51,
          modifierKind: [112],
        },
        {
          name: '_onTouched',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 52,
          modifierKind: [112],
        },
        {
          name: 'model',
          defaultValue: "''",
          type: 'string',
          optional: false,
          description: '',
          line: 49,
        },
        {
          name: 'searchInput',
          type: 'ElementRef',
          optional: false,
          description: '',
          line: 43,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'searchInput', {read: ElementRef, static: true}",
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: 'getCaretCharacterOffsetWithin',
          args: [
            {
              name: 'element',
              type: '',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 125,
          jsdoctags: [
            {
              name: 'element',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getModel',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 73,
        },
        {
          name: 'onBlur',
          args: [
            {
              name: 'value',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 58,
          jsdoctags: [
            {
              name: 'value',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'onValueChange',
          args: [
            {
              name: 'value',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 137,
          jsdoctags: [
            {
              name: 'value',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 114,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 119,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updateModel',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 67,
        },
        {
          name: 'validateRegex',
          args: [
            {
              name: 'value',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 78,
          jsdoctags: [
            {
              name: 'value',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'value',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 100,
          jsdoctags: [
            {
              name: 'value',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { DOCUMENT } from '@angular/common';\nimport {\n    Component,\n    forwardRef,\n    ChangeDetectionStrategy,\n    ChangeDetectorRef,\n    Input,\n    ViewChild,\n    ElementRef,\n    Inject\n} from '@angular/core';\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\n\n@Component({\n    selector: 'sds-editor',\n    template: `\n    <div\n      #searchInput\n      [attr.id]=\"id\"\n      class=\"minh-15 border-gray-70 border-1px margin-top-1 padding-05\"\n      contenteditable=\"true\"\n      (input)=\"!validateOnBlur && onValueChange($event.target.innerHTML)\"\n      (blur)=\"validateOnBlur && onBlur($event.target.innerHTML)\"\n    >\n    </div>\n  `,\n    providers: [\n        {\n            provide: NG_VALUE_ACCESSOR,\n            useExisting: forwardRef(() => SdsEditorComponent),\n            multi: true,\n        },\n    ],\n    styles: [`\n    ::ng-deep mark {\n        background-color: red;\n        color: white;\n    }`\n    ],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsEditorComponent implements ControlValueAccessor {\n    @ViewChild('searchInput', { read: ElementRef, static: true }) searchInput: ElementRef;\n\n    @Input() id = 'searchEditor';\n    @Input() regex = '';\n    @Input() validateOnBlur = false;\n\n    model = '';\n\n    private _onChange = (_: any) => { };\n    private _onTouched = () => { };\n\n    constructor(private cd: ChangeDetectorRef, @Inject(DOCUMENT) private _document: any) {\n    }\n\n    // Helper method to programatically update a value of the model on blur\n    onBlur(value) {\n        this.model = value;\n        if (this.regex) {\n            this.validateRegex(this.model);\n        }\n        this.updateModel();\n    }\n\n    // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\n    updateModel() {\n        const model = this.getModel();\n        this._onChange(model);\n    }\n\n    // Helper method to return a new instance of an value\n    getModel() {\n        return this.model;\n    }\n\n    // Validate regex and highlight first charecter of the failure\n    validateRegex(value) {\n        const rawValue = value\n            .replaceAll(/<\\/?mark[^>]*>/g, '')\n            .replaceAll(/<\\/?span[^>]*>/g, '')\n            .replaceAll(/<\\/?font[^>]*>/g, '');\n        const regex = new RegExp(this.regex, 'g');\n        let res = \"\";\n        let result = regex.exec(rawValue);\n        if (result) {\n            let index = result.index;\n            res = rawValue.substring(0, index) +\n                '<mark>' + rawValue.substring(index, index + 1) +\n                '</mark>' + rawValue.substring(index + 1, index + rawValue.length);\n            this.searchInput.nativeElement.innerHTML = res;\n        } else {\n            this.searchInput.nativeElement.innerHTML = rawValue;\n        }\n    }\n\n    // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\n    // If there is a value we will just overwrite items\n    // If there is no value we reset the items array to be empty\n    writeValue(value: any) {\n        if (value) {\n            this.model = value;\n            if (this.searchInput)\n                this.searchInput.nativeElement.innerHTML = value;\n            this.cd.markForCheck();\n        } else {\n            this.model = '';\n            if (this.searchInput) this.searchInput.nativeElement.innerHTML = '';\n            this.cd.markForCheck();\n        }\n    }\n\n    // ControlValueAccessor hook that lets us call this._onChange(let) to let the form know our variable has changed (in this case model)\n    registerOnChange(fn: any): void {\n        this._onChange = fn;\n    }\n\n    // ControlValueAccessor hook (not used)\n    registerOnTouched(fn: any) {\n        this._onTouched = fn;\n    }\n\n\n    // Get the cursor current position \n    getCaretCharacterOffsetWithin(element) {\n        let caretOffset = 0;\n        if (typeof window.getSelection != 'undefined') {\n            let range = window.getSelection().getRangeAt(0);\n            let preCaretRange = range.cloneRange();\n            preCaretRange.selectNodeContents(element);\n            preCaretRange.setEnd(range.endContainer, range.endOffset);\n            caretOffset = preCaretRange.toString().length;\n        }\n        return caretOffset;\n    }\n\n    onValueChange(value) {\n        const pos = this.getCaretCharacterOffsetWithin(\n            this.searchInput.nativeElement\n        );\n        if (this.regex) {\n            this.validateRegex(value);\n        }\n        this.model = value;\n        this.updateModel();\n\n        let node = this.searchInput.nativeElement;\n        if (pos < node?.innerText?.length) {\n            let firstNodeLength = node.childNodes[0].textContent.length;\n\n            let childNodeIndex =\n                pos <= firstNodeLength ? 0 : 2;\n\n            let startPosition =\n                childNodeIndex === 0 ? pos : pos - firstNodeLength - 1;\n            let range = this._document.createRange();\n            let sel = window.getSelection();\n            range.setStart(\n                this.searchInput.nativeElement.childNodes[childNodeIndex],\n                startPosition\n            );\n            range.collapse(true);\n            sel.removeAllRanges();\n            sel.addRange(range);\n            this.searchInput.nativeElement.focus();\n        } else {\n            this._document.execCommand('selectAll', false, null);\n            this._document.getSelection().collapseToEnd();\n        }\n\n    }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData:
        '\n    ::ng-deep mark {\n        background-color: red;\n        color: white;\n    }\n',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
          },
          {
            name: '_document',
            type: 'any',
          },
        ],
        line: 52,
        jsdoctags: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_document',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['ControlValueAccessor'],
    },
    {
      name: 'SdsMenuComponent',
      id: 'component-SdsMenuComponent-99189209fb0bfc13ba0d62e8ec0e324e',
      file: 'libs/packages/components/src/lib/menu/menu.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      exportAs: 'sdsMenu',
      inputs: [],
      outputs: [],
      providers: [
        {
          name: '{ provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }',
          type: 'component',
        },
      ],
      selector: 'sds-menu',
      styleUrls: [],
      styles: [],
      templateUrl: ['menu.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'class',
          description:
            '<p>Transfer classes from the sds-menu to the overlay container </p>\n',
          line: 143,
          type: 'string',
        },
        {
          name: 'overlapTrigger',
          description: '<p>Whether menu panel overlaps trigger element </p>\n',
          line: 133,
          type: 'boolean',
        },
        {
          name: 'size',
          description:
            '<p>Size of menu component.\nAffects the font-size of the menu items and\nthe size of the close button in the menu header</p>\n',
          line: 109,
          type: 'MenuSizes',
        },
        {
          name: 'xPosition',
          description: '<p>Position of the menu in the X axis. </p>\n',
          line: 113,
          type: 'MenuPositionX',
        },
        {
          name: 'yPosition',
          description: '<p>Position of the menu in the Y axis. </p>\n',
          line: 123,
          type: 'MenuPositionY',
        },
      ],
      outputsClass: [
        {
          name: 'closed',
          defaultValue:
            "new EventEmitter<void | 'click' | 'keydown' | 'tab'>()",
          description: '<p>Event emitted when the menu is closed. </p>\n',
          line: 166,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: '_classList',
          defaultValue: '{}',
          type: 'literal type',
          optional: false,
          description:
            '<p>Config object to be passed into the menu&#39;s ngClass </p>\n',
          line: 96,
        },
        {
          name: '_items',
          defaultValue: '[]',
          type: 'SdsMenuItemComponent[]',
          optional: false,
          description: '<p>Menu items inside the current menu. </p>\n',
          line: 87,
          modifierKind: [112],
        },
        {
          name: '_keyManager',
          type: 'FocusKeyManager<SdsMenuItemComponent>',
          optional: false,
          description: '<p>Manage browser focus </p>\n',
          line: 84,
          modifierKind: [112],
        },
        {
          name: '_overlapTrigger',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '',
          line: 139,
          modifierKind: [112],
        },
        {
          name: '_panelAnimationState',
          defaultValue: "'void'",
          type: '"void" | "enter"',
          optional: false,
          description: '<p>Current state of the panel animation. </p>\n',
          line: 99,
        },
        {
          name: '_previousPanelClass',
          type: 'string',
          optional: false,
          description: '<p>Stores <sds-menu> classes </p>\n',
          line: 93,
          modifierKind: [112],
        },
        {
          name: '_tabSubscription',
          defaultValue: 'Subscription.EMPTY',
          type: '',
          optional: false,
          description: '<p>Subscription to tab events on the menu panel </p>\n',
          line: 90,
          modifierKind: [112],
        },
        {
          name: '_xPosition',
          defaultValue: "'after'",
          type: 'MenuPositionX',
          optional: false,
          description: '<p>After | Before the menu triger element </p>\n',
          line: 78,
          modifierKind: [112],
        },
        {
          name: '_yPosition',
          defaultValue: "'below'",
          type: 'MenuPositionY',
          optional: false,
          description: '<p>Above | Below the menu triger element </p>\n',
          line: 81,
          modifierKind: [112],
        },
        {
          name: 'templateRef',
          type: 'TemplateRef<any>',
          optional: false,
          description: '<p>Grab the component template </p>\n',
          line: 102,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: 'TemplateRef, {static: false}',
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: '_handleKeydown',
          args: [
            {
              name: 'event',
              type: 'KeyboardEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 228,
          description: '<p>Handle a keyboard event from the menu </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'KeyboardEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_onAnimationDone',
          args: [
            {
              name: 'event',
              type: 'AnimationEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 261,
          description:
            '<p>Callback that is invoked when the panel animation completes. </p>\n',
          jsdoctags: [
            {
              name: 'event',
              type: 'AnimationEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_onAnimationStart',
          args: [
            {
              name: 'event',
              type: 'AnimationEvent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 268,
          jsdoctags: [
            {
              name: 'event',
              type: 'AnimationEvent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: '_resetAnimation',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 264,
          description:
            '<p>Resets the panel animation to its initial state. </p>\n',
        },
        {
          name: '_startAnimation',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 256,
          description: '<p>Starts the enter animation. </p>\n',
        },
        {
          name: 'addItem',
          args: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 206,
          description: '<p>Adds a menu item with the menu. </p>\n',
          jsdoctags: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'focusFirstItem',
          args: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 189,
          description: '<p>Focus the first item in the menu </p>\n',
          jsdoctags: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'insertItem',
          args: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
            },
            {
              name: 'index',
              type: 'number',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 213,
          description: '<p>Inserts a menu item at an index </p>\n',
          jsdoctags: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'index',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngAfterContentInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 174,
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 183,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 170,
        },
        {
          name: 'removeItem',
          args: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 220,
          description: '<p>Removes an item from the menu. </p>\n',
          jsdoctags: [
            {
              name: 'item',
              type: 'SdsMenuItemComponent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'setPositionClasses',
          args: [
            {
              name: 'posX',
              type: 'MenuPositionX',
              defaultValue: 'this.xPosition',
            },
            {
              name: 'posY',
              type: 'MenuPositionY',
              defaultValue: 'this.yPosition',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 194,
          description:
            '<p>Adds classes to the menu panel based on its position </p>\n',
          jsdoctags: [
            {
              name: 'posX',
              type: 'MenuPositionX',
              defaultValue: 'this.xPosition',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'posY',
              type: 'MenuPositionY',
              defaultValue: 'this.yPosition',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  AfterContentInit,\n  ChangeDetectionStrategy,\n  Component,\n  ElementRef,\n  EventEmitter,\n  InjectionToken,\n  Input,\n  OnDestroy,\n  Output,\n  TemplateRef,\n  ViewChild,\n  ViewEncapsulation,\n  OnInit\n} from '@angular/core';\nimport { AnimationEvent } from '@angular/animations';\nimport {\n  ESCAPE,\n  DOWN_ARROW,\n  UP_ARROW,\n  HOME,\n  END,\n  hasModifierKey\n} from '@angular/cdk/keycodes';\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { Subscription } from 'rxjs';\nimport { sdsMenuAnimations } from './menu-animations';\nimport { SdsMenuItemComponent } from './menu-item.component';\n\n/** Menu Positions */\nexport type MenuPositionX = 'before' | 'after';\nexport type MenuPositionY = 'above' | 'below';\n\n/** Menu available sizes */\n// sm = 'small'\nexport type MenuSizes = 'sm';\n\n/** Injection token used to provide the parent menu to menu items. */\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n);\n\n/** Menu Interface */\nexport interface SdsMenuInterface<T = any> {\n  xPosition: MenuPositionX;\n  yPosition: MenuPositionY;\n  overlapTrigger: boolean;\n  templateRef: TemplateRef<any>;\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\n  parentMenu?: SdsMenuInterface;\n  size?: MenuSizes;\n  focusFirstItem: (origin?: FocusOrigin) => void;\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\n  addItem?: (item: T) => void;\n  insertItem?: (item: T, index: number) => void;\n  removeItem?: (item: T) => void;\n}\n\n@Component({\n  selector: 'sds-menu',\n  exportAs: 'sdsMenu',\n  templateUrl: 'menu.component.html',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  animations: [sdsMenuAnimations.transformMenu],\n  providers: [\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\n  ]\n})\nexport class SdsMenuComponent\n  implements\n  OnInit,\n  AfterContentInit,\n  OnDestroy,\n  SdsMenuInterface<SdsMenuItemComponent> {\n  /** After | Before the menu triger element */\n  private _xPosition: MenuPositionX = 'after';\n\n  /** Above | Below the menu triger element */\n  private _yPosition: MenuPositionY = 'below';\n\n  /** Manage browser focus */\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\n\n  /** Menu items inside the current menu. */\n  private _items: SdsMenuItemComponent[] = [];\n\n  /** Subscription to tab events on the menu panel */\n  private _tabSubscription = Subscription.EMPTY;\n\n  /** Stores <sds-menu> classes */\n  private _previousPanelClass: string;\n\n  /** Config object to be passed into the menu's ngClass */\n  _classList: { [key: string]: boolean } = {};\n\n  /** Current state of the panel animation. */\n  _panelAnimationState: 'void' | 'enter' = 'void';\n\n  /** Grab the component template */\n  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;\n\n  /**\n   * Size of menu component.\n   * Affects the font-size of the menu items and\n   * the size of the close button in the menu header\n   */\n  @Input() size: MenuSizes;\n\n  /** Position of the menu in the X axis. */\n  @Input()\n  get xPosition(): MenuPositionX {\n    return this._xPosition;\n  }\n  set xPosition(value: MenuPositionX) {\n    this._xPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Position of the menu in the Y axis. */\n  @Input()\n  get yPosition(): MenuPositionY {\n    return this._yPosition;\n  }\n  set yPosition(value: MenuPositionY) {\n    this._yPosition = value;\n    this.setPositionClasses();\n  }\n\n  /** Whether menu panel overlaps trigger element */\n  @Input()\n  get overlapTrigger(): boolean {\n    return this._overlapTrigger;\n  }\n  set overlapTrigger(value: boolean) {\n    this._overlapTrigger = coerceBooleanProperty(value);\n  }\n  private _overlapTrigger = false;\n\n  /** Transfer classes from the sds-menu to the overlay container */\n  @Input('class')\n  set panelClass(classes: string) {\n    const previousPanelClass = this._previousPanelClass;\n    // Remove previous classes from current set of classes\n    if (previousPanelClass && previousPanelClass.length) {\n      previousPanelClass.split(' ').forEach((className: string) => {\n        this._classList[className] = false;\n      });\n    }\n\n    this._previousPanelClass = classes;\n\n    // Adds new classes to current set of classes\n    if (classes && classes.length) {\n      classes.split(' ').forEach((className: string) => {\n        this._classList[className] = true;\n      });\n\n      // Remove all classes from <sds-menu>\n      this._elementRef.nativeElement.className = '';\n    }\n  }\n\n  /** Event emitted when the menu is closed. */\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\n\n  constructor(private _elementRef: ElementRef<HTMLElement>) { }\n\n  ngOnInit() {\n    this.setPositionClasses();\n  }\n\n  ngAfterContentInit() {\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\n      this._items\n    ).withWrap();\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\n      this.closed.emit('tab')\n    );\n  }\n\n  ngOnDestroy() {\n    this._tabSubscription.unsubscribe();\n    this.closed.complete();\n  }\n\n  /** Focus the first item in the menu */\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\n  }\n\n  /** Adds classes to the menu panel based on its position */\n  setPositionClasses(\n    posX: MenuPositionX = this.xPosition,\n    posY: MenuPositionY = this.yPosition\n  ) {\n    const classes = this._classList;\n    classes['sds-menu-before'] = posX === 'before';\n    classes['sds-menu-after'] = posX === 'after';\n    classes['sds-menu-above'] = posY === 'above';\n    classes['sds-menu-below'] = posY === 'below';\n  }\n\n  /** Adds a menu item with the menu. */\n  addItem(item: SdsMenuItemComponent) {\n    if (this._items.indexOf(item) === -1) {\n      this._items.push(item);\n    }\n  }\n\n  /** Inserts a menu item at an index */\n  insertItem(item: SdsMenuItemComponent, index: number) {\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\n      this._items.splice(index, 0, item);\n    }\n  }\n\n  /** Removes an item from the menu. */\n  removeItem(item: SdsMenuItemComponent) {\n    const index = this._items.indexOf(item);\n    if (this._items.indexOf(item) > -1) {\n      this._items.splice(index, 1);\n    }\n  }\n\n  /** Handle a keyboard event from the menu */\n  _handleKeydown(event: KeyboardEvent) {\n    // tslint:disable-next-line: deprecation\n    const keyCode = event.keyCode;\n    const manager = this._keyManager;\n\n    switch (keyCode) {\n      case ESCAPE:\n        this.closed.emit('keydown');\n        break;\n      case HOME:\n      case END:\n        if (!hasModifierKey(event)) {\n          keyCode === HOME\n            ? manager.setFirstItemActive()\n            : manager.setLastItemActive();\n          event.preventDefault();\n        }\n        break;\n      default:\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\n          manager.setFocusOrigin('keyboard');\n        }\n\n        manager.onKeydown(event);\n    }\n  }\n\n  /** Starts the enter animation. */\n  _startAnimation() {\n    this._panelAnimationState = 'enter';\n  }\n\n  /** Callback that is invoked when the panel animation completes. */\n  _onAnimationDone(event: AnimationEvent) { }\n\n  /** Resets the panel animation to its initial state. */\n  _resetAnimation() {\n    this._panelAnimationState = 'void';\n  }\n\n  _onAnimationStart(event: AnimationEvent) {\n    // Scroll the content element to the top as soon as the animation starts.\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\n      event.element.scrollTop = 0;\n    }\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
          },
        ],
        line: 166,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: [
        'OnInit',
        'AfterContentInit',
        'OnDestroy',
        'SdsMenuInterface',
      ],
      accessors: {
        xPosition: {
          name: 'xPosition',
          setSignature: {
            name: 'xPosition',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 116,
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
        yPosition: {
          name: 'yPosition',
          setSignature: {
            name: 'yPosition',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 126,
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
        overlapTrigger: {
          name: 'overlapTrigger',
          setSignature: {
            name: 'overlapTrigger',
            type: 'void',
            args: [
              {
                name: 'value',
                type: 'boolean',
              },
            ],
            returnType: 'void',
            line: 136,
            jsdoctags: [
              {
                name: 'value',
                type: 'boolean',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
        panelClass: {
          name: 'panelClass',
          setSignature: {
            name: 'panelClass',
            type: 'void',
            args: [
              {
                name: 'classes',
                type: 'string',
              },
            ],
            returnType: 'void',
            line: 143,
            description:
              '<p>Transfer classes from the sds-menu to the overlay container </p>\n',
            jsdoctags: [
              {
                name: 'classes',
                type: 'string',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
      templateData:
        '<ng-template>\n  <div\n    class="sds-overlay minw-menu maxw-mobile radius-overlay"\n    [ngClass]="_classList"\n    (keydown)="_handleKeydown($event)"\n    (click)="closed.emit(\'click\')"\n    [@transformMenu]="_panelAnimationState"\n    (@transformMenu.start)="_onAnimationStart($event)"\n    (@transformMenu.done)="_onAnimationDone($event)"\n    tabindex="-1"\n    role="menu"\n  >\n    <div class="sds-menu" [class.sds-menu--small]="size === \'sm\'">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n',
    },
    {
      name: 'SdsMenuHeaderComponent',
      id: 'component-SdsMenuHeaderComponent-385fbcf820475668c8709317adbec5d0',
      file: 'libs/packages/components/src/lib/menu/menu-header.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-menu-header',
      styleUrls: [],
      styles: [],
      templateUrl: ['menu-header.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'hideClose',
          defaultValue: 'false',
          line: 8,
        },
      ],
      outputsClass: [],
      propertiesClass: [],
      methodsClass: [],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-menu-header',\n  templateUrl: 'menu-header.component.html'\n})\nexport class SdsMenuHeaderComponent {\n  @Input() hideClose = false;\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      templateData:
        '<div class="sds-menu__header">\n  <span class="sds-menu__header-title"> <ng-content></ng-content> </span>\n  <button\n    *ngIf="!hideClose"\n    aria-label="Close Menu"\n    sds-menu-item\n    role="button"\n  >\n  <usa-icon [icon]="\'x\'"></usa-icon>\n  </button>\n</div>\n',
    },
    {
      name: 'SdsMenuItemComponent',
      id: 'component-SdsMenuItemComponent-e341254367af51f341c713fc6150632e',
      file: 'libs/packages/components/src/lib/menu/menu-item.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: '[sds-menu-item]',
      styleUrls: [],
      styles: [],
      template: '<ng-content></ng-content>',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [
        {
          name: 'disabled',
          description: '<p>Whether the menu item should be disabled </p>\n',
          line: 39,
        },
        {
          name: 'role',
          defaultValue: "'menuitem'",
          description: '<p>ARIA role for the menu item. </p>\n',
          line: 29,
          type: '',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_disabled',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '<p>Holds the disable status value </p>\n',
          line: 35,
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: '_getClass',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 66,
          description: '<p>Get item class </p>\n',
        },
        {
          name: 'focus',
          args: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 75,
          description: '<p>Focuses the menu item. </p>\n',
          jsdoctags: [
            {
              name: 'origin',
              type: 'FocusOrigin',
              defaultValue: "'program'",
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 80,
          description:
            '<p>Stop listening to focus changes and remove item from parent </p>\n',
        },
      ],
      hostBindings: [
        {
          name: 'attr.tabIndex',
          defaultValue: "this.disabled ? '-1' : '0'",
          description: '<p>Menu item tab index </p>\n',
          line: 32,
        },
        {
          name: 'class',
          defaultValue: 'this._getClass()',
          description: '<p>Menu item class </p>\n',
          line: 26,
        },
      ],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  ElementRef,\n  OnDestroy,\n  Inject,\n  Input,\n  HostBinding,\n  ChangeDetectionStrategy,\n  ViewEncapsulation,\n  Optional\n} from '@angular/core';\nimport { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { SDS_MENU_TOKEN, SdsMenuInterface } from './menu.component';\nimport { SdsMenuHeaderComponent } from './menu-header.component';\n\n@Component({\n  // tslint:disable-next-line: component-selector\n  selector: '[sds-menu-item]',\n  template: '<ng-content></ng-content>',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None\n})\nexport class SdsMenuItemComponent implements FocusableOption, OnDestroy {\n  /** Menu item class */\n  @HostBinding('class') class = this._getClass();\n\n  /** ARIA role for the menu item. */\n  @HostBinding('attr.role') @Input() role: 'menuitem' = 'menuitem';\n\n  /** Menu item tab index */\n  @HostBinding('attr.tabIndex') tabIndex = this.disabled ? '-1' : '0';\n\n  /** Holds the disable status value */\n  private _disabled = false;\n\n  /** Whether the menu item should be disabled */\n  @Input()\n  get disabled() {\n    return this._disabled;\n  }\n  set disabled(value: any) {\n    this._disabled = coerceBooleanProperty(value);\n  }\n\n  constructor(\n    private _elementRef: ElementRef<HTMLElement>,\n    private _focusMonitor: FocusMonitor,\n    @Inject(SDS_MENU_TOKEN)\n    private _parentMenu: SdsMenuInterface<SdsMenuItemComponent>,\n    @Optional() private _parentMenuHeader: SdsMenuHeaderComponent\n  ) {\n    // Start listening to focus changes\n    _focusMonitor.monitor(this._elementRef, false);\n    // Add this menu item to its parent menu\n    // If item its inside a header\n    // add it as the first item in the list\n    if (_parentMenuHeader) {\n      _parentMenu.insertItem(this, 0);\n    } else {\n      _parentMenu.addItem(this);\n    }\n  }\n\n  /** Get item class */\n  _getClass(): string {\n    const headerButtonSmall =\n      this._parentMenu.size === 'sm' ? 'sds-button--small' : '';\n    return this._parentMenuHeader\n      ? `sds-button sds-button--circular ${headerButtonSmall}`\n      : 'sds-menu__item';\n  }\n\n  /** Focuses the menu item. */\n  focus(origin: FocusOrigin = 'program'): void {\n    this._focusMonitor.focusVia(this._elementRef.nativeElement, origin);\n  }\n\n  /** Stop listening to focus changes and remove item from parent */\n  ngOnDestroy() {\n    this._focusMonitor.stopMonitoring(this._elementRef);\n    this._parentMenu.removeItem(this);\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
          },
          {
            name: '_parentMenu',
            type: 'SdsMenuInterface<SdsMenuItemComponent>',
          },
          {
            name: '_parentMenuHeader',
            type: 'SdsMenuHeaderComponent',
          },
        ],
        line: 44,
        jsdoctags: [
          {
            name: '_elementRef',
            type: 'ElementRef<HTMLElement>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_focusMonitor',
            type: 'FocusMonitor',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_parentMenu',
            type: 'SdsMenuInterface<SdsMenuItemComponent>',
            tagName: {
              text: 'param',
            },
          },
          {
            name: '_parentMenuHeader',
            type: 'SdsMenuHeaderComponent',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['FocusableOption', 'OnDestroy'],
      accessors: {
        disabled: {
          name: 'disabled',
          setSignature: {
            name: 'disabled',
            type: 'void',
            args: [
              {
                name: 'value',
                type: 'any',
              },
            ],
            returnType: 'void',
            line: 42,
            jsdoctags: [
              {
                name: 'value',
                type: 'any',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
    },
    {
      name: 'SdsPageComponent',
      id: 'component-SdsPageComponent-717c4135d1fc09822ae19def187bf093',
      file: 'libs/packages/components/src/lib/page/page.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-page',
      styleUrls: [],
      styles: [],
      template: '<div class="grid-container"><ng-content></ng-content></div>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 12,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'sds-page',\n  template: `\n    <div class=\"grid-container\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-page-options',\n  template: `\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageOptionsComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [],
        line: 9,
      },
      implements: ['OnInit'],
    },
    {
      name: 'SdsPageOptionsComponent',
      id: 'component-SdsPageOptionsComponent-717c4135d1fc09822ae19def187bf093',
      file: 'libs/packages/components/src/lib/page/page.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-page-options',
      styleUrls: [],
      styles: [],
      template:
        '<div class="grid-row position-relative"><ng-content></ng-content></div>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 24,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'sds-page',\n  template: `\n    <div class=\"grid-container\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-page-options',\n  template: `\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n  `\n})\nexport class SdsPageOptionsComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {}\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [],
        line: 21,
      },
      implements: ['OnInit'],
    },
    {
      name: 'SdsSearchComponent',
      id: 'component-SdsSearchComponent-72bcc44c273e4e7b7e8665fb6faff583',
      file: 'libs/packages/components/src/lib/search/search.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name:
            '{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsSearchComponent), multi: true,\n}',
          type: 'component',
        },
      ],
      selector: 'sds-search',
      styleUrls: ['search.component.scss'],
      styles: [],
      templateUrl: ['search.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'searchSettings',
          defaultValue: 'new SearchSettings()',
          line: 53,
          type: 'SearchSettings',
        },
      ],
      outputsClass: [
        {
          name: 'submit',
          defaultValue: 'new EventEmitter(\n    null\n  )',
          line: 54,
          type: 'EventEmitter<literal type>',
        },
      ],
      propertiesClass: [
        {
          name: '_onChange',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 63,
          modifierKind: [112],
        },
        {
          name: '_onTouched',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 64,
          modifierKind: [112],
        },
        {
          name: 'buttonEl',
          type: 'ElementRef',
          optional: false,
          description: '',
          line: 51,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'buttonEl', {read: ElementRef, static: false}",
            },
          ],
        },
        {
          name: 'inputEl',
          type: 'ElementRef',
          optional: false,
          description: '',
          line: 47,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'inputEl', {read: ElementRef, static: false}",
            },
          ],
        },
        {
          name: 'inputState',
          defaultValue:
            '{\n    initial: { visible: undefined },\n    visible: undefined,\n  }',
          type: 'object',
          optional: false,
          description: '',
          line: 59,
        },
        {
          name: 'model',
          defaultValue: '{}',
          type: 'any',
          optional: false,
          description: '',
          line: 58,
        },
        {
          name: 'selectEl',
          type: 'ElementRef',
          optional: false,
          description: '',
          line: 49,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'selectEl', {read: ElementRef, static: false}",
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: 'calculateInputWidth',
          args: [],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 166,
        },
        {
          name: 'clearInput',
          args: [
            {
              name: 'ev',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 187,
          jsdoctags: [
            {
              name: 'ev',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'focusChange',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 160,
        },
        {
          name: 'getClass',
          args: [],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 178,
        },
        {
          name: 'handleClick',
          args: [
            {
              name: 'event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 93,
          jsdoctags: [
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'hasDropdown',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 81,
        },
        {
          name: 'isInputVisible',
          args: [],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 129,
        },
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 72,
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 125,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 122,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'removeInputVisibleStyles',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 152,
        },
        {
          name: 'setInputVisibleStyles',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 135,
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'value',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 113,
          jsdoctags: [
            {
              name: 'value',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'writeValueToModel',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 103,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  ViewChild,\n  ElementRef,\n  Input,\n  AfterViewInit,\n  forwardRef,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Output,\n  EventEmitter,\n} from '@angular/core';\nimport { FocusMonitor } from '@angular/cdk/a11y';\nimport { ViewportRuler } from '@angular/cdk/overlay';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nexport class SearchSettings {\n  public placeholder = 'Search';\n  public ariaLabel? = 'Search';\n  public size?: string;\n  public inputClass?: string;\n  public parentSelector?: string;\n  public id?: string;\n  public dropdown?: any = {\n    id: 'searchOptions',\n    placeholder: '-Select-',\n    options: [],\n    inverse: false,\n  };\n  public isSuffixSearchIcon?: boolean = false;\n}\n@Component({\n  selector: 'sds-search',\n  templateUrl: 'search.component.html',\n  styleUrls: ['search.component.scss'],\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsSearchComponent),\n      multi: true,\n    },\n  ],\n\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\n  @ViewChild('inputEl', { read: ElementRef, static: false })\n  inputEl: ElementRef;\n  @ViewChild('selectEl', { read: ElementRef, static: false })\n  selectEl: ElementRef;\n  @ViewChild('buttonEl', { read: ElementRef, static: false })\n  buttonEl: ElementRef;\n\n  @Input() searchSettings: SearchSettings = new SearchSettings();\n  @Output() submit: EventEmitter<{ searchText: string }> = new EventEmitter(\n    null\n  );\n\n  model: any = {};\n  inputState = {\n    initial: { visible: undefined },\n    visible: undefined,\n  };\n  private _onChange = (_: any) => {};\n  private _onTouched = () => {};\n\n  constructor(\n    private cd: ChangeDetectorRef,\n    private focusMonitor: FocusMonitor,\n    private viewportRuler: ViewportRuler\n  ) {}\n\n  ngAfterViewInit() {\n    this.inputState.initial.visible = this.isInputVisible();\n    this.inputState.visible = this.inputState.initial.visible;\n    this.viewportRuler.change(0).subscribe(() => {\n      this.inputState.initial.visible = this.isInputVisible();\n      this.inputState.visible = this.inputState.initial.visible;\n    });\n  }\n\n  hasDropdown() {\n    if (\n      this.searchSettings &&\n      this.searchSettings.dropdown &&\n      this.searchSettings.dropdown.options &&\n      this.searchSettings.dropdown.options.length\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  handleClick(event) {\n    event.preventDefault();\n    if (!this.inputState.visible) {\n      this.setInputVisibleStyles();\n      this.focusMonitor.focusVia(this.inputEl, 'program');\n    } else if (this.inputEl || this.selectEl) {\n      this.submit.emit(this.model);\n    }\n  }\n\n  writeValueToModel() {\n    this.model.searchText = this.inputEl\n      ? this.inputEl.nativeElement.value\n      : '';\n    if (this.selectEl && this.selectEl.nativeElement.value) {\n      this.model.searchCategory = this.selectEl.nativeElement.value;\n    }\n    this._onChange(Object.assign({}, this.model));\n  }\n\n  writeValue(value: any) {\n    if (value && this.model !== value) {\n      this.model = value;\n      this.cd.markForCheck();\n    } else {\n      this.model = {};\n      this.cd.markForCheck();\n    }\n  }\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  isInputVisible(): boolean {\n    return this.inputEl.nativeElement.getBoundingClientRect().width\n      ? true\n      : false;\n  }\n\n  setInputVisibleStyles() {\n    const inputWidth = this.calculateInputWidth();\n    this.inputEl.nativeElement.style.setProperty(\n      'display',\n      'block',\n      'important'\n    );\n    this.inputEl.nativeElement.style.position = 'absolute';\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\n    this.inputEl.nativeElement.style.setProperty(\n      'width',\n      `${inputWidth}px`,\n      'important'\n    );\n    this.inputState.visible = true;\n  }\n\n  removeInputVisibleStyles() {\n    this.inputEl.nativeElement.style.display = '';\n    this.inputEl.nativeElement.style.position = '';\n    this.inputEl.nativeElement.style.left = '';\n    this.inputEl.nativeElement.style.width = '';\n    this.inputState.visible = false;\n  }\n\n  focusChange() {\n    if (!this.inputState.initial.visible) {\n      this.removeInputVisibleStyles();\n    }\n  }\n\n  calculateInputWidth(): number {\n    const leftPadding = 20;\n    const buttonElement = this.buttonEl.nativeElement;\n    const inputElement = this.inputEl.nativeElement;\n    const rightPosition = buttonElement.getBoundingClientRect().left;\n    const leftPosition = this.searchSettings.parentSelector\n      ? inputElement\n          .closest(this.searchSettings.parentSelector)\n          .getBoundingClientRect().left\n      : 0;\n    return Math.floor(rightPosition - leftPosition - leftPadding);\n  }\n  getClass() {\n    const cls =\n      this.searchSettings && this.searchSettings.size === 'large'\n        ? 'usa-search--big'\n        : 'usa-search--small';\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\n      ? `${cls} sds-inverse`\n      : cls;\n  }\n  clearInput(ev) {\n    this.inputEl.nativeElement.value = '';\n    this.writeValueToModel();\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data:
            'input::-ms-clear {\n  display: none;\n}\n\n.suffix-icon {\n  input::-webkit-search-cancel-button {\n    display: none;\n  }\n\n  .postfix~input {\n    width: 80%;\n    width: calc(100% - 8rem);\n    margin-left: 0px;\n    margin-right: 6rem !important;\n  }\n\n  .postfix {\n    color: #3f57a6;\n    position: absolute;\n    right: 15px;\n    font-size: 2rem;\n    -webkit-transition: color .2s;\n    transition: color .2s;\n  }\n\n  .search-icon {\n    top: 0px;\n  }\n\n  .close-icon {\n    width: 4rem;\n    top: 4px;\n  }\n}\n.no-drop{\n  width: 100%;\n}\n\n@media only screen and (min-width: 480px){\n  .usa-form.usa-search select {\n      max-width: unset;\n  }\n}\n',
          styleUrl: 'search.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
          },
          {
            name: 'focusMonitor',
            type: 'FocusMonitor',
          },
          {
            name: 'viewportRuler',
            type: 'ViewportRuler',
          },
        ],
        line: 64,
        jsdoctags: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'focusMonitor',
            type: 'FocusMonitor',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'viewportRuler',
            type: 'ViewportRuler',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['AfterViewInit', 'ControlValueAccessor'],
      templateData:
        '<form class="usa-form usa-search grid-row" [ngClass]="getClass()" role="search">\n  <label *ngIf="hasDropdown()" class="usa-sr-only" [attr.for]="searchSettings.dropdown.id">Dropdown label</label>\n  <select *ngIf="hasDropdown()" [value]="model.searchCategory? model.searchCategory :\'\'" #selectEl name="search options"\n    aria-label="Search Options" class="usa-select grid-col-12 tablet:grid-col-auto" [attr.id]="searchSettings.dropdown.id"\n    (change)="writeValueToModel()">\n    <ng-container *ngFor="let item of searchSettings.dropdown.options">\n      <optgroup *ngIf="item.group" label="{{item.label}}">\n        <option *ngFor="let child of item.group" [value]="child.value" [selected]="model.searchCategory == child.value"\n          [disabled]="child.disabled">\n          {{ child.label }}\n        </option>\n      </optgroup>\n      <option *ngIf="!item.group" [value]="item.value" [selected]="model.searchCategory == item.value"\n        [disabled]="item.disabled">{{\n        item.label }}</option>\n    </ng-container>\n  </select>\n  <ng-container [ngTemplateOutlet]="inputTemplate"></ng-container>\n</form>\n\n<ng-template #inputTemplate>\n\n  <div class="position-relative grid-col-12" [ngClass]="{\n  \'suffix-icon\': searchSettings.isSuffixSearchIcon, \'tablet:grid-col\': hasDropdown()}">\n    <label class="usa-sr-only" [attr.for]="searchSettings.id">Search</label>\n    <input #inputEl [value]="model.searchText? model.searchText :\'\'" [ngClass]="[searchSettings?.inputClass ? searchSettings?.inputClass : \'\', !hasDropdown() ? \'no-drop\' : \'\']"\n      [attr.id]="searchSettings.id" type="search" class="usa-input sds-min-width-160" name="search"\n      [placeholder]="searchSettings.placeholder? searchSettings.placeholder : \'type here\'"\n      [attr.aria-label]="searchSettings.ariaLabel" (blur)="focusChange()" (input)="writeValueToModel()"/>\n\n    <span *ngIf="searchSettings.isSuffixSearchIcon" class="cursor-pointer display-flex flex-align-center">\n      <span *ngIf="model.searchText" class="postfix close-icon" role="button" aria-label="Clear input"\n        (click)="clearInput($event)" (keyup.enter)="clearInput($event)" tabindex="0">\n        <usa-icon [icon]="\'x\'" [size]="searchSettings.size === \'large\'?\'2x\':\'1x\'"></usa-icon>\n      </span>\n      <span class="postfix search-icon" role="button" aria-label="search input" (click)="handleClick($event)"\n        (keyup.enter)="handleClick($event)" tabindex="0">\n        <usa-icon [icon]="\'search\'" [size]="searchSettings.size === \'large\'?\'1x\':\'xs\'">\n        </usa-icon>\n      </span>\n    </span>\n    <button *ngIf="!searchSettings.isSuffixSearchIcon" #buttonEl class="usa-button" type="submit"\n      [attr.aria-label]="searchSettings.ariaLabel ? searchSettings.ariaLabel : \'Search\'" (click)="handleClick($event)">\n    </button>\n  </div>\n\n</ng-template>\n',
    },
    {
      name: 'SdsSearchResultListComponent',
      id:
        'component-SdsSearchResultListComponent-2f400b38cccaa84011a099fc2bf63c22',
      file:
        'libs/packages/components/src/lib/search-result-list/search-result-list.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-search-result-list',
      styleUrls: ['./search-result-list.component.scss'],
      styles: [],
      templateUrl: ['./search-result-list.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'customResultsTemplate',
          description:
            '<p>Allow to insert a customized template for no results to use</p>\n',
          line: 20,
          type: 'TemplateRef<any>',
        },
        {
          name: 'divider',
          defaultValue: 'true',
          description: '<p>Show divider between results</p>\n',
          line: 41,
        },
        {
          name: 'isDefaultModel',
          line: 22,
          type: 'boolean',
        },
        {
          name: 'model',
          description: '<p>Model for search results</p>\n',
          line: 28,
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'resultContentTemplate',
          type: 'TemplateRef<any>',
          optional: false,
          description:
            '<p>Child Template to be used to display the data for each item in the list of items</p>\n',
          line: 48,
          decorators: [
            {
              name: 'ContentChild',
              stringifiedArguments: "'resultContent'",
            },
          ],
        },
        {
          name: 'updateModel',
          defaultValue: 'new SearchModel()',
          type: '',
          optional: false,
          description: '',
          line: 16,
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'goBack',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 50,
        },
        {
          name: 'isTemplate',
          args: [],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 53,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  Input,\n  ContentChild,\n  TemplateRef,\n  OnInit,\n} from '@angular/core';\nimport { SearchModel } from './model/search-results.model';\nimport { Location } from '@angular/common';\n@Component({\n  selector: 'sds-search-result-list',\n  templateUrl: './search-result-list.component.html',\n  styleUrls: ['./search-result-list.component.scss'],\n})\nexport class SdsSearchResultListComponent {\n  public updateModel = new SearchModel();\n  /**\n   * Allow to insert a customized template for no results to use\n   */\n  @Input() customResultsTemplate: TemplateRef<any>;\n\n  @Input() isDefaultModel: boolean;\n\n  /**\n   * Model for search results\n   */\n  @Input('model')\n  set model(value) {\n    if (Array.isArray(value)) {\n      const items = value;\n      this.updateModel = new SearchModel();\n      this.updateModel.results = items;\n    } else {\n      this.updateModel = value;\n    }\n  }\n\n  /**\n   * Show divider between results\n   */\n  @Input() divider = true;\n\n  constructor(private _location: Location) {}\n\n  /**\n   * Child Template to be used to display the data for each item in the list of items\n   */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n\n  goBack() {\n    this._location.back();\n  }\n  isTemplate() {\n    if (this.updateModel && this.updateModel.metadata) {\n      return Array.isArray(this.updateModel.metadata.messages);\n    }\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './search-result-list.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: '_location',
            type: 'Location',
          },
        ],
        line: 41,
        jsdoctags: [
          {
            name: '_location',
            type: 'Location',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      accessors: {
        model: {
          name: 'model',
          setSignature: {
            name: 'model',
            type: 'void',
            args: [
              {
                name: 'value',
                type: '',
              },
            ],
            returnType: 'void',
            line: 28,
            description: '<p>Model for search results</p>\n',
            jsdoctags: [
              {
                name: 'value',
                type: '',
                tagName: {
                  text: 'param',
                },
              },
            ],
          },
        },
      },
      templateData:
        '<ng-container *ngIf="updateModel?.results?.length">\n  <div *ngFor="let item of updateModel.results">\n    <hr *ngIf="divider" class="fine" />\n    <ng-container *ngTemplateOutlet="resultContentTemplate,\n                   context: { $implicit: item }"></ng-container>\n  </div>\n  <hr *ngIf="divider && updateModel?.results?.length" class="fine" />\n</ng-container>\n\n<ng-container *ngIf="(customResultsTemplate && !(updateModel?.results?.length))"\n  [ngTemplateOutlet]="customResultsTemplate" [ngTemplateOutletContext]="{$implicit:updateModel}">\n</ng-container>\n\n<!-- <ng-container *ngIf="(!updateModel?.metadata?.messages && updateModel?.results?.length === 0)">\n  <div class="sds-card sds-card--vertical sds-card--shadowed sds-card--bordered">\n    This is initial template\n  </div>\n</ng-container> -->\n<div aria-live="polite" aria-atomic="true">\n  <ng-container *ngIf="!customResultsTemplate">\n    <ng-container\n      *ngIf="(updateModel == null || (!updateModel?.metadata?.messages && updateModel?.results?.length === 0))">\n      <ng-container *ngIf="!isDefaultModel">\n        <div class="sds-card sds-card--vertical sds-card--shadowed sds-card--bordered bg-base-lightest">\n          <div class="sds-card__header padding-3">\n            <usa-stacked-icon [size]="\'2x\'" aria-label="search results">\n\n              <usa-icon class="usa-stack-icon" [size]="\'3x\'" [icon]="\'circle\'"></usa-icon>\n              <usa-icon class="usa-stack-icon" [size]="\'2x\'" [icon]="\'search\'"></usa-icon>\n            </usa-stacked-icon>\n          </div>\n          <div class="sds-card__body margin-2">\n            <h1 class="sds-card__title">No matches found</h1>\n            <p>We couldn\'t find a match for your search criteria.</p>\n            <p>Please try another search or go back to previous results.</p>\n            <div class="margin-top-3">\n              <button class="usa-button usa-button--outline" (click)="goBack()">Go Back</button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf="isDefaultModel">\n        <div class="sds-card sds-card--vertical sds-card--shadowed sds-card--bordered bg-base-lightest">\n          <div class="sds-card__header">\n            <usa-icon [icon]="\'arrow-left-circle-fill\'" [size]="\'5x\'"></usa-icon>\n          </div>\n          <div class="sds-card__body margin-2">\n            <h1 class="sds-card__title">Select Criteria</h1>\n            <p>Choose your filters and run your report to begin.</p>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n\n\n    <ng-container *ngIf="updateModel?.metadata?.messages">\n      <ng-container *ngIf="!isTemplate()">\n        <ng-container *ngTemplateOutlet="updateModel?.metadata?.messages"></ng-container>\n      </ng-container>\n      <ng-container *ngIf="isTemplate()">\n        <div *ngFor="let msg of updateModel.metadata.messages" class="sds-card sds-card--shadowed sds-card--bordered"\n          [ngClass]="[(msg.type !== \'loading\') ? \'sds-card--vertical\': \'\', msg.classes ? msg.classes : \'\']">\n          <ng-container *ngIf="msg.type !== \'loading\' else loading">\n            <div class="sds-card__header">\n              <usa-icon\n                [icon]="(msg.type ===\'error\') ?  [\'sds\', \'alert-error\'] :( (msg.type ===\'info\') ? \'info-circle\' :( (msg.type ===\'initial\') ? \'arrow-left-circle-fill\': \'search\'))"\n                [size]="\'5x\'">\n              </usa-icon>\n            </div>\n            <div class="sds-card__body margin-2">\n              <h1 class="sds-card__title">{{msg.title}}</h1>\n              <p [innerHTML]="msg.message"></p>\n              <div class="sds-card__buttons">\n                <button *ngFor="let button of msg.buttons" class="usa-button" [attr.aria-label]="button.ariaLabel"\n                  [ngClass]="button.classes ? button.classes : \'usa-button--outline\'" (click)="button.action()">\n                  {{button.text}}\n                </button>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class="grid-container padding-left-0">\n    <div class="sds-load grid-row">\n      <div class="grid-col-5 sds-load__title"></div>\n    </div>\n    <div class="sds-load margin-top-1">\n      <div class="tablet:grid-col-fill sds-load__element"></div>\n    </div>\n    <div class="sds-load margin-top-1">\n      <div class="grid-col-8 height-4 sds-load__content"></div>\n    </div>\n  </div>\n</ng-template>\n',
    },
    {
      name: 'SDSSelectedResultComponent',
      id:
        'component-SDSSelectedResultComponent-151a3933bf52d0c226b98f5b8e2fda2e',
      file:
        'libs/packages/components/src/lib/selected-result/selected-result.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name: 'SDS_SelectedResult_VALUE_ACCESSOR',
        },
      ],
      selector: 'sds-selected-result',
      styleUrls: ['./selected-result.component.scss'],
      styles: [],
      templateUrl: ['./selected-result.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'configuration',
          description:
            '<p>Configuration for the Selected Results control </p>\n',
          line: 37,
          type: 'SDSSelectedResultConfiguration',
        },
        {
          name: 'disabled',
          line: 50,
          type: 'boolean',
        },
        {
          name: 'itemTemplate',
          description:
            '<p>Allow to insert a customized template for suggestions to use</p>\n',
          line: 25,
          type: 'TemplateRef<any>',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'model',
          type: 'SDSSelectedItemModel',
          optional: false,
          description: '<p>The data model that has the selected item</p>\n',
          line: 30,
          modifierKind: [114],
        },
        {
          name: 'onTouchedCallback',
          defaultValue: '() => {...}',
          type: 'function',
          optional: false,
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 42,
          modifierKind: [114],
        },
        {
          name: 'propogateChange',
          defaultValue: '() => {...}',
          type: 'function',
          optional: false,
          description: '<p>Stored Event for ControlValueAccessor</p>\n',
          line: 47,
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'getObjectValue',
          args: [
            {
              name: 'object',
              type: 'Object',
            },
            {
              name: 'propertyFields',
              type: 'string',
            },
            {
              name: 'index',
              type: 'number',
              optional: true,
            },
          ],
          optional: false,
          returnType: 'string',
          typeParameters: [],
          line: 89,
          description:
            '<p>Gets the string value from the specifed properties of an object</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 2211,
                end: 2217,
                flags: 0,
                escapedText: 'object',
              },
              type: 'Object',
              tagName: {
                pos: 2205,
                end: 2210,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2231,
                end: 2245,
                flags: 0,
                escapedText: 'propertyFields',
              },
              type: 'string',
              tagName: {
                pos: 2225,
                end: 2230,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>comma seperated list with periods depth of object</p>\n',
            },
            {
              name: {
                pos: 2308,
                end: 2313,
                flags: 0,
                escapedText: 'index',
              },
              type: 'number',
              optional: true,
              tagName: {
                pos: 2302,
                end: 2307,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<ul>\n<li>the index location of the value in model&#39;s item list</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 70,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 74,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'removeItem',
          args: [
            {
              name: 'item',
              type: 'object',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 56,
          description: '<p>Removes item from the model</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 1505,
                end: 1509,
                flags: 0,
                escapedText: 'item',
              },
              type: 'object',
              tagName: {
                pos: 1499,
                end: 1504,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'setDisabledState',
          args: [
            {
              name: 'isDisabled',
              type: 'boolean',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 78,
          jsdoctags: [
            {
              name: 'isDisabled',
              type: 'boolean',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'obj',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 64,
          jsdoctags: [
            {
              name: 'obj',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Input, TemplateRef, forwardRef } from '@angular/core';\nimport { SDSSelectedItemModel } from './models/sds-selectedItem.model';\nimport { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\nimport { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';\n\nconst SDS_SelectedResult_VALUE_ACCESSOR: any = {\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n};\n\n@Component({\n  selector: 'sds-selected-result',\n  templateUrl: './selected-result.component.html',\n  styleUrls: ['./selected-result.component.scss'],\n  providers: [SDS_SelectedResult_VALUE_ACCESSOR]\n})\nexport class SDSSelectedResultComponent implements ControlValueAccessor {\n  \n\n  /**\n  * Allow to insert a customized template for suggestions to use\n  */\n  @Input() itemTemplate: TemplateRef<any>;\n\n  /**\n   * The data model that has the selected item\n   */\n  public model: SDSSelectedItemModel;\n\n\n  /**\n  * Configuration for the Selected Results control \n  */\n  @Input()\n  public configuration: SDSSelectedResultConfiguration;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public onTouchedCallback: () => void = () => null;\n\n  /**\n   * Stored Event for ControlValueAccessor\n   */\n  public propogateChange: (_: any) => void = (_: any) => null;\n\n  @Input()\n  public disabled: boolean;\n\n  /**\n   * Removes item from the model\n   * @param item \n   */\n  removeItem(item: object) {\n    if (!this.disabled) {\n      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model);\n      this.propogateChange(this.model);\n      this.onTouchedCallback();\n    }\n  }\n\n  writeValue(obj: any): void {\n    if (obj instanceof SDSSelectedItemModel) {\n      this.model = obj as SDSSelectedItemModel;\n    }\n  }\n\n  registerOnChange(fn: any): void {\n    this.propogateChange = fn;\n  }\n\n  registerOnTouched(fn: any): void {\n    this.onTouchedCallback = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n\n\n  /**\n   * Gets the string value from the specifed properties of an object\n   * @param object \n   * @param propertyFields comma seperated list with periods depth of object\n   * @param index - the index location of the value in model's item list\n   */\n  getObjectValue(object: Object, propertyFields: string, index?: number): string {\n    let value = '';\n    let current = object;\n    let fieldSplit = propertyFields.split(',');\n    for (let i = 0; i < fieldSplit.length; i++) {\n      let fieldValue = fieldSplit[i];\n      let fieldPartSplit = fieldValue.split('.');\n      for (let j = 0; j < fieldPartSplit.length; j++) {\n        let fieldCheckValue = fieldPartSplit[j];\n        if (current) {\n          current = current[fieldCheckValue];\n        }\n      }\n\n      if (current) {\n        value += current.toString() + ' ';\n      }\n      current = object;\n    }\n\n    return this.configuration.displayModifierFn ? this.configuration.displayModifierFn(value.trim(), index) : value.trim();\n  }\n\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './selected-result.component.scss',
        },
      ],
      stylesData: '',
      implements: ['ControlValueAccessor'],
      templateData:
        '<ul *ngIf="model" [attr.aria-label]="configuration.labelText + \' results\'"\n  class="usa-list usa-list--unstyled sds-autocomplete-selected" aria-relevant="additions" role="listbox"\n  aria-live="polite">\n  <li role="option" *ngFor="let result of model.items; let i = index">\n    <div class="sds-tag sds-tag--chip sds-tag--input" [ngClass]="disabled ? \'sds-tag--disabled\' : \'\'">\n      <ng-container *ngIf="itemTemplate" [ngTemplateOutlet]="itemTemplate"\n        [ngTemplateOutletContext]="{ $implicit: result }">\n      </ng-container>\n      <ng-container *ngIf="!itemTemplate">\n        <div class="sds--tag__item">\n          <div>\n            {{ getObjectValue(result, configuration.primaryTextField, i) }}\n          </div>\n          <div *ngIf="\n              configuration.secondaryTextField &&\n              result[configuration.secondaryTextField]\n            ">\n            {{ result[configuration.secondaryTextField] }}\n          </div>\n        </div>\n      </ng-container>\n      <button *ngIf="!disabled" [attr.aria-label]="\n          \'Remove Item \' +\n          getObjectValue(result, configuration.primaryTextField, i)\n        " [class.text-base]="disabled" aria-hidden="false" class="sds-tag__close" (click)="removeItem(result)"\n        (keyup.enter)="removeItem(result)">\n        <usa-icon [icon]="\'x\'" size="lg"></usa-icon>\n      </button>\n    </div>\n  </li>\n</ul>\n',
    },
    {
      name: 'SdsSelectionPanelComponent',
      id:
        'component-SdsSelectionPanelComponent-cc5f4b90a3ee0e68bc91a141fc526344',
      file:
        'libs/packages/components/src/lib/selection-panel/selection-panel-wrapper/selection-panel.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-selection-panel',
      styleUrls: [],
      styles: [],
      templateUrl: ['./selection-panel.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'currentSelection',
          description:
            '<p>Allows users to programatically select panel item. Can also be used\nto select initial panel</p>\n',
          line: 28,
          type: 'NavigationLink',
        },
        {
          name: 'model',
          description:
            '<p>Model containing navigation links as well as a selection mode property.\nNavigation mode is implied if no selection mode is passed in</p>\n',
          line: 15,
          type: 'SelectionPanelModel',
        },
        {
          name: 'navigateOnClick',
          description:
            '<p>True if users would prefer to navigate on panel selection, false otherwise.\nNavigation feature is not supported on SELECTION mode. On NAVIGATION mode,\nthis is enabled by default</p>\n',
          line: 22,
          type: 'boolean',
        },
      ],
      outputsClass: [
        {
          name: 'panelSelected',
          defaultValue: 'new EventEmitter<NavigationLink>()',
          description:
            '<p>Outputs a NavigationLink item when it is selected from the panel</p>\n',
          line: 33,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, EventEmitter, Input, Output } from '@angular/core';\nimport { NavigationLink } from '../../side-navigation/model/side-navigation-model';\nimport { SelectionPanelModel } from '../model/selection-panel.model';\n\n@Component({\n  selector: 'sds-selection-panel',\n  templateUrl: './selection-panel.component.html',\n})\nexport class SdsSelectionPanelComponent {\n\n  /**\n   * Model containing navigation links as well as a selection mode property.\n   * Navigation mode is implied if no selection mode is passed in\n   */\n  @Input() model: SelectionPanelModel;\n  \n  /**\n   * True if users would prefer to navigate on panel selection, false otherwise.\n   * Navigation feature is not supported on SELECTION mode. On NAVIGATION mode,\n   * this is enabled by default\n   */\n  @Input() navigateOnClick: boolean;\n\n  /**\n   * Allows users to programatically select panel item. Can also be used\n   * to select initial panel\n   */\n  @Input() currentSelection: NavigationLink;\n\n  /**\n   * Outputs a NavigationLink item when it is selected from the panel\n   */\n  @Output() panelSelected = new EventEmitter<NavigationLink>();\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      templateData:
        '<ng-container *ngIf="model.selectionMode && model.selectionMode === \'SELECTION\'; else selectionMode">\n  <sds-selection-panel-selection-mode \n  [model]="model" \n  [currentSelection]="currentSelection"\n  (panelSelected)="panelSelected.emit($event)">\n  </sds-selection-panel-selection-mode>\n</ng-container>\n\n<!-- Default mode if no selectionMode is passed in -->\n<ng-template #selectionMode>\n  <sds-selection-panel-navigation-mode \n  [model]="model" \n  [navigateOnClick]="navigateOnClick" \n  [currentSelection]="currentSelection"\n  (panelSelected)="panelSelected.emit($event)">\n  </sds-selection-panel-navigation-mode>\n</ng-template>',
    },
    {
      name: 'SdsSelectionPanelNavigationModeComponent',
      id:
        'component-SdsSelectionPanelNavigationModeComponent-1a83f56bdef8d311cf6923f1ebc194ac',
      file:
        'libs/packages/components/src/lib/selection-panel/navigation-mode/navigation-mode.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-selection-panel-navigation-mode',
      styleUrls: ['./navigation-mode.component.scss'],
      styles: [],
      templateUrl: ['./navigation-mode.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'currentSelection',
          line: 17,
          type: 'NavigationLink',
        },
        {
          name: 'model',
          line: 13,
          type: 'SelectionPanelModel',
        },
        {
          name: 'navigateOnClick',
          defaultValue: 'true',
          line: 15,
        },
      ],
      outputsClass: [
        {
          name: 'panelSelected',
          defaultValue: 'new EventEmitter<NavigationLink>()',
          line: 19,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'deselectSideNav',
          args: [
            {
              name: 'sidenavItems',
              type: 'NavigationLink[]',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 66,
          description:
            '<p>Deselects any previously selected sidenav item</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 1992,
                end: 2004,
                flags: 0,
                escapedText: 'sidenavItems',
              },
              type: 'NavigationLink[]',
              tagName: {
                pos: 1986,
                end: 1991,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'navigateToSelectedItem',
          args: [
            {
              name: 'selectedPanel',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 47,
          jsdoctags: [
            {
              name: 'selectedPanel',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnChanges',
          args: [
            {
              name: 'changes',
              type: 'SimpleChanges',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 26,
          jsdoctags: [
            {
              name: 'changes',
              type: 'SimpleChanges',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'onPanelItemClick',
          args: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 36,
          jsdoctags: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'selectPanel',
          args: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 57,
          description: '<p>Public interface to select panel item </p>\n',
          modifierKind: [114],
          jsdoctags: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'selectSideNav',
          args: [
            {
              name: 'selectedItem',
              type: 'NavigationLink',
            },
            {
              name: 'allNavItems',
              type: 'NavigationLink[]',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 80,
          description:
            '<p>Selects the clicked sidenav item as we as any parent</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 2336,
                end: 2348,
                flags: 0,
                escapedText: 'selectedItem',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 2330,
                end: 2335,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2361,
                end: 2372,
                flags: 0,
                escapedText: 'allNavItems',
              },
              type: 'NavigationLink[]',
              tagName: {
                pos: 2355,
                end: 2360,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';\nimport { ActivatedRoute, NavigationExtras, Router } from '@angular/router';\nimport { NavigationLink, SideNavigationModel } from '../../side-navigation/model/side-navigation-model';\nimport { SelectionPanelModel } from '../model/selection-panel.model';\n\n@Component({\n  selector: 'sds-selection-panel-navigation-mode',\n  templateUrl: './navigation-mode.component.html',\n  styleUrls: ['./navigation-mode.component.scss'],\n})\nexport class SdsSelectionPanelNavigationModeComponent implements OnChanges {\n\n  @Input() model: SelectionPanelModel;\n\n  @Input() navigateOnClick = true;\n\n  @Input() currentSelection: NavigationLink;\n\n  @Output() panelSelected = new EventEmitter<NavigationLink>();\n\n  constructor(\n    private router: Router,\n    private activatedRoute: ActivatedRoute,\n  ) { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (this.model && this.currentSelection && changes.currentSelection) {\n      this.selectPanel(this.currentSelection);\n\n      if (this.navigateOnClick) {\n        this.navigateToSelectedItem(this.currentSelection);\n      }\n    }\n  }\n\n  onPanelItemClick(panelItem: NavigationLink) {\n    this.selectPanel(panelItem);\n    this.currentSelection = panelItem;\n    \n    if (this.navigateOnClick) {\n      this.navigateToSelectedItem(panelItem);\n    }\n\n    this.panelSelected.emit(panelItem);\n  }\n\n  navigateToSelectedItem(selectedPanel: NavigationLink) {\n    const navigationExtras: NavigationExtras = {\n      queryParams: selectedPanel.queryParams,\n      relativeTo: this.activatedRoute\n    }\n\n    this.router.navigateByUrl(selectedPanel.route, navigationExtras);\n  }\n\n  /** Public interface to select panel item */\n  public selectPanel(panelItem: NavigationLink) {\n    this.deselectSideNav(this.model.navigationLinks);\n    this.selectSideNav(panelItem, this.model.navigationLinks);\n  }\n\n  /**\n * Deselects any previously selected sidenav item\n * @param sidenavItems\n */\n  private deselectSideNav(sidenavItems: NavigationLink[]): void {\n    sidenavItems.forEach(sideNavItem => {\n      if (sideNavItem.children) {\n        this.deselectSideNav(sideNavItem.children);\n      }\n      sideNavItem.selected = false;\n    });\n  }\n\n  /**\n   * Selects the clicked sidenav item as we as any parent\n   * @param selectedItem\n   * @param allNavItems\n   */\n  private selectSideNav(selectedItem: NavigationLink, allNavItems: NavigationLink[]): boolean {\n    for (const item of allNavItems) {\n      if (item === selectedItem) {\n        item.selected = true;\n        return true;\n      } else if (item.children) {\n        const isChildSelected = this.selectSideNav(selectedItem, item.children);\n        if (isChildSelected) {\n          item.selected = true;\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './navigation-mode.component.scss',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'router',
            type: 'Router',
          },
          {
            name: 'activatedRoute',
            type: 'ActivatedRoute',
          },
        ],
        line: 19,
        jsdoctags: [
          {
            name: 'router',
            type: 'Router',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'activatedRoute',
            type: 'ActivatedRoute',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['OnChanges'],
      templateData:
        '\n<ul class="usa-sidenav usa-sidenav--styled">\n  <li *ngFor="let panelItem of model.navigationLinks">\n    <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{$implicit:panelItem}">\n    </ng-container>\n  </li>\n</ul>\n\n<ng-template #subPanelTemplate let-panelItem>\n  <a href="javascript:void(0);" class="usa-sidenav__item" (click)="onPanelItemClick(panelItem)" \n    [ngClass]="{\'usa-current\': panelItem.selected}">\n    <span>{{panelItem.text}}</span>\n  </a>\n  <ul *ngIf="panelItem.children" class="usa-sidenav__sublist">\n    <li *ngFor="let panelItem of panelItem.children">\n      <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{$implicit:panelItem}">\n      </ng-container>\n    </li>\n  </ul>\n</ng-template>\n',
    },
    {
      name: 'SdsSelectionPanelSelectionModeComponent',
      id:
        'component-SdsSelectionPanelSelectionModeComponent-66aceb6dec71b4bbec7201122a25ce74',
      file:
        'libs/packages/components/src/lib/selection-panel/selection-mode/selection-mode.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-selection-panel-selection-mode',
      styleUrls: ['./selection-mode.component.scss'],
      styles: [],
      templateUrl: ['./selection-mode.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'currentSelection',
          line: 14,
          type: 'NavigationLink',
        },
        {
          name: 'model',
          line: 12,
          type: 'SideNavigationModel',
        },
      ],
      outputsClass: [
        {
          name: 'panelSelected',
          defaultValue: 'new EventEmitter<NavigationLink>()',
          line: 16,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'onPanelItemClick',
          args: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 18,
          jsdoctags: [
            {
              name: 'panelItem',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, EventEmitter, Input, Output } from '@angular/core';\nimport { NavigationLink, SideNavigationModel } from '../..//side-navigation/model/side-navigation-model';\n\n@Component({\n  selector: 'sds-selection-panel-selection-mode',\n  templateUrl: './selection-mode.component.html',\n  styleUrls: ['./selection-mode.component.scss'],\n})\nexport class SdsSelectionPanelSelectionModeComponent {\n\n  @Input()\n  model: SideNavigationModel;\n  \n  @Input() currentSelection: NavigationLink;\n\n  @Output() panelSelected = new EventEmitter<NavigationLink>();\n\n  onPanelItemClick(panelItem: NavigationLink) {\n    this.currentSelection = panelItem;\n    this.panelSelected.emit(panelItem);\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './selection-mode.component.scss',
        },
      ],
      stylesData: '',
      templateData:
        '<ul class="usa-sidenav usa-sidenav--styled">\n  <li *ngFor="let panelItem of model.navigationLinks" class="usa-sidenav__item"\n    [ngClass]="{\'usa-current\': currentSelection && panelItem.id === currentSelection.id}">\n    <a href="javascript:void(0);" (click)="onPanelItemClick(panelItem)">{{panelItem.text}}</a>\n  </li>\n</ul>\n',
    },
    {
      name: 'SdsSideNavigationComponent',
      id:
        'component-SdsSideNavigationComponent-1a1255c3e871feb460727f48cf951077',
      file:
        'libs/packages/components/src/lib/side-navigation/side-navigation.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-side-navigation',
      styleUrls: ['./side-navigation.component.scss'],
      styles: [],
      templateUrl: ['./side-navigation.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'ariaLabel',
          description:
            '<p>A brief description of the purpose of the navigation, omitting the term &quot;navigation&quot;, \nas the screen reader will read both the role and the contents of the label</p>\n',
          line: 41,
          type: 'string',
        },
        {
          name: 'model',
          description:
            '<p>Model used for the different display portions of the side navigation </p>\n',
          line: 77,
          type: 'SideNavigationModel',
        },
      ],
      outputsClass: [
        {
          name: 'linkEvent',
          defaultValue: 'new EventEmitter<INavigationLink>()',
          description: '<p>event for event based</p>\n',
          line: 150,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: 'navigationHelper',
          defaultValue: 'new NavigationHelper()',
          type: '',
          optional: false,
          description: '<p>Navigation helper</p>\n',
          line: 72,
        },
        {
          name: 'sideNavEVENTLinkTemplate',
          type: 'TemplateRef<any>',
          optional: false,
          description:
            '<p>Reference to the the Template used for event response</p>\n',
          line: 35,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'sideNavEVENTLinkTemplate', {static: false}",
            },
          ],
          modifierKind: [112],
        },
        {
          name: 'sideNavHREFLinkTemplate',
          type: 'TemplateRef<any>',
          optional: false,
          description:
            '<p>Reference to the the Template used for external href </p>\n',
          line: 29,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'sideNavHREFLinkTemplate', {static: false}",
            },
          ],
          modifierKind: [112],
        },
        {
          name: 'sideNavLabelLinkTemplate',
          type: 'TemplateRef<any>',
          optional: false,
          description:
            '<p>Reference to the the Template used for side menu items that are a label</p>\n',
          line: 23,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'sideNavLabelLinkTemplate', {static: false}",
            },
          ],
          modifierKind: [112],
        },
        {
          name: 'sideNavRouteLinkTemplate',
          type: 'TemplateRef<any>',
          optional: false,
          description:
            '<p>Reference to the the Template used for internal links</p>\n',
          line: 17,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments:
                "'sideNavRouteLinkTemplate', {static: false}",
            },
          ],
          modifierKind: [112],
        },
      ],
      methodsClass: [
        {
          name: 'deselect',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 122,
          description:
            '<p>Deselects all the items in the side navigation model</p>\n',
        },
        {
          name: 'deselectItem',
          args: [
            {
              name: 'item',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 135,
          description:
            '<p>checks if item is selected and if selcted will check children and will unselect</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'item',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getItemTemplate',
          args: [
            {
              name: 'item',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'TemplateRef<any>',
          typeParameters: [],
          line: 47,
          description:
            '<p>Takes the navigation item and returns the template to be used</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 1608,
                end: 1612,
                flags: 0,
                escapedText: 'item',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 1602,
                end: 1607,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>navigation item</p>\n',
            },
          ],
        },
        {
          name: 'linkClickEvent',
          args: [
            {
              name: 'link',
              type: 'INavigationLink',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 156,
          description:
            '<p>Link clicked and emits the link data into an event</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4227,
                end: 4231,
                flags: 0,
                escapedText: 'link',
              },
              type: 'INavigationLink',
              tagName: {
                pos: 4221,
                end: 4226,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'queryStringBuilder',
          args: [
            {
              name: 'item',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 184,
          description: '<p>creates query string</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 4841,
                end: 4845,
                flags: 0,
                escapedText: 'item',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 4835,
                end: 4840,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'select',
          args: [
            {
              name: 'id',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 83,
          description:
            '<p>Selects new item and parents and deselects previous</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 2512,
                end: 2514,
                flags: 0,
                escapedText: 'id',
              },
              type: 'string',
              tagName: {
                pos: 2506,
                end: 2511,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'selectItem',
          args: [
            {
              name: 'id',
              type: 'string',
            },
            {
              name: 'item',
              type: 'NavigationLink',
            },
            {
              name: 'parent',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 97,
          description:
            '<p>Selects item if matches passed in id and will select parent</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 2813,
                end: 2815,
                flags: 0,
                escapedText: 'id',
              },
              type: 'string',
              tagName: {
                pos: 2807,
                end: 2812,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2829,
                end: 2833,
                flags: 0,
                escapedText: 'item',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 2823,
                end: 2828,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
            {
              name: {
                pos: 2847,
                end: 2853,
                flags: 0,
                escapedText: 'parent',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 2841,
                end: 2846,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'urlBuilder',
          args: [
            {
              name: 'item',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 165,
          description:
            '<p>creates url from provided route and query params</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 4407,
                end: 4411,
                flags: 0,
                escapedText: 'item',
              },
              type: 'NavigationLink',
              tagName: {
                pos: 4401,
                end: 4406,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';\nimport { SideNavigationModel, NavigationLink } from './model/side-navigation-model';\nimport { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\n\n@Component({\n  selector: 'sds-side-navigation',\n  templateUrl: './side-navigation.component.html',\n  styleUrls: ['./side-navigation.component.scss']\n})\nexport class SdsSideNavigationComponent {\n\n  /**\n   * Reference to the the Template used for internal links\n   */\n  @ViewChild('sideNavRouteLinkTemplate', { static: false })\n  private sideNavRouteLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for side menu items that are a label\n   */\n  @ViewChild('sideNavLabelLinkTemplate', { static: false })\n  private sideNavLabelLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for external href \n   */\n  @ViewChild('sideNavHREFLinkTemplate', { static: false })\n  private sideNavHREFLinkTemplate: TemplateRef<any>;\n\n  /**\n   * Reference to the the Template used for event response\n   */\n  @ViewChild('sideNavEVENTLinkTemplate', { static: false })\n  private sideNavEVENTLinkTemplate: TemplateRef<any>;\n\n  /**\n   * A brief description of the purpose of the navigation, omitting the term \"navigation\", \n   * as the screen reader will read both the role and the contents of the label\n   */\n  @Input() ariaLabel: string;\n\n  /**\n   * Takes the navigation item and returns the template to be used\n   * @param item navigation item\n   */\n  getItemTemplate(item: NavigationLink): TemplateRef<any> {\n    let template = null;\n    switch (item.mode) {\n      case NavigationMode.EVENT:\n        template = this.sideNavEVENTLinkTemplate;\n        break;\n      case NavigationMode.EXTERNAL:\n        template = this.sideNavHREFLinkTemplate;\n        break;\n      case NavigationMode.INTERNAL:\n        template = this.sideNavRouteLinkTemplate;\n        break;\n      case NavigationMode.LABEL:\n        template = this.sideNavLabelLinkTemplate;\n        break;\n      default:\n        template = null;\n        break;\n    }\n    return template;\n  }\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the side navigation \n   */\n  @Input() model: SideNavigationModel;\n\n  /**\n   * Selects new item and parents and deselects previous\n   * @param id \n   */\n  select(id: string) {\n    this.deselect();\n    for (let i = 0; i < this.model.navigationLinks.length; i++) {\n      let item = this.model.navigationLinks[i];\n      this.selectItem(id, item, null);\n    }\n  }\n\n  /**\n   * Selects item if matches passed in id and will select parent\n   * @param id \n   * @param item \n   * @param parent \n   */\n  private selectItem(id: string, item: NavigationLink, parent: NavigationLink) {\n    if (item.id === id) {\n      item.selected = true;\n      if (parent) {\n        parent.selected = true;\n      }\n    } else {\n      if (item.children) {\n        for (let i = 0; i < item.children.length; i++) {\n          let childItem = item.children[i];\n          this.selectItem(id, childItem, item);\n        }\n        if (item.selected) {\n          if (parent) {\n            parent.selected = true;\n          }\n        }\n      }\n    }\n  }\n\n\n  /**\n   * Deselects all the items in the side navigation model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.navigationLinks) {\n        for (let i = 0; i < this.model.navigationLinks.length; i++) {\n          this.deselectItem(this.model.navigationLinks[i]);\n        }\n      }\n    }\n  }\n\n  /**\n   * checks if item is selected and if selcted will check children and will unselect\n   */\n  private deselectItem(item: NavigationLink) {\n    if (item.selected) {\n      item.selected = false;\n      if (item.children) {\n        for (let i = 0; i < item.children.length; i++) {\n          this.deselectItem(item.children[i]);\n        }\n      }\n    }\n  }\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link \n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  /**\n   * creates url from provided route and query params\n   * @param item \n   */\n  urlBuilder(item: NavigationLink) {\n    let url = item.route;\n    let queryParams = this.queryStringBuilder(item);\n    if (queryParams) {\n      if (url.indexOf('?') === -1) {\n        url += '?' + queryParams;\n      } else if (url.indexOf('?') === url.length - 1) {\n        url += queryParams;\n      } else {\n        url += '&' + queryParams;\n      }\n    }\n    return url;\n  }\n\n  /**\n   * creates query string\n   * @param item \n   */\n  private queryStringBuilder(item: NavigationLink) {\n    const ret = [];\n    for (let d in item.queryParams) {\n      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(item.queryParams[d]));\n    }\n    return ret.join('&');\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './side-navigation.component.scss',
        },
      ],
      stylesData: '',
      templateData:
        '<nav [attr.aria-label]="ariaLabel">\n  <ul class="usa-sidenav">\n    <li *ngFor="let link of model.navigationLinks" class="sidenav__item">\n      <ng-container [ngTemplateOutlet]="sideNavLinkTemplate" [ngTemplateOutletContext]="{$implicit:link}">\n      </ng-container>\n    </li>\n  </ul>\n</nav>\n\n<ng-template #sideNavLinkTemplate let-link>\n  <ng-container [ngTemplateOutlet]="getItemTemplate(link)" [ngTemplateOutletContext]="{$implicit:link}">\n  </ng-container>\n  <ul *ngIf="link.children" class="usa-sidenav__sublist">\n    <li *ngFor="let link of link.children" class="sidenav__item">\n      <ng-container [ngTemplateOutlet]="sideNavLinkTemplate" [ngTemplateOutletContext]="{$implicit:link}">\n      </ng-container>\n    </li>\n  </ul>\n</ng-template>\n\n<ng-template #sideNavRouteLinkTemplate let-link>\n  <a [attr.class]="link.selected ? \' usa-current\' : \'\'" [routerLink]="[link.route]" (click)="linkClickEvent(link)"\n    [queryParams]="link.queryParams" [queryParamsHandling]="link.queryParamsHandling">\n    <span>{{link.text}}</span>\n  </a>\n</ng-template>\n\n<ng-template #sideNavHREFLinkTemplate let-link>\n  <a [attr.class]="link.selected ? \' usa-current\' : \'\'" [attr.href]="urlBuilder(link)"\n    (click)="linkClickEvent(link)"><span>{{link.text}}</span></a>\n</ng-template>\n\n<ng-template #sideNavLabelLinkTemplate let-link>\n  <span [attr.class]="link.selected ? \' usa-current\' : \'\'"><span>{{link.text}}</span></span>\n</ng-template>\n\n<ng-template #sideNavEVENTLinkTemplate let-link>\n  <a [attr.class]="link.selected ? \' usa-current\' : \'\'" href="javascript:void(0)"\n    (click)="linkClickEvent(link)"><span>{{link.text}}</span></a>\n</ng-template>',
    },
    {
      name: 'SdsSideToolbarComponent',
      id: 'component-SdsSideToolbarComponent-81cae691ae6c01ab0b16ab5ea3833ea6',
      file:
        'libs/packages/components/src/lib/side-toolbar/side-toolbar.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-side-toolbar',
      styleUrls: [],
      styles: [],
      templateUrl: ['./side-toolbar.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'backButtonAria',
          line: 34,
          type: 'string',
        },
        {
          name: 'dialogTitleText',
          line: 31,
          type: 'string',
        },
        {
          name: 'responsiveButtonText',
          line: 28,
          type: 'string',
        },
        {
          name: 'responsiveDialogOptions',
          line: 37,
          type: 'SdsDialogConfig',
        },
        {
          name: 'responsiveSize',
          defaultValue: '480',
          line: 40,
        },
        {
          name: 'showApply',
          defaultValue: 'false',
          line: 42,
          type: 'boolean',
        },
      ],
      outputsClass: [
        {
          name: 'onApply',
          defaultValue: 'new EventEmitter()',
          line: 45,
          type: 'EventEmitter<any>',
        },
        {
          name: 'onCancel',
          defaultValue: 'new EventEmitter()',
          line: 44,
          type: 'EventEmitter<any>',
        },
        {
          name: 'responsiveDialog',
          defaultValue: 'new EventEmitter()',
          line: 47,
          type: 'EventEmitter',
        },
        {
          name: 'responsiveView',
          defaultValue: 'new EventEmitter()',
          line: 48,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: 'isResponsiveView',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '',
          line: 50,
        },
        {
          name: 'mobile',
          type: 'TemplateRef<any>',
          optional: false,
          description: '',
          line: 25,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'mobile'",
            },
          ],
        },
        {
          name: 'openResponsiveDialog',
          type: 'SdsDialogRef<TemplateRef<any>>',
          optional: false,
          description: '',
          line: 53,
          modifierKind: [112],
        },
        {
          name: 'subscription',
          defaultValue: 'new Subscription()',
          type: 'Subscription',
          optional: false,
          description: '',
          line: 52,
          modifierKind: [112],
        },
        {
          name: 'template',
          type: 'TemplateRef<any>',
          optional: false,
          description: '',
          line: 23,
          decorators: [
            {
              name: 'ContentChild',
              stringifiedArguments: 'TemplateRef',
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 73,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 62,
        },
        {
          name: 'observeViewChange',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 99,
          modifierKind: [112],
        },
        {
          name: 'onApplyClicked',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 126,
        },
        {
          name: 'onCancelClicked',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 120,
        },
        {
          name: 'onResponsiveViewButtonClicked',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 77,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  ContentChild,\n  EventEmitter,\n  Input,\n  OnDestroy,\n  OnInit,\n  Output,\n  TemplateRef,\n  ViewChild,\n} from '@angular/core';\nimport { SdsDialogRef } from '../dialog/dialog-ref';\nimport { BreakpointObserver } from '@angular/cdk/layout';\nimport { Subscription } from 'rxjs';\nimport { SdsDialogConfig } from '../dialog/dialog-config';\nimport { SdsDialogService } from '../dialog/dialog';\n\n@Component({\n  selector: 'sds-side-toolbar',\n  templateUrl: './side-toolbar.component.html',\n})\nexport class SdsSideToolbarComponent implements OnInit, OnDestroy {\n  @ContentChild(TemplateRef) template: TemplateRef<any>;\n\n  @ViewChild('mobile') mobile: TemplateRef<any>;\n\n  // Text for button in responsive view\n  @Input() responsiveButtonText: string;\n\n  // Text for title bar in responsive view. If not provided, will default to responsiveButtonText\n  @Input() dialogTitleText: string;\n\n  // Aria label to apply to back button. If not provided, will default to \"Cancel + ${dialogTitleText}\"\n  @Input() backButtonAria: string;\n\n\n  @Input() responsiveDialogOptions: SdsDialogConfig\n\n  // default value is size of mobile view in px\n  @Input() responsiveSize = 480;\n\n  @Input() showApply: boolean = false;\n\n  @Output() onCancel: EventEmitter<any> = new EventEmitter();\n  @Output() onApply: EventEmitter<any> = new EventEmitter();\n\n  @Output() responsiveDialog = new EventEmitter();\n  @Output() responsiveView = new EventEmitter();\n\n  isResponsiveView = false;\n\n  private subscription: Subscription = new Subscription();\n  private openResponsiveDialog: SdsDialogRef<TemplateRef<any>>;\n\n  constructor(\n    private sdsDialogService: SdsDialogService,\n    private breakpointObserver: BreakpointObserver // Will watch for changes between mobile and non-mobile screen size\n  ) {\n    console.warn('The side toolbar you are currently using is deprecated. Please instead import SdsSideToolbarModule from @gsa-sam/components')\n  }\n\n  ngOnInit() {\n    this.observeViewChange();\n    if (this.dialogTitleText === undefined) {\n      this.dialogTitleText = this.responsiveButtonText;\n    }\n    if (this.backButtonAria === undefined) {\n      this.backButtonAria = `Cancel ${this.dialogTitleText}`\n    }\n  }\n\n\n  ngOnDestroy() {\n    this.subscription.unsubscribe();\n  }\n\n  onResponsiveViewButtonClicked() {\n    let dialogOptions = {\n      height: '100vh',\n      width: '100vw',\n      maxWidth: '100vw',\n      maxHeight: '100vh',\n      hasBackdrop: false,\n      displayCloseBtn: false,\n      panelClass: ['sds-dialog--full']\n    };\n\n    let allOptions = this.responsiveDialogOptions ? { ...dialogOptions, ...this.responsiveDialogOptions } : dialogOptions;\n\n    this.openResponsiveDialog = this.sdsDialogService.open(this.mobile, allOptions);\n\n    this.responsiveDialog.emit(this.openResponsiveDialog);\n\n    this.openResponsiveDialog.afterClosed().subscribe(() => {\n      this.openResponsiveDialog = undefined;\n    })\n  }\n\n  private observeViewChange() {\n    const breakpointUnsubscription = this.breakpointObserver\n      .observe([`(max-width: ${this.responsiveSize}px)`])\n      .subscribe((result) => {\n        if (result.matches) {\n          this.isResponsiveView = true;\n        } else {\n          this.isResponsiveView = false;\n          if (this.openResponsiveDialog) {\n            this.openResponsiveDialog.close();\n            this.openResponsiveDialog = undefined;\n            this.responsiveDialog.emit(this.openResponsiveDialog);\n          }\n        }\n\n        this.responsiveView.emit(this.isResponsiveView);\n      });\n\n    this.subscription.add(breakpointUnsubscription);\n  }\n\n  onCancelClicked() {\n    this.openResponsiveDialog.close();\n    this.openResponsiveDialog = undefined;\n    this.onCancel.emit();\n  }\n\n  onApplyClicked() {\n    this.openResponsiveDialog.close();\n    this.openResponsiveDialog = undefined;\n    this.onApply.emit();\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'sdsDialogService',
            type: 'SdsDialogService',
          },
          {
            name: 'breakpointObserver',
            type: 'BreakpointObserver',
          },
        ],
        line: 53,
        jsdoctags: [
          {
            name: 'sdsDialogService',
            type: 'SdsDialogService',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'breakpointObserver',
            type: 'BreakpointObserver',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['OnInit', 'OnDestroy'],
      templateData:
        '<div *ngIf="!isResponsiveView">\n  <ng-container *ngTemplateOutlet="template"></ng-container>\n</div>\n\n<div *ngIf="isResponsiveView">\n  <button class="usa-button usa-button--accent-cool usa-button--hover text-secondary-dar" id="responsiveViewButton"\n    (click)="onResponsiveViewButtonClicked()" [attr.aria-label]="responsiveButtonText">\n    {{responsiveButtonText}}\n  </button>\n</div>\n\n<ng-template #mobile>\n  <div class="sds-card">\n    <div class="sds-card__header sds-card__header--accent-cool grid-row">\n      <button id="cancelButton" class="sds-button sds-button--circular sds-button--white" (click)="onCancelClicked()"\n        [attr.aria-label]="backButtonAria">\n        <usa-icon [icon]="\'chevron-left\'"></usa-icon>\n      </button>\n      <div class="margin-x-auto">\n        <h2 class="sds-card__title margin-top-1 margin-left-neg-2">{{dialogTitleText}}</h2>\n      </div>\n    </div>\n  </div>\n  <ng-container *ngTemplateOutlet="template"></ng-container>\n  <div class="sds-card" *ngIf="showApply">\n    <div class="sds-card__body sds-card__body--accent-cool">\n      <button class="usa-button" id="applyButton" aria-label="Apply" (click)="onApplyClicked()">Apply</button>\n    </div>\n  </div>\n</ng-template>',
    },
    {
      name: 'SdsSubPanelComponent',
      id: 'component-SdsSubPanelComponent-a1e8fb4448d6596f6f3e57389e2c5d33',
      file:
        'libs/packages/components/src/lib/selection-panel/sub-panel/sub-panel.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-sub-panel',
      styleUrls: [],
      styles: [],
      templateUrl: ['./sub-panel.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'currentSelection',
          line: 11,
          type: 'NavigationLink',
        },
        {
          name: 'model',
          line: 9,
          type: 'NavigationLink[]',
        },
      ],
      outputsClass: [
        {
          name: 'subPanelClicked',
          defaultValue: 'new EventEmitter<NavigationLink>()',
          line: 13,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'onSubPanelItemClicked',
          args: [
            {
              name: 'item',
              type: 'NavigationLink',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 15,
          jsdoctags: [
            {
              name: 'item',
              type: 'NavigationLink',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        'import { Component, EventEmitter, Input, Output } from "@angular/core";\nimport { NavigationLink, SideNavigationModel } from "../../side-navigation/model/side-navigation-model";\n\n@Component({\n  selector: `sds-sub-panel`,\n  templateUrl: \'./sub-panel.component.html\'\n})\nexport class SdsSubPanelComponent {\n  @Input() model: NavigationLink[];\n\n  @Input() currentSelection: NavigationLink;\n\n  @Output() subPanelClicked = new EventEmitter<NavigationLink>();\n\n  onSubPanelItemClicked(item: NavigationLink) {\n    this.currentSelection = item;\n    this.subPanelClicked.emit(item);\n  }\n\n}',
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      templateData:
        '\n<ul class="usa-sidenav sds-subpanel sds-list">\n  <li *ngFor="let panelItem of model" class="usa-sidenav__item">\n    <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{$implicit:panelItem}">\n    </ng-container>\n  </li>\n</ul>\n\n<ng-template #subPanelTemplate let-panelItem>\n  <a href="javascript:void(0);"\n  class="usa-link margin-right-neg-2" \n  [ngClass]="{\n    \'usa-link--active\': currentSelection && panelItem.id === currentSelection.id\n  }"\n  (click)="onSubPanelItemClicked(panelItem)">\n  {{panelItem.text}}</a>\n  <ul *ngIf="panelItem.children" class="usa-sidenav__sublist">\n    <li *ngFor="let panelItem of panelItem.children" class="sidenav__item">\n      <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{$implicit:panelItem}">\n      </ng-container>\n    </li>\n  </ul>\n</ng-template>\n',
    },
    {
      name: 'SdsTextChildComponent',
      id: 'component-SdsTextChildComponent-c11eaf163618dec5897ac362ed360fc2',
      file: 'libs/packages/components/src/lib/text/child.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-text-child',
      styleUrls: [],
      styles: [],
      template:
        '<ng-container *ngIf="items">\n  <span class="sds-tag sds-tag--chip margin-x-05" style="cursor:pointer;" *ngFor="let item of items; let i=index" (click)="removeItem(i)">{{item}} <small class="margin-left-05">(x)</small></span>\n</ng-container>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [
        {
          name: 'items',
          line: 13,
        },
      ],
      outputsClass: [
        {
          name: 'itemsChange',
          defaultValue: 'new EventEmitter()',
          line: 14,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [],
      methodsClass: [
        {
          name: 'removeItem',
          args: [
            {
              name: 'index',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 17,
          jsdoctags: [
            {
              name: 'index',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        'import { Component, Input, EventEmitter, Output } from \'@angular/core\';\nimport { Subject } from \'rxjs\';\n\n@Component({\n  selector: \'sds-text-child\',\n  template: `\n    <ng-container *ngIf="items">\n      <span class="sds-tag sds-tag--chip margin-x-05" style="cursor:pointer;" *ngFor="let item of items; let i=index" (click)="removeItem(i)">{{item}} <small class="margin-left-05">(x)</small></span>\n    </ng-container>\n  `\n})\nexport class SdsTextChildComponent  {\n    @Input() items;\n    @Output() itemsChange = new EventEmitter();\n\n    // Method to remove an item from the items array, emits an event that the parent component is listening for\n    removeItem(index){\n      this.items.splice(index, 1);\n      this.itemsChange.emit(this.items);\n    }\n\n}\n\n',
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
    },
    {
      name: 'SdsTextComponent',
      id: 'component-SdsTextComponent-f499ffdb4a5ab621dcee17fd41e7839b',
      file: 'libs/packages/components/src/lib/text/text.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [
        {
          name:
            '{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsTextComponent), multi: true\n}',
          type: 'component',
        },
      ],
      selector: 'sds-text',
      styleUrls: [],
      styles: [],
      template:
        '<div>\n  <input #searchInput class="usa-input display-inline-block" [attr.aria-label]="label"/>\n  <button class="usa-button margin-left-05 display-inline-block" (click)="addItem(searchInput.value); searchInput.value=\'\'">Add Item</button>\n</div>\n\n<h4>Component Items</h4>\n<pre>{{ items | json }}</pre>\n\n<hr />\n\n<h4>Child Component Items <small>(click to remove)</small></h4>\n<sds-text-child [(items)]="items" (itemsChange)="updateItems($event)"></sds-text-child>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [
        {
          name: 'label',
          line: 34,
          type: 'string',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: '_onChange',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 36,
          modifierKind: [112],
        },
        {
          name: '_onTouched',
          defaultValue: '() => {...}',
          type: '',
          optional: false,
          description: '',
          line: 37,
          modifierKind: [112],
        },
        {
          name: 'items',
          defaultValue: '[]',
          type: '[]',
          optional: false,
          description: '',
          line: 31,
        },
        {
          name: 'multiple',
          defaultValue: 'true',
          type: '',
          optional: false,
          description: '',
          line: 32,
        },
      ],
      methodsClass: [
        {
          name: 'addItem',
          args: [
            {
              name: 'val',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 42,
          jsdoctags: [
            {
              name: 'val',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getModel',
          args: [],
          optional: false,
          returnType: '{}',
          typeParameters: [],
          line: 61,
        },
        {
          name: 'registerOnChange',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 79,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'registerOnTouched',
          args: [
            {
              name: 'fn',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 84,
          jsdoctags: [
            {
              name: 'fn',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updateItems',
          args: [
            {
              name: '$event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 50,
          jsdoctags: [
            {
              name: '$event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'updateModel',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 55,
        },
        {
          name: 'writeValue',
          args: [
            {
              name: 'value',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 68,
          jsdoctags: [
            {
              name: 'value',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        'import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Input } from \'@angular/core\';\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from \'@angular/forms\';\n\n@Component({\n  selector: \'sds-text\',\n  template: `\n    <div>\n      <input #searchInput class="usa-input display-inline-block" [attr.aria-label]="label"/>\n      <button class="usa-button margin-left-05 display-inline-block" (click)="addItem(searchInput.value); searchInput.value=\'\'">Add Item</button>\n    </div>\n\n    <h4>Component Items</h4>\n    <pre>{{ items | json }}</pre>\n\n    <hr />\n\n    <h4>Child Component Items <small>(click to remove)</small></h4>\n    <sds-text-child [(items)]="items" (itemsChange)="updateItems($event)"></sds-text-child>\n  `,\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsTextComponent),\n      multi: true\n    }\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class SdsTextComponent implements ControlValueAccessor {\n\n  items = [];\n  multiple = true;\n\n  @Input() label: string;\n\n  private _onChange = (_: any) => { };\n  private _onTouched = () => { };\n\n  constructor(private cd: ChangeDetectorRef) { }\n\n  // Helper method to programatically add a value to the existing items array\n  addItem(val) {\n    if (this.multiple) {\n      this.items = [...this.items, val];\n      this.updateModel();\n    }\n  }\n\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\n  updateItems($event) {\n    this.updateModel();\n  }\n\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\n  updateModel() {\n    const model = this.getModel();\n    this._onChange(model);\n  }\n\n  // Helper method to return a new instance of an array that contains our items\n  getModel() {\n    return [...this.items];\n  }\n\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\n  // If there is a value we will just overwrite items\n  // If there is no value we reset the items array to be empty\n  writeValue(value: any) {\n    if (value && value.length && this.items !== value) {\n      this.items = value;\n      this.cd.markForCheck();\n    } else {\n      this.items = [];\n      this.cd.markForCheck();\n    }\n  }\n\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\n  registerOnChange(fn: any): void {\n    this._onChange = fn;\n  }\n\n  // ControlValueAccessor hook (not used)\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n}\n',
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
          },
        ],
        line: 37,
        jsdoctags: [
          {
            name: 'cd',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['ControlValueAccessor'],
    },
    {
      name: 'SdsToastComponent',
      id: 'component-SdsToastComponent-4db48e83ca4a24099417ef153b05e8e9',
      file: 'libs/packages/components/src/lib/toast/toast-single.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-toast',
      styleUrls: [],
      styles: ['\n    :host {\n      position: relative;\n    }\n    \n  '],
      templateUrl: ['./toast-single.component.html'],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'toastPackage',
          type: 'ToastPackage',
          optional: false,
          description: '',
          line: 46,
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'action',
          args: [
            {
              name: 'event',
              type: 'Event',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 52,
          jsdoctags: [
            {
              name: 'event',
              type: 'Event',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getIcon',
          args: [
            {
              name: 'toastType',
              type: '',
            },
          ],
          optional: false,
          returnType:
            '"check2-circle" | "info-circle" | "exclamation-triangle" | "slash-circle"',
          typeParameters: [],
          line: 58,
          jsdoctags: [
            {
              name: 'toastType',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getToastSr',
          args: [
            {
              name: 'toastType',
              type: '',
            },
          ],
          optional: false,
          returnType: '"Success" | "Info" | "Warning" | "Error"',
          typeParameters: [],
          line: 67,
          jsdoctags: [
            {
              name: 'toastType',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n    animate,\n    keyframes,\n    state,\n    style,\n    transition,\n    trigger\n  } from '@angular/animations';\n  import { Component } from '@angular/core';\n  \n  import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';\n\n  \n  @Component({\n    selector: 'sds-toast',\n    styles: [`\n    :host {\n      position: relative;\n    }\n    \n  `],\n  templateUrl: './toast-single.component.html',\n  animations: [\n    trigger('flyInOut', [\n      state('inactive', style({ opacity: 0 })),\n      state('active', style({ opacity: 1 })),\n      state('removed', style({ opacity: 0 })),\n      transition(\n        'inactive => active',\n        animate('{{ easeTime }}ms {{ easing }}')\n      ),\n      transition(\n        'active => removed',\n        animate('{{ easeTime }}ms {{ easing }}')\n      )\n    ])\n  ],\n \n    preserveWhitespaces: false,\n  })\n  export class SdsToastComponent extends Toast {\n\n    constructor(\n      protected toastrService: ToastrService,\n      public toastPackage: ToastPackage\n    ) {\n      super(toastrService, toastPackage);\n  \n    }\n  \n    action(event: Event) {\n      event.stopPropagation();\n      this.toastPackage.triggerAction();\n      return false;\n    }\n\n    getIcon(toastType) {\n      switch (toastType) {\n        case \"sds-toast--success\": return 'check2-circle';\n        case \"sds-toast--info\": return 'info-circle';\n        case \"sds-toast--warning\": return 'exclamation-triangle';\n        case \"sds-toast--error\": return 'slash-circle';\n        default: return 'info-circle';\n      }\n    }\n    getToastSr(toastType) {\n      switch (toastType) {\n        case \"sds-toast--success\": return 'Success';\n        case \"sds-toast--info\": return 'Info';\n        case \"sds-toast--warning\": return 'Warning';\n        case \"sds-toast--error\": return 'Error';\n        default: return 'Info';\n      }\n    }\n\n  }\n  ",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '\n    :host {\n      position: relative;\n    }\n    \n  \n',
      preserveWhitespaces: false,
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'toastrService',
            type: 'ToastrService',
          },
          {
            name: 'toastPackage',
            type: 'ToastPackage',
          },
        ],
        line: 42,
        jsdoctags: [
          {
            name: 'toastrService',
            type: 'ToastrService',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'toastPackage',
            type: 'ToastPackage',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      extends: 'Toast',
      templateData:
        '\n<div class="sds-toast__content" role="alert" aria-live="assertive">\n    <div class="usa-sr-only">{{getToastSr(toastPackage.toastType)}}</div>\n    <div class="sds-toast__content__icon">\n        <usa-icon [icon]="getIcon(toastPackage.toastType)" size="2x"></usa-icon>\n    </div>\n    <span class="sds-toast__content__text">{{message}}</span>\n    <div *ngIf="options.closeButton" class="sds-toast__content__close" (click)="remove()">\n        <usa-icon [icon]="\'x\'"></usa-icon>\n    </div>\n</div>\n',
    },
    {
      name: 'SdsTopBannerComponent',
      id: 'component-SdsTopBannerComponent-3b4c71d05c318dbff0fb621f4f617475',
      file:
        'libs/packages/components/src/lib/top-banner/top-banner.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-top-banner',
      styleUrls: ['./top-banner.component.scss'],
      styles: [],
      templateUrl: ['./top-banner.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'description',
          defaultValue: "''",
          line: 10,
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'showDetail',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '',
          line: 9,
        },
      ],
      methodsClass: [
        {
          name: 'closeDetail',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 16,
        },
        {
          name: 'toggleDetails',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 12,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-top-banner',\n  templateUrl: './top-banner.component.html',\n  styleUrls: ['./top-banner.component.scss']\n})\nexport class SdsTopBannerComponent {\n  showDetail = false;\n  @Input() description = '';\n\n  toggleDetails() {\n    this.showDetail = !this.showDetail;\n  }\n\n  closeDetail() {\n    if (this.showDetail) {\n      this.showDetail = false;\n    }\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data: '',
          styleUrl: './top-banner.component.scss',
        },
      ],
      stylesData: '',
      templateData:
        '<div class="usa-banner">\n  <div class="usa-accordion">\n    <header\n      class="usa-banner__header"\n      [class.sam-banner__header--expanded]="showDetail"\n    >\n      <div class="usa-banner__inner">\n        <div class="grid-col-auto">\n          <span class="usa-banner__header-flag"></span>\n        </div>\n        <div class="grid-col-fill tablet:grid-col-auto">\n          <p class="usa-banner__header-text">\n            An official website of the United States government\n          </p>\n          <p class="usa-banner__header-action" aria-hidden="true">\n            Here’s how you know\n          </p>\n        </div>\n        <button\n          class="usa-accordion__button usa-banner__button"\n          (click)="toggleDetails()"\n          (blur)="closeDetail()"\n          [attr.aria-expanded]="showDetail"\n          aria-controls="gov-banner"\n        >\n          <span class="usa-banner__button-text">Here’s how you know</span>\n        </button>\n        <div class="usa-banner__header-description">\n          <em>{{ description }}</em>\n        </div>\n      </div>\n    </header>\n    <div\n      class="usa-banner__content usa-accordion__content"\n      id="gov-banner"\n      [hidden]="!showDetail"\n    >\n      <div class="grid-row grid-gap-lg">\n        <div class="usa-banner__guidance tablet:grid-col-6">\n          <span class="usa-banner__icon usa-media-block__img"></span>\n          <div class="usa-media-block__body">\n            <p>\n              <strong>The .gov means it’s official.</strong> <br />\n              Federal government websites often end in .gov or .mil. Before\n              sharing sensitive information, make sure you’re on a federal\n              government site.\n            </p>\n          </div>\n        </div>\n        <div class="usa-banner__guidance tablet:grid-col-6">\n          <span class="usa-banner__icon usa-media-block__img"></span>\n          <div class="usa-media-block__body">\n            <p>\n              <strong>The site is secure.</strong> <br />\n              The <strong>https://</strong> ensures that you are connecting to\n              the official website and that any information you provide is\n              encrypted and transmitted securely.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',
    },
    {
      name: 'SdsTreeTableComponent',
      id: 'component-SdsTreeTableComponent-3efd080dc5e50f6c0a387e66f06141ab',
      file:
        'libs/packages/components/src/lib/tree-table/tree-table.component.ts',
      changeDetection: 'ChangeDetectionStrategy.OnPush',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-tree-table',
      styleUrls: [],
      styles: [],
      templateUrl: ['./tree-table.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'childrenLimit',
          defaultValue: 'Number.MAX_SAFE_INTEGER',
          description:
            '<p>Defines maximum number of children to show to the user\nIE - if a row has 20 children available, and childrenLimit\nvalue is 10, then the amount of children displayed to the\nuser will be numChildrenToDisplay amount, and the rest\nis toggled behind a &#39;View All&#39; button,\nThis should be greater than or equal to numChildrenToDisplay</p>\n',
          line: 35,
          type: 'number',
        },
        {
          name: 'dataSource',
          description: '<p>Rows of table tada to display </p>\n',
          line: 21,
          type: 'SdsTreeTableData[]',
        },
        {
          name: 'displayColumns',
          description: '<p>Column header text </p>\n',
          line: 24,
          type: 'string[]',
        },
        {
          name: 'numChildrenToDisplay',
          defaultValue: 'this.childrenLimit',
          description:
            '<p>Number of children to Display to users if a row&#39;s children length\nexceeds childrenLimit. This should be less than or equal to childrenLimit</p>\n<p>General Cases:\nIf numChildrenToDisplay is 5, childrenLimit is 10, and row has 20 children\n  5 children will be shown and the remaining can be displayed through View All button</p>\n<p>If numChildrenToDisplay is 5, childrenLimit is 10, and row has 10 children\n  All 10 children will be displayed because the row&#39;s children does not exceed childrenLimit</p>\n<p>If numChildren is 5, childrenLimit is 10, and row has 4 children\n  All 4 children will be displayed because row&#39;s children does not exceed childrenLimit</p>\n',
          line: 53,
          type: 'number',
        },
      ],
      outputsClass: [
        {
          name: 'rowExpanded',
          defaultValue: 'new EventEmitter<any>()',
          description:
            '<p>Emitted anytime a row &#39;s expansion / collapse value changes </p>\n',
          line: 65,
          type: 'EventEmitter',
        },
        {
          name: 'viewAll',
          defaultValue: 'new EventEmitter<any>()',
          description:
            '<p>Emitted for a row if there are more children to display and user clicked view all </p>\n',
          line: 62,
          type: 'EventEmitter',
        },
      ],
      propertiesClass: [
        {
          name: '_selectedRow',
          type: 'any',
          optional: false,
          description: '',
          line: 67,
        },
        {
          name: '_selectedRowParent',
          type: 'any',
          optional: false,
          description: '',
          line: 68,
        },
        {
          name: 'cdr',
          type: 'ChangeDetectorRef',
          optional: false,
          description: '',
          line: 72,
          modifierKind: [114],
        },
        {
          name: 'treetableRow',
          type: 'SdsTreeTableRow',
          optional: false,
          description:
            '<p>Reference for content projection. User defined values for how to\ndisplay each cell in a row</p>\n',
          line: 59,
          decorators: [
            {
              name: 'ContentChild',
              stringifiedArguments: 'SdsTreeTableRow',
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: 'collapseAll',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 80,
          description: '<p>Public Interface - close all opened children</p>\n',
          modifierKind: [114],
        },
        {
          name: 'collapseRow',
          args: [
            {
              name: 'rowId',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 108,
          description:
            '<p>Public Interface - Collapse a single row given an id.\nThe row&#39;s successors will also be collapsed</p>\n',
          modifierKind: [114],
          jsdoctags: [
            {
              name: {
                pos: 3360,
                end: 3365,
                flags: 0,
                escapedText: 'rowId',
              },
              type: 'string',
              tagName: {
                pos: 3354,
                end: 3359,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<ul>\n<li>id of row to collapse</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'collapseRowHelper',
          args: [
            {
              name: 'row',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 171,
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'row',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'displayVerticalBorder',
          args: [
            {
              name: 'parentRow',
              type: 'SdsTreeTableData',
            },
            {
              name: 'index',
              type: 'number',
            },
            {
              name: 'siblingRows',
              type: 'SdsTreeTableRow[]',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 220,
          description:
            '<p>Defines whether or not to display vertical border from this row. Vertical borders generally\nstart from the last child and extend to the parent. However, if we are truncating the number\nof children displayed, then the vertical border would need to start from the child we\ntruncate at.</p>\n',
          jsdoctags: [
            {
              name: 'parentRow',
              type: 'SdsTreeTableData',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'index',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'siblingRows',
              type: 'SdsTreeTableRow[]',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'expandAll',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 88,
          description:
            '<p>Public interface - open all panels with children</p>\n',
          modifierKind: [114],
        },
        {
          name: 'expandRow',
          args: [
            {
              name: 'rowId',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 98,
          description:
            '<p>Public interface - expand a single row given an ID. \nThe row&#39;s predecessors will also be expanded </p>\n',
          modifierKind: [114],
          jsdoctags: [
            {
              name: {
                pos: 3079,
                end: 3084,
                flags: 0,
                escapedText: 'rowId',
              },
              type: 'string',
              tagName: {
                pos: 3073,
                end: 3078,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<ul>\n<li>id of row to expand</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'expandRowHelper',
          args: [
            {
              name: 'allRows',
              type: 'any[]',
            },
            {
              name: 'id',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 142,
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'allRows',
              type: 'any[]',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'id',
              type: 'string',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'findRow',
          args: [
            {
              name: 'allRows',
              type: 'any[]',
            },
            {
              name: 'id',
              type: 'string',
            },
          ],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 159,
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'allRows',
              type: 'any[]',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'id',
              type: 'string',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getParentOfRow',
          args: [
            {
              name: 'allRows',
              type: 'any[]',
            },
            {
              name: 'row',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'any',
          typeParameters: [],
          line: 286,
          jsdoctags: [
            {
              name: 'allRows',
              type: 'any[]',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'row',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'getTemplateContext',
          args: [
            {
              name: 'parent',
              type: 'any',
            },
            {
              name: 'row',
              type: 'any',
            },
            {
              name: 'index',
              type: 'number',
            },
            {
              name: 'level',
              type: 'number',
            },
            {
              name: 'parentSelected',
              type: 'boolean',
              optional: true,
            },
            {
              name: 'parentRow',
              type: 'HTMLTableRowElement',
              optional: true,
            },
          ],
          optional: false,
          returnType:
            '{ row: any; level: number; index: number; size: any; rows: any; parentSelected: boolean; parent: ...',
          typeParameters: [],
          line: 231,
          jsdoctags: [
            {
              name: 'parent',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'row',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'index',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'level',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'parentSelected',
              type: 'boolean',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'parentRow',
              type: 'HTMLTableRowElement',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'onKeyDown',
          args: [
            {
              name: '$event',
              type: 'KeyboardEvent',
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 261,
          jsdoctags: [
            {
              name: '$event',
              type: 'KeyboardEvent',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'onRowClicked',
          args: [
            {
              name: 'row',
              type: 'SdsTreeTableData',
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 246,
          jsdoctags: [
            {
              name: 'row',
              type: 'SdsTreeTableData',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'setHeight',
          args: [
            {
              name: 'row',
              type: 'HTMLTableRowElement',
            },
            {
              name: 'parentRow',
              type: 'HTMLTableRowElement',
            },
            {
              name: 'border',
              type: 'HTMLSpanElement',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 180,
          description:
            '<p>Sets height of vertical border on the tree table view </p>\n',
          jsdoctags: [
            {
              name: 'row',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'parentRow',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'border',
              type: 'HTMLSpanElement',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'toggleAllHelper',
          args: [
            {
              name: 'data',
              type: 'any[]',
            },
            {
              name: 'expanded',
              type: 'boolean',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 129,
          modifierKind: [112],
          jsdoctags: [
            {
              name: 'data',
              type: 'any[]',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'expanded',
              type: 'boolean',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'viewAllClicked',
          args: [
            {
              name: 'row',
              type: 'SdsTreeTableData',
            },
            {
              name: 'currentRow',
              type: 'HTMLTableRowElement',
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 118,
          jsdoctags: [
            {
              name: 'row',
              type: 'SdsTreeTableData',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'currentRow',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'tableRow',
              type: 'HTMLTableRowElement',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { ChangeDetectionStrategy, ChangeDetectorRef, Component, \n  ContentChild, Directive, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef } from \"@angular/core\";\nimport { SdsTreeTableData } from \"./tree-table.model\";\n\n@Directive({\n  selector: `[sdsTreeTableRow]`\n})\nexport class SdsTreeTableRow {\n  constructor(\n    public templateRef: TemplateRef<any>\n  ) {}\n}\n\n@Component({\n  selector: `sds-tree-table`,\n  templateUrl: `./tree-table.component.html`,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsTreeTableComponent {\n  /** Rows of table tada to display */\n  @Input() dataSource: SdsTreeTableData[];\n\n  /** Column header text */\n  @Input() displayColumns: string[];\n\n  /** \n   * Defines maximum number of children to show to the user\n   * IE - if a row has 20 children available, and childrenLimit\n   * value is 10, then the amount of children displayed to the\n   * user will be numChildrenToDisplay amount, and the rest\n   * is toggled behind a 'View All' button,\n   * This should be greater than or equal to numChildrenToDisplay\n   * @default - Number.MAX_SAFE_INTEGER\n   */\n  @Input() childrenLimit: number = Number.MAX_SAFE_INTEGER;\n\n  /**\n   * Number of children to Display to users if a row's children length\n   * exceeds childrenLimit. This should be less than or equal to childrenLimit\n   * \n   * General Cases:\n   * If numChildrenToDisplay is 5, childrenLimit is 10, and row has 20 children\n   *  5 children will be shown and the remaining can be displayed through View All button\n   * \n   * If numChildrenToDisplay is 5, childrenLimit is 10, and row has 10 children\n   *  All 10 children will be displayed because the row's children does not exceed childrenLimit\n   * \n   * If numChildren is 5, childrenLimit is 10, and row has 4 children\n   *  All 4 children will be displayed because row's children does not exceed childrenLimit\n   * \n   * @default - Number.MAX_SAFE_INTEGER\n   */\n  @Input() numChildrenToDisplay: number = this.childrenLimit\n\n  /**\n   * Reference for content projection. User defined values for how to\n   * display each cell in a row\n   */\n  @ContentChild(SdsTreeTableRow) treetableRow: SdsTreeTableRow;\n\n  /** Emitted for a row if there are more children to display and user clicked view all */\n  @Output() viewAll = new EventEmitter<any>();\n\n  /** Emitted anytime a row 's expansion / collapse value changes */\n  @Output() rowExpanded = new EventEmitter<any>();\n\n  _selectedRow: any;\n  _selectedRowParent: any;\n\n  constructor(\n    private elementRef: ElementRef,\n    public cdr: ChangeDetectorRef,\n    private ngZone: NgZone,\n  ) {}\n\n\n  /**\n   * Public Interface - close all opened children\n   */\n  public collapseAll() {\n    this.toggleAllHelper(this.dataSource, false);\n    this.cdr.detectChanges();\n  }\n\n  /**\n   * Public interface - open all panels with children\n   */\n  public expandAll() {\n    this.toggleAllHelper(this.dataSource, true);\n    this.cdr.detectChanges();\n  }\n\n  /** \n   * Public interface - expand a single row given an ID. \n   * The row's predecessors will also be expanded \n   * @param rowId - id of row to expand\n   */\n  public expandRow(rowId: string) {\n    this.expandRowHelper(this.dataSource, rowId);\n    this.cdr.detectChanges();\n  }\n\n  /**\n   * Public Interface - Collapse a single row given an id.\n   * The row's successors will also be collapsed\n   * @param rowId - id of row to collapse\n   */\n  public collapseRow(rowId: string) {\n    const row = this.findRow(this.dataSource, rowId);\n    if (!row) {\n      return;\n    }\n\n    this.collapseRowHelper(row);\n    this.cdr.detectChanges();\n  }\n\n  viewAllClicked(row: SdsTreeTableData, currentRow: HTMLTableRowElement, tableRow: HTMLTableRowElement) {\n    \n    currentRow.setAttribute('tabindex', undefined);\n    tableRow.setAttribute('tabindex', '0');\n    row.viewAllChildren = true;\n    setTimeout(() => tableRow.focus());\n    if (row.totalChildren && row.totalChildren > row.children.length) {\n      this.viewAll.emit(row);\n    }\n  }\n\n  private toggleAllHelper(data: any[], expanded: boolean) {\n    data.forEach(data => {\n      if (data.children) {\n        this.toggleAllHelper(data.children, expanded);\n        data.expanded = expanded;\n\n        if (!expanded) {\n          data.viewAllChildren = false;\n        }\n      }\n    });\n  }\n\n  private expandRowHelper(allRows: any[], id: string) {\n    for (let i = 0; i < allRows.length; i++) {\n      const row = allRows[i];\n      if (row.id === id) {\n        return true;\n      } else if (row.children) {\n        const isChildExpanded = this.expandRowHelper(row.children, id);\n        if (isChildExpanded) {\n          row.expanded = true;\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  private findRow(allRows: any[], id: string) {\n    for (let i = 0; i < allRows.length; i++) {\n      const row = allRows[i];\n      if (row.id === id) {\n        return row;\n      } else if (row.children) {\n        return this.findRow(allRows, id);\n      }\n    }\n    return null;\n  }\n\n  private collapseRowHelper(row: any) {\n    row.expanded = false;\n    row.viewAllChildren = false;\n    if (row.children) {\n      row.children.forEach(child => this.collapseRowHelper(child));\n    }\n  }\n\n  /** Sets height of vertical border on the tree table view */\n  setHeight(row: HTMLTableRowElement, parentRow: HTMLTableRowElement, border: HTMLSpanElement) {\n    if (!row || !parentRow) {\n      return;\n    }\n\n    /** \n     * We run outside ngZone because we don't want the setTimeout to trigger change detection,\n     * which would re-run changes on template, and re-evalute this function, causing infinite loop\n     */\n    this.ngZone.runOutsideAngular(() => {\n\n      /** \n       * We do set timeout to let the table rows finish rendering. If a row was\n       * expanded / collapsed, then the height of the vertical border will need to\n       * be re-evaluated based on new distance from child to parent. We let the\n       * view finish refreshing so that bounding rectangle is re-evaluated, and then\n       * we can re-calculate height. Doing this synchronously without setTimeout\n       * would give us incorrect value for height because the bouunding rectangle\n       * has yet to update from the collapse / expand change\n       */\n      setTimeout(() => {\n        const firstRect = parentRow.getBoundingClientRect();\n        const rowRect = row.getBoundingClientRect();\n        \n        const yFirstRect = firstRect.top + firstRect.height / 2;\n        const yRowRect = rowRect.top + rowRect.height / 2;\n\n        const height = yRowRect - yFirstRect - 20;\n        border.style.height = `${height}px`;\n        border.style.bottom = `${rowRect.height / 2}px`;\n      })\n    })\n  }\n\n  /** \n   * Defines whether or not to display vertical border from this row. Vertical borders generally\n   * start from the last child and extend to the parent. However, if we are truncating the number\n   * of children displayed, then the vertical border would need to start from the child we\n   * truncate at.\n   * */\n  displayVerticalBorder(parentRow: SdsTreeTableData, index: number, siblingRows: SdsTreeTableRow[]): boolean {\n    if (!siblingRows) return false;\n\n    // Decide whether last child displayed is last child in row's children index or is at numChildrenToDisplay\n    if (parentRow.viewAllChildren || siblingRows.length <= this.childrenLimit) {\n      return index === siblingRows.length - 1;\n    } else {\n      return index === this.numChildrenToDisplay - 1;\n    }\n  }\n\n  getTemplateContext(parent: any, row: any, index: number, level: number, parentSelected?: boolean, parentRow?: HTMLTableRowElement) {\n    const updatedLevel = level + 1;\n    const posinset = index + 1;\n    return {\n      row: row,\n      level: updatedLevel,\n      index: posinset,\n      size: parent.children ? parent.children.length : 1,\n      rows: parent.children,\n      parentSelected: parentSelected,\n      parent: parent,\n      parentRow: parentRow\n    }\n  }\n\n  onRowClicked(row: SdsTreeTableData, tableRow: HTMLTableRowElement) {\n    if (row.children || row.totalChildren > 0) {\n      row.expanded = !row.expanded;\n    }\n\n    if (!row.expanded) {\n      row.viewAllChildren = false;\n    }\n\n    this._selectedRow = row;\n    this._selectedRowParent = this.getParentOfRow(this.dataSource, row);\n    setTimeout(() => tableRow.focus());\n    this.rowExpanded.emit(row);\n  }\n\n  onKeyDown($event: KeyboardEvent, tableRow: HTMLTableRowElement) {\n    if ($event.target != tableRow) {\n      return;\n    }\n\n    let siblingRow: HTMLTableRowElement;\n\n    if ($event.key === 'ArrowUp') {\n      siblingRow = ($event.target as HTMLTableRowElement).previousElementSibling as HTMLTableRowElement;\n    } else if ($event.key === 'ArrowDown') {\n      siblingRow = ($event.target as HTMLTableRowElement).nextElementSibling as HTMLTableRowElement;\n    } else if ($event.key === 'Home') {\n      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr');\n    } else if ($event.key === 'End') {\n      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr:last-child');\n    }\n\n    if (!siblingRow) return;\n\n    ($event.target as HTMLTableRowElement).setAttribute('tabindex', undefined);\n    siblingRow.setAttribute('tabindex', '0');\n    siblingRow.focus();\n    $event.preventDefault();\n  }\n\n  getParentOfRow(allRows: any[], row: any) {\n    let retRow = null;\n    for (let i = 0; i < allRows.length; i++) {\n      if (allRows[i] === row) {\n        retRow = allRows[i];\n        break;\n      } else if(allRows[i].children) {\n        const isChildRow = this.getParentOfRow(allRows[i].children, row);\n        if (isChildRow) {\n          retRow = allRows[i];\n        }\n      }\n    }\n    \n    return retRow;\n  }\n}",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'elementRef',
            type: 'ElementRef',
          },
          {
            name: 'cdr',
            type: 'ChangeDetectorRef',
          },
          {
            name: 'ngZone',
            type: 'NgZone',
          },
        ],
        line: 68,
        jsdoctags: [
          {
            name: 'elementRef',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'cdr',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'ngZone',
            type: 'NgZone',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      templateData:
        '<div class="sds-tree-table--scrollable">\n  <table id="treegrid" role="treegrid" aria-label="Inbox" class="usa-table sds-tree-table padding-x-1">\n    <thead>\n      <tr>\n        <th scope="col">Related</th>\n        <th scope="col" *ngFor="let col of displayColumns">{{col}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor="let data of dataSource; index as i" \n        [ngTemplateOutlet]="treeTablePanel" \n        [ngTemplateOutletContext]="getTemplateContext(dataSource, data, i, 0, data === _selectedRowParent)">\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n<!-- TODO: Extract this into separate component -->\n<ng-template #treeTablePanel \n  let-row="row" \n  let-level="level" \n  let-index="index" \n  let-size="size" \n  let-rows="rows"\n  let-parentSelected="parentSelected"\n  let-parent="parent"\n  let-parentRow="parentRow"\n>\n  <tr role="row"\n    #tableRow\n    [attr.id]="row.id"\n    [attr.aria-level]="level" \n    [attr.aria-posinset]="index" \n    [attr.aria-setsize]="size"\n    [attr.aria-expanded]="row.children ? row.expanded ? true : false: undefined"\n    [attr.tabindex]="level === 1 && index === 1 && !_selectedRow ? 0 : row === _selectedRow ? 0 : undefined"\n    (keydown.enter)="onRowClicked(row, tableRow)"\n    (keydown)="onKeyDown($event, tableRow)"\n    [ngClass]="{\'sds-tree-table__row--selected\': row === _selectedRow, \'sds-tree-table__row--highlight-border\': parentSelected}"\n    >\n    <td>\n      <span *ngIf="displayVerticalBorder(parent, index - 1, rows)" \n        #border class="vertical-border">\n        <!-- Programitcally set height of vertical border because we won\'t know the height until view finishes rendering -->\n        {{setHeight(tableRow, parentRow, border)}}\n      </span>\n      <span class="horizontal-border"></span>\n      <button class="usa-button sds-button--circle border-0 bg-white" *ngIf="row.children || row.totalChildren > 0"\n        [attr.tabindex]="row === _selectedRow ? 1 : -1" (click)="onRowClicked(row, tableRow)">\n        <span class="usa-sr-only">Expand / Collapse current row</span>\n        <usa-icon \n          [icon]="row.expanded ? \'dash-circle-fill\' : \'plus-circle-fill\'"\n          [size]="\'2x\'">\n        </usa-icon>\n      </button>\n    </td>\n    <ng-container [ngTemplateOutlet]="treetableRow.templateRef" \n      [ngTemplateOutletContext]="{$implicit: row, index: index - 1}">\n    </ng-container>\n  </tr>\n\n  <ng-container *ngIf="row.expanded">\n    <ng-container *ngFor="let data of row.children; index as i">\n      <ng-container \n        *ngIf="row.children.length <= childrenLimit || \n          row.viewAllChildren || \n          i  < numChildrenToDisplay"\n        [ngTemplateOutlet]="treeTablePanel" \n        [ngTemplateOutletContext]="getTemplateContext(row, data, i, level, parentSelected, tableRow)">\n      </ng-container>\n    </ng-container> \n  </ng-container>\n\n  <tr class="text-center" \n    #viewAllRow\n    *ngIf="row.expanded && !row.viewAllChildren && (row.totalChildren > row.children?.length || row.children?.length > childrenLimit)" \n    (keydown.enter)="viewAllClicked(row, viewAllRow, tableRow)"\n    (keydown)="onKeyDown($event, viewAllRow)"\n  >\n    <td></td>\n    <td class="width-100">\n      <button class="usa-button usa-button--base" (click)="viewAllClicked(row, viewAllRow, tableRow)">\n        View All ( \n          <span *ngIf="row.totalChildren && row.totalChildren > row.children?.length; else childrenLength">\n            {{row.totalChildren}}\n          </span>\n        )\n          <ng-template #childrenLength>{{row.children?.length}}</ng-template>\n      </button>\n    </td>\n  </tr>\n</ng-template>',
    },
    {
      name: 'SdsTruncatedTextContainerComponent',
      id:
        'component-SdsTruncatedTextContainerComponent-8a0fa5c4ffa157b927aac5b53d6e5e46',
      file:
        'libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-truncated-text-container',
      styleUrls: [],
      styles: [],
      template:
        '<div class="sds-overlay maxw-mobile radius-overlay padding-2">{{ data.text }}</div>\n',
      templateUrl: [],
      viewProviders: [],
      inputsClass: [],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'data',
          type: 'SdsTruncateTextData',
          optional: false,
          description: '',
          line: 19,
          decorators: [
            {
              name: 'Inject',
              stringifiedArguments: 'SDS_TRUNCATED_TEXT_DATA',
            },
          ],
          modifierKind: [114],
        },
      ],
      methodsClass: [
        {
          name: 'resetAnimation',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 27,
          description: '<p>Resets the animation to its initial state. </p>\n',
        },
        {
          name: 'startAnimation',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 22,
          description: '<p>Starts the animation. </p>\n',
        },
      ],
      hostBindings: [
        {
          name: '@container',
          defaultValue: "'void'",
          line: 17,
        },
      ],
      hostListeners: [
        {
          name: '@container.done',
          args: [],
          argsDecorator: [],
          description:
            '<p>Intentionally left empty to trigger change detection </p>\n',
          line: 33,
        },
      ],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\n\nexport interface SdsTruncateTextData {\n  text: string;\n}\n\n@Component({\n  selector: 'sds-truncated-text-container',\n  template: `\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n  `,\n  animations: [sdsTruncateTextAnimations.container]\n})\nexport class SdsTruncatedTextContainerComponent {\n  @HostBinding('@container') _animationState = 'void';\n\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\n\n  /** Starts the animation. */\n  startAnimation() {\n    this._animationState = 'enter';\n  }\n\n  /** Resets the animation to its initial state. */\n  resetAnimation() {\n    this._animationState = 'void';\n  }\n\n  /** Intentionally left empty to trigger change detection */\n  @HostListener('@container.done')\n  _onAnimationDone() {}\n}\n",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'data',
            type: 'SdsTruncateTextData',
          },
        ],
        line: 17,
        jsdoctags: [
          {
            name: 'data',
            type: 'SdsTruncateTextData',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
    },
    {
      name: 'SdsVideoPlayerComponent',
      id: 'component-SdsVideoPlayerComponent-8a5633d645af5ee69ebab40d5246abcc',
      file:
        'libs/packages/components/src/lib/video-player/video-player.component.ts',
      encapsulation: ['ViewEncapsulation.None'],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-video-player',
      styleUrls: ['./css/px-video.css'],
      styles: [],
      templateUrl: ['./video-player.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'crossorigin',
          defaultValue: "''",
          line: 46,
        },
        {
          name: 'VPConfiguration',
          line: 43,
          type: 'VPInterface',
        },
      ],
      outputsClass: [],
      propertiesClass: [
        {
          name: 'config',
          type: 'InitPxVideoConfig',
          optional: false,
          description: '',
          line: 45,
          modifierKind: [112],
        },
        {
          name: 'loadVideoSource',
          defaultValue: 'false',
          type: '',
          optional: false,
          description: '',
          line: 48,
        },
        {
          name: 'video',
          type: 'ElementRef',
          optional: false,
          description: '',
          line: 44,
          decorators: [
            {
              name: 'ViewChild',
              stringifiedArguments: "'video'",
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: '_loadVideoSourceOnDemand',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 119,
          description:
            '<p>IE and Edge ignore preload attribute and load video data eagerly. In order to\nworkaround those such browsers, we add video source only after user clicks\non play or restart button of the video.</p>\n',
          modifierKind: [112],
        },
        {
          name: 'ngAfterViewInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 69,
        },
        {
          name: 'ngOnChanges',
          args: [
            {
              name: 'changes',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 105,
          jsdoctags: [
            {
              name: 'changes',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnDestroy',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 57,
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 63,
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import {\n  Component,\n  ViewChild,\n  Input,\n  ElementRef,\n  AfterViewInit,\n  ViewEncapsulation,\n  Renderer2,\n  OnChanges,\n  AfterContentInit,\n  OnInit,\n  ChangeDetectorRef,\n  OnDestroy,\n  Inject,\n} from '@angular/core';\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\nimport { VPInterface } from './video-player';\nimport { DOCUMENT } from '@angular/common';\n\ninterface InitPxVideoConfig {\n  videoId: string;\n  captionsOnDefault: boolean;\n  seekInterval: number;\n  videoTitle: string;\n  debug: boolean;\n}\n\ndeclare const GLOBAL_STRINGS: any;\n\ndeclare class InitPxVideo {\n  constructor(config: InitPxVideoConfig);\n}\n\n@Component({\n  selector: 'sds-video-player',\n  templateUrl: './video-player.component.html',\n  styleUrls: ['./css/px-video.css'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class SdsVideoPlayerComponent\n  implements AfterViewInit, OnChanges, OnInit, OnDestroy {\n  @Input() VPConfiguration: VPInterface;\n  @ViewChild('video') video: ElementRef;\n  private config: InitPxVideoConfig;\n  @Input() crossorigin = '';\n\n  loadVideoSource = false;\n\n  constructor(\n    private elementRef: ElementRef,\n    private renderer2: Renderer2,\n    private cdr: ChangeDetectorRef,\n    @Inject(DOCUMENT) private document: any\n  ) {}\n\n  ngOnDestroy() {\n    let element = this.document.getElementById('px-video-aria-announce');\n    if (element) {\n      this.renderer2.removeChild(this.elementRef, element);\n    }\n  }\n  ngOnInit() {\n    if (this.VPConfiguration.preload != 'none') {\n      this.loadVideoSource = true;\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.crossorigin) {\n      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');\n      id.setAttribute('crossorigin', this.crossorigin);\n    }\n    this.config = {\n      videoId: this.VPConfiguration.id,\n      captionsOnDefault: false,\n      seekInterval: this.VPConfiguration.seekInterval,\n      videoTitle: 'Video Player',\n      debug: this.VPConfiguration.debug,\n    };\n\n    const video = new InitPxVideo(this.config);\n    this.video.nativeElement.setAttribute(\n      'style',\n      'width:' + this.VPConfiguration.width + ';'\n    );\n\n    const progressElement: HTMLProgressElement = this.elementRef.nativeElement.querySelector(\n      'progress'\n    );\n    \n    if (progressElement) {\n      this.renderer2.setAttribute(\n        progressElement,\n        'aria-label',\n        this.VPConfiguration.description + ' progress bar'\n      );\n    }\n\n    if (this.VPConfiguration.preload === 'none') {\n      this._loadVideoSourceOnDemand();\n    }\n  }\n\n  ngOnChanges(changes) {\n    if (changes && changes.crossorigin) {\n      const id = this.elementRef.nativeElement.querySelector('#videoPlayer');\n      if (id) {\n        id.setAttribute('crossorigin', this.crossorigin);\n      }\n    }\n  }\n\n  /**\n   * IE and Edge ignore preload attribute and load video data eagerly. In order to\n   * workaround those such browsers, we add video source only after user clicks\n   * on play or restart button of the video.\n   */\n  private _loadVideoSourceOnDemand() {\n    const playButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(\n      '.px-video-play'\n    );\n    const restartButton: HTMLButtonElement = this.elementRef.nativeElement.querySelector(\n      '.px-video-restart'\n    );\n    const video: HTMLVideoElement = this.elementRef.nativeElement.querySelector(\n      '#videoPlayer'\n    );\n\n    const loadVideo = ($event) => {\n      if (this.loadVideoSource) {\n        return;\n      }\n\n      this.loadVideoSource = true;\n\n      // Due to event handler timing issues in safari, the browser does not load the source\n      // when play and source are set at the same time. So we first set the source, wait for\n      // an event loop, pause, then play the video to trigger source loading\n      setTimeout(() => {\n        video.pause();\n        video.play();\n      });\n    };\n\n    if (!playButton || !restartButton) {\n      // Edge case - if the button to toggle video source does not exist in dom, then add in the\n      // video source and let the browser decide when to fetch video data\n      this.loadVideoSource = true;\n    } else {\n      playButton.onclick = loadVideo;\n      restartButton.onclick = loadVideo;\n    }\n  }\n}\n",
      assetsDirs: [],
      styleUrlsData: [
        {
          data:
            '/* utilities */\n.pull-left {\n  float: left;\n}\n\n.sr-only {\n  position: absolute !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n}\n\n.hide {\n  display: none;\n}\n\n.show-inline {\n  display: inline-block;\n}\n\n/* containers */\n.px-video-img-captions-container * {\n  box-sizing: border-box;\n}\n\n.px-video-img-captions-container {\n  position: relative;\n}\n\n/* progress indicator */\n.px-video-progress {\n  width: 100%;\n  height: 10px;\n  cursor: pointer;\n}\n\n.px-video-progress[value] {\n  /* Reset the default appearance */\n  -webkit-appearance: none;\n  border: none;\n}\n\n.px-video-progress[value]::-webkit-progress-bar {\n  background-color: #e6e6e6;\n}\n\n.px-video-progress[value]::-webkit-progress-value {\n  background-color: #009cdf;\n}\n\n/* time */\n.px-video-time {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  float: right;\n  margin-top: 2px;\n  font-size: 14px;\n}\n\n/* caption area */\n.px-video-captions {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.5em;\n  min-height: 2.5em;\n  background-color: #000;\n  color: #fff;\n  font-size: 1.1em;\n  text-align: center;\n  opacity: 0.75;\n}\n\n/* buttons */\n.px-video-controls button {\n  border: 1px #fff solid;\n  background: transparent;\n  padding: 0;\n  margin: 0 5px;\n  width: 25px;\n  height: 20px;\n  overflow: hidden;\n  background: no-repeat url("./px-video-sprite.svg");\n}\n\n.px-video-controls button {\n  cursor: pointer;\n}\n\n/* restart button */\n.px-video-controls button.px-video-restart {\n  background-position: -6px -333px;\n  margin-left: 0;\n}\n\n.px-video-controls button.px-video-restart:hover,\n.px-video-controls button.px-video-restart:focus {\n  background-position: -6px -297px;\n}\n\n/* rewind button */\n.px-video-controls button.px-video-rewind {\n  background-position: -6px -189px;\n}\n\n.px-video-controls button.px-video-rewind:hover,\n.px-video-controls button.px-video-rewind:focus {\n  background-position: -6px -153px;\n}\n\n/* play button */\n.px-video-controls button.px-video-play {\n  background-position: -6px -45px;\n}\n\n.px-video-controls button.px-video-play:hover,\n.px-video-controls button.px-video-play:focus {\n  background-position: -6px -9px;\n}\n\n/* pause button */\n.px-video-controls button.px-video-pause {\n  background-position: -6px -117px;\n}\n\n.px-video-controls button.px-video-pause:hover,\n.px-video-controls button.px-video-pause:focus {\n  background-position: -6px -81px;\n}\n\n/* forward button */\n.px-video-controls button.px-video-forward {\n  background-position: -6px -261px;\n}\n\n.px-video-controls button.px-video-forward:hover,\n.px-video-controls button.px-video-forward:focus {\n  background-position: -6px -225px;\n}\n\n.px-video-fullscreen-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 10px;\n  background: no-repeat url("./px-video-sprite.svg");\n  background-position: -6px -907px;\n}\n\n.px-video-fullscreen-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -943px;\n}\n\n.px-video-fullscreen-btn-container input[type="checkbox"]:hover+label {\n  background-position: -6px -943px;\n  cursor: pointer;\n}\n\n.px-video-fullscreen-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -943px;\n}\n\n.px-video-fullscreen-btn-container input[type="checkbox"]:checked+label {\n  background-position: -6px -979px;\n}\n\n.px-video-fullscreen-btn-container input[type="checkbox"]:checked:hover+label {\n  background-position: -6px -1015px;\n}\n\n/* captions button */\n.px-video-captions-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 10px;\n  background: no-repeat url("./px-video-sprite.svg");\n  background-position: -6px -835px;\n}\n\n.px-video-captions-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -799px;\n}\n\n.px-video-captions-btn-container input[type="checkbox"]:hover+label {\n  background-position: -6px -799px;\n  cursor: pointer;\n}\n\n.px-video-captions-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -799px;\n}\n\n.px-video-captions-btn-container input[type="checkbox"]:checked+label {\n  background-position: -6px -871px;\n}\n\n/* mute button */\n.px-video-mute-btn-container label {\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  margin-left: 240px;\n  margin-top: 2px;\n  background: no-repeat url("./px-video-sprite.svg");\n  background-position: -6px -476px;\n}\n\n.px-video-mute-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -440px;\n}\n\n.px-video-mute-btn-container input[type="checkbox"]:hover+label {\n  background-position: -6px -440px;\n  cursor: pointer;\n}\n\n.px-video-mute-btn-container input[type="checkbox"]:focus+label {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n  background-position: -6px -440px;\n}\n\n/* checked state of mute button */\n.px-video-mute-btn-container input[type="checkbox"]:checked+label {\n  background-position: -6px -692px;\n}\n\n.px-video-mute-btn-container input[type="checkbox"]:checked:hover+label,\n.px-video-mute-btn-container input[type="checkbox"]:checked:focus+label {\n  background-position: -6px -656px;\n}\n\n/* volume range input */\n.px-video-controls input[type="range"] {\n  -webkit-appearance: none;\n  height: 6px;\n  width: 100px;\n  margin-top: 8px;\n  background-color: #e6e6e6;\n  outline: none;\n}\n\n.px-video-controls input[type="range"]:focus::-webkit-slider-thumb {\n  outline: 0.25rem solid #2491ff;\n  outline-offset: 0;\n}\n\n.px-video-controls input[type="range"]::-moz-range-track {\n  -moz-appearance: none;\n  height: 6px;\n  background-color: #e6e6e6;\n  border: none;\n}\n\n.px-video-controls input[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 10px;\n  width: 6px;\n  background-color: #666;\n}\n\n.px-video-controls input[type="range"]::-moz-range-thumb {\n  height: 12px;\n  width: 8px;\n  background-color: #666;\n}\n\n/* fixing display for IE10+ */\n@media screen and (-ms-high-contrast: active),\n(-ms-high-contrast: none) {\n  .px-video-controls input[type="range"] {\n    position: relative;\n    padding: 0;\n    height: 8px;\n    top: -3px;\n  }\n\n  .px-video-time {\n    margin-top: 4px;\n  }\n\n  .px-video-captions {\n    padding: 8px;\n    min-height: 36px;\n  }\n}\n\n.px-video-container {\n  position: relative;\n  min-width: 200px;\n}\n\n#videoPlayer {\n  min-width: 200px;\n}\n\n.px-video-container.fullscreen {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-cursor-visibility: auto-hide;\n}\n\n/* Fullscreen styles */\n\n/* style applied through js */\n.px-video-controls.js-fullscreen-controls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 940;\n  background: white;\n}\n\n.px-video-captions.js-fullscreen-captions {\n  min-height: 3.5em;\n  font-size: 2.5em;\n  padding: 1em;\n}\n\n.px-timetip {\n  padding: 5px 10px;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.83);\n  border-radius: 3px;\n  color: #fff;\n  width: auto;\n  bottom: 20px;\n}\n\n.px-timetip:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(43, 43, 43, 0);\n  border-top-color: #2b2b2b;\n  border-width: 10px;\n  margin-left: -10px;\n}\n',
          styleUrl: './css/px-video.css',
        },
      ],
      stylesData: '',
      constructorObj: {
        name: 'constructor',
        description: '',
        args: [
          {
            name: 'elementRef',
            type: 'ElementRef',
          },
          {
            name: 'renderer2',
            type: 'Renderer2',
          },
          {
            name: 'cdr',
            type: 'ChangeDetectorRef',
          },
          {
            name: 'document',
            type: 'any',
          },
        ],
        line: 48,
        jsdoctags: [
          {
            name: 'elementRef',
            type: 'ElementRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'renderer2',
            type: 'Renderer2',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'cdr',
            type: 'ChangeDetectorRef',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'document',
            type: 'any',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      implements: ['AfterViewInit', 'OnChanges', 'OnInit', 'OnDestroy'],
      templateData:
        '<div #video class="px-video-container" id="{{VPConfiguration.id}}" [style.width]="VPConfiguration.width" >\n  <div class="px-video-img-captions-container" >\n      <div class="px-video-captions hide" aria-hidden="true"></div>\n      <video id="videoPlayer" [style.width]="VPConfiguration.width" [style.height]="VPConfiguration.height"\n        poster="{{VPConfiguration.poster}}" controls preload={{VPConfiguration.preload}}\n        [attr.aria-label]="VPConfiguration.description"\n      >\n        <!-- if Safari/Chrome-->\n          <source *ngIf="loadVideoSource" src="{{VPConfiguration.sourceMp4}}" type="video/mp4" />\n          <!-- If Firefox/Opera/Chrome/IE -->\n          <source *ngIf="loadVideoSource"  src="{{VPConfiguration.sourceWebm}}" type="video/webm" />\n          <track kind="subtitles" kind="captions" label="English captions" src="{{VPConfiguration.caption}}" srclang="en" default />\n      </video>\n  </div>\n  <div class="px-video-controls"></div>\n</div>\n',
    },
    {
      name: 'TabPanelComponent',
      id: 'component-TabPanelComponent-222d6e2de38ee54620b56c22d2a641b5',
      file: 'libs/packages/components/src/lib/tabs/tab-panel.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-tab-panel',
      styleUrls: [],
      styles: [],
      templateUrl: ['./tab-panel.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'ariaLabel',
          description: '<p>Aria label for tab header</p>\n',
          line: 28,
          type: 'string',
        },
        {
          name: 'disabled',
          description:
            '<p>Whether this tab panel is disabled for selection</p>\n',
          line: 33,
          type: 'boolean',
        },
        {
          name: 'id',
          description: '<p>The associated id of this tab panel</p>\n',
          line: 12,
          type: 'string',
        },
        {
          name: 'selected',
          description:
            '<p>True if panel is currently selected.\nOnly one tabpanel should be selected at a time</p>\n',
          line: 18,
          type: 'boolean',
        },
        {
          name: 'tabHeader',
          description:
            '<p>Header content for the tab panel. May be a string or a template</p>\n',
          line: 23,
          type: 'string | TemplateRef<any>',
        },
      ],
      outputsClass: [],
      propertiesClass: [],
      methodsClass: [],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        'import { Component, Input, TemplateRef } from "@angular/core";\n\n@Component({\n  selector: `sds-tab-panel`,\n  templateUrl: `./tab-panel.component.html`\n})\nexport class TabPanelComponent {\n\n  /**\n   * The associated id of this tab panel\n   */\n  @Input() id: string;\n\n  /**\n   * True if panel is currently selected.\n   * Only one tabpanel should be selected at a time\n   */\n  @Input() selected: boolean;\n\n  /**\n   * Header content for the tab panel. May be a string or a template\n   */\n  @Input() tabHeader: string | TemplateRef<any>;\n\n  /**\n   * Aria label for tab header\n   */\n  @Input() ariaLabel: string;\n\n  /**\n   * Whether this tab panel is disabled for selection\n   */\n  @Input() disabled: boolean;\n\n}\n',
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      templateData:
        '<div \n  [attr.aria-hidden]="!selected"\n  [attr.id]="id" \n  role="tabpanel"\n  [ngClass]="{\'display-none\': !selected, \'display-block\': selected}"\n  >\n  <ng-content></ng-content>\n</div>',
    },
    {
      name: 'TabsComponent',
      id: 'component-TabsComponent-4b8576e3b8d96c89e0ecb8947fba77ec',
      file: 'libs/packages/components/src/lib/tabs/tabs.component.ts',
      encapsulation: [],
      entryComponents: [],
      inputs: [],
      outputs: [],
      providers: [],
      selector: 'sds-tabs',
      styleUrls: [],
      styles: [],
      templateUrl: ['./tabs.component.html'],
      viewProviders: [],
      inputsClass: [
        {
          name: 'automaticActivation',
          defaultValue: 'false',
          description:
            '<p>Enable automatic activation for tabs when cycling through tabs using\nLeft or Right arrow keys. Automatic activated tabs will automatically\nbe selected on focus as user presses left or right arrow to move\nthrough each tab. By default, tabs will need to be manually selected\nwhen using keyboard only by pressing either Enter or Space to select\nthe focused tab</p>\n',
          line: 31,
          type: 'boolean',
        },
        {
          name: 'selectedTab',
          description: '<p>Currently selected tab for display.</p>\n',
          line: 21,
          type: 'TabPanelComponent',
        },
        {
          name: 'tabClass',
          defaultValue: "'sds-tabs--default'",
          description: '<p>CSS styling class for tabs</p>\n',
          line: 36,
          type: 'string',
        },
      ],
      outputsClass: [
        {
          name: 'selectedTabChange',
          defaultValue: 'new EventEmitter<TabPanelComponent>()',
          description:
            '<p>Emits an event whenever a tab is selected by the user containing the selected\nTabPanelComponent. Please note that because this output contains <code>Change</code> suffix\nto the <code>tabSelected</code> input, users can 2-way bind to the <code>selectedTab</code> input</p>\n',
          line: 44,
          type: 'EventEmitter<TabPanelComponent>',
        },
      ],
      propertiesClass: [
        {
          name: 'focusedTab',
          type: 'TabPanelComponent',
          optional: false,
          description:
            '<p>Currently focused tab - can differ from selected tab when tab panels are manually activated</p>\n',
          line: 51,
          modifierKind: [112],
        },
        {
          name: 'tabPanels',
          type: 'QueryList<TabPanelComponent>',
          optional: false,
          description: '',
          line: 46,
          decorators: [
            {
              name: 'ContentChildren',
              stringifiedArguments: 'TabPanelComponent',
            },
          ],
        },
      ],
      methodsClass: [
        {
          name: 'changeSelectedTabPanel',
          args: [
            {
              name: 'newTabPanel',
              type: 'TabPanelComponent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 137,
          description:
            '<p>Internal method to change currently selected tab panel and display another panel\nto the user. External components should not use this method, but rather\ntwo-way bind the selectedTab input and modify that value.</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 4418,
                end: 4429,
                flags: 0,
                escapedText: 'newTabPanel',
              },
              type: 'TabPanelComponent',
              tagName: {
                pos: 4412,
                end: 4417,
                flags: 0,
                escapedText: 'param',
              },
              comment: '',
            },
          ],
        },
        {
          name: 'getNextTabLeft',
          args: [
            {
              name: 'tabPanels',
              type: 'TabPanelComponent[]',
            },
            {
              name: 'startIndex',
              type: 'number',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 151,
          description:
            '<p>Gets next tab panel to the left of currently selected panel when Left Arrow is pressed.\nSkips disabled panels until it finds next left panel that is not disabled</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 4893,
                end: 4902,
                flags: 0,
                escapedText: 'tabPanels',
              },
              type: 'TabPanelComponent[]',
              tagName: {
                pos: 4887,
                end: 4892,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<ul>\n<li>List of TabPanelComponents in the tab group</li>\n</ul>\n',
            },
            {
              name: {
                pos: 4961,
                end: 4971,
                flags: 0,
                escapedText: 'startIndex',
              },
              type: 'number',
              tagName: {
                pos: 4955,
                end: 4960,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<ul>\n<li>Current index of focused tab panel</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'getNextTabRight',
          args: [
            {
              name: 'tabPanels',
              type: 'TabPanelComponent[]',
            },
            {
              name: 'startIndex',
              type: 'number',
            },
          ],
          optional: false,
          returnType: 'number',
          typeParameters: [],
          line: 167,
          description:
            '<p>Gets next tab panel to the right of currently selected panel when Right Arrow is pressed\nSkips disabled panels until it finds next right panel that is not disabled</p>\n',
          modifierKind: [112],
          jsdoctags: [
            {
              name: {
                pos: 5524,
                end: 5533,
                flags: 0,
                escapedText: 'tabPanels',
              },
              type: 'TabPanelComponent[]',
              tagName: {
                pos: 5518,
                end: 5523,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<ul>\n<li>List of TabPanelComponents in the tab group</li>\n</ul>\n',
            },
            {
              name: {
                pos: 5592,
                end: 5602,
                flags: 0,
                escapedText: 'startIndex',
              },
              type: 'number',
              tagName: {
                pos: 5586,
                end: 5591,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<ul>\n<li>Current index of focused tab panel</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'isObj',
          args: [
            {
              name: 'obj',
              type: 'any',
            },
          ],
          optional: false,
          returnType: 'boolean',
          typeParameters: [],
          line: 121,
          jsdoctags: [
            {
              name: 'obj',
              type: 'any',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngAfterContentInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 82,
          description:
            '<p>If user has not given any tabs to select initially,\nselect the first tab panel.</p>\n',
        },
        {
          name: 'ngOnChanges',
          args: [
            {
              name: 'changes',
              type: 'SimpleChanges',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 70,
          description:
            '<p>Listens for programmatic change to selected tab. When a tab is changed\nprogrammatically, we must disable previously selected tab, set selected\nproperty of the new tab to true, and adjust bookkeeping values.</p>\n',
          jsdoctags: [
            {
              name: 'changes',
              type: 'SimpleChanges',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'ngOnInit',
          args: [],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 58,
          description:
            '<p>Assigns selected tab value was given. Otherwise, the first\ntab panel in the list will be selected after content has initialized.</p>\n',
        },
        {
          name: 'onKeyDown',
          args: [
            {
              name: '$event',
              type: '',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 98,
          description:
            '<p>Looks for Left and Right arrow presses and moves selected tab accordingly.</p>\n',
          jsdoctags: [
            {
              name: {
                pos: 3120,
                end: 3126,
                flags: 0,
                escapedText: '$event',
              },
              type: '',
              tagName: {
                pos: 3114,
                end: 3119,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<ul>\n<li>Keyboard Event</li>\n</ul>\n',
            },
          ],
        },
        {
          name: 'onTabClicked',
          args: [
            {
              name: 'clickEvent',
              type: 'MouseEvent',
            },
            {
              name: 'tabPanel',
              type: 'TabPanelComponent',
            },
          ],
          optional: false,
          returnType: 'void',
          typeParameters: [],
          line: 90,
          jsdoctags: [
            {
              name: 'clickEvent',
              type: 'MouseEvent',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'tabPanel',
              type: 'TabPanelComponent',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      hostBindings: [],
      hostListeners: [],
      description: '',
      rawdescription: '',
      type: 'component',
      sourceCode:
        "import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, TemplateRef } from \"@angular/core\";\nimport { TabPanelComponent } from \"./tab-panel.component\";\n\n/** CONSTANTS\n * Adding in the constant values for keycodes\n * to handle onKeyDown events\n */\nconst LEFT_ARROW = 37;\nconst RIGHT_ARROW = 39;\n\n@Component({\n  selector: `sds-tabs`,\n  templateUrl: `./tabs.component.html`,\n})\nexport class TabsComponent implements OnInit, OnChanges, AfterContentInit {\n\n  /**\n   * Currently selected tab for display.\n   */\n  @Input() \n  selectedTab: TabPanelComponent;\n\n  /**\n   * Enable automatic activation for tabs when cycling through tabs using\n   * Left or Right arrow keys. Automatic activated tabs will automatically\n   * be selected on focus as user presses left or right arrow to move\n   * through each tab. By default, tabs will need to be manually selected\n   * when using keyboard only by pressing either Enter or Space to select\n   * the focused tab\n   */\n  @Input() automaticActivation: boolean = false;\n\n  /**\n   * CSS styling class for tabs\n   */\n  @Input() tabClass: string = 'sds-tabs--default';\n\n  /**\n   * Emits an event whenever a tab is selected by the user containing the selected\n   * TabPanelComponent. Please note that because this output contains `Change` suffix\n   * to the `tabSelected` input, users can 2-way bind to the `selectedTab` input\n   */\n  @Output()\n  selectedTabChange: EventEmitter<TabPanelComponent> = new EventEmitter<TabPanelComponent>();\n\n  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;\n\n  /**\n   * Currently focused tab - can differ from selected tab when tab panels are manually activated\n   */\n  private focusedTab: TabPanelComponent;\n\n\n  /**\n   * Assigns selected tab value was given. Otherwise, the first\n   * tab panel in the list will be selected after content has initialized.\n   */\n  ngOnInit () {\n    if (this.selectedTab) {\n      this.selectedTab.selected = true;\n      this.focusedTab = this.selectedTab;\n    }\n  }\n\n  /**\n   * Listens for programmatic change to selected tab. When a tab is changed\n   * programmatically, we must disable previously selected tab, set selected\n   * property of the new tab to true, and adjust bookkeeping values.\n   */\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.selectedTab && changes.selectedTab.currentValue) {\n      this.tabPanels.forEach(tab => tab.selected = false);\n      changes.selectedTab.currentValue.selected = true;\n      this.focusedTab = this.selectedTab;\n    }\n  }\n\n  /**\n   * If user has not given any tabs to select initially,\n   * select the first tab panel.\n   */\n  ngAfterContentInit() {\n    if (!this.selectedTab) {\n      this.tabPanels.first.selected = true;\n      this.selectedTab = this.tabPanels.first;\n      this.focusedTab = this.selectedTab;\n    }\n  }\n  \n  onTabClicked(clickEvent: MouseEvent, tabPanel: TabPanelComponent) {\n    this.changeSelectedTabPanel(tabPanel);\n  }\n\n  /**\n   * Looks for Left and Right arrow presses and moves selected tab accordingly.\n   * @param $event - Keyboard Event\n   */\n  onKeyDown($event) {\n    console.log($event);\n    const tabPanelArray = this.tabPanels.toArray();\n    let selectedTabIndex = tabPanelArray.findIndex((tabPanel) => tabPanel === this.focusedTab);\n\n    switch($event.keyCode) {\n      case LEFT_ARROW:\n        selectedTabIndex = this.getNextTabLeft(tabPanelArray, selectedTabIndex);\n        break;\n      case RIGHT_ARROW:\n        selectedTabIndex = this.getNextTabRight(tabPanelArray, selectedTabIndex);\n        break;\n    }\n\n    // Move focus to newly selected panel\n    $event.target.parentElement.children[selectedTabIndex].focus();\n    this.focusedTab = tabPanelArray[selectedTabIndex];\n\n    if (this.automaticActivation) {\n      this.changeSelectedTabPanel(this.focusedTab);\n    }\n  }\n\n  isObj(obj: any) {\n    if (typeof(obj) === 'object' && (obj as TemplateRef<any>).elementRef) {\n      return true;\n    } else if (typeof(obj) === 'string') {\n      return false;\n    } else {\n      throw new Error('Tab header must be either a string or a template reference');\n    }\n  }\n\n  /**\n   * Internal method to change currently selected tab panel and display another panel\n   * to the user. External components should not use this method, but rather\n   * two-way bind the selectedTab input and modify that value.\n   * @param newTabPanel \n   */\n  private changeSelectedTabPanel(newTabPanel: TabPanelComponent) {\n    this.selectedTab.selected = false;\n    newTabPanel.selected = true;\n    this.selectedTab = newTabPanel;\n    this.focusedTab = newTabPanel;\n    this.selectedTabChange.emit(this.selectedTab);\n  }\n\n  /**\n   * Gets next tab panel to the left of currently selected panel when Left Arrow is pressed.\n   * Skips disabled panels until it finds next left panel that is not disabled\n   * @param tabPanels - List of TabPanelComponents in the tab group\n   * @param startIndex - Current index of focused tab panel\n   */\n  private getNextTabLeft(tabPanels: TabPanelComponent[], startIndex: number) {\n\n    for (let i = 0; i < tabPanels.length; i++) {\n      startIndex = startIndex == 0 ? tabPanels.length - 1 : (startIndex - 1) % tabPanels.length;\n      if (!tabPanels[startIndex].disabled) {\n        return startIndex;\n      }\n    }\n  }\n\n  /**\n   * Gets next tab panel to the right of currently selected panel when Right Arrow is pressed\n   * Skips disabled panels until it finds next right panel that is not disabled\n   * @param tabPanels - List of TabPanelComponents in the tab group\n   * @param startIndex - Current index of focused tab panel\n   */\n  private getNextTabRight(tabPanels: TabPanelComponent[], startIndex: number) {\n    for (let i = 0; i < tabPanels.length; i++) {\n      startIndex = (startIndex + 1) % this.tabPanels.length;\n      if (!tabPanels[startIndex].disabled) {\n        return startIndex;\n      }\n    }\n  }\n}",
      assetsDirs: [],
      styleUrlsData: '',
      stylesData: '',
      implements: ['OnInit', 'OnChanges', 'AfterContentInit'],
      templateData:
        '<div role="tablist" [attr.class]="tabClass">\n  <button\n    *ngFor="let tabPanel of tabPanels"\n    role="tab"\n    class="sds-tabs__item"\n    [attr.aria-selected]="tabPanel.selected"\n    [attr.tabindex]="tabPanel.selected ? 0 : -1"\n    [attr.aria-controls]="tabPanel.id"\n    [attr.aria-label]="tabPanel.ariaLabel"\n    [disabled]="tabPanel.disabled"\n    (click)="onTabClicked($event, tabPanel)"\n    (keydown)="onKeyDown($event)">\n    <ng-container *ngIf="isObj(tabPanel.tabHeader); else textHeader">\n      <ng-template *ngTemplateOutlet="tabPanel.tabHeader"></ng-template>\n    </ng-container>\n    <ng-template #textHeader>\n      {{tabPanel.tabHeader}}\n    </ng-template>\n  </button>\n</div>\n<div class="sds-tabs__content" tabindex="0">\n  <ng-content></ng-content>\n</div>\n',
    },
  ],
  modules: [
    {
      name: 'PaginationModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'PaginationComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'PaginationComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsAccordionModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsAccordionDirective',
            },
            {
              name: 'SdsAccordionItemComponent',
            },
            {
              name: 'SdsAccordionItemContentDirective',
            },
            {
              name: 'SdsAccordionItemHeaderComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsAccordionDirective',
            },
            {
              name: 'SdsAccordionItemComponent',
            },
            {
              name: 'SdsAccordionItemContentDirective',
            },
            {
              name: 'SdsAccordionItemHeaderComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsActionsMenuModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsActionsMenuComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [
            {
              name: 'SdsMenuModule',
            },
          ],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsActionsMenuComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsAutocompleteModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SDSAutocompleteComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [
            {
              name: 'SdsAutocompleteSearchModule',
            },
            {
              name: 'SdsSelectedResultsModule',
            },
          ],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SDSAutocompleteComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsAutocompleteSearchModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SDSAutocompleteSearchComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [
            {
              name: 'SDSClickOutsideModule',
            },
            {
              name: 'SdsTabOutsideModule',
            },
          ],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SDSAutocompleteSearchComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SDSClickOutsideModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SDSClickOutsideDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SDSClickOutsideDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsCollapseModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'CollapseDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'CollapseDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsDateModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsDatePipe',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsDatePipe',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsDialogModule',
      children: [
        {
          type: 'providers',
          elements: [
            {
              name: 'SdsDialogService',
            },
          ],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsDialogActionsDirective',
            },
            {
              name: 'SdsDialogCloseDirective',
            },
            {
              name: 'SdsDialogContainerComponent',
            },
            {
              name: 'SdsDialogContentDirective',
            },
            {
              name: 'SdsDialogSubtitleDirective',
            },
            {
              name: 'SdsDialogTitleDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsDialogActionsDirective',
            },
            {
              name: 'SdsDialogCloseDirective',
            },
            {
              name: 'SdsDialogContainerComponent',
            },
            {
              name: 'SdsDialogContentDirective',
            },
            {
              name: 'SdsDialogSubtitleDirective',
            },
            {
              name: 'SdsDialogTitleDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsEditorModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsEditorComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsEditorComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsExpiresModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsExpiresDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsExpiresDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsExternalLinkDirectivesModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'ExternalLinkDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'ExternalLinkDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsMenuModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsMenuComponent',
            },
            {
              name: 'SdsMenuHeaderComponent',
            },
            {
              name: 'SdsMenuItemComponent',
            },
            {
              name: 'SdsMenuTriggerForDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsMenuComponent',
            },
            {
              name: 'SdsMenuHeaderComponent',
            },
            {
              name: 'SdsMenuItemComponent',
            },
            {
              name: 'SdsMenuTriggerForDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsObserversModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsObserveWidthDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsObserveWidthDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsPageModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsPageComponent',
            },
            {
              name: 'SdsPageOptionsComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsPageComponent',
            },
            {
              name: 'SdsPageOptionsComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsPopoverModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsPopoverDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsPopoverDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsPopupModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsPopupDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsPopupDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSearchModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsSearchComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsSearchComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSearchResultListModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsSearchResultListComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsSearchResultListComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSelectedResultsModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SDSSelectedResultComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SDSSelectedResultComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSelectionPanelModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsSelectionPanelComponent',
            },
            {
              name: 'SdsSelectionPanelNavigationModeComponent',
            },
            {
              name: 'SdsSelectionPanelSelectionModeComponent',
            },
            {
              name: 'SdsSubPanelComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsSelectionPanelComponent',
            },
            {
              name: 'SdsSubPanelComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSideNavigationModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsSideNavigationComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsSideNavigationComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsSideToolbarModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsSideToolbarComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [
            {
              name: 'SdsDialogModule',
            },
          ],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsSideToolbarComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTabOutsideModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SDSTabOutsideDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SDSTabOutsideDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTabsModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'TabPanelComponent',
            },
            {
              name: 'TabsComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'TabPanelComponent',
            },
            {
              name: 'TabsComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTextModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsTextChildComponent',
            },
            {
              name: 'SdsTextComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsTextChildComponent',
            },
            {
              name: 'SdsTextComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsToastModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsToastComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsToastComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTooltipModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsTooltipDirective',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsTooltipDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTopBannerModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsTopBannerComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsTopBannerComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTreeTableModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsTreeTableComponent',
            },
            {
              name: 'SdsTreeTableRow',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsTreeTableComponent',
            },
            {
              name: 'SdsTreeTableRow',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsTruncateModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsTruncateTextByLineDirective',
            },
            {
              name: 'SdsTruncatedTextContainerComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsTruncateTextByLineDirective',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
    {
      name: 'SdsVideoPlayerModule',
      children: [
        {
          type: 'providers',
          elements: [],
        },
        {
          type: 'declarations',
          elements: [
            {
              name: 'SdsVideoPlayerComponent',
            },
          ],
        },
        {
          type: 'imports',
          elements: [],
        },
        {
          type: 'exports',
          elements: [
            {
              name: 'SdsVideoPlayerComponent',
            },
          ],
        },
        {
          type: 'bootstrap',
          elements: [],
        },
        {
          type: 'classes',
          elements: [],
        },
      ],
    },
  ],
  miscellaneous: {
    variables: [
      {
        name: 'ACCORDION_ITEM_ANIMATION_TIMING',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/accordion/accordion-animations.ts',
        type: 'string',
        defaultValue: "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
        description:
          '<p>Time and timing curve for accordion item animations. </p>\n',
      },
      {
        name: 'animationBody',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog-animations.ts',
        type: '[]',
        defaultValue:
          "[\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\n  // decimate the animation performance. Leaving it as `none` solves both issues.\n  transition('* => enter',\n    [\n      style({opacity: 0, transform: 'scale(0.7)'}),\n      animate('150ms cubic-bezier(0, 0, 0.2, 1)',\n        style({transform: 'none', opacity: 1}))\n    ]\n  ),\n  transition('* => void, * => exit',\n    [\n      style({transform: 'none'}),\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)',\n        style({opacity: 0})\n      )\n    ]\n  ),\n  transition('* => slideEnter', [\n    useAnimation(\n      animation(\n        [\n          style({ right: '-{{ width }}' }),\n          animate(\n            '{{ time }} cubic-bezier(0, 0, 0.2, 1)',\n            style({ right: '0rem' })\n          ),\n        ],\n      )\n    ),\n  ]),\n  transition('* => slideExit', [\n    useAnimation(\n      animation(\n        [\n          style({ right: '0rem' }),\n          animate(\n            '{{ time }} cubic-bezier(0, 0, 0.2, 1)',\n            style({ right: '-{{ width }}' })\n          ),\n        ],\n      )\n    ),\n  ]),\n]",
      },
      {
        name: 'Autocomplete_Autocomplete_VALUE_ACCESSOR',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts',
        type: 'any',
        defaultValue:
          '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true,\n}',
      },
      {
        name: 'Autocomplete_VALUE_ACCESSOR',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/autocomplete/autocomplete.component.ts',
        type: 'any',
        defaultValue:
          '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n}',
      },
      {
        name: 'ChromeFirefoxMocks',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
        type: 'object',
        defaultValue:
          "{\n  enter: {\n    charCode: 13,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13,\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
      },
      {
        name: 'dialogElementUid',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
        type: 'number',
        defaultValue: '0',
        description:
          '<p>Counter used to generate unique IDs for dialog elements. </p>\n',
      },
      {
        name: 'EdgeMocks',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
        type: 'object',
        defaultValue:
          "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
      },
      {
        name: 'GLOBAL_STRINGS',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/video-player/video-player.component.ts',
        type: 'any',
      },
      {
        name: 'GropupSampleAutocompleteData',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts',
        type: '[]',
        defaultValue:
          "[\n  {\n    code: 'A',\n    elements: [\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001001',\n        value: 'Formula Grants'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001002',\n        value: 'Formula Grants (Apportionments)'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001003',\n        value: 'Formula Grants (Cooperative Agreements)'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001004',\n        value: 'Formula Grants (Health Incentive Grants)'\n      }\n    ],\n    description:\n      'Formula Grants - Allocations of money to States or their subdivisions in accordance with a distribution formula prescribed by law or administrative regulation, for activities of a continuing nature not confined to a specific project.',\n    element_id: '0001',\n    value: 'FORMULA GRANTS'\n  },\n  {\n    code: 'B',\n    elements: [\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003001',\n        value: 'Cooperative Agreements'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003002',\n        value: 'Cooperative Agreements (Discretionary Grants)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003003',\n        value: 'Project Grants'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003004',\n        value:\n          'Project Grants (Capacity Building and Complaint Processing, Training)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003005',\n        value: 'Project Grants (Contracts)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003006',\n        value: 'Project Grants (Cooperative Agreements or Contracts)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003007',\n        value: 'Project Grants (Cooperative Agreements)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003008',\n        value: 'Project Grants (Discretionary)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003009',\n        value: 'Project Grants (Fellowships)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003010',\n        value:\n          'Project Grants (for administration projects authorized under Section'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003011',\n        value:\n          'Project Grants (for collaborative design of curriculum, production of'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003012',\n        value: 'Project Grants (for specified projects)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003013',\n        value: 'Project Grants (including individual awards)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003014',\n        value: 'Project Grants (including travel grants)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003015',\n        value:\n          'Project Grants (Rehabilitation of existing indoor and outdoor recreat'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003016',\n        value: 'Project Grants (Special)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003017',\n        value: 'Project Grants (to capitalize loan funds)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003018',\n        value: 'Project Grants (with Formula Distribution)'\n      }\n    ],\n    description:\n      'Project Grants - The funding, for fixed or known periods, of specific projects or the delivery of specific services or products without liability for damages for failure to perform. Project grants include fellowships, scholarships, research grants, training grants, traineeships, experimental and demonstration grants, evaluation grants, planning grants, technical assistance grants, survey grants, construction grants, and unsolicited contractual agreements.',\n    element_id: '0003',\n    value: 'PROJECT GRANTS'\n  },\n  {\n    code: 'C',\n    elements: [\n      {\n        code: 'C',\n        elements: null,\n        description: null,\n        element_id: '0005001',\n        value: 'Direct Payments for Specified Use'\n      },\n      {\n        code: 'C',\n        elements: null,\n        description: null,\n        element_id: '0005002',\n        value: 'Direct Payments for Specified Use (Cooperative Agreements)'\n      }\n    ],\n    description:\n      'Direct Payments for a Specified Use - Financial assistance provided directly to individuals, private firms, and other private institutions to encourage or subsidize a particular activity by conditioning the receipt of the on a particular performance by the recipient. This does not include solicited contracts for the procurement of goods and services for the Federal government.',\n    element_id: '0005',\n    value: 'DIRECT PAYMENTS FOR A SPECIFIED USE'\n  },\n  {\n    code: 'D',\n    elements: [\n      {\n        code: 'D',\n        elements: null,\n        description: null,\n        element_id: '0007001',\n        value: 'Direct Payments with Unrestricted Use'\n      }\n    ],\n    description:\n      'Direct Payments with Unrestricted Use - Financial assistance provided directly to beneficiaries who satisfy eligibility requirements with no restrictions imposed on the recipient as to how the money is spent. Included are payments under retirement, pension, and compensation programs.',\n    element_id: '0007',\n    value: 'DIRECT PAYMENTS WITH UNRESTRICTED USE'\n  },\n  {\n    code: 'E',\n    elements: [\n      {\n        code: 'E',\n        elements: null,\n        description: null,\n        element_id: '0009001',\n        value: 'Direct Loans'\n      }\n    ],\n    description:\n      'Direct Loans - Financial assistance provided through the lending of Federal monies for a specific period of time, with a reasonable expectation of repayment. Such loans may or may not require the payment of interest.',\n    element_id: '0009',\n    value: 'DIRECT LOANS'\n  },\n  {\n    code: 'F',\n    elements: [\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011001',\n        value: 'Guaranteed/Insured Loans'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011002',\n        value:\n          'Guaranteed/Insured Loans (including Guaranty Participation Loans)'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011003',\n        value:\n          'Guaranteed/Insured Loans (including Immediate Participation Loans)'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011004',\n        value: 'Loan Guarantees/Grants'\n      }\n    ],\n    description:\n      'Guaranteed/Insured Loans - Programs in which the Federal Government makes an arrangement to indemnify a lender against all or part of all of any defaults by those responsible for the repayment of loans.',\n    element_id: '0011',\n    value: 'GUARANTEED/INSURED LOANS'\n  },\n  {\n    code: 'G',\n    elements: [\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013001',\n        value: 'Insurance'\n      },\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013002',\n        value: 'Insurance (Guaranteed Surety Bonds)'\n      },\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013003',\n        value: 'Insurance (Reimbursement)'\n      }\n    ],\n    description:\n      'Insurance - Financial assistance provided to assure reimbursement for losses sustained under specified conditions. Coverage may be provided directly by the Federal Government or through private carriers and may or may not involve the payment of premiums.',\n    element_id: '0013',\n    value: 'INSURANCE'\n  },\n  {\n    code: 'H',\n    elements: [\n      {\n        code: 'H',\n        elements: null,\n        description: null,\n        element_id: '0015001',\n        value: 'Sale, Exchange, or Donation of Property and Goods'\n      }\n    ],\n    description:\n      'Sale, Exchange, or Donation of Property or Goods - Programs that provide for the sale, exchange, or donation of Federal real property, personal property, commodities, and other goods including land, buildings, equipment, food, and drugs. This does not include the loan of, use of, or access to Federal facilities or property.',\n    element_id: '0015',\n    value: 'SALE, EXCHANGE, OR DONATION OF PROPERTY OR GOODS'\n  },\n  {\n    code: 'I',\n    elements: [\n      {\n        code: 'I',\n        elements: null,\n        description: null,\n        element_id: '0017001',\n        value: 'Use of Property, Facilities, and Equipment'\n      }\n    ],\n    description:\n      'Use of Property, Facilities, or Equipment - Programs that provide for the loan of, use of, or access to Federal facilities or property wherein the federally owned facilities or property do not remain in the possession of the recipient of the assistance.',\n    element_id: '0017',\n    value: 'USE OF PROPERTY, FACILITIES, OR EQUIPMENT'\n  },\n  {\n    code: 'J',\n    elements: [\n      {\n        code: 'J',\n        elements: null,\n        description: null,\n        element_id: '0019001',\n        value: 'Provision of Specialized Services'\n      }\n    ],\n    description:\n      'Provision of Specialized Services - Programs that provide Federal personnel to directly perform certain tasks for the benefit of communities or individuals. These services may be performed in conjunction with non-Federal personnel, but they involve more than consultation, advice, or counseling.',\n    element_id: '0019',\n    value: 'PROVISION OF SPECIALIZED SERVICES'\n  },\n  {\n    code: 'K',\n    elements: [\n      {\n        code: 'K',\n        elements: null,\n        description: null,\n        element_id: '0021001',\n        value: 'Advisory Services and Counseling'\n      },\n      {\n        code: 'K',\n        elements: null,\n        description: null,\n        element_id: '0021002',\n        value: 'Advisory Services on Compliance'\n      }\n    ],\n    description:\n      'Advisory Services and Counseling - Programs that provide Federal specialists to consult, advise, or counsel communities or individuals including conferences, workshops, or personal contacts. This may involve the use of published information, but only in a secondary capacity.',\n    element_id: '0021',\n    value: 'ADVISORY SERVICES AND COUNSELING'\n  },\n  {\n    code: 'L',\n    elements: [\n      {\n        code: 'L',\n        elements: null,\n        description: null,\n        element_id: '0023001',\n        value: 'Dissemination of Technical Information'\n      },\n      {\n        code: 'L',\n        elements: null,\n        description: null,\n        element_id: '0023002',\n        value: 'Information'\n      }\n    ],\n    description:\n      'Dissemination of Technical Information - Programs that provide for the publication and distribution of information or data of a specialized technical nature, frequently through clearinghouses or libraries. This does not include conventional public information services designed for general public consumption.',\n    element_id: '0023',\n    value: 'DISSEMINATION OF TECHNICAL INFORMATION'\n  },\n  {\n    code: 'M',\n    elements: [\n      {\n        code: 'M',\n        elements: null,\n        description: null,\n        element_id: '0025001',\n        value: 'Training'\n      }\n    ],\n    description:\n      'Training - Programs that provide instructional activities conducted directly by a Federal agency for individuals not employed by the Federal Government.',\n    element_id: '0025',\n    value: 'TRAINING'\n  },\n  {\n    code: 'N',\n    elements: [\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027020',\n        value: 'Resolution of Disputes'\n      },\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027001',\n        value: 'Investigation of Complaints'\n      },\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027002',\n        value: 'Investigation of Complaints (Compliance Reviews)'\n      }\n    ],\n    description:\n      'Investigation of Complaints - Federal administrative agency activities that are initiated in response to requests, either formal or informal, to examine or investigate claims of violations of Federal statutes, policy, or procedure. Such claims must come from outside the Federal Government.',\n    element_id: '0027',\n    value: 'INVESTIGATION OF COMPLAINTS'\n  },\n  {\n    code: 'O',\n    elements: [\n      {\n        code: 'O',\n        elements: null,\n        description: null,\n        element_id: '0029001',\n        value: 'Federal Employment'\n      }\n    ],\n    description:\n      'Federal Employment - Programs that reflect the government-wide resposibilities of the Office of Personnel Management in the recruitment and hiring of Federal civilian agency personnel.',\n    element_id: '0029',\n    value: 'FEDERAL EMPLOYMENT'\n  },\n  {\n    code: 'Z',\n    elements: [\n      {\n        code: 'Z',\n        elements: null,\n        description: null,\n        element_id: '0090001',\n        value: 'Salaries and Expenses'\n      }\n    ],\n    description: null,\n    element_id: '0090',\n    value: 'SALARIES AND EXPENSES'\n  }\n]",
      },
      {
        name: 'IEMocks',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
        type: 'object',
        defaultValue:
          "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: 'Spacebar',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
      },
      {
        name: 'LEFT_ARROW',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/tabs/tabs.component.ts',
        type: 'number',
        defaultValue: '37',
        description:
          '<p>CONSTANTS\nAdding in the constant values for keycodes\nto handle onKeyDown events</p>\n',
      },
      {
        name: 'mocks',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
        type: 'object',
        defaultValue:
          '{\n  ie: IEMocks,\n  edge: EdgeMocks,\n  default: ChromeFirefoxMocks,\n  safari: SafariMocks\n}',
      },
      {
        name: 'RIGHT_ARROW',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/tabs/tabs.component.ts',
        type: 'number',
        defaultValue: '39',
      },
      {
        name: 'SafariMocks',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
        type: 'object',
        defaultValue:
          "{\n  enter: {\n    charCode: 0,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: 'Enter',\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: 'Up',\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: 'Down',\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: 'Left',\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: 'Right',\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: 'U+0009',\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: 'U+001B',\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: 'U+0020',\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: 'Shift',\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: 'U+0008',\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: 'U+007F',\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
      },
      {
        name: 'SDS_ACCORDION',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/accordion/accordion-base.ts',
        type: '',
        defaultValue: "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
        description:
          '<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n',
      },
      {
        name: 'SDS_DIALOG_DATA',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: '',
        defaultValue: "new InjectionToken<any>('SdsDialogData')",
        description:
          '<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n',
      },
      {
        name: 'SDS_DIALOG_DEFAULT_OPTIONS',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: '',
        defaultValue:
          "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
        description:
          '<p>Injection token that can be used to specify default dialog options. </p>\n',
      },
      {
        name: 'SDS_DIALOG_SCROLL_STRATEGY',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: '',
        defaultValue:
          "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
        description:
          '<p>Injection token that determines the scroll handling while the dialog is open. </p>\n',
      },
      {
        name: 'SDS_DIALOG_SCROLL_STRATEGY_PROVIDER',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: 'object',
        defaultValue:
          '{\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}',
      },
      {
        name: 'SDS_MENU_TOKEN',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/menu/menu.component.ts',
        type: '',
        defaultValue:
          "new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n)",
        description:
          '<p>Injection token used to provide the parent menu to menu items. </p>\n',
      },
      {
        name: 'SDS_SelectedResult_VALUE_ACCESSOR',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/selected-result/selected-result.component.ts',
        type: 'any',
        defaultValue:
          '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n}',
      },
      {
        name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: '',
        defaultValue:
          "new InjectionToken<() => ScrollStrategy>('sds-slide-out-scroll-strategy')",
      },
      {
        name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        type: 'object',
        defaultValue:
          '{\n  provide: SDS_SLIDE_OUT_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}',
      },
      {
        name: 'SDS_TRUNCATED_TEXT_DATA',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/truncate-text/truncates-text-base.ts',
        type: '',
        defaultValue: "new InjectionToken<any>(\n  'SdsTruncatedTextData'\n)",
        description:
          '<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n',
      },
      {
        name: 'sdsDialogAnimations',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog-animations.ts',
        type: 'literal type',
        defaultValue:
          "{\n  /** Animation that is applied on the dialog container by defalt. */\n  dialogContainer: trigger('dialogContainer', animationBody)\n}",
        description: '<p>Animations used by SdsDialog.</p>\n',
      },
      {
        name: 'sdsExpansionAnimations',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/accordion/accordion-animations.ts',
        type: 'literal type',
        defaultValue:
          "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\n    state('expanded', style({height: '*', visibility: 'visible'})),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\n  ])\n}",
      },
      {
        name: 'sdsMenuAnimations',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/menu/menu-animations.ts',
        type: 'literal type',
        defaultValue:
          "{\n  transformMenu: trigger('transformMenu', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-menu',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}",
      },
      {
        name: 'SdsToastSettings',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/toast/toast.module.ts',
        type: 'object',
        defaultValue:
          "{\n  toastComponent: SdsToastComponent,\n  timeOut: 6000,\n  toastClass: 'sds-toast',\n  positionClass: 'toast-bottom-left',\n}",
      },
      {
        name: 'sdsTruncateTextAnimations',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts',
        type: 'literal type',
        defaultValue:
          "{\n  container: trigger('container', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-overlay',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}",
      },
      {
        name: 'uniqueId',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file:
          'libs/packages/components/src/lib/accordion/accordion-item.component.ts',
        type: 'number',
        defaultValue: '0',
        description: '<p>Counter for generating unique element ids. </p>\n',
      },
      {
        name: 'uniqueId',
        ctype: 'miscellaneous',
        subtype: 'variable',
        file: 'libs/packages/components/src/lib/dialog/dialog-ref.ts',
        type: 'number',
        defaultValue: '0',
      },
    ],
    functions: [
      {
        name: '_applyConfigDefaults',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '<p>Applies default options to the dialog config.</p>\n',
        args: [
          {
            name: 'config',
            optional: true,
          },
          {
            name: 'defaultOptions',
            optional: true,
          },
        ],
        returnType: 'SdsDialogConfig',
        jsdoctags: [
          {
            name: {
              pos: 14833,
              end: 14839,
              flags: 0,
              escapedText: 'config',
            },
            optional: true,
            tagName: {
              pos: 14827,
              end: 14832,
              flags: 0,
              escapedText: 'param',
            },
            comment: '<p>Config to be modified.</p>\n',
          },
          {
            name: {
              pos: 14873,
              end: 14887,
              flags: 0,
              escapedText: 'defaultOptions',
            },
            optional: true,
            tagName: {
              pos: 14867,
              end: 14872,
              flags: 0,
              escapedText: 'param',
            },
            comment: '<p>Default options provided.</p>\n',
          },
          {
            tagName: {
              pos: 14918,
              end: 14925,
              flags: 0,
              escapedText: 'returns',
            },
            comment: '<p>The new configuration object.</p>\n',
          },
        ],
      },
      {
        name: 'createFakeEvent',
        file: 'libs/packages/components/src/lib/testing/event-objects.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Creates a fake event object with any desired event type. </p>\n',
        args: [
          {
            name: 'type',
          },
          {
            name: 'canBubble',
            type: '',
          },
          {
            name: 'cancelable',
            type: '',
          },
        ],
        jsdoctags: [
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'canBubble',
            type: '',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'cancelable',
            type: '',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'createKeyboardEvent',
        file: 'libs/packages/components/src/lib/testing/event-objects.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '<p>Dispatches a keydown event from an element. </p>\n',
        args: [
          {
            name: 'type',
          },
          {
            name: 'keyCode',
          },
          {
            name: 'target',
            optional: true,
          },
          {
            name: 'key',
            optional: true,
          },
        ],
        jsdoctags: [
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'keyCode',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'target',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'key',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'createMouseEvent',
        file: 'libs/packages/components/src/lib/testing/event-objects.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '',
        args: [
          {
            name: 'type',
          },
          {
            name: 'x',
            type: 'number',
          },
          {
            name: 'y',
            type: 'number',
          },
          {
            name: 'button',
            type: 'number',
          },
        ],
        jsdoctags: [
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'x',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'y',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'button',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'createTouchEvent',
        file: 'libs/packages/components/src/lib/testing/event-objects.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n',
        args: [
          {
            name: 'type',
          },
          {
            name: 'pageX',
            type: 'number',
          },
          {
            name: 'pageY',
            type: 'number',
          },
        ],
        jsdoctags: [
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'pageX',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'pageY',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'debounce',
        file: 'libs/packages/components/src/lib/popover/debounce.decorator.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Delays calling of a function for <code>delay</code> number of milliseconds.</p>\n',
        args: [
          {
            name: 'delay',
          },
        ],
        returnType: 'MethodDecorator',
        jsdoctags: [
          {
            name: 'delay',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'dispatchEvent',
        file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '<p>Utility to dispatch any event on a Node. </p>\n',
        args: [
          {
            name: 'node',
          },
          {
            name: 'event',
          },
        ],
        returnType: 'Event',
        jsdoctags: [
          {
            name: 'node',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'event',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'dispatchFakeEvent',
        file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Shorthand to dispatch a fake event on a specified node. </p>\n',
        args: [
          {
            name: 'node',
          },
          {
            name: 'type',
          },
          {
            name: 'canBubble',
            type: 'boolean',
            optional: true,
          },
        ],
        returnType: 'Event',
        jsdoctags: [
          {
            name: 'node',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'canBubble',
            type: 'boolean',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'dispatchKeyboardEvent',
        file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n',
        args: [
          {
            name: 'node',
          },
          {
            name: 'type',
          },
          {
            name: 'keyCode',
          },
          {
            name: 'target',
            optional: true,
          },
        ],
        returnType: 'KeyboardEvent',
        jsdoctags: [
          {
            name: 'node',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'keyCode',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'target',
            optional: true,
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'dispatchMouseEvent',
        file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n',
        args: [
          {
            name: 'node',
          },
          {
            name: 'type',
          },
          {
            name: 'x',
            type: 'number',
          },
          {
            name: 'y',
            type: 'number',
          },
          {
            name: 'event',
            type: '',
          },
        ],
        returnType: 'MouseEvent',
        jsdoctags: [
          {
            name: 'node',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'x',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'y',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'event',
            type: '',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'dispatchTouchEvent',
        file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n',
        args: [
          {
            name: 'node',
          },
          {
            name: 'type',
          },
          {
            name: 'x',
            type: 'number',
          },
          {
            name: 'y',
            type: 'number',
          },
        ],
        jsdoctags: [
          {
            name: 'node',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'type',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'x',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
          {
            name: 'y',
            type: 'number',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'getClosestDialog',
        file:
          'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n',
        args: [
          {
            name: 'element',
          },
          {
            name: 'openDialogs',
          },
        ],
        jsdoctags: [
          {
            name: {
              pos: 3907,
              end: 3914,
              flags: 0,
              escapedText: 'element',
            },
            tagName: {
              pos: 3901,
              end: 3906,
              flags: 0,
              escapedText: 'param',
            },
            comment: '<p>Element relative to which to look for a dialog.</p>\n',
          },
          {
            name: {
              pos: 3973,
              end: 3984,
              flags: 0,
              escapedText: 'openDialogs',
            },
            tagName: {
              pos: 3967,
              end: 3972,
              flags: 0,
              escapedText: 'param',
            },
            comment: '<p>References to the currently-open dialogs.</p>\n',
          },
        ],
      },
      {
        name: 'patchElementFocus',
        file: 'libs/packages/components/src/lib/testing/element-focus.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n',
        args: [
          {
            name: 'element',
          },
        ],
        jsdoctags: [
          {
            name: 'element',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'SDS_DIALOG_SCROLL_STRATEGY_FACTORY',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '',
        args: [
          {
            name: 'overlay',
          },
        ],
        returnType: 'ScrollStrategy',
        jsdoctags: [
          {
            name: 'overlay',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '',
        args: [
          {
            name: 'overlay',
          },
        ],
        returnType: 'ScrollStrategy',
        jsdoctags: [
          {
            name: 'overlay',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY',
        file: 'libs/packages/components/src/lib/dialog/dialog.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description: '',
        args: [
          {
            name: 'overlay',
          },
        ],
        returnType: 'ScrollStrategy',
        jsdoctags: [
          {
            name: 'overlay',
            tagName: {
              text: 'param',
            },
          },
        ],
      },
      {
        name: 'throwSdsDialogContentAlreadyAttachedError',
        file:
          'libs/packages/components/src/lib/dialog/dialog-container.component.ts',
        ctype: 'miscellaneous',
        subtype: 'function',
        description:
          '<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n',
        args: [],
      },
    ],
    typealiases: [
      {
        name: 'DialogRole',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"dialog" | "alertdialog"',
        file: 'libs/packages/components/src/lib/dialog/dialog-config.ts',
        description: '<p>Valid ARIA roles for a dialog element. </p>\n',
        kind: 168,
      },
      {
        name: 'MenuPositionX',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"before" | "after"',
        file: 'libs/packages/components/src/lib/menu/menu.component.ts',
        description: '<p>Menu Positions </p>\n',
        kind: 168,
      },
      {
        name: 'MenuPositionY',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"above" | "below"',
        file: 'libs/packages/components/src/lib/menu/menu.component.ts',
        description: '',
        kind: 168,
      },
      {
        name: 'MenuSizes',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '',
        file: 'libs/packages/components/src/lib/menu/menu.component.ts',
        description: '<p>Menu available sizes </p>\n',
        kind: 177,
      },
      {
        name: 'PaginationDisplayMode',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"default" | "results"',
        file:
          'libs/packages/components/src/lib/pagination/pagination.component.ts',
        description: '<p>pagination display modes. </p>\n',
        kind: 168,
      },
      {
        name: 'SdsAccordionDisplayMode',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"default" | "basic"',
        file: 'libs/packages/components/src/lib/accordion/accordion-base.ts',
        description: '<p>Accordion&#39;s display modes. </p>\n',
        kind: 168,
      },
      {
        name: 'SdsAccordionItemState',
        ctype: 'miscellaneous',
        subtype: 'typealias',
        rawtype: '"expanded" | "collapsed"',
        file:
          'libs/packages/components/src/lib/accordion/accordion-item.component.ts',
        description: '<p>Accordion Item&#39;s states. </p>\n',
        kind: 168,
      },
    ],
    enumerations: [
      {
        name: 'KEYS',
        childs: [
          {
            name: 'ENTER',
            value: 'enter',
          },
          {
            name: 'ALT',
            value: 'alt',
          },
          {
            name: 'UP',
            value: 'up',
          },
          {
            name: 'DOWN',
            value: 'down',
          },
          {
            name: 'LEFT',
            value: 'left',
          },
          {
            name: 'RIGHT',
            value: 'right',
          },
          {
            name: 'TAB',
            value: 'tab',
          },
          {
            name: 'ESC',
            value: 'esc',
          },
          {
            name: 'SPACE',
            value: 'space',
          },
          {
            name: 'SHIFT',
            value: 'shift',
          },
          {
            name: 'BACKSPACE',
            value: 'backspace',
          },
          {
            name: 'ONE',
            value: '1',
          },
          {
            name: 'TWO',
            value: '2',
          },
          {
            name: 'THREE',
            value: '3',
          },
          {
            name: 'FOUR',
            value: '4',
          },
          {
            name: 'FIVE',
            value: '5',
          },
          {
            name: 'SIX',
            value: '6',
          },
          {
            name: 'SEVEN',
            value: '7',
          },
          {
            name: 'EIGHT',
            value: '8',
          },
          {
            name: 'NINE',
            value: '9',
          },
          {
            name: 'ZERO',
            value: '0',
          },
          {
            name: 'DELETE',
            value: 'delete',
          },
        ],
        ctype: 'miscellaneous',
        subtype: 'enum',
        description: '',
        file: 'libs/packages/components/src/lib/key-helper/key-helper.ts',
      },
      {
        name: 'NavigationMode',
        childs: [
          {
            name: 'INTERNAL',
          },
          {
            name: 'EXTERNAL',
          },
          {
            name: 'EVENT',
          },
          {
            name: 'LABEL',
          },
        ],
        ctype: 'miscellaneous',
        subtype: 'enum',
        description: '',
        file:
          'libs/packages/components/src/lib/common-navigation/common-navigation-model.ts',
      },
      {
        name: 'SelectionMode',
        childs: [
          {
            name: 'SINGLE',
          },
          {
            name: 'MULTIPLE',
          },
        ],
        ctype: 'miscellaneous',
        subtype: 'enum',
        description: '',
        file:
          'libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts',
      },
    ],
    groupedVariables: {
      'libs/packages/components/src/lib/accordion/accordion-animations.ts': [
        {
          name: 'ACCORDION_ITEM_ANIMATION_TIMING',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/accordion/accordion-animations.ts',
          type: 'string',
          defaultValue: "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
          description:
            '<p>Time and timing curve for accordion item animations. </p>\n',
        },
        {
          name: 'sdsExpansionAnimations',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/accordion/accordion-animations.ts',
          type: 'literal type',
          defaultValue:
            "{\n  /** Animation that expands and collapses the accordion item content. */\n  bodyExpansion: trigger('bodyExpansion', [\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\n    state('expanded', style({height: '*', visibility: 'visible'})),\n    transition('expanded <=> collapsed, void => collapsed',\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\n  ])\n}",
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog-animations.ts': [
        {
          name: 'animationBody',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog-animations.ts',
          type: '[]',
          defaultValue:
            "[\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\n  // decimate the animation performance. Leaving it as `none` solves both issues.\n  transition('* => enter',\n    [\n      style({opacity: 0, transform: 'scale(0.7)'}),\n      animate('150ms cubic-bezier(0, 0, 0.2, 1)',\n        style({transform: 'none', opacity: 1}))\n    ]\n  ),\n  transition('* => void, * => exit',\n    [\n      style({transform: 'none'}),\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)',\n        style({opacity: 0})\n      )\n    ]\n  ),\n  transition('* => slideEnter', [\n    useAnimation(\n      animation(\n        [\n          style({ right: '-{{ width }}' }),\n          animate(\n            '{{ time }} cubic-bezier(0, 0, 0.2, 1)',\n            style({ right: '0rem' })\n          ),\n        ],\n      )\n    ),\n  ]),\n  transition('* => slideExit', [\n    useAnimation(\n      animation(\n        [\n          style({ right: '0rem' }),\n          animate(\n            '{{ time }} cubic-bezier(0, 0, 0.2, 1)',\n            style({ right: '-{{ width }}' })\n          ),\n        ],\n      )\n    ),\n  ]),\n]",
        },
        {
          name: 'sdsDialogAnimations',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog-animations.ts',
          type: 'literal type',
          defaultValue:
            "{\n  /** Animation that is applied on the dialog container by defalt. */\n  dialogContainer: trigger('dialogContainer', animationBody)\n}",
          description: '<p>Animations used by SdsDialog.</p>\n',
        },
      ],
      'libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts': [
        {
          name: 'Autocomplete_Autocomplete_VALUE_ACCESSOR',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts',
          type: 'any',
          defaultValue:
            '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\n  multi: true,\n}',
        },
      ],
      'libs/packages/components/src/lib/autocomplete/autocomplete.component.ts': [
        {
          name: 'Autocomplete_VALUE_ACCESSOR',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/autocomplete/autocomplete.component.ts',
          type: 'any',
          defaultValue:
            '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\n  multi: true\n}',
        },
      ],
      'libs/packages/components/src/lib/key-helper/key-mocks.ts': [
        {
          name: 'ChromeFirefoxMocks',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
          type: 'object',
          defaultValue:
            "{\n  enter: {\n    charCode: 13,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13,\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
        },
        {
          name: 'EdgeMocks',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
          type: 'object',
          defaultValue:
            "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
        },
        {
          name: 'IEMocks',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
          type: 'object',
          defaultValue:
            "{\n  enter: {\n    charCode: 0,\n    code: undefined,\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: undefined,\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: undefined,\n    key: 'Up',\n    keyCode: 38,\n    keyIdentifier: undefined,\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: undefined,\n    key: 'Down',\n    keyCode: 40,\n    keyIdentifier: undefined,\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: undefined,\n    key: 'Left',\n    keyCode: 37,\n    keyIdentifier: undefined,\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: undefined,\n    key: 'Right',\n    keyCode: 39,\n    keyIdentifier: undefined,\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: undefined,\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: undefined,\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: undefined,\n    key: 'Esc',\n    keyCode: 27,\n    keyIdentifier: undefined,\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: undefined,\n    key: 'Spacebar',\n    keyCode: 32,\n    keyIdentifier: undefined,\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: undefined,\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: undefined,\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: undefined,\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: undefined,\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: undefined,\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: undefined,\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
        },
        {
          name: 'mocks',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
          type: 'object',
          defaultValue:
            '{\n  ie: IEMocks,\n  edge: EdgeMocks,\n  default: ChromeFirefoxMocks,\n  safari: SafariMocks\n}',
        },
        {
          name: 'SafariMocks',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/key-helper/key-mocks.ts',
          type: 'object',
          defaultValue:
            "{\n  enter: {\n    charCode: 0,\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    keyIdentifier: 'Enter',\n    which: 13\n  },\n  up: {\n    charCode: 0,\n    code: 'ArrowUp',\n    key: 'ArrowUp',\n    keyCode: 38,\n    keyIdentifier: 'Up',\n    which: 38\n  },\n  down: {\n    charCode: 0,\n    code: 'ArrowDown',\n    key: 'ArrowDown',\n    keyCode: 40,\n    keyIdentifier: 'Down',\n    which: 40\n  },\n  left: {\n    charCode: 0,\n    code: 'ArrowLeft',\n    key: 'ArrowLeft',\n    keyCode: 37,\n    keyIdentifier: 'Left',\n    which: 37\n  },\n  right: {\n    charCode: 0,\n    code: 'ArrowRight',\n    key: 'ArrowRight',\n    keyCode: 39,\n    keyIdentifier: 'Right',\n    which: 39\n  },\n  tab: {\n    charCode: 0,\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    keyIdentifier: 'U+0009',\n    which: 9\n  },\n  esc: {\n    charCode: 0,\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    keyIdentifier: 'U+001B',\n    which: 27\n  },\n  space: {\n    charCode: 0,\n    code: 'Space',\n    key: ' ',\n    keyCode: 32,\n    keyIdentifier: 'U+0020',\n    which: 32\n  },\n  shift: {\n    charCode: 0,\n    code: 'ShiftLeft',\n    key: 'Shift',\n    keyCode: 16,\n    keyIdentifier: 'Shift',\n    which: 16\n  },\n  backspace: {\n    charCode: 0,\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    keyIdentifier: 'U+0008',\n    which: 8\n  },\n  delete: {\n    charCode: 0,\n    code: 'Delete',\n    key: 'Delete',\n    keyCode: 46,\n    keyIdentifier: 'U+007F',\n    which: 46\n  },\n  0: {\n    charCode: 0,\n    code: 'Digit0',\n    key: 0,\n    keyCode: 48,\n    keyIdentifier: 'U+0030',\n    which: 48\n  },\n  1: {\n    charCode: 0,\n    code: 'Digit1',\n    key: 1,\n    keyCode: 49,\n    keyIdentifier: 'U+0031',\n    which: 49\n  },\n  2: {\n    charCode: 0,\n    code: 'Digit2',\n    key: 2,\n    keyCode: 50,\n    keyIdentifier: 'U+0032',\n    which: 50\n  },\n  3: {\n    charCode: 0,\n    code: 'Digit3',\n    key: 3,\n    keyCode: 51,\n    keyIdentifier: 'U+0033',\n    which: 51\n  },\n  4: {\n    charCode: 0,\n    code: 'Digit4',\n    key: 4,\n    keyCode: 52,\n    keyIdentifier: 'U+0034',\n    which: 52\n  },\n  5: {\n    charCode: 0,\n    code: 'Digit5',\n    key: 5,\n    keyCode: 53,\n    keyIdentifier: 'U+0035',\n    which: 53\n  },\n  6: {\n    charCode: 0,\n    code: 'Digit6',\n    key: 6,\n    keyCode: 54,\n    keyIdentifier: 'U+0036',\n    which: 54\n  },\n  7: {\n    charCode: 0,\n    code: 'Digit7',\n    key: 7,\n    keyCode: 55,\n    keyIdentifier: 'U+0037',\n    which: 55\n  },\n  8: {\n    charCode: 0,\n    code: 'Digit8',\n    key: 8,\n    keyCode: 56,\n    keyIdentifier: 'U+0038',\n    which: 56\n  },\n  9: {\n    charCode: 0,\n    code: 'Digit9',\n    key: 9,\n    keyCode: 57,\n    keyIdentifier: 'U+0039',\n    which: 57\n  }\n}",
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog-content.directives.ts': [
        {
          name: 'dialogElementUid',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
          type: 'number',
          defaultValue: '0',
          description:
            '<p>Counter used to generate unique IDs for dialog elements. </p>\n',
        },
      ],
      'libs/packages/components/src/lib/video-player/video-player.component.ts': [
        {
          name: 'GLOBAL_STRINGS',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/video-player/video-player.component.ts',
          type: 'any',
        },
      ],
      'libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts': [
        {
          name: 'GropupSampleAutocompleteData',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts',
          type: '[]',
          defaultValue:
            "[\n  {\n    code: 'A',\n    elements: [\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001001',\n        value: 'Formula Grants'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001002',\n        value: 'Formula Grants (Apportionments)'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001003',\n        value: 'Formula Grants (Cooperative Agreements)'\n      },\n      {\n        code: 'A',\n        elements: null,\n        description: null,\n        element_id: '0001004',\n        value: 'Formula Grants (Health Incentive Grants)'\n      }\n    ],\n    description:\n      'Formula Grants - Allocations of money to States or their subdivisions in accordance with a distribution formula prescribed by law or administrative regulation, for activities of a continuing nature not confined to a specific project.',\n    element_id: '0001',\n    value: 'FORMULA GRANTS'\n  },\n  {\n    code: 'B',\n    elements: [\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003001',\n        value: 'Cooperative Agreements'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003002',\n        value: 'Cooperative Agreements (Discretionary Grants)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003003',\n        value: 'Project Grants'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003004',\n        value:\n          'Project Grants (Capacity Building and Complaint Processing, Training)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003005',\n        value: 'Project Grants (Contracts)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003006',\n        value: 'Project Grants (Cooperative Agreements or Contracts)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003007',\n        value: 'Project Grants (Cooperative Agreements)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003008',\n        value: 'Project Grants (Discretionary)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003009',\n        value: 'Project Grants (Fellowships)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003010',\n        value:\n          'Project Grants (for administration projects authorized under Section'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003011',\n        value:\n          'Project Grants (for collaborative design of curriculum, production of'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003012',\n        value: 'Project Grants (for specified projects)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003013',\n        value: 'Project Grants (including individual awards)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003014',\n        value: 'Project Grants (including travel grants)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003015',\n        value:\n          'Project Grants (Rehabilitation of existing indoor and outdoor recreat'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003016',\n        value: 'Project Grants (Special)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003017',\n        value: 'Project Grants (to capitalize loan funds)'\n      },\n      {\n        code: 'B',\n        elements: null,\n        description: null,\n        element_id: '0003018',\n        value: 'Project Grants (with Formula Distribution)'\n      }\n    ],\n    description:\n      'Project Grants - The funding, for fixed or known periods, of specific projects or the delivery of specific services or products without liability for damages for failure to perform. Project grants include fellowships, scholarships, research grants, training grants, traineeships, experimental and demonstration grants, evaluation grants, planning grants, technical assistance grants, survey grants, construction grants, and unsolicited contractual agreements.',\n    element_id: '0003',\n    value: 'PROJECT GRANTS'\n  },\n  {\n    code: 'C',\n    elements: [\n      {\n        code: 'C',\n        elements: null,\n        description: null,\n        element_id: '0005001',\n        value: 'Direct Payments for Specified Use'\n      },\n      {\n        code: 'C',\n        elements: null,\n        description: null,\n        element_id: '0005002',\n        value: 'Direct Payments for Specified Use (Cooperative Agreements)'\n      }\n    ],\n    description:\n      'Direct Payments for a Specified Use - Financial assistance provided directly to individuals, private firms, and other private institutions to encourage or subsidize a particular activity by conditioning the receipt of the on a particular performance by the recipient. This does not include solicited contracts for the procurement of goods and services for the Federal government.',\n    element_id: '0005',\n    value: 'DIRECT PAYMENTS FOR A SPECIFIED USE'\n  },\n  {\n    code: 'D',\n    elements: [\n      {\n        code: 'D',\n        elements: null,\n        description: null,\n        element_id: '0007001',\n        value: 'Direct Payments with Unrestricted Use'\n      }\n    ],\n    description:\n      'Direct Payments with Unrestricted Use - Financial assistance provided directly to beneficiaries who satisfy eligibility requirements with no restrictions imposed on the recipient as to how the money is spent. Included are payments under retirement, pension, and compensation programs.',\n    element_id: '0007',\n    value: 'DIRECT PAYMENTS WITH UNRESTRICTED USE'\n  },\n  {\n    code: 'E',\n    elements: [\n      {\n        code: 'E',\n        elements: null,\n        description: null,\n        element_id: '0009001',\n        value: 'Direct Loans'\n      }\n    ],\n    description:\n      'Direct Loans - Financial assistance provided through the lending of Federal monies for a specific period of time, with a reasonable expectation of repayment. Such loans may or may not require the payment of interest.',\n    element_id: '0009',\n    value: 'DIRECT LOANS'\n  },\n  {\n    code: 'F',\n    elements: [\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011001',\n        value: 'Guaranteed/Insured Loans'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011002',\n        value:\n          'Guaranteed/Insured Loans (including Guaranty Participation Loans)'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011003',\n        value:\n          'Guaranteed/Insured Loans (including Immediate Participation Loans)'\n      },\n      {\n        code: 'F',\n        elements: null,\n        description: null,\n        element_id: '0011004',\n        value: 'Loan Guarantees/Grants'\n      }\n    ],\n    description:\n      'Guaranteed/Insured Loans - Programs in which the Federal Government makes an arrangement to indemnify a lender against all or part of all of any defaults by those responsible for the repayment of loans.',\n    element_id: '0011',\n    value: 'GUARANTEED/INSURED LOANS'\n  },\n  {\n    code: 'G',\n    elements: [\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013001',\n        value: 'Insurance'\n      },\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013002',\n        value: 'Insurance (Guaranteed Surety Bonds)'\n      },\n      {\n        code: 'G',\n        elements: null,\n        description: null,\n        element_id: '0013003',\n        value: 'Insurance (Reimbursement)'\n      }\n    ],\n    description:\n      'Insurance - Financial assistance provided to assure reimbursement for losses sustained under specified conditions. Coverage may be provided directly by the Federal Government or through private carriers and may or may not involve the payment of premiums.',\n    element_id: '0013',\n    value: 'INSURANCE'\n  },\n  {\n    code: 'H',\n    elements: [\n      {\n        code: 'H',\n        elements: null,\n        description: null,\n        element_id: '0015001',\n        value: 'Sale, Exchange, or Donation of Property and Goods'\n      }\n    ],\n    description:\n      'Sale, Exchange, or Donation of Property or Goods - Programs that provide for the sale, exchange, or donation of Federal real property, personal property, commodities, and other goods including land, buildings, equipment, food, and drugs. This does not include the loan of, use of, or access to Federal facilities or property.',\n    element_id: '0015',\n    value: 'SALE, EXCHANGE, OR DONATION OF PROPERTY OR GOODS'\n  },\n  {\n    code: 'I',\n    elements: [\n      {\n        code: 'I',\n        elements: null,\n        description: null,\n        element_id: '0017001',\n        value: 'Use of Property, Facilities, and Equipment'\n      }\n    ],\n    description:\n      'Use of Property, Facilities, or Equipment - Programs that provide for the loan of, use of, or access to Federal facilities or property wherein the federally owned facilities or property do not remain in the possession of the recipient of the assistance.',\n    element_id: '0017',\n    value: 'USE OF PROPERTY, FACILITIES, OR EQUIPMENT'\n  },\n  {\n    code: 'J',\n    elements: [\n      {\n        code: 'J',\n        elements: null,\n        description: null,\n        element_id: '0019001',\n        value: 'Provision of Specialized Services'\n      }\n    ],\n    description:\n      'Provision of Specialized Services - Programs that provide Federal personnel to directly perform certain tasks for the benefit of communities or individuals. These services may be performed in conjunction with non-Federal personnel, but they involve more than consultation, advice, or counseling.',\n    element_id: '0019',\n    value: 'PROVISION OF SPECIALIZED SERVICES'\n  },\n  {\n    code: 'K',\n    elements: [\n      {\n        code: 'K',\n        elements: null,\n        description: null,\n        element_id: '0021001',\n        value: 'Advisory Services and Counseling'\n      },\n      {\n        code: 'K',\n        elements: null,\n        description: null,\n        element_id: '0021002',\n        value: 'Advisory Services on Compliance'\n      }\n    ],\n    description:\n      'Advisory Services and Counseling - Programs that provide Federal specialists to consult, advise, or counsel communities or individuals including conferences, workshops, or personal contacts. This may involve the use of published information, but only in a secondary capacity.',\n    element_id: '0021',\n    value: 'ADVISORY SERVICES AND COUNSELING'\n  },\n  {\n    code: 'L',\n    elements: [\n      {\n        code: 'L',\n        elements: null,\n        description: null,\n        element_id: '0023001',\n        value: 'Dissemination of Technical Information'\n      },\n      {\n        code: 'L',\n        elements: null,\n        description: null,\n        element_id: '0023002',\n        value: 'Information'\n      }\n    ],\n    description:\n      'Dissemination of Technical Information - Programs that provide for the publication and distribution of information or data of a specialized technical nature, frequently through clearinghouses or libraries. This does not include conventional public information services designed for general public consumption.',\n    element_id: '0023',\n    value: 'DISSEMINATION OF TECHNICAL INFORMATION'\n  },\n  {\n    code: 'M',\n    elements: [\n      {\n        code: 'M',\n        elements: null,\n        description: null,\n        element_id: '0025001',\n        value: 'Training'\n      }\n    ],\n    description:\n      'Training - Programs that provide instructional activities conducted directly by a Federal agency for individuals not employed by the Federal Government.',\n    element_id: '0025',\n    value: 'TRAINING'\n  },\n  {\n    code: 'N',\n    elements: [\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027020',\n        value: 'Resolution of Disputes'\n      },\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027001',\n        value: 'Investigation of Complaints'\n      },\n      {\n        code: 'N',\n        elements: null,\n        description: null,\n        element_id: '0027002',\n        value: 'Investigation of Complaints (Compliance Reviews)'\n      }\n    ],\n    description:\n      'Investigation of Complaints - Federal administrative agency activities that are initiated in response to requests, either formal or informal, to examine or investigate claims of violations of Federal statutes, policy, or procedure. Such claims must come from outside the Federal Government.',\n    element_id: '0027',\n    value: 'INVESTIGATION OF COMPLAINTS'\n  },\n  {\n    code: 'O',\n    elements: [\n      {\n        code: 'O',\n        elements: null,\n        description: null,\n        element_id: '0029001',\n        value: 'Federal Employment'\n      }\n    ],\n    description:\n      'Federal Employment - Programs that reflect the government-wide resposibilities of the Office of Personnel Management in the recruitment and hiring of Federal civilian agency personnel.',\n    element_id: '0029',\n    value: 'FEDERAL EMPLOYMENT'\n  },\n  {\n    code: 'Z',\n    elements: [\n      {\n        code: 'Z',\n        elements: null,\n        description: null,\n        element_id: '0090001',\n        value: 'Salaries and Expenses'\n      }\n    ],\n    description: null,\n    element_id: '0090',\n    value: 'SALARIES AND EXPENSES'\n  }\n]",
        },
      ],
      'libs/packages/components/src/lib/tabs/tabs.component.ts': [
        {
          name: 'LEFT_ARROW',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/tabs/tabs.component.ts',
          type: 'number',
          defaultValue: '37',
          description:
            '<p>CONSTANTS\nAdding in the constant values for keycodes\nto handle onKeyDown events</p>\n',
        },
        {
          name: 'RIGHT_ARROW',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/tabs/tabs.component.ts',
          type: 'number',
          defaultValue: '39',
        },
      ],
      'libs/packages/components/src/lib/accordion/accordion-base.ts': [
        {
          name: 'SDS_ACCORDION',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/accordion/accordion-base.ts',
          type: '',
          defaultValue: "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
          description:
            '<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n',
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog.ts': [
        {
          name: 'SDS_DIALOG_DATA',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: '',
          defaultValue: "new InjectionToken<any>('SdsDialogData')",
          description:
            '<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n',
        },
        {
          name: 'SDS_DIALOG_DEFAULT_OPTIONS',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: '',
          defaultValue:
            "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
          description:
            '<p>Injection token that can be used to specify default dialog options. </p>\n',
        },
        {
          name: 'SDS_DIALOG_SCROLL_STRATEGY',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: '',
          defaultValue:
            "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
          description:
            '<p>Injection token that determines the scroll handling while the dialog is open. </p>\n',
        },
        {
          name: 'SDS_DIALOG_SCROLL_STRATEGY_PROVIDER',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: 'object',
          defaultValue:
            '{\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}',
        },
        {
          name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: '',
          defaultValue:
            "new InjectionToken<() => ScrollStrategy>('sds-slide-out-scroll-strategy')",
        },
        {
          name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          type: 'object',
          defaultValue:
            '{\n  provide: SDS_SLIDE_OUT_SCROLL_STRATEGY,\n  deps: [Overlay],\n  useFactory: SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY,\n}',
        },
      ],
      'libs/packages/components/src/lib/menu/menu.component.ts': [
        {
          name: 'SDS_MENU_TOKEN',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/menu/menu.component.ts',
          type: '',
          defaultValue:
            "new InjectionToken<SdsMenuInterface>(\n  'SDS_MENU_TOKEN'\n)",
          description:
            '<p>Injection token used to provide the parent menu to menu items. </p>\n',
        },
      ],
      'libs/packages/components/src/lib/selected-result/selected-result.component.ts': [
        {
          name: 'SDS_SelectedResult_VALUE_ACCESSOR',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/selected-result/selected-result.component.ts',
          type: 'any',
          defaultValue:
            '{\n  provide: NG_VALUE_ACCESSOR,\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\n  multi: true\n}',
        },
      ],
      'libs/packages/components/src/lib/truncate-text/truncates-text-base.ts': [
        {
          name: 'SDS_TRUNCATED_TEXT_DATA',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/truncate-text/truncates-text-base.ts',
          type: '',
          defaultValue: "new InjectionToken<any>(\n  'SdsTruncatedTextData'\n)",
          description:
            '<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n',
        },
      ],
      'libs/packages/components/src/lib/menu/menu-animations.ts': [
        {
          name: 'sdsMenuAnimations',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/menu/menu-animations.ts',
          type: 'literal type',
          defaultValue:
            "{\n  transformMenu: trigger('transformMenu', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-menu',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}",
        },
      ],
      'libs/packages/components/src/lib/toast/toast.module.ts': [
        {
          name: 'SdsToastSettings',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/toast/toast.module.ts',
          type: 'object',
          defaultValue:
            "{\n  toastComponent: SdsToastComponent,\n  timeOut: 6000,\n  toastClass: 'sds-toast',\n  positionClass: 'toast-bottom-left',\n}",
        },
      ],
      'libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts': [
        {
          name: 'sdsTruncateTextAnimations',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts',
          type: 'literal type',
          defaultValue:
            "{\n  container: trigger('container', [\n    state(\n      'void',\n      style({\n        opacity: 0,\n        transform: 'scale(0.8)'\n      })\n    ),\n    transition(\n      'void => enter',\n      group([\n        query(\n          '.sds-overlay',\n          animate(\n            '100ms linear',\n            style({\n              opacity: 1\n            })\n          )\n        ),\n        animate(\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\n          style({ transform: 'scale(1)' })\n        )\n      ])\n    ),\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\n  ])\n}",
        },
      ],
      'libs/packages/components/src/lib/accordion/accordion-item.component.ts': [
        {
          name: 'uniqueId',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file:
            'libs/packages/components/src/lib/accordion/accordion-item.component.ts',
          type: 'number',
          defaultValue: '0',
          description: '<p>Counter for generating unique element ids. </p>\n',
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog-ref.ts': [
        {
          name: 'uniqueId',
          ctype: 'miscellaneous',
          subtype: 'variable',
          file: 'libs/packages/components/src/lib/dialog/dialog-ref.ts',
          type: 'number',
          defaultValue: '0',
        },
      ],
    },
    groupedFunctions: {
      'libs/packages/components/src/lib/dialog/dialog.ts': [
        {
          name: '_applyConfigDefaults',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '<p>Applies default options to the dialog config.</p>\n',
          args: [
            {
              name: 'config',
              optional: true,
            },
            {
              name: 'defaultOptions',
              optional: true,
            },
          ],
          returnType: 'SdsDialogConfig',
          jsdoctags: [
            {
              name: {
                pos: 14833,
                end: 14839,
                flags: 0,
                escapedText: 'config',
              },
              optional: true,
              tagName: {
                pos: 14827,
                end: 14832,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Config to be modified.</p>\n',
            },
            {
              name: {
                pos: 14873,
                end: 14887,
                flags: 0,
                escapedText: 'defaultOptions',
              },
              optional: true,
              tagName: {
                pos: 14867,
                end: 14872,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>Default options provided.</p>\n',
            },
            {
              tagName: {
                pos: 14918,
                end: 14925,
                flags: 0,
                escapedText: 'returns',
              },
              comment: '<p>The new configuration object.</p>\n',
            },
          ],
        },
        {
          name: 'SDS_DIALOG_SCROLL_STRATEGY_FACTORY',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '',
          args: [
            {
              name: 'overlay',
            },
          ],
          returnType: 'ScrollStrategy',
          jsdoctags: [
            {
              name: 'overlay',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '',
          args: [
            {
              name: 'overlay',
            },
          ],
          returnType: 'ScrollStrategy',
          jsdoctags: [
            {
              name: 'overlay',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'SDS_SLIDE_OUT_SCROLL_STRATEGY_PROVIDER_FACTORY',
          file: 'libs/packages/components/src/lib/dialog/dialog.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '',
          args: [
            {
              name: 'overlay',
            },
          ],
          returnType: 'ScrollStrategy',
          jsdoctags: [
            {
              name: 'overlay',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/testing/event-objects.ts': [
        {
          name: 'createFakeEvent',
          file: 'libs/packages/components/src/lib/testing/event-objects.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Creates a fake event object with any desired event type. </p>\n',
          args: [
            {
              name: 'type',
            },
            {
              name: 'canBubble',
              type: '',
            },
            {
              name: 'cancelable',
              type: '',
            },
          ],
          jsdoctags: [
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'canBubble',
              type: '',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'cancelable',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'createKeyboardEvent',
          file: 'libs/packages/components/src/lib/testing/event-objects.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '<p>Dispatches a keydown event from an element. </p>\n',
          args: [
            {
              name: 'type',
            },
            {
              name: 'keyCode',
            },
            {
              name: 'target',
              optional: true,
            },
            {
              name: 'key',
              optional: true,
            },
          ],
          jsdoctags: [
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'keyCode',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'target',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'key',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'createMouseEvent',
          file: 'libs/packages/components/src/lib/testing/event-objects.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '',
          args: [
            {
              name: 'type',
            },
            {
              name: 'x',
              type: 'number',
            },
            {
              name: 'y',
              type: 'number',
            },
            {
              name: 'button',
              type: 'number',
            },
          ],
          jsdoctags: [
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'x',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'y',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'button',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'createTouchEvent',
          file: 'libs/packages/components/src/lib/testing/event-objects.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n',
          args: [
            {
              name: 'type',
            },
            {
              name: 'pageX',
              type: 'number',
            },
            {
              name: 'pageY',
              type: 'number',
            },
          ],
          jsdoctags: [
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'pageX',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'pageY',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/popover/debounce.decorator.ts': [
        {
          name: 'debounce',
          file:
            'libs/packages/components/src/lib/popover/debounce.decorator.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Delays calling of a function for <code>delay</code> number of milliseconds.</p>\n',
          args: [
            {
              name: 'delay',
            },
          ],
          returnType: 'MethodDecorator',
          jsdoctags: [
            {
              name: 'delay',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/testing/dispatch-events.ts': [
        {
          name: 'dispatchEvent',
          file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description: '<p>Utility to dispatch any event on a Node. </p>\n',
          args: [
            {
              name: 'node',
            },
            {
              name: 'event',
            },
          ],
          returnType: 'Event',
          jsdoctags: [
            {
              name: 'node',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'event',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'dispatchFakeEvent',
          file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Shorthand to dispatch a fake event on a specified node. </p>\n',
          args: [
            {
              name: 'node',
            },
            {
              name: 'type',
            },
            {
              name: 'canBubble',
              type: 'boolean',
              optional: true,
            },
          ],
          returnType: 'Event',
          jsdoctags: [
            {
              name: 'node',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'canBubble',
              type: 'boolean',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'dispatchKeyboardEvent',
          file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n',
          args: [
            {
              name: 'node',
            },
            {
              name: 'type',
            },
            {
              name: 'keyCode',
            },
            {
              name: 'target',
              optional: true,
            },
          ],
          returnType: 'KeyboardEvent',
          jsdoctags: [
            {
              name: 'node',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'keyCode',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'target',
              optional: true,
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'dispatchMouseEvent',
          file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n',
          args: [
            {
              name: 'node',
            },
            {
              name: 'type',
            },
            {
              name: 'x',
              type: 'number',
            },
            {
              name: 'y',
              type: 'number',
            },
            {
              name: 'event',
              type: '',
            },
          ],
          returnType: 'MouseEvent',
          jsdoctags: [
            {
              name: 'node',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'x',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'y',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'event',
              type: '',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
        {
          name: 'dispatchTouchEvent',
          file: 'libs/packages/components/src/lib/testing/dispatch-events.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n',
          args: [
            {
              name: 'node',
            },
            {
              name: 'type',
            },
            {
              name: 'x',
              type: 'number',
            },
            {
              name: 'y',
              type: 'number',
            },
          ],
          jsdoctags: [
            {
              name: 'node',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'type',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'x',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
            {
              name: 'y',
              type: 'number',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog-content.directives.ts': [
        {
          name: 'getClosestDialog',
          file:
            'libs/packages/components/src/lib/dialog/dialog-content.directives.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n',
          args: [
            {
              name: 'element',
            },
            {
              name: 'openDialogs',
            },
          ],
          jsdoctags: [
            {
              name: {
                pos: 3907,
                end: 3914,
                flags: 0,
                escapedText: 'element',
              },
              tagName: {
                pos: 3901,
                end: 3906,
                flags: 0,
                escapedText: 'param',
              },
              comment:
                '<p>Element relative to which to look for a dialog.</p>\n',
            },
            {
              name: {
                pos: 3973,
                end: 3984,
                flags: 0,
                escapedText: 'openDialogs',
              },
              tagName: {
                pos: 3967,
                end: 3972,
                flags: 0,
                escapedText: 'param',
              },
              comment: '<p>References to the currently-open dialogs.</p>\n',
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/testing/element-focus.ts': [
        {
          name: 'patchElementFocus',
          file: 'libs/packages/components/src/lib/testing/element-focus.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n',
          args: [
            {
              name: 'element',
            },
          ],
          jsdoctags: [
            {
              name: 'element',
              tagName: {
                text: 'param',
              },
            },
          ],
        },
      ],
      'libs/packages/components/src/lib/dialog/dialog-container.component.ts': [
        {
          name: 'throwSdsDialogContentAlreadyAttachedError',
          file:
            'libs/packages/components/src/lib/dialog/dialog-container.component.ts',
          ctype: 'miscellaneous',
          subtype: 'function',
          description:
            '<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n',
          args: [],
        },
      ],
    },
    groupedEnumerations: {
      'libs/packages/components/src/lib/key-helper/key-helper.ts': [
        {
          name: 'KEYS',
          childs: [
            {
              name: 'ENTER',
              value: 'enter',
            },
            {
              name: 'ALT',
              value: 'alt',
            },
            {
              name: 'UP',
              value: 'up',
            },
            {
              name: 'DOWN',
              value: 'down',
            },
            {
              name: 'LEFT',
              value: 'left',
            },
            {
              name: 'RIGHT',
              value: 'right',
            },
            {
              name: 'TAB',
              value: 'tab',
            },
            {
              name: 'ESC',
              value: 'esc',
            },
            {
              name: 'SPACE',
              value: 'space',
            },
            {
              name: 'SHIFT',
              value: 'shift',
            },
            {
              name: 'BACKSPACE',
              value: 'backspace',
            },
            {
              name: 'ONE',
              value: '1',
            },
            {
              name: 'TWO',
              value: '2',
            },
            {
              name: 'THREE',
              value: '3',
            },
            {
              name: 'FOUR',
              value: '4',
            },
            {
              name: 'FIVE',
              value: '5',
            },
            {
              name: 'SIX',
              value: '6',
            },
            {
              name: 'SEVEN',
              value: '7',
            },
            {
              name: 'EIGHT',
              value: '8',
            },
            {
              name: 'NINE',
              value: '9',
            },
            {
              name: 'ZERO',
              value: '0',
            },
            {
              name: 'DELETE',
              value: 'delete',
            },
          ],
          ctype: 'miscellaneous',
          subtype: 'enum',
          description: '',
          file: 'libs/packages/components/src/lib/key-helper/key-helper.ts',
        },
      ],
      'libs/packages/components/src/lib/common-navigation/common-navigation-model.ts': [
        {
          name: 'NavigationMode',
          childs: [
            {
              name: 'INTERNAL',
            },
            {
              name: 'EXTERNAL',
            },
            {
              name: 'EVENT',
            },
            {
              name: 'LABEL',
            },
          ],
          ctype: 'miscellaneous',
          subtype: 'enum',
          description: '',
          file:
            'libs/packages/components/src/lib/common-navigation/common-navigation-model.ts',
        },
      ],
      'libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts': [
        {
          name: 'SelectionMode',
          childs: [
            {
              name: 'SINGLE',
            },
            {
              name: 'MULTIPLE',
            },
          ],
          ctype: 'miscellaneous',
          subtype: 'enum',
          description: '',
          file:
            'libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts',
        },
      ],
    },
    groupedTypeAliases: {
      'libs/packages/components/src/lib/dialog/dialog-config.ts': [
        {
          name: 'DialogRole',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"dialog" | "alertdialog"',
          file: 'libs/packages/components/src/lib/dialog/dialog-config.ts',
          description: '<p>Valid ARIA roles for a dialog element. </p>\n',
          kind: 168,
        },
      ],
      'libs/packages/components/src/lib/menu/menu.component.ts': [
        {
          name: 'MenuPositionX',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"before" | "after"',
          file: 'libs/packages/components/src/lib/menu/menu.component.ts',
          description: '<p>Menu Positions </p>\n',
          kind: 168,
        },
        {
          name: 'MenuPositionY',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"above" | "below"',
          file: 'libs/packages/components/src/lib/menu/menu.component.ts',
          description: '',
          kind: 168,
        },
        {
          name: 'MenuSizes',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '',
          file: 'libs/packages/components/src/lib/menu/menu.component.ts',
          description: '<p>Menu available sizes </p>\n',
          kind: 177,
        },
      ],
      'libs/packages/components/src/lib/pagination/pagination.component.ts': [
        {
          name: 'PaginationDisplayMode',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"default" | "results"',
          file:
            'libs/packages/components/src/lib/pagination/pagination.component.ts',
          description: '<p>pagination display modes. </p>\n',
          kind: 168,
        },
      ],
      'libs/packages/components/src/lib/accordion/accordion-base.ts': [
        {
          name: 'SdsAccordionDisplayMode',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"default" | "basic"',
          file: 'libs/packages/components/src/lib/accordion/accordion-base.ts',
          description: '<p>Accordion&#39;s display modes. </p>\n',
          kind: 168,
        },
      ],
      'libs/packages/components/src/lib/accordion/accordion-item.component.ts': [
        {
          name: 'SdsAccordionItemState',
          ctype: 'miscellaneous',
          subtype: 'typealias',
          rawtype: '"expanded" | "collapsed"',
          file:
            'libs/packages/components/src/lib/accordion/accordion-item.component.ts',
          description: '<p>Accordion Item&#39;s states. </p>\n',
          kind: 168,
        },
      ],
    },
  },
};

export default COMPONENTS;
