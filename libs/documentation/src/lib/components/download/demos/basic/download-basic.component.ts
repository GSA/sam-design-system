import { Component, Inject } from '@angular/core';
import {
  SdsDownloadService,
  SdsDownloadRef,
  SDS_DOWNLOAD_DATA
} from '@gsa-sam/components';

export interface DownloadData {
  animal: string;
  name: string;
}

export interface AlertData {
  title: string;
  content: string;
}

@Component({
  selector: 'sds-download-sample-data',
  templateUrl: 'overview/template.html'
})
export class DownloadOverviewExampleDownload {
  constructor(
    public downloadRef: SdsDownloadRef<DownloadOverviewExampleDownload>,
    @Inject(SDS_DOWNLOAD_DATA) public data: DownloadData
  ) {}

  onNoClick(): void {
    this.downloadRef.close();
  }
}

/**
 * NESTED
 * ================================================
 */
@Component({
  selector: 'sds-download-sample-nested',
  template: `
    <button class="usa-button" (click)="openDownload()">
      Open another download
    </button>
  `
})
export class NestedDownloadComponent {
  animal: string;
  name: string;
  constructor(public download: SdsDownloadService) {}
  openDownload(): void {
    const downloadRef = this.download.open(DownloadOverviewExampleDownload, {
      width: 'small',
      data: { name: this.name, animal: this.animal }
    });

    downloadRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}

/**
 * ALERTS
 * ================================================
 */
// Error
@Component({
  selector: 'sds-download-sample-alert',
  templateUrl: './alert/template.html'
})
export class AlertComponent {
  constructor(@Inject(SDS_DOWNLOAD_DATA) public data: AlertData) {}
}

/**
 * OFFICIAL
 * ================================================
 */
@Component({
  selector: 'sds-download-sample-official',
  templateUrl: './official/template.html'
})
export class OfficialComponent {}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
  selector: 'sds-modal-sample',
  templateUrl: 'download-basic.component.html'
})
export class DownloadBasic {
  animal: string;
  name: string;

  constructor(public download: SdsDownloadService) {}

  openDownload(): void {
    const downloadRef = this.download.open(DownloadOverviewExampleDownload, {
      width: 'medium',
      data: { name: this.name, animal: this.animal }
    });

    downloadRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  openNestedDownload() {
    const downloadRef = this.download.open(NestedDownloadComponent);
  }

  openAlert(title, content, alert, size) {
    const downloadRef = this.download.open(AlertComponent, {
      alert: alert,
      width: size,
      data: { title: title, content: content }
    });
  }

  openOfficial() {
    const downloadRef = this.download.open(OfficialComponent, {
      width: 'large'
    });
  }
}
