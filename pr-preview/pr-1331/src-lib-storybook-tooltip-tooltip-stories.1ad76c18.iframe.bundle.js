"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[7243],{"./libs/documentation/src/lib/storybook/tooltip/tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,Introduction:()=>Introduction,Position:()=>Position,SdsTooltip:()=>SdsTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tooltip_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TooltipConfigurableComponent=class TooltipConfigurableComponent{constructor(){this.position="top"}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={position:[{type:core.Input,args:["position"]}],tooltipContent:[{type:core.Input,args:["tooltipContent"]}]}};TooltipConfigurableComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tooltip-configurable",template:'<div style="margin: 2rem;">\n  <button class="usa-button usa-button--base" sdsTooltip="tooltipContent" [position]="position ? position : \'top\'">\n    Hover to Show Tooltip\n  </button>\n</div>\n'})],TooltipConfigurableComponent);var src=__webpack_require__("./libs/packages/components/src/index.ts");let TooltipConfigurableModule=class TooltipConfigurableModule{};TooltipConfigurableModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.ap],declarations:[TooltipConfigurableComponent],exports:[TooltipConfigurableComponent],bootstrap:[TooltipConfigurableComponent]})],TooltipConfigurableModule);let TooltipIntroductionComponent=class TooltipIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TooltipIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tooltip-introduction",template:'<p>\n  Tooltip allows additional information to be displayed when a user "focuses" on an element that this directive is\n  applied to.\n</p>\n'})],TooltipIntroductionComponent);let TooltipIntroductionModule=class TooltipIntroductionModule{};TooltipIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[TooltipIntroductionComponent],exports:[TooltipIntroductionComponent],bootstrap:[TooltipIntroductionComponent]})],TooltipIntroductionModule);let TooltipPositionComponent=class TooltipPositionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TooltipPositionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tooltip-position",template:'<div style="margin: 1rem; margin-left: 15rem;">\n  <button class="usa-button usa-button--base" [sdsTooltip]="\'Tooltip on left\'" [position]="\'left\'">\n    Tooltip on left\n  </button>\n  <button class="usa-button usa-button--base" [sdsTooltip]="\'Tooltip on top\'" [position]="\'top\'">\n    Tooltip on top\n  </button>\n  <button class="usa-button usa-button--base" [sdsTooltip]="\'Tooltip on bottom\'" [position]="\'bottom\'">\n    Tooltip on bottom\n  </button>\n  <button class="usa-button usa-button--base" [sdsTooltip]="\'Tooltip on right\'" [position]="\'right\'">\n    Tooltip on right\n  </button>\n</div>\n'})],TooltipPositionComponent);let TooltipPositionModule=class TooltipPositionModule{};TooltipPositionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.ap,src.ap],declarations:[TooltipPositionComponent],exports:[TooltipPositionComponent],bootstrap:[TooltipPositionComponent]})],TooltipPositionModule);let TooltipSdsTooltipComponent=class TooltipSdsTooltipComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TooltipSdsTooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tooltip-sdsTooltip",template:'<p>Content displayed in a tooltip can be a string.</p>\n<button [sdsTooltip]="\'Content\'" [position]="\'bottom\'" class="usa-button usa-button--base" tabindex="0">\n  String binding\n</button>\n\n<p>Content displayed in a tooltip can also be HTML elements</p>\n\n<ng-template #tipContent\n  ><p>Hello, <b>World</b>!</p></ng-template\n>\n<button\n  [sdsTooltip]="tipContent"\n  [position]="\'bottom\'"\n  class="usa-button usa-button--base"\n  tabindex="0"\n  triggers="hover:blur"\n>\n  HTML binding\n</button>\n'})],TooltipSdsTooltipComponent);let TooltipSdsTooltipModule=class TooltipSdsTooltipModule{};TooltipSdsTooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.ap],declarations:[TooltipSdsTooltipComponent],exports:[TooltipSdsTooltipComponent],bootstrap:[TooltipSdsTooltipComponent]})],TooltipSdsTooltipModule);const disable={table:{disable:!0}},tooltip_stories={title:"Components/Tooltip",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TooltipIntroductionModule,TooltipConfigurableModule,TooltipSdsTooltipModule,TooltipPositionModule]})],argTypes:{_sdsTooltip:disable,_tooltipShowing:disable,sdsTooltipDiv:disable,hideTooltip:disable,ngAfterViewInit:disable,onBlur:disable,onFocus:disable,onKeyUp:disable,onMouseEnter:disable,onMouseLeave:disable,showTooltip:disable,clearAndReplacePosition:disable,clearAndReplaceTooltipContent:disable,ngOnChanges:disable,position:{options:["top","bottom","left","right"],control:{type:"select"}}}},Introduction=args=>({template:"<sds-tooltip-introduction></sds-tooltip-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:{disable:!0}};const Configurable=args=>({template:"<sds-tooltip-configurable [position]=position [tooltipContent]=sdsTooltip></sds-tooltip-configurable>",props:args});Configurable.args={sdsTooltip:"tooltip content"},Configurable.parameters={actions:{disable:!0},preview:{disable:!0}};const Position=args=>({template:"<sds-tooltip-position></sds-tooltip-position>",props:args});Position.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tooltip/tooltip-position","TooltipPositionModule","sds-tooltip-position"),stackblitzLink:(0,sandbox_utils.wX)("tooltip","position")};const SdsTooltip=args=>({template:"<sds-tooltip-sdsTooltip></sds-tooltip-sdsTooltip>",props:args});SdsTooltip.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tooltip/tooltip-sdsTooltip","TooltipSdsTooltipModule","sds-tooltip-sdsTooltip"),stackblitzLink:(0,sandbox_utils.wX)("tooltip","sdsTooltip")};const __namedExportsOrder=["Introduction","Configurable","Position","SdsTooltip"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-tooltip-introduction></sds-tooltip-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-tooltip-configurable [position]=position [tooltipContent]=sdsTooltip></sds-tooltip-configurable>',\n  props: args\n})",...Configurable.parameters?.docs?.source}}},Position.parameters={...Position.parameters,docs:{...Position.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tooltip-position></sds-tooltip-position>`,\n  props: args\n})",...Position.parameters?.docs?.source}}},SdsTooltip.parameters={...SdsTooltip.parameters,docs:{...SdsTooltip.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tooltip-sdsTooltip></sds-tooltip-sdsTooltip>`,\n  props: args\n})",...SdsTooltip.parameters?.docs?.source}}}}}]);