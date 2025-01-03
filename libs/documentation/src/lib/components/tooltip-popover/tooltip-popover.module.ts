import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { PopupBasicModule } from './demos/basic/popup-basic.module';
import { PopupBasic } from './demos/basic/popup-basic.component';
import { TooltipBasic } from './demos/tooltip/tooltip-basic.component';
import { TooltipBasicModule } from './demos/tooltip/tooltip-basic.module';
import { PopoverLinkToSbComponent } from './demos/popover-link-to-sb/popover-link-to-sb.component';
import { PopoverLinkToSbModule } from './demos/popover-link-to-sb/popover-link-to-sb.module';
import { TooltipLinkToSbComponent } from './demos/tooltip-link-to-sb/tooltip-link-to-sb.component';
import { TooltipLinkToSbModule } from './demos/tooltip-link-to-sb/tooltip-link-to-sb.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Popover Demos',
    type: PopoverLinkToSbComponent,
    code: require('!!raw-loader!./demos/popover-link-to-sb/popover-link-to-sb.component'),
    module: require('!!raw-loader!./demos/popover-link-to-sb/popover-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/popover-link-to-sb/popover-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/popup/demos/popover-link-to-sb',
  },
  tooltipLinkToSb: {
    title: 'New Tooltip Demos',
    type: TooltipLinkToSbComponent,
    code: require('!!raw-loader!./demos/tooltip-link-to-sb/tooltip-link-to-sb.component'),
    module: require('!!raw-loader!./demos/tooltip-link-to-sb/tooltip-link-to-sb.module'),
    markup: require('!!raw-loader!./demos/tooltip-link-to-sb/tooltip-link-to-sb.component.html'),
    path: 'libs/documentation/src/lib/components/popup/demos/tooltip-link-to-sb',
  },
  tooltip: {
    title: 'Tooltip',
    type: TooltipBasic,
    code: require('!!raw-loader!./demos/tooltip/tooltip-basic.component'),
    module: require('!!raw-loader!./demos/tooltip/tooltip-basic.module'),
    markup: require('!!raw-loader!./demos/tooltip/tooltip-basic.component.html'),
    path: 'libs/documentation/src/lib/components/popup/demos/tooltip',
  },
  basic: {
    title: 'Popover',
    type: PopupBasic,
    code: require('!!raw-loader!./demos/basic/popup-basic.component'),
    module: require('!!raw-loader!./demos/basic/popup-basic.module'),
    markup: require('!!raw-loader!./demos/basic/popup-basic.component.html'),
    path: 'libs/documentation/src/lib/components/popup/demos/basic',
  },
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'directives',
          name: 'SdsPopupDirective',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    PopupBasicModule,
    TooltipBasicModule,
    PopoverLinkToSbModule,
    TooltipLinkToSbModule,
  ],
})
export class PopupModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('tooltip-popover', DEMOS);
  }
}
