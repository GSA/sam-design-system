import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { OptionalSearchModel } from './optional-classes';

@Component({
  selector: 'sds-result-list-messages',
  templateUrl: './result-list-messages.component.html',
})
export class ResultListMessagesComponent {
  constructor() {
    this.form.valueChanges.subscribe((changes) => {
      switch (changes.messageType) {
        case 'error':
          this.items = this.errorModel;
          break;
        case 'info':
          this.items = this.infoModel;
          break;
        case 'empty':
          this.items = this.emptyModel;
          break;
        case 'loading':
          this.items = this.loadingModel;
          break;
        case 'initial':
          this.items = this.initialModel;
          break;
      }
    });
  }

  form = new FormGroup({});
  model: any = {
    messageType: 'initial',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'messageType',
      type: 'select',
      templateOptions: {
        label: 'Message Type',
        required: true,
        options: [
          { label: 'Error', value: 'error' },
          { label: 'Info', value: 'info' },
          { label: 'Empty', value: 'empty' },
          { label: 'Loading', value: 'loading' },
          { label: 'Initial', value: 'initial' },
        ],
      },
    },
  ];

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
              action: this.goBackButton,
              ariaLabel: 'Go Back',
            },
          ],
        },
      ],
    },
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
              action: this.goBackButton,
            },
            {
              id: 'forward',
              text: 'Go forward',
              classes: 'usa-button usa-button--secondary width-card margin-y-2',
              action: this.goForwardButton,
            },
          ],
        },
      ],
    },
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
              action: this.goBackButton,
            },
          ],
        },
      ],
    },
    results: [],
  };
  loadingModel = {
    metadata: {
      messages: [
        {
          type: 'loading',
        },
      ],
    },
    results: [],
  };
  initialModel = {
    metadata: {
      messages: [
        {
          type: 'initial',
          title: 'Search Criteria',
          message: `Choose your filter to run report`,
          classes: 'usa-custom',
        },
      ],
    },
    results: [],
  };

  items: OptionalSearchModel = this.initialModel;

  goBackButton() {
    console.log('back button click');
  }
  goForwardButton() {
    console.log('forward button click');
  }
}
