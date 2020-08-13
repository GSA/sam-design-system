import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit {
  @Output() onFormGroupChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() message: string;
  @Input() model: any;
  @Input() fields: FormlyFieldConfig[];

  ngOnInit() {}
  onSubmit() {
    this.onFormGroupChange.emit(this.model);
  }
}
