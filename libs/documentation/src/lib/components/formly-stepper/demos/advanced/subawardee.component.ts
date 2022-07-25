import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  SdsDialogRef,
  SdsDialogService,
  SDS_DIALOG_DATA,
} from '@gsa-sam/components';
import { SdsFormlyDialogData } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { StepperAdvancedService } from './stepper-advanced.service';

@Component({
  selector: `subawardee-demo`,
  templateUrl: './subawardee.component.html',
})
export class SubawardeeDemoComponent {
  @Input() displayInput = true;
  @Input() subawardees: any[] = [];

  @Output() subawardeeUpdate = new EventEmitter<any[]>();

  awardDialogRef: SdsDialogRef<AddSubawardeeDialogDemo>;

  constructor(public dialog: SdsDialogService) {}

  onAddSubawardee() {
    this.awardDialogRef = this.dialog.open(AddSubawardeeDialogDemo, {
      width: 'medium',
    });

    this.awardDialogRef.afterClosed().subscribe((result: any[]) => {
      if (!result) {
        return;
      }
      this.subawardees = [...this.subawardees, result];
      this.subawardeeUpdate.emit(this.subawardees);
    });
  }
}

@Component({
  selector: `add-subawardee-dialog-demo`,
  template: `
    <div sds-dialog-title>
      <h3>Add Subawardee</h3>
    </div>
    <div sds-dialog-content>
      <formly-form [fields]="subawardeeFields" [model]="model"> </formly-form>
    </div>
    <div sds-dialog-actions>
      <button class="usa-button usa-button--base" (click)="cancel()">
        Cancel
      </button>
      <button
        type="submit"
        (click)="onFormSubmit()"
        class="usa-button margin-top-2"
      >
        Submit
      </button>
    </div>
  `,
  providers: [StepperAdvancedService],
})
export class AddSubawardeeDialogDemo implements OnInit {
  subawardeeFields: FormlyFieldConfig[];
  model = {};

  constructor(
    public dialogRef: SdsDialogRef<AddSubawardeeDialogDemo>,
    @Inject(SDS_DIALOG_DATA) public data: SdsFormlyDialogData,
    private stepperAdvancedService: StepperAdvancedService
  ) {}

  ngOnInit() {
    this.subawardeeFields = [this.stepperAdvancedService.getSubawardeeForm()];
  }

  onFormSubmit() {
    if (Object.keys(this.model).length) {
      this.dialogRef.close(this.model);
    } else {
      this.cancel();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
