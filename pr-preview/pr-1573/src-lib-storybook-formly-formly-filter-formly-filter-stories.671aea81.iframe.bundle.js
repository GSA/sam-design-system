"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[6140],{"./libs/documentation/src/lib/storybook/formly/formly-filter/formly-filter.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionGroup:()=>AccordionGroup,Basic:()=>Basic,HideExpression:()=>HideExpression,Horizontal:()=>Horizontal,Introduction:()=>Introduction,Nested:()=>Nested,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_filter_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyFilterBasicComponent=class FormlyFilterBasicComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"filters",props:{label:"Entity Information",group:"panel"},fieldGroup:[{key:"entity.type",type:"select",props:{label:"Entity Type",description:"Select the entity type.",required:!0,options:[{label:"Contract Opportunities",value:"co"},{label:"Entity Information",value:"ei"},{label:"Assistance Listings",value:"al"},{label:"Contract Data",value:"cd"},{label:"Federal Hierarchy",value:"fh"},{label:"Wage Determination",value:"wd"}]}},{key:"multiple.default.entity.title",type:"input",props:{label:"Entity Name",placeholder:"eg: Acme Corporation",description:"Enter the name of your entity.",required:!0}}]}]}};FormlyFilterBasicComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-basic",template:'<div class="width-tablet">\n  <sds-filters [form]="form" [fields]="fields" [options]="options" [model]="model"></sds-filters>\n</div>\n'})],FormlyFilterBasicComponent);let FormlyFilterBasicModule=class FormlyFilterBasicModule{};FormlyFilterBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,src.IO,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFilterBasicComponent],exports:[FormlyFilterBasicComponent],bootstrap:[FormlyFilterBasicComponent]})],FormlyFilterBasicModule);let FormlyFilterSingleComponent=class FormlyFilterSingleComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"single.default.entity.title",type:"input",props:{label:"Entity Name",group:"panel",placeholder:"eg: Acme Corporation",description:"Enter the name of your entity.",required:!0}}]}};FormlyFilterSingleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-single",template:'<div class="width-tablet">\n  <sds-filters [form]="form" [fields]="fields" [options]="options" [model]="model"></sds-filters>\n</div>\n'})],FormlyFilterSingleComponent);let FormlyFilterSingleModule=class FormlyFilterSingleModule{};FormlyFilterSingleModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,src.IO,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFilterSingleComponent],bootstrap:[FormlyFilterSingleComponent],exports:[FormlyFilterSingleComponent]})],FormlyFilterSingleModule);let FormlyFilterIntroductionComponent=class FormlyFilterIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};FormlyFilterIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-introduction",template:"<p>\n  Formly filter provides an filter for text to formly forms. This filter supports a number of features to inform users\n  what sort of filter is expected.\n</p>\n\n<h2>Horizontal Filters 17.0.9</h2>\n<p>Below are a couple of possible changes to check after updating to 17.0.9</p>\n<h3>Field Labels Required</h3>\n<p>\n  Going forward each element of the fields array that is passed into formly must have a label to be displayed. This\n  label will be used to label the dropdown in the horizontal filters toolbar. If a label is not provided, the field will\n  not be shown within horizontal filters.\n</p>\n<p>\n  Below is a barebones example of the expected structure for a horizontal filter. Note that label <i>Status</i> is\n  provided within the props field of this FormlyFieldConfig\n</p>\n<code>\n  fields: FormlyFieldConfig&#91;&#93; = &#91;<br />\n  &emsp;&#123;<br />\n  &emsp;&emsp;key: 'status',<br />\n  &emsp;&emsp;type: 'multicheckbox',<br />\n  &emsp;&emsp;props: &#123;<br />\n  &emsp;&emsp;&emsp;label: 'Status',<br />\n  &emsp;&emsp;&emsp;options: &#91;<br />\n  &emsp;&emsp;&emsp;&emsp;&#123;<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;value: 'active',<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;label: 'Active',<br />\n  &emsp;&emsp;&emsp;&emsp;&#125;,<br />\n  &emsp;&emsp;&emsp;&emsp;&#123;<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;value: 'inactive',<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;label: 'Inactive',<br />\n  &emsp;&emsp;&emsp;&emsp;&#125;,<br />\n  &emsp;&emsp;&emsp;&emsp;&#123;<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;value: 'all',<br />\n  &emsp;&emsp;&emsp;&emsp;&emsp;label: 'All',<br />\n  &emsp;&emsp;&emsp;&emsp;&#125;,<br />\n  &emsp;&emsp;&emsp;&#93;,<br />\n  &emsp;&emsp;&#125;,<br />\n  &emsp;&#125;<br />\n  &#93;\n</code>\n<h3>OnInit Hook</h3>\n<p>\n  Previously the onInit hook could be attached to a field and would trigger as the horizontal filters component loaded\n  in. This is not the case anymore. The onInit hook will now trigger when the popover containing the field is opened,\n  rather than on page load. If some action needs to be taken on page load, please use an Angular lifecycle hook.\n</p>\n",preserveWhitespaces:!0})],FormlyFilterIntroductionComponent);let FormlyFilterIntroductionModule=class FormlyFilterIntroductionModule{};FormlyFilterIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[FormlyFilterIntroductionComponent],exports:[FormlyFilterIntroductionComponent],bootstrap:[FormlyFilterIntroductionComponent]})],FormlyFilterIntroductionModule);let FormlyFilterAccordionGroupComponent=class FormlyFilterAccordionGroupComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.sdsGroupAccordionMultipleControls=[{key:"filters",props:{label:"Entity Information",group:"accordion"},fieldGroup:[{key:"keyword",type:"input",props:{type:"text",label:"Unique Entity ID",tagText:"DUNS",tagClass:"sds-tag--info-purple",placeholder:"A123456"}},{key:"multiple.accordion.entity.title",type:"input",props:{label:"Entity Name",placeholder:"eg: Acme Corporation",description:"Enter the name of your entity.",required:!0}}]}],this.sdsGroupAccordionSingleControl=[{key:"single.accordion.entity.title",type:"input",props:{label:"Entity Name",group:"accordion",placeholder:"eg: Acme Corporation",description:"Enter the name of your entity.",required:!0}}]}};FormlyFilterAccordionGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-accordiongroup",template:'<div class="width-tablet">\n  <h3>Accordion Group</h3>\n  <p><code>group: \'accordion\'</code> is used for setting accordion wrapper for the form field in side sds-filters.</p>\n\n  <h4>Multiple Form Controls</h4>\n  <div class="sds-card--shadowed sds-card--bordered margin-top-2">\n    <div class="sds-card__content">\n      <h4 class="sds-card__title">Accordion</h4>\n      <sds-filters [form]="form" [fields]="sdsGroupAccordionMultipleControls" [model]="model"></sds-filters>\n    </div>\n  </div>\n\n  <h4>Single Form Control</h4>\n  <div class="sds-card--shadowed sds-card--bordered margin-top-2">\n    <div class="sds-card__content">\n      <h4 class="sds-card__title">Accordion</h4>\n      <sds-filters [form]="form" [fields]="sdsGroupAccordionSingleControl" [model]="model"></sds-filters>\n    </div>\n  </div>\n</div>\n'})],FormlyFilterAccordionGroupComponent);let FormlyFilterAccordionGroupModule=class FormlyFilterAccordionGroupModule{};FormlyFilterAccordionGroupModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,src.IO,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFilterAccordionGroupComponent],exports:[FormlyFilterAccordionGroupComponent],bootstrap:[FormlyFilterAccordionGroupComponent]})],FormlyFilterAccordionGroupModule);let FormlyFilterHideExpressionComponent=class FormlyFilterHideExpressionComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"location.country",type:"select",props:{label:"Select Country",description:"Select country.",required:!0,options:[{label:"United States of America",value:"USA"},{label:"Canada",value:"CA"},{label:"India",value:"IND"},{label:"Mexico",value:"MX"},{label:"United Kingdom",value:"UK"},{label:"Australia",value:"AUS"}]},hooks:{onChanges:field=>{field.form.controls.items1.valueChanges.subscribe((value=>{Object.keys(this.form.controls.location.controls).forEach((key=>{"country"!==key&&this.form.controls.location.controls[key].setValue("")}))}))}}},{key:"location.province",type:"select",props:{label:"Select province",description:"Select province.",required:!0,options:[{label:"Manitoba",value:"MB"},{label:"Newfoundland and Labrador",value:"NL"},{label:"Prince Edward Island",value:"PE"},{label:"Nova Scotia",value:"NS"},{label:"New Brunswick",value:"NB"},{label:"Quebec",value:"QC"},{label:"Ontario",value:"ON"},{label:"Saskatchewan",value:"SK"},{label:"Alberta",value:"AB"},{label:"Yukon",value:"YT"},{label:"Nunavut",value:"NU"}]},hideExpression:()=>!(this.model&&this.model.location&&this.model.location.country)||"CA"!==this.model.location.country},{key:"location.state",type:"input",props:{label:"State",description:"State",placeholder:"Illinois"},hideExpression:()=>!(this.model&&this.model.location&&this.model.location.country)||"CA"===this.model.location.country},{key:"location.city",type:"input",props:{label:"City",description:"City",placeholder:"Chicago"},hideExpression:()=>!(this.model&&this.model.location&&this.model.location.country&&(this.model.location.state||this.model.location.province&&"CA"===this.model.location.country))},{key:"location.street",type:"input",props:{label:"Street",hideOptional:!0,description:"Street"},hideExpression:()=>!(this.model&&this.model.location&&this.model.location.country&&(this.model.location.state||this.model.location.province&&"CA"===this.model.location.country)&&this.model.location.city)}]}};FormlyFilterHideExpressionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-hideexpression",template:'<div class="width-tablet">\n  <sds-filters [form]="form" [fields]="fields" [options]="options" [model]="model"></sds-filters>\n</div>\n'})],FormlyFilterHideExpressionComponent);let FormlyFilterHideExpressionModule=class FormlyFilterHideExpressionModule{};FormlyFilterHideExpressionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,src.IO,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFilterHideExpressionComponent],exports:[FormlyFilterHideExpressionComponent],bootstrap:[FormlyFilterHideExpressionComponent]})],FormlyFilterHideExpressionModule);const filterFields=[{key:"simpleSearch",type:"input",props:{label:"Keyword Search",description:'For more information on how to use our keyword search, visit our <a class="usa-link" aria-label="www.fsd.gov - opens in a new window" href="https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0045403" target="_blank"> help guide <span class="margin-left-1px usa-link--external font-body-md"></span></a>',hideOptional:!0}},{key:"otherDetails",props:{label:"Type of Contract",group:"accordion"},fieldGroup:[{key:"typeOfContract",hide:!1,type:"select",props:{label:"",hideOptional:!0,options:[{label:"A - Fixed Price Redetermination",value:"A"},{label:"B - Fixed Price Level of Effort",value:"B"},{label:"J - Firm Fixed Price",value:"J"},{label:"K - Fixed Price with Economic Price Adjustment",value:"K"},{label:"L - Fixed Price Incentive",value:"L"},{label:"M - Fixed Price Award Fee",value:"M"},{label:"R - Cost Plus Award Fee",value:"R"},{label:"S - Cost No Fee",value:"S"},{label:"T - Cost Sharing",value:"T"},{label:"U - Cost Plus Fixed Fee",value:"U"},{label:"V - Cost Plus Incentive Fee",value:"V"},{label:"Y - Time and Materials",value:"Y"},{label:"Z - Labor Hours",value:"Z"},{label:"1 - Order Dependent (IDV allows pricing arrangement to be determined separately for each order)",value:"1"}]}}]},{key:"referencedAwardIdentification",props:{label:"Referenced Award Identification",group:"accordion"},fieldGroup:[{key:"piid",hide:!1,type:"input",props:{label:"PIID",hideOptional:!0}},{key:"modificationNumber",hide:!1,type:"input",props:{label:"Modification Number",hideOptional:!0}}]},{key:"awardee",props:{label:"Awardee",group:"accordion"},fieldGroup:[{key:"awardeeIdentification",props:{label:"legal Awardee"},fieldGroup:[{key:"legalBusinessName",hide:!1,type:"input",props:{label:"Legal Business Name",hideOptional:!0}},{key:"doingBusinessAsName",hide:!1,type:"input",props:{label:"Doing Business As Name",hideOptional:!0}}]},{key:"ultimateParent",props:{label:"Ultimate Awardee"},fieldGroup:[{key:"legalBusinessName1",hide:!1,type:"input",props:{label:"Legal Business Name",hideOptional:!0}}]},{key:"awardeeBusinessCategory",props:{label:"Business Awardee"},fieldGroup:[{key:"organizationType",hide:!0,type:"input",props:{label:"Organization Type",hideOptional:!0}},{key:"businessType",hide:!0,type:"input",props:{label:"Business Type",hideOptional:!0}},{key:"organizationFactors",hide:!0,type:"input",props:{label:"Organization Factors",hideOptional:!0}},{key:"lineOfBusiness",hide:!0,type:"input",props:{label:"Line of Business",hideOptional:!0}},{key:"relationships",hide:!0,type:"input",props:{label:"Relationships with Federal Government (Purpose of Registration)",hideOptional:!0}},{key:"state",hide:!0,type:"input",props:{label:"State of incorporation",hideOptional:!0}},{key:"country",hide:!0,type:"input",props:{label:"Country of incorporation",hideOptional:!0}}]},{key:"awardeeSizeSelection",props:{label:"Size Awardee"},fieldGroup:[{key:"contractingOfficerBusiessSizeSelection",hide:!0,type:"select",props:{label:"Contracting Officer's Business Size Determination",hideOptional:!0,options:[{label:"S - Small Business",value:"s"},{label:"O - Other Than Small Business",value:"o"}]}},{key:"reasonNotAwardToSmallBusiness",hide:!0,type:"input",props:{label:"Reason Not Award to Small Business",hideOptional:!0}},{key:"reasonNotToAwardToSmallDisadvantagedBusiness",hide:!0,type:"input",props:{label:"Reason Not Award to Small Disadvantaged Business",hideOptional:!0}}]},{key:"awardeeOtherDetails",props:{label:"Other Awardee"},fieldGroup:[{key:"domesticOrForeignEntity",hide:!0,type:"select",props:{label:"Domestic or Foreign Entity",hideOptional:!0,options:[{label:"A - U.S. Owned Business",value:"A"},{label:"B - Other U.S. Entity (e.g. Government)",value:"B"},{label:"C - Foreign-Owned Business Incorporated in the U.S.",value:"C"},{label:"D - Foreign-Owned Business not Incorporated in the U.S.",value:"D"},{label:"O - Other Foreign Entity (e.g. Foreign Government)",value:"O"}]}},{key:"seaTransportation",hide:!0,type:"select",props:{label:"Sea Transportation",hideOptional:!0,options:[{label:"Y - Yes",value:"y"},{label:"N - No",value:"n"},{label:"U - Unknown",value:"u"}]}}]},{key:"awardIdentification",props:{label:"Identification Awardee"},fieldGroup:[{key:"piid",hide:!1,type:"input",props:{label:"PIID",hideOptional:!0}},{key:"modificationNumber",hide:!1,type:"input",props:{label:"Modification Number",hideOptional:!0}}]}]},{key:"financialFunding",props:{label:"Financial/Funding",group:"accordion"},fieldGroup:[{key:"financialFederalOrganizations",type:"input",props:{label:"Federal Organizations",hideOptional:!0,selectionType:"checkbox",countFieldLevel:2,inactiveToggle:!1,model:{},simpleResponse:!0}},{key:"actionObligations",group:"panel",hide:!1,props:{label:"Action Obligations"},fieldGroup:[{key:"actionObligationsSelect",type:"select",group:"panel",props:{label:"Action Obligations",placeholder:"Any amount",hideOptional:!0,options:[{label:"Under $1M",value:"under1"},{label:"$1M - $25M",value:"1to25"},{label:"$25M - $100M",value:"25to100"},{label:"$100M - $500M",value:"100to500"},{label:"$500M and above",value:"500above"},{label:"Specify Range",value:"range"}]}},{key:"actionObligationsMin",type:"input",modelOptions:{debounce:{default:2e3}},props:{label:"Min",hideOptional:!0}},{key:"actionObligationsMax",type:"input",modelOptions:{debounce:{default:2e3}},props:{label:"Max",required:!1,hideOptional:!0}}]},{key:"baseAndAllOptionsValue",hide:!0,type:"input",props:{label:"Base and All Options Value",hideOptional:!0}},{key:"totalEstimatedOrderValue",hide:!0,type:"input",props:{label:"Total Estimated Order Value",hideOptional:!0}},{key:"costOrPricingData",hide:!0,type:"select",props:{label:"Cost Or Pricing Data",hideOptional:!0,options:[{label:"No",value:"N"},{label:"Not Obtained - Waived",value:"W"},{label:"Yes",value:"Y"}]}},{key:"purchaseCardUsedAsPaymentMethod",hide:!0,type:"select",props:{label:"Purchase Card Used As Payment Method",hideOptional:!0,options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}},{key:"contractFinancing",hide:!0,type:"select",props:{label:"Contract Financing",hideOptional:!0,options:[{label:"Commercial Financial",value:"E"},{label:"FAR 52.232-16 Progress Payments",value:"A"},{label:"Not Applicable",value:"Z"},{label:"Percentage of Completion Progress Payments",value:"C"},{label:"Performance-Based Financing",value:"F"},{label:"Unusual Progress Payments or Advance Payments",value:"D"}]}},{key:"costAccountingStandardsClause",hide:!0,type:"select",props:{label:"Cost Accounting Standards Clause",hideOptional:!0,options:[{label:"Yes - CAS clause included",value:"Y"},{label:"No - CAS waiver approved",value:"N"},{label:"Not Applicable exempt from CAS",value:"X"}]}},{key:"foreignFunding",hide:!0,type:"select",props:{label:"Foreign Funding",hideOptional:!0,options:[{label:"Foreign Funds Foreign Military Sales",value:"Foreign Funds Foreign Military Sales"},{label:"Foreign Funds non-Foreign Military Sales",value:"Foreign non-Funds Foreign Military Sales"},{label:"Not Applicable",value:"Not Applicable"}]}}]},{key:"keyDates",props:{label:"Dates",group:"accordion"},fieldGroup:[{key:"dateSigned",hide:!1,group:"panel",props:{label:"Date Signed"},fieldGroup:[{key:"dateSignedSelect",type:"select",props:{hideOptional:!0,placeholder:"Anytime",options:[{label:"Next day",value:"next24"},{label:"Next 2 days",value:"next2days"},{label:"Next 3 days",value:"next3days"},{label:"Next week",value:"nextWeek"},{label:"Next month",value:"nextMonth"},{label:"Next 3 months",value:"next3Months"},{label:"Next year",value:"nextYear"},{label:"Custom date",value:"customDate"}],label:"Date Signed"}},{key:"dateSignedFrom",type:"datepicker",props:{hideOptional:!0,label:"From"},autoClear:!0},{key:"dateSignedTo",type:"datepicker",props:{hideOptional:!0,label:"To"}}]},{key:"completionDate",hide:!1,group:"panel",props:{label:"Completion Date"},fieldGroup:[{key:"completionDateSelect",type:"select",props:{hideOptional:!0,placeholder:"Anytime",options:[{label:"Next day",value:"next24"},{label:"Next 2 days",value:"next2days"},{label:"Next 3 days",value:"next3days"},{label:"Next week",value:"nextWeek"},{label:"Next month",value:"nextMonth"},{label:"Next 3 months",value:"next3Months"},{label:"Next year",value:"nextYear"},{label:"Custom date",value:"customDate"}],label:"Completion Date"}},{key:"completionDateFrom",type:"datepicker",props:{hideOptional:!0,label:"From"}},{key:"completionDateTo",type:"datepicker",props:{hideOptional:!0,label:"To"}}]},{key:"estimatedUltimateCompletionDate",hide:!1,group:"panel",props:{label:"Estimated Ultimate Completion Date"},fieldGroup:[{key:"estimatedUltimateCompletionDateSelect",type:"select",props:{hideOptional:!0,placeholder:"Anytime",options:[{label:"Next day",value:"next24"},{label:"Next 2 days",value:"next2days"},{label:"Next 3 days",value:"next3days"},{label:"Next week",value:"nextWeek"},{label:"Next month",value:"nextMonth"},{label:"Next 3 months",value:"next3Months"},{label:"Next year",value:"nextYear"},{label:"Custom date",value:"customDate"}],label:"Estimated Ultimate Completion Date"}},{key:"estimatedUltimateCompletionDateFrom",type:"datepicker",props:{hideOptional:!0,label:"From"}},{key:"estimatedUltimateCompletionDateTo",type:"datepicker",props:{hideOptional:!0,label:"To"}}]}]}];let FormlyFilterNestedComponent=class FormlyFilterNestedComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={title:"Acme Corporation"},this.options={},this.fields=filterFields,this.defaultModel={title:"All Entities"}}};FormlyFilterNestedComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-nested",template:'<div class="width-tablet">\n  <sds-filters [form]="form" [fields]="fields" [model]="model" [advancedFilters]="true" [defaultModel]="defaultModel">\n  </sds-filters>\n</div>\n'})],FormlyFilterNestedComponent);let FormlyFilterNestedModule=class FormlyFilterNestedModule{};FormlyFilterNestedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,src.IO,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFilterNestedComponent],exports:[FormlyFilterNestedComponent],bootstrap:[FormlyFilterNestedComponent]})],FormlyFilterNestedModule);let FormlyFilterHorizontalComponent=class FormlyFilterHorizontalComponent{constructor(){this.form=new fesm2022_forms.gE({}),this.model={},this.options={},this.fields=[{key:"status",type:"multicheckbox",props:{label:"Status",options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"all",label:"All"}]}},{key:"socioeconomic2",type:"multicheckbox",props:{label:"Socio-Economic Status",options:[{value:"vet",label:"Veteran Owned"},{value:"women",label:"Women Owned"},{value:"minority",label:"Minority Owned"}]}},{key:"dateRange",props:{label:"Date Range",autoClose:"false"},fieldGroup:[{key:"dateRangeSelect",type:"select",className:"display-block",props:{label:"Select Date",options:[{label:"Anytime",value:"anytime"},{label:"Past day",value:"pastDay"},{label:"Past Week",value:"pastWeek"},{label:"Custom Dates",value:"customDate"}],hideOptional:!0}},{key:"createdDate",type:"datepicker",className:"display-block",props:{label:"Created Date",minDate:new Date(2019,9,5),maxDate:new Date(2020,11,15),placeholder:"eg: "+(new Date).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),hideOptional:!0},hideExpression:model=>!model||!model.dateRangeSelect||"customDate"!=model.dateRangeSelect},{key:"expirationDate",type:"datepicker",className:"display-block",props:{label:"Expires Date",minDate:new Date(2019,9,5),maxDate:new Date(2020,11,15),placeholder:"eg: "+(new Date).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),hideOptional:!0},hideExpression:model=>!model||!model.dateRangeSelect||"customDate"!=model.dateRangeSelect}]},{key:"expirationDateRangeEx",type:"daterangepickerv2",hide:!0,props:{label:"Expiration Date Range",minDate:new Date(2019,9,5),maxDate:new Date(2020,11,15),placeholder:"eg: "+(new Date).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),hideOptional:!0}},{key:"entity",type:"input",hide:!0,props:{label:"Entity Name",placeholder:"eg: Acme Corporation",description:"Enter the name of your entity.",required:!0}}],this.searchModel={}}handleSubmit($event){console.log($event)}onSearchModelChange($event){console.log($event)}onFilterChange($event){console.log($event)}};FormlyFilterHorizontalComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-filter-horizontal",template:'<div class="sds-card--shadowed sds-card--bordered margin-bottom-2 bg-base-lighter padding-2 width-tablet-lg">\n  <h4 class="sds-card__title display-block margin-bottom-2">Horizontal Filters</h4>\n  <div class="sds-card__content">\n    <sds-filters\n      [advancedFilters]="true"\n      [fields]="fields"\n      [model]="model"\n      [horizontal]="true"\n      (filterChange)="onFilterChange($event)"\n    >\n      <sds-search\n        [searchSettings]="{ isSuffixSearchIcon: true, placeholder: \'Keyword\', ariaLabel: \'Keyword Search\' }"\n        [(ngModel)]="model.searchModel"\n        (ngModelChange)="onSearchModelChange($event)"\n      >\n      </sds-search>\n    </sds-filters>\n  </div>\n</div>\n\n<pre\n  >{{ model | json }}\n</pre>\n'})],FormlyFilterHorizontalComponent);var components_src=__webpack_require__("./libs/packages/components/src/index.ts");let FormlyFilterHorizontalModule=class FormlyFilterHorizontalModule{};FormlyFilterHorizontalModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.YN,src.IO,ngx_formly_core.qy.forRoot(),fesm2022_forms.X1,components_src.r2],declarations:[FormlyFilterHorizontalComponent],exports:[FormlyFilterHorizontalComponent],bootstrap:[FormlyFilterHorizontalComponent]})],FormlyFilterHorizontalModule);const props={table:{category:"template-options"}},formly_filter_stories={title:"Formly/Filter",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,FormlyFilterIntroductionModule,FormlyFilterAccordionGroupModule,FormlyFilterBasicModule,FormlyFilterSingleModule,FormlyFilterHorizontalModule,FormlyFilterNestedModule,FormlyFilterHideExpressionModule,FormlyFilterIntroductionModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),(0,core.importProvidersFrom)(ngx_formly_core.qy.forRoot())]})],argTypes:{label:props,placeholder:props,description:props,required:props,disabled:props,tooltipText:props}},Introduction=args=>({template:"<sds-formly-filter-introduction></sds-formly-filter-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const AccordionGroup=args=>({template:"<sds-formly-filter-accordiongroup></sds-formly-filter-accordiongroup>",props:args});AccordionGroup.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-accordiongroup","FormlyFilterAccordionGroupModule","sds-formly-filter-accordiongroup"),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","accordiongroup")};const Horizontal=args=>({template:"<sds-formly-filter-horizontal></sds-formly-filter-horizontal>",props:args});Horizontal.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-horizontal","FormlyFilterHorizontalModule","sds-formly-filter-horizontal"),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","horizontal")};const Basic=args=>({template:"<sds-formly-filter-basic></sds-formly-filter-basic>",props:args});Basic.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-basic","FormlyFilterBasicModule","sds-formly-filter-basic"),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","basic")};const Single=args=>({template:"<sds-formly-filter-single></sds-formly-filter-single>",props:args});Single.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-single","FormlyFilterSingleModule","sds-formly-filter-single"),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","single")};const Nested=args=>({template:"<sds-formly-filter-nested></sds-formly-filter-nested>",props:args});Nested.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-nested","FormlyFilterNestedModule","sds-formly-filter-nested",[(0,sandbox_utils.Pg)("storybook/formly/formly-filter/formly-filter-nested/fields.ts","ts",!1)]),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","nested")};const HideExpression=args=>({template:"<sds-formly-filter-hideexpression></sds-formly-filter-hideexpression>",props:args});HideExpression.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-filter/formly-filter-hideexpression","FormlyFilterHideExpressionModule","sds-formly-filter-hideexpression"),stackblitzLink:(0,sandbox_utils.ft)("formly-filter","hideexpression")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-introduction></sds-formly-filter-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},AccordionGroup.parameters={...AccordionGroup.parameters,docs:{...AccordionGroup.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-accordiongroup></sds-formly-filter-accordiongroup>',\n  props: args\n})",...AccordionGroup.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-horizontal></sds-formly-filter-horizontal>',\n  props: args\n})",...Horizontal.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-basic></sds-formly-filter-basic>',\n  props: args\n})",...Basic.parameters?.docs?.source}}},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-single></sds-formly-filter-single>',\n  props: args\n})",...Single.parameters?.docs?.source}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-nested></sds-formly-filter-nested>',\n  props: args\n})",...Nested.parameters?.docs?.source}}},HideExpression.parameters={...HideExpression.parameters,docs:{...HideExpression.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-filter-hideexpression></sds-formly-filter-hideexpression>',\n  props: args\n})",...HideExpression.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","AccordionGroup","Horizontal","Basic","Single","Nested","HideExpression"]}}]);