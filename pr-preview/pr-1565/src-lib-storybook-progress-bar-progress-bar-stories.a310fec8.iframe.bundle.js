"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[8486],{"./libs/documentation/src/lib/storybook/progress-bar/progress-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Configurable:()=>Configurable,Introduction:()=>Introduction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>progress_bar_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ProgressBarBasicComponent=class ProgressBarBasicComponent{};ProgressBarBasicComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-progress-bar-basic",template:'<sds-progress-bar [progress]="20"></sds-progress-bar>\n'})],ProgressBarBasicComponent);let ProgressBarBasicModule=class ProgressBarBasicModule{};ProgressBarBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.rB],exports:[ProgressBarBasicComponent],declarations:[ProgressBarBasicComponent],bootstrap:[ProgressBarBasicComponent]})],ProgressBarBasicModule);let ProgressBarIntroductionComponent=class ProgressBarIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};ProgressBarIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-progress-bar-introduction",template:"<p>\n  Progress bar is a component that provides functionality is a horizontal progress-bar for indicating progress and\n  activity.\n</p>\n"})],ProgressBarIntroductionComponent);let ProgressBarIntroductionModule=class ProgressBarIntroductionModule{};ProgressBarIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ProgressBarIntroductionComponent],exports:[ProgressBarIntroductionComponent],bootstrap:[ProgressBarIntroductionComponent]})],ProgressBarIntroductionModule);const progress_bar_stories={title:"Components/Progress Bar",component:src.u0,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.rB,ProgressBarBasicModule,ProgressBarIntroductionModule]})]},Configurable=({progress,topBorder})=>({template:'\n      <sds-progress-bar\n        [progress]="progress"\n        [topBorder]="topBorder"\n      ></sds-progress-bar>\n    ',props:{progress,topBorder}});Configurable.args={topBorder:!1,progress:10},Configurable.parameters={actions:{disable:!0},sdsCodePreview:{disable:!0}};const Basic=args=>({template:"<sds-progress-bar-basic></sds-progress-bar-basic>",props:args});Basic.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/progress-bar/progress-bar-basic","ProgressBarBasicModule","sds-progress-bar-basic"),stackblitzLink:(0,sandbox_utils.ft)("progress-bar","basic")};const Introduction=args=>({template:"<sds-progress-bar-introduction></sds-progress-bar-introduction>",props:args});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'({\n  progress,\n  topBorder\n}) => {\n  return {\n    template: `\n      <sds-progress-bar\n        [progress]="progress"\n        [topBorder]="topBorder"\n      ></sds-progress-bar>\n    `,\n    props: {\n      progress,\n      topBorder\n    }\n  };\n}',...Configurable.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-progress-bar-basic></sds-progress-bar-basic>`,\n  props: args\n})",...Basic.parameters?.docs?.source}}},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-progress-bar-introduction></sds-progress-bar-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}};const __namedExportsOrder=["Configurable","Basic","Introduction"]}}]);