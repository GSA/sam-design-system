import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { map, startWith, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
} from '@gsa-sam/components';

interface Model {
  readonly player: string;
  readonly sport: string;
  readonly team: string;
}

@Component({
  selector: 'sds-formly-conditional',
  templateUrl: './formly-conditional.component.html',
})
export class FormlyConditionalComponent implements OnInit {
  results: any;
  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  //model: Partial<Model> = { sport: '1' };
  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [
    {
      // key: 'conditionalFilters',

      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Conditional Filters' },
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Hide Input Field :</h4><p class='margin-top-0'>First Input value will reveal the second Input.</p>",
        },
        {
          key: 'firstInput',
          type: 'input',
          templateOptions: {
            label: 'First Input',
            options: [
              {
                label: 'First Input',
                placeholder: 'Type here to reveal the second input',
              },
            ],
          },
        },
        {
          key: 'secondInput',
          type: 'input',
          hideExpression: (model) => !this.model.firstInput,
          templateOptions: {
            label: 'Second Input',
            options: [
              {
                label: 'Second Input',
              },
            ],
          },
        },
      ],
    },
    {
      wrappers: ['filterwrapper'],
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Dropdpwn Radio Selection :</h4><p class='margin-top-0'>Dropdown selection will reveal the respective Radio action.</p>",
        },
        {
          key: 'check',
          type: 'select',
          defaultValue: 'select',
          templateOptions: {
            hideOptional: true,
            label: 'Dropdown Radio',
            options: [
              { label: '- Select -', value: 'select' },
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
            ],
          },
        },
        {
          key: 'red',
          type: 'radio',
          hideExpression: (model) => this.model.check !== 'red',
          templateOptions: {
            options: [{ label: 'Red', value: 'radio' }],
          },
        },
        {
          key: 'green',
          type: 'radio',
          hideExpression: (model) => this.model.check !== 'green',
          templateOptions: {
            options: [{ label: 'Green', value: 'radio' }],
          },
        },
      ],
    },
    {
      wrappers: ['filterwrapper'],
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Dropdpwn Checkbox Selection :</h4><p class='margin-top-0'>Dropdown selection will reveal the respective checkbox.</p>",
        },
        {
          key: 'checkbox',
          type: 'select',
          defaultValue: 'select',
          templateOptions: {
            label: 'Checkbox Dropdown',
            options: [
              { label: '- Select -', value: 'select' },
              { label: 'select checkbox to agree', value: 'agree' },
              { label: 'select checkbox to disagree', value: 'disagree' },
            ],
          },
        },
        {
          key: 'agree',
          type: 'multicheckbox',
          hideExpression: (model) => this.model.checkbox !== 'agree',
          templateOptions: {
            options: [
              {
                label: 'I agree',
                value: 'agree',
              },
            ],
          },
        },
        {
          key: 'disagree',
          type: 'multicheckbox',
          hideExpression: (model) => this.model.checkbox !== 'disagree',
          templateOptions: {
            options: [
              {
                label: 'I disagree',
                value: 'disagree',
              },
            ],
          },
        },
      ],
    },
    {
      wrappers: ['filterwrapper'],
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Hide Input :</h4><p class='margin-top-0'>Clicking on checkbox will hide the input field.</p>",
        },
        {
          key: 'inputField',
          type: 'input',
          hideExpression: (model) => this.model.firstField,
          templateOptions: {
            placeholder:
              'selection of checkbox below will hide this input field.',
          },
        },
        {
          key: 'firstField',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                label: 'Hide Above Input Field',
              },
            ],
          },
        },
      ],
    },
    {
      wrappers: ['filterwrapper'],
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Disabled Input :</h4><p class='margin-top-0'>Type in First Name input will enabled the Last Name input field.</p>",
        },
        {
          key: 'hideExistingFirstName',
          type: 'input',
          templateOptions: {
            label: 'Frist Name',
            placeholder: 'Type here to see the other field become enabled...',
          },
        },
        {
          key: 'text2',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            placeholder:
              'This one is disabled if there is no text in the other input',
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.hideExistingFirstName',
          },
        },
      ],
    },
    {
      wrappers: ['filterwrapper'],
      fieldGroup: [
        {
          template:
            "<h4 class='margin-top-5 margin-bottom-1'>Cascaded :</h4><p class='margin-top-0'>Cascaded Select value chage base on the another dropdown (using observable).</p>",
        },
        {
          key: 'sport',
          type: 'select',
          templateOptions: {
            label: 'First Select',
            options: [
              { id: '1', name: 'Option1' },
              { id: '2', name: 'Option2' },
            ],
            hideLabel: true,
            configuration: this.settings,
            model: this.autocompleteModel,
            valueProp: 'id',
            labelProp: 'name',
          },
        },
        {
          key: 'team',
          type: 'select',
          templateOptions: {
            label: 'Second Select',
            options: [],
            valueProp: 'id',
            labelProp: 'name',
          },
          hooks: {
            onInit: (field) => {
              const teams = [
                {
                  id: '1',
                  name: 'Option1 (FirstSelect- Option1)',
                  sportId: '1',
                },
                {
                  id: '2',
                  name: 'Option1 (FirstSelect- Option2)',
                  sportId: '1',
                },
                {
                  id: '3',
                  name: 'Option2 (FirstSelect- Option1)',
                  sportId: '2',
                },
                {
                  id: '4',
                  name: 'Option2 (FirstSelect- Option2)',
                  sportId: '2',
                },
              ];
              const sportControl = this.form.get('sport');
              field.templateOptions.options = sportControl.valueChanges.pipe(
                startWith(sportControl.value),
                map((sportId) =>
                  teams.filter((team) => team.sportId === sportId)
                ),
                tap(() => field.formControl.setValue(null))
              );
            },
          },
        },
        {
          key: 'player',
          type: 'select',
          templateOptions: {
            label: 'Third Select',
            options: [],
            valueProp: 'id',
            labelProp: 'name',
          },
          hooks: {
            onInit: (field) => {
              const players = [
                {
                  id: '1',
                  name: 'Option1 (Option1 (FirstSelect- Option1))',
                  teamId: '1',
                },
                {
                  id: '2',
                  name: 'Option2 (Option1 (FirstSelect- Option1))',
                  teamId: '1',
                },
                {
                  id: '3',
                  name: 'Option1 (Option1 (FirstSelect- Option2))',
                  teamId: '2',
                },
                {
                  id: '4',
                  name: 'Option2 (Option1 (FirstSelect- Option2))',
                  teamId: '2',
                },
                {
                  id: '5',
                  name: 'Option1 (Option2 (FirstSelect- Option1))',
                  teamId: '3',
                },
                {
                  id: '6',
                  name: 'Option2 (Option2 (FirstSelect- Option1))',
                  teamId: '3',
                },
                {
                  id: '7',
                  name: 'Option1 (Option2 (FirstSelect- Option2))',
                  teamId: '4',
                },
                {
                  id: '8',
                  name: 'Option2 (Option2 (FirstSelect- Option2))',
                  teamId: '4',
                },
              ];
              const teamControl = this.form.get('team');
              field.templateOptions.options = teamControl.valueChanges.pipe(
                startWith(teamControl.value),
                map((teamId) =>
                  players.filter((player) => player.teamId === teamId)
                ),
                tap(() => field.formControl.setValue(null))
              );
            },
          },
        },
      ],
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe((res) => (this.results = res));
  }
}
