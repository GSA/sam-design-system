import { NavigationMode, SideNavigationModel } from '@gsa-sam/components';

export let selectionPanelConfig: SideNavigationModel = {
  navigationLinks: [
    {
      text: 'Internal Link',
      route: '/',
      id: 'internalLink',
      mode: NavigationMode.INTERNAL,
    },
    {
      text: 'External Link',
      route: '/',
      id: 'externalLink',
      mode: NavigationMode.EXTERNAL,
    },
    {
      text: 'Event Link',
      route: '/',
      id: 'eventLink',
      mode: NavigationMode.EVENT,
    },
  ],
};
