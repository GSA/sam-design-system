import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-ellipsis',
  templateUrl: './formly-ellipsis.component.html'
})

export class FormlyEllipsisComponent implements OnInit {

  tags:any= [{
    "id": 1,
    "title": "Release Notes Posted",
    "date": "Nov 9, 2019",
    "description": "The SAM.gov November 9, 2019 release notes are posted. Remember, you can find release notes for all SAM.gov software releases at SAM.gov."
  },
  {
    "id": 2,
    "title": "NIA Extension for Hurricane Maria",
    "date": "Oct 7, 2019",
    "description": "The expiration date for National Interest Action value 'Hurricane Maria 2017' has been extended to 10/15/2019 in FPDS Production. National Interest Action value 'Hurricane Maria 2017' (code H17M) is valid from 09/20/2017 to 10/15/2019."
  },
  {
    "id": 3,
    "title": "Help Desk End-of-Year Support",
    "date": "Oct 7, 2019",
    "description": "With the fiscal year ending on Monday, September 30, 2019, the FPDS Tier 2 Support Desk hours will be extended beginning on Friday, September 27 at 8:00 PM (EDT) and continuing through Monday, September 30 at 11:59 PM (EDT)."
  }]


  form = new FormGroup({});
  model: any = {};
  options:any=null;
 
 
  fields: FormlyFieldConfig[] = [      
    {
      fieldGroup: [
        {
          template: '',
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
