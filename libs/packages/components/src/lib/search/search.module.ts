import { NgModule } from '@angular/core';

import { SdsSearchComponent } from './search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { SdsObserversModule } from '../observers/observer.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, A11yModule, SdsObserversModule],
  exports: [SdsSearchComponent],
  declarations: [SdsSearchComponent],
  providers: []
})
export class SdsSearchModule {}
