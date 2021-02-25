import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let selectionPanelConfig: SideNavigationModel = {
  navigationLinks: [


    { text: 'Contract Opportunities', route: '/documentation/components/selection-panel/examples', queryParams: { 'item': 'Contract Opportunities' }, id: 'linkc1p1', mode: NavigationMode.INTERNAL },
    {
      text: 'Contract Data', route: '/documentation/components/selection-panel/examples', queryParams: { 'item': 'Contract Data' }, id: 'linkc2p1', mode: NavigationMode.INTERNAL
    },
    { text: 'Federal Assistance', route: '/documentation/components/selection-panel/examples', queryParams: { 'item': 'Federal Assistance' }, id: 'linkc3p1', mode: NavigationMode.INTERNAL },
    {
      text: 'Assistance Listings', route: '/documentation/components/selection-panel/examples', queryParams: { 'item': 'Assistance Listings' }, id: 'linkc4p1', mode: NavigationMode.INTERNAL
      , children: [
        {
          text: 'Regional Locations', queryParams: { 'item': 'Regional Locations' }, route: '/documentation/components/selection-panel/examples', id: 'linkgc2c4p1', mode: NavigationMode.INTERNAL,
          children: [
            { text: 'Entity Information', queryParams: { 'item': 'Entity Information' }, route: '/documentation/components/selection-panel/examples', id: 'linkg1gc1c4p1', mode: NavigationMode.INTERNAL },
            {
              text: 'Disaster Response Registry', queryParams: { 'item': 'Disaster Response Registry' }, route: '/documentation/components/selection-panel/examples', id: 'linkg2gc1c4p1', mode: NavigationMode.INTERNAL
            },
          ]
        }
      ]
    }
  ]
};



