import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'overview', component: OverviewComponent },
      { path: '', pathMatch: 'full', redirectTo: 'overview' } 
    ]),
  ],
  declarations: [OverviewComponent],
})
export class DocumentationModule {}
