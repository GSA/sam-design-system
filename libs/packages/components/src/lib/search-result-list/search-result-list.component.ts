import { Component, Input, ContentChild, TemplateRef, OnInit } from '@angular/core';
import { SearchModel } from './model/search-results.model';
import { Location } from '@angular/common';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SdsSearchResultListComponent {
  public updateModel = new SearchModel();
  /**
   * Allow to insert a customized template for no results to use
   */
  @Input() customResultsTemplate: TemplateRef<any>;

  @Input() isDefaultModel: boolean;

  /**
   * Model for search results
   */
  @Input('model')
  set model(value) {
    if (Array.isArray(value)) {
      const items = value;
      this.updateModel = new SearchModel();
      this.updateModel.results = items;
    } else {
      this.updateModel = value;
    }
  }

  /**
   * Show divider between results
   */
  @Input() divider = true;

  constructor(private _location: Location) {}

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  goBack() {
    this._location.back();
  }
  isTemplate() {
    if (this.updateModel && this.updateModel.metadata) {
      return Array.isArray(this.updateModel.metadata.messages);
    }
  }
}
