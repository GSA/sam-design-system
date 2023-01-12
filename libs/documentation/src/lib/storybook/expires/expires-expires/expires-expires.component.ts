import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expires-expires',
  templateUrl: './expires-expires.component.html',
})
export class ExpiresExpiresComponent implements OnInit {
  _expiresString: string = null;
  _expired: boolean = false;
  secondsToExpire: number = 15;

  constructor() {}

  ngOnInit(): void {
    this._expiresString = new Date(Date.now() + this.secondsToExpire * 1000).toLocaleString();
    const timeUntilExpires = Date.parse(new Date(this._expiresString).toLocaleString()) - Date.now();
    this.startTimeout(timeUntilExpires);
  }

  startTimeout(duration: number) {
    if (duration < 1) {
      return;
    }
    setTimeout(() => {
      this._expiresString = new Date(new Date(this._expiresString).valueOf() - 1000).toLocaleString();
      this._expired = true;
    }, duration);
  }
}
