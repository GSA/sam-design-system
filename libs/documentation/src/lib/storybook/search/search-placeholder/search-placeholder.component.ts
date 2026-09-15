import { Component } from '@angular/core';

@Component({
	standalone: false,
  templateUrl: './search-placeholder.component.html',
  selector: `sds-search-placeholder`,
})
export class SearchPlaceholderComponent {
  searchSettings = {
    placeholder: 'Custom Placeholder',
  };
}
