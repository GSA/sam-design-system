import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html',
  styleUrls: ['./search-basic.component.scss'],
  selector: `sds-search-basic-demo`,
})
export class SearchBasic {
  model = {};
  bigmodel = {};
  suffixmodel = {};

  searchSettings = {
    id: 'searchBasic',
    ariaLabel: 'Basic Search',
    placeholder: 'eg: Acme Corporation',
  };

  bigSearchSettings = {
    size: 'large',
    id: 'bigSearchBasic',
    ariaLabel: 'Big Search',
    placeholder: 'eg: Acme Corporation',
  };

  suffixSearchIconSettings = {
    isSuffixSearchIcon: true,
    placeholder: 'eg: Acme Corporation',
    id: 'searchSuffix',
    ariaLabel: 'Suffix Search',
  };

  onsearchModelChanges() {
    console.log(this.bigmodel, 'model changs');
  }

  onSubmit(value) {
    console.log('Search Submitted', value);
  }
}
