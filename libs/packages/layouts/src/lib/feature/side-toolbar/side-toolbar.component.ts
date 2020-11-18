import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationLink, SdsDialogService } from '@gsa-sam/components';
import { SideToolbarDialogComponent } from '../side-toolbar-dialog/side-toolbar-dialog.component';
import { SelectionPanelConfig, FilterPanelConfig } from './model/side-toolbar.model';
import * as qs from 'qs';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

interface DialogClosedResult {
  selectedPanel?: NavigationLink, 
  selectedFilters?: any[]
}

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss'],
})
export class SideToolbarComponent implements OnInit, OnDestroy {
  
  @Input() selectionPanelConfig: SelectionPanelConfig;
  @Input() filterPanelConfig: FilterPanelConfig;

  @Output() selectedFilters = new EventEmitter();

  filtersExpanded = false;
  panelExpanded = false;
  
  isMobileSize = false;

  private readonly mobileSize = 480;
  private subscription: Subscription = new Subscription();

  constructor(
    private sdsDialogService: SdsDialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver, // Will watch for changes between mobile and non-mobile screen size
  ) { }

  ngOnInit() {
    this.observeViewChange();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFilterChange($event) {
    if (this.filterPanelConfig.isHistoryEnabled) {
      this.updateFilterRoute({selectedFilters: $event});
    }
    this.selectedFilters.emit($event);
  }

  onPanelHeaderClicked() {
    this.panelExpanded = !this.panelExpanded;
  }
  
  onOpenToolbarModalClicked() {
    const dialog = this.sdsDialogService.open(SideToolbarDialogComponent,
      {
        data: {
          selectionPanelConfig: this.selectionPanelConfig,
          filterPanelConfig: this.filterPanelConfig
        },
        height: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        maxHeight: '100vh',
        hasBackdrop: false,
        displayCloseBtn: false,
      });

      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.updateFilterRoute(result);
        }
      });
  }

  private observeViewChange() {
    const breakpointUnsubscription = this.breakpointObserver.observe([
      `(max-width: ${this.mobileSize}px)`
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    });

    this.subscription.add(breakpointUnsubscription);
  }

  private updateFilterRoute(change: DialogClosedResult) {
    const selectedPanel: NavigationLink = change.selectedPanel;
    const selectedFilters = change.selectedFilters;

    const queryString = window.location.search.substring(1);
    let queryObj = qs.parse(queryString, { allowPrototypes: true });

    if (queryObj.hasOwnProperty('sfm')) {
      queryObj.sfm = {};
    }

    queryObj['sfm'] = selectedFilters;
    let params = this.convertToParam(queryObj);
    
    if (selectedPanel) {
      params = {...params, ...selectedPanel.queryParams};
    }

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: params,
    });
  }

  private convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.shortFormatDate
    });
    if (encodedValues) {
      return this.getUrlParams(encodedValues);
    } else {
      return '';
    }
  }

  private getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach(pair => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] =
          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];
      }
    });
    return target;
  }

  shortFormatDate(prefix, value) {
    const fixDigit = val => {
      return val.toString().length === 1 ? '0' + val : val;
    };
    const getFormattedDate = date =>
      `${fixDigit(
        date.getMonth() + 1
      )}/${date.getDate()}/${date.getFullYear()}`;
    if (value instanceof Date) {
      value = getFormattedDate(new Date(value));
    }
    return value;
  }

}
