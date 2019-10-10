import { Component } from '@angular/core';

@Component({
  selector: 'sds-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class SdsTopBannerComponent {
  showDetail = false;

  toggleDetails() {
    this.showDetail = !this.showDetail;
  }

  closeDetail() {
    if (this.showDetail) {
      this.showDetail = false;
    }
  }
}
