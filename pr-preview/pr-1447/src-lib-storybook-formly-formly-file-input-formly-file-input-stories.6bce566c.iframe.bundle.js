"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[104],{"./libs/documentation/src/lib/storybook/formly/formly-file-input/formly-file-input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Custom:()=>Custom,Introduction:()=>Introduction,Options:()=>Options,Table:()=>Table,__namedExportsOrder:()=>__namedExportsOrder,default:()=>formly_file_input_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormlyFileinputIntroductionComponent=class FormlyFileinputIntroductionComponent{};FormlyFileinputIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-input-introduction",template:"<p>\n  The 'Formly File Input' component in the Sam Design System is a tool for managing file uploads in formly forms. It\n  facilitates user interactions with file selection and upload for users to submit files or documents.\n</p>\n"})],FormlyFileinputIntroductionComponent);let FormlyFileinputIntroductionModule=class FormlyFileinputIntroductionModule{};FormlyFileinputIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,ngx_formly_core.qy.forRoot()],declarations:[FormlyFileinputIntroductionComponent],exports:[FormlyFileinputIntroductionComponent],bootstrap:[FormlyFileinputIntroductionComponent]})],FormlyFileinputIntroductionModule);let FileInputApiComponent=class FileInputApiComponent{};FileInputApiComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-input-options",template:"<p>\n  Defined below are template options that are unique to file input formly type\n</p>\n<ul>\n  <li><code>multiple: boolean</code> - defines wheher or not the input accepts multiple files vs single file</li>\n  <li>\n    <code>acceptFileType: string</code> - comma separate string that defines which file types are allowed. If not\n    indicated, all files will be accepted\n  </li>\n  <li><code>disabled: boolean</code> - A disabled input field will not accept any files</li>\n  <li>\n    <code>clearFilesOnAdd: boolean</code> - This is applicable for multiple file input. Defines whether new file\n    additions should clear pre-added files or simply append to existing uploaded files. By default, when new files are\n    added, the list is cleared of pre-existing files and replaced with the new files. Switch this field to false if the\n    new files should append instead to list of pre-existing files\n  </li>\n  <li>\n    <code>displayFileInfo: boolean</code> - defines wheher or not to display added files in the file dropzone By\n    default, the files will be displayed. Switch this to false if you'd like the dropzone to always stay empty. This can\n    be useful if the application is creating a separate UI for displaying added files, such as a table\n  </li>\n</ul>\n"})],FileInputApiComponent);let FormlyFileInputOptionsModule=class FormlyFileInputOptionsModule{};FormlyFileInputOptionsModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[FileInputApiComponent],imports:[common.CommonModule],exports:[FileInputApiComponent],bootstrap:[FileInputApiComponent]})],FormlyFileInputOptionsModule);let BasicFileInputComponent=class BasicFileInputComponent{constructor(){this.fields=[{key:"basicFileInput",type:"fileinput",props:{label:"Basic File Input",description:"Accepts single file",hideOptional:!0,displayFileInfo:!0},validation:{messages:{fileSizeLimit:"File must be below 100 kb"}},validators:{fileSizeLimit:this.fileSizeLimitValidator}},{key:"multipleFilesInput",type:src.XW.FILEINPUT,props:{label:"Multiple File Input",description:"Accepts Multiple Files",multiple:!0,hideOptional:!0,displayFileInfo:!0}},{key:"limitFileType",type:src.XW.FILEINPUT,props:{label:"Enter Files Here",description:"Only PDF, CSV, or any image format files are allowed",multiple:!0,hideOptional:!0,displayFileInfo:!0,acceptFileType:".pdf,.csv,image/*"}}]}onModelChange($event){console.log("model",$event)}fileSizeLimitValidator(control){if(!control.value)return!0;let isValid=!0;return control.value.forEach((file=>{file.size>1e5&&(isValid=!1)})),isValid}};BasicFileInputComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-input-basic",template:'<formly-form [fields]="fields" (modelChange)="onModelChange($event)"></formly-form>\n'})],BasicFileInputComponent);let FormlyFileInputBasicModule=class FormlyFileInputBasicModule{};FormlyFileInputBasicModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[BasicFileInputComponent],imports:[common.CommonModule,src.qt,fesm2022_forms.X1,ngx_formly_core.qy.forRoot()],exports:[BasicFileInputComponent],bootstrap:[BasicFileInputComponent]})],FormlyFileInputBasicModule);let TableFileInputComponent=class TableFileInputComponent{constructor(){this.fields=[{key:"tableFilesInput",type:src.XW.FILEINPUT,props:{label:"Table File Input",description:"Accepts multiple files and displays in table",multiple:!0,hideOptional:!0,clearFilesOnAdd:!1,tableDisplay:!0,displayFileInfo:!1,required:!0,tableName:"Demo Table",noDataText:"No Attachments",tableColumns:[{label:"Attachment Name",columnName:"name",property:"name"},{label:"File Size (kB)",columnName:"size",textFn:file=>file.size/1e3},{label:"Virus Scan",columnName:"scan",property:"scan"},{label:"Action",columnName:"action",text:"Remove",onClick:this.removeFile.bind(this)}],acceptFileType:".bmp,.gif,.jpeg,.jpg,.tex,.xls,.xlsx,.doc,.docx,.docx,.odt,.txt,.pdf,.png,.pptx,.ppt,.rtf,.AVI,.mov,.mpg,.mpeg,.mp4,.wmv,.flv,.f4v"},validation:{messages:{fileSizeLimit:"File must be below 1 kb"}},validators:{fileSizeLimit:this.fileSizeLimitValidator}}],this.form=new fesm2022_forms.gE({})}onModelChange($event){const newFiles=$event.tableFilesInput.filter((file=>!file.scan));this.scanFiles(newFiles),console.log("model",$event)}scanFiles(newFiles){newFiles.forEach((file=>file.scan="Please Wait")),setTimeout((()=>{newFiles.forEach((file=>file.scan="Ready"))}),2e3)}removeFile(file,field){const tableFormGroup=field.formControl,newFiles=tableFormGroup.value.tableFilesInput.filter((value=>value!=file));tableFormGroup.get("tableFilesInput").setValue(newFiles)}submit(){}fileSizeLimitValidator(control){if(!control.value)return!0;let isValid=!0;return control.value.forEach((file=>{file.size>1e3&&(isValid=!1)})),isValid}};TableFileInputComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-input-table",template:'<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [fields]="fields" [form]="form" (modelChange)="onModelChange($event)"></formly-form>\n  <button type="submit">Submit</button>\n</form>\n'})],TableFileInputComponent);var sam_material_extensions_src=__webpack_require__("./libs/packages/sam-material-extensions/src/index.ts");let FormlyFileInputTableModule=class FormlyFileInputTableModule{};FormlyFileInputTableModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[TableFileInputComponent],imports:[common.CommonModule,src.qt,fesm2022_forms.X1,ngx_formly_core.qy.forRoot(),sam_material_extensions_src.RA],exports:[TableFileInputComponent],bootstrap:[TableFileInputComponent]})],FormlyFileInputTableModule);let formly_file_input_custom_component_TableFileInputComponent=class TableFileInputComponent{constructor(){this.fields=[{key:"customTableFilesInput",type:src.XW.FILEINPUT,props:{label:"Custom Table File Input",description:"Accepts multiple files and displays in table",multiple:!0,hideOptional:!0,clearFilesOnAdd:!1,tableDisplay:!0,displayFileInfo:!1,acceptFileType:".bmp,.gif,.jpeg,.jpg,.tex,.xls,.xlsx,.doc,.docx,.docx,.odt,.txt,.pdf,.png,.pptx,.ppt,.rtf,.AVI,.mov,.mpg,.mpeg,.mp4,.wmv,.flv,.f4v",template:null,tableName:"Demo Table",noDataText:"No Attachments",tableColumns:[{label:"Attachment Name",columnName:"name",property:"name"},{label:"File Size (kB)",columnName:"size",textFn:file=>file.size/1e3},{label:"Virus Scan",columnName:"scan",property:"scan"},{label:"Action",columnName:"action",text:"Remove",onClick:this.removeFile.bind(this)}]}}],this.form=new fesm2022_forms.gE({})}onModelChange($event){const newFiles=$event.customTableFilesInput.filter((file=>!file.scan));this.scanFiles(newFiles),console.log("model",$event)}scanFiles(newFiles){newFiles.forEach((file=>file.scan="Please Wait")),setTimeout((()=>{newFiles.forEach((file=>file.scan="Ready"))}),2e3)}removeFile(file,field){const tableFormGroup=field.formControl,newFiles=(Array.isArray(tableFormGroup.value)?tableFormGroup.value:tableFormGroup.value.tableFilesInput).filter((value=>value!=file));let fc;fc=tableFormGroup instanceof fesm2022_forms.gE?tableFormGroup.get("tableFilesInput"):tableFormGroup,fc.setValue(newFiles)}submit(){}fileSizeLimitValidator(control){if(!control.value)return!0;let isValid=!0;return control.value.forEach((file=>{file.size>1e3&&(isValid=!1)})),isValid}ngAfterViewInit(){this.fields[0].props.template=this.replacementTemplate}static#_=this.propDecorators={replacementTemplate:[{type:core.ViewChild,args:["replacementTemplate"]}]}};formly_file_input_custom_component_TableFileInputComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-formly-file-input-custom",template:'<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [fields]="fields" [form]="form" (modelChange)="onModelChange($event)"></formly-form>\n  <button type="submit">Submit</button>\n</form>\n\n<ng-template\n  #replacementTemplate\n  let-fields="fields"\n  let-props="fields[0].props"\n  let-form="form"\n  let-model="model"\n  let-modelChange="modelChange"\n>\n  <p>Custom</p>\n  <div>\n    <pre>{{ form.value | json }}</pre>\n  </div>\n</ng-template>\n'})],formly_file_input_custom_component_TableFileInputComponent);var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs");let FormlyFileInputCustomModule=class FormlyFileInputCustomModule{};FormlyFileInputCustomModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[formly_file_input_custom_component_TableFileInputComponent],imports:[common.CommonModule,src.qt,fesm2022_forms.X1,ngx_formly_core.qy.forRoot(),sam_material_extensions_src.RA,testing.c1],exports:[formly_file_input_custom_component_TableFileInputComponent],bootstrap:[formly_file_input_custom_component_TableFileInputComponent]})],FormlyFileInputCustomModule);const formly_file_input_stories={title:"Formly/Fileinput",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.X1,src.qt,fesm2022_forms.YN,FormlyFileinputIntroductionModule,FormlyFileInputOptionsModule,FormlyFileInputBasicModule,FormlyFileInputTableModule,FormlyFileInputCustomModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),(0,core.importProvidersFrom)(ngx_formly_core.qy.forRoot())]})]},Introduction=args=>({template:"<sds-formly-file-input-introduction></sds-formly-file-input-introduction>",props:args});Introduction.parameters={options:{showPanel:!1}};const Basic=args=>({template:"<sds-formly-file-input-basic></sds-formly-file-input-basic>",props:args});Basic.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-input/formly-file-input-basic","FormlyFileinputBasicModule","sds-formly-file-input-basic"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-input","basic")};const Options=args=>({template:"<sds-formly-file-input-options></sds-formly-file-input-options>",props:args});Options.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-input/formly-file-input-options","FormlyFileinputOptionsModule","sds-formly-file-input-template"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-input","options")};const Table=args=>({template:"<sds-formly-file-input-table></sds-formly-file-input-table>",props:args});Table.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-input/formly-file-input-table","FormlyFileinputTableModule","sds-formly-file-input-table"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-input","table")};const Custom=args=>({template:"<sds-formly-file-input-custom></sds-formly-file-input-custom>",props:args});Custom.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/formly/formly-file-input/formly-file-input-custom","FormlyFileinputCustomModule","sds-formly-file-input-custom"),stackblitzLink:(0,sandbox_utils.ft)("formly-file-input","custom")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-input-introduction></sds-formly-file-input-introduction>',\n  props: args\n})",...Introduction.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-input-basic></sds-formly-file-input-basic>',\n  props: args\n})",...Basic.parameters?.docs?.source}}},Options.parameters={...Options.parameters,docs:{...Options.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-input-options></sds-formly-file-input-options>',\n  props: args\n})",...Options.parameters?.docs?.source}}},Table.parameters={...Table.parameters,docs:{...Table.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-input-table></sds-formly-file-input-table>',\n  props: args\n})",...Table.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"args => ({\n  template: '<sds-formly-file-input-custom></sds-formly-file-input-custom>',\n  props: args\n})",...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","Basic","Options","Table","Custom"]}}]);