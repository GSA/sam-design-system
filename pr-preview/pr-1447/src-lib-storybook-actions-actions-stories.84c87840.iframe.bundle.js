(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[5914],{"./libs/documentation/src/lib/storybook/actions/actions.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Configurable:()=>Configurable,Introduction:()=>Introduction,Label:()=>Label,ModelTrigger:()=>ModelTrigger,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>actions_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ActionsIntroductionComponent=class ActionsIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};ActionsIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-actions-introduction",template:"<p>Actions component provides a compact trigger for a menu of options.</p>\n"})],ActionsIntroductionComponent);let ActionsIntroductionModule=class ActionsIntroductionModule{};ActionsIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[ActionsIntroductionComponent],exports:[ActionsIntroductionComponent],bootstrap:[ActionsIntroductionComponent]})],ActionsIntroductionModule);let ActionsLabelComponent=class ActionsLabelComponent{constructor(){this.menu={label:"More",trigger:{type:"plain",shadow:!0},actions:[{id:"DownloadBtn",text:"Download"},{id:"FollowBtn",text:"Follow"},{id:"ShareBtn",text:"Share"}]}}static#_=this.ctorParameters=()=>[]};ActionsLabelComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-actions-label",template:'<p>Normal Menu</p>\n<sds-actions-menu [model]="menu" [screenReaderText]="\'Open Default Actions Menu\'"></sds-actions-menu>\n\n<p>Disable Action Menu</p>\n<sds-actions-menu\n  [model]="menu"\n  [disabled]="\'true\'"\n  [screenReaderText]="\'Open Default Actions Menu\'"\n></sds-actions-menu>\n'})],ActionsLabelComponent);let ActionsLabelModule=class ActionsLabelModule{};ActionsLabelModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.T5],declarations:[ActionsLabelComponent],exports:[ActionsLabelComponent],bootstrap:[ActionsLabelComponent]})],ActionsLabelModule);var actions_model_trigger_component=__webpack_require__("!!./node_modules/raw-loader/dist/cjs.js!./storybook/actions/actions-model-trigger/actions-model-trigger.component.scss"),actions_model_trigger_component_default=__webpack_require__.n(actions_model_trigger_component);let ActionsModelTriggerComponent=class ActionsModelTriggerComponent{constructor(){const baseMenu={trigger:{type:"plain",shadow:!0},actions:[{id:"DownloadBtn",text:"Download"},{id:"FollowBtn",text:"Follow"},{id:"ShareBtn",text:"Share"}]};this.primaryTriggerWithShadow=Object.assign({},baseMenu,{trigger:{type:"primary",shadow:!0}}),this.primaryTriggerWithoutShadow=Object.assign({},baseMenu,{trigger:{type:"primary",shadow:!1}}),this.plainTriggerWithShadow=Object.assign({},baseMenu,{trigger:{type:"plain",shadow:!0}}),this.plainTriggerWithoutShadow=Object.assign({},baseMenu,{trigger:{type:"plain",shadow:!1}})}static#_=this.ctorParameters=()=>[]};ActionsModelTriggerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-actions-model-trigger",template:'<div class="display-flex">\n  <div>\n    <p>\n      <code\n        >menu.trigger.type = \'primary\'<br />\n        menu.trigger.shadow = true\n      </code>\n    </p>\n    <sds-actions-menu\n      [model]="primaryTriggerWithShadow"\n      [screenReaderText]="\'Open Default Actions Menu\'"\n    ></sds-actions-menu>\n  </div>\n  <div class="padding-left-2">\n    <p>\n      <code\n        >menu.trigger.type = \'primary\'<br />\n        menu.trigger.shadow = false\n      </code>\n    </p>\n    <sds-actions-menu\n      [model]="primaryTriggerWithoutShadow"\n      [screenReaderText]="\'Open Default Actions Menu\'"\n    ></sds-actions-menu>\n  </div>\n</div>\n\n<div class="display-flex padding-top-4">\n  <div>\n    <p>\n      <code\n        >menu.trigger.type = \'\'<br />\n        menu.trigger.shadow = true\n      </code>\n    </p>\n    <sds-actions-menu\n      [model]="plainTriggerWithShadow"\n      [screenReaderText]="\'Open Default Actions Menu\'"\n    ></sds-actions-menu>\n  </div>\n  <div class="padding-left-2">\n    <p>\n      <code\n        >menu.trigger.type = \'\'<br />\n        menu.trigger.shadow = false\n      </code>\n    </p>\n    <sds-actions-menu\n      [model]="plainTriggerWithoutShadow"\n      [screenReaderText]="\'Open Default Actions Menu\'"\n    ></sds-actions-menu>\n  </div>\n</div>\n',preserveWhitespaces:!0,styles:[actions_model_trigger_component_default()]})],ActionsModelTriggerComponent);let ActionsModelTriggerModule=class ActionsModelTriggerModule{};ActionsModelTriggerModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.T5],declarations:[ActionsModelTriggerComponent],exports:[ActionsModelTriggerComponent],bootstrap:[ActionsModelTriggerComponent]})],ActionsModelTriggerModule);let ActionsSizeComponent=class ActionsSizeComponent{constructor(){this.menu={trigger:{type:"plain",shadow:!0},actions:[{id:"DownloadBtn",text:"Download"},{id:"FollowBtn",text:"Follow"},{id:"ShareBtn",text:"Share"}]}}static#_=this.ctorParameters=()=>[]};ActionsSizeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-actions-size",template:'<p>Normal Menu</p>\n<sds-actions-menu [model]="menu" [screenReaderText]="\'Open Default Actions Menu\'"></sds-actions-menu>\n\n<p>Small Menu</p>\n<sds-actions-menu [model]="menu" [size]="\'sm\'" [screenReaderText]="\'Open Default Actions Menu\'"></sds-actions-menu>\n'})],ActionsSizeComponent);let ActionsSizeModule=class ActionsSizeModule{};ActionsSizeModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.T5],declarations:[ActionsSizeComponent],exports:[ActionsSizeComponent],bootstrap:[ActionsSizeComponent]})],ActionsSizeModule);const disable={table:{disable:!0}},actions_stories={title:"Components/Actions Menu",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.T5,src.gf,ActionsSizeModule,ActionsLabelModule,ActionsModelTriggerModule,ActionsIntroductionModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})],argTypes:{actionModes:disable,model:disable,clicks:disable,getDisabled:disable,ngOnInit:disable,size:{options:["","sm"],control:"select"},type:{options:["plain","primary"],control:"select",description:"",table:{category:"ActionMenuModel/trigger"}},shadow:{control:{type:"boolean"},description:"",table:{category:"ActionMenuModel/trigger"}},label:{control:{type:"text"},table:{category:"ActionMenuModel"}},actions:{control:"array",table:{category:"ActionMenuModel/actions"}}}},Configurable=({type,shadow,actions,size,label,...rest})=>{const menu=((type,shadow,actions,label)=>({label:label??"",trigger:{type:type??"plain",shadow:shadow??!0},actions:actions??[{id:"DownloadBtn",text:"Download"},{id:"FollowBtn",text:"Follow"},{id:"ShareBtn",text:"Share"}]}))(type,shadow,actions,label);return{template:'\n      <sds-actions-menu\n        [model]="menu"\n        [size]="size"\n        [screenReaderText]="screenReaderText"\n      ></sds-actions-menu>\n    ',props:{menu,size,actions,rest}}};Configurable.args={model:{},actions:[{id:"DownloadBtn",text:"Download"},{id:"FollowBtn",text:"Follow"},{id:"ShareBtn",text:"Share"}]},Configurable.parameters={actions:{disable:!0},sdsCodePreview:{disable:!0}};const Size=args=>({template:"<sds-actions-size></sds-actions-size>",props:args});Size.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/actions/actions-size","ActionsSizeModule","sds-actions-size"),stackblitzLink:(0,sandbox_utils.ft)("actions","size")};const Label=args=>({template:"<sds-actions-label></sds-actions-label>",props:args});Label.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/actions/actions-label","ActionsLabelModule","sds-actions-label"),stackblitzLink:(0,sandbox_utils.ft)("actions","label")};const ModelTrigger=args=>({template:"<sds-actions-model-trigger></sds-actions-model-trigger>",props:args});ModelTrigger.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/actions/actions-model-trigger","ActionsModelTriggerModule","sds-actions-model-trigger"),stackblitzLink:(0,sandbox_utils.ft)("actions","model-trigger")};const Introduction=args=>({template:"<sds-actions-introduction></sds-actions-introduction>",props:args});Introduction.parameters={options:{showPanel:!1}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:'({\n  type,\n  shadow,\n  actions,\n  size,\n  label,\n  ...rest\n}) => {\n  const menu = actionsMenuModalFunction(type, shadow, actions, label);\n  return {\n    template: `\n      <sds-actions-menu\n        [model]="menu"\n        [size]="size"\n        [screenReaderText]="screenReaderText"\n      ></sds-actions-menu>\n    `,\n    props: {\n      menu,\n      size,\n      actions,\n      rest\n    }\n  };\n}',...Configurable.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-actions-size></sds-actions-size>',\n  props: args\n})",...Size.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-actions-label></sds-actions-label>',\n  props: args\n})",...Label.parameters?.docs?.source}}},ModelTrigger.parameters={...ModelTrigger.parameters,docs:{...ModelTrigger.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-actions-model-trigger></sds-actions-model-trigger>',\n  props: args\n})",...ModelTrigger.parameters?.docs?.source}}},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-actions-introduction></sds-actions-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}};const __namedExportsOrder=["Configurable","Size","Label","ModelTrigger","Introduction"]},"!!./node_modules/raw-loader/dist/cjs.js!./storybook/actions/actions-model-trigger/actions-model-trigger.component.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"::ng-deep code ::before {\n  margin-left: -0.4rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);