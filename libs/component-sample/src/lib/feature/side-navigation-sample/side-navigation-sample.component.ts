import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-side-navigation-sample',
  templateUrl: 'side-navigation-sample.component.html'
})

export class SideNavigationSampleComponent implements OnInit {
  constructor() { }
  model = { navigationLinks: [] };

  ngOnInit() { }
}