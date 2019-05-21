import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SdsSearchResultListComponent {

  @Input() model;
  
  @ContentChild('resultContent') itemContentTmpl: TemplateRef<any>;
}
