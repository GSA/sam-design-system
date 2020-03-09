import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './introduction.component.html'
})

export class IntroductionComponent implements OnInit {
  packages: any = {};

  constructor() {
    this.packages.components = require('./../../../../../packages/components/package.json');
    this.packages.formly = require('./../../../../../packages/sam-formly/package.json');
    this.packages.layouts = require('./../../../../../packages/layouts/package.json');
  }

  ngOnInit() { }
}
