"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[5648],{"./libs/documentation/src/lib/storybook/toasts/toasts.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,Introduction:()=>Introduction,Message:()=>Message,PreventDuplicates:()=>PreventDuplicates,Timeout:()=>Timeout,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toasts_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),ngx_toastr=__webpack_require__("./node_modules/ngx-toastr/fesm2020/ngx-toastr.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ToastsConfigurableComponent=class ToastsConfigurableComponent{set toastTimeout(timeout){this.options.timeOut=timeout}set disableTimeout(disable){this.options.disableTimeOut=disable}set preventDuplicates(prevent){this.options.preventDuplicates=prevent}constructor(toastr){this.toastr=toastr,this.toastMessage="Test Message",this.options=this.toastr.toastrConfig,this.options.enableHtml=!0,this.options.iconClasses={error:"sds-toast--error",info:"sds-toast--info",success:"sds-toast--success",warning:"sds-toast--warning"},this.options.closeButton=!0}showToast(){switch(this.toastType){case"Success":this.toastr.success(this.toastMessage,"");break;case"Info":this.toastr.info(this.toastMessage,"");break;case"Warning":this.toastr.warning(this.toastMessage,"");break;case"Error":this.toastr.error(this.toastMessage,"");break;default:this.toastr.error("Select a toast type below!","")}}static#_=this.ctorParameters=()=>[{type:ngx_toastr.tw}];static#_2=this.propDecorators={toastMessage:[{type:core.Input}],toastType:[{type:core.Input}],toastTimeout:[{type:core.Input}],disableTimeout:[{type:core.Input}],preventDuplicates:[{type:core.Input}]}};ToastsConfigurableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-configurable",template:'<button class="usa-button" (click)="showToast()">Show Toast</button>\n'})],ToastsConfigurableComponent);let ToastsConfigurableModule=class ToastsConfigurableModule{};ToastsConfigurableModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.og],declarations:[ToastsConfigurableComponent],exports:[ToastsConfigurableComponent],bootstrap:[ToastsConfigurableComponent]})],ToastsConfigurableModule);let ToastsIntroductionComponent=class ToastsIntroductionComponent{};ToastsIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-introduction",template:"<p>\n  Toasts allow a message to be displayed to a user that sits on top of all content. This message can be customized to\n  include plain text or HTML elements. It can also be removed after a period of time, or left until a user clicks an 'x'\n  in the toast window.\n</p>\n"})],ToastsIntroductionComponent);let ToastsIntroductionModule=class ToastsIntroductionModule{};ToastsIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.og],declarations:[ToastsIntroductionComponent],bootstrap:[ToastsIntroductionComponent],exports:[ToastsIntroductionComponent]})],ToastsIntroductionModule);let ToastsMessageComponent=class ToastsMessageComponent{constructor(toastr){this.toastr=toastr,this.options=this.toastr.toastrConfig,this.options.iconClasses={error:"sds-toast--error",info:"sds-toast--info",success:"sds-toast--success",warning:"sds-toast--warning"},this.options.enableHtml=!0,this.options.closeButton=!0,this.options.disableTimeOut=!0}showPlainTextMessage(){this.toastr.info("Plain Toast Message","")}showHTMLMessage(){this.toastr.info("<i>HTML Toast Message</i>","")}static#_=this.ctorParameters=()=>[{type:ngx_toastr.tw}]};ToastsMessageComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-message",template:'<button class="usa-button" (click)="showPlainTextMessage()">Show Plain Text Message</button>\n<button class="usa-button" (click)="showHTMLMessage()">Show HTML Message</button>\n'})],ToastsMessageComponent);let ToastsMessageModule=class ToastsMessageModule{};ToastsMessageModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ToastsMessageComponent],bootstrap:[ToastsMessageComponent],exports:[ToastsMessageComponent]})],ToastsMessageModule);let ToastsPreventDuplicatesComponent=class ToastsPreventDuplicatesComponent{constructor(toastr){this.toastr=toastr,this.options=this.toastr.toastrConfig,this.options.iconClasses={error:"sds-toast--error",info:"sds-toast--info",success:"sds-toast--success",warning:"sds-toast--warning"},this.options.closeButton=!0,this.options.preventDuplicates=!0}showMessageWithoutDuplicates(){this.toastr.info("This Message Will Not Duplicate","")}static#_=this.ctorParameters=()=>[{type:ngx_toastr.tw}]};ToastsPreventDuplicatesComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-prevent-duplicates",template:'<button class="usa-button" (click)="showMessageWithoutDuplicates()">Show A Toast Without Duplicates</button>\n'})],ToastsPreventDuplicatesComponent);let ToastsPreventDuplicatesModule=class ToastsPreventDuplicatesModule{};ToastsPreventDuplicatesModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ToastsPreventDuplicatesComponent],exports:[ToastsPreventDuplicatesComponent],bootstrap:[ToastsPreventDuplicatesComponent]})],ToastsPreventDuplicatesModule);let ToastsTimeoutComponent=class ToastsTimeoutComponent{constructor(toastr){this.toastr=toastr,this.options=this.toastr.toastrConfig,this.options.iconClasses={error:"sds-toast--error",info:"sds-toast--info",success:"sds-toast--success",warning:"sds-toast--warning"},this.options.closeButton=!0}showTwoSecondTimeoutMessage(){this.options.disableTimeOut=!1,this.options.timeOut=2e3,this.toastr.info("This Message Will Disappear In 2 Seconds","")}showNoTimeoutMessage(){this.options.disableTimeOut=!0,this.toastr.info("This Message Will Not Timeout","")}static#_=this.ctorParameters=()=>[{type:ngx_toastr.tw}]};ToastsTimeoutComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-timeout",template:'<button class="usa-button" (click)="showTwoSecondTimeoutMessage()">Show Message With 2 Second Timeout</button>\n<button class="usa-button" (click)="showNoTimeoutMessage()">Show Message With No Timeout</button>\n'})],ToastsTimeoutComponent);let ToastsTimeoutModule=class ToastsTimeoutModule{};ToastsTimeoutModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ToastsTimeoutComponent],exports:[ToastsTimeoutComponent],bootstrap:[ToastsTimeoutComponent]})],ToastsTimeoutModule);let ToastsTypeComponent=class ToastsTypeComponent{constructor(toastr){this.toastr=toastr,this.options=this.toastr.toastrConfig,this.options.iconClasses={error:"sds-toast--error",info:"sds-toast--info",success:"sds-toast--success",warning:"sds-toast--warning"},this.options.closeButton=!0}showSuccessToast(){this.toastr.success("A Success Toast Message","")}showInfoToast(){this.toastr.info("An Info Toast Message","")}showWarningToast(){this.toastr.warning("A Warning Toast Message","")}showErrorToast(){this.toastr.error("An Error Toast Message","")}static#_=this.ctorParameters=()=>[{type:ngx_toastr.tw}]};ToastsTypeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-toasts-type",template:'<button class="usa-button" (click)="showSuccessToast()">Success Toast</button>\n<button class="usa-button" (click)="showInfoToast()">Info Toast</button>\n<button class="usa-button" (click)="showWarningToast()">Warning Toast</button>\n<button class="usa-button" (click)="showErrorToast()">Error Toast</button>\n'})],ToastsTypeComponent);let ToastsTypeModule=class ToastsTypeModule{};ToastsTypeModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ToastsTypeComponent],exports:[ToastsTypeComponent],bootstrap:[ToastsTypeComponent]})],ToastsTypeModule);const toasts_stories={title:"Components/Toasts",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.og,ngx_toastr._B.forRoot(src.$K),ToastsConfigurableModule,ToastsIntroductionModule,ToastsMessageModule,ToastsTimeoutModule,ToastsTypeModule,ToastsPreventDuplicatesModule]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(src.og),(0,animations.provideAnimations)()]})],argTypes:{toastType:{options:["Success","Info","Warning","Error"],control:{type:"select"},table:{type:{summary:"select"},defaultValue:{summary:"General"}}}}},Introduction=args=>({template:"<sds-toasts-introduction></sds-toasts-introduction>",props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Configurable=args=>({template:'<sds-toasts-configurable\n  [toastType]="toastType"\n  [toastMessage]="toastMessage"\n  [toastTimeout]="toastTimeout"\n  [disableTimeout]=timeoutDisabled\n  [preventDuplicates]=preventDuplicates\n  ></sds-toasts-configurable>',props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});Configurable.args={toastMessage:"Test Message",toastTimeout:5e3,timeoutDisabled:!1,preventDuplicates:!1},Configurable.parameters={sdsCodePreview:{disable:!0},actions:{disable:!0}};const Message=args=>({template:"<sds-toasts-message></sds-toasts-message>",props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});Message.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/toasts/toasts-message","ToastsMessageModule","sds-toasts-message"),stackblitzLink:(0,sandbox_utils.ft)("toasts","message")};const Type=args=>({template:"<sds-toasts-type></sds-toasts-type>",props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});Type.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/toasts/toasts-type","ToastsTypeModule","sds-toasts-type"),stackblitzLink:(0,sandbox_utils.ft)("toasts","type")};const Timeout=args=>({template:"<sds-toasts-timeout></sds-toasts-timeout>",props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});Timeout.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/toasts/toasts-timeout","ToastsTimeoutModule","sds-toasts-timeout"),stackblitzLink:(0,sandbox_utils.ft)("toasts","timeout")};const PreventDuplicates=args=>({template:"<sds-toasts-prevent-duplicates></sds-toasts-prevent-duplicates>",props:{...args},moduleMetadata:{providers:[{provide:ngx_toastr.tw,useClass:ngx_toastr.tw}]}});PreventDuplicates.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/toasts/toasts-prevent-duplicates","ToastsPreventDuplicatesModule","sds-toasts-prevent-duplicates"),stackblitzLink:(0,sandbox_utils.ft)("toasts","prevent-duplicates")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-toasts-introduction></sds-toasts-introduction>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'args => ({\n  template: `<sds-toasts-configurable\n  [toastType]="toastType"\n  [toastMessage]="toastMessage"\n  [toastTimeout]="toastTimeout"\n  [disableTimeout]=timeoutDisabled\n  [preventDuplicates]=preventDuplicates\n  ></sds-toasts-configurable>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})',...Configurable.parameters?.docs?.source}}},Message.parameters={...Message.parameters,docs:{...Message.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-toasts-message></sds-toasts-message>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})",...Message.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-toasts-type></sds-toasts-type>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})",...Type.parameters?.docs?.source}}},Timeout.parameters={...Timeout.parameters,docs:{...Timeout.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-toasts-timeout></sds-toasts-timeout>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})",...Timeout.parameters?.docs?.source}}},PreventDuplicates.parameters={...PreventDuplicates.parameters,docs:{...PreventDuplicates.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-toasts-prevent-duplicates></sds-toasts-prevent-duplicates>`,\n  props: {\n    ...args\n  },\n  moduleMetadata: {\n    providers: [{\n      provide: ToastrService,\n      useClass: ToastrService\n    }]\n  }\n})",...PreventDuplicates.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","Configurable","Message","Type","Timeout","PreventDuplicates"]}}]);