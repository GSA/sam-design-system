"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[4517],{"./libs/documentation/src/lib/storybook/rich-text-editor/rich-text-editor.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Introduction:()=>Introduction,MaxHeight:()=>MaxHeight,MinHeight:()=>MinHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>rich_text_editor_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let RichTextEditorMinHeightComponent=class RichTextEditorMinHeightComponent{constructor(){this.data="",this.fc=new fesm2022_forms.p4("<p>this is a test</p>")}};RichTextEditorMinHeightComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-rich-text-editor-min-height",template:'<div style="padding-top: 5rem;">\n  <sds-rich-text [formControl]="fc" [minHeight]="10"></sds-rich-text>\n\n  <p>Rich Text Editor Value: {{ fc.value }}</p>\n</div>\n'})],RichTextEditorMinHeightComponent);var src=__webpack_require__("./libs/packages/components/src/index.ts");let RichTextEditorMinHeightModule=class RichTextEditorMinHeightModule{};RichTextEditorMinHeightModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.qs,fesm2022_forms.u5,fesm2022_forms.UX],declarations:[RichTextEditorMinHeightComponent],exports:[RichTextEditorMinHeightComponent],bootstrap:[RichTextEditorMinHeightComponent]})],RichTextEditorMinHeightModule);let RichTextEditorMaxHeightComponent=class RichTextEditorMaxHeightComponent{constructor(){this.data="",this.fc=new fesm2022_forms.p4("<p>this is a test</p>")}};RichTextEditorMaxHeightComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-rich-text-editor-max-height",template:'<div style="padding-top: 5rem;">\n  <sds-rich-text [formControl]="fc" [maxHeight]="6"></sds-rich-text>\n\n  <p>Rich Text Editor Value: {{ fc.value }}</p>\n</div>\n'})],RichTextEditorMaxHeightComponent);let RichTextEditorMaxHeightModule=class RichTextEditorMaxHeightModule{};RichTextEditorMaxHeightModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.qs,fesm2022_forms.u5,fesm2022_forms.UX],declarations:[RichTextEditorMaxHeightComponent],bootstrap:[RichTextEditorMaxHeightComponent],exports:[RichTextEditorMaxHeightComponent]})],RichTextEditorMaxHeightModule);let RichTextEditorIntroductionComponent=class RichTextEditorIntroductionComponent{};RichTextEditorIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-rich-text-editor-introduction",template:"<b>Inputs</b>\n<p>\n  <code>minHeight:</code>number <i>(Optional)</i> - Minimum height in rems that the editor can be. If text entered by\n  the user expands beyond the bottom of the editor, the editor will expand to display all text. This value is expected\n  to be an positive integer. The minimum value is 4 which will provide enough room for a single paragraph line to\n  appear. The maximum value is 31 which is large enough to allow for 10 lines of h1 text.\n</p>\n\n<p>\n  <code>maxHeight:</code>number <i>(Optional)</i> - Maximum height in rems that the editor can be. If text entered by\n  the user expands beyond the bottom of the editor, the editor will not expand further and a scrolling within the editor\n  will be enabled. This value is expected to be an positive integer. The minimum value is 4 which will provide enough\n  room for a single paragraph line to appear. The maximum value is 31 which is large enough to allow for 10 lines of h1\n  text.\n</p>\n\n<p>\n  The rich text editor component can be passed a formControl for use in reactive forms. Subscribing to\n  <code>valueChanges</code> allows developers to get updates as users change value of the rich text editor.\n</p>\n"})],RichTextEditorIntroductionComponent);let RichTextEditorIntroductionModule=class RichTextEditorIntroductionModule{};RichTextEditorIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[RichTextEditorIntroductionComponent],exports:[RichTextEditorIntroductionComponent],bootstrap:[RichTextEditorIntroductionComponent]})],RichTextEditorIntroductionModule);const rich_text_editor_stories={title:"Components/Rich-Text-Editor",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,RichTextEditorMinHeightModule,RichTextEditorMaxHeightModule,RichTextEditorIntroductionModule]})]},Introduction=args=>({template:"<sds-rich-text-editor-introduction></sds-rich-text-editor-introduction>",props:args});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:{disable:!0}};const MinHeight=args=>({template:"<sds-rich-text-editor-min-height></sds-rich-text-editor-min-height>",props:{...args}});MinHeight.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/rich-text-editor/rich-text-editor-min-height","RichTextEditorMinHeightModule","sds-rich-text-editor-min-height"),stackblitzLink:(0,sandbox_utils.wX)("rich-text-editor","min-height")};const MaxHeight=args=>({template:"<sds-rich-text-editor-max-height></sds-rich-text-editor-max-height>",props:{...args}});MaxHeight.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/rich-text-editor/rich-text-editor-max-height","RichTextEditorMaxHeightModule","sds-rich-text-editor-max-height"),stackblitzLink:(0,sandbox_utils.wX)("rich-text-editor","max-height")};const __namedExportsOrder=["Introduction","MaxHeight","MinHeight"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-rich-text-editor-introduction></sds-rich-text-editor-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},MaxHeight.parameters={...MaxHeight.parameters,docs:{...MaxHeight.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-rich-text-editor-max-height></sds-rich-text-editor-max-height>`,\n  props: {\n    ...args\n  }\n})",...MaxHeight.parameters?.docs?.source}}},MinHeight.parameters={...MinHeight.parameters,docs:{...MinHeight.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-rich-text-editor-min-height></sds-rich-text-editor-min-height>`,\n  props: {\n    ...args\n  }\n})",...MinHeight.parameters?.docs?.source}}}}}]);