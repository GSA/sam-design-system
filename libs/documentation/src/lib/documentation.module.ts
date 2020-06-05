import { IntroductionModule } from './pages/introduction/introduction.module';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { OverviewModule } from './pages/overview/overview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

/* Layout / Components */
import { ROUTES as HEADER_ROUTES, HeaderModule } from './components/header/header.module';
import { ROUTES as FOOTER_ROUTES, FooterModule } from './components/footer/footer.module';
import { ROUTES as SUBHEADER_ROUTES, SubHeaderModule } from './components/subheader/subheader.module';
import { ROUTES as DIALOG_ROUTES, DialogModule } from './components/dialog/dialog.module';
import { ROUTES as COLLAPSE_ROUTES, CollapseModule } from './components/collapse/collapse.module';
import { ROUTES as ACTIONS_ROUTES, ActionsModule } from './components/actions/actions.module';
import { ROUTES as PAGINATION_ROUTES, PaginationModule } from './components/pagination/pagination.module';
import { ROUTES as SIDE_NAVIGATION_ROUTES, SideNavigationModule } from './components/sidenavigation/sidenavigation.module';
import { ROUTES as RESULT_LIST_ROUTES, ResultListModule } from './components/result-list/result-list.module';
import { ROUTES as SEARCH_ROUTES, SearchModule } from './components/search/search.module';
import { ROUTES as AUTOCOMPLETE_ROUTES, AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { ROUTES as VIDEO_ROUTES, VideoModule } from './components/video/video.module';
import { ROUTES as POPUP_ROUTES, PopupModule } from './components/popup/popup.module';
import { ROUTES as FILTERS_ROUTES, FiltersModule } from './components/filters/filters.module';

/* Form Types */
import { ROUTES as INPUT_ROUTES, InputModule } from './components/formly/input/input.module';
import { ROUTES as TEXT_AREA_ROUTES, TextAreaModule } from './components/formly/textarea/textarea.module';
import { ROUTES as CHECKBOX_ROUTES, CheckboxModule } from './components/formly/checkbox/checkbox.module';
import { ROUTES as MULTI_CHECKBOX_ROUTES, MultiCheckboxModule } from './components/formly/multicheckbox/multicheckbox.module';
import { ROUTES as RADIO_ROUTES, RadioModule } from './components/formly/radio/radio.module';
import { ROUTES as SELECT_ROUTES, SelectModule } from './components/formly/select/select.module';
import { ROUTES as FORMLY_AUTOCOMPLETE_ROUTES, FormlyAutocompleteModule } from './components/formly/autocomplete/autocomplete.module';
import { ROUTES as FORMLY_DATEPICKER_ROUTES, FormlyDatepickerModule } from './components/formly/datepicker/datepicker.module';
import { ROUTES as TEXT_ROUTES, TextModule } from './components/text/text.module';
import { ROUTES as SEARCH_FORMLY_ROUTES, FormlySearchModule } from './components/formly/search/search.module';

/* Form Wrappers */
import { ROUTES as FORM_FIELD_ROUTES, FormFieldModule } from './components/form-field/form-field.module';
import { ROUTES as FILTER_WRAPPER_ROUTES, FilterWrapperModule } from './components/filterwrapper/filterwrapper.module';
import { ROUTES as ACCORDION_WRAPPER_ROUTES, AccordionWrapperModule } from './components/accordionwrapper/accordionwrapper.module';
import { ROUTES as GROUP_ROUTES, GroupWrappersModule } from './components/groupwrappers/groupwrappers.module';
import { ROUTES as LABEL_ROUTES, LabelWrapperModule } from './components/labelwrapper/labelwrapper.module';
import { ROUTES as DESCRIPTION_ROUTES, DescriptionWrapperModule } from './components/descriptionwrapper/descriptionwrapper.module';
import { ROUTES as VALIDATION_ROUTES, ValidationWrapperModule } from './components/validationwrapper/validationwrapper.module';
import { ROUTES as TEMPLATEOPTIONS_ROUTES, TemplateOptionsModule } from './components/templateoptions/templateoptions.module';

/* Utilities */
import { ROUTES as ICONS_ROUTES, IconsModule } from './components/icons/icons.module';


import { DocumentationSharedModule } from './shared';
import { OverviewComponent } from './pages/overview/overview.component';
import { ResultsLayoutModule } from './pages/layout/layout.module';
import { ResultsLayoutComponent } from './pages/layout/layout.component';

declare var require: any;

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'layout', component: ResultsLayoutComponent },

  // Components
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/header', children: HEADER_ROUTES },
  { path: 'components/footer', children: FOOTER_ROUTES },
  { path: 'components/subheader', children: SUBHEADER_ROUTES },
  { path: 'components/dialog', children: DIALOG_ROUTES },
  { path: 'components/collapse', children: COLLAPSE_ROUTES },
  { path: 'components/actions', children: ACTIONS_ROUTES },
  { path: 'components/pagination', children: PAGINATION_ROUTES },
  { path: 'components/sidenavigation', children: SIDE_NAVIGATION_ROUTES },
  { path: 'components/result-list', children: RESULT_LIST_ROUTES },
  { path: 'components/search', children: SEARCH_ROUTES },
  { path: 'components/autocomplete', children: AUTOCOMPLETE_ROUTES },
  { path: 'components/video', children: VIDEO_ROUTES },
  { path: 'components/popup', children: POPUP_ROUTES },
  { path: 'components/filters', children: FILTERS_ROUTES },

  // Formly
  { path: 'components/input', children: INPUT_ROUTES },
  { path: 'components/textarea', children: TEXT_AREA_ROUTES },
  { path: 'components/checkbox', children: CHECKBOX_ROUTES },
  { path: 'components/multicheckbox', children: MULTI_CHECKBOX_ROUTES },
  { path: 'components/radio', children: RADIO_ROUTES },
  { path: 'components/select', children: SELECT_ROUTES },
  { path: 'components/formly-autocomplete', children: FORMLY_AUTOCOMPLETE_ROUTES },
  { path: 'components/formly-datepicker', children: FORMLY_DATEPICKER_ROUTES },
  { path: 'components/text', children: TEXT_ROUTES },
  { path: 'components/search-formly', children: SEARCH_FORMLY_ROUTES },

  // Wrappers
  { path: 'components/form-field', children: FORM_FIELD_ROUTES },
  { path: 'components/filterwrapper', children: FILTER_WRAPPER_ROUTES },
  { path: 'components/accordionwrapper', children: ACCORDION_WRAPPER_ROUTES },
  { path: 'components/group', children: GROUP_ROUTES },
  { path: 'components/label', children: LABEL_ROUTES },
  { path: 'components/description', children: DESCRIPTION_ROUTES },
  { path: 'components/validation', children: VALIDATION_ROUTES },
  { path: 'components/templateoptions', children: TEMPLATEOPTIONS_ROUTES },

  // Icons
  { path: 'components/icons', children: ICONS_ROUTES },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationSharedModule,
    RouterModule.forChild(ROUTES),
    HeaderModule,
    FooterModule,
    SubHeaderModule,
    DialogModule,
    CollapseModule,
    ActionsModule,
    PaginationModule,
    SideNavigationModule,
    ResultListModule,
    SearchModule,
    AutocompleteModule,
    VideoModule,
    PopupModule,
    FiltersModule,
    InputModule,
    OverviewModule,
    IntroductionModule,
    ResultsLayoutModule,
    TextAreaModule,
    CheckboxModule,
    MultiCheckboxModule,
    RadioModule,
    SelectModule,
    FormlyAutocompleteModule,
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
    IconsModule
  ]
})
export class DocumentationModule {
  constructor() {
    library.add(fas, sds);
  }
}

