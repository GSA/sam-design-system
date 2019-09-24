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
    state('close, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),
    state('open', style({width: '*', height: '*', opacity: '1', visibility: 'visible', position: 'absolute',backgroundColor: '#eff6fb',margin:'20px 0 0'})
     
    ),
      transition('close <=> open, void => close',
    animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
]),
};