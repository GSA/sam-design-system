import { Component, Input, ContentChild, TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { SearchModel } from './model/search-results.model';

@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})

export class SdsSearchResultListComponent implements OnInit {

   /**
   * Model for search results
   */
  @Input() model = new SearchModel() || [];

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;
  ngOnInit() {
    if(Array.isArray(this.model)) {
      const items = this.model;
      this.model = new SearchModel();
      this.model.results = items;
    }
  }
}
