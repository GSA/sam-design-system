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
import {
  SdsToastComponent,
  SdsToastModule,
  SdsToastSettings
} from '@gsa-sam/components';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxBootstrapIconsModule, github } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SdsToastModule,
    ToastrModule.forRoot(SdsToastSettings),
    RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    MarkdownModule.forRoot(),
    NgxBootstrapIconsModule.pick({github}),
    IconModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      },
    },
  ],
  entryComponents: [SdsToastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}
