import { Component, Inject, HostBinding, HostListener } from '@angular/core';
import { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';
import { sdsTruncateTextAnimations } from './truncate-text-animations';

export interface SdsTruncateTextData {
  text: string;
}

@Component({
  selector: 'sds-truncated-text-container',
  template: `
    <div class="sds-overlay maxw-mobile radius-overlay padding-2">
      {{ data.text }}
    </div>
  `,
  animations: [sdsTruncateTextAnimations.container],
})
export class SdsTruncatedTextContainerComponent {
  @HostBinding('@container') _animationState = 'void';

  constructor(
    @Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData
  ) {}

  /** Starts the animation. */
  startAnimation() {
    this._animationState = 'enter';
  }

  /** Resets the animation to its initial state. */
  resetAnimation() {
    this._animationState = 'void';
  }

  /** Intentionally left empty to trigger change detection */
  @HostListener('@container.done')
  _onAnimationDone() {}
}
