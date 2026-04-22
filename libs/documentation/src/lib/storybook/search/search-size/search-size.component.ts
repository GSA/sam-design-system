import { Component } from '@angular/core';

@Component({
	standalone: false,
  templateUrl: './search-size.component.html',
  selector: `sds-search-size`,
})
export class SearchSizeComponent {
  searchSettings = {
    placeholder: 'eg: Acme Corporation',
    size: 'small',
  };
  largeSearchSettings = {
    placeholder: 'eg: Acme Corporation',
    size: 'large',
  };
}
