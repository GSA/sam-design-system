
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-filter-wrapper-form-field',
  template: `
  
    <div  class="wrapper-body">
      <div class="sds-accordion__trigger header-label"> {{to.label}} </div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
    styles: [`
    .wrapper-body {
        margin: 0 5px;
        padding:1px 6px 10px;
    }
    
    .header-label{
        color: #0a3466;
        font-size:16px;
    }
  `]
})
export class FormlyFormFieldFilterWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}