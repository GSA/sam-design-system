import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavigationModel, NavigationMode, NavigationLink } from '@gsa-sam/components'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sds-side-navigation-sample',
  templateUrl: 'side-navigation-sample.component.html'
})

export class SideNavigationSampleComponent implements AfterViewInit, OnInit {


  public pageHeader: string;
  public linkEvent = new BehaviorSubject<object>(null);
  sideNavExpanded = true;
  ngOnInit() {
    this.linkEvent.subscribe(
      value => {
        console.log('Link Event Clicked Change');
        console.log(value);
      }
    );


  }



  @ViewChild('sideNav') sideNav;
  constructor(private change: ChangeDetectorRef, private activeRoute: ActivatedRoute) { }
  model: SideNavigationModel = {
    navigationLinks: [{
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
                  //, children: [{ text: 'Great 1 of  Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1' }]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Parent 2', id: 'linkp2', route: '/', mode: NavigationMode.LABEL, children: [
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

  onSelectChange() {
    this.sideNav.select(this.selectedId);
  }
  selectedId: string = 'linkp1';

  options: any[] = [];


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
