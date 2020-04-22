import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './external-link.directive';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ ExternalLinkDirective],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  entryComponents: [ FaIconComponent ],
  exports: [ExternalLinkDirective]
})
export class SdsDirectivesModule { }