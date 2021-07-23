import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReadonlyInputComponent } from './readonly-types/readonly-input';
import { ReadonlyDatepickerComponent } from './readonly-types/readonly-datepicker';
import { ReadonlySelectComponent } from './readonly-types/readonly-select';
import { ReadonlyRadioComponent } from './readonly-types/readonly-radio';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReadonlyAutocompleteComponent } from './readonly-types/readonly-autocomplete';
import { ReadonlyCheckboxComponent } from './readonly-types/readonly-checkbox';
import { ReadonlyMulticheckboxComponent } from './readonly-types/readonly-multicheckbox';
import { ReadonlyDaterangeComponent } from './readonly-types/readonly-daterange';
import { ReadonlyFileinfoComponent } from './readonly-types/readonly-fileinfo';
import { ReadonlyContainerComponent, ReadonlyLabelDirective, ReadonlyValueDirective } from './readonly-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormlySelectModule,
  ],
  declarations: [
    ReadonlyInputComponent,
    ReadonlyDatepickerComponent,
    ReadonlySelectComponent,
    ReadonlyRadioComponent,
    ReadonlyAutocompleteComponent,
    ReadonlyCheckboxComponent,
    ReadonlyMulticheckboxComponent,
    ReadonlyDaterangeComponent,
    ReadonlyFileinfoComponent,
    ReadonlyContainerComponent,
    ReadonlyLabelDirective,
    ReadonlyValueDirective,
  ],
  exports: [
    ReadonlyInputComponent,
    ReadonlyDatepickerComponent,
    ReadonlySelectComponent,
    ReadonlyRadioComponent,
    ReadonlyAutocompleteComponent,
    ReadonlyCheckboxComponent,
    ReadonlyMulticheckboxComponent,
    ReadonlyDaterangeComponent,
    ReadonlyFileinfoComponent,
    ReadonlyContainerComponent,
    ReadonlyLabelDirective,
    ReadonlyValueDirective,
  ]

})
export class SdsReadonlyModule {}