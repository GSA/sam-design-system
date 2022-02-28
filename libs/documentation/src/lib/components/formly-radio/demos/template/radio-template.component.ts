import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-radio-template',
  templateUrl: './radio-template.component.html',
  styleUrls: ['./radio-template.component.scss']
})
export class RadioTemplateComponent implements AfterViewInit{

  @ViewChild('radioTemplate') radioTemplate : TemplateRef<any>

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',

      templateOptions: {
        required: true,
        options: [
          {
            key: 'ccorp',
            value: 'Register for Financial Assistance Awards Only ',
            subText: [
              'To apply for grants and loans as described by 2 CFR 200.',
              'Includes getting a unique entity ID and entity registration.'
            ],
            linkText: 'What do I need for registration?',
            icon: 'uswds-attach-money',
          },
          {
            key: 'nonprofit',
            value: 'Register for All Awards',
            subText: [
              'To bid on federal contracts and other procurements, as described by the Federal Acquisition Regulation (FAR).',
              'To apply for grants and loans as described by 2 CFR 200.'
            ],
            linkText: 'What do I need for registration?',
            icon: 'award',
            iconClass: 'text-secondary'
          },
          {
            key: 'partnerllc',
            value: 'Get a Unique Entity ID Only',
            subText: [
              'May be required to report subawards, such as federal subcontractors or sub-grants.',
              'You will get a unique entity ID. This is NOT an entity registration.',
            ],
            linkText: 'What\'s the difference between getting a UEI only and registration',
            icon: 'uswds-identification',
          }
        ],
      },
      modelOptions: {
        updateOn: 'blur',
      },
      lifecycle: {
        onChanges: function (form, field) {
          field.formControl.valueChanges.subscribe((v) => {
            console.log(form['controls']['entity']);
          });
        },
      },
    },
  ];

  onModelChange($event) {
    console.log($event);
  }
  ngAfterViewInit(){
    this.fields[0].templateOptions.template = this.radioTemplate;

  }
}
