import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'basic-file-input-demo',
  templateUrl: './basic-file-input.component.html',
})
export class BasicFileInputComponent {

  fields: FormlyFieldConfig[] = [
    {
      key: 'basicFileInput',
      type: 'fileinput',
      templateOptions: {
        label: 'Basic File Input',
        description: 'Accepts single file',
        hideOptional: true,
      }
    },
    {
      key: 'multipleFilesInput',
      type: SdsFormlyTypes.FILEINPUT, // Enum maps to 'fileinput' string
      templateOptions: {
        label: 'Multiple File Input',
        description: 'Accepts Multiple Files',
        multiple: true,
        hideOptional: true,
      },
    },
    {
      key: 'limitFileType',
      type: SdsFormlyTypes.FILEINPUT,
      templateOptions: {
        label: 'Enter Files Here',
        description: 'Only PDF, CSV, or any image format files are allowed',
        multiple: true,
        hideOptional: true,
        acceptFileType: '.pdf,.csv,image/*'
      },
    }
  ];

  form = new FormGroup({});
  model: any = {};

  onModelChange($event: any) {
    console.log('model', $event);
  }
}
