import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'docs-component-wrapper',
  templateUrl: 'component-wrapper.component.html'
})

export class ComponentWrapperComponent {
  activeTab = 'examples';
  component: string;
  tabs: Object = {};

  constructor(public route: ActivatedRoute, private _router: Router, ngZone: NgZone) {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const parentRoute = this.route.snapshot.parent;
      const tabRoute = this.route.snapshot.firstChild;

      this.component = parentRoute.url[1].path;
      this.activeTab = tabRoute.url[0].path;

      parentRoute.routeConfig.children[1].children.forEach(element => {
        this.tabs[element.path] = true;
      });

    });
  }
}
