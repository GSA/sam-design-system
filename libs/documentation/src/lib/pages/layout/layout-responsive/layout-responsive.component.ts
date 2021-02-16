import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationLink, SdsDialogRef } from '@gsa-sam/components';
import { SearchListConfiguration, SearchListLayoutComponent } from '@gsa-sam/layouts';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFiltersComponent } from 'libs/packages/sam-formly/src/lib/formly-filters/sds-filters.component';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';
import { navigationConfig } from '../navigate.config';

@Component({
  templateUrl: './layout-responsive.component.html',
})
export class LayoutResponsiveComponent {
  @ViewChild('resultList') resultList: SearchListLayoutComponent;
  @ViewChild('filters') filterComponent: SdsFiltersComponent;

  isMobileMode: boolean;
  mobileDialog: SdsDialogRef<any>;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = true;
  public filterChange$ = new BehaviorSubject<object>([]);
  public navigationModel = {
    title: 'Select Domain',
    selectionPanelModel: navigationConfig,
  };
  public filterPanelConfig;

  private selectedDomain: NavigationLink;

  listConfig: SearchListConfiguration = {
    defaultSortValue: 'legalBusinessName',
    pageSize: 25,
    sortList: [
      { text: 'Entity Name', value: 'legalBusinessName' },
      { text: 'Status', value: 'registrationStatus' },
    ],
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
    public filterService: FilterService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.fields = this.filterService.fields;
    this.filterModel = this.filterService.model;
    this.form = this.filterService.form;
    this.options = this.filterService.options;

    this.filterPanelConfig = {
      title: 'Filter By',
      fields: this.fields,
      model: this.filterModel,
      form: this.form,
      options: this.options,
      isHistoryEnabled: true,
    };
  }

  updateConfig(update: boolean) {
    if (update) {
      this.listConfig = { ...this.updatedListConfig };
    } else {
      this.listConfig = { ...this.defaultListConfig };
    }
  }

  onDialogOpen($event) {
    this.mobileDialog = $event;
  }

  onCancelClicked() {
    this.mobileDialog.close();
    this.mobileDialog = undefined;
  }

  onApplyFilter() {
    this.mobileDialog.close();
    this.mobileDialog = undefined;
    this.router.navigate([], {
      queryParams: this.selectedDomain.queryParams,
      relativeTo: this.activatedRoute
    }).then(() => {
      this.resultList.updateSearchResultsModel({filterModel: this.filterModel});
    })
    console.log('Applied Filters', this.filterModel);
  }

  onPanelSelection($event: NavigationLink) {
    this.selectedDomain = $event;
    console.log('Selected Domain', $event);
  }

  onFilterChange($event) {
    console.log('Selected Filters', $event);
    this.resultList.updateFilter($event);
  }
}
