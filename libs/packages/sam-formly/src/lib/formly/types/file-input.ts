import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { UsaFileInputComponent } from '@gsa-sam/ngx-uswds';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: `sds-formly-field-file-input`,
  templateUrl: './file-input.html',
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly
  implements OnInit {
  @ViewChild(UsaFileInputComponent, { static: true })
  public template: UsaFileInputComponent;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  parentFieldConfig: FormlyFieldConfig;

  displayedColumns: string[] = [];

  uploadRequest: (file: File) => Observable<any>;

  // Only applies if table is shown. Enabling this property will cause "loading..." to be appended to the file's name and will cause the file name and size to be colored gray while uploading. This will also cause the action button to be labeled cancel while uploading
  showUploadApperance: boolean = false;

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }

  ngOnInit() {
    super.ngOnInit();
    this.uploadRequest = this.to.uploadRequest;
    this.showUploadApperance = this.to.enableUploadAppearance ?? false;

    if (this.field && this.field.fieldArray) {
      this.displayedColumns = this.field.fieldArray.templateOptions.tableColumns.map(
        (column) => column.columnName
      );
      this.parentFieldConfig = this.field.parent;
    }
  }
}
