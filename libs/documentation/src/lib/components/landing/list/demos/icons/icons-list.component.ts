import { Component } from '@angular/core';

@Component({
  templateUrl: './icons-list.component.html',
  selector: `docs-icons-list-demo`,
})
export class IconsListComponent {
  list = {
    title: 'Lorem ipsum dolor sit amet',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium hendrerit velit, nec congue orci accumsan ac. Morbi et ultricies ligula.',
    iconList: true,
    items: [
      {
        link: {
          innerHtml: 'Curabitur ut enim id eros auctor auctor.',
          href: 'http://sam.gov',
        },
        icon: {
          icon: 'file-earmark-text',
          prefix: 'bs',
        },
      },
      {
        link: {
          innerHtml:
            'Nunc vitae nisi pretium, blandit erat non, auctor lectus.',
          href: 'http://sam.gov',
        },
        icon: {
          icon: 'search',
          prefix: 'bs',
        },
      },
      {
        link: {
          innerHtml: 'Ut sit amet dui in elit faucibus aliquet eu ac erat.',
          href: 'http://sam.gov',
        },
        icon: {
          icon: 'playBtn',
          prefix: 'bs',
        },
      },
    ],
  };
}
