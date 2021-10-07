import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
} from '@angular/core';
import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';
import { Router } from '@angular/router';

@Component({
  selector: 'sds-subheader-wrapper',
  templateUrl: 'sds-subheader-wrapper.component.html'
})
export class SdsSubheaderWrapperComponent {

  constructor(private router: Router) {}

  @Input() backbuttonBehavior: INavigationLink;

  @Input() title: string;

  @Input() mode: SubHeaderWrapperMode; //Button/Fields Appear

  @Input() tabs: INavigationLink[];

  @Output() action = new EventEmitter<string>();

  HeaderMode = SubHeaderWrapperMode;

  public backClick(): void {
    if (!this.backbuttonBehavior) {
      window.history.back();
    }

    switch (this.backbuttonBehavior.mode) {
      case NavigationMode.INTERNAL:
        this.router.navigate([this.backbuttonBehavior.route]);
        break;
      case NavigationMode.EXTERNAL:
        window.location.href = this.backbuttonBehavior.route;
        break;
      default:
        window.history.back();
    }
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

