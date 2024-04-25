(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[4886],{"./libs/documentation/src/lib/storybook/slide-out/slide-out.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomTemplate:()=>CustomTemplate,Introduction:()=>Introduction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>slide_out_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SlideOutIntroductionComponent=class SlideOutIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};SlideOutIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-slide-out-introduction",template:"<p>The slide out provides a way to display additional data in a form other than a traditional dialog</p>\n"})],SlideOutIntroductionComponent);let SlideOutIntroductionModule=class SlideOutIntroductionModule{};SlideOutIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[SlideOutIntroductionComponent],bootstrap:[SlideOutIntroductionComponent],exports:[SlideOutIntroductionComponent]})],SlideOutIntroductionModule);var overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts");let SlideOutCustomTemplateComponent=class SlideOutCustomTemplateComponent{constructor(dialog,options){this.dialog=dialog,this.options=options}buttonClicked(){this.openedDialogRef?(this.openedDialogRef.close(),this.openedDialogRef=null):this.openedDialogRef=this.dialog.open(this.ref,{hasBackdrop:!1,slideOut:!0})}onCloseSlideOut(){this.openedDialogRef.close()}static#_=this.ctorParameters=()=>[{type:src.el},{type:overlay.Tv}];static#_2=this.propDecorators={ref:[{type:core.ViewChild,args:["templateRefCustom"]}]}};SlideOutCustomTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-slide-out-custom-template",template:'<button class="usa-button" (click)="buttonClicked()">Show/Hide Slide Out With Custom Template And Header</button>\n\n<ng-template #templateRefCustom>\n  <div class="container" role="dialog" aria-labelledby="slide-out-title" cdkTrapFocus>\n    <div class="header-custom-header">\n      <h2 id="slide-out-title">Custom Header</h2>\n      <button\n        sds-dialog-close\n        (click)="onCloseSlideOut()"\n        class="close-btn padding-bottom-1"\n        aria-label="Close Modal"\n      ></button>\n    </div>\n    <div class="content">\n      <div>\n        <p>B</p>\n        <hr />\n        <ul class="list">\n          <li class="result">\n            <a>Baby</a>\n          </li>\n          <li class="result">\n            <a>Backed</a>\n          </li>\n          <li class="result">\n            <a>Badger</a>\n          </li>\n          <li class="result">\n            <a>Bagpipes</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ng-template>\n'})],SlideOutCustomTemplateComponent);let SlideOutCustomTemplateModule=class SlideOutCustomTemplateModule{};SlideOutCustomTemplateModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[SlideOutCustomTemplateComponent],exports:[SlideOutCustomTemplateComponent],bootstrap:[SlideOutCustomTemplateComponent]})],SlideOutCustomTemplateModule);var template=__webpack_require__("!!./node_modules/raw-loader/dist/cjs.js!./storybook/slide-out/slide-out-basic/template.scss"),template_default=__webpack_require__.n(template);let SlideOutBasicComponent=class SlideOutBasicComponent{constructor(dialog,options){this.dialog=dialog,this.options=options}buttonClicked(){this.openedDialogRef?(this.openedDialogRef.close(),this.openedDialogRef=null):this.openedDialogRef=this.dialog.open(SlideOutTemplateComponent,{hasBackdrop:!1,slideOut:!0})}static#_=this.ctorParameters=()=>[{type:src.el},{type:overlay.Tv}]};SlideOutBasicComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-slide-out-basic",template:'<button class="usa-button" (click)="buttonClicked()">Show/Hide Slide Out</button>\n'})],SlideOutBasicComponent);let SlideOutTemplateComponent=class SlideOutTemplateComponent{constructor(){}static#_=this.ctorParameters=()=>[]};SlideOutTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-slide-out-template",template:'<div class="container" role="dialog" aria-labelledby="slide-out-title" cdkTrapFocus>\n  <div class="header">\n    <h1 id="slide-out-title">Header</h1>\n  </div>\n  <div class="content">\n    <div>\n      <h2>A</h2>\n      <hr />\n      <ul class="list">\n        <li class="result">\n          <a>Apple</a>\n        </li>\n        <li class="result">\n          <a>Ant</a>\n        </li>\n        <li class="result">\n          <a>Ardvark</a>\n        </li>\n        <li class="result">\n          <a>Ark</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n',styles:[template_default()]})],SlideOutTemplateComponent);let SlideOutBasicModule=class SlideOutBasicModule{};SlideOutBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.TU],declarations:[SlideOutBasicComponent],exports:[SlideOutBasicComponent],bootstrap:[SlideOutBasicComponent]})],SlideOutBasicModule);const slide_out_stories={title:"Components/Slide Out",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,SlideOutIntroductionModule,SlideOutCustomTemplateModule,SlideOutBasicModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})],argTypes:{}},Introduction=args=>({template:"<sds-slide-out-introduction></sds-slide-out-introduction>",props:{...args}});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Basic=args=>({template:"<sds-slide-out-basic></sds-slide-out-basic>",props:{...args}});Basic.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/slide-out/slide-out-basic","SlideOutBasicModule","sds-slide-out-basic",[(0,sandbox_utils.Pg)("storybook/slide-out/slide-out-basic/template.html","html",!1),(0,sandbox_utils.Pg)("storybook/slide-out/slide-out-basic/template.scss","scss",!1)]),stackblitzLink:(0,sandbox_utils.ft)("slide-out","basic")};const CustomTemplate=args=>({template:"<sds-slide-out-custom-template></sds-slide-out-custom-template>",props:{...args}});CustomTemplate.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/slide-out/slide-out-custom-template","SlideOutCustomTemplateModule","sds-slide-out-custom-template"),stackblitzLink:(0,sandbox_utils.ft)("slide-out","custom-template")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-slide-out-introduction></sds-slide-out-introduction>`,\n  props: {\n    ...args\n  }\n})",...Introduction.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-slide-out-basic></sds-slide-out-basic>`,\n  props: {\n    ...args\n  }\n})",...Basic.parameters?.docs?.source}}},CustomTemplate.parameters={...CustomTemplate.parameters,docs:{...CustomTemplate.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-slide-out-custom-template></sds-slide-out-custom-template>`,\n  props: {\n    ...args\n  }\n})",...CustomTemplate.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","Basic","CustomTemplate"]},"!!./node_modules/raw-loader/dist/cjs.js!./storybook/slide-out/slide-out-basic/template.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".container {\n  min-width: 600px;\n}\n.container .header-custom-header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: black 1px solid;\n  background-color: #2672de;\n  color: white !important;\n  padding: 24px 8px 24px 8px;\n}\n.container .header-custom-header h2 {\n  color: white;\n}\n.container .header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: black 1px solid;\n  margin-top: 1.3rem;\n  padding-left: 1rem;\n  padding-bottom: 0.5rem;\n}\n.container .content {\n  margin-top: 1rem;\n  padding: 0 1rem;\n}\n.container .content .list {\n  list-style-type: none;\n}\n.container .content .list .result > a {\n  text-decoration: none;\n}\n.container .content .list .result > a:hover {\n  text-decoration: underline;\n  color: #3f57a6;\n  cursor: pointer;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);