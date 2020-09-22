import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from './navigate.config';
import { SearchListConfiguration } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
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
  public historyToggleChange$ = new BehaviorSubject<object>(null);
  public filterChange$ = new BehaviorSubject<object>(null);
  public navigationModel: SideNavigationModel = navigationConfig;
  public toggleModel = {
    defaultValue: true,
    lable: 'Enable history data'
  }
  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  /* Sort config change demo */
  defaultListConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  updatedListConfig: SearchListConfiguration = {
    defaultSortValue: 'cageCode',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Cage Code', value: 'cageCode' },
      { text: 'Status', value: 'registrationStatus' }
    ]
  };

  constructor(
    public service: DataService,
    public filterService: FilterService,
    public autocompleteSampleDataService: AutocompleteSampleDataService
  ) { }
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
    this.historyToggleChange$.subscribe(value => {
      this.autocompleteSampleDataService.setArrayReference(value);
      console.log(value, 'history toggle');
    });
  }

  updateConfig(update: boolean) {
    if (update) {
      this.listConfig = { ...this.updatedListConfig };
    } else {
      this.listConfig = { ...this.defaultListConfig };
    }
  }
}
