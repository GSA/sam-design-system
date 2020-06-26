import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  SideNavigationModel,
  NavigationLink,
  NavigationMode
} from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { navigationConfig } from './navigate.config';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: 'sidenavigation-optional.component.html'
})
export class SideNavigationOptional {
  public navigationModel: SideNavigationModel = {
    navigationLinks: [
      {
        id: 'all',
        text: 'All Domains',
        mode: NavigationMode.INTERNAL,
        route: '/documentation/components/sidenavigation/examples'
      },
      {
        id: 'opportunites',
        text: 'Contract Opportunities',
        mode: NavigationMode.INTERNAL,
        route: '/documentation/components/sidenavigation/examples',
        queryParams: { index: 'opportunities' }
      },
      {
        id: 'contractData',
        text: 'Contract Data',
        mode: NavigationMode.INTERNAL,
        route: '/documentation/components/sidenavigation/examples',
        queryParams: { index: 'contractdata' }
      },
      {
        id: 'federalAssistance',
        text: 'Federal Assistance',
        mode: NavigationMode.INTERNAL,
        route: '/documentation/components/sidenavigation/examples',
        children: [
          {
            id: 'assistancelist',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'assistancelist' },
            text: 'Assistance Listings'
          },
          {
            id: 'regionallocation',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            text: 'Regional Locations'
          }
        ]
      },
      {
        id: 'entityInformation',
        text: 'Entity Information',
        route: '/',
        queryParams: { index: 'entityinfo' },
        mode: NavigationMode.INTERNAL,
        children: [
          {
            id: 'registrations',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'registrations' },
            text: 'Entity Registrations'
          },
          {
            id: 'disasterResponse',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'disasterresponse' },
            text: 'Disaster Response Registry'
          },
          {
            id: 'exclusions',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'exclusions' },
            text: 'Exclusions'
          }
        ]
      },
      {
        id: 'federalHierarchy',
        route: '/documentation/components/sidenavigation/examples',
        mode: NavigationMode.INTERNAL,
        text: 'Federal Hierarchy'
      },
      {
        id: 'wageDeterminations',
        route: '/documentation/components/sidenavigation/examples',
        queryParams: { index: 'wdid' },
        mode: NavigationMode.INTERNAL,
        text: 'Wage Determinations',
        children: [
          {
            id: 'searchWdByID',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'wdid' },
            text: 'By Wage Determination ID'
          },
          {
            id: 'dba',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'dba' },
            text: 'Construction (DBA)'
          },
          {
            id: 'sca',
            mode: NavigationMode.INTERNAL,
            route: '/documentation/components/sidenavigation/examples',
            queryParams: { index: 'sca' },
            text: 'Service Contracts (SCA)',
            children: [
              {
                id: 'cba',
                mode: NavigationMode.INTERNAL,
                route: '/documentation/components/sidenavigation/examples',
                text: 'Collective Bargaining Agreements'
              }
            ]
          }
        ]
      }
    ]
  };
  form: FormGroup;
  filterModel: any;

  @ViewChild('navigationAccordion')
  navigationAccordion: CdkAccordionItem;
  @ViewChild('filtersAccordion')
  filtersAccordion: CdkAccordionItem;
  @ViewChild('sideNav') sideNav;
  public pageHeader: string;
  // selectedId: string = 'All Domains';

  constructor(
    private activeRoute: ActivatedRoute,
    private change: ChangeDetectorRef
  ) {}

  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'accordion'
      },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Unique Entity ID',
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple'
          }
        },
        {
          key: 'multiple.accordion.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        },
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            label: 'Expiration Date',
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' }
            ]
          }
        }
      ]
    }
  ];

  // ngAfterViewInit(): void {
  //   this.activeRoute.queryParams.subscribe(queryParams => {
  //     let selectionOptions = this.navigationModel.navigationLinks;
  //     let queryMatcher = queryParams.index;

  //     for (let i = 0; i < selectionOptions.length; i++) {
  //       // this.addToOptions(selectionOptions[i])
  //       // console.log(queryMatcher);
  //       let modelId = selectionOptions[i].id;
  //       console.log(queryMatcher)
  //       let modelText = selectionOptions[i].text;
  //       // console.log(this.navigationModel.navigationLinks)
  //       const purpose = this.navigationModel.navigationLinks
  //       .filter(item => item.id = item.id)
  //       if (queryMatcher == modelId) {
  //         let modelText = selectionOptions[i].text;
  //         this.pageHeader = modelText;
  //       } else {
  //         this.pageHeader = 'Select by Domain';
  //       }
  //       this.change.detectChanges();
  //     }
  //   });
  // }
  onSelectChange() {
    this.sideNav.select(this.selectedId);
  }
  selectedId: string = 'all';

  options: any[] = [];

  private findItemByQueryString(linkList: NavigationLink[]) {
    for (let i = 0; i < linkList.length; i++) {
      let item = linkList[i];
      if (item.text.trim() === this.pageHeader.trim()) {
        this.selectedId = item.id;
      }
      else {
        if (item.children && item.children.length !== 0) {
          this.findItemByQueryString(item.children)
        }
      }
    }
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.navigationModel.navigationLinks.length; i++) {
      this.addToOptions(this.navigationModel.navigationLinks[i]);
    }
    console.log(this.selectedId)
    this.sideNav.select(this.selectedId);
    this.change.detectChanges();

    this.activeRoute.queryParams.subscribe(queryParams => {
      if (queryParams.index) {
        this.pageHeader = queryParams.index;
        if (this.navigationModel.navigationLinks) {
          this.findItemByQueryString(this.navigationModel.navigationLinks);
          this.sideNav.select(this.selectedId);
        }
      } else {
        this.pageHeader = 'Select by Domain';
      }
      this.change.detectChanges();
    })

  }




  addToOptions(item: any) {
    this.options.push(item);
    if (item.children) {
      for (let i = 0; i < item.children.length; i++) {
        this.addToOptions(item.children[i]);
      }
    }
  }

  onLinkClick() {
    if (!this.filtersAccordion.expanded) {
      this.filtersAccordion.toggle();
    }
    this.navigationAccordion.toggle();
  }
}
