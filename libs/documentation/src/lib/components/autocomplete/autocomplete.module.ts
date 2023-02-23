import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AutocompleteBasicModule } from './demos/basic/autocomplete-basic.module';
import { AutocompleteBasic } from './demos/basic/autocomplete-basic.component';
import { AutocompleteGroup } from './demos/group/autocomplete-group.component';
import { AutocompleteGroupModule } from './demos/group/autocomplete-group.module';
import { AutocompleteSelectGroup } from './demos/selectgroup/autocomplete-selectgroup.component';
import { AutocompleteSelectGroupModule } from './demos/selectgroup/autocomplete-selectgroup.module';
import { AutocompleteTagmode } from './demos/tagmode/autocomplete-tagmode.component';
import { AutocompleteTagmodeModule } from './demos/tagmode/autocomplete-tagmode.module';
import { AutocompleteMinCharacterModule } from './demos/mincharacter/autocomplete-mincharacter.module';
import { AutocompleteMinCharacter } from './demos/mincharacter/autocomplete-mincharacter.component';
import { AutocompleteInputReadOnly } from './demos/inputreadonly/autocomplete-inputreadonly.component';
import { AutocompleteInputReadOnlyModule } from './demos/inputreadonly/autocomplete-inputreadonly.module';
import { AutocompleteFreeText } from './demos/freetext/autocomplete-freetext.component';
import { AutocompleteFreeTextModule } from './demos/freetext/autocomplete-freetext.module';
import { AutocompleteDisableModule } from './demos/disable/autocomplete-disable.module';
import { AutocompleteDisable } from './demos/disable/autocomplete-disable.component';
import { AutocompleteCustomTemplate } from './demos/customtemplate/autocomplete-customtemplate.component';
import { AutocompleteCustomTemplateModule } from './demos/customtemplate/autocomplete-customtemplate.module';
import { AutocompleteAriaLabelComponent } from './demos/aria-label/autocomplete-aria-label.component';
import { AutocompleteAriaLabelModule } from './demos/aria-label/autocomplete-aria-label.module';
import { Routes } from "@angular/router";

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Autocomplete',
    type: AutocompleteBasic,
    code: require('!!raw-loader!./demos/basic/autocomplete-basic.component'),
    markup: require('!!raw-loader!./demos/basic/autocomplete-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/autocomplete-basic.module'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/basic',
  },
  group: {
    title: 'Autocomplete with grouping',
    type: AutocompleteGroup,
    code: require('!!raw-loader!./demos/group/autocomplete-group.component'),
    markup: require('!!raw-loader!./demos/group/autocomplete-group.component.html'),
    module: require('!!raw-loader!./demos/group/autocomplete-group.module'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/group',
  },
  selectgroup: {
    title: 'Autocomplete Group as a label ',
    type: AutocompleteSelectGroup,
    code: require('!!raw-loader!./demos/selectgroup/autocomplete-selectgroup.component'),
    markup: require('!!raw-loader!./demos/selectgroup/autocomplete-selectgroup.component.html'),
    module: require('!!raw-loader!./demos/selectgroup/autocomplete-selectgroup.module'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/selectgroup',
  },
  tagmode: {
    title: 'Tagmode enabled on Autocomplete',
    type: AutocompleteTagmode,
    code: require('!!raw-loader!./demos/tagmode/autocomplete-tagmode.component'),
    module: require('!!raw-loader!./demos/tagmode/autocomplete-tagmode.module'),
    markup: require('!!raw-loader!./demos/tagmode/autocomplete-tagmode.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/tagmode',
  },
  mincharacter: {
    title: 'Minimum character count Autocomplete',
    type: AutocompleteMinCharacter,
    code: require('!!raw-loader!./demos/mincharacter/autocomplete-mincharacter.component'),
    module: require('!!raw-loader!./demos/mincharacter/autocomplete-mincharacter.module'),
    markup: require('!!raw-loader!./demos/mincharacter/autocomplete-mincharacter.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/mincharacter',
  },
  inputreadonly: {
    title: 'Autocomplete with input read only mode',
    type: AutocompleteInputReadOnly,
    code: require('!!raw-loader!./demos/inputreadonly/autocomplete-inputreadonly.component'),
    module: require('!!raw-loader!./demos/inputreadonly/autocomplete-inputreadonly.module'),
    markup: require('!!raw-loader!./demos/inputreadonly/autocomplete-inputreadonly.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/inputreadonly',
  },

  freetext: {
    title: 'Freetext Autocomplete',
    type: AutocompleteFreeText,
    code: require('!!raw-loader!./demos/freetext/autocomplete-freetext.component'),
    module: require('!!raw-loader!./demos/freetext/autocomplete-freetext.module'),
    markup: require('!!raw-loader!./demos/freetext/autocomplete-freetext.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/freetext',
  },
  disable: {
    title: 'Disable Autocomplete',
    type: AutocompleteDisable,
    code: require('!!raw-loader!./demos/disable/autocomplete-disable.component'),
    module: require('!!raw-loader!./demos/disable/autocomplete-disable.module'),
    markup: require('!!raw-loader!./demos/disable/autocomplete-disable.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/disable',
  },
  customtemplate: {
    title: 'Customtemplate Autocomplete',
    type: AutocompleteCustomTemplate,
    code: require('!!raw-loader!./demos/customtemplate/autocomplete-customtemplate.component'),
    module: require('!!raw-loader!./demos/customtemplate/autocomplete-customtemplate.module'),
    markup: require('!!raw-loader!./demos/customtemplate/autocomplete-customtemplate.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/customtemplate',
  },
  ariaLabel: {
    title: 'Aria Label Autocomplete',
    type: AutocompleteAriaLabelComponent,
    code: require('!!raw-loader!./demos/aria-label/autocomplete-aria-label.component'),
    module: require('!!raw-loader!./demos/aria-label/autocomplete-aria-label.module'),
    markup: require('!!raw-loader!./demos/aria-label/autocomplete-aria-label.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/aria-label',
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
          type: 'components',
          name: 'SDSAutocompleteComponent',
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
    AutocompleteGroupModule,
    AutocompleteSelectGroupModule,
    AutocompleteBasicModule,
    AutocompleteTagmodeModule,
    AutocompleteMinCharacterModule,
    AutocompleteInputReadOnlyModule,
    AutocompleteFreeTextModule,
    AutocompleteDisableModule,
    AutocompleteCustomTemplateModule,
    AutocompleteAriaLabelModule,
  ],
})
export class AutocompleteModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('autocomplete', DEMOS);
  }
}
