import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: `expires-basic-demo`,
  templateUrl: './expires-basic.component.html',
})
export class ExpiresBasicComponent implements OnInit, OnDestroy {
  expireFifteenSeconds: string;

  /**
   * Timer that stops after 15 seconds in order to force change detection and re-evaluate
   * the expires directive.
   * */
  timer: any;

  ngOnInit() {
    this.expireFifteenSeconds = new Date(new Date().valueOf() + 15000).toLocaleString();
    this.timer = setTimeout(() => {
      this.expireFifteenSeconds = new Date(new Date(this.expireFifteenSeconds).valueOf() - 1000).toLocaleString();
    }, 15000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
