import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './basic-button-group.component.html',
  selector: `docs-basic-button-group-demo`,
})
export class BasicButtonGroupComponent implements OnInit {

  buttons = [
    {
      text: 'Lorem ipsum dolor sit amet',
      url: '/test',
      external: true,
      clickHandler: () => console.log('click'),
    },
    {
      text: 'Consectetur adipiscing elit',
      url: './test',
      external: true,
      classes: ['usa-button--secondary'],
    },
  ];
  ngOnInit() {}
}
