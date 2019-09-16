import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationTriggerMetadata
  } from '@angular/animations';

export const sdsDrawerAnimation: {
    readonly transformDrawer: AnimationTriggerMetadata;
} = {
    transformDrawer: trigger('transformDrawer', [
    state('open', style({
      height: '300px',
      opacity: 1,
      backgroundColor: 'gray',
      transform: 'scale(1)'
})),
    state('closed', style({
      height: '0px',
      opacity: 0.5,
      transform: 'scale(1)'
    })),
    transition('open => closed', [
      animate('300ms')
    ]),
    transition('closed => open', [
      animate('300ms')
    ]),
  ]),
};
