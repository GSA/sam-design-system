import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/** Time and timing curve for accordion item animations. */
export const TOOLBAR_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

export const sdsToolbarAnimations: {
  readonly bodyExpansion: AnimationTriggerMetadata;
} = {
  /** Animation that expands and collapses the accordion item content. */
  bodyExpansion: trigger('bodyExpansion', [
    state('collapsed, void', style({ width: '0px', height: '0px', opacity: '0', visibility: 'hidden', marginLeft: '-1px', marginBottom: '-1px' })),
    state('expanded', style({ width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible', marginLeft: '-1px', marginBottom: '-1px' }), {
      params: { expandedWidth: '300px' }
    }),
    transition('expanded <=> collapsed, void => collapsed',
      animate(TOOLBAR_ANIMATION_TIMING)),
  ])
};