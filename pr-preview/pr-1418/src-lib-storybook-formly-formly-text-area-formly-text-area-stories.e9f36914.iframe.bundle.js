"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[9503],{"./libs/documentation/src/lib/storybook/formly/formly-text-area/formly-text-area.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,Description:()=>Description,Introduction:()=>Introduction,Label:()=>Label,MaxLength:()=>MaxLength,Placeholder:()=>Placeholder,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_text_area_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyTextAreaIntroductionComponent=class FormlyTextAreaIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};FormlyTextAreaIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-introduction",template:"<p>\n  The SDS Text Area component is a multi-line input field in formly forms. It offers a range of features to guide users\n  on the expected input, ideal for extensive user responses or descriptions.\n</p>\n"})],FormlyTextAreaIntroductionComponent);let FormlyTextAreaIntroductionModule=class FormlyTextAreaIntroductionModule{};FormlyTextAreaIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[FormlyTextAreaIntroductionComponent],exports:[FormlyTextAreaIntroductionComponent],bootstrap:[FormlyTextAreaIntroductionComponent]})],FormlyTextAreaIntroductionModule);let FormlyTextAreaConfigurableComponent=class FormlyTextAreaConfigurableComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description",placeholder:"eg: Acme Corporation is a federal contractor.",description:"Enter the description for your entity.",required:!0,maxLength:50}}]}set config(config){const temp=this.fields[0];temp.props=config,this.fields=[temp]}static#_=this.propDecorators={config:[{type:core.Input,args:["config"]}]}};FormlyTextAreaConfigurableComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-configurable",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaConfigurableComponent);let FormlyTextAreaConfigurableModule=class FormlyTextAreaConfigurableModule{};FormlyTextAreaConfigurableModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaConfigurableComponent],exports:[FormlyTextAreaConfigurableComponent],bootstrap:[FormlyTextAreaConfigurableComponent]})],FormlyTextAreaConfigurableModule);let FormlyTextAreaDescriptionComponent=class FormlyTextAreaDescriptionComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description",description:"Enter the description for your entity."}}]}};FormlyTextAreaDescriptionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-description",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaDescriptionComponent);let FormlyTextAreaDescriptionModule=class FormlyTextAreaDescriptionModule{};FormlyTextAreaDescriptionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaDescriptionComponent],exports:[FormlyTextAreaDescriptionComponent],bootstrap:[FormlyTextAreaDescriptionComponent]})],FormlyTextAreaDescriptionModule);let FormlyTextAreaLabelComponent=class FormlyTextAreaLabelComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description"}}]}};FormlyTextAreaLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-label",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaLabelComponent);let FormlyTextAreaLabelModule=class FormlyTextAreaLabelModule{};FormlyTextAreaLabelModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaLabelComponent],exports:[FormlyTextAreaLabelComponent],bootstrap:[FormlyTextAreaLabelComponent]})],FormlyTextAreaLabelModule);let FormlyTextAreaPlaceholderComponent=class FormlyTextAreaPlaceholderComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description",placeholder:"eg: Acme Corporation is a federal contractor."}}]}};FormlyTextAreaPlaceholderComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-placeholder",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaPlaceholderComponent);let FormlyTextAreaPlaceholderModule=class FormlyTextAreaPlaceholderModule{};FormlyTextAreaPlaceholderModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaPlaceholderComponent],exports:[FormlyTextAreaPlaceholderComponent],bootstrap:[FormlyTextAreaPlaceholderComponent]})],FormlyTextAreaPlaceholderModule);let FormlyTextAreaRequiredComponent=class FormlyTextAreaRequiredComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description",required:!0}}]}};FormlyTextAreaRequiredComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-required",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaRequiredComponent);let FormlyTextAreaRequiredModule=class FormlyTextAreaRequiredModule{};FormlyTextAreaRequiredModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaRequiredComponent],exports:[FormlyTextAreaRequiredComponent],bootstrap:[FormlyTextAreaRequiredComponent]})],FormlyTextAreaRequiredModule);let FormlyTextAreaMaxlengthComponent=class FormlyTextAreaMaxlengthComponent{constructor(){this.form=new fesm2022_forms.cw({}),this.model={},this.options={},this.fields=[{key:"entity",type:"textarea",props:{label:"Entity Description",maxLength:50}}]}};FormlyTextAreaMaxlengthComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-formly-text-area-maxlength",template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"> </formly-form>\n</form>\n'})],FormlyTextAreaMaxlengthComponent);let FormlyTextAreaMaxlengthModule=class FormlyTextAreaMaxlengthModule{};FormlyTextAreaMaxlengthModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot()],declarations:[FormlyTextAreaMaxlengthComponent],exports:[FormlyTextAreaMaxlengthComponent],bootstrap:[FormlyTextAreaMaxlengthComponent]})],FormlyTextAreaMaxlengthModule);const props={table:{category:"template-options"}},formly_text_area_stories={title:"Formly/Text Area",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.UX,src.fZ,fesm2022_forms.u5,ngx_formly_core.X0.forRoot(),FormlyTextAreaIntroductionModule,FormlyTextAreaConfigurableModule,animations.NoopAnimationsModule,FormlyTextAreaLabelModule,FormlyTextAreaDescriptionModule,FormlyTextAreaMaxlengthModule,FormlyTextAreaRequiredModule,FormlyTextAreaPlaceholderModule]})],argTypes:{label:props,placeholder:props,description:props,required:props,maxLength:props}},Introduction=args=>({template:"<sds-formly-text-area-introduction></sds-formly-text-area-introduction>",props:args});Introduction.parameters={options:{showPanel:!1}};const Configurable=(args=>{const{label,placeholder,description,required,maxLength}=args;let config=((label,placeholder,description,required,maxLength)=>({label:label??"",placeholder:placeholder??"",description:description??"",required:required??!1,maxLength:maxLength??""}))(label,placeholder,description,required,maxLength);return{template:'<sds-formly-text-area-configurable [config]="configObj"></sds-formly-text-area-configurable>',props:{configObj:config,...args}}}).bind({});Configurable.args={label:"Entity Description",placeholder:"eg: Acme Corporation is a federal contractor.",description:"Enter the description for your entity.",required:!0,maxLength:50},Configurable.parameters={preview:{disable:!0},actions:{disable:!0}};const Description=args=>({template:"<sds-formly-text-area-description></sds-formly-text-area-description>",props:args});Description.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/formly-text-area/formly-text-area-description","FormlyTextAreaDescriptionModule","sds-formly-text-area-description"),stackblitzLink:(0,sandbox_utils.wX)("formly-text-area","description")};const Label=args=>({template:"<sds-formly-text-area-label></sds-formly-text-area-label>",props:args});Label.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/formly-text-area/formly-text-area-label","FormlyTextAreaLabelModule","sds-formly-text-area-label"),stackblitzLink:(0,sandbox_utils.wX)("formly-text-area","label")};const Placeholder=args=>({template:"<sds-formly-text-area-placeholder></sds-formly-text-area-placeholder>",props:args});Placeholder.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/formly-text-area/formly-text-area-placeholder","FormlyTextAreaPlaceholderModule","sds-formly-text-area-placeholder"),stackblitzLink:(0,sandbox_utils.wX)("formly-text-area","placeholder")};const Required=args=>({template:"<sds-formly-text-area-required></sds-formly-text-area-required>",props:args});Required.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/formly-text-area/formly-text-area-required","FormlyTextAreaRequiredModule","sds-formly-text-area-required"),stackblitzLink:(0,sandbox_utils.wX)("formly-text-area","required")};const MaxLength=args=>({template:"<sds-formly-text-area-maxlength></sds-formly-text-area-maxlength>",props:args});MaxLength.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/formly/formly-text-area/formly-text-area-maxlength","FormlyTextAreaMaxlengthModule","sds-formly-text-area-maxlength"),stackblitzLink:(0,sandbox_utils.wX)("formly-text-area","maxlength")};const __namedExportsOrder=["Introduction","Configurable","Description","MaxLength","Label","Placeholder","Required"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-introduction></sds-formly-text-area-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:"args => {\n  const {\n    label,\n    placeholder,\n    description,\n    required,\n    maxLength\n  } = args;\n  let config = formlyConfigFunction(label, placeholder, description, required, maxLength);\n  return {\n    template: '<sds-formly-text-area-configurable [config]=\"configObj\"></sds-formly-text-area-configurable>',\n    props: {\n      configObj: config,\n      ...args\n    }\n  };\n}",...Configurable.parameters?.docs?.source}}},Description.parameters={...Description.parameters,docs:{...Description.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-description></sds-formly-text-area-description>',\n  props: args\n})",...Description.parameters?.docs?.source}}},MaxLength.parameters={...MaxLength.parameters,docs:{...MaxLength.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-maxlength></sds-formly-text-area-maxlength>',\n  props: args\n})",...MaxLength.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-label></sds-formly-text-area-label>',\n  props: args\n})",...Label.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-placeholder></sds-formly-text-area-placeholder>',\n  props: args\n})",...Placeholder.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-text-area-required></sds-formly-text-area-required>',\n  props: args\n})",...Required.parameters?.docs?.source}}}}}]);