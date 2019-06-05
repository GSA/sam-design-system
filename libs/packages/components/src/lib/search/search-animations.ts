import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';

const animationBody = [
  state(
    'void, exit',
    style({
      width: 0,
      opacity: 0
    })
  ),
  state(
    'enter',
    style({
      width: '{{inputWidth}}',
      opacity: 1
    }),
    { params: { inputWidth: '250px' } }
  ),
  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  transition(
    '* => void, * => exit',
    animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  )
];

/**
 * Animations used by sdsSearch.
 */
export const sdsSearchAnimations: {
  readonly searchInput: AnimationTriggerMetadata;
} = {
  searchInput: trigger('inputExpand', animationBody)
};
