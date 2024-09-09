import { IntroductionModule } from './pages/introduction/introduction.module';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { OverviewModule } from './pages/overview/overview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import * as _ from 'lodash-es';
import { IconModule, allIcons as sdsAllIcons, uswdsAllIcons } from '@gsa-sam/ngx-uswds-icons';

export const appendPrefix = (iconsObject: { [key: string]: string }, prefix: string): { [key: string]: string } => {
  const prefixedIconsObject = {};
  Object.keys(iconsObject).forEach((key) => {
    prefixedIconsObject[`${prefix}${_.upperFirst(key)}`] = iconsObject[key];
  });
  return prefixedIconsObject;
};

/* Layout / Components */

import { ROUTES as DIALOG_ROUTES, DialogModule } from './components/dialog/dialog.module';
import { ROUTES as ACCORDION_ROUTES, AccordionModule } from './components/accordion/accordion.module';
import { ROUTES as DOWNLOAD_ROUTES, DownloadModule } from './components/download/download.module';
import { ROUTES as COLLAPSE_ROUTES, CollapseModule } from './components/collapse/collapse.module';
import { ROUTES as ACTIONS_ROUTES, ActionsModule } from './components/actions/actions.module';
import { ROUTES as PAGINATION_ROUTES, PaginationModule } from './components/pagination/pagination.module';
import {
  ROUTES as SIDE_NAVIGATION_ROUTES,
  SideNavigationModule,
} from './components/sidenavigation/sidenavigation.module';
import { ROUTES as RESULT_LIST_ROUTES, ResultListModule } from './components/result-list/result-list.module';
import { ROUTES as SEARCH_ROUTES, SearchModule } from './components/search/search.module';
import { ROUTES as AUTOCOMPLETE_ROUTES, AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { ROUTES as VIDEO_ROUTES, VideoModule } from './components/video/video.module';
import { ROUTES as POPUP_ROUTES, PopupModule } from './components/tooltip-popover/tooltip-popover.module';
import { ROUTES as FILTERS_ROUTES, FiltersModule } from './components/filters/filters.module';

import {
  ROUTES as SELECTION_PANEL_ROUTES,
  SelectionPanelModule,
} from './components/selection-panel/selection-panel.module';
import { ROUTES as SLIDE_OUT_ROUTES, SlideOutModule } from './components/slide-out/slide-out.module';

import { ROUTES as TABS_ROUTES, TabsModule } from './components/tabs/tabs.module';

import { ROUTES as TREE_TABLE_ROUTES, TreeTableModule } from './components/tree-table/tree-table.module';

/* Form Types */
import { ROUTES as INPUT_ROUTES, InputModule } from './components/formly-input/input.module';
import { ROUTES as TEXT_AREA_ROUTES, TextAreaModule } from './components/formly-textarea/textarea.module';
import { ROUTES as CHECKBOX_ROUTES, CheckboxModule } from './components/formly-checkbox/checkbox.module';
import {
  ROUTES as MULTI_CHECKBOX_ROUTES,
  MultiCheckboxModule,
} from './components/formly-multicheckbox/multicheckbox.module';
import { ROUTES as RADIO_ROUTES, RadioModule } from './components/formly-radio/radio.module';
import { ROUTES as SELECT_ROUTES, SelectModule } from './components/formly-select/select.module';
import {
  ROUTES as FORMLY_AUTOCOMPLETE_ROUTES,
  FormlyAutocompleteModule,
} from './components/formly-autocomplete/autocomplete.module';
import { ROUTES as FORMLY_FILEINFO_ROUTES, FormlyFileInfoModule } from './components/formly-fileinfo/fileinfo.module';
import {
  ROUTES as FORMLY_DATEPICKER_ROUTES,
  FormlyDatepickerModule,
} from './components/formly-datepicker/datepicker.module';
import { ROUTES as TEXT_ROUTES, TextModule } from './components/text/text.module';
import { ROUTES as SEARCH_FORMLY_ROUTES, FormlySearchModule } from './components/formly-search/search.module';

import { ROUTES as FORMLY_STEPPER_ROUTES, StepperModule } from './components/formly-stepper/formly-stepper.module';

import { ROUTES as FORMLY_FILE_INPUT_ROUTES, FileInputModule } from './components/formly-file-input/file-input.module';

import { ROUTES as FORMLY_TABS_ROUTES, FormlyTabsModule } from './components/formly-tabs/formly-tabs.module';

import {
  ROUTES as FORMLY_RICH_TEXT_EDITOR_ROUTES,
  FormlyRichTextEditorModule,
} from './components/formly-rich-text-editor/formly-rich-text-editor.module';

import { ROUTES as TOASTS_ROUTES, ToastsModule } from './components/toasts/toasts.module';
/* Form Wrappers */

import { ROUTES as FORM_FIELD_ROUTES, FormFieldModule } from './components/form-field/form-field.module';
import { ROUTES as FILTER_WRAPPER_ROUTES, FilterWrapperModule } from './components/filterwrapper/filterwrapper.module';
import {
  ROUTES as ACCORDION_WRAPPER_ROUTES,
  AccordionWrapperModule,
} from './components/accordionwrapper/accordionwrapper.module';
import { ROUTES as GROUP_ROUTES, GroupWrappersModule } from './components/groupwrappers/groupwrappers.module';
import { ROUTES as LABEL_ROUTES, LabelWrapperModule } from './components/labelwrapper/labelwrapper.module';
import {
  ROUTES as DESCRIPTION_ROUTES,
  DescriptionWrapperModule,
} from './components/descriptionwrapper/descriptionwrapper.module';
import {
  ROUTES as VALIDATION_ROUTES,
  ValidationWrapperModule,
} from './components/validationwrapper/validationwrapper.module';
import {
  ROUTES as TEMPLATEOPTIONS_ROUTES,
  TemplateOptionsModule,
} from './components/templateoptions/templateoptions.module';
import { ROUTES as TABLE_ROUTES, TableModule } from './components/table/table.module';
import { ROUTES as BUTTON_GROUP_ROUTES, ButtonGroupModule } from './components/button-group/button-group.module';
import { ROUTES as READONLY_ROUTES, ReadonlyModule } from './components/formly-readonly/readonly.module';

/* Utilities */
import { ROUTES as ICONS_ROUTES, IconsModule } from './components/icons/icons.module';

import { ROUTES as EXTERNA_LINK_ROUTES, ExternalLinkModule } from './components/external-link/external-link.module';

import { ROUTES as EDITOR_ROUTES, EditorModule } from './components/formly-editor/formly-editor.module';

import { ROUTES as DATE_PIPE_ROUTES, DatePipeModule } from './components/date-pipe/date-pipe.module';

import { ROUTES as EXPIRES_ROUTES, ExpiresModule } from './components/expires/expires.module';

import { ROUTES as RICH_TEXT_ROUTES, RichTextModule } from './components/rich-text/rich-text.module';

import { DocumentationSharedModule } from './shared';
import { OverviewComponent } from './pages/overview/overview.component';
import { FormlyFormsModule } from './pages/formly-forms/formly-forms.module';
import { FormlyFormsComponent } from './pages/formly-forms/formly-forms.component';
import { FormlyConditionalModule } from './pages/formly-conditional/formly-conditional.module';
import { FormlyConditionalComponent } from './pages/formly-conditional/formly-conditional.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { RoadmapModule } from './pages/roadmap/roadmap.module';

declare var require: any;

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'introduction', component: IntroductionComponent },

  // Components
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },

  { path: 'components/dialog', children: DIALOG_ROUTES },
  { path: 'components/download', children: DOWNLOAD_ROUTES },
  { path: 'components/collapse', children: COLLAPSE_ROUTES },
  { path: 'components/actions', children: ACTIONS_ROUTES },
  { path: 'components/pagination', children: PAGINATION_ROUTES },
  { path: 'components/sidenavigation', children: SIDE_NAVIGATION_ROUTES },
  { path: 'components/result-list', children: RESULT_LIST_ROUTES },
  { path: 'components/search', children: SEARCH_ROUTES },
  { path: 'components/autocomplete', children: AUTOCOMPLETE_ROUTES },
  { path: 'components/video', children: VIDEO_ROUTES },
  { path: 'components/tooltip-popover', children: POPUP_ROUTES },
  { path: 'components/filters', children: FILTERS_ROUTES },
  { path: 'components/accordion', children: ACCORDION_ROUTES },
  { path: 'components/button-group', children: BUTTON_GROUP_ROUTES },
  { path: 'components/selection-panel', children: SELECTION_PANEL_ROUTES },
  { path: 'components/external-link', children: EXTERNA_LINK_ROUTES },
  { path: 'components/toasts', children: TOASTS_ROUTES },
  { path: 'components/tabs', children: TABS_ROUTES },
  { path: 'components/date-pipe', children: DATE_PIPE_ROUTES },
  { path: 'components/tree-table', children: TREE_TABLE_ROUTES },
  { path: 'components/slide-out', children: SLIDE_OUT_ROUTES },
  { path: 'components/expires', children: EXPIRES_ROUTES },
  { path: 'components/rich-text', children: RICH_TEXT_ROUTES },

  // Formly
  { path: 'components/formly-input', children: INPUT_ROUTES },
  { path: 'components/formly-textarea', children: TEXT_AREA_ROUTES },
  { path: 'components/formly-checkbox', children: CHECKBOX_ROUTES },
  { path: 'components/formly-multicheckbox', children: MULTI_CHECKBOX_ROUTES },
  { path: 'components/formly-radio', children: RADIO_ROUTES },
  { path: 'components/formly-rich-text-editor', children: FORMLY_RICH_TEXT_EDITOR_ROUTES },
  { path: 'components/formly-select', children: SELECT_ROUTES },
  { path: 'components/formly-stepper', children: FORMLY_STEPPER_ROUTES },

  { path: 'components/formly-file-input', children: FORMLY_FILE_INPUT_ROUTES },
  {
    path: 'components/formly-autocomplete',
    children: FORMLY_AUTOCOMPLETE_ROUTES,
  },
  {
    path: 'components/formly-fileinfo',
    children: FORMLY_FILEINFO_ROUTES,
  },
  { path: 'components/formly-datepicker', children: FORMLY_DATEPICKER_ROUTES },
  { path: 'components/text', children: TEXT_ROUTES },
  { path: 'components/formly-search', children: SEARCH_FORMLY_ROUTES },
  { path: 'components/formly-tabs', children: FORMLY_TABS_ROUTES },
  { path: 'components/editor', children: EDITOR_ROUTES },

  // Wrappers
  { path: 'components/form-field', children: FORM_FIELD_ROUTES },
  { path: 'components/filterwrapper', children: FILTER_WRAPPER_ROUTES },
  { path: 'components/accordionwrapper', children: ACCORDION_WRAPPER_ROUTES },
  { path: 'components/groupwrappers', children: GROUP_ROUTES },
  { path: 'components/labelwrapper', children: LABEL_ROUTES },
  { path: 'components/descriptionwrapper', children: DESCRIPTION_ROUTES },
  { path: 'components/validationwrapper', children: VALIDATION_ROUTES },
  { path: 'components/templateoptions', children: TEMPLATEOPTIONS_ROUTES },
  { path: 'components/formly-readonly', children: READONLY_ROUTES },

  // Form Examples
  { path: 'pages', pathMatch: 'full', redirectTo: 'pages/formly-form' },
  { path: 'pages/formly-form', component: FormlyFormsComponent },
  { path: 'pages/formly-conditional', component: FormlyConditionalComponent },

  // Material
  { path: 'components/table', children: TABLE_ROUTES },

  // Icons
  { path: 'components/icons', children: ICONS_ROUTES },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationSharedModule,
    RouterModule.forChild(ROUTES),
    DialogModule,
    CollapseModule,
    DownloadModule,
    ActionsModule,
    PaginationModule,
    SideNavigationModule,
    ResultListModule,
    SearchModule,
    AutocompleteModule,
    VideoModule,
    PopupModule,
    FiltersModule,
    AccordionModule,
    InputModule,
    OverviewModule,
    IntroductionModule,
    TextAreaModule,
    CheckboxModule,
    MultiCheckboxModule,
    RadioModule,
    SelectModule,
    FormlyAutocompleteModule,
    FormlyFileInfoModule,
    FormlyDatepickerModule,
    FormlySearchModule,
    TextModule,
    FormFieldModule,
    FilterWrapperModule,
    AccordionWrapperModule,
    GroupWrappersModule,
    LabelWrapperModule,
    DescriptionWrapperModule,
    ValidationWrapperModule,
    TemplateOptionsModule,
    TableModule,
    TabsModule,
    IconsModule,
    FormlyFormsModule,
    FormlyConditionalModule,
    ButtonGroupModule,
    SelectionPanelModule,
    ExternalLinkModule,
    ToastsModule,
    ReadonlyModule,
    RoadmapModule,
    SlideOutModule,
    DatePipeModule,
    StepperModule,
    EditorModule,
    FileInputModule,
    FormlyTabsModule,
    TreeTableModule,
    ExpiresModule,
    RichTextModule,
    FormlyRichTextEditorModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), appendPrefix(_.cloneDeep(sdsAllIcons), 'sds'), _.cloneDeep(uswdsAllIcons))
    ),
    IconModule,
  ],
})
export class DocumentationModule {}
