import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert, HeaderModel } from '@gsa-sam/layouts';
import { NavigationMode } from '@gsa-sam/components';
import { LocationStrategy } from '@angular/common';

@Component({
  templateUrl: './header-alerts.component.html',
})
export class HeaderAlertsComponent implements OnInit {

  constructor(private locationStrategy: LocationStrategy) {}

  public linkEvent = new BehaviorSubject<object>(null);

  modelHeader: HeaderModel = {
    secondaryLinks: [
      {
        imageClassPrefix: 'sds',
        imageClass: 'request',
        text: 'Requests',
        route: '/',
        id: 'request',
        hasCounter: true,
        selected: true,
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'messages',
        text: 'Notifications',
        route: '/',
        id: 'messages',
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'workspace',
        text: 'Workspace',
        route: '/',
        id: 'workspace',
        mode: NavigationMode.INTERNAL
      },
      {
        imageClassPrefix: 'sds',
        imageClass: 'log-out',
        text: 'Sign Out',
        route: '/',
        id: 'signOut',
        mode: NavigationMode.INTERNAL
      }
    ],
    navigationLinks: [
      {
        text: 'Home',
        selected: true,
        route: '/',
        id: 'home',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Search',
        route: '/',
        id: 'search',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Databank',
        route: '/',
        id: 'databank',
        mode: NavigationMode.INTERNAL
      },
      {
        text: 'Data Services',
        route: '/',
        id: 'dataService',
        mode: NavigationMode.INTERNAL
      },
      { text: 'Help', route: '/', id: 'help', mode: NavigationMode.INTERNAL }
    ],
    home: {
      text: 'Logo',
      logo: this.locationStrategy.getBaseHref() + 'assets/img/logo-sam.svg',
      route: '/',
      id: 'home',
      mode: NavigationMode.INTERNAL
    }
  };

  alerts: Alert[] = [
    {
      header: 'Test Alert',
      date: new Date(),
      description: 'Test Alert Description',
    },
    {
      header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: new Date(),
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    }
  ];

  ngOnInit() {
    this.linkEvent.subscribe(value => {
      console.log('Link Event Clicked Change');
      console.log(value);
    });
  }

  onSeeAllAlerts() {
    console.log('See All Alerts Clicked');
  }

  onShowDetailsClicked(alert) {
    console.log('Show Details for alert', alert);
  }
}
