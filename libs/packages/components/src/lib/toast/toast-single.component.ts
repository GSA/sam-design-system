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
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition(
        'inactive => active',
        animate('{{ easeTime }}ms {{ easing }}')
      ),
      transition(
        'active => removed',
        animate('{{ easeTime }}ms {{ easing }}')
      )
    ])
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
        case "sds-toast--success": return 'check-circle';
        case "sds-toast--info": return 'alert-info';
        case "sds-toast--warning": return 'alert-warning';
        case "sds-toast--error": return 'alert-error';
        default: return 'alert-info';
      }
    }
    getToastSr(toastType) {
      switch (toastType) {
        case "sds-toast--success": return 'Success';
        case "sds-toast--info": return 'Info';
        case "sds-toast--warning": return 'Warning';
        case "sds-toast--error": return 'Error';
        default: return 'Info';
      }
    }

  }
  