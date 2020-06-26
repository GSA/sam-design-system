import { Component } from '@angular/core';

@Component({
  templateUrl: './result-list-basic.component.html'
})
export class ResultListBasic {
  constructor() {}

  demoModel: object = {
    results: [] = [
      { title: 'First', id: 1 },
      { title: 'Second', id: 2 },
      { title: 'Third', id: 3 },
      { title: 'Fourth', id: 4 },
      { title: 'Fifth', id: 5, hasNewerData: true }
    ]
  };

  demoNoResults = {
      results: []
  }

  demoInfoModel = {
    metadata: {
      descriptions: [
        {
          type: 'info',
          title: 'No Search',
          message: `No Search criteria. Please try again
                      If you continue to have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
          classes: 'usa-custom',
          buttons: [
            {
              text: 'Go back',
              classes: 'usa-button--secondary',
              action: 'gobackbutton'
            }
          ]
        }
      ]
    }
  };

  demoErrorModel = {
    metadata: {
      descriptions: [
        {
          type: 'error',
          title: 'Bad Request',
          message: `There was an issue with the search request. If you continue to
                            experience this issue, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
          classes: 'usa-custom',
          buttons: [
            {
              text: 'Go back',
              classes: 'usa-button--secondary',
              action: 'gobackbutton'
            }
          ]
        }
      ]
    }
  };

  // noEntry: object = {
  //   emptySearch: {
  //     title: 'No Search',
  //     description: `No Search criteria. Please try again
  //                   If you continue to have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`
  //   }
  // };

  // errorMessages: object = {
  //   error: {
  //     title: 'Bad Request',
  //     description: `There was an issue with the search request. If you continue to
  //                   experience this issue, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`
  //   }
  // };

  // emptyItems: object = {
  //   results: [] = [],
  //   noItems: {
  //     title: 'No Matches Found',
  //     description: `We couldn't find a match for your search criteria.
  //     We couldn't find a match for your search criteria.`
  //   }
  // };

  // messages = this.errorMessages;
  // items = this.itemsDefault;
}
