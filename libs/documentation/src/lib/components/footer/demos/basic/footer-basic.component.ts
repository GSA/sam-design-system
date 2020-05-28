import { Component, OnInit } from '@angular/core';
import { FooterModel, NavigationMode } from '@gsa-sam/components';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './footer-basic.component.html',
  styleUrls: ['./footer-basic.component.scss']
})
export class FooterBasic implements OnInit {
  constructor() {}
  public linkEvent = new BehaviorSubject<object>(null);

  modelFooter: FooterModel = {
    linkSections: [
      {
        text: 'Our Website',
        links: [
          {
            text: 'About This Site',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          { text: 'Release Notes', route: '/', mode: NavigationMode.INTERNAL },
          { text: 'Alerts', route: '/', mode: NavigationMode.INTERNAL },
          { text: 'News', route: '/', mode: NavigationMode.INTERNAL }
        ]
      },
      {
        text: 'Our Partners',
        links: [
          { text: 'Acquisition.gov', route: 'https://Acquisition.gov', mode: NavigationMode.EXTERNAL},
          {
            text: 'USASpending.gov',
            route: 'https://USASpending.gov',
            mode: NavigationMode.EXTERNAL
          },
          { text: 'Grants.gov', route: 'https://Grants.gov', mode: NavigationMode.EXTERNAL },
          { text: 'More Partners', route: '/', mode: NavigationMode.INTERNAL }
        ]
      },   {
        text: 'Customer Service',
        links: [
          {
            text: 'Help',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          {
            text: 'Contact Federal Service Desk',
            route: 'https://fsd.gov',
            mode: NavigationMode.EXTERNAL
          },
          { text: 'Our Community', route: 'https://sam.gov', mode: NavigationMode.EXTERNAL },
          {
            text: 'Policy',
            route: '/',
            mode: NavigationMode.INTERNAL
          }
        ]
      },
      {
        text: 'Policies',
        links: [
          {
            text: 'Privacy Policy',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          { text: 'Disclaimers', route: '/', mode: NavigationMode.INTERNAL },
          { text: 'Freedom of Information Act', route: 'https://foia.gov', mode: NavigationMode.EXTERNAL },
          { text: 'Accessibility', route: '/', mode: NavigationMode.INTERNAL }
        ]
      }
    ]
  };

  ngOnInit() {
    this.linkEvent.subscribe(value => {
      console.log('Link Event Clicked Change');
      console.log(value);
    });
  }
}
