import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html'
})
export class SearchBasic {
  model = {};
  ddmodel ={};
  invddmodel ={}

  bigmodel={}
  bigddmodel ={};
  biginvddmodel ={}
  searchSettings = {
    textPlaceholder: 'type here',
  }
  ddSearchSettings ={
    dropDownPlaceholder: 'Select',
    textPlaceholder: 'type here',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
    isDropDown : true
  }

  invDDSearchSettings ={
    dropDownPlaceholder: 'Select',
    textPlaceholder: 'type here',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
    isInverse : true
  }

  bigSearchSettings = {
  isBigSearch: true,
  }
  bigddSearchSettings ={
    dropDownPlaceholder: 'Select',
    textPlaceholder: 'type here',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
    isDropDown : true,
    isBigSearch: true,
  }

  biginvDDSearchSettings ={
    dropDownPlaceholder: 'Select',
    textPlaceholder: 'type here',
    options : [
      {'value': '1', 'label' : 'One'},
      {'value': '2', 'label' : 'Two'},
      {'value': '3', 'label' : 'Three'}
    ],
    isInverse : true,
    isBigSearch: true,
  }
}
