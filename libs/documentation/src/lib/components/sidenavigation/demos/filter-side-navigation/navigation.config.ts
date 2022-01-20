import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let navigationConfig: SideNavigationModel = {
    navigationLinks: [
        { id: 'all', text: 'All Domains', mode: NavigationMode.INTERNAL, route: '/documentation/layout' },
        { id: 'opportunites', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/documentation/layout', queryParams: { 'index' : 'opportunities'}},
        { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/documentation/layout', queryParams: { 'index' : 'contractdata'}},
        {
            id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: '/documentation/layout', children: [

                {
                    id: 'assistancelist', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'assistancelist'}, text: 'Assistance Listings'
                },
                {
                    id: 'regionallocation', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', text: 'Regional Locations'
                }
            ]
        },
        {
            id: 'entityInformation', text: 'Entity Information', route: '/documentation/layout', queryParams: { 'index' : 'entityinfo'}, mode: NavigationMode.INTERNAL, children: [
                {
                    id: 'registrations', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'registrations'}, text: 'Entity Registrations'
                },
                {
                    id: 'disasterResponse', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'disasterresponse'}, text: 'Disaster Response Registry'
                },
                {
                    id: 'exclusions', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'exclusions'}, text: 'Exclusions'
                }
            ]
        },
        {
            id: 'federalHierarchy', route: '/documentation/layout', mode: NavigationMode.INTERNAL,
            text: 'Federal Hierarchy'
        },
        {
            id: 'wageDeterminations', route: '/documentation/layout', queryParams: { 'index' : 'wdid'}, mode: NavigationMode.INTERNAL,
            text: 'Wage Determinations', children: [
                {
                    id: 'searchWdByID', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'wdid'}, text: 'By Wage Determination ID'
                },
                {
                    id: 'dba', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'dba'}, text: 'Construction (DBA)'
                },
                {
                    id: 'sca', mode: NavigationMode.INTERNAL,
                    route: '/documentation/layout', queryParams: { 'index' : 'sca'}, text: 'Service Contracts (SCA)', children: [
                        {
                            id: 'cba', mode: NavigationMode.INTERNAL,
                            route: '/documentation/layout', text: 'Collective Bargaining Agreements'
                        }
                    ]
                }
            ]
        }
    ]
};



