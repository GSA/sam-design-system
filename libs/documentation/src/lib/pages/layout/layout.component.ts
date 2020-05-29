import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from './navigate.config';
import { SearchListConfiguration } from '@sam-design-system/layouts';
import { FilterService } from './filter.service';
@Component({
  templateUrl: './layout.component.html'
})
export class ResultsLayoutComponent implements AfterViewInit, OnInit {
  @ViewChild('resultList') resultList;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = true;
  public filterChange$ = new BehaviorSubject<object>(null);
  public navigationModel: SideNavigationModel = navigationConfig;

  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  constructor(
    public service: DataService,
    public filterService: FilterService
  ) {}
  ngOnInit() {
    this.fields = this.filterService.fields;
    this.filterModel = this.filterService.model;
    this.form = this.filterService.form;
    this.options = this.filterService.options;
  }
  ngAfterViewInit() {
    this.filterChange$.subscribe(res => {
      this.resultList.updateFilter(res);
    });
  }
}
