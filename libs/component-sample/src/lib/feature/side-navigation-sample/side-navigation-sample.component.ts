import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components'




@Component({
  selector: 'sds-side-navigation-sample',
  templateUrl: 'side-navigation-sample.component.html'
})

export class SideNavigationSampleComponent implements AfterViewInit, OnInit {

  public linkEvent = new BehaviorSubject<object>(null);

  ngOnInit() {

    this.linkEvent.subscribe(
      value => {
        console.log('Link Event Clicked Change');
        console.log(value);
      }
    );
  }


  @ViewChild('sideNav') sideNav;
  constructor(private change: ChangeDetectorRef) { }
  model: SideNavigationModel = {
    navigationLinks: [{
      text: 'Parent 1', id: 'linkp1', route: 'http://www.google.com', mode: NavigationMode.EXTERNAL, children: [
        { text: 'Child 1 of Parent 1', route: '/', id: 'linkc1p1', mode: NavigationMode.EVENT },
        {
          text: 'Child 2 of Parent 1', route: '/', id: 'linkc2p1', mode: NavigationMode.INTERNAL, children: [
            { text: 'Grandchild 1 of Child 2 of Parent 1', route: '/', id: 'linkgc1c2p1', mode: NavigationMode.INTERNAL }]
        },
        { text: 'Child 3 of Parent 1', route: '/', id: 'linkc3p1', mode: NavigationMode.INTERNAL },
        {
          text: 'Child 4 of Parent 1', route: '/', id: 'linkc4p1', mode: NavigationMode.INTERNAL
          , children: [
            { text: 'Grandchild 1 of Child 4 of Parent 1', route: '/', id: 'linkgc1c4p1', mode: NavigationMode.INTERNAL },
            {
              text: 'Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkgc2c4p1', mode: NavigationMode.INTERNAL,
              children: [
                { text: ' Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1', mode: NavigationMode.INTERNAL },
                {
                  text: 'Great 2 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg2gc1c4p1', mode: NavigationMode.INTERNAL
                  //, children: [{ text: 'Great 1 of  Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1' }]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Parent 2', id: 'linkp2', route: '/', mode: NavigationMode.INTERNAL, children: [
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