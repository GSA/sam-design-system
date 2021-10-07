import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
} from '@angular/core';
import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';

@Component({
  selector: 'sds-subheader-wrapper',
  templateUrl: 'sds-subheader-wrapper.component.html'
})
export class SdsSubheaderWrapperComponent {

  constructor() { }

  @Input() backbuttonBehanvor; //URL/Use standard browser

  @Input() title: string;

  @Input() mode: SubHeaderWrapperMode; //Button/Fields Appear

  @Input() tabs: INavigationLink;

  @Output() action = new EventEmitter<string>();

  HeaderMode = SubHeaderWrapperMode;

  public backClick() {

  }

}



export enum SubHeaderWrapperMode {
  CUSTOM,
  //Accept and Reject buttons
  REQUEST,//(Accept/Reject),
  //
  SEARCH,
  //
  TAB

}

