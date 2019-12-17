import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavigationModel, NavigationMode, NavigationLink } from '@gsa-sam/components'
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sds-side-navigation-sample',
  templateUrl: 'side-navigation-sample.component.html'
})

export class SideNavigationSampleComponent implements AfterViewInit, OnInit {
  constructor(private change: ChangeDetectorRef, private activeRoute: ActivatedRoute) { }


  results: any = {};
  form = new FormGroup({});
  model1 = {};
  /**
* Event when something is checked/selected in the grid
*/
  public filterChange$ = new BehaviorSubject<object>(null);

  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword',
          hideLabel: true
        },

      }]
    },

    {
      key: 'searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity' },
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'cageNcge',
          type: 'input',
          templateOptions: {
            label: 'CAGE/NCAGE',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (DUNS)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        }
      ],
    },
    {
      key: 'status',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Status' },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        }
      ]
    },
    {
      key: 'expirationDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },
        }
      ]
    },
    {
      key: 'addressUpdate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Address Update' },
      fieldGroup: [
        {
          key: 'addressUpdateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: 'Update Required', value: 'adrupr' },
              { label: 'Update Not Required', value: 'adrupn' },

            ]
          },
        }
      ]
    },
    {
      key: 'entityType',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity Type' },
      fieldGroup: [
        {
          key: 'entityType',
          type: 'select',
          templateOptions: {
            label: 'Entity Type',
            multiple: false,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assitance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Heirarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
      ]
    }
  ];


  public pageHeader: string;
  public linkEvent = new BehaviorSubject<object>(null);
  sideNavExpanded = true;
  // tslint:disable-next-line: member-ordering
  showValue = true;
  // tslint:disable-next-line: member-ordering
  @ViewChild('sideNav') sideNav;
  // tslint:disable-next-line: member-ordering

  model: SideNavigationModel = {
    navigationLinks: [
      {
      text: 'Parent 1', showFunction: function () {

        return this.showValue;
      }.bind(this), id: 'linkp1', route: '/component/sideNav', queryParams: { 'item': 'Parent 1' }, mode: NavigationMode.INTERNAL, children: [
        { text: 'Child 1 of Parent 1', route: '/component/sideNav', queryParams: { 'item': 'Child 1 of Parent 1' }, id: 'linkc1p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Child 2 of Parent 1', //hide:true,
          route: '/component/sideNav', queryParams: { 'item': 'Child 2 of Parent 1' }, id: 'linkc2p1', mode: NavigationMode.INTERNAL, children: [
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
                  //, children: [{ text: 'Great 1 of  Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1' }]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Parent 2', showFunction:this.showFunction.bind(this), id: 'linkp2', route: '/', mode: NavigationMode.LABEL, children: [
        {
          text: 'Child 1 of Parent 2', route: '/', id: 'linkc1p2', mode: NavigationMode.INTERNAL, children: [

            { text: 'Grandchild 1 Child 1 of Parent 2', route: '/', id: 'linkgc1c1p2', mode: NavigationMode.INTERNAL },
          ]
        },
        { text: 'Child 2 of Parent 2', route: '/', id: 'linkc2p2', mode: NavigationMode.INTERNAL },
        { text: 'Child 3 of Parent 2', route: '/', id: 'linkc3p2', mode: NavigationMode.INTERNAL },
        { text: 'Child 4 of Parent 2', route: '/', id: 'linkc4p2', mode: NavigationMode.INTERNAL }
      ]
    }
    ]
  };
  selectedId: string = 'linkp1';

  options: any[] = [];
  ngOnInit() {
    this.linkEvent.subscribe(
      value => {
        console.log('Link Event Clicked Change');
        console.log(value);
      }
    );

    this.filterChange$.subscribe(
      res =>
        this.results = res
    );
  }

  switchShowValue() {
    this.showValue = !this.showValue;
  }
  private findItemByQueryString(linkList: NavigationLink[]) {
    for (let i = 0; i < linkList.length; i++) {
      const item = linkList[i];
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

  onSelectChange() {
    this.sideNav.select(this.selectedId);
  }

  showFunction(){
   return this.showValue;
  }


  ngAfterViewInit(): void {
    for (let i = 0; i < this.model.navigationLinks.length; i++) {
      this.addToOptions(this.model.navigationLinks[i]);
    }
    this.sideNav.select(this.selectedId);
    this.change.detectChanges();

    this.activeRoute.queryParams.subscribe(queryParams => {
      if (queryParams.item) {
        this.pageHeader = queryParams.item;
        if (this.model.navigationLinks) {
          this.findItemByQueryString(this.model.navigationLinks);
          this.sideNav.select(this.selectedId);
        }
      } else {
        this.pageHeader = 'Unknown';
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
}