"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[4508],{"./libs/documentation/src/lib/storybook/formly/formly-file-info/formly-file-info.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Introduction:()=>Introduction,Options:()=>Options,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_file_info_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyFileinfoIntroductionComponent=class FormlyFileinfoIntroductionComponent{};FormlyFileinfoIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-info-introduction",template:"<p>\n  The 'Formly File Info' component in the Sam Design System is a specialized tool for handling file information in\n  formly forms.\n</p>\n"})],FormlyFileinfoIntroductionComponent);let FormlyFileinfoIntroductionModule=class FormlyFileinfoIntroductionModule{};FormlyFileinfoIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFileinfoIntroductionComponent],exports:[FormlyFileinfoIntroductionComponent],bootstrap:[FormlyFileinfoIntroductionComponent]})],FormlyFileinfoIntroductionModule);let FormlyFileinfoOptionsComponent=class FormlyFileinfoOptionsComponent{constructor(){this.results={},this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"fileType",type:"fileinfo",props:{options:[{value:"Default",key:"CSV",description:"-Limited to 5000"},{value:"Full",key:"ZIP",description:"-Limited to 10,000"},{value:"Case",key:"PDF",description:"-Limited to 8000"},{value:"All",key:"XLS",description:"-Limited to 45000"}]}}]}};FormlyFileinfoOptionsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-info-options",template:'<form [formGroup]="form">\n  <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>\n</form>\n\n<div class="sam-example-pagination">\n  <h4>Filter Model:</h4>\n  <pre>{{ model ? (model | json) : \'\' }}</pre>\n</div>\n'})],FormlyFileinfoOptionsComponent);let FormlyFileinfoOptionsModule=class FormlyFileinfoOptionsModule{};FormlyFileinfoOptionsModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFileinfoOptionsComponent],exports:[FormlyFileinfoOptionsComponent],bootstrap:[FormlyFileinfoOptionsComponent]})],FormlyFileinfoOptionsModule);let FormlyFileinfoBasicComponent=class FormlyFileinfoBasicComponent{constructor(){this.results={},this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"fileType",type:"fileinfo",props:{label:"Select file type",hideOptional:!0,options:[{value:"Default",key:"CSV",description:"-Limited to 5000"},{value:"Full",key:"ZIP",description:"-Limited to 10,000"},{value:"Case",key:"PDF",description:"-Limited to 8000"},{value:"All",key:"XLS",description:"-Limited to 45000"}]}}]}};FormlyFileinfoBasicComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-info-basic",template:'<form [formGroup]="form">\n  <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>\n</form>\n\n<div class="sam-example-pagination">\n  <h4>Filter Model:</h4>\n  <pre>{{ model ? (model | json) : \'\' }}</pre>\n</div>\n'})],FormlyFileinfoBasicComponent);let FormlyFileinfoBasicModule=class FormlyFileinfoBasicModule{};FormlyFileinfoBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFileinfoBasicComponent],exports:[FormlyFileinfoBasicComponent],bootstrap:[FormlyFileinfoBasicComponent]})],FormlyFileinfoBasicModule);const formly_file_info_stories={title:"Formly/Fileinfo",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,FormlyFileinfoIntroductionModule,FormlyFileinfoBasicModule,FormlyFileinfoOptionsModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),(0,core.importProvidersFrom)(ngx_formly_core.qy.forRoot())]})]},Introduction=args=>({template:"<sds-formly-file-info-introduction></sds-formly-file-info-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Basic=args=>({template:"<sds-formly-file-info-basic></sds-formly-file-info-basic>",props:args});Basic.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-info/formly-file-info-basic","FormlyFileinfoBasicModule","sds-formly-file-info-basic"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-info","basic")};const Options=args=>({template:"<sds-formly-file-info-options></sds-formly-file-info-options>",props:args});Options.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-info/formly-file-info-options","FormlyFileinfoOptionsModule","sds-formly-file-info-template"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-info","options")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-info-introduction></sds-formly-file-info-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-info-basic></sds-formly-file-info-basic>',\n  props: args\n})",...Basic.parameters?.docs?.source}}},Options.parameters={...Options.parameters,docs:{...Options.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-info-options></sds-formly-file-info-options>',\n  props: args\n})",...Options.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","Basic","Options"]}}]);