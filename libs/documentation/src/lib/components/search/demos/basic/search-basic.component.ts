import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html'
})
export class SearchBasic {
  model = {};
  ddmodel = {};
  invddmodel = {}

  bigmodel = {}
  bigddmodel = {};
  biginvddmodel = {}
  searchSettings = {
    placeholder: 'type here',
  }
  ddSearchSettings = {
    placeholder: 'type here',
    dropdown: {
      placeholder: 'Select',
      options: [
        { 'value': '1', 'label': 'One' },
        { 'value': '2', 'label': 'Two' },
        { 'value': '3', 'label': 'Three' }
      ],

    },
  }

  invDDSearchSettings = {
    placeholder: 'type here',
    dropdown: {
      placeholder: 'Select',
      options: [
        { 'value': '1', 'label': 'One' },
        { 'value': '2', 'label': 'Two' },
        { 'value': '3', 'label': 'Three' }
      ],
      inverse: true,
    },
  }

  bigSearchSettings = {
    size: 'large',
  }
  bigddSearchSettings = {
    placeholder: 'type here',
    size: 'large',
    dropdown: {
      placeholder: 'Select',
      options: [
        { 'value': '1', 'label': 'One' },
        { 'value': '2', 'label': 'Two' },
        { 'value': '3', 'label': 'Three' }
      ]
    }
  }

  biginvDDSearchSettings = {

    placeholder: 'type here',

    dropdown: {
      placeholder: 'Select',
      options: [
        { 'value': '1', 'label': 'One' },
        { 'value': '2', 'label': 'Two' },
        { 'value': '3', 'label': 'Three' }
      ],
      inverse: true,
    },

    size: 'large',
  }
}
