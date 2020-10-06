/** */
import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger
  } from '@angular/animations';
  import { Component } from '@angular/core';
  
  import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
  import { sds } from '@gsa-sam/sam-styles/src/icons/';
  
  @Component({
    selector: 'sds-toast',
    styles: [`
    :host {
      position: relative;
    }
    
  `],
  templateUrl: './toast-single.component.html',
  animations: [
      trigger('flyInOut', [
        state('inactive', style({
          opacity: 0,
        })),
        transition('inactive => active', animate('400ms ease-out', keyframes([
          style({
            transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
            opacity: 0,
          }),
          style({
            transform: 'skewX(20deg)',
            opacity: 1,
          }),
          style({
            transform: 'skewX(-5deg)',
            opacity: 1,
          }),
          style({
            transform: 'none',
            opacity: 1,
          }),
        ]))),
        transition('active => removed', animate('400ms ease-out', keyframes([
          style({
            opacity: 1,
          }),
          style({
            transform: 'translate3d(100%, 0, 0) skewX(30deg)',
            opacity: 0,
          }),
        ]))),
      ]),
    ],
    preserveWhitespaces: false,
  })
  export class SdsToastComponent extends Toast {

    constructor(
      protected toastrService: ToastrService,
      public toastPackage: ToastPackage
    ) {
      super(toastrService, toastPackage);
  
    }
  
    action(event: Event) {
      event.stopPropagation();
      this.toastPackage.triggerAction();
      return false;
    }

      getIcon(toastType) {
      switch (toastType) {
        case "toast-success": return 'check-circle';
        case "toast-info": return 'alert-info';
        case "toast-warning": return 'alert-warning';
        case "toast-error": return 'alert-error';
        default: return 'alert-info';
      }
    }
  }
  