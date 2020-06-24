import { Component, ViewChild } from '@angular/core';
import { SideNavigationModel, NavigationLink} from '@gsa-sam/components'
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { navigationConfig } from './navigate.config';
import { CdkAccordionItem } from '@angular/cdk/accordion';
@Component({
  templateUrl: 'sidenavigation-optional.component.html'
})

export class SideNavigationOptional  {
  public navigationModel: SideNavigationModel = navigationConfig;
  form:FormGroup;
  filterModel: any;

  @ViewChild('navigationAccordion')
  navigationAccordion: CdkAccordionItem;
  @ViewChild('filtersAccordion')
  filtersAccordion: CdkAccordionItem;
  public pageHeader: string;
  selectedId: string = 'all';



  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
       group: 'accordion',
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
              { label: '90 Days', value: '90' },

            ]
          },
        },
      ]
    }
  ];
  onLinkClick(){
    if(!this.filtersAccordion.expanded){
      this.filtersAccordion.toggle();
    }
    this.navigationAccordion.toggle();
  }

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

}
