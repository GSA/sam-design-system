import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html'
})
export class ResultComponent {
  @Input() model: any;
}
