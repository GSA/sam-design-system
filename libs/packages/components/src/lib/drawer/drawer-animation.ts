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
    opacity: 1,
    height: 'auto',
    minHeight: '200px',
    backgroundColor: '#eff6fb',
    position: 'absolute',
    // left: '-55%',
    margin: '20px 0 0 0',
    width: '994px',
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
