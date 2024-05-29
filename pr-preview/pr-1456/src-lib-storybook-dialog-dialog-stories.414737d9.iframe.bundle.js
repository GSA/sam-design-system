(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[3212],{"./libs/documentation/src/lib/storybook/dialog/dialog.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertType:()=>AlertType,Configurable:()=>Configurable,DataReturn:()=>DataReturn,Introduction:()=>Introduction,Nested:()=>Nested,Policy:()=>Policy,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dialog_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var src=__webpack_require__("./libs/packages/components/src/index.ts");let DialogAlertTypeTemplate=class DialogAlertTypeTemplate{constructor(dialogRef,data){this.dialogRef=dialogRef,this.data=data}onNoClick(){this.dialogRef.close()}static#_=this.ctorParameters=()=>[{type:src.q4},{type:void 0,decorators:[{type:core.Inject,args:[src.rR]}]}]};DialogAlertTypeTemplate=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-alert-type-template",template:'<div sds-dialog-title>Open Link?</div>\n<div sds-dialog-content>Unknown links can direct you to malicious webpages.</div>\n<div sds-dialog-actions>\n  <button class="usa-button bg-base-lighter" sds-dialog-close>Cancel</button>\n  <button cdkFocusInitial class="usa-button" sds-dialog-close>Continue</button>\n</div>\n'})],DialogAlertTypeTemplate);let DialogAlertTypeComponent=class DialogAlertTypeComponent{constructor(dialog){this.dialog=dialog}openWarningDialog(){this.dialog.open(DialogAlertTypeTemplate,{width:"medium",alert:"warning"})}openInfoDialog(){this.dialog.open(DialogAlertTypeTemplate,{width:"medium",alert:"info"})}openSuccessDialog(){this.dialog.open(DialogAlertTypeTemplate,{width:"medium",alert:"success"})}openErrorDialog(){this.dialog.open(DialogAlertTypeTemplate,{width:"medium",alert:"error"})}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogAlertTypeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-alert-type",template:'<div class="margin-bottom-105">\n  <button class="usa-button margin-top-2" (click)="openErrorDialog()">\n    Open Error Dialog\n  </button>\n  <button class="usa-button margin-top-2" (click)="openWarningDialog()">\n    Open Warning Dialog\n  </button>\n  <button class="usa-button margin-top-2" (click)="openInfoDialog()">\n    Open Info Dialog\n  </button>\n  <button class="usa-button margin-top-2" (click)="openSuccessDialog()">\n    Open Success Dialog\n  </button>\n</div>\n'})],DialogAlertTypeComponent);var fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),sam_formly_src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs");let DialogAlertTypeModule=class DialogAlertTypeModule{};DialogAlertTypeModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,sam_formly_src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot(),src.TU],declarations:[DialogAlertTypeComponent,DialogAlertTypeTemplate],exports:[DialogAlertTypeComponent],bootstrap:[DialogAlertTypeComponent]})],DialogAlertTypeModule);let DialogWidthTypeTemplate=class DialogWidthTypeTemplate{constructor(dialogRef,data){this.dialogRef=dialogRef,this.data=data}onNoClick(){this.dialogRef.close()}static#_=this.ctorParameters=()=>[{type:src.q4},{type:String,decorators:[{type:core.Inject,args:[src.rR]}]}]};DialogWidthTypeTemplate=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-width-type-template",template:'<p sds-dialog-title>Sample Dialog</p>\n<p sds-dialog-content>\n  This dialog is a {{ data }} width dialog. Here is some long text to fill in at least the first line or two of text.\n</p>\n<div sds-dialog-actions>\n  <button cdkFocusInitial class="usa-button" sds-dialog-close>Close</button>\n</div>\n'})],DialogWidthTypeTemplate);let DialogWidthComponent=class DialogWidthComponent{constructor(dialog){this.dialog=dialog}openSmallDialog(){this.dialog.open(DialogWidthTypeTemplate,{width:"small",data:"small"})}openMediumDialog(){this.dialog.open(DialogWidthTypeTemplate,{width:"medium",data:"medium"})}openLargeDialog(){this.dialog.open(DialogWidthTypeTemplate,{width:"large",data:"large"})}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogWidthComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-width",template:'<button class="usa-button margin-top-2" (click)="openSmallDialog()">\n  Open Small Dialog\n</button>\n<button class="usa-button margin-top-2" (click)="openMediumDialog()">\n  Open Medium Dialog\n</button>\n<button class="usa-button margin-top-2" (click)="openLargeDialog()">\n  Open Large Dialog\n</button>\n'})],DialogWidthComponent);let DialogWidthModule=class DialogWidthModule{};DialogWidthModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[DialogWidthComponent,DialogWidthTypeTemplate],bootstrap:[DialogWidthComponent],exports:[DialogWidthComponent]})],DialogWidthModule);let SecondNestedDialogComponent=class SecondNestedDialogComponent{};SecondNestedDialogComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-width",template:'<p sds-dialog-title>Add Owner</p>\n<div sds-dialog-content class="content">\n  <label class="usa-label" for="name">Name</label>\n  <input class="usa-input" type="text" id="name" />\n</div>\n<div sds-dialog-actions>\n  <button class="usa-button usa-button--primary margin-top-4" sds-dialog-close>Add Owner</button>\n</div>\n'})],SecondNestedDialogComponent);let DialogNestedComponent=class DialogNestedComponent{constructor(dialog){this.dialog=dialog}openDialog(){this.dialog.open(SecondNestedDialogComponent,{width:"small"})}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogNestedComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-nested-template",template:'<p sds-dialog-title>Add Entity</p>\n<div sds-dialog-content class="content">\n  <label class="usa-label" for="name">Name</label>\n  <input class="usa-input" type="text" id="name" />\n\n  <label class="usa-label" for="address">Address</label>\n  <input class="usa-input" type="text" id="address" />\n</div>\n<div sds-dialog-actions>\n  <button class="usa-button bg-base-lighter" (click)="openDialog()">Add Owner</button>\n  <button class="usa-button usa-button--primary" sds-dialog-close>Submit</button>\n</div>\n'})],DialogNestedComponent);let DialogNestedBaseComponent=class DialogNestedBaseComponent{constructor(dialog){this.dialog=dialog}openDialog(){this.dialog.open(DialogNestedComponent,{width:"large"})}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogNestedBaseComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-nested",template:'<button class="usa-button" (click)="openDialog()">Add Entity</button>\n'})],DialogNestedBaseComponent);let DialogNestedModule=class DialogNestedModule{};DialogNestedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[DialogNestedBaseComponent,DialogNestedComponent,SecondNestedDialogComponent],exports:[DialogNestedBaseComponent],bootstrap:[DialogNestedBaseComponent]})],DialogNestedModule);var dialog_template_component=__webpack_require__("!!./node_modules/raw-loader/dist/cjs.js!./storybook/dialog/dialog-data-return/dialog-template.component.scss"),dialog_template_component_default=__webpack_require__.n(dialog_template_component);let DialogDataReturnTemplateComponent=class DialogDataReturnTemplateComponent{constructor(dialog){this.dialog=dialog,this.returnData=""}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogDataReturnTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-data-return-template",template:'<p sds-dialog-title>Return Data</p>\n<div sds-dialog-content class="content">\n  <p>Enter some data to return to the main component.</p>\n  <input class="usa-input" type="text" [(ngModel)]="returnData" />\n</div>\n<div sds-dialog-actions>\n  <button class="usa-button" [sds-dialog-close]="returnData">Return Data</button>\n</div>\n',styles:[dialog_template_component_default()]})],DialogDataReturnTemplateComponent);let DialogDataReturnComponent=class DialogDataReturnComponent{constructor(dialog){this.dialog=dialog}openDialog(){this.dialog.open(DialogDataReturnTemplateComponent,{width:"medium",disableClose:!0,displayCloseBtn:!1}).afterClosed().subscribe((result=>{alert(`Returned ${result}`)}))}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogDataReturnComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-data-return",template:'<button class="usa-button" (click)="openDialog()">Open Dialog</button>\n'})],DialogDataReturnComponent);let DialogDataReturnModule=class DialogDataReturnModule{};DialogDataReturnModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU,fesm2022_forms.YN],declarations:[DialogDataReturnComponent,DialogDataReturnTemplateComponent],bootstrap:[DialogDataReturnComponent],exports:[DialogDataReturnComponent]})],DialogDataReturnModule);var sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts");let DialogIntroductionComponent=class DialogIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};DialogIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-introduction",template:"<p>\n  Dialog is a component that allows additional focus to be drawn to a specific section where infromation or forms can be\n  displayed.\n</p>\n"})],DialogIntroductionComponent);let DialogIntroductionModule=class DialogIntroductionModule{};DialogIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[DialogIntroductionComponent],exports:[DialogIntroductionComponent],bootstrap:[DialogIntroductionComponent]})],DialogIntroductionModule);let DialogConfigurableTemplateComponent=class DialogConfigurableTemplateComponent{};DialogConfigurableTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-configurable-template",template:'<p sds-dialog-title>Sample Dialog</p>\n<p sds-dialog-content>This is an example dialog with content</p>\n<div sds-dialog-actions>\n  <button class="usa-button" sds-dialog-close>Close</button>\n</div>\n'})],DialogConfigurableTemplateComponent);let DialogConfigurableComponent=class DialogConfigurableComponent{constructor(dialog){this.dialog=dialog}openDialog(){this.dialog.open(DialogConfigurableTemplateComponent,{width:this.width,alert:this.alert})}static#_=this.ctorParameters=()=>[{type:src.el}];static#_2=this.propDecorators={alert:[{type:core.Input}],width:[{type:core.Input}]}};DialogConfigurableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-configurable",template:'<button class="usa-button" (click)="openDialog()">Open Dialog</button>\n'})],DialogConfigurableComponent);let DialogConfigurableModule=class DialogConfigurableModule{};DialogConfigurableModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[DialogConfigurableComponent,DialogConfigurableTemplateComponent],exports:[DialogConfigurableComponent],bootstrap:[DialogConfigurableComponent]})],DialogConfigurableModule);let DialogTemplateComponent=class DialogTemplateComponent{constructor(){}static#_=this.ctorParameters=()=>[]};DialogTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-dialog-template",template:'<div class="sds-dialog-section--centered margin-y-205">\n  <img src="assets/img/logo-sam.svg" width="170" />\n</div>\n<div sds-dialog-title class="sds-dialog-section--centered text-uppercase">\n  Policy Dialog\n</div>\n<div sds-dialog-subtitle class="sds-dialog-section--centered margin-top-neg-205">\n  You have requested access to <br />\n  It is important to read and adhere to the terms of use.\n</div>\n\n<div sds-dialog-content>\n  <div class="padding-x-9 padding-y-2 font-sans-2xs line-height-sans-6">\n    <div>\n      You are allowed to use the Federal Hierarchy FOUO API for internal, U.S. Government business purposes. You are not\n      allowed to display or disseminate outside the U.S. Government any values received in a Federal Hierarchy FOUO API\n      response unless that value is directly associated with a Federal award record\n    </div>\n    <div>\n      For financial assistance awards only, you are allowed to use the awarding and funding Activity Address Codes\n      (AACs) submitted in association with a financial assistance award to derive the respective Office Name, Sub-Tier\n      Agency Code, Sub-Tier Agency Name, Department/Independent Agency Code, and Department/Independent Agency Name from\n      the Federal Hierarchy FOUO API. You may publicly display and disseminate the awarding and funding AACs, and the\n      five specified Federal Hierarchy FOUO API-derived values from those AACs, in connection with the financial\n      assistance awards.\n    </div>\n  </div>\n</div>\n<div sds-dialog-actions class="sds-dialog-section--centered">\n  <button class="usa-button usa-button--base" sds-dialog-close>Back</button>\n  <button cdkFocusInitial class="usa-button" sds-dialog-close>Continue</button>\n</div>\n'})],DialogTemplateComponent);let DialogPolicyComponent=class DialogPolicyComponent{constructor(dialog){this.dialog=dialog}open(){this.dialog.open(DialogTemplateComponent,{})}static#_=this.ctorParameters=()=>[{type:src.el}]};DialogPolicyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-dialog-policy",template:'<button class="usa-button" (click)="open()">Open Policy Dialog</button>\n'})],DialogPolicyComponent);let DialogPolicyModule=class DialogPolicyModule{};DialogPolicyModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[DialogPolicyComponent,DialogTemplateComponent],exports:[DialogPolicyComponent],bootstrap:[DialogPolicyComponent]})],DialogPolicyModule);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const dialog_stories={title:"Components/Dialog",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,DialogAlertTypeModule,DialogWidthModule,DialogNestedModule,DialogDataReturnModule,DialogIntroductionModule,DialogConfigurableModule,DialogPolicyModule]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]})],argTypes:{width:{control:"select",options:["small","medium","large"]},alert:{control:"select",options:["","error","warning","info","success"]}}},AlertType=args=>({template:"<sds-dialog-alert-type></sds-dialog-alert-type>",props:args});AlertType.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/dialog/dialog-alert-type","DialogAlertTypeModule","sds-dialog-alert-type",[(0,sandbox_utils.Pg)("storybook/dialog/dialog-alert-type/dialog-template.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-alert-type/dialog-template.component.html","html",!1)]),stackblitzLink:(0,sandbox_utils.ft)("dialog","alert-type")};const Nested=args=>({template:"<sds-dialog-nested></sds-dialog-nested>",props:args});Nested.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/dialog/dialog-nested","DialogNestedModule","sds-dialog-nested",[(0,sandbox_utils.Pg)("storybook/dialog/dialog-nested/dialog-template.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-nested/dialog-template.component.html","html",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-nested/second-nested-dialog.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-nested/second-nested-dialog.component.html","html",!1)]),stackblitzLink:(0,sandbox_utils.ft)("dialog","nested")};const Width=args=>({template:"<sds-dialog-width></sds-dialog-width>",props:args});Width.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/dialog/dialog-width","DialogWidthModule","sds-dialog-width",[(0,sandbox_utils.Pg)("storybook/dialog/dialog-width/dialog-template.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-width/dialog-template.component.html","html",!1)]),stackblitzLink:(0,sandbox_utils.ft)("dialog","width")};const DataReturn=args=>({template:"<sds-dialog-data-return></sds-dialog-data-return>",props:args});DataReturn.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/dialog/dialog-data-return","DialogDataReturnModule","sds-dialog-data-return",[(0,sandbox_utils.Pg)("storybook/dialog/dialog-data-return/dialog-template.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-data-return/dialog-template.component.html","html",!1)]),stackblitzLink:(0,sandbox_utils.ft)("dialog","data-return")};const Policy=args=>({template:"<sds-dialog-policy></sds-dialog-policy>",props:args});Policy.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/dialog/dialog-policy","DialogDataReturnModule","sds-dialog-policy",[(0,sandbox_utils.Pg)("storybook/dialog/dialog-policy/official-template.component.ts","ts",!1),(0,sandbox_utils.Pg)("storybook/dialog/dialog-policy/official-template.component.html","html",!1)]),stackblitzLink:(0,sandbox_utils.ft)("dialog","policy")};const Introduction=args=>({template:"<sds-dialog-introduction></sds-dialog-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Configurable=args=>({template:'<sds-dialog-configurable [alert]="alert" [width]="width"></sds-dialog-configurable>',props:args});Configurable.parameters={actions:{disable:!0},sdsCodePreview:{disable:!0}},Configurable.args={width:"small"},AlertType.parameters={...AlertType.parameters,docs:{...AlertType.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-alert-type></sds-dialog-alert-type>',\n  props: args\n})",...AlertType.parameters?.docs?.source}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-nested></sds-dialog-nested>',\n  props: args\n})",...Nested.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-width></sds-dialog-width>',\n  props: args\n})",...Width.parameters?.docs?.source}}},DataReturn.parameters={...DataReturn.parameters,docs:{...DataReturn.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-data-return></sds-dialog-data-return>',\n  props: args\n})",...DataReturn.parameters?.docs?.source}}},Policy.parameters={...Policy.parameters,docs:{...Policy.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-policy></sds-dialog-policy>',\n  props: args\n})",...Policy.parameters?.docs?.source}}},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-dialog-introduction></sds-dialog-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'args => ({\n  template: `<sds-dialog-configurable [alert]="alert" [width]="width"></sds-dialog-configurable>`,\n  props: args\n})',...Configurable.parameters?.docs?.source}}};const __namedExportsOrder=["AlertType","Nested","Width","DataReturn","Policy","Introduction","Configurable"]},"!!./node_modules/raw-loader/dist/cjs.js!./storybook/dialog/dialog-data-return/dialog-template.component.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".content input {\n  margin-block: 1rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);