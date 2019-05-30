import { Component, OnInit, Output, EventEmitter, Input, ContentChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Search } from './model/search-list-service.model'; 
@Component({
  selector: 'search-list-page',
  templateUrl: './search-list-page.component.html',
  styleUrls: ['./search-list-page.component.scss']
})
export class SearchListSampleComponent implements OnInit {


  @Output()
  update = new EventEmitter<Search>();

  /**
 * Child Template to be used to display the data for each item in the list of items
 */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  ngOnInit() {

    this.pageChange.subscribe(
      value => {
        this.updatePage();
      }
    );
    this.updatePage();
  }
  sideNavModel = {
    navigationLinks: []
  }

  @Input()
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }

  @Input()
  items = [];

  onSelectChange() {
    this.updatePage();
  }
  top = { id: 'top' };
  bottom = { id: 'bottom' };
  public pageChange = new BehaviorSubject<object>(this.page);

  public sortField = 'id';




  private updatePage() {
    let call = { 'page': this.page, sortField: this.sortField };
    this.update.emit(call);
  }
}
