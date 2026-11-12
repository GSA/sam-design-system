import { Component } from '@angular/core';

import { Toast } from 'ngx-toastr';

@Component({
  selector: 'sds-toast',
  // ngx-toastr v20 supplies the enter/exit classes and duration on the host;
  // custom components must supply their own fade styles.
  styles: [
    `
      :host {
        position: relative;
      }
      :host.toast-in {
        animation: toast-fade var(--animation-duration) var(--animation-easing);
      }
      :host.toast-out {
        animation: toast-fade var(--animation-duration) var(--animation-easing) reverse forwards;
      }
      @keyframes toast-fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
  templateUrl: './toast-single.component.html',
  preserveWhitespaces: false,
  standalone: false,
})
export class SdsToastComponent extends Toast {
  action(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }

  getIcon(toastType) {
    switch (toastType) {
      case 'sds-toast--success':
        return 'check2-circle';
      case 'sds-toast--info':
        return 'info-circle';
      case 'sds-toast--warning':
        return 'exclamation-triangle';
      case 'sds-toast--error':
        return 'slash-circle';
      default:
        return 'info-circle';
    }
  }
  getToastSr(toastType) {
    switch (toastType) {
      case 'sds-toast--success':
        return 'Success';
      case 'sds-toast--info':
        return 'Info';
      case 'sds-toast--warning':
        return 'Warning';
      case 'sds-toast--error':
        return 'Error';
      default:
        return 'Info';
    }
  }
}
