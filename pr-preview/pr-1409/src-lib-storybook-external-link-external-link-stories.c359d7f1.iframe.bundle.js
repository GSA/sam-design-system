"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[4076],{"./libs/documentation/src/lib/storybook/external-link/external-link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,HideIcon:()=>HideIcon,Introduction:()=>Introduction,Target:()=>Target,__namedExportsOrder:()=>__namedExportsOrder,default:()=>external_link_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ExternalLinkHideIconComponent=class ExternalLinkHideIconComponent{};ExternalLinkHideIconComponent=(0,tslib_es6.gn)([(0,core.Component)({template:'<a class="usa-link" href="https://www.google.com" [hideIcon]="true">Google</a>\n',selector:"sds-external-link-hide-icon"})],ExternalLinkHideIconComponent);let ExternalLinkHideIconModule=class ExternalLinkHideIconModule{};ExternalLinkHideIconModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.JJ],declarations:[ExternalLinkHideIconComponent],exports:[ExternalLinkHideIconComponent],bootstrap:[ExternalLinkHideIconComponent]})],ExternalLinkHideIconModule);let ExternalLinkIntroductionComponent=class ExternalLinkIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};ExternalLinkIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-external-link-introduction",template:"<p>\n  External link directive adds an icon to clearly mark links that lead to external websites.\n</p>\n"})],ExternalLinkIntroductionComponent);let ExternalLinkIntroductionModule=class ExternalLinkIntroductionModule{};ExternalLinkIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ExternalLinkIntroductionComponent],exports:[ExternalLinkIntroductionComponent],bootstrap:[ExternalLinkIntroductionComponent]})],ExternalLinkIntroductionModule);let ExternalLinkTargetComponent=class ExternalLinkTargetComponent{};ExternalLinkTargetComponent=(0,tslib_es6.gn)([(0,core.Component)({template:'<a class="usa-link" href="https://www.google.com" target="_blank">Google</a>\n',selector:"sds-external-link-target"})],ExternalLinkTargetComponent);let ExternalLinkTargetModule=class ExternalLinkTargetModule{};ExternalLinkTargetModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.JJ],declarations:[ExternalLinkTargetComponent],exports:[ExternalLinkTargetComponent],bootstrap:[ExternalLinkTargetComponent]})],ExternalLinkTargetModule);const disable={table:{disable:!0}},external_link_stories={title:"Components/External Link",component:src.Vy,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.JJ,ExternalLinkTargetModule,ExternalLinkHideIconModule,ExternalLinkIntroductionModule]})],argTypes:{emailLinkKeyword:disable,hrefAttr:disable,internalLinks:disable,relAttr:disable,targetAttr:disable,_getAriaLabel:disable,createIcon:disable,ngOnChanges:disable}},Configurable=(args=>({template:'<a *ngIf="href" class="usa-link" href="{{href}}" [hideIcon]="hideIcon" target="{{target}}">{{href}}</a>',props:args})).bind({});Configurable.args={href:"https://Acquisition.gov",target:"_blank",hideIcon:!1},Configurable.parameters={actions:{disable:!0},preview:{disable:!0}};const Target=args=>({template:"<sds-external-link-target></sds-external-link-target>",props:args});Target.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/external-link/external-link-target","ButtonGroupBasicModule","sds-button-group-demo"),stackblitzLink:(0,sandbox_utils.wX)("external-link","external-link-target")};const HideIcon=args=>({template:"<sds-external-link-hide-icon></sds-external-link-hide-icon>",props:args});HideIcon.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/external-link/external-link-hide-icon","ButtonGroupBasicModule","sds-button-group-demo"),stackblitzLink:(0,sandbox_utils.wX)("external-link","external-link-hide-icon")};const Introduction=args=>({template:"<sds-external-link-introduction></sds-external-link-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:{disable:!0}};const __namedExportsOrder=["Introduction","Configurable","HideIcon","Target"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-external-link-introduction></sds-external-link-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'(args: ExternalLinkDirective) => ({\n  template: `<a *ngIf="href" class="usa-link" href="{{href}}" [hideIcon]="hideIcon" target="{{target}}">{{href}}</a>`,\n  props: args\n})',...Configurable.parameters?.docs?.source}}},HideIcon.parameters={...HideIcon.parameters,docs:{...HideIcon.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-external-link-hide-icon></sds-external-link-hide-icon>`,\n  props: args\n})",...HideIcon.parameters?.docs?.source}}},Target.parameters={...Target.parameters,docs:{...Target.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-external-link-target></sds-external-link-target>`,\n  props: args\n})",...Target.parameters?.docs?.source}}}}}]);