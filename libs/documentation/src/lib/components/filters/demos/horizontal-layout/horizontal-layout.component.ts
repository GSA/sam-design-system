import { Component, Injectable } from '@angular/core';
import {
  SDSAutocompletelConfiguration,
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

/** Service setup to provide static options for autocomplete dropdown */
@Injectable()
export class AutocompleteDropdownMenu
  implements SDSAutocompleteServiceInterface {
  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    const options = [
      {
        id: '1',
        name: 'Federal Acquisition',
        subtext:
          "The process by which government contract entities to provide goods or services on the government's behalf. This is done via bidding on contracts that the government releases to interested businesses.",
      },
      {
        id: '2',
        name: 'Federal Assistance',
        subtext:
          'Organizations attempting to recieve financial assistance in the way of loans or grants',
      },
      { id: '3', name: 'All Topics', subtext: '' },
    ];
    return of({ totalItems: 3, items: options });
  }
}

@Component({
  selector: 'gsa-sam-horizontal-layout',
  templateUrl: './horizontal-layout.component.html',
  providers: [AutocompleteDropdownMenu],
})
export class HorizontalLayoutComponent {
  public settings = new SDSAutocompletelConfiguration();

  public autocompleteModel = new SDSSelectedItemModel();

  /** Formly config for demo */
  noPopupConfig: FormlyFieldConfig[] = [
    {
      key: 'filters',
      fieldGroupClassName: 'grid-row grid-gap-2', // Set up grid row so that form controls will be on same row
      fieldGroup: [
        {
          key: 'userRole',
          type: 'select',
          className: 'tablet:grid-col-5 mobile-lg:grid-col-12', // Set up column space for input based on screensize
          templateOptions: {
            label: 'I am a...',
            labelClass: 'text-bold', // Add bold style to label
            hideOptional: true,
            options: [
              { label: 'U.S. Federal User', value: 'fedUser' },
              { label: 'U.S. Non-Fed User', value: 'nonFedUser' },
              { label: 'Neither', value: 'none' },
            ],
          },
        },
        {
          key: 'userPurpose',
          type: 'autocomplete',
          className: 'tablet:grid-col-5 mobile-lg:grid-col-12', // Set up column space for input based on screensize
          templateOptions: {
            label: 'I am interested in...',
            labelClass: 'text-bold', // Add bold style to label
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel,
          },
        },
      ],
    },
  ];

  constructor(public service: AutocompleteDropdownMenu) {
    this.settings.id = 'noPopupHorizontalAutocomplete';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.inputReadOnly = true; // Set autocomplete as read only
    this.settings.ariaLabelText = 'Select your purpose of registration';
  }

  onFilterChange($event) {
    console.log($event);
  }
}
