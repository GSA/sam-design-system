import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { IconsBasicModule } from './demos/basic/icons-basic.module';
import { IconsBasic } from './demos/basic/icons-basic.component';
import { IconsBootstrapModule } from './demos/bootstrap/icons-bootstrap.module';
import { IconsBootstrap } from './demos/bootstrap/icons-bootstrap.component';
import { IconsColoringModule } from './demos/coloring/icons-coloring.module';
import { IconsScalingModule } from './demos/scaling/icons-scaling.module';
import { IconsRotationModule } from './demos/rotation/icons-rotation.module';
import { IconsColoring } from './demos/coloring/icons-coloring.component';
import { IconsRotation } from './demos/rotation/icons-rotation.component';
import { IconsScaling } from './demos/scaling/icons-scaling.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { IconsStackingComponent } from './demos/stacking/icons-stacking.component';
import { IconsStackingModule } from './demos/stacking/icons-stacking.module';
import { IconSkewingComponent } from './demos/icon-skewing/icon-skewing.component';
import { IconSkewingModule } from './demos/icon-skewing/icon-skewing.module';
import { IconsUswdsModule } from './demos/uswds/icons-uswds.module';
import { IconsUswds } from './demos/uswds/icons-uswds.component';

declare var require: any;
const DEMOS = {
  coloring: {
    title: 'Coloring Icons',
    type: IconsColoring,
    code: require('!!raw-loader!./demos/coloring/icons-coloring.component'),
    module: require('!!raw-loader!./demos/coloring/icons-coloring.module'),
    markup: require('!!raw-loader!./demos/coloring/icons-coloring.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/coloring',
  },
  rotating: {
    title: 'Rotating Icons',
    type: IconsRotation,
    code: require('!!raw-loader!./demos/rotation/icons-rotation.component'),
    module: require('!!raw-loader!./demos/rotation/icons-rotation.module'),
    markup: require('!!raw-loader!./demos/rotation/icons-rotation.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/rotation',
  },
  scaling: {
    title: 'Sizing Icons',
    type: IconsScaling,
    code: require('!!raw-loader!./demos/scaling/icons-scaling.component'),
    module: require('!!raw-loader!./demos/scaling/icons-scaling.module'),
    markup: require('!!raw-loader!./demos/scaling/icons-scaling.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/scaling',
  },
  skewing: {
    title: 'Skewing Icons',
    type: IconSkewingComponent,
    code: require('!!raw-loader!./demos/icon-skewing/icon-skewing.component'),
    module: require('!!raw-loader!./demos/icon-skewing/icon-skewing.module'),
    markup: require('!!raw-loader!./demos/icon-skewing/icon-skewing.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/icon-skewing',
  },
  stacking: {
    title: 'Stacking Icons',
    type: IconsStackingComponent,
    code: require('!!raw-loader!./demos/stacking/icons-stacking.component'),
    module: require('!!raw-loader!./demos/stacking/icons-stacking.module'),
    markup: require('!!raw-loader!./demos/stacking/icons-stacking.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/stacking',
  },
  basic: {
    title: 'All Custom Icons',
    type: IconsBasic,
    code: require('!!raw-loader!./demos/basic/icons-basic.component'),
    module: require('!!raw-loader!./demos/basic/icons-basic.module'),
    markup: require('!!raw-loader!./demos/basic/icons-basic.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/basic',
  },
  bootstrap: {
    title: 'All Bootstrap Icons',
    type: IconsBootstrap,
    code: require('!!raw-loader!./demos/bootstrap/icons-bootstrap.component'),
    module: require('!!raw-loader!./demos/bootstrap/icons-bootstrap.module'),
    markup: require('!!raw-loader!./demos/bootstrap/icons-bootstrap.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/bootstrap',
  },
  uswds: {
    title: 'All USWDS Icons',
    type: IconsUswds,
    code: require('!!raw-loader!./demos/uswds/icons-uswds.component'),
    module: require('!!raw-loader!./demos/uswds/icons-uswds.module'),
    markup: require('!!raw-loader!./demos/uswds/icons-uswds.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/uswds',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsIconComponent',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    IconsBasicModule,
    IconsBootstrapModule,
    IconsColoringModule,
    IconsScalingModule,
    IconsRotationModule,
    IconsStackingModule,
    IconSkewingModule,
    IconsUswdsModule,
  ],
})
export class IconsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('icons', DEMOS);
  }
}
