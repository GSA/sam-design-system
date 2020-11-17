import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationLink, SdsDialogService } from '@gsa-sam/components';
import { SideToolbarDialogComponent } from '../side-toolbar-dialog/side-toolbar-dialog.component';
import { SelectionPanelConfig, FilterPanelConfig } from './model/side-toolbar.model';
import * as qs from 'qs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent {
  
  @Input() selectionPanelConfig: SelectionPanelConfig;
  @Input() filterPanelConfig: FilterPanelConfig;

  @Output() selectedFilters = new EventEmitter();

  filtersExpanded = false;
  panelExpanded = false;

  constructor(
    private sdsDialogService: SdsDialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

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
        width: '100vw',
        height:  '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        hasBackdrop: false,
        
      });

      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.updateFilterRoute(result);
        }
      });
  }

  private updateFilterRoute(change: any) {
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
      params = {...selectedPanel.queryParams, ...params};
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
