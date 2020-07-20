import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

const animationBody = [
  // Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the download content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),
  state('enter', style({transform: 'none'})),
  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',
      style({transform: 'none', opacity: 1}))),
  transition('* => void, * => exit',
      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),
];

/**
 * Animations used by SdsDownload.
 * @docs-private
 */
export const sdsDownloadAnimations: {
  readonly downloadContainer: AnimationTriggerMetadata;
} = {
  /** Animation that is applied on the download container by defalt. */
  downloadContainer: trigger('downloadContainer', animationBody),
};
