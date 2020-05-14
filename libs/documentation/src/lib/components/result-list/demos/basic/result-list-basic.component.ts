import { Component, ChangeDetectorRef} from '@angular/core';

@Component({
  templateUrl: './result-list-basic.component.html'
})

export class ResultListBasic {
  constructor(private change: ChangeDetectorRef) {}

  itemsDefault: object = {
    results:[] = [
      { title: 'First', id: 1 },
      { title: 'Second', id: 2 },
      { title: 'Third', id: 3 },
      { title: 'Fourth', id: 4 },
      { title: 'Fifth', id: 5, hasNewerData: true }
    ]

  };

  noEntry: object = {
    emptySearch: {
      title: "No Search",
      description: `No Search criteria. Please try again
                    If you continue to <br>have this problem, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
      icon: {
        name: 'fa-alert-error',
        library: 'sds',
        size: '6x'
      }
    }
  }

  errorMessages: object = {
    error: {
      title: "Bad Request",
      description: `There was an issue with the search request. If you continue to
                    experience this issue, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk.</a>`,
      icon: {
        name: 'fa-alert-error',
        library: 'sds',
        size: '6x'
      }
    }
  };

  emptyItems:object = {
    results: [] = []
  }

  messages = this.errorMessages;
  items = this.itemsDefault;
}
