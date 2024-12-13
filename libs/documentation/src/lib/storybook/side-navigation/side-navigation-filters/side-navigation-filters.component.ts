import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationLink, SdsDialogConfig, SelectionPanelModel } from '@gsa-sam/components';
import { SdsFiltersComponent } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { FilterService } from './filter.service';
import { navigationConfig } from './side-navigation-filters.config';

@Component({
  selector: 'sds-side-navigation-filters',
  templateUrl: './side-navigation-filters.component.html',
})
export class SideNavigationFiltersComponent {
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
    selectionMode: 'SELECTION',
  };

  public filterPanelConfig;

  selectedPanel: NavigationLink = this.navigationModel.navigationLinks[1];

  constructor(
    public filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

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
      advancedFilters: true,
    };
  }

  ngAfterViewInit() {
    this.filterChange$.subscribe((res) => {
      console.log('filter has changed');
    });
  }

  onPanelSelection($event: NavigationLink) {
    this.selectedPanel = $event;
    this.domainsExpanded = false;
    this.filtersExpanded = true;
    console.log('Selected Domain', $event);
    this.router.navigate([], {
      queryParams: $event.queryParams,
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge',
    });
  }

  onSubPanelClicked($event: NavigationLink) {
    console.log('Sub Domain selected', $event);
    this.router.navigate([], {
      queryParams: $event.queryParams,
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge',
    });
  }
}
