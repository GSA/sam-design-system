import { Component } from '@angular/core';

@Component({
  templateUrl: './search-placeholder.component.html',
  selector: `sds-search-placeholder`,
})
export class SearchPlaceholderComponent {
  searchSettings = {
    placeholder: 'Custom Placeholder',
  };
}
