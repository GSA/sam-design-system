import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let dropdownNavigationConfig: SideNavigationModel = {
  navigationLinks: [
    {
        id: 'wageDeterminations',
        route: '/documentation/components/sidenavigation',
        queryParams: { index: 'wdid' },
        mode: NavigationMode.INTERNAL,
        text: 'Entity Registration',
        children: [
            {
                id: 'searchWdByID',
                mode: NavigationMode.INTERNAL,
                route: '/documentation/components/sidenavigation',
                queryParams: { index: 'wdid' },
                text: 'Core Data',
            },
            {
                id: 'searchWdByID',
                mode: NavigationMode.INTERNAL,
                route: '/documentation/components/sidenavigation',
                queryParams: { index: 'wdid' },
                text: 'Assertions',
                children: [
                    {
                        id: 'dba',
                        mode: NavigationMode.INTERNAL,
                        route: '/documentation/components/sidenavigation',
                        queryParams: { index: 'dba' },
                        text: 'Service Classifications',
                    },
                    {
                        id: 'sca',
                        mode: NavigationMode.INTERNAL,
                        route: '/documentation/components/sidenavigation',
                        queryParams: { index: 'sca' },
                        text: 'Disaster Response',
                    },
                ]
            },
            {
                id: 'searchWdByID',
                mode: NavigationMode.INTERNAL,
                route: '/documentation/components/sidenavigation',
                queryParams: { index: 'wdid' },
                text: 'Reps and Certs',
            },
        ],
    },
    {
      id: 'opportunites',
      text: 'Exclusions',
      mode: NavigationMode.INTERNAL,
      route: '/documentation/components/sidenavigation',
      queryParams: { index: 'opportunities' },
    },
    {
      id: 'contractData',
      text: 'Responsibility/Qualification',
      mode: NavigationMode.INTERNAL,
      route: '/documentation/components/sidenavigation',
      queryParams: { index: 'contractdata' },
    },
    {
        id: 'all',
        text: 'Entity Reporting',
        mode: NavigationMode.INTERNAL,
        route: '/documentation/components/sidenavigation',
    },
  ],
};
