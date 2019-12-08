import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {E2eApp} from './e2e-app';
import {E2eAppModule} from './e2e-app/e2e-app-module';
import {E2E_APP_ROUTES} from './e2e-app/routes';

import {FooterE2eModule} from './footer/footer-e2e-module';

@NgModule({
  imports: [
    BrowserModule,
    E2eAppModule,
    NoopAnimationsModule,
    RouterModule.forRoot(E2E_APP_ROUTES),

    // E2E demos
    FooterE2eModule
  ],
  declarations: [
    E2eApp,
  ],
  bootstrap: [E2eApp],
})
export class MainModule {
}
