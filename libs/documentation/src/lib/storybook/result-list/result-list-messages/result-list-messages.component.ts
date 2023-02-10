import { Component } from '@angular/core';

@Component({
  selector: 'sds-result-list-messages',
  templateUrl: './result-list-messages.component.html',
})
export class ResultListMessagesComponent {
  constructor() {}

  itemsDefault = [];

  items = {
    results: this.itemsDefault,
    metadata: {
      messages: [
        {
          type: 'info',
          title: 'No Search',
          message: `No Search criteria. Please try again
                      If you continue to have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
          classes: 'usa-custom',
          buttons: [
            {
              id: 'backward',
              text: 'Go back',
              classes: 'usa-button--secondary',
              action: this.gobackbutton,
            },
            {
              id: 'forward',
              text: 'Go forward',
              classes: 'usa-button usa-button--secondary width-card margin-y-2',
            },
          ],
        },
      ],
    },
  };

  gobackbutton() {
    console.log('back button click');
  }
}
