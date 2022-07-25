import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/** Time and timing curve for accordion item animations. */
export const ACCORDION_ITEM_ANIMATION_TIMING =
  '225ms cubic-bezier(0.4,0.0,0.2,1)';

export const sdsExpansionAnimations: {
  readonly bodyExpansion: AnimationTriggerMetadata;
} = {
  /** Animation that expands and collapses the accordion item content. */
  bodyExpansion: trigger('bodyExpansion', [
    state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
    state('expanded', style({ height: '*', visibility: 'visible' })),
    transition(
      'expanded <=> collapsed, void => collapsed',
      animate(ACCORDION_ITEM_ANIMATION_TIMING)
    ),
  ]),
};
