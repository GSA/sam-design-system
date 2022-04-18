import { ChangeDetectorRef, Component, ViewChild, OnInit, Output, EventEmitter, TemplateRef, AfterViewInit } from "@angular/core";
import { AbstractSdsFormly } from "../sds-formly";
import { UsaFileInputComponent } from '@gsa-sam/ngx-uswds';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-formly-field-file-input`,
  templateUrl: './file-input.html'
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly implements OnInit{
  @ViewChild(UsaFileInputComponent, { static: true }) public template: UsaFileInputComponent;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  public displayedTemplate = null;

  parentFieldConfig: FormlyFieldConfig;

  displayedColumns: string[] = [];

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;

  }

  ngOnInit() {
    super.ngOnInit();

    if(this.field && this.field.fieldArray){
      this.displayedColumns = this.field.fieldArray.templateOptions.tableColumns.map(column => column.columnName);
      this.parentFieldConfig = this.field.parent;
    }
  }
}
