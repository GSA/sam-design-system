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
      text: 'Parent 1', id: 'linkp1', route: '/component/sideNav', queryParams: { 'item': 'Parent 1' }, mode: NavigationMode.INTERNAL, children: [
        { text: 'Child 1 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 1 of Parent 1' }, id: 'linkc1p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Child 2 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 2 of Parent 1' }, id: 'linkc2p1', mode: NavigationMode.INTERNAL, children: [
            { text: 'Grandchild 1 of Child 2 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Grandchild 1 of Child 2 of Parent 1' }, id: 'linkgc1c2p1', mode: NavigationMode.INTERNAL }]
        },
        { text: 'Child 3 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 3 of Parent 1' }, id: 'linkc3p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Child 4 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 4 of Parent 1' }, id: 'linkc4p1', mode: NavigationMode.INTERNAL
          , children: [
            { text: 'Grandchild 1 of Child 4 of Parent 1', queryParams: { 'item': 'Grandchild 1 of Child 4 of Parent 1' }, route: '/component/sideNav', id: 'linkgc1c4p1', mode: NavigationMode.INTERNAL },
            {
              text: 'Grandchild 2 of Child 4 of Parent 1', queryParams: { 'item': 'Grandchild 2 of Child 4 of Parent 1' }, route: '/component/sideNav', id: 'linkgc2c4p1', mode: NavigationMode.INTERNAL,
              children: [
                { text: ' Great 1 of Grandchild 2 of Child 4 of Parent 1', queryParams: { 'item': 'Great 1 of Grandchild 2 of Child 4 of Parent 1' }, route: '/component/sideNav', id: 'linkg1gc1c4p1', mode: NavigationMode.INTERNAL },
                {
                  text: 'Great 2 of Grandchild 2 of Child 4 of Parent 1', queryParams: { 'item': 'Great 2 of Grandchild 2 of Child 4 of Parent 1' }, route: '/component/sideNav', id: 'linkg2gc1c4p1', mode: NavigationMode.INTERNAL
                },
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Parent 2', id: 'linkp2', route: '/component/sideNav', queryParams: { 'item': 'Parent 2' }, mode: NavigationMode.INTERNAL, children: [
        {
          text: 'Child 1 of Parent 2', route: '/component/sideNav', queryParams: { 'item': 'Child 1 of Parent 2' }, id: 'linkc1p2', mode: NavigationMode.INTERNAL, children: [

            { text: 'Grandchild 1 Child 1 of Parent 2', route: '/component/sideNav', queryParams: { 'item': 'Grandchild 1 Child 1 of Parent 2' }, id: 'linkgc1c1p2', mode: NavigationMode.INTERNAL },
          ]
        },
        { text: 'Child 2 of Parent 2', route: '/component/sideNav', queryParams: { 'item': 'Child 2 of Parent 2' }, id: 'linkc2p2', mode: NavigationMode.INTERNAL },
        { text: 'Child 3 of Parent 2', route: '/component/sideNav', queryParams: { 'item': 'Child 3 of Parent 2' }, id: 'linkc3p2', mode: NavigationMode.INTERNAL },
        { text: 'Child 4 of Parent 2', route: '/component/sideNav', queryParams: { 'item': 'Child 4 of Parent 2' }, id: 'linkc4p2', mode: NavigationMode.INTERNAL }
      ]
    }
    ]
  };
  model2: SideNavigationModel = {
    navigationLinks: [{
      text: 'Parent 1', id: 'linkp1', route: '/component/sideNav', queryParams: { 'item': 'Parent 1' }, mode: NavigationMode.INTERNAL, children: [
        { text: 'Child 1 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 1 of Parent 1' }, id: 'linkc1p1', mode: NavigationMode.INTERNAL },
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
  navigationExpanded = true;
  sideNavExpanded = true;
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
        this.pageHeader = 'All Domains';
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

  // onLinkClick() {
  //   if (!this.filtersAccordion.expanded) {
  //     this.filtersAccordion.toggle();
  //   }
  //   this.navigationAccordion.toggle();
  // }
}
