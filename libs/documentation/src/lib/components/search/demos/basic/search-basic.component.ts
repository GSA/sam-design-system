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
    placeholder: 'type here',
    id: 'searchBasic',
    ariaLabel: 'Basic Search',
  };

  bigSearchSettings = {
    size: 'large',
    id: 'bigSearchBasic',
    ariaLabel: 'Big Search',
  };

  suffixSearchIconSettings = {
    isSuffixSearchIcon: true,
    placeholder: 'type here',
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
