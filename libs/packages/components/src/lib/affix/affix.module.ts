import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsInputAffixDirective } from './affix.directive';



@NgModule({
  declarations: [
    SdsInputAffixDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SdsInputAffixDirective
  ]
})
export class SdsAffixModule { }
