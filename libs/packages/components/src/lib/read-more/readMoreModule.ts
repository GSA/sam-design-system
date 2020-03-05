import { NgModule } from '@angular/core';

import { SdsReadMoreComponent } from './readMoreComponent ';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, A11yModule],
    exports: [SdsReadMoreComponent],
    declarations: [SdsReadMoreComponent],
    providers: []
  })
  export class SdsReadMoreModule {}