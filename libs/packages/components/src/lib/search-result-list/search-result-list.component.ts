import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  OnInit,
  OnChanges
} from '@angular/core';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html'
})
export class SdsSearchResultListComponent implements OnInit, OnChanges {
  constructor() {}
  /**
   * List of items
   */
  @Input() model: any;

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  data: any = {
    title: '',
    message: ''
  };

  ngOnInit() {
    this.displayTemplate();
  }

  ngOnChanges() {
    this.displayTemplate();
  }

  displayTemplate() {
    if (this.model.error) {
      this.data.title = this.model.error.title;
      this.data.message = this.model.error.description;
    } else if (this.model.emptySearch) {
      this.data.title = this.model.emptySearch.title;
      this.data.message = this.model.emptySearch.description;
    } else if (this.model.results.length === 0) {
      this.data.title = this.model.noItems.title
        ? this.model.noItems.title
        : 'No Matches Found';
      this.data.message = this.model.noItems.description
        ? this.model.noItems.description
        : `We couldn't find a match for your search criteria.
      We couldn't find a match for your search criteria.`;
      return;
    }
    return;
  }
}
