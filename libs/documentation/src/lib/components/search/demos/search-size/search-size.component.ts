import { Component } from '@angular/core';

@Component({
  templateUrl: './search-size.component.html',
  selector: `sds-search-size`,
})
export class SearchSizeComponent {
  searchSettings = {
    size: 'small',
  };
  largeSearchSettings = {
    size: 'large',
  };
}
