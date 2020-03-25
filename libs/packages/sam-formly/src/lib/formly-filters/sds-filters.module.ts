import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import {
    SdsAccordionModule,
} from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsFiltersComponent } from './sds-filters.component';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsDialogModule } from '@gsa-sam/components';
import { SDS_DIALOG_SCROLL_STRATEGY_PROVIDER, SdsDialogService  } from '@gsa-sam/components';
import{ DialogAdvancedFilterDialog } from './sds-filters.component';
@NgModule({
    declarations: [
        SdsFiltersComponent,
        DialogAdvancedFilterDialog
    ],
    providers: [SdsDialogService, SDS_DIALOG_SCROLL_STRATEGY_PROVIDER],
    imports: [
        CommonModule,
        FormsModule,
        SdsAccordionModule,
        SdsFormlyModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormlySelectModule,
        FormlyModule,
        SdsDialogModule
    ],
    exports: [SdsFiltersComponent],
    entryComponents: [DialogAdvancedFilterDialog]
})
export class SdsFiltersModule { }