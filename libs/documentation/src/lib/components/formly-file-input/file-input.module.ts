import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { BasicFileInputComponent } from './demos/basic-file-input/basic-file-input.component';
import { BasicFileInputModule } from './demos/basic-file-input/basic-file-input.module';
import { TableFileInputModule } from './demos/table-file-input/table-file-input.module';
import { TableFileInputComponent } from './demos/table-file-input/table-file-input.component';
import { FileInputApiComponent } from './demos/file-input-api/file-input-api.component';
import { FileInputApiModule } from './demos/file-input-api/file-input-api.module';
import { FileInputValidationComponent } from './demos/file-input-validation/file-input-validation.component';
import { FileInputValidationModule } from './demos/file-input-validation/file-input-validation.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Simple File Input Examples',
    type: BasicFileInputComponent,
    code: require('!!raw-loader!./demos/basic-file-input/basic-file-input.component'),
    markup: require('!!raw-loader!./demos/basic-file-input/basic-file-input.component.html'),
    module: require('!!raw-loader!./demos/basic-file-input/basic-file-input.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-file-input/demos/basic-file-input',
  },
  table: {
    title: 'File Input Example with Table Display',
    type: TableFileInputComponent,
    code: require('!!raw-loader!./demos/table-file-input/table-file-input.component'),
    markup: require('!!raw-loader!./demos/table-file-input/table-file-input.component.html'),
    module: require('!!raw-loader!./demos/table-file-input/table-file-input.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-file-input/demos/table-file-input',
  },
  templateOptions: {
    title: 'File Input Template Options',
    type: FileInputApiComponent,
    code: require('!!raw-loader!./demos/file-input-api/file-input-api.component'),
    markup: require('!!raw-loader!./demos/file-input-api/file-input-api.component.html'),
    module: require('!!raw-loader!./demos/file-input-api/file-input-api.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-file-input/demos/file-input-api',
  },
  validations: {
    title: 'File Input Validations',
    type: FileInputValidationComponent,
    code: require('!!raw-loader!./demos/file-input-validation/file-input-validation.component'),
    markup: require('!!raw-loader!./demos/file-input-validation/file-input-validation.component.html'),
    module: require('!!raw-loader!./demos/file-input-validation/file-input-validation.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-file-input/demos/file-input-validation',
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldFileInput',
          formType: 'fileinput',
        }
      ]
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    BasicFileInputModule,
    TableFileInputModule,
    FileInputApiModule,
    FileInputValidationModule
  ]
})
export class FileInputModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-file-input', DEMOS);
  }
}
