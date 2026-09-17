import { Injectable, Inject, DOCUMENT } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class NgbRTL {
  private _element: HTMLHtmlElement;

  constructor(@Inject(DOCUMENT) document: any) {
    this._element = document.documentElement;
  }

  isRTL() {
    return (this._element.getAttribute('dir') || '').toLowerCase() === 'rtl';
  }
}
