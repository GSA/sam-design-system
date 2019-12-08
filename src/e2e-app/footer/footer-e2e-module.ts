/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {SdsFooterModule} from '@gsa-sam/components/footer';
import {FooterE2E} from './footer-e2e';

@NgModule({
  imports: [
    SdsFooterModule,
  ],
  declarations: [FooterE2E],
})
export class FooterE2eModule {
}
