import { Component, Input, ContentChild, TemplateRef, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchModel } from './model/search-results.model';
import {Location} from '@angular/common';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})

export class SdsSearchResultListComponent implements OnInit {

  updateModel : any;

   /**
   * Model for search results
   */
  @Input('model')
  set model(value) 
  {
    this.updateModel = value;
  }

  /**
   * Show divider between results
   */
  @Input() divider = true;

  @Output() clicks = new EventEmitter<string>();

  constructor(private _location: Location) 
  {}

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
  goBack() {
    this._location.back();
  }
}
