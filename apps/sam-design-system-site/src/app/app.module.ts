import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentationModule } from '@gsa-sam/documentation';

const ROUTES: Routes = [
  { path: '',   redirectTo: '/documentation', pathMatch: 'full' },
  { path: '**', redirectTo: '/documentation/overview' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocumentationModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
