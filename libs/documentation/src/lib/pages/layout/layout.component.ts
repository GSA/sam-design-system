import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { navigationConfig } from './navigate.config';
import { SearchListConfiguration, ResultsModel } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { SideNavigationModel } from '@gsa-sam/components';
const _ = require('lodash');

@Component({
  templateUrl: './layout.component.html',
})
export class ResultsLayoutComponent implements AfterViewInit, OnInit {
  @ViewChild('resultList') resultList;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  defaultFilters = ['status'];
  filtersExpanded: boolean = true;
  isFilterPresent: boolean = false;
  public filterChange$ = new Subject<object>();
  public navigationModel: SideNavigationModel = navigationConfig;

  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' },
    ],
    defaultFilterValue: { status: { registrationStatus: { Active: true } } },
  };

  /* Sort config change demo */
  defaultListConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' },
    ],
  };

  updatedListConfig: SearchListConfiguration = {
    defaultSortValue: 'cageCode',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Cage Code', value: 'cageCode' },
      { text: 'Status', value: 'registrationStatus' },
    ],
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
    this.filterChange$.subscribe((res) => {
      let updatedObj = _.omit(res, this.defaultFilters);
      let result = Object.values(this.flattenObject(updatedObj)).filter(
        (item) => item
      );
      setTimeout(() => {
        this.isFilterPresent = result.length > 0 ? true : false;
      }, 150);
      this.resultList.updateFilter(res);
    });
  }

  flattenObject = (ob) => {
    var toReturn = {};
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] == 'object') {
        var flatObject = this.flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };

  updateConfig(update: boolean) {
    if (update) {
      this.listConfig = { ...this.updatedListConfig };
    } else {
      this.listConfig = { ...this.defaultListConfig };
    }
  }

  onSearchModelUpdate() {
    const model: ResultsModel = {
      page: 2,
      sort: 'registrationStatus',
      filterModel: {
        keyword: 'te',
        location: {
          city: null,
          congressionalDistrict: null,
          country: null,
          state: [{ id: 'AL', name: 'Alabama', subtext: undefined }],
          zipCode: null,
        },
      },
    };

    this.resultList.updateSearchResultsModel(model);
  }
}
