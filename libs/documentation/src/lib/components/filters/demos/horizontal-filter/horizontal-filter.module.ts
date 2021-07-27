import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFiltersModule, SdsReadonlyModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { SdsIconModule } from '@gsa-sam/components';
import { HorizontalFilterDemo } from './horizontal-filter.component';

@NgModule({
  declarations: [ HorizontalFilterDemo ],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    SdsReadonlyModule,
    SdsIconModule,
    NgxBootstrapIconsModule,
  ],
  exports: [ HorizontalFilterDemo ],
  bootstrap: [ HorizontalFilterDemo ],
})
export class HorizontalFilterModule {}
