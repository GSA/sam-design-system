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
    placeholder: 'type here'
  };

  bigSearchSettings = {
    size: 'large'
  };

  onsearchModelChanges() {
    console.log(this.bigmodel, 'model changs');
  }

  onSubmit(value){
    console.log('Search Submitted', value)
  }
}
