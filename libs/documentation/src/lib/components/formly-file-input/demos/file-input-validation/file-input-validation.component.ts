import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-file-input-validation',
  templateUrl: './file-input-validation.component.html',
})
export class FileInputValidationComponent {

  fields: FormlyFieldConfig[] = [
    {
      key: 'sizeFileInput',
      type: 'fileinput',
      templateOptions: {
        label: 'Size Limited File Input',
        description: 'Accepts single file. This input is configured with a low size limit, it should error on most files.'
      },
      validation: {
        messages: {
          fileSizeLimit: 'File must be below 1 kb'
        }
      },
      validators: {
        fileSizeLimit: this.fileSizeLimitValidator,
      }
    },
    {
      key: 'requiredFileInput',
      type: 'fileinput',
      templateOptions: {
        label: 'Required File Input',
        description: 'Requires single file.',
        required: true
      },
    }
  ];

  form = new FormGroup({});
  model: any = {};

  fileSizeLimitValidator(control: AbstractControl) {
    if (!control.value) {
      return true;
    }

    let isValid = true;
    (control.value as File[]).forEach(file => {
      if (file.size > 1000) {
        isValid = false;
      }
    });

    return isValid;
  }

  onModelChange($event: any) {
    console.log('model', $event);
  }

  submit() {
    return;
  }

}
