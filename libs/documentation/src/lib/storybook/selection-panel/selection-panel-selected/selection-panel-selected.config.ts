import { NavigationMode, SideNavigationModel } from '@gsa-sam/components';

export let selectionPanelConfig: SideNavigationModel = {
  navigationLinks: [
    {
      text: 'Link 1',
      route: '/',
      id: 'link1',
      mode: NavigationMode.INTERNAL,
    },
    {
      text: 'Link 2',
      route: '/',
      id: 'link2',
      mode: NavigationMode.INTERNAL,
    },
    {
      text: 'Link 3',
      route: '/',
      id: 'link3',
      mode: NavigationMode.INTERNAL,
      selected: true,
    },
  ],
};
