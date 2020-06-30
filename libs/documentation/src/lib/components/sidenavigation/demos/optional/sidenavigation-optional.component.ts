import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SideNavigationModel, NavigationLink } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { navigationConfig } from './navigate.config';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: 'sidenavigation-optional.component.html'
})
export class SideNavigationOptional {
  public navigationModel: SideNavigationModel = navigationConfig;
  form: FormGroup;
  filterModel: any;

  @ViewChild('navigationAccordion')
  navigationAccordion: CdkAccordionItem;
  @ViewChild('filtersAccordion')
  filtersAccordion: CdkAccordionItem;
  @ViewChild('sideNav') sideNav;
  public pageHeader: string;
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
      } else {
        if (item.children && item.children.length !== 0) {
          this.findItemByQueryString(item.children);
        }
      }
    }
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.navigationModel.navigationLinks.length; i++) {
      this.addToOptions(this.navigationModel.navigationLinks[i]);
    }
    console.log(this.selectedId);
    this.sideNav.select(this.selectedId);
    this.change.detectChanges();

    this.activeRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if (queryParams.item) {
        console.log(queryParams);
        this.pageHeader = queryParams.item;
        if (this.navigationModel.navigationLinks) {
          this.findItemByQueryString(this.navigationModel.navigationLinks);
          this.sideNav.select(this.selectedId);
        }
      } else {
        this.pageHeader = 'All Domains';
      }
      this.change.detectChanges();
    });
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
