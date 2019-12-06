import {Component, OnInit} from '@angular/core';
import {FooterModel} from '@gsa-sam/components/footer';
import {NavigationMode} from '@gsa-sam/components/core';
import {BehaviorSubject} from 'rxjs';

/**
 * @title Footer overview
 */
@Component({
  selector: 'footer-overview-example',
  templateUrl: 'footer-overview-example.html',
  styleUrls: ['footer-overview-example.css']
})
export class FooterOverviewExample implements OnInit {
  constructor() {}
  linkEvent = new BehaviorSubject<object>({});

  modelFooter: FooterModel = {
    linkSections: [
      {
        text: 'About beta.SAM.gov',
        links: [
          {
            text: 'Explore Our Community',
            route: '/',
            mode: NavigationMode.INTERNAL
          },
          { text: 'Release Notes', route: '/', mode: NavigationMode.INTERNAL }
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
