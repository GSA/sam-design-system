"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[4488],{"./libs/documentation/src/lib/storybook/button-group/button-group.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Configurable:()=>Configurable,Introduction:()=>Introduction,Modes:()=>Modes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_group_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),button_toggle=__webpack_require__("./node_modules/@angular/material/fesm2022/button-toggle.mjs"),src=__webpack_require__("./libs/packages/sam-material-extensions/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonGroupCheckedComponent=class ButtonGroupCheckedComponent{};ButtonGroupCheckedComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<sds-button-group [mode]="\'radio\'" class="sds-button-group">\n  <sds-button-group-option value="reports" [aria-label]="\'reports\'">\n    Reports\n  </sds-button-group-option>\n  <sds-button-group-option value="Radio Mode" [aria-label]="\'Radio Mode\'" [checked]="true">\n    Checked By Default\n  </sds-button-group-option>\n  <sds-button-group-option value="history" [aria-label]="\'history\'">\n    History\n  </sds-button-group-option>\n</sds-button-group>\n',selector:"sds-button-group-checked"})],ButtonGroupCheckedComponent);let ButtonGroupCheckedModule=class ButtonGroupCheckedModule{};ButtonGroupCheckedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.uj],declarations:[ButtonGroupCheckedComponent],exports:[ButtonGroupCheckedComponent],bootstrap:[ButtonGroupCheckedComponent]})],ButtonGroupCheckedModule);let ButtonGroupIntroductionComponent=class ButtonGroupIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};ButtonGroupIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-button-group-introduction",template:"<p>\n  Button groups are toggles styled as buttons. They have the ability to function as radio buttons or checkboxes\n  depending on their configuration.\n</p>\n"})],ButtonGroupIntroductionComponent);let ButtonGroupIntroductionModule=class ButtonGroupIntroductionModule{};ButtonGroupIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ButtonGroupIntroductionComponent],exports:[ButtonGroupIntroductionComponent],bootstrap:[ButtonGroupIntroductionComponent]})],ButtonGroupIntroductionModule);let ButtonGroupModesComponent=class ButtonGroupModesComponent{};ButtonGroupModesComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<sds-button-group [mode]="\'radio\'" class="sds-button-group">\n  <sds-button-group-option value="reports" [aria-label]="\'reports\'">\n    Reports\n  </sds-button-group-option>\n  <sds-button-group-option value="Radio Mode" [aria-label]="\'Radio Mode\'">\n    Radio Mode\n  </sds-button-group-option>\n  <sds-button-group-option value="history" [aria-label]="\'history\'">\n    History\n  </sds-button-group-option>\n</sds-button-group>\n\n<sds-button-group [mode]="\'checkbox\'" class="sds-button-group">\n  <sds-button-group-option value="reports" [aria-label]="\'reports\'">\n    Reports\n  </sds-button-group-option>\n  <sds-button-group-option value="Checkbox Mode" [aria-label]="\'Checkbox Mode\'">\n    Checkbox Mode\n  </sds-button-group-option>\n  <sds-button-group-option value="history" [aria-label]="\'history\'">\n    History\n  </sds-button-group-option>\n</sds-button-group>\n',selector:"sds-button-group-modes"})],ButtonGroupModesComponent);let ButtonGroupModesModule=class ButtonGroupModesModule{};ButtonGroupModesModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.uj],declarations:[ButtonGroupModesComponent],exports:[ButtonGroupModesComponent],bootstrap:[ButtonGroupModesComponent]})],ButtonGroupModesModule);const disable={table:{disable:!0}},button_group_stories={title:"Components/Button-Group",component:src.nz,subcomponents:{SdsButtonGroupOptionComponent:src.Gr},decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,button_toggle.Vg,src.uj,ButtonGroupModesModule,ButtonGroupCheckedModule,ButtonGroupIntroductionModule]})],argTypes:{buttonGroupChanged:{action:"buttonGroupChanged",table:{disable:!0}},change:disable,buttonOptions:disable,classesToApply:disable}},Configurable=args=>({template:'\n  <sds-button-group class="sds-button-group" [ngClass]="[extraClasses]" [mode]="mode" (change)="buttonGroupChanged({source: \'originalEmitter: MatButtonToggle\', value: $event.value})">\n    <sds-button-group-option *ngFor="let optionText of optionTexts" value="{{optionText}}">{{optionText}}</sds-button-group-option>\n  </sds-button-group>\n  ',props:{...args}});Configurable.args={extraClasses:"sds-button-group--secondary",optionTexts:["Reports","Subscriptions","History"],mode:"checkbox"},Configurable.parameters={sdsCodePreview:{disable:!0}};const Modes=args=>({template:"<sds-button-group-modes></sds-button-group-modes>",props:args});Modes.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/button-group/button-group-modes","ButtonGroupModesModule","sds-button-group-modes"),stackblitzLink:(0,sandbox_utils.ft)("button-group","modes")};const Checked=args=>({template:"<sds-button-group-checked></sds-button-group-checked>",props:{...args}});Checked.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/button-group/button-group-checked","ButtonGroupBasicModule","sds-button-group-checked"),stackblitzLink:(0,sandbox_utils.ft)("button-group","checked")};const Introduction=args=>({template:"<sds-button-group-introduction></sds-button-group-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n  <sds-button-group class="sds-button-group" [ngClass]="[extraClasses]" [mode]="mode" (change)="buttonGroupChanged({source: \'originalEmitter: MatButtonToggle\', value: $event.value})">\n    <sds-button-group-option *ngFor="let optionText of optionTexts" value="{{optionText}}">{{optionText}}</sds-button-group-option>\n  </sds-button-group>\n  `,\n  props: {\n    ...args\n  }\n})',...Configurable.parameters?.docs?.source}}},Modes.parameters={...Modes.parameters,docs:{...Modes.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-button-group-modes></sds-button-group-modes>`,\n  props: args\n})",...Modes.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-button-group-checked></sds-button-group-checked>`,\n  props: {\n    ...args\n  }\n})",...Checked.parameters?.docs?.source}}},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-button-group-introduction></sds-button-group-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}};const __namedExportsOrder=["Configurable","Modes","Checked","Introduction"]}}]);