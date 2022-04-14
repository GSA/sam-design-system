import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-table-file-input',
  templateUrl: './table-file-input.component.html',
})
export class TableFileInputComponent {

  fields: FormlyFieldConfig[] = [
    {
      key: 'tableFilesInput',
      type: SdsFormlyTypes.FILEINPUT, // Enum maps to 'fileinput' string
      templateOptions: {
        label: 'Table File Input',
        description: 'Accepts multiple files and displays in table',
        multiple: true,
        hideOptional: true,
        clearFilesOnAdd: false,
        tableDisplay: true,
        displayFileInfo: false,
        required: true,
        acceptFileType: '.bmp,.gif,.jpeg,.jpg,.tex,.xls,.xlsx,.doc,.docx,.docx,.odt,.txt,.pdf,.png,.pptx,.ppt,.rtf,.AVI,.mov,.mpg,.mpeg,.mp4,.wmv,.flv,.f4v'
      },
      validation: {
        messages: {
          fileSizeLimit: 'File must be below 1 kb'
        }
      },
      validators: {
        fileSizeLimit: this.fileSizeLimitValidator,
      },
      fieldArray: {
        type: SdsFormlyTypes.TABLE,
        templateOptions: {
          name: 'Demo Table',
          noDataText: 'No Attachments',
          tableColumns: [
            {label: 'Attachment Name', columnName:'name', property: 'name'},
            {label: 'File Size (kB)', columnName:'size', textFn: (file: File) => (file.size / 1000)},
            {label: 'Virus Scan', columnName:'scan', property: 'scan'},
            {label: 'Action', columnName:'action', text: 'Remove', onClick: this.removeFile}
          ],
        }
      }
    },
  ];

  form = new FormGroup({});

  onModelChange($event: {tableFilesInput: File[]}) {
    // The 'scan' property here must match the property in
    // {label: 'Virus Scan', columnName:'scan', property: 'scan'} in templateOptions' tableColumns
    const newFiles = $event.tableFilesInput.filter(file => !file['scan']);
    this.scanFiles(newFiles);
    console.log('model', $event);
  }

  scanFiles(newFiles: File[]) {
    newFiles.forEach(file => file['scan'] = 'Please Wait');

    // Mock API call to scan file
    setTimeout(() => {
      // You can choose to then either remove the file or apply different text
      newFiles.forEach(file => file['scan'] = 'Ready');
    }, 2000);
  }

  removeFile(file: File, field: FormlyFieldConfig) {
    const tableFormGroup = field.formControl;
    const newFiles = tableFormGroup.value['tableFilesInput'].filter((value: File) => value != file);
    tableFormGroup.get('tableFilesInput').setValue(newFiles);
  }

  submit() {
    return;
  }

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
}
