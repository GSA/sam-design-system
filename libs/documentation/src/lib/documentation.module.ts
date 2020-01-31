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
import { DocumentationSharedModule } from './shared';
import { OverviewComponent } from './pages/overview/overview.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/header', children: HEADER_ROUTES },
  { path: 'components/input', children: INPUT_ROUTES }
];

@NgModule({
  imports: [CommonModule, DocumentationSharedModule, RouterModule.forChild(ROUTES), HeaderModule, InputModule, OverviewModule, IntroductionModule]
})
export class DocumentationModule {
  constructor() {
    library.add(fas, sds);
  }
}

