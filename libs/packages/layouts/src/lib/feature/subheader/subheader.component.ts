import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sds-subheader',
  templateUrl: 'subheader.component.html'
})
export class SdsSubheaderComponent {
  constructor() {}
}

@Component({
  selector: 'sds-subheader-buttons',
  templateUrl: 'subheader-buttons.component.html'
})
export class SdsSubheaderButtonsComponent {
  @Input() model;
  @Output() clicks = new EventEmitter<string>();
  constructor() {}
}

@Component({
  selector: 'sds-subheader-search',
  templateUrl: 'subheader-search.component.html'
})
export class SdsSubheaderSearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  constructor() {}
}

@Component({
  selector: 'sds-subheader-actions',
  templateUrl: 'subheader-actions.component.html'
})
export class SdsSubheaderActionsComponent {
  @Input() model;
  @Output() clicks = new EventEmitter<string>();
  constructor() {}
}

@Component({
  selector: 'sds-subheader-drawer',
  templateUrl: 'subheader-drawer.component.html'
})
export class SdsSubheaderDrawerComponent {
  @Output() isDrawerOpen = new EventEmitter<boolean>();
  @Input() contentTemplate: TemplateRef<any>;
  constructor() {}
}
