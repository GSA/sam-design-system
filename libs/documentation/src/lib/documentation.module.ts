import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DocumentationComponent } from './documentation.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'documentation', children: [
        { path: 'overview', component: OverviewComponent },
        { path: '', pathMatch: 'full', redirectTo: 'overview' }
      ]},
      { path: '', pathMatch: 'full', redirectTo: 'documentation' }
    ]),
  ],
  declarations: [OverviewComponent, DocumentationComponent],
  exports: [DocumentationComponent],
})
export class DocumentationModule {}
