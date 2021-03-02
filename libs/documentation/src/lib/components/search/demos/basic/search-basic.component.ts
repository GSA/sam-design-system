import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html',
  styleUrls: ['./search-basic.component.scss'],
  selector: `sds-search-basic-demo`,
})
export class SearchBasic {
  model = {};
  bigmodel = {};

  searchSettings = {
    id: 'searchBasic',
    ariaLabel: 'Basic Search',
    placeholder: 'Acme Corporation',
  };

  bigSearchSettings = {
    size: 'large',
    id: 'bigSearchBasic',
    ariaLabel: 'Big Search',
    placeholder: 'Acme Corporation',
  };

  onsearchModelChanges() {
    console.log(this.bigmodel, 'model changs');
  }

  onSubmit(value){
    console.log('Search Submitted', value)
  }
}
