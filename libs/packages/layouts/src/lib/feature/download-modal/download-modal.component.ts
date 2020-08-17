import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogRef } from '@gsa-sam/components';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsDownloadModalComponent {
  @Output() onFormGroupChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() message: string;
  @Input() model: any;
  @Input() fields: FormlyFieldConfig[];

  form = new FormGroup({});

  constructor(public dialogRef: SdsDialogRef<SdsDownloadModalComponent>) {}

  onSubmit() {
    this.dialogRef.close(this.model);
    this.onFormGroupChange.emit(this.model);
  }

  cancel(){
    this.dialogRef.close();
  }
}
