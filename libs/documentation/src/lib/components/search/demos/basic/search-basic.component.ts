import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html'
})
export class SearchBasic {
  model = {};
  bigmodel = {};

  searchSettings = {
    placeholder: 'type here'
  };

  bigSearchSettings = {
    size: 'large'
  };

  onsearchModelChanges() {
    console.log(this.bigmodel, 'model changs');
  }
}
