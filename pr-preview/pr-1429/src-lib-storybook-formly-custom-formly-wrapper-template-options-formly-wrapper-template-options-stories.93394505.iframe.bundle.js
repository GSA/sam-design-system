"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[1250],{"./libs/documentation/src/lib/storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnnounceLabel:()=>AnnounceLabel,Blur:()=>Blur,Hideoptional:()=>Hideoptional,Introduction:()=>Introduction,UpdateOn:()=>UpdateOn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_wrapper_template_options_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyWrapperTemplateOptionsBlurComponent=class FormlyWrapperTemplateOptionsBlurComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"Keyword",type:"input",modelOptions:{updateOn:"blur"},props:{label:"Keyword",placeholder:"eg: Acme Corporation",description:"Description",required:!0}}]}};FormlyWrapperTemplateOptionsBlurComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-blur",template:'<p>\n  <code>\n    modelOptions: {{ \'{\' }}\n    updateOn: \'blur\'\n    {{ \'}\' }}</code\n  >\n  is used to update the model on blur.\n</p>\n\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n\n{{ model | json }}\n'})],FormlyWrapperTemplateOptionsBlurComponent);let FormlyWrapperTemplateOptionsBlurModule=class FormlyWrapperTemplateOptionsBlurModule{};FormlyWrapperTemplateOptionsBlurModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsBlurComponent],exports:[FormlyWrapperTemplateOptionsBlurComponent],bootstrap:[FormlyWrapperTemplateOptionsBlurComponent]})],FormlyWrapperTemplateOptionsBlurModule);let FormlyWrapperTemplateOptionsAnnounceLabelComponent=class FormlyWrapperTemplateOptionsAnnounceLabelComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"Keyword",type:"input",props:{label:"Entity",announceLabel:!0}}]}};FormlyWrapperTemplateOptionsAnnounceLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-announce-label",template:'<p><code> announceLabel: true</code> is used to announce label for screen reader.</p>\n\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'})],FormlyWrapperTemplateOptionsAnnounceLabelComponent);let FormlyWrapperTemplateOptionsAnnounceLabelModule=class FormlyWrapperTemplateOptionsAnnounceLabelModule{};FormlyWrapperTemplateOptionsAnnounceLabelModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsAnnounceLabelComponent],exports:[FormlyWrapperTemplateOptionsAnnounceLabelComponent],bootstrap:[FormlyWrapperTemplateOptionsAnnounceLabelComponent]})],FormlyWrapperTemplateOptionsAnnounceLabelModule);let FormlyWrapperTemplateOptionsHideoptionalComponent=class FormlyWrapperTemplateOptionsHideoptionalComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"Keyword",type:"input",props:{label:"Entity",hideOptional:!0}}]}};FormlyWrapperTemplateOptionsHideoptionalComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-hideoptional",template:'<p><code> hideOptional: true</code> is used to hide the (optional) text.</p>\n\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n\n<pre>{{ model ? (model | json) : \'\' }}</pre>\n'})],FormlyWrapperTemplateOptionsHideoptionalComponent);let FormlyWrapperTemplateOptionsHideOptionalModule=class FormlyWrapperTemplateOptionsHideOptionalModule{};FormlyWrapperTemplateOptionsHideOptionalModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsHideoptionalComponent],exports:[FormlyWrapperTemplateOptionsHideoptionalComponent],bootstrap:[FormlyWrapperTemplateOptionsHideoptionalComponent]})],FormlyWrapperTemplateOptionsHideOptionalModule);let FormlyWrapperTemplateOptionsIntroductionComponent=class FormlyWrapperTemplateOptionsIntroductionComponent{};FormlyWrapperTemplateOptionsIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-introduction",template:"<p>\n  The 'Formly Label wrapper' component in the Sam Design System is a specialized tool for handling file information in\n  formly forms.\n</p>\n"})],FormlyWrapperTemplateOptionsIntroductionComponent);let FormlyWrapperTemplateOptionsIntroductionModule=class FormlyWrapperTemplateOptionsIntroductionModule{};FormlyWrapperTemplateOptionsIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsIntroductionComponent],exports:[FormlyWrapperTemplateOptionsIntroductionComponent],bootstrap:[FormlyWrapperTemplateOptionsIntroductionComponent]})],FormlyWrapperTemplateOptionsIntroductionModule);let FormlyWrapperTemplateOptionsTagsComponent=class FormlyWrapperTemplateOptionsTagsComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"input",props:{label:"Entity",tagText:"SAM"}}],this.fieldsTagsColor=[{key:"entitytag",type:"input",props:{label:"Entity",tagText:"DUNS",tagClass:"sds-tag--info-purple"}}]}};FormlyWrapperTemplateOptionsTagsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-tags",template:'<h4>Template option for tag</h4>\n<p><code> tagText: \'SAM\'</code> is used to add the tag with default color</p>\n\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n\n<h4>Template option for tag and tag class</h4>\n<p>\n  <code> tagText: \'DUNS\', tagClass: \'sds-tag--info-purple\'</code> are used to add the tag with custom class for color\n</p>\n\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fieldsTagsColor" [options]="options" [form]="form"></formly-form>\n</form>\n\n<pre>{{ model ? (model | json) : \'\' }}</pre>\n'})],FormlyWrapperTemplateOptionsTagsComponent);let FormlyWrapperTemplateOptionsTagsModule=class FormlyWrapperTemplateOptionsTagsModule{};FormlyWrapperTemplateOptionsTagsModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsTagsComponent],exports:[FormlyWrapperTemplateOptionsTagsComponent],bootstrap:[FormlyWrapperTemplateOptionsTagsComponent]})],FormlyWrapperTemplateOptionsTagsModule);let FormlyWrapperTemplateOptionsUpdateonComponent=class FormlyWrapperTemplateOptionsUpdateonComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"grandParent",modelOptions:{updateOn:"blur"},fieldGroup:[{key:"parent1",fieldGroup:[{key:"parent1NoUpdateOn",type:"input",props:{label:"Parent 1 No UpdateOn Specified",description:"No updateOn specified, inherits from ancestors, will update onBlur",required:!0}},{key:"updateOnChange",type:"input",modelOptions:{updateOn:"change"},props:{label:"updateOn: 'change'",description:"change specified as updateOn option, will ignore updateOn of ancestors",required:!0}}]},{key:"parent2",fieldGroup:[{key:"parent2NoUpdateOn",type:"input",props:{label:"Parent 2 No UpdateOn Specified",description:"No updateOn specified, inherits from ancestors, will update onBlur",required:!0}},{key:"updateOnSubmit",type:"input",modelOptions:{updateOn:"submit"},props:{label:"updateOn: 'submit'",description:"submit specified as updateOn option, will ignore updateOn of ancestors",required:!0}}]}]}]}submit(){console.log("form submitted")}};FormlyWrapperTemplateOptionsUpdateonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-wrapper-template-options-updateon",template:'<p>\n  By default, the updateOn option assigned to a field will be passed to any sub-field contained in\n  <code>fieldGroup</code>. In this example, blur is assigned to the top field for it\'s updateOn option. As a result, the\n  input fields contained in it\'s <code>fieldGroup</code> which do not assign their own updateOn option will also update\n  on blur. However, by specifying a different updateOn choice, a field can be made to update differently than its\n  ancestors.\n</p>\n<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form" (ngSubmit)="submit()"></formly-form>\n  <button type="submit" class="usa-button">Submit</button>\n</form>\n\n{{ model | json }}\n'})],FormlyWrapperTemplateOptionsUpdateonComponent);let FormlyWrapperTemplateOptionsUpdateonModule=class FormlyWrapperTemplateOptionsUpdateonModule{};FormlyWrapperTemplateOptionsUpdateonModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyWrapperTemplateOptionsUpdateonComponent],exports:[FormlyWrapperTemplateOptionsUpdateonComponent],bootstrap:[FormlyWrapperTemplateOptionsUpdateonComponent]})],FormlyWrapperTemplateOptionsUpdateonModule);const formly_wrapper_template_options_stories={title:"Formly Examples/Template Options",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,animations.NoopAnimationsModule,ngx_formly_core.X0.forRoot(),FormlyWrapperTemplateOptionsIntroductionModule,FormlyWrapperTemplateOptionsBlurModule,FormlyWrapperTemplateOptionsUpdateonModule,FormlyWrapperTemplateOptionsTagsModule,FormlyWrapperTemplateOptionsHideOptionalModule,FormlyWrapperTemplateOptionsAnnounceLabelModule]})]},Introduction=args=>({template:"<sds-formly-wrapper-template-options-introduction></sds-formly-wrapper-template-options-introduction>",props:args});Introduction.parameters={options:{showPanel:!1}};const Blur=args=>({template:"<sds-formly-wrapper-template-options-blur></sds-formly-wrapper-template-options-blur>",props:args});Blur.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-blur","FormlyWrapperTemplateOptionsBlurModule","sds-formly-wrapper-template-options-blur"),stackblitzLink:(0,sandbox_utils.wX)("formly-wrapper-template-options","blur")};const UpdateOn=args=>({template:"<sds-formly-wrapper-template-options-updateon></sds-formly-wrapper-template-options-updateon>",props:args});UpdateOn.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-updateon","FormlyWrapperTemplateOptionsUpdateonModule","sds-formly-wrapper-template-options-template"),stackblitzLink:(0,sandbox_utils.wX)("formly-wrapper-template-options","updateon")};const Hideoptional=args=>({template:"<sds-formly-wrapper-template-options-hideoptional></sds-formly-wrapper-template-options-hideoptional>",props:args});Hideoptional.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-hideoptional","FormlyWrapperTemplateOptionsHideoptionalModule","sds-formly-wrapper-template-options-hideoptional"),stackblitzLink:(0,sandbox_utils.wX)("formly-wrapper-template-options","hideoptional")};const AnnounceLabel=args=>({template:"<sds-formly-wrapper-template-options-announce-label></sds-formly-wrapper-template-options-announce-label>",props:args});AnnounceLabel.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/custom/formly-wrapper-template-options/formly-wrapper-template-options-announce-label","FormlyWrapperTemplateOptionsAnnounceLabelModule","sds-formly-wrapper-template-options-announce-label"),stackblitzLink:(0,sandbox_utils.wX)("formly-wrapper-template-options","announc-label")};const __namedExportsOrder=["Introduction","Blur","UpdateOn","Tags","Hideoptional","AnnounceLabel"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-wrapper-template-options-introduction></sds-formly-wrapper-template-options-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Blur.parameters={...Blur.parameters,docs:{...Blur.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-wrapper-template-options-blur></sds-formly-wrapper-template-options-blur>',\n  props: args\n})",...Blur.parameters?.docs?.source}}},UpdateOn.parameters={...UpdateOn.parameters,docs:{...UpdateOn.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-wrapper-template-options-updateon></sds-formly-wrapper-template-options-updateon>',\n  props: args\n})",...UpdateOn.parameters?.docs?.source}}},Hideoptional.parameters={...Hideoptional.parameters,docs:{...Hideoptional.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-wrapper-template-options-hideoptional></sds-formly-wrapper-template-options-hideoptional>',\n  props: args\n})",...Hideoptional.parameters?.docs?.source}}},AnnounceLabel.parameters={...AnnounceLabel.parameters,docs:{...AnnounceLabel.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-wrapper-template-options-announce-label></sds-formly-wrapper-template-options-announce-label>',\n  props: args\n})",...AnnounceLabel.parameters?.docs?.source}}}}}]);