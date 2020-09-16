import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MarkdownModule } from 'ngx-markdown';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    HighlightModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(sds);
  }
}
