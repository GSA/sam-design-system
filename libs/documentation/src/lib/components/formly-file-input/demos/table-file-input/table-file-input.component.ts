import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { SdsTableComponent } from '@gsa-sam/sam-material-extensions';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-table-file-input',
  templateUrl: './table-file-input.component.html',
})
export class TableFileInputComponent {

  @ViewChild('fileTable') fileTable: SdsTableComponent;

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
      },
    },
  ];

  form = new FormGroup({});

  displayedColumns: string[] = ['name', 'type', 'size', 'action'];
  data = [];

  onModelChange($event: {multipleFilesInput: File[]}) {
    this.data = $event.multipleFilesInput;
    if (this.fileTable) {
      this.fileTable.table.renderRows();
    }
    console.log('model', $event);
  }

  removeFile(file: File) {
    const newFiles = this.data.filter(dataFile => dataFile != file);
    this.form.get('multipleFilesInput').setValue(newFiles);
  }

  removeAllFiles() {
    this.form.get('multipleFilesInput').setValue([]);
  }

}
