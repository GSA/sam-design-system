import { Injectable } from '@angular/core';
import { PlacementArray } from '../util/positioning';
import { Options } from '@popperjs/core';

/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
@Injectable({ providedIn: 'root' })
export class SdsPopoverConfig {
  autoClose: boolean | 'inside' | 'outside' = 'inside';
  placement: PlacementArray = 'auto';
  popperOptions = (options: Partial<Options>) => options;
  triggers = 'click';
  container: string;
  disablePopover = false;
  popoverClass: string;
  openDelay = 0;
  closeDelay = 0;

  private _animation: boolean;

  constructor() {}

  get animation(): boolean {
    return this._animation === undefined ? false : this._animation;
  }
  set animation(animation: boolean) {
    this._animation = animation;
  }
}