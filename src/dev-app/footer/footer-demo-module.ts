/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SdsFooterModule} from '@gsa-sam/components/footer';
import {FooterDemo} from './footer-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SdsFooterModule,
    RouterModule.forChild([{path: '', component: FooterDemo}]),
  ],
  declarations: [FooterDemo],
})
export class FooterDemoModule {
}
