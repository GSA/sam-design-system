"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[1900],{"./libs/documentation/src/lib/storybook/formly/custom/formly-forms/formly-forms.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddressForm:()=>AddressForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_forms_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyFormsComponent=class FormlyFormsComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options=null,this.fields=[{fieldGroupClassName:"grid-row",fieldGroup:[{template:"<h3>Physical Address</h3><span>Your physical address is the street address of the primary office or other building where your entity is located. A post office box may not be used as your physical…</span>"}]},{fieldGroupClassName:"grid-row",fieldGroup:[{className:"grid-col-7",key:"country",type:"select",defaultValue:"united_states",props:{label:"Country",required:!0,options:[{label:"United States (USA)",value:"united_states"},{label:"Canada",value:"canada"}]}}]},{fieldGroupClassName:"grid-row",fieldGroup:[{className:"desktop:grid-col-12 tablet:grid-col-12",type:"input",key:"street1",props:{required:!0,label:"Street Address 1"}}]},{fieldGroupClassName:"grid-row ",fieldGroup:[{className:"grid-col-12 tablet:grid-col-12",type:"input",key:"street2",props:{label:"Street Address 2"}}]},{fieldGroupClassName:"grid-row",fieldGroup:[{className:"grid-col-4",type:"input",key:"zip",hideExpression:model=>"canada"===this.model.country,props:{required:!0,type:"number",label:"ZIP Code (+ 4)",maxLength:5,min:0,pattern:"\\d{5}"}}]},{fieldGroupClassName:"grid-row",fieldGroup:[{className:"grid-col-4",type:"input",key:"postal",hideExpression:model=>"united_states"===this.model.country,props:{required:!0,label:"Postal Code",maxLength:6,min:0,pattern:"\\d{5}"}}]},{fieldGroupClassName:"grid-row grid-gap-2",fieldGroup:[{className:"grid-col-8",type:"input",key:"cityName",props:{required:!0,label:"City"}},{className:"grid-col-4",key:"state",type:"select",defaultValue:"None",hideExpression:model=>"canada"===this.model.country,props:{label:"State",required:!0,options:[{id:"0",label:"--Select--",value:"Select"},{id:"1",label:"Alabama",value:"Alabama"},{id:"2",label:"Alaska",value:"Alaska"},{id:"3",label:"Arizona",value:"Arizona"},{id:"4",label:"Arkansas",value:"Arkansas"},{id:"5",label:"California",value:"California"},{id:"6",label:"Colorado",value:"Colorado"},{id:"7",label:"Connecticut",value:"Connecticut"},{id:"8",label:"Delaware",value:"Delaware"},{id:"9",label:"District of Columbia",value:"District of Columbie"},{id:"10",label:"Florida",value:"Florida"},{id:"11",label:"Georgia",value:"Georgia"},{id:"12",label:"Hawaii",value:"Hawaii"},{id:"13",label:"Idaho",value:"Idaho"},{id:"14",label:"Illinois",value:"Illinois"},{id:"15",label:"Indiana",value:"Indiana"},{id:"16",label:"Iowa",value:"Iowa"},{id:"17",label:"Kansas",value:"Kansas"},{id:"18",label:"Kentucky",value:"Kentucky"},{id:"19",label:"Louisiana",value:"Louisiana"},{id:"20",label:"Maine",value:"Maine"},{id:"21",label:"Maryland",value:"Maryland"},{id:"22",label:"Massachusetts",value:"Massachusetts"},{id:"23",label:"Michigan",value:"Michigan"},{id:"24",label:"Minnesota",value:"Minnesota"},{id:"25",label:"Mississippi",value:"Mississippi"},{id:"26",label:"Missouri",value:"Missouri"},{id:"27",label:"Montana",value:"Montana"},{id:"28",label:"Nebraska",value:"Nebraska"},{id:"29",label:"Nevada",value:"Nevada"},{id:"30",label:"New Hampshire",value:"New Hampshire"},{id:"31",label:"New Jersey",value:"New Jersey"},{id:"32",label:"New Mexico",value:"New Mexico"},{id:"33",label:"New York",value:"New York"},{id:"34",label:"North Carolina",value:"North Carolina"},{id:"35",label:"North Dakota",value:"North Dakota"},{id:"36",label:"Ohio",value:"Ohio"},{id:"37",label:"Oklahoma",value:"Oklahoma"},{id:"38",label:"Oregon",value:"Oregon"},{id:"39",label:"Pennsylvania",value:"Pennsylvania"},{id:"40",label:"Rhode Island",value:"Rhode Island"},{id:"41",label:"South Carolina",value:"South Carolina"},{id:"42",label:"South Dakota",value:"South Dakota"},{id:"43",label:"Tennessee",value:"Tennessee"},{id:"44",label:"Texas",value:"Texas"},{id:"45",label:"Utah",value:"Utah"},{id:"46",label:"Vermont",value:"Vermont"},{id:"47",label:"Virginia",value:"Virginia"},{id:"48",label:"Washington",value:"Washington"},{id:"49",label:"West Virginia",value:"West Virginia"},{id:"50",label:"Wisconsin",value:"Wisconsin"},{id:"51",label:"Wyoming",value:"Wyoming"}]}},{className:"grid-col-4",type:"select",key:"province",hideExpression:model=>"united_states"===this.model.country,props:{label:"State/Province",required:!0,options:[{id:"1",label:"Alberta",value:"Alberta"},{id:"2",label:"British Columbia",value:"British Columbia"},{id:"3",label:"Manitoba",value:"Manitoba"},{id:"4",label:"New Brunswick",value:"New Brunswick"},{id:"5",label:"Newfoundland and Labrador",value:"Newfoundland and Labrador"},{id:"6",label:"Nova Scotia",value:"Nova Scotia"},{id:"7",label:"Ontario",value:"Ontario"},{id:"8",label:"Prince Edward Island",value:"Prince Edward Island"},{id:"9",label:"Quebec",value:"Quebec"},{id:"10",label:"Saskatchewan",value:"Saskatchewan"}]}}]},{fieldGroupClassName:"grid-row",fieldGroup:[{className:"grid-col-4",type:"input",key:"congressional_district",hideExpression:model=>"canada"===this.model.country,props:{required:!0,label:"Congressional District"}}]},{fieldGroupClassName:"grid-row",fieldGroup:[{template:"<h3>Phone Number</h3> Your phone number is the primary number associated with your vendor"}]},{fieldGroupClassName:"grid-row grid-gap-2",fieldGroup:[{className:"grid-col-12 tablet:grid-col-4 desktop:grid-col-3",type:"input",key:"Code",props:{label:"Country Code",required:!0,type:"number",pattern:"\\d{3}",placeholder:"ex-123"}},{className:"grid-col-12 tablet:grid-col-7 desktop:grid-col-5",type:"input",key:"phone",props:{label:"Phone",required:!0,type:"number",pattern:"\\d{9}",placeholder:"ex-123456789"}},{className:"margin-bottom-0 grid-col-3 desktop:grid-col-4 display-none desktop:display-inline-block",type:"input",key:"extension",props:{label:"Extension",type:"number",pattern:"\\d{3}",placeholder:"ex-123"}}]},{className:" margin-top-(-1) grid-col-8 display-block desktop:display-none",type:"button",hideExpression:model=>this.model.showExtension,props:{type:"button",text:"Show Extension",btnType:"info",onClick:$event=>($event.preventDefault(),this.model.showExtension="show",!1)}},{className:"margin-top-(-1) grid-col-8 display-block desktop:display-none",type:"input",key:"extension1",hideExpression:model=>!this.model.showExtension,props:{label:"Extension",type:"number",max:99999,min:0,pattern:"\\d{3}",placeholder:"ex-123"}}]}submit(){}};FormlyFormsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-forms",template:'<div class="grid-container">\n  <div class="grid-row grip-gap bg-accent-cool-lighter flex-justify-center">\n    <div class="tablet:grid-col-9 grid-col-12 padding-x-4 margin-y-2 bg-white">\n      <form [formGroup]="form" (ngSubmit)="submit()">\n        <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n      </form>\n      <div class="margin-top-1">\n        <h4>Filter Model:</h4>\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  </div>\n</div>\n'})],FormlyFormsComponent);let FormlyFormsModule=class FormlyFormsModule{};FormlyFormsModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFormsComponent],exports:[FormlyFormsComponent],bootstrap:[FormlyFormsComponent]})],FormlyFormsModule);const formly_forms_stories={title:"Formly Examples/Address Form",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot(),FormlyFormsModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})]},AddressForm=args=>({template:"<sds-formly-forms></sds-formly-forms>",props:args});AddressForm.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/custom/formly-forms","FormlyFormsModule","sds-formly-forms")},AddressForm.parameters={...AddressForm.parameters,docs:{...AddressForm.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-forms></sds-formly-forms>',\n  props: args\n})",...AddressForm.parameters?.docs?.source}}};const __namedExportsOrder=["AddressForm"]}}]);