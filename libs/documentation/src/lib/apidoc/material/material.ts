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
    "directives": [
        {
            "name": "SdsAccordionContentDirective",
            "id": "directive-SdsAccordionContentDirective-5da62df649a2bfdf3d788ffa9a4950fa",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate', { static: true }) itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate', { static: true }) itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion, { static: true }) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "selector": "sds-accordion-content",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsAccordionTitleDirective",
            "id": "directive-SdsAccordionTitleDirective-5da62df649a2bfdf3d788ffa9a4950fa",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate', { static: true }) itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate', { static: true }) itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion, { static: true }) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "selector": "sds-accordion-title",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        }
    ],
    "components": [
        {
            "name": "SdsAccordionComponent",
            "id": "component-SdsAccordionComponent-5da62df649a2bfdf3d788ffa9a4950fa",
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
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "'flat'",
                    "line": 83
                },
                {
                    "name": "multi",
                    "defaultValue": "false",
                    "line": 79
                }
            ],
            "outputsClass": [
                {
                    "name": "multiChange",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 81,
                    "type": "EventEmitter<boolean>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "accordion",
                    "type": "MatAccordion",
                    "optional": false,
                    "description": "",
                    "line": 75,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatAccordion, {static: true}"
                        }
                    ]
                },
                {
                    "name": "accordionItems",
                    "type": "QueryList<SdsAccordionItemComponent>",
                    "optional": false,
                    "description": "",
                    "line": 77,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsAccordionItemComponent"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "closeAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 91,
                    "description": "<p>Closes all accordion items. </p>\n"
                },
                {
                    "name": "openAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 86,
                    "description": "<p>Opens all accordion items. </p>\n"
                },
                {
                    "name": "toggleMulti",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 96,
                    "description": "<p>Toggles the multi state of the accordion. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate', { static: true }) itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate', { static: true }) itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion, { static: true }) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "@import \"~@gsa-sam/sam-styles/src/stylesheets/theme/_styles\";\n@import \"~uswds/src/stylesheets/packages/_required\";\n\n\n\n\n::ng-deep {\n  sds-accordion-next {\n    sds-accordion-title {\n      @include u-font('sans', 'xs');\n      @include u-text('semibold');\n    }\n    .mat-accordion {\n      .mat-expansion-panel {\n        @include u-border('base-light');\n        @include u-border-top(0);\n        @include u-border-right('1px');\n        @include u-border-bottom('1px');\n        @include u-border-left('1px');\n\n        &:first-of-type {\n          @include u-border-top('1px');\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n\n        &:last-of-type {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n\n        .mat-expanded {\n          sds-accordion-title {\n            @include u-text('secondary-dark');\n          }\n        }\n      }\n    }\n  }\n}\n\n.sds-expansion-indicator {\n  position: relative;\n\n  &::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466);\n    background-position: center;\n    background-size: 54% 1px;\n    background-repeat: no-repeat;\n  }\n  &::before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466), #e2e2e2;\n    background-position: center;\n    background-size: 1px 54%;\n    background-repeat: no-repeat;\n    border-radius: 50%;\n  }\n\n  &.sds-expansion-indicator--expanded::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466);\n    background-position: center;\n    background-size: 54% 1px;\n    background-repeat: no-repeat;\n  }\n\n  &.sds-expansion-indicator--expanded::before {\n    content: none;\n  }\n}\n\n.mat-expansion-panel-header[aria-disabled=true] .sds-expansion-indicator {\n  opacity: 0.26;\n}\n\n// Material overrides\n\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  @include u-bg('accent-cool-light')\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n}\n\nmat-panel-title {\n  line-height:25px;\n}\n",
                    "styleUrl": "./accordion.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<mat-accordion [displayMode]=\"displayMode\" [multi]=\"multi\">\n  <ng-container *ngFor=\"let accordionItem of accordionItems\">\n      <mat-expansion-panel [(expanded)]=\"accordionItem.expanded\" [disabled]=\"accordionItem.disabled\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <ng-container *ngTemplateOutlet=\"accordionItem.itemTitleTemplate\"></ng-container>\n          </mat-panel-title>\n          <span class=\"sds-expansion-indicator\" [ngClass]=\"{'sds-expansion-indicator--expanded' : accordionItem.expanded}\"></span>\n        </mat-expansion-panel-header>\n        <ng-container *ngTemplateOutlet=\"accordionItem.itemContentTemplate\"></ng-container>\n      </mat-expansion-panel>\n  </ng-container>\n</mat-accordion>\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-5da62df649a2bfdf3d788ffa9a4950fa",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-item",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-template #itemTitleTemplate>\n  <ng-content #title select=\"sds-accordion-title\"></ng-content>\n</ng-template>\n\n<ng-template #itemContentTemplate>\n  <ng-content #content select=\"sds-accordion-content\"></ng-content>\n</ng-template>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "defaultValue": "false",
                    "line": 41
                },
                {
                    "name": "expanded",
                    "defaultValue": "false",
                    "line": 39
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "itemContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'itemContentTemplate', {static: true}"
                        }
                    ]
                },
                {
                    "name": "itemTitleTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'itemTitleTemplate', {static: true}"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "close",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "description": "<p>Sets the expanded state of the expansion panel to false. </p>\n"
                },
                {
                    "name": "open",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Sets the expanded state of the expansion panel to true. </p>\n"
                },
                {
                    "name": "toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44,
                    "description": "<p>Toggles the expanded state of the expansion panel. </p>\n"
                },
                {
                    "name": "toggleDisabled",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 59,
                    "description": "<p>Toggles the disabled state of the expansion panel. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate', { static: true }) itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate', { static: true }) itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion, { static: true }) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-198179da52863fd7981d8b9712e5b0ae",
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
                    "line": 32,
                    "type": "SdsTableColumnSettings[]"
                },
                {
                    "name": "data",
                    "description": "<p>Data for table</p>\n",
                    "line": 26
                },
                {
                    "name": "detailRow",
                    "description": "<p>template outlet for expandable detail\nall properties for the selected row will be available for use in the template after set using let-{new property name}</p>\n",
                    "line": 38,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "settings",
                    "description": "<p>table settings\n{@link SdsTableSettings}</p>\n",
                    "line": 44,
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
                    "line": 59
                },
                {
                    "name": "dataSource",
                    "type": "MatTableDataSource<any>",
                    "optional": false,
                    "description": "<p>table MatTableDataSource data source based on Input data</p>\n",
                    "line": 49
                },
                {
                    "name": "expandedRow",
                    "defaultValue": "null",
                    "type": "any | null",
                    "optional": false,
                    "description": "<p>currently expanded row</p>\n",
                    "line": 54
                },
                {
                    "name": "sort",
                    "type": "MatSort",
                    "optional": false,
                    "description": "",
                    "line": 21,
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
                    "line": 63
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
                    "line": 86,
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
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  OnInit,\n  ViewChild\n} from '@angular/core';\nimport { MatTableDataSource } from '@angular/material/table';\nimport { MatSort } from '@angular/material/sort';\n\nimport { SdsTableColumnSettings } from './models/table-column-settings.model';\nimport { SdsTableSettings } from './models/table-settings.model';\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss']\n})\nexport class SdsTableComponent implements OnInit {\n\n  @ViewChild(MatSort, { static: true }) sort: MatSort;\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * columns to display in header\n   * {@link SdsTableColumnSettings}\n   */\n  @Input() columns: SdsTableColumnSettings[];\n\n  /**\n   * template outlet for expandable detail\n   * all properties for the selected row will be available for use in the template after set using let-{new property name}\n   */\n  @Input() detailRow?: TemplateRef<any>;\n\n  /**\n   * table settings\n   * {@link SdsTableSettings}\n  */\n  @Input() settings?: SdsTableSettings;\n\n  /**\n   * table MatTableDataSource data source based on Input data\n   */\n  dataSource: MatTableDataSource<any>;\n\n  /**\n   * currently expanded row\n   */\n  expandedRow: any | null = null;\n\n  /**\n   * column ids displayed\n   */\n  columnIds: string[] = [];\n\n  constructor() {}\n\n  ngOnInit() {\n    // convert data to MatTableDataSource\n    this.dataSource = new MatTableDataSource(this.data);\n\n    // enable sort if set in settings\n    if (this.settings && this.settings.sort) {\n      this.dataSource.sort = this.sort;\n    } else {\n      this.sort.disabled = true;\n    }\n\n    // get column primary keys\n    this.columns.forEach(col => {\n      this.columnIds.push(col.primaryKey);\n    });\n\n    // add column if expandable\n    if (this.detailRow) {\n      this.columnIds.push('sdsExpandableRow');\n    }\n  }\n\n  // toggle clicked row's detail row\n  toggleRowExpansion(row: any) {\n    this.expandedRow = this.expandedRow === row ? null : row;\n  }\n}\n",
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
                "line": 59
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-table__container\" [ngClass]=\"{'sds-table__container--borderless': settings?.borderless}\">\n    <table mat-table [dataSource]=\"dataSource\" matSort [multiTemplateDataRows]=detailRow\n      [ngClass]=\"{'sds-table--expansion': detailRow}\" class=\"sds-table\">\n\n    <!-- Columns -->\n    <ng-container matColumnDef=\"{{col.primaryKey}}\" *ngFor=\"let col of columns\" [sticky]=col.sticky>\n\n      <!-- table header cells -->\n      <ng-container *ngIf=\"settings?.sort\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header scope=\"col\" [ngClass]=\"{'sds-table__heading--sticky': col.sticky}\">\n          {{ col.header  || (col.primaryKey | titlecase)}}\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!settings || !settings.sort\">\n        <th mat-header-cell *matHeaderCellDef scope=\"col\" [ngClass]=\"{'sds-table__heading--sticky': col.sticky}\">\n          {{ col.header  || (col.primaryKey | titlecase)}}\n        </th>\n      </ng-container>\n\n      <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{'sds-table__cell--sticky': col.sticky}\">\n        {{ row[col.primaryKey] }}\n      </td>\n    </ng-container>\n\n    <!-- column for expandable icon -->\n    <ng-container matColumnDef=\"sdsExpandableRow\" *ngIf=\"detailRow\">\n      <th mat-header-cell *matHeaderCellDef scope=\"col\" class=\"sds-table__heading--detail\">\n        <span class=\"sr-only\">More Information</span>\n      </th>\n\n      <td mat-cell *matCellDef=\"let row\">\n        <button class=\"sds-button usa-button--unstyled\" tabindex=\"0\" aria-label=\"expand row\">\n          <fa-icon *ngIf=\"row !== expandedRow\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n          <fa-icon *ngIf=\"row === expandedRow\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- Expandable detail row -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let row;\" [attr.colspan]=\"columnIds.length\" class=\"sds-table__cell--detail\">\n        <!-- display detailRow templateRef with all row data -->\n        <ng-container *ngTemplateOutlet=\"detailRow; context: row\"></ng-container>\n      </td>\n    </ng-container>\n\n    <!-- Header and row declarations -->\n    <tr mat-header-row *matHeaderRowDef=\"columnIds; sticky: settings?.stickyHeader\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: columnIds\" class=\"sds-table__row\"\n      [ngClass]=\"{'sds-table__row--expanded': row === expandedRow}\" (click)=\"toggleRowExpansion(row)\"></tr>\n\n    <!-- expansion row declaration -->\n    <ng-container *ngIf=\"detailRow\">\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n  </table>\n</div>\n"
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
                        },
                        {
                            "name": "SdsAccordionContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionTitleDirective"
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
                        },
                        {
                            "name": "SdsAccordionContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionTitleDirective"
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