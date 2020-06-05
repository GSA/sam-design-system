import { Component, Input } from '@angular/core';
@Component({
  selector: 'result-item',
  templateUrl: './result.component.html'
})
export class ResultComponent {
  @Input() model: any;
}
