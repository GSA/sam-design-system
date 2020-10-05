import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MarkdownModule } from 'ngx-markdown';
import { Toast, ToastrModule } from 'ngx-toastr';
import {SdsToastComponent} from 'libs/packages/components/src/lib/toast/toast-single.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [AppComponent,SdsToastComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    MarkdownModule.forRoot(),
    ToastrModule.forRoot({
      toastComponent : SdsToastComponent,
      timeOut:6000,
      positionClass:"toast-bottom-left"
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      languages: hljsLanguages,
    }
  }],
  entryComponents: [SdsToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, sds);
  }
}
