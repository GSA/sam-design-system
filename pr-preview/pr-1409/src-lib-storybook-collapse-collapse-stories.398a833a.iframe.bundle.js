"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[1348],{"./libs/documentation/src/lib/storybook/collapse/collapse.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Introduction:()=>Introduction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>collapse_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CollapseBasicComponent=class CollapseBasicComponent{constructor(){this.isCollapsedContent=!0}};CollapseBasicComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-collapse-basic",template:'<div class="text-center">\n  <button\n    type="button"\n    class="usa-button text-center"\n    [attr.aria-expanded]="!isCollapsedContent"\n    aria-controls="collapseID"\n    (click)="isCollapsedContent = !isCollapsedContent"\n  >\n    Show / Hide Content\n  </button>\n</div>\n\n<span aria-live="polite">\n  <p id="collapseID" [sdsCollapse]="isCollapsedContent" class="bg-base-lighter margin-top-1 padding-2">\n    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.\n  </p>\n</span>\n'})],CollapseBasicComponent);let CollapseBasicModule=class CollapseBasicModule{};CollapseBasicModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.So],exports:[CollapseBasicComponent],declarations:[CollapseBasicComponent],bootstrap:[CollapseBasicComponent]})],CollapseBasicModule);let CollapseIntroductionComponent=class CollapseIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};CollapseIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-collapse-introduction",template:"<p>\n  Collapse is a directive that provides functionality to show and hide content by changing the value of a variable.\n</p>\n"})],CollapseIntroductionComponent);let CollapseIntroductionModule=class CollapseIntroductionModule{};CollapseIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[CollapseIntroductionComponent],exports:[CollapseIntroductionComponent],bootstrap:[CollapseIntroductionComponent]})],CollapseIntroductionModule);const collapse_stories={title:"Components/Collapse",component:src.Yk,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.So,CollapseBasicModule,CollapseIntroductionModule]})],argTypes:{collapsed:{control:"boolean"}}},Basic=args=>({template:"<sds-collapse-basic></sds-collapse-basic>",props:args});Basic.parameters={controls:{disable:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/collapse/collapse-basic","CollapseBasicModule","sds-collapse-basic"),stackblitzLink:(0,sandbox_utils.wX)("collapse","basic")};const Introduction=args=>({template:"<sds-collapse-introduction></sds-collapse-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0},actions:{disable:!0}};const __namedExportsOrder=["Introduction","Basic"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-collapse-introduction></sds-collapse-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-collapse-basic></sds-collapse-basic>`,\n  props: args\n})",...Basic.parameters?.docs?.source}}}}}]);