import { Component, Inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface AlertData {
  title: string;
  content: string;
}

/**
 * ALERTS
 * ================================================
 */
// Error
@Component({
  selector: 'sds-dialog-sample-alert',
  templateUrl: './alert-template.html',
})
export class AlertComponent {
  constructor(@Inject(SDS_DIALOG_DATA) public data: AlertData) {}
}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
  selector: 'sds-modal-sample',
  templateUrl: './dialog-alert.component.html',
})
export class DialogAlert {
  form = new UntypedFormGroup({});
  model: any = {
    alert: {
      title: 'Open Link?',
      message: 'Info Message',
      type: 'info',
      size: 'small',
    },
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'alert',
      props: {
        label: 'Alert',
      },

      fieldGroup: [
        {
          key: 'title',
          type: 'input',
          props: {
            label: 'Title',
            hideOptional: true,
            placeholder: 'type title here',
            description: 'Enter the alert modal title.',
          },
        },
        {
          key: 'message',
          type: 'input',
          props: {
            label: 'Message',
            hideOptional: true,
            placeholder: 'type message',
            description: 'Enter the alert message.',
          },
        },
        {
          key: 'type',
          type: 'select',
          props: {
            label: 'Alert Type',
            description: 'Select the entity type.',
            required: true,
            options: [
              { label: 'Warning', value: 'warning' },
              { label: 'Info', value: 'info' },
              { label: 'Error', value: 'error' },
              { label: 'Success', value: 'success' },
            ],
          },
        },
        {
          key: 'size',
          type: 'select',
          props: {
            label: 'Alert modal size',
            description: 'Select the entity type.',
            required: true,
            options: [
              { label: 'Small', value: 'small' },
              { label: 'Medium', value: 'medium' },
              { label: 'Large', value: 'large' },
            ],
          },
        },
      ],
    },
  ];

  constructor(public dialog: SdsDialogService) {}

  openAlert(title, content, alert, size) {
    this.dialog.open(AlertComponent, {
      alert: alert,
      width: size,
      data: { title: title, content: content },
    });
  }
}
