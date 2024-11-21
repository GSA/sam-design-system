import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'sds-button-group-modular',
  templateUrl: './button-group-modular.component.html',
})
export class ButtonGroupModularComponent {
  constructor() {}

  handleChange(event: MatButtonToggleChange) {
    console.log(event);
  }
}
