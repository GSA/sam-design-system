/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatOption} from './option';
import {MatOptgroup} from './optgroup';


@NgModule({
  imports: [CommonModule],
  exports: [MatOption, MatOptgroup],
  declarations: [MatOption, MatOptgroup]
})
export class MatOptionModule {}


export * from './option';
export * from './optgroup';
