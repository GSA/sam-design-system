import { Component } from '@angular/core';

@Component({
  templateUrl: './result-list-basic.component.html'
})
export class ResultListBasic {
  constructor() {}

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5, hasNewerData: true }
  ];

  items = {
    results: this.itemsDefault
  };

  errorModel = {
    results: [],
    metadata: {
      messages: [
        {
          type: 'error',
          title: 'Error during the api',
          message: `Error Search criteria. Please try again
                      If you continue to have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
          buttons: [
            {
              id: 'backward',
              text: 'Go back',
              action: this.gobackbutton
            }
          ]
        }
      ]
    }
  };

  infoModel = {
    results: [],
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
              action: this.gobackbutton
            },
            {
              id: 'forward',
              text: 'Go forward',
              classes: 'usa-button usa-button--secondary width-card margin-y-2'
            }
          ]
        }
      ]
    }
  };

  defaultModel = {
    results: this.itemsDefault
  };
  emptyModel = {
    metadata: {
      messages: [
        {
          type: 'empty',
          title: 'No Search results',
          message: `We couldn't find a match for your search criteria.`,
          classes: 'usa-custom',
          buttons: [
            {
              id: 'backward',
              text: 'Go back',
              classes: 'usa-button--secondary',
              action: this.gobackbutton
            }
          ]
        }
      ]
    },
    results: []
  };
  initialModel = {
    metadata: {
      messages: [
        {
          type: 'initial',
          title: 'Search Criteria',
          message: `Choose your filter to run report`,
          classes: 'usa-custom'
        }
      ]
    },
    results: []
  };
  gobackbutton() {
    console.log('button click');
  }
}
