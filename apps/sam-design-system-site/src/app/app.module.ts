import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, sds);
  }
}
