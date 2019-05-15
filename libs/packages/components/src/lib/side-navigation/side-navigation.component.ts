import { Component, Input } from '@angular/core';
import { SideNavigationModel } from './model/side-navigation-model';

@Component({
  selector: 'sds-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SdsSideNavigationComponent {

  /**
   * Model used for the different display portions of the side navigation 
   */
  @Input() model: SideNavigationModel;

}
