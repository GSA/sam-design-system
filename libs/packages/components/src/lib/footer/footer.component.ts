import { Component, Input } from '@angular/core';
import { FooterModel } from './model/FooterModel';


@Component({
  selector: 'sds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SdsFooterComponent {

  /**
   * Model used for the different display portions of the footer
   */
  @Input() model: FooterModel;
}
