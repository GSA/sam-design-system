import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { ToastrModule } from 'ngx-toastr';
import { SdsToastComponent, SdsToastModule, SdsToastSettings } from '@gsa-sam/components';
import { NgxBootstrapIconsModule, github } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SdsToastModule,
    ToastrModule.forRoot(SdsToastSettings),
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    FormsModule,
    MarkdownModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({ github }),
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
