import { Component } from '@angular/core';

@Component({
  templateUrl: './search-dropdown.component.html',
  selector: `sds-search-dropdown`,
})
export class SearchDropdownComponent {
  searchSettings = {
    placeholder: 'eg: Acme Corporation',
    dropdown: {
      id: 'ddSearchOptions',
      options: [
        { value: '-', label: '--Select--' },
        { value: '1', label: 'One With Long Text' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
      ],
    },
  };
}
