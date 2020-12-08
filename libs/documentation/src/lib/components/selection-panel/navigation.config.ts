import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let selectionPanelConfig: SideNavigationModel = {
     navigationLinks: [
    {

      text: 'All Domains', id: 'all', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'All Domains' }, mode: NavigationMode.INTERNAL, children: [
        { text: 'Contract Opportunities', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Contract Opportunities' }, id: 'linkc1p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Contract Data', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Contract Data'}, id: 'linkc2p1', mode: NavigationMode.INTERNAL
        },
        { text: 'Federal Assistance', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Federal Assistance' }, id: 'linkc3p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Assistance Listings', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Assistance Listings' }, id: 'linkc4p1', mode: NavigationMode.INTERNAL
          , children: [
            {
              text: 'Regional Locations', queryParams: { 'item': 'Regional Locations' }, route: '/documentation/components/sidenavigation/examples', id: 'linkgc2c4p1', mode: NavigationMode.INTERNAL,
              children: [
                { text: 'Entity Information', queryParams: { 'item': 'Entity Information' }, route: '/documentation/components/sidenavigation/examples', id: 'linkg1gc1c4p1', mode: NavigationMode.INTERNAL },
                {
                  text: 'Disaster Response Registry', queryParams: { 'item': 'Disaster Response Registry' }, route: '/documentation/components/sidenavigation/examples', id: 'linkg2gc1c4p1', mode: NavigationMode.INTERNAL
                },
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Exclusions', id: 'linkp2', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Exclusions' }, mode: NavigationMode.INTERNAL, children: [
        {
          text: 'Federal Hierarchy', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Federal Hierarchy' }, id: 'linkc1p2', mode: NavigationMode.INTERNAL, children: [

            { text: 'Wage Determinations', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Wage Determinations' }, id: 'linkgc1c1p2', mode: NavigationMode.INTERNAL },
          ]
        },
        { text: 'By Wage Determination ID', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'By Wage Determination ID' }, id: 'linkc2p2', mode: NavigationMode.INTERNAL },
        { text: 'Construction (DBA)', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Construction (DBA)' }, id: 'linkc3p2', mode: NavigationMode.INTERNAL },
        { text: 'Service Contracts (SCA)', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Service Contracts (SCA)' }, id: 'linkc4p2', mode: NavigationMode.INTERNAL },
         { text: 'Collective Bargaining Agreements', route: '/documentation/components/sidenavigation/examples', queryParams: { 'item': 'Collective Bargaining Agreements' }, id: 'linkc5p2', mode: NavigationMode.INTERNAL }

      ]
    }
    ]
};



