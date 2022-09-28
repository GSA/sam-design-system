import { Component, Input } from '@angular/core';
import { UsaNavigationMode, SidenavModel } from '@gsa-sam/ngx-uswds';
import { SdsDialogConfig } from '@gsa-sam/components';

@Component({
  selector: 'dropdown-side-navigation',
  templateUrl: './dropdown-side-navigation.component.html'
})
export class DropdownSideNavigationComponent {

  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Search Dropdowns',
  };

  @Input() sidenavContent: SidenavModel[] = [
    {
      mode: UsaNavigationMode.EXTERNAL,
      text: 'Entity Registration',
      path: 'javascript:void(0)',
      id: '1',
      children: [
        {
          mode: UsaNavigationMode.EXTERNAL,
          text: 'Core Data',
          path: 'javascript:void(0)',
          id: '100',
        },
        {
          mode: UsaNavigationMode.EXTERNAL,
          text: 'Assertions',
          path: 'javascript:void(0)',
          id: '100',
          children: [
            {
              mode: UsaNavigationMode.EXTERNAL,
              text: 'Service Classifications',
              path: 'javascript:void(0)',
              id: '1000'
            },
            {
              mode: UsaNavigationMode.EXTERNAL,
              text: 'Disaster Response',
              path: 'javascript:void(0)',
              id: '1000'
            }
          ]
        },
        {
          mode: UsaNavigationMode.EXTERNAL,
          text: 'Reps and Certs',
          path: 'javascript:void(0)',
          id: '200',
        },
      ]
    },
    {
      mode: UsaNavigationMode.EVENT,
      text: 'Exclusions',
      path: 'exclusions',
      id: '3'
    },
    {
      mode: UsaNavigationMode.EVENT,
      text: 'Responsibility/Qualification',
      path: 'responsibility/qualification',
      id: '4'
    },
    {
      mode: UsaNavigationMode.EVENT,
      text: 'Entity Reporting',
      path: 'entityreporting',
      id: '5'
    }
  ];

  @Input() expandType: 'single' | 'multiple' = 'single';
  @Input() enableLabelCollapse: boolean = false;
  @Input() autoCollapseLabels: boolean = false;
  @Input() selectFirstLabelChild: boolean = true;
  @Input() sidenavClicked: Function = ($event) => {
    console.log($event);
  }
}