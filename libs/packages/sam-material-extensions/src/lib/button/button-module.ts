/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatAnchor, MatButton} from './button';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatButton,
    MatAnchor   
  ],
  declarations: [
    MatButton,
    MatAnchor,
  ],
})
export class MatButtonModule {}
