import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

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
        acceptFileType:
          '.bmp,.gif,.jpeg,.jpg,.tex,.xls,.xlsx,.doc,.docx,.docx,.odt,.txt,.pdf,.png,.pptx,.ppt,.rtf,.AVI,.mov,.mpg,.mpeg,.mp4,.wmv,.flv,.f4v',
        uploadRequest: this.uploadRequest,
      },
      validation: {
        messages: {
          fileSizeLimit: 'File must be below 1 kb',
        },
      },
      validators: {
        fileSizeLimit: this.fileSizeLimitValidator,
      },
      fieldArray: {
        templateOptions: {
          name: 'Demo Table',
          noDataText: 'No Attachments',
          showProgress: true,

          tableColumns: [
            {
              label: 'Attachment Name',
              columnName: 'name',
              property: 'name',
              whileUpload: {
                disableText: true,
                appendString: ' loading...',
              },
            },
            {
              label: 'File Size (kB)',
              columnName: 'size',
              textFn: (file: File) => file.size / 1000,
              whileUpload: {
                disableText: true,
              },
            },
            { label: 'Virus Scan', columnName: 'scan', property: 'scan' },
            {
              label: 'Action',
              columnName: 'action',
              text: 'Remove',
              onClick: this.removeFile.bind(this),
              whileUpload: {
                displayText: 'Cancel',
              },
            },
          ],
        },
      },
    },
  ];

  form = new FormGroup({});

  onModelChange($event: { tableFilesInput: File[] }) {
    // The 'scan' property here must match the property in
    // {label: 'Virus Scan', columnName:'scan', property: 'scan'} in templateOptions' tableColumns
    console.log('model', $event);
  }

  removeFile(file: File, field: FormlyFieldConfig) {
    const tableFormGroup = field.formControl;
    // Needed because passing form into formly-form a second time strips that object and returns just the array
    const fileArray = tableFormGroup.value['tableFilesInput'];
    const newFiles = fileArray.filter((value: File) => value != file);
    let fc: AbstractControl = tableFormGroup.get('tableFilesInput');
    fc.setValue(newFiles);
  }

  submit() {
    return;
  }

  fileSizeLimitValidator(control: AbstractControl) {
    if (!control.value) {
      return true;
    }

    let isValid = true;
    (control.value as File[]).forEach((file) => {
      if (file.size > 1000) {
        isValid = false;
      }
    });

    return isValid;
  }

  uploadRequest(file) {
    file['uploading'] = true;
    return of(true).pipe(
      map(() => {
        file['scan'] = 'Please Wait';
      }),
      delay(3000), // Upload delay
      map(() => {
        file['uploading'] = false;
      }),
      delay(3000), // Scan delay
      map(() => {
        file['scan'] = 'Ready';
      })
    );
  }
}
