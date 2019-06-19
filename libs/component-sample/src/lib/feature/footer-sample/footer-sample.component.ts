import { Component, OnInit } from '@angular/core';
import { FooterModel, NavigationMode } from '@gsa-sam/components';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gsa-sam-footer-sample',
  templateUrl: './footer-sample.component.html',
  styleUrls: ['./footer-sample.component.scss']
})
export class FooterSampleComponent implements OnInit {
  constructor() {}
  public linkEvent = new BehaviorSubject<object>(null);

  modelFooter: FooterModel = {
    linkSections: [
      {
        text: 'About beta.SAM.gov',
        links: [
          {
            text: 'Explore Our Community',
            route: 'http://www.google.com',
            mode: NavigationMode.EXTERNAL
          },
          { text: 'Release Notes', route: '/', mode: NavigationMode.EVENT }
        ]
      },
      {
        text: 'Our Partners',
        links: [
          { text: 'Aquisition.gov', route: '/', mode: NavigationMode.INTERNAL },
          {
            text: 'USASpending.gov',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          { text: 'Grants.gov', route: '/', mode: NavigationMode.INTERNAL },
          { text: 'More Partners', route: '/', mode: NavigationMode.INTERNAL }
        ]
      },
      {
        text: 'Customer Service',
        links: [
          {
            text: 'Learning Center',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          {
            text: 'Contact Federal Service Desk',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          { text: 'Resources', route: '/', mode: NavigationMode.INTERNAL },
          {
            text: 'Freedom of Information Act',
            route: '/',
            mode: NavigationMode.INTERNAL
          }
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
