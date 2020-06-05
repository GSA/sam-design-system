import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { VideoBasicModule } from './demos/basic/video-basic.module';
import { VideoBasic } from './demos/basic/video-basic.component';

declare var require: any;
export const closing = require('!!raw-loader!./closing.md');
const DEMOS = {
  basic: {
    title: 'Video Player',
    type: VideoBasic,
    code: require('!!raw-loader!./demos/basic/video-basic.component'),
    markup: require('!!raw-loader!./demos/basic/video-basic.component.html'),
    path: 'libs/documentation/src/lib/components/video/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      readme: {
        closing
      },
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsVideoPlayerComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    VideoBasicModule
  ]
})
export class VideoModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('video', DEMOS);
  }
}
