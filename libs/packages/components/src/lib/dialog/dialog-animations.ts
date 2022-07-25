import {
  animate,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
  animation,
  useAnimation,
} from '@angular/animations';

const animationBody = [
  // Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  transition('* => enter', [
    style({ opacity: 0, transform: 'scale(0.7)' }),
    animate(
      '150ms cubic-bezier(0, 0, 0.2, 1)',
      style({ transform: 'none', opacity: 1 })
    ),
  ]),
  transition('* => void, * => exit', [
    style({ transform: 'none' }),
    animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 })),
  ]),
  transition('* => slideEnter', [
    useAnimation(
      animation([
        style({ right: '-{{ width }}' }),
        animate(
          '{{ time }} cubic-bezier(0, 0, 0.2, 1)',
          style({ right: '0rem' })
        ),
      ])
    ),
  ]),
  transition('* => slideExit', [
    useAnimation(
      animation([
        style({ right: '0rem' }),
        animate(
          '{{ time }} cubic-bezier(0, 0, 0.2, 1)',
          style({ right: '-{{ width }}' })
        ),
      ])
    ),
  ]),
];

/**
 * Animations used by SdsDialog.
 * @docs-private
 */
export const sdsDialogAnimations: {
  readonly dialogContainer: AnimationTriggerMetadata;
} = {
  /** Animation that is applied on the dialog container by defalt. */
  dialogContainer: trigger('dialogContainer', animationBody),
};
