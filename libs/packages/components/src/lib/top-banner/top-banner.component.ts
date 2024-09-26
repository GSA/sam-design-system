import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class SdsTopBannerComponent {
  showDetail = false;
  @Input() description = '';

  @Input() flagPath = 'assets/uswds/img/us_flag_small.png';

  toggleDetails() {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
    if (!this.flagPath) {
      this.flagPath = 'assets/uswds/img/us_flag_small.png';
    }
  }

  closeDetail() {
    if (this.showDetail) {
      this.showDetail = false;
    }
  }
}
