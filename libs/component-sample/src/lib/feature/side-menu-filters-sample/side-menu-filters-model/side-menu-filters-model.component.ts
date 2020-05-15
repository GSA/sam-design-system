import { Component, Input } from '@angular/core';

@Component({
  selector: 'gsa-sam-side-menu-filters-model',
  templateUrl: './side-menu-filters-model.component.html'
})
export class SideMenuFiltersModelComponent{

  @Input() model: any;

  constructor() { }

}
