import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSampleComponent } from './feature/header-sample/header-sample.component';
import { FooterSampleComponent } from './feature/footer-sample/footer-sample.component';
import { FooterSampleModule } from './feature/footer-sample/footer-sample.module';
import { HeaderSampleModule } from './feature/header-sample/header-sample.module';
import { PaginationSampleComponent } from './feature/pagination-sample/pagination-sample.component';
import { PaginationSampleModule } from './feature/pagination-sample/pagination-sample.module';
import { ToolbarSampleComponent } from './feature/toolbar-sample/toolbar-sample.component';
import { ToolbarSampleModule } from './feature/toolbar-sample/toolbar-sample.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconSampleModule } from './feature/icon-sample/icon-sample.module';
import { IconSampleComponent } from './feature/icon-sample/icon-sample.component';
import { SideNavigationSampleModule } from './feature/side-navigation-sample/side-navigation-sample.module';
import { SideNavigationSampleComponent } from './feature/side-navigation-sample/side-navigation-sample.component';
import { SearchResultListSampleComponent } from './feature/search-result-list-sample/search-result-list-sample.component';
import { SearchResultListSampleModule } from './feature/search-result-list-sample/search-result-list-sample.module';
import { SideMenuFiltersSampleModule } from './feature/side-menu-filters-sample/side-menu-filters-sample.module';
import { SideMenuFiltersSampleComponent } from './feature/side-menu-filters-sample/side-menu-filters-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SubheaderSampleComponent } from './feature/subheader-sample/subheader-sample.component';
import { SubheaderSampleModule } from './feature/subheader-sample/subheader-sample.module';
import { AutocompleteSampleModule } from './feature/autocomplete/autocomplete-sample.module';
import { AutocompleteSampleComponent } from './feature/autocomplete/autocomplete-sample.component';
import { DialogSampleModule } from './feature/dialog-sample/dialog-sample.module';
import { DialogSampleComponent } from './feature/dialog-sample/dialog-sample.component';
import { ActionsMenuSampleComponent } from './feature/actions-menu-sample/actions-menu-sample.component';
import { ActionsMenuSampleModule } from './feature/actions-menu-sample/actions-menu-sample.module';
import { SearchSampleModule } from './feature/search-sample/search-sample.module';
import { SearchSampleComponent } from './feature/search-sample/search-sample.component';
import { CollapseSampleComponent } from './feature/collapse-sample/collapse-sample.component';
import { CollapseSampleModule } from './feature/collapse-sample/collapse-sample.module';
import { SdsPopupSampleComponent } from './feature/popup-sample/popup-sample.component';
import { SdsPopupSampleModule } from './feature/popup-sample/popup-sample.module';

export const ROUTES: Routes = [
  { path: 'sds-popup', component: SdsPopupSampleComponent },
  { path: 'collapse', component: CollapseSampleComponent },
  { path: 'header', component: HeaderSampleComponent },
  { path: 'footer', component: FooterSampleComponent },
  { path: 'pagination', component: PaginationSampleComponent },
  { path: 'toolbar', component: ToolbarSampleComponent },
  { path: 'icon', component: IconSampleComponent },
  { path: 'sideNav', component: SideNavigationSampleComponent },
  { path: 'sideFilters', component: SideMenuFiltersSampleComponent },
  { path: 'searchResultList', component: SearchResultListSampleComponent },
  { path: 'subheader', component: SubheaderSampleComponent },
  { path: 'autocomplete', component: AutocompleteSampleComponent },
  { path: 'dialog', component: DialogSampleComponent },
  { path: 'actions-menu', component: ActionsMenuSampleComponent },
  { path: 'search', component: SearchSampleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    FormlyModule,
    ReactiveFormsModule,
    HeaderSampleModule,
    FooterSampleModule,
    PaginationSampleModule,
    ToolbarSampleModule,
    IconSampleModule,
    SideNavigationSampleModule,
    SideMenuFiltersSampleModule,
    SearchResultListSampleModule,
    SubheaderSampleModule,
    AutocompleteSampleModule,
    DialogSampleModule,
    ActionsMenuSampleModule,
    SearchSampleModule,
    CollapseSampleModule,
    SdsPopupSampleModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class ComponentSampleModule {
  constructor() {
    library.add(fas, sds);
  }
}
