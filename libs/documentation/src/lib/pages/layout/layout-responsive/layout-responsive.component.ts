import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationLink, SdsDialogRef, SelectionPanelModel } from '@gsa-sam/components';
import { SearchListConfiguration } from '@gsa-sam/layouts';
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
  @ViewChild('resultList') resultList;
  @ViewChild('filters') filterComponent: SdsFiltersComponent;

  isMobileMode: boolean;
  mobileDialog: SdsDialogRef<any>;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = false;
  domainsExpanded: boolean = true;

  public filterChange$ = new BehaviorSubject<object>([]);
  public navigationModel: SelectionPanelModel = {
    navigationLinks: navigationConfig.navigationLinks,
    selectionMode: 'SELECTION'
   };
  
  public filterPanelConfig;

  selectedPanel: NavigationLink = this.navigationModel.navigationLinks[1];

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
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
  ngAfterViewInit() {
    this.filterChange$.subscribe((res) => {
      this.resultList.updateFilter(res);
    });
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
    console.log('Applied Filters', this.filterModel);
  }

  onPanelSelection($event: NavigationLink) {
    this.selectedPanel = $event;
    this.domainsExpanded = false;
    this.filtersExpanded = true;
    console.log('Selected Domain', $event);
    this.router.navigate(
      [], 
      {queryParams: $event.queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge'}
    );
  }

  onSubPanelClicked($event: NavigationLink) {
    console.log('Sub Domain selected', $event);
    this.router.navigate(
      [], 
      {queryParams: $event.queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge'}
    );
  }
}
