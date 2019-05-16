import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-side-navigation-sample',
  templateUrl: 'side-navigation-sample.component.html'
})

export class SideNavigationSampleComponent implements OnInit {
  constructor() { }
  model = {
    navigationLinks: [{
      text: 'Parent 1', id: 'linkp1', children: [
        { text: 'Child 1 of Parent 1', route: '/', id: 'linkc1p1' },
        { text: 'Child 2 of Parent 1', route: '/', id: 'linkc2p1' },
        { text: 'Child 3 of Parent 1', route: '/', id: 'linkc3p1' },
        {
          text: 'Child 4 of Parent 1', route: '/', id: 'linkc4p1'
          , children: [
            { text: 'Grandchild 1 of Child 4 of Parent 1', route: '/', id: 'linkgc1c4p1' },
            { text: 'Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkgc2c4p1' }
          ]
        }
      ]
    },
    {
      text: 'Parent 2', id: 'linkp2', children: [
        { text: 'Child 1 of Parent 2', route: '/', id: 'linkc1p2' },
        { text: 'Child 2 of Parent 2', route: '/', id: 'linkc2p2' },
        { text: 'Child 3 of Parent 2', route: '/', id: 'linkc3p2' },
        { text: 'Child 4 of Parent 2', route: '/', id: 'linkc4p2' }
      ]
    }
    ]
  };

  ngOnInit() { }
}