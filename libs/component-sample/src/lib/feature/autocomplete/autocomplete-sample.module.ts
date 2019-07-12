import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSampleComponent } from './autocomplete-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/footer/footer.module';
@NgModule({
  declarations: [AutocompleteSampleComponent],
  imports: [
    CommonModule, SdsFooterModule
  ], exports: [AutocompleteSampleComponent]
})
export class AutocompleteSampleModule { }
