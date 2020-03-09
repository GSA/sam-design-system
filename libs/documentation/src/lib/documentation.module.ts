import { IntroductionModule } from './pages/introduction/introduction.module';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { OverviewModule } from './pages/overview/overview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ROUTES as HEADER_ROUTES, HeaderModule } from './components/header/header.module';
import { ROUTES as INPUT_ROUTES, InputModule } from './components/input/input.module';
import { ROUTES as FORM_FIELD_ROUTES, FormFieldModule } from './components/form-field/form-field.module';
import { ROUTES as TEXT_AREA_ROUTES, TextAreaModule } from './components/textarea/textarea.module';
import { ROUTES as CHECKBOX_ROUTES, CheckboxModule } from './components/checkbox/checkbox.module';
import { ROUTES as MULTI_CHECKBOX_ROUTES, MultiCheckboxModule } from './components/multicheckbox/multicheckbox.module';
import { ROUTES as RADIO_ROUTES, RadioModule } from './components/radio/radio.module';
import { ROUTES as SELECT_ROUTES, SelectModule } from './components/select/select.module';
import { DocumentationSharedModule } from './shared';
import { OverviewComponent } from './pages/overview/overview.component';

declare var require: any;

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/header', children: HEADER_ROUTES },
  { path: 'components/input', children: INPUT_ROUTES },
  { path: 'components/form-field', children: FORM_FIELD_ROUTES },
  { path: 'components/textarea', children: TEXT_AREA_ROUTES },
  { path: 'components/checkbox', children: CHECKBOX_ROUTES },
  { path: 'components/multicheckbox', children: MULTI_CHECKBOX_ROUTES },
  { path: 'components/radio', children: RADIO_ROUTES },
  { path: 'components/select', children: SELECT_ROUTES }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationSharedModule,
    RouterModule.forChild(ROUTES),
    HeaderModule,
    InputModule,
    FormFieldModule,
    OverviewModule,
    IntroductionModule,
    TextAreaModule,
    CheckboxModule,
    MultiCheckboxModule,
    RadioModule,
    SelectModule
  ]
})
export class DocumentationModule {
  constructor() {
    library.add(fas, sds);
  }
}

