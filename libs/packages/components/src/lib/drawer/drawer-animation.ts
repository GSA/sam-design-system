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
      margin:'0px',
      opacity: 1,
      height: 'auto',
      minHeight: '200px',
      backgroundColor: '#eff6fb',
      transform: 'scale(1)'
})),
    state('closed', style({
      height: '0px',
      opacity: 0.5,
      transform: 'scale(1)'
    })),
    transition('open => closed', [
      animate( '100ms linear',)
    ]),
    transition('closed => open', [
      animate('100ms linear',)
    ]),
  ]),
};
