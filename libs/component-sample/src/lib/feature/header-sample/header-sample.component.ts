import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-header-sample',
  templateUrl: './header-sample.component.html',
  styleUrls: ['./header-sample.component.scss']
})
export class HeaderSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  modelHeader = {
    secondaryLinks: [{
      imageClass: 'fas icon-comment', text: 'Messages', route: '/', id: 'messages'
    },
    {
      imageClass: 'fas icon-edit', text: 'Requests', route: '/', id: 'request'
    },
    {
      imageClass: 'fas icon-th', text: 'Workspace', route: '/', id: 'workspace'
    },
    {
      imageClass: 'fas icon-sign-out-alt', text: 'Sign Out', route: '/', id: 'signOut'
    }],
    navigationLinks: [
      { text: 'Search', route: '/patterns/page/angualr-header-footer-component', id: 'search' },
      { text: 'Databank', route: '/', id: 'databank' },
      { text: 'Data Services', route: '/', id: 'dataService' },
      { text: 'Help', route: '/', id: 'help' },
      {
        text: 'Link 3', id: 'link3', children: [
          { text: 'Link 3 sub 1', route: '/', id: 'link3sub1' },
          { text: 'Link 3 sub 2', route: '/', id: 'link3sub2' },
          { text: 'Link 3 sub 3', route: '/', id: 'link3sub3' },
          { text: 'Link 3 sub 4', route: '/', id: 'link3sub4' }
        ]
      },
      {
        text: 'Link 4', id: 'link4', children: [
          { text: 'Link 4 sub 1', route: '/', id: 'link4sub1' },
          { text: 'Link 4 sub 2', route: '/', id: 'link4sub2' },
          { text: 'Link 4 sub 3', route: '/', id: 'link4sub3' },
          { text: 'Link 4 sub 4', route: '/', id: 'link4sub4' }
        ]
      }
    ],
    home: {
      text: 'Home',
      route: '/',
      imageSourcePath: '/assets/img/sam-r9-logo-color.png',
      imageAltText: 'Beta Sam Logo',
      id: 'home'
    }
  };
}
