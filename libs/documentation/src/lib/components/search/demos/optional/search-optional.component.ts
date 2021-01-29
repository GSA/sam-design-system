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
    id: 'ddSearch',
    dropdown: {
     
      id: 'ddSearchOptions',
      options: [
        {value: '-', label: '--Select--'},
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ]
    }
  };

  invDDSearchSettings = {
    placeholder: 'type here',
    id: 'invDDSearch',
    dropdown: {
      id: 'invDDSearchOptions',
      options: [
        {value: '-', label: '--Select--'},
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ],
      inverse: true
    }
  };

  bigddSearchSettings = {
    placeholder: 'type here',
    id: 'bigssSearch',
    size: 'large',
    dropdown: {
      id: 'bigddSearchOptions',
     
      options: [
        {value: '-', label: '--Select--'},
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' }
      ]
    }
  };

  biginvDDSearchSettings = {
    placeholder: 'type here',
    id: 'biginvDDSearch',
    dropdown: {
      id: 'bigInvDDSearchOptions',
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
