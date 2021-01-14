import { Component } from '@angular/core';

@Component({
  templateUrl: './search-optional.component.html',
  selector: `sds-search-optional-demo`,
})
export class SearchOptional {
  ddmodel = {};
  invddmodel = {};
  bigddmodel = {};
  biginvddmodel = {};

  ddSearchSettings = {
    placeholder: 'type here',
    dropdown: {
      placeholder: 'Select',
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ]
    }
  };

  invDDSearchSettings = {
    placeholder: 'type here',
    dropdown: {
      placeholder: 'Select',
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ],
      inverse: true
    }
  };

  bigddSearchSettings = {
    placeholder: 'type here',
    size: 'large',
    dropdown: {
      placeholder: 'Select',
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ]
    }
  };

  biginvDDSearchSettings = {
    placeholder: 'type here',
    dropdown: {
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ],
      inverse: true
    },
    size: 'large'
  };
}
