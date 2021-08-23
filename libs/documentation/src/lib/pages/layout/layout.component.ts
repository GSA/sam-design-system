import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { navigationConfig } from './navigate.config';
import { SearchListConfiguration, ResultsModel, SearchListLayoutComponent } from '@gsa-sam/layouts';
import { FilterService } from './filter.service';
import { SideNavigationModel } from '@gsa-sam/components';
@Component({
  templateUrl: './layout.component.html',
})
export class ResultsLayoutComponent implements AfterViewInit, OnInit {
  @ViewChild('resultList') resultList: SearchListLayoutComponent;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = true;
  public filterChange$ = new Subject<object>();
  public navigationModel: SideNavigationModel = navigationConfig;

  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' },
    ],
    defaultFilterValue: { status: { registrationStatus: { Active: true, Inactive: false } } },
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
      console.log(res);
      this.resultList.updateFilter(res);
    });
  }

  updateConfig(update: boolean) {
    if (update) {
      this.listConfig = { ...this.updatedListConfig };
    } else {
      this.listConfig = { ...this.defaultListConfig };
    }
    const newSortValue = this.listConfig.defaultSortValue;
    this.resultList.updateSearchResultsModel({sort: newSortValue, filterModel: this.filterModel});
  }

  onSearchModelUpdate() {
    const model: ResultsModel = {
      page: 2,
      sort: 'registrationStatus',
      filterModel: {
        keyword: {
          keywordRadio: "allWords",
          keywordTags: [
            {
              key: "te",
              text: "te"
            }
          ]
        },
        location: {
          city: null,
          congressionalDistrict: null,
          country: null,
          state: [{ id: 'AL', name: 'Alabama', subtext: undefined }],
          zipCode: null,
        },
      },
    };
    this.fields[0].fieldArray.fieldGroup[0].form.setValue(model.filterModel.keyword);
    // this.form.get('keyword').setValue(model.filterModel.keyword);
    console.log(this.form);
    // this.form.get('keyword').setValue()
    // this.resultList.updateSearchResultsModel(model);
  }
}
