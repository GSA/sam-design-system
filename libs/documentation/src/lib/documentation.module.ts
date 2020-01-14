import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ROUTES as HEADER_ROUTES, HeaderModule } from './components/header/header.module';
import { DocumentationSharedModule } from './shared';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/header', children: HEADER_ROUTES },
];

@NgModule({
  imports: [CommonModule, DocumentationSharedModule, RouterModule.forChild(ROUTES), HeaderModule]
})
export class DocumentationModule {
  constructor() {
    library.add(fas, sds);
  }
}

