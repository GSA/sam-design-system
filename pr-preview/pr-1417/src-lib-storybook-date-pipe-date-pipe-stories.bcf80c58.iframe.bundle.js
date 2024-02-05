"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[7350],{"./libs/documentation/src/lib/storybook/date-pipe/date-pipe.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,CurrentDay:()=>CurrentDay,CurrentYear:()=>CurrentYear,Introduction:()=>Introduction,NonCurrentYear:()=>NonCurrentYear,__namedExportsOrder:()=>__namedExportsOrder,default:()=>date_pipe_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let DatePipeCurrentDayComponent=class DatePipeCurrentDayComponent{constructor(){this.today=Date.now()}};DatePipeCurrentDayComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-date-pipe-current-day",template:"<p>Input to sdsDate pipe: \"{{ today }}\"</p>\n<p>Input as date string: {{ today | date: 'medium' }}</p>\n<p>sdsDate pipe output: {{ today | sdsDate }}</p>\n"})],DatePipeCurrentDayComponent);let DatePipeCurrentDayModule=class DatePipeCurrentDayModule{};DatePipeCurrentDayModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.Hg],exports:[DatePipeCurrentDayComponent],declarations:[DatePipeCurrentDayComponent],bootstrap:[DatePipeCurrentDayComponent]})],DatePipeCurrentDayModule);let DatePipeCurrentYearComponent=class DatePipeCurrentYearComponent{constructor(){this.thisYear="";const now=new Date;this.thisYear=new Date(now.getFullYear(),0,1===now.getDate()?2:1).toLocaleString()}static#_=this.ctorParameters=()=>[]};DatePipeCurrentYearComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-date-pipe-current-year",template:'<p>Input to sdsDate pipe: "{{ thisYear }}"</p>\n<p>sdsDate pipe output: {{ thisYear | sdsDate }}</p>\n'})],DatePipeCurrentYearComponent);let DatePipeCurrentYearModule=class DatePipeCurrentYearModule{};DatePipeCurrentYearModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.Hg],exports:[DatePipeCurrentYearComponent],declarations:[DatePipeCurrentYearComponent],bootstrap:[DatePipeCurrentYearComponent]})],DatePipeCurrentYearModule);let DatePipeIntroductionComponent=class DatePipeIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};DatePipeIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-date-pipe-introduction",template:"<p>\n  Date pipe allows for a more concise view of a given date. Depending on the relation of the date provided compared to\n  today, the pipe will provide more information to allow users to know what date is being referenced.\n</p>\n"})],DatePipeIntroductionComponent);let DatePipeIntroductionModule=class DatePipeIntroductionModule{};DatePipeIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[DatePipeIntroductionComponent],exports:[DatePipeIntroductionComponent],bootstrap:[DatePipeIntroductionComponent]})],DatePipeIntroductionModule);let DatePipeNonCurrentYearComponent=class DatePipeNonCurrentYearComponent{constructor(){this.nonCurrentYear="";const now=new Date;this.nonCurrentYear=new Date(now.getFullYear()-1,0,1).toLocaleString()}static#_=this.ctorParameters=()=>[]};DatePipeNonCurrentYearComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-date-pipe-non-current-year",template:'<p>Input to sdsDate pipe: "{{ nonCurrentYear }}"</p>\n<p>sdsDate pipe output: {{ nonCurrentYear | sdsDate }}</p>\n'})],DatePipeNonCurrentYearComponent);let DatePipeNonCurrentYearModule=class DatePipeNonCurrentYearModule{};DatePipeNonCurrentYearModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.Hg],exports:[DatePipeNonCurrentYearComponent],declarations:[DatePipeNonCurrentYearComponent],bootstrap:[DatePipeNonCurrentYearComponent]})],DatePipeNonCurrentYearModule);const date_pipe_stories={title:"Components/Date Pipe",component:src.Ei,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.Hg,DatePipeCurrentDayModule,DatePipeCurrentYearModule,DatePipeNonCurrentYearModule,DatePipeIntroductionModule]})],argTypes:{transform:{table:{disable:!0}},today:{control:"date"}}},Configurable=(args=>({template:"\n    <p>{{ today | sdsDate }}</p>\n  ",props:args})).bind({});Configurable.args={today:Date.now()},Configurable.parameters={preview:{disable:!0},actions:{disable:!0}};const CurrentDay=args=>({template:"<sds-date-pipe-current-day></sds-date-pipe-current-day>",props:args});CurrentDay.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/date-pipe/date-pipe-current-day","DatePipeCurrentDayModule","sds-date-pipe-current-day"),stackblitzLink:(0,sandbox_utils.wX)("date-pipe","current-day")};const CurrentYear=args=>({template:"<sds-date-pipe-current-year></sds-date-pipe-current-year>",props:args});CurrentYear.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/date-pipe/date-pipe-current-year","DatePipeCurrentYearModule","sds-date-pipe-current-year"),stackblitzLink:(0,sandbox_utils.wX)("date-pipe","current-year")};const NonCurrentYear=args=>({template:"<sds-date-pipe-non-current-year></sds-date-pipe-non-current-year>",props:args});NonCurrentYear.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/date-pipe/date-pipe-non-current-year","DatePipePreviousYearModule","sds-date-pipe-non-current-year"),stackblitzLink:(0,sandbox_utils.wX)("date-pipe","non-current-year")};const Introduction=args=>({template:"<sds-date-pipe-introduction></sds-date-pipe-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:{disable:!0}};const __namedExportsOrder=["Introduction","Configurable","CurrentDay","CurrentYear","NonCurrentYear"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-date-pipe-introduction></sds-date-pipe-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:"args => ({\n  template: `\n    <p>{{ today | sdsDate }}</p>\n  `,\n  props: args\n})",...Configurable.parameters?.docs?.source}}},CurrentDay.parameters={...CurrentDay.parameters,docs:{...CurrentDay.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-date-pipe-current-day></sds-date-pipe-current-day>`,\n  props: args\n})",...CurrentDay.parameters?.docs?.source}}},CurrentYear.parameters={...CurrentYear.parameters,docs:{...CurrentYear.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-date-pipe-current-year></sds-date-pipe-current-year>`,\n  props: args\n})",...CurrentYear.parameters?.docs?.source}}},NonCurrentYear.parameters={...NonCurrentYear.parameters,docs:{...NonCurrentYear.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-date-pipe-non-current-year></sds-date-pipe-non-current-year>`,\n  props: args\n})",...NonCurrentYear.parameters?.docs?.source}}}}}]);