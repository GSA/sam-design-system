import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-table-file-input',
  templateUrl: './table-file-input.component.html',
})
export class TableFileInputComponent {

  fields: FormlyFieldConfig[] = [
    {
      key: 'multipleFilesInput',
      type: SdsFormlyTypes.FILEINPUT, // Enum maps to 'fileinput' string
      templateOptions: {
        label: 'Multiple File Input',
        description: 'Accepts Multiple Files',
        multiple: true,
        hideOptional: true,
        clearFilesOnAdd: false,
        tableDisplay: true,
        displayFileInfo: false,
      },
      fieldArray: {
        type: 'inputTable'
      }
    },
  ];

  form = new FormGroup({});

  onModelChange($event: {multipleFilesInput: File[]}) {
    console.log('model', $event);
  }
}
