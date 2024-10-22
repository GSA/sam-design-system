import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-progress-bar',
  templateUrl: 'progress-bar.component.html',
})
export class SdsProgressBarComponent {
  /**
   * Input to control the progress (value between 0 and 100)
   */

  @Input() progress: number = 0;

  /**
   * To display the top border
   */
  @Input() topBorder: boolean = false;
}
