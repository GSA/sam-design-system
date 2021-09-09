import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SdsDialogRef, SdsDialogConfig, SelectionPanelModel, NavigationLink } from '@gsa-sam/components';
import { SearchListConfiguration } from '@gsa-sam/layouts';
import { SdsFiltersComponent } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from 'libs/documentation/src/lib/pages/layout/data.service';
import { FilterService } from 'libs/documentation/src/lib/pages/layout/filter.service';
import { BehaviorSubject } from 'rxjs';
import { navigationConfig } from '../links-side-navigation/navigate.config';

@Component({
  selector: 'filter-side-navigation',
  templateUrl: './filter-side-navigation.component.html'
})
export class FilterSideNavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('filters') filterComponent: SdsFiltersComponent;

  isMobileMode: boolean;

  fields: FormlyFieldConfig[] = [];
  form;
  filterModel = {};
  options;
  filtersExpanded: boolean = false;
  domainsExpanded: boolean = true;
  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Search Filters',
  };

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
  ) { }

  ngOnInit(): void {
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
      console.log('filter has changed')
    });
  }

  updateConfig(update: boolean) {
    if (update) {
      this.listConfig = { ...this.updatedListConfig };
    } else {
      this.listConfig = { ...this.defaultListConfig };
    }
    console.log('config updated')
  }

  onPanelSelection($event: NavigationLink) {
    this.selectedPanel = $event;
    this.domainsExpanded = false;
    this.filtersExpanded = true;
    console.log('Selected Domain', $event);
    this.router.navigate(
      [],
      { queryParams: $event.queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge' }
    );
  }

  onSubPanelClicked($event: NavigationLink) {
    console.log('Sub Domain selected', $event);
    this.router.navigate(
      [],
      { queryParams: $event.queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge' }
    );
  }

}
