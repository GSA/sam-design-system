import { Component, OnInit, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadDisplayComponent } from './download-modal-display.component';

@Component({
  selector: 'gsa-sam-downloadbasic',
  templateUrl: 'download-basic.component.html'
})
export class DownloadBasic implements OnInit {
  @Input() message: string;
  submitted = null;

  constructor(private dialogService: SdsDialogService) {}

  ngOnInit() {}

  openModal() {
    this.submitted = null;
    this.dialogService
      .open(SdsDownloadDisplayComponent)
      .afterClosed()
      .subscribe(res => (this.submitted = res));
  }
}
