import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from './navigate.config';
import { SearchListConfiguration } from '@gsa-sam/layouts';
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
  public navigationModel: any = {title: 'Select Domain', selectionPanelModel: navigationConfig};
  public filterPanelConfig;

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
    public filterService: FilterService
  ) {}
  ngOnInit() {
    this.fields = this.filterService.fields;
    this.filterModel = this.filterService.model;
    this.form = this.filterService.form;
    this.options = this.filterService.options;

    this.filterPanelConfig = {
      fields: this.fields,
      filterModel: this.filterModel,
      form: this.form,
      options: this.options
    }
  }
  ngAfterViewInit() {
    this.filterChange$.subscribe(res => {
      this.resultList.updateFilter(res);
    });
  }

  updateConfig(update: boolean) {
    if(update) {
      this.listConfig = { ...this.updatedListConfig };
    }
    else {
      this.listConfig = { ...this.defaultListConfig };
    }

  }
}
