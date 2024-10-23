"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[248],{"./libs/documentation/src/lib/storybook/search/search.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,Dropdown:()=>Dropdown,Introduction:()=>Introduction,Overview:()=>Overview,Placeholder:()=>Placeholder,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>search_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SearchSizeComponent=class SearchSizeComponent{constructor(){this.searchSettings={placeholder:"eg: Acme Corporation",size:"small"},this.largeSearchSettings={placeholder:"eg: Acme Corporation",size:"large"}}};SearchSizeComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<sds-search [searchSettings]="searchSettings"></sds-search>\n<br />\n<sds-search [searchSettings]="largeSearchSettings"></sds-search>\n',selector:"sds-search-size"})],SearchSizeComponent);let SearchSizeModule=class SearchSizeModule{};SearchSizeModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.r2,fesm2022_forms.YN,fesm2022_forms.X1],declarations:[SearchSizeComponent],exports:[SearchSizeComponent],bootstrap:[SearchSizeComponent]})],SearchSizeModule);let SearchPlaceholderComponent=class SearchPlaceholderComponent{constructor(){this.searchSettings={placeholder:"Custom Placeholder"}}};SearchPlaceholderComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<sds-search [searchSettings]="searchSettings"></sds-search>\n',selector:"sds-search-placeholder"})],SearchPlaceholderComponent);let SearchPlaceholderModule=class SearchPlaceholderModule{};SearchPlaceholderModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.r2,fesm2022_forms.YN,fesm2022_forms.X1],declarations:[SearchPlaceholderComponent],exports:[SearchPlaceholderComponent],bootstrap:[SearchPlaceholderComponent]})],SearchPlaceholderModule);var sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts");let SearchDropdownComponent=class SearchDropdownComponent{constructor(){this.searchSettings={placeholder:"eg: Acme Corporation",dropdown:{id:"ddSearchOptions",options:[{value:"-",label:"--Select--"},{value:"1",label:"One With Long Text"},{value:"2",label:"Two"},{value:"3",label:"Three"}]}}}};SearchDropdownComponent=(0,tslib_es6.Cg)([(0,core.Component)({template:'<sds-search [searchSettings]="searchSettings"></sds-search>\n',selector:"sds-search-dropdown"})],SearchDropdownComponent);let SearchDropdownModule=class SearchDropdownModule{};SearchDropdownModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.r2,fesm2022_forms.YN,fesm2022_forms.X1],declarations:[SearchDropdownComponent],exports:[SearchDropdownComponent],bootstrap:[SearchDropdownComponent]})],SearchDropdownModule);let SearchIntroductionComponent=class SearchIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};SearchIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-search-introduction",template:"<p>\n  Search component is a text input field combined with a button to allow for users to trigger a search.\n</p>\n"})],SearchIntroductionComponent);let SearchIntroductionModule=class SearchIntroductionModule{};SearchIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[SearchIntroductionComponent],exports:[SearchIntroductionComponent],bootstrap:[SearchIntroductionComponent]})],SearchIntroductionModule);let SearchOverviewComponent=class SearchOverviewComponent{};SearchOverviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-search-overview",template:'<div>\n  <p>\n    An output <code>(submit)</code> has been added to search which emits when the user clicks submit. The value of the\n    event contains the current state of the model when the user clicks submit.\n  </p>\n  <div class="settings-documentation">\n    Search Settings:\n    <p><code>placeholder</code> - text to serve as a placeholder in search input</p>\n    <p><code>isSuffixSearchIcon</code> - boolean value is used for suffix the search icon</p>\n    <p><code>size</code> - size of the search, defaults to small</p>\n    <p><code>inputClass</code> - string of classes to be applied to search input</p>\n    <p><code>parentSelector</code> - css selector of the element containing search component</p>\n    <div>\n      <code>dropdown</code> - dropdown settings object\n      <p><code>placeholder</code> - default option text, defaults to "-Select-" if nothing provided</p>\n      <p><code>options</code> - options to be displayed in dropdown, should array of key value pairs</p>\n      <p><code>inverse</code> - boolean option to invert color scheme of dropdown</p>\n    </div>\n  </div>\n</div>\n'})],SearchOverviewComponent);let SearchOverviewModule=class SearchOverviewModule{};SearchOverviewModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[SearchOverviewComponent],exports:[SearchOverviewComponent],bootstrap:[SearchOverviewComponent]})],SearchOverviewModule);const disable={table:{disable:!0}},search_stories={title:"Components/Search",component:src.g6,decorators:[(0,dist.moduleMetadata)({declarations:[],imports:[common.CommonModule,src.r2,fesm2022_forms.YN,fesm2022_forms.X1,SearchSizeModule,SearchPlaceholderModule,SearchDropdownModule,SearchIntroductionModule,SearchOverviewModule]})],argTypes:{onSubmit:{action:"onSubmit",table:{disable:!0}},modelChange:{action:"modelChange",table:{disable:!0}},inputState:disable,model:disable,onChange:disable,onTouched:disable,submit:disable,calculateInputWidth:disable,clearInput:disable,focusChange:disable,getClass:disable,handleClick:disable,hasDropdown:disable,isInputVisible:disable,ngAfterViewInit:disable,registerOnChange:disable,registerOnTouched:disable,removeInputVisibleStyles:disable,setInputVisibleStyles:disable,writeValue:disable,writeValueToModel:disable,buttonEl:disable,inputEl:disable,selectEl:disable,searchSettings:disable,placeholder:{description:"",table:{category:"searchSettings"}},isSuffixSearchIcon:{description:"",table:{category:"searchSettings"}},size:{control:{options:["small","large"],type:"select"},description:"",table:{category:"searchSettings"}},inputClass:{description:"",table:{category:"searchSettings"}},parentSelector:{description:"",table:{category:"searchSettings"}},id:{description:"",table:{category:"searchSettings"}},ariaLabel:{description:"",table:{category:"searchSettings"}}}},Configurable=args=>{const{placeholder,isSuffixSearchIcon,size,inputClass,parentSelector,id,ariaLabel}=args,settings=((placeholder,isSuffixSearchIcon,size,inputClass,parentSelector,id,ariaLabel)=>{const toReturn=new src.ig;return toReturn.placeholder=placeholder??"Search",toReturn.isSuffixSearchIcon=isSuffixSearchIcon??!1,toReturn.size=size,toReturn.inputClass=inputClass,toReturn.parentSelector=parentSelector,toReturn.id=id,toReturn.ariaLabel=ariaLabel??"Search",toReturn})(placeholder,isSuffixSearchIcon,size,inputClass,parentSelector,id,ariaLabel);return{template:'\n    <sds-search [(ngModel)]="model" (submit)="onSubmit($event)" (ngModelChange)="modelChange($event)" [searchSettings]="settings"\n  ></sds-search>\n    <pre>Model: {{model | json}}</pre>\n  ',props:{onSubmit:args.onSubmit,modelChange:args.modelChange,searchSettings:args.searchSettings,model:args.model,settings}}};Configurable.args={searchSettings:{placeholder:"eg: Acme Corporation",isSuffixSearchIcon:!1,size:"small",inputClass:"",parentSeletor:"",id:"searchBasic",ariaLabel:"Basic Search"},placeholder:"",isSuffixSearchIcon:!1,size:"",inputClass:"",parentSelector:"",id:"",ariaLabel:"",model:{}},Configurable.parameters={sdsCodePreview:{disable:!0}};const Size=args=>({template:"<sds-search-size></sds-search-size>",props:args});Size.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/search/search-size","ButtonGroupBasicModule","sds-button-group-demo"),stackblitzLink:(0,sandbox_utils.ft)("search","size")};const Placeholder=args=>({template:"<sds-search-placeholder></sds-search-placeholder>",props:args});Placeholder.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/search/search-placeholder","ButtonGroupBasicModule","sds-button-group-demo"),stackblitzLink:(0,sandbox_utils.ft)("search","placeholder")};const Dropdown=args=>({template:"<sds-search-dropdown></sds-search-dropdown>",props:args});Dropdown.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/search/search-dropdown","ButtonGroupBasicModule","sds-button-group-demo"),stackblitzLink:(0,sandbox_utils.ft)("search","dropdown")};const Overview=args=>({template:"<sds-search-overview></sds-search-overview>",props:args});Overview.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Introduction=args=>({template:"<sds-search-introduction></sds-search-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:"args => {\n  const {\n    placeholder,\n    isSuffixSearchIcon,\n    size,\n    inputClass,\n    parentSelector,\n    id,\n    ariaLabel\n  } = args;\n  const settings = searchSettingsFunction(placeholder, isSuffixSearchIcon, size, inputClass, parentSelector, id, ariaLabel);\n  return {\n    template: `\n    <sds-search [(ngModel)]=\"model\" (submit)=\"onSubmit($event)\" (ngModelChange)=\"modelChange($event)\" [searchSettings]=\"settings\"\n  ></sds-search>\n    <pre>Model: {{model | json}}</pre>\n  `,\n    props: {\n      // ...args\n      // Must do as destructive args leads to props such as onChange not being found.\n      onSubmit: args['onSubmit'],\n      modelChange: args['modelChange'],\n      searchSettings: args['searchSettings'],\n      model: args['model'],\n      settings: settings\n    }\n  };\n}",...Configurable.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-search-size></sds-search-size>`,\n  props: args\n})",...Size.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-search-placeholder></sds-search-placeholder>`,\n  props: args\n})",...Placeholder.parameters?.docs?.source}}},Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-search-dropdown></sds-search-dropdown>`,\n  props: args\n})",...Dropdown.parameters?.docs?.source}}},Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-search-overview></sds-search-overview>',\n  props: args\n})",...Overview.parameters?.docs?.source}}},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-search-introduction></sds-search-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}};const __namedExportsOrder=["Configurable","Size","Placeholder","Dropdown","Overview","Introduction"]}}]);