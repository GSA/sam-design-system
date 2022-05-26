import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './collapse-basic.component.html',
  styleUrls: ['./collapse-basic.component.scss'],
  selector: `sds-collapse-basic-demo`,
})
export class CollapseBasic {
  @Input()
  isCollapsedContent = false;

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.isCollapsedContent ? 'storybook-collapse--active' : 'storybook-collapse--hidden';

    return ['storybook-collapse', mode];
  }
}
