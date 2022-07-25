import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const sdsMenuAnimations: {
  readonly transformMenu: AnimationTriggerMetadata;
} = {
  transformMenu: trigger('transformMenu', [
    state(
      'void',
      style({
        opacity: 0,
        transform: 'scale(0.8)',
      })
    ),
    transition(
      'void => enter',
      group([
        query(
          '.sds-menu',
          animate(
            '100ms linear',
            style({
              opacity: 1,
            })
          )
        ),
        animate(
          '120ms cubic-bezier(0, 0, 0.2, 1)',
          style({ transform: 'scale(1)' })
        ),
      ])
    ),
    transition(
      '* => void',
      animate('100ms 25ms linear', style({ opacity: 0 }))
    ),
  ]),
};
