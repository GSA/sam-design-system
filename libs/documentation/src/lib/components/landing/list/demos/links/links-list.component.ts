import { Component } from '@angular/core';

@Component({
  templateUrl: './links-list.component.html',
  selector: `docs-links-list-demo`,
})
export class LinksListComponent {
  list = {
    title: 'Lorem ipsum dolor sit amet',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium hendrerit velit, nec congue orci accumsan ac. Morbi et ultricies ligula.',
    items: [
      {
        link: {
          innerHtml: 'Curabitur ut enim id eros auctor auctor.',
          href: 'http://sam.gov',
        },
      },
      {
        link: {
          innerHtml:
            'Nunc vitae nisi pretium, blandit erat non, auctor lectus.',
          href: 'http://sam.gov',
        },
      },
      {
        link: {
          innerHtml: 'Ut sit amet dui in elit faucibus aliquet eu ac erat.',
          href: 'http://sam.gov',
        },
      },
    ],
  };
}
