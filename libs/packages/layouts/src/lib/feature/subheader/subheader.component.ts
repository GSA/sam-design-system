import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
} from '@angular/core';
import { SdsDrawerCommunicationService } from './drawer-communication.service';

@Component({
  selector: 'sds-subheader',
  templateUrl: 'subheader.component.html',
  styleUrls: ['subheader.component.scss'],
})
export class SdsSubheaderComponent {
  constructor() {}
}

@Component({
  selector: 'sds-subheader-actions',
  templateUrl: 'subheader-actions.component.html',
})
export class SdsSubheaderActionsComponent {
  @Input() model;
  @Output() clicks = new EventEmitter<string>();
  constructor() {}
}

@Component({
  selector: 'sds-subheader-drawer',
  templateUrl: 'subheader-drawer.component.html',
})
export class SdsSubheaderDrawerComponent implements OnInit {
  @Input() drawerContentTemplate: TemplateRef<any>;
  @Output() isDrawerOpen = new EventEmitter<boolean>();
  isOpen = false;

  constructor(public data: SdsDrawerCommunicationService) {}
  onDrawerOpenClose(ev) {
    this.isOpen = !this.isOpen;
    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);
  }
  ngOnInit() {}
}

@Component({
  selector: 'sds-drawer-content',
  templateUrl: 'drawer.content.component.html',
})
export class SdsDrawerContentComponent implements OnInit {
  drawerContentTemplate: TemplateRef<any>;
  isDrawerOpen = false;

  constructor(public data: SdsDrawerCommunicationService) {}
  ngOnInit() {
    this.data.contentTemplate.subscribe(
      (template) => (this.drawerContentTemplate = template)
    );
    this.data.isDrawerOpen.subscribe((open) => (this.isDrawerOpen = open));
  }
}
