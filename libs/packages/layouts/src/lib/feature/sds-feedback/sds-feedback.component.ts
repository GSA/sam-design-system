import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sds-feedback',
  templateUrl: './sds-feedback.component.html',
  styleUrls: ['./sds-feedback.component.scss']
})
export class SdsFeedbackComponent {

  @Input() feedbackModel: FormControl = new FormControl('');
  @Input() isCollapsedContent = true;
  @Output() feedbackSubmit = new EventEmitter<string>();

  constructor() { }

  onFeedbackSubmitClicked() {
    this.feedbackSubmit.emit(this.feedbackModel.value);
  }

}
