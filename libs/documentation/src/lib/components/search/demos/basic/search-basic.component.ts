import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html'
})
export class SearchBasic {
  model = {
   searchText :'test',
  // searchCategory: '2'
  };
  searchSettings = {
    dropDownPlaceholder: 'Select',
    textPlaceholder: 'type here',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
   isDropDown: true,
   isInverse: true
  }

  bigSearchSettings = {
    placeholder: 'select',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
    isBigSearch: true,
  }
  bigmodel:any;

}
