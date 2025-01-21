"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[7600],{"./libs/documentation/src/lib/storybook/formly/formly-multi-checkbox/formly-multi-checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Expand:()=>Expand,Group:()=>Group,Introduction:()=>Introduction,Nested:()=>Nested,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_multi_checkbox_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyMultiCheckboxIntroductionComponent=class FormlyMultiCheckboxIntroductionComponent{};FormlyMultiCheckboxIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-multi-checkbox-introduction",template:"<p>\n  The 'Formly Multi Checkbox' component in the Sam Design System is an input tool designed for multiple selections in\n  formly forms. It simplifies the process of choosing multiple options, making it ideal for user inputs that require a\n  variety of answers.\n</p>\n"})],FormlyMultiCheckboxIntroductionComponent);let FormlyMultiCheckboxIntroductionModule=class FormlyMultiCheckboxIntroductionModule{};FormlyMultiCheckboxIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyMultiCheckboxIntroductionComponent],exports:[FormlyMultiCheckboxIntroductionComponent],bootstrap:[FormlyMultiCheckboxIntroductionComponent]})],FormlyMultiCheckboxIntroductionModule);let FormlyMultiCheckboxBasicComponent=class FormlyMultiCheckboxBasicComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"entity",type:"multicheckbox",validators:{required:src.ex},props:{label:"Socio-Economic Status",description:"Select any socio-economic categories which reflect the current status of your entity",required:!0,options:[{value:"vet",label:"Veteran Owned",tagText:"Tag"},{value:"women",label:'Women Owned (<a href="javascript:void(0)">HTML content for label</a>)'},{value:"minority",label:"Minority Owned"}]}}]}};FormlyMultiCheckboxBasicComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n',selector:"sds-formly-multi-checkbox-basic"})],FormlyMultiCheckboxBasicComponent);let FormlyMultiCheckboxBasicModule=class FormlyMultiCheckboxBasicModule{};FormlyMultiCheckboxBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyMultiCheckboxBasicComponent],exports:[FormlyMultiCheckboxBasicComponent],bootstrap:[FormlyMultiCheckboxBasicComponent]})],FormlyMultiCheckboxBasicModule);let FormlyMultiCheckboxNestedComponent=class FormlyMultiCheckboxNestedComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"domains",type:"multicheckbox",defaultValue:{cfda:!0,opp:!0,fh:!1},props:{label:"Domains",description:"Select any socio-economic categories which reflect the current status of your entity",required:!0,selectAllOption:!0,options:[{value:"cfda",label:"Assistance Listing",tooltipPosition:"bottom",tooltipText:"<b>Assistance Listing</b><u>Tool tip with style</u>"},{value:"opp",label:"Contract Opportunities",tooltipPosition:"bottom"},{value:"ei",label:"Entity Information"},{value:"fh",label:"Federal Hierarchy"},{value:"wd",label:"Wage Determinations"}]}}]}};FormlyMultiCheckboxNestedComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<div class="margin-2">\n  <p><code>selectAllOption: true </code> is used to enable the nesting checkboxes.</p>\n  <form [formGroup]="form">\n    <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  </form>\n  <pre>{{ model | json }}</pre>\n</div>\n',selector:"sds-formly-multi-checkbox-nested"})],FormlyMultiCheckboxNestedComponent);let FormlyMultiCheckboxNestedModule=class FormlyMultiCheckboxNestedModule{};FormlyMultiCheckboxNestedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyMultiCheckboxNestedComponent],exports:[FormlyMultiCheckboxNestedComponent],bootstrap:[FormlyMultiCheckboxNestedComponent]})],FormlyMultiCheckboxNestedModule);let FormlyMultiCheckboxGroupComponent=class FormlyMultiCheckboxGroupComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"entity",type:"multicheckbox",props:{label:"Grouped multi-checkbox",groupOptions:{"Contract Opportunities":[{value:"DE1",label:"Data entry",tagText:"Tag"},{value:"LD",label:"Listing Data"}],Entities:[{value:"POR",label:"Purpose of Registration"},{value:"LBN",label:"Legal Business Name"}]}}}]}};FormlyMultiCheckboxGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n\n<pre\n  >{{ model | json }}\n</pre>\n',selector:"sds-formly-multi-checkbox-group"})],FormlyMultiCheckboxGroupComponent);let FormlyMultiCheckboxGroupModule=class FormlyMultiCheckboxGroupModule{};FormlyMultiCheckboxGroupModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyMultiCheckboxGroupComponent],exports:[FormlyMultiCheckboxGroupComponent],bootstrap:[FormlyMultiCheckboxGroupComponent]})],FormlyMultiCheckboxGroupModule);let FormlyMultiCheckboxExpandComponent=class FormlyMultiCheckboxExpandComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.isexpandedOptions=!1,this.options={},this.fields=[{key:"entity.socioeconomic",type:"multicheckbox",props:{label:"States",description:"Select any state",required:!0,selectAllOption:!0,expandableOptions:!0,expandedOptions:this.isexpandedOptions,options:[{key:"AL",value:"Alabama",tagText:"AL"},{key:"AK",value:"Alaska",tagText:"AK"},{key:"AZ",value:"Arizona",tagText:"AZ"},{key:"AR",value:"Arkansas",tagText:"AR"},{key:"CA",value:"California",tagText:"CA"},{key:"CO",value:"Colorado",tagText:"CO"},{key:"CT",value:"Connecticut",tagText:"CT"},{key:"DE",value:"Delaware",tagText:"DE"},{key:"DC",value:"District Of Columbia",tagText:"DC",tagClass:"sds-tag--info-purple"},{key:"FL",value:"Florida",tagText:"FL"},{key:"GA",value:"Georgia",tagText:"GA"},{key:"HI",value:"Hawaii",tagText:"HI"},{key:"ID",value:"Idaho",tagText:"ID"},{key:"IL",value:"Illinois",tagText:"IL"},{key:"IN",value:"Indiana",tagText:"IN"}]}}]}onChange(ev){this.isexpandedOptions=!this.isexpandedOptions,this.fields[0].props.expandedOptions=this.isexpandedOptions}};FormlyMultiCheckboxExpandComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<div class="margin-2">\n  <p><code>expandableOptions: true </code>is used to show/hide expand/collapse option icon</p>\n\n  <p><code>expandedOptions: false </code>is used to show expand/collapse content</p>\n\n  <p class="margin-bottom-5">\n    Additionally, the values <code>tagText</code> and <code>tagClass</code> can be used in each options to add tags to\n    the multi-checkbox labels\n  </p>\n\n  <input\n    class="usa-checkbox__input"\n    id="expandedOptions"\n    type="checkbox"\n    value="isexpandedOptions"\n    (change)="onChange($event)"\n    [checked]="isexpandedOptions"\n  />\n  <label class="usa-checkbox__label" for="expandedOptions">Collapse Content</label>\n\n  <form [formGroup]="form">\n    <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  </form>\n</div>\n',selector:"sds-formly-multi-checkbox-expand"})],FormlyMultiCheckboxExpandComponent);let FormlyMultiCheckboxExpandModule=class FormlyMultiCheckboxExpandModule{};FormlyMultiCheckboxExpandModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyMultiCheckboxExpandComponent],exports:[FormlyMultiCheckboxExpandComponent],bootstrap:[FormlyMultiCheckboxExpandComponent]})],FormlyMultiCheckboxExpandModule);const formly_multi_checkbox_stories={title:"Formly/Multi Checkbox",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,FormlyMultiCheckboxIntroductionModule,FormlyMultiCheckboxBasicModule,FormlyMultiCheckboxNestedModule,FormlyMultiCheckboxGroupModule,FormlyMultiCheckboxExpandModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),(0,core.importProvidersFrom)(ngx_formly_core.qy.forRoot())]})]},Introduction=args=>({template:"<sds-formly-multi-checkbox-introduction></sds-formly-multi-checkbox-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Basic=args=>({template:"<sds-formly-multi-checkbox-basic></sds-formly-multi-checkbox-basic>",props:args});Basic.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-multi-checkbox/formly-multi-checkbox-basic","FormlyMultiCheckboxBasicModule","sds-formly-multi-checkbox-basic"),stackblitzLink:(0,sandbox_utils.ft)("formly-multi-checkbox","basic")};const Nested=args=>({template:"<sds-formly-multi-checkbox-nested></sds-formly-multi-checkbox-nested>",props:args});Nested.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-multi-checkbox/formly-multi-checkbox-nested","FormlyMultiCheckboxNestedModule","sds-formly-multi-checkbox-nested"),stackblitzLink:(0,sandbox_utils.ft)("formly-multi-checkbox","nested")};const Group=args=>({template:"<sds-formly-multi-checkbox-group></sds-formly-multi-checkbox-group>",props:args});Group.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-multi-checkbox/formly-multi-checkbox-group","FormlyMultiCheckboxGroupModule","sds-formly-multi-checkbox-group"),stackblitzLink:(0,sandbox_utils.ft)("formly-multi-checkbox","group")};const Expand=args=>({template:"<sds-formly-multi-checkbox-expand></sds-formly-multi-checkbox-expand>",props:args});Expand.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-multi-checkbox/formly-multi-checkbox-expand","FormlyMultiCheckboxExpandModule","sds-formly-multi-checkbox-expand"),stackblitzLink:(0,sandbox_utils.ft)("formly-multi-checkbox","expand")};const __namedExportsOrder=["Introduction","Basic","Nested","Group","Expand"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-multi-checkbox-introduction></sds-formly-multi-checkbox-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-multi-checkbox-basic></sds-formly-multi-checkbox-basic>',\n  props: args\n})",...Basic.parameters?.docs?.source}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-multi-checkbox-nested></sds-formly-multi-checkbox-nested>',\n  props: args\n})",...Nested.parameters?.docs?.source}}},Group.parameters={...Group.parameters,docs:{...Group.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-multi-checkbox-group></sds-formly-multi-checkbox-group>',\n  props: args\n})",...Group.parameters?.docs?.source}}},Expand.parameters={...Expand.parameters,docs:{...Expand.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-multi-checkbox-expand></sds-formly-multi-checkbox-expand>',\n  props: args\n})",...Expand.parameters?.docs?.source}}}}}]);