import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sds-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['roadmap.component.scss']
})
export class RoadmapComponent {
  readonly DONE = 'DONE';
  readonly IN_PROGRESS = 'IN PROGRESS';
  readonly UPCOMING = 'UPCOMING';

  sections = [
    {
      sectionLabel: 'Components',
      sectionFeatures: [
        { label: 'Collapse', status: this.DONE },
        { label: 'Actions', status: this.DONE },
        { label: 'Accordian', status: this.DONE },
        { label: 'Modal Dialog', status: this.DONE },
        { label: 'External Link', status: this.DONE },
        { label: 'Pagination', status: this.DONE },
        { label: 'Side Navigation', status: this.DONE },
        { label: 'Result List', status: this.DONE },
        { label: 'Search', status: this.DONE },
        { label: 'Autocomplete', status: this.DONE },
        { label: 'Video Player', status: this.DONE },
        { label: 'Tooltip', status: this.DONE },
        { label: 'Popover', status: this.DONE },
        { label: 'Filters', status: this.DONE },
        { label: 'Toasts', status: this.DONE },
        { label: 'Button Group', status: this.DONE },
        { label: 'Selection Panel', status: this.DONE },
        { label: 'Icons', status: this.DONE },
        { label: 'Table', status: this.DONE }
      ]
    },
    {
      sectionLabel: 'Form Controls',
      sectionFeatures: [
        { label: 'Dialog', status: this.DONE },
        { label: 'Text Area', status: this.DONE },
        { label: 'Checkbox', status: this.DONE },
        { label: 'Multi-checkbox', status: this.DONE },
        { label: 'Radio', status: this.DONE },
        { label: 'Select', status: this.DONE },
        { label: 'Autocomplete', status: this.DONE },
        { label: 'File Info', status: this.DONE },
        { label: 'Datepicker', status: this.DONE },
        { label: 'Search', status: this.DONE },
        { label: 'Text', status: this.DONE },
        { label: 'Input', status: this.DONE },
        { label: 'Label', status: this.DONE },
        { label: 'Description', status: this.DONE },
        { label: 'Validation', status: this.DONE },
        { label: 'Form Field', status: this.DONE },
        { label: 'Filter', status: this.DONE },
        { label: 'Accordian', status: this.DONE },
        { label: 'Group', status: this.DONE },
        { label: 'Template Options', status: this.DONE },
        { label: 'Readonly', status: this.DONE },
      ]
    },
    {
      sectionLabel: 'Layout',
      sectionFeatures: [
        { label: 'Header', status: this.DONE },
        { label: 'Footer', status: this.DONE },
        { label: 'Subheader', status: this.DONE },
        { label: 'Results Layout', status: this.DONE },
        { label: 'Responsive Layout', status: this.DONE },
        { label: 'System Alerts', status: this.DONE },
      ]
    }
  ];

  constructor() {}
}
