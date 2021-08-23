import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { AbstractSdsFormly } from "../sds-formly";
import { UsaFileInputComponent } from '@gsa-sam/ngx-uswds';
import { SdsTableComponent } from "@gsa-sam/sam-material-extensions";

@Component({
  selector: `sds-formly-field-file-input`,
  templateUrl: './file-input.html'
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly implements OnInit {
  @ViewChild(UsaFileInputComponent, { static: true }) public template: UsaFileInputComponent;
  @ViewChild('fileTable') fileTable: SdsTableComponent;

  displayedColumns: string[] = ['name', 'size', 'scan', 'action'];

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }

  ngOnInit() {
    super.ngOnInit();
    console.log(this.field);
    this.formControl.valueChanges.subscribe(change => {
      console.log('changedddd', change);
    })
  }

  removeFile(file: File) {
    this.template.removeFile(file);
  }
}