import { Component } from '@angular/core';

@Component({
  templateUrl: './basic-list.component.html',
  selector: `docs-basic-list-demo`,
})
export class BasicListComponent {
  list = {
    title: 'Lorem ipsum dolor sit amet',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium hendrerit velit, nec congue orci accumsan ac. Morbi et ultricies ligula.',
    items: [
      {
        text: 'Curabitur ut enim id eros auctor auctor.',
      },
      {
        text: 'Nunc vitae nisi pretium, blandit erat non, auctor lectus.',
      },
      {
        text: 'Ut sit amet dui in elit faucibus aliquet eu ac erat.',
      },
    ],
  };
}
