import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'expires-configurable',
  templateUrl: './expires-configurable.component.html',
})
export class ExpiresConfigurable implements OnInit {
  private timeoutObj: NodeJS.Timeout = null;
  @Input('expiresString')
  set expiresString(expiresString: string) {
    this._expiresString = expiresString;
    clearTimeout(this.timeoutObj);
    const timeUntilExpires = Date.parse(new Date(expiresString).toLocaleString()) - Date.now();
    this.startTimeout(timeUntilExpires);
  }

  _expiresString: string = null;
  _expired: boolean = false;
  constructor() {}

  ngOnInit(): void {
    const timeUntilExpires = Date.parse(new Date(this._expiresString).toLocaleString()) - Date.now();
    this.startTimeout(timeUntilExpires);
  }

  startTimeout(duration: number) {
    if (duration < 1) {
      return;
    }
    this.timeoutObj = setTimeout(() => {
      this._expiresString = new Date(new Date(this._expiresString).valueOf() - 1000).toLocaleString();
      this._expired = true;
    }, duration);
  }
}
