import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var require: any;
@Component({
  templateUrl: './introduction.component.html',
})
export class IntroductionComponent implements OnInit {
  packages: any = {};

  constructor() {
    this.packages.components = require('./../../../../../packages/components/package.json');
    this.packages.formly = require('./../../../../../packages/sam-formly/package.json');
    // this.packages.layouts = require('./../../../../../packages/layouts/package.json');
    this.packages.material = require('./../../../../../packages/sam-material-extensions/package.json');
  }

  ngOnInit() {}
}
