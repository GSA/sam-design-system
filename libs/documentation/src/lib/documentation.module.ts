import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DocumentationComponent } from './documentation.component';

import {
  ROUTES as TABLE_ROUTES,
  TableModule
} from './components/table/table.module';
import { DocumentationSharedModule } from './shared/docs-shared.module';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/table' },
  // { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  // { path: 'introduction', component: IntroductionComponent },
  // { path: 'layout', component: ResultsLayoutComponent },

  // Components
  { path: 'components', pathMatch: 'full', redirectTo: 'components/table' },
  // { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  // { path: 'components/header', children: HEADER_ROUTES },
  // { path: 'components/footer', children: FOOTER_ROUTES },
  // { path: 'components/subheader', children: SUBHEADER_ROUTES },
  // { path: 'components/dialog', children: DIALOG_ROUTES },
  // { path: 'components/download', children: DOWNLOAD_ROUTES },
  // { path: 'components/collapse', children: COLLAPSE_ROUTES },
  // { path: 'components/actions', children: ACTIONS_ROUTES },
  // { path: 'components/pagination', children: PAGINATION_ROUTES },
  // { path: 'components/sidenavigation', children: SIDE_NAVIGATION_ROUTES },
  // { path: 'components/result-list', children: RESULT_LIST_ROUTES },
  // { path: 'components/search', children: SEARCH_ROUTES },
  // { path: 'components/autocomplete', children: AUTOCOMPLETE_ROUTES },
  // { path: 'components/video', children: VIDEO_ROUTES },
  // { path: 'components/popup', children: POPUP_ROUTES },
  // { path: 'components/filters', children: FILTERS_ROUTES },

  // Formly
  // { path: 'components/input', children: INPUT_ROUTES },
  // { path: 'components/textarea', children: TEXT_AREA_ROUTES },
  // { path: 'components/checkbox', children: CHECKBOX_ROUTES },
  // { path: 'components/multicheckbox', children: MULTI_CHECKBOX_ROUTES },
  // { path: 'components/radio', children: RADIO_ROUTES },
  // { path: 'components/select', children: SELECT_ROUTES },
  // {
  //   path: 'components/formly-autocomplete',
  //   children: FORMLY_AUTOCOMPLETE_ROUTES
  // },
  // { path: 'components/formly-datepicker', children: FORMLY_DATEPICKER_ROUTES },
  // { path: 'components/text', children: TEXT_ROUTES },
  // { path: 'components/search-formly', children: SEARCH_FORMLY_ROUTES },

  // Wrappers
  // { path: 'components/form-field', children: FORM_FIELD_ROUTES },
  // { path: 'components/filterwrapper', children: FILTER_WRAPPER_ROUTES },
  // { path: 'components/accordionwrapper', children: ACCORDION_WRAPPER_ROUTES },
  // { path: 'components/group', children: GROUP_ROUTES },
  // { path: 'components/label', children: LABEL_ROUTES },
  // { path: 'components/description', children: DESCRIPTION_ROUTES },
  // { path: 'components/validation', children: VALIDATION_ROUTES },
  // { path: 'components/templateoptions', children: TEMPLATEOPTIONS_ROUTES },

  // Form Examples
  // { path: 'pages', pathMatch: 'full', redirectTo: 'pages/formly-form' },
  // { path: 'pages/formly-form', component: FormlyFormsComponent},
  // { path: 'pages/formly-conditional', component: FormlyConditionalComponent},

  // Material
  { path: 'components/table', children: TABLE_ROUTES },

  // Icons
  // { path: 'components/icons', children: ICONS_ROUTES }
];
@NgModule({
  imports: [
    CommonModule,
    DocumentationSharedModule,
    TableModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [OverviewComponent, DocumentationComponent],
  exports: [DocumentationComponent],
})
export class DocumentationModule {}
